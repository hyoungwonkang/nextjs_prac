import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CartContext from "../lib/context/Cart";
import graphql from "../lib/graphql";
import getProductById from "../lib/graphql/queries/getProductById";
import getStripe from "../lib/stripe";

export default function Cart() {
    const { items } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const hasProducts = Object.keys(items).length;

    useEffect(()=>{
        if(!hasProducts) return;

        graphql.request(getProductById, {
            ids: Object.keys(items),
        })
        .then((data)=>{
            setProducts(data.products);
        })
        .catch((err) => console.log(err));
    },[JSON.stringify(products)]);

    function getTotal() {
        if(!products.length) return 0;

        // 결제 시스템으로 사용할 Stripe는 가격이 정수 형태가 되어야 함
        // 예를 들어 가격이 €4.99라면, 499로 써야 함
        // 따라서 여기서는 가격을 100으로 나누어서 표시함
        // hygraph에서 가져온 가격은 Stripe에서 그대로 사용할 수 있는 정수 형태의 가격임
        return Object.keys(items)
        .map((id)=>
            products.find((product) => product.id === id).price
            * (items[id] / 100)).reduce((x,y)=>x+y).toFixed(2);
    }

    async function handlePayment() {
        const stripe = await getStripe();
        const res = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items,
            }),
        });
        const { session } = await res.json();
        await stripe.redirectToCheckout({
            sessionId: session.id,
        });
    }

    return (
        <Box rounded="xl" boxShadow="2xl" w="container.lg" p="16" bgColor="white">
            <Text as="h1" fontSize="2xl" fontWeight="bold">
                장바구니
            </Text>
            <Divider my="10" />
            <Box>
                {!hasProducts ? (
                    <Text>장바구니가 비어있습니다.</Text>
                ):(
                    <>
                        {products.map((product) => (
                            <Flex key={product.id} justifyContent="space-between" mb="4">
                                <Box>
                                    <Link href={`/product/${product.slug}`} passHref>
                                        <Text
                                            fontWeight="bold"
                                            _hover={{textDecoration: 'underline',
                                            color: 'blue.500' }}>
                                            {product.name}
                                            <Text as="span" color="gray.500">
                                                {''}
                                                x{items[product.id]}
                                            </Text>
                                        </Text>
                                    </Link>
                                </Box>
                                <Box>
                                    €{(items[product.id] *
                                    (product.price / 100)).toFixed(2)}
                                </Box>
                            </Flex>
                        ))}
                        <Divider my="10" />
                        <Flex
                            alignItems="center"
                            justifyContent="space-between">
                            <Text fontSize="xl" fontWeight="bold">
                                Total: €{getTotal()}
                            </Text>
                            <Button colorScheme="blue" onClick={handlePayment}>
                                결제하기
                            </Button>
                        </Flex>
                    </>
                )}
            </Box>
        </Box>
    )
}