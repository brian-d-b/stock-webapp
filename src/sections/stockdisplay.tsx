import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import { useBreakpointValue, useColorMode, useColorModeValue, Checkbox, Button, Select, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react"
import StonkGrabber from "./stock-grabbers/multi-stocks"

//Global to grab the data from the API




const StockDisplay = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.600','whiteAlpha.600');
  const textColor = useColorModeValue('blue.600','red.400');
  const colSpan = useBreakpointValue({base:2,md:1});

  const stockPriceArray = StonkGrabber();

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
      <Text>{stockPriceArray}</Text>
    </VStack>
    


  </VStack>
  );
};

export default StockDisplay;
