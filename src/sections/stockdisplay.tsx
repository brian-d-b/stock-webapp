import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import { useBreakpointValue, useColorMode, useColorModeValue, Checkbox, Button, Select, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react"
import StonkGrabber from "./stock-grabbers/multi-stocks"
import StonkGrabber2 from "./stock-grabbers/multi-stocks-2"

//Global to grab the data from the API




const StockDisplay = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.600','whiteAlpha.600');
  const textColor = useColorModeValue('blue.600','red.400');
  const colSpan = useBreakpointValue({base:2,md:1});


  const defaultStocks = ['GLD','SLV','BTC','SPY']
  const stockPriceArray = StonkGrabber(defaultStocks);


  return (
  <VStack
    w="full"
    h="full"
    p={10}
    spacing={10}
    alignItems="flex-start"
    bg={bgColor}
    
  >
    <VStack spacing={3} alignItems="flex-start">
      <Heading size='2xl'>Stonks</Heading>
      <Text color={textColor}>These are default stocks</Text>

      {stockPriceArray}
    </VStack>
    


  </VStack>
  );
};

export default StockDisplay;
