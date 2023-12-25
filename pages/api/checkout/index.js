import Stripe from "stripe";
import graphql from "../../../lib/graphql";
import getProductDetailsById from "../../../lib/graphql/queries/getProductDetailsById";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

// 배송가능 국가 제한
export const shipping_address_collection = {
    allowed_countries: ['KR', 'US', 'JP', 'AU'],
}

export const shipping_options = [
    {
        shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
                amount: 0,
                currency: 'EUR',
            },
            display_name: 'Free Shipping',
            delivery_estimate: {
                minimum: {
                    unit: 'business_day',
                    value: 3,
                },
                maximum: {
                    unit: 'business_day',
                    value: 5,
                },
            },
        },
    },
    {
        shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
                amount: 499,
                currency: 'EUR',
            },
            display_name: 'Next day air',
            delivery_estimate: {
                minimum: {
                    unit: 'business_day',
                    value: 1,
                },
                maximum: {
                    unit: 'business_day',
                    value: 1,
                },
            },
        },
    }
]

export default async function handler(req, res) {
    const { items } = req.body;
    const { products } = await graphql
    .request(getProductDetailsById, {ids: Object.keys(items)});

    const line_items = products.map((product) => ({
        // 사용자가 결제 과정에서 수량을 변경할 수 있도록 합니다.
        adjustable_quantity: {
            enabled: true,
            minimum: 1,
        },
        price_data: {
            //원화는 화폐 단위를 지정할 수 있음.
            currency: 'EUR',
            product_data: {
                name: product.name,
                images: product.images.map((img)=>img.url),
            },
            // 앞서 설명한 바와 같이 hygraph의 제품 가격은 Stripe에서 요구하는
            // 정수 형태를 만족 함.
            // 이를테면 €4.99는 Stripe에 499라고 알려주어야 함.
            unit_amount: product.price,
        },
        quantity: items[product.id],
    }));

    const session = await stripe.checkout.sessions.create({
        mode: 'payment', // "subscription" 또는 "setup"을 지정할 수 있습니다.
        line_items,
        payment_method_types: ['card', 'sepa_debit'],
        // 서버가 현재 URL을 모르기 때문에 현재 환경에 따라서
        // 환경 변수에 URL을 지정해야 함
        // 로컬에서 테스트하는 경우 주소는 http://localhost:3000이 됨.
        shipping_address_collection,
        shipping_options,
        success_url: `${process.env.URL}/order/success`,
        cancel_url: `${process.env.URL}/order/cancel`,
    });
    res.status(201).json({ session });
}