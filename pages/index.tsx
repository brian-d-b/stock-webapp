//This is the main page for localhost

import { Box, UnorderedList, ListItem, Divider, VStack, SimpleGrid, GridItem, Text, Center, Container, Flex, Heading, Grid} from "@chakra-ui/layout";
import type { NextPage } from "next";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";
import SearchStocks from "../src/sections/searchstocks";
import TradingViewCharty from "../src/sections/tvchart"
import FinvizDisplay from "../src/sections/finviz";
import Header from "../src/sections/header";
import { useBreakpointValue, Image } from '@chakra-ui/react';


const Home: NextPage = () => (


    <div style={{ backgroundImage:`url(https://i.pinimg.com/736x/9f/3f/ef/9f3fefe825700bd6eaf0e307b016c381.jpg)`,backgroundSize:"contain"}}>
    <Center>
    <Box paddingY='20px' width='full'>
    <VStack>
        <Center><Header/></Center>
    </VStack>
    <VStack paddingY='20px'><SearchStocks/></VStack>
    <VStack paddingY='20px'><TradingViewCharty/></VStack>
    <VStack paddingY='20px'><FinvizDisplay/></VStack> 
    </Box>
    </Center>

    </div>
);

export default Home;
