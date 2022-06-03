//This is the main page for localhost

import { Box, Divider, VStack, SimpleGrid, GridItem, Text, Center, Container, Flex, Heading, Grid} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
import SearchStocks from "../src/sections/searchstocks";
import TradingViewCharty from "../src/sections/tvchart"
import FinvizDisplay from "../src/sections/finviz";
import Header from "../src/sections/header";
import { useBreakpointValue, Image } from '@chakra-ui/react';


const Home: NextPage = () => (

    <Center>
    <SimpleGrid columns={1} spacing='0px' minChildWidth='600px' maxWidth='full' width='full'>
        <GridItem colSpan={2}>
        <Center><Header/></Center>
        </GridItem>
        <GridItem colSpan={2}>
        <GridItem colSpan={1}>
            <SearchStocks/>
        </GridItem>
        <GridItem colSpan={1}>
            <TradingViewCharty/>
        </GridItem>
        <GridItem colSpan={1}>
            <FinvizDisplay/>
        </GridItem>
        </GridItem>
    </SimpleGrid>    

    </Center>
);

export default Home;
