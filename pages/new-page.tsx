import { Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../src/sections/cart"
import Details from "../src/sections/details"


const IndexPage: NextPage = () => (
  <Container maxWidth = "container.sm" padding={0}>
    <Flex h="100vh" py={20}>
    <Details />
    <Cart />
    </Flex>
    
  </Container>
);

export default IndexPage;
