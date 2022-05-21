//This is the main page for localhost

import { Text, Container, Flex, Heading} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
import SearchStocks from "../src/sections/searchstocks";

const Home: NextPage = () => (
  <Container maxWidth = "container.lg" padding={0}>
    <Heading>Brians Stock Webapp</Heading>
    <Flex 
      h={{base: 'auto', md: "100vh"}}
      py={[0,10,20]}
      direction={{base: 'column-reverse', md: 'row'}}>
    <SearchStocks/>
    <Cart/>
    </Flex>
    
  </Container>
);

export default Home;
