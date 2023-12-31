import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { MdShoppingCart } from "react-icons/md"
import CartContext from "../../lib/context/Cart";

export default function NavBar() {
    const { items } =useContext(CartContext);
    const itemsCount = Object.values(items).reduce((x,y)=>x+y,0);

    return (
        <Box position="fixed" top={0} left={0} w="full" bgColor="white" boxShadow="md">
            <Flex width="container.xl" m="auto" p="5" justifyContent="space-between">
                <Link href="/" passHref>
                    <Text textColor="blue.800" fontWeight="bold" fontSize="2xl" cursor="pointer">
                        Hyoungwon Shop
                    </Text>
                </Link>
                <Box>
                    <Link href="/cart" passHref>
                        <Button>
                            <MdShoppingCart />
                            <Text ml="3">{itemsCount}</Text>
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}