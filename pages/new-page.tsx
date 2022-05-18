import { Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../src/sections/cart"
import Details from "../src/sections/details"
import BTCPrice from "./btc-price";


const IndexPage: NextPage = () => (
  <Container maxWidth = "container.sm" padding={0}>
    <Flex 
      h={{base: 'auto', md: "100vh"}}
      py={[0,10,20]}
      direction={{base: 'column-reverse', md: 'row'}}>
    <Details />
    <Cart />
    <BTCPrice/>
    </Flex>
    
  </Container>
);

export default IndexPage;
