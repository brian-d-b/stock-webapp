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
    <Box padding='5px' width='full'>
    <SimpleGrid columns={1} minChildWidth='full' alignContent='center'>
        <Center>
        <GridItem colSpan={1}>
        <Center><Header/></Center>
        </GridItem>
        </Center>
        <Center>
        <GridItem colSpan={1} paddingY='20px' maxWidth='800px' width='full'>
            <SearchStocks/>
        </GridItem>
        </Center>
        <Center>
        <GridItem colSpan={1} maxWidth='800px' width='full'>
            <TradingViewCharty/>
        </GridItem>
        </Center>
        <Center>
        <GridItem colSpan={1} paddingY='20px' maxWidth='800px' width='full'>
            <FinvizDisplay/>
        </GridItem>
        </Center>
    </SimpleGrid>    
    </Box>
    </Center>

    </div>
);

export default Home;
