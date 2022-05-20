import type { NextPage } from "next";
import StonkGrabber  from "./stock-grabbers/multi-stocks";
import { Input, useColorModeValue, SimpleGrid, GridItem, useColorMode, Heading, Text, Button, Select, Container, Flex, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";



const StockInput = () => {
  const { toggleColorMode } = useColorMode();
  const [stockInput, setStockInput] = useState("")
  

  const defaultStocksTest = ['GOLD','PLTM','BTC','SPY']
  var stockInputArray = StonkGrabber(defaultStocksTest);

  //This function is used to get and set the value of the Input text area
  function getInput(inputstring) {
    setStockInput(inputstring)
  }

  function searchStock(stockyinput) {
    stockInputArray = StonkGrabber([stockyinput])
  }

  const bgColor = useColorModeValue('gray.50','whiteAlpha.50');
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
    
    <VStack>
      <Heading>Get Stock Price</Heading>
      <Text>Enter in ticker symbol to get stock price.</Text>
    </VStack>

    <SimpleGrid columns={2}>
      <GridItem colSpan={2}>
        <Input placeholder='AAPL' value={stockInput} onChange={(e) => getInput(e.target.value)}></Input>
        <Button onClick={response => StonkGrabber([stockInput])}>Get price</Button>
        {stockInputArray}
        {stockInput}

      </GridItem>
    </SimpleGrid>

    </VStack>

);
};

export default StockInput;
