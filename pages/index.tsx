//This is the main page for localhost

import { Text, Container, Flex} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
import StockDisplay from "../src/sections/stockdisplay";

const Home: NextPage = () => (
  <Container maxWidth = "container.lg" padding={0}>
    <Flex 
      h={{base: 'auto', md: "100vh"}}
      py={[0,10,20]}
      direction={{base: 'column-reverse', md: 'row'}}>
    <StockDisplay/>
    </Flex>
    
  </Container>
);

export default Home;
