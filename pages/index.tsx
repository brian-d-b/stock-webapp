//This is the main page for localhost

import { Text, Container, Flex, Heading} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
import StockDisplay from "../src/sections/stockdisplay";
import StockInput from "../src/sections/stockinput";

const Home: NextPage = () => (
  <Container maxWidth = "container.lg" padding={0}>
    <Heading>Brian's Stock Webapp</Heading>
    <Flex 
      h={{base: 'auto', md: "100vh"}}
      py={[0,10,20]}
      direction={{base: 'column-reverse', md: 'row'}}>
    <StockDisplay/>
    <StockInput/>
    </Flex>
    
  </Container>
);

export default Home;
