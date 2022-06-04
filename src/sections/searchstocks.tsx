import React, { useState, useEffect } from "react";
import { Divider, Center, GridItem, SimpleGrid, Tbody, Td, TableCaption, ListIcon, Show, Hide, TableContainer, Table, Tr, Th, Thead, HStack, List, ListItem, Box, Container, Flex, VStack, Heading, Text, Input, Button } from "@chakra-ui/react"
import { SunIcon, ArrowUpIcon, ArrowForwardIcon, ArrowDownIcon, UpDownIcon } from '@chakra-ui/icons'


export default function StockSearch() {
  //This sets the react hook for the output of stock data
  const [posts, setPosts] = useState(<Container></Container>);
  //This sets the react hook for symbols to be AAPL, TSLA, GOLD, SLV. Updated via user input
  const [symbols, SetSymbols] = useState(['AAPL','TSLA','GOLD','SLV','UUUU','KO',])
    //This sets the react hook for the text-input for stock search text box
  const [inputValue, setInputValue] = useState('')


  //This function is what returns the formatted stock output seen on the screen
  function formatStockDisplay(resultArray : any[]=[]) {

    function priceSymbol(stonkPriceChange=0.0) {
      if (stonkPriceChange < 0.0) {return(<ArrowDownIcon boxSize='20px'></ArrowDownIcon>)}
      else if (stonkPriceChange > 0.0) {return(<ArrowUpIcon boxSize='20px'></ArrowUpIcon>)}
      else if (stonkPriceChange == 0.0) {return(<ArrowForwardIcon boxSize='20px'></ArrowForwardIcon>)}
    }

    const listSymbols = resultArray.map((symbol) =>
          <Tr><Td><Text fontSize='2xl'>{symbol[0]}</Text></Td><Td><Text fontSize='2xl'>{symbol[1].toFixed(2)}$</Text></Td><Td><Center><HStack><Text fontSize='2xl'>{symbol[2]}%</Text>{priceSymbol(symbol[2])}</HStack></Center></Td></Tr>

      );

    const listySymbols = (
      <TableContainer>
        <Table variant='simple' rowGap='40px'>
          <Thead>
            <Th><Text fontSize='xl'>Symbol</Text></Th>
            <Th><Text fontSize='xl'>Price</Text></Th>
            <Th><Text fontSize='xl'>Daily Change</Text></Th>
          </Thead>
          <Tbody>
            {listSymbols}
          </Tbody>
        </Table>
      </TableContainer>
    )


      return (<Show breakpoint="(min-width: 400px"><Box>{listySymbols}</Box></Show>)
  }

  //This function will edit the GET request to request for the user-provided stocks
  function formatStockURL() {
    console.log("Formatting symbols for: ", {symbols})
    const baseURL = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=';
    var URLbuilder = '';

    //If we are only looking up one stock, we just want to append the symbol and return
    if (symbols.length == 1) {
      return baseURL.concat(symbols[0]);
    }
    //Otherwise, we want to loop through the array and append
    else {
      for (let i = 0; i < symbols.length; i++) {
        URLbuilder = URLbuilder.concat(symbols[i],'%2C');
      }
      //We just need to delete the last 'comma' inserted, aka the %2C
      URLbuilder = URLbuilder.substring(0,URLbuilder.length - 3);
      console.log("URLBUilt: ",URLbuilder);
      return baseURL.concat(URLbuilder);

    }
  }

  //Each time the button is pressed, or when the page is first loaded, this grabs the API data
  const fetchPost = async () => { 
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: formatStockURL(),
      params: {modules: 'defaultKeyStatistics,assetProfile'},
     headers: {
       'x-api-key': '3WtamPEn6CaP0O4rrs4m9500HJgcQPId5Xw42LgP'
     }
    };
  
    console.log("Making GET Request");
    var getPrice = axios.request(options).then((response:any) => {
     //This logs the entire output to console for testing purposes / inspecting
     console.log(response);

     //Initializes the loop and creates an array to export data to [[symbol,price],[symbol,price],..]
     const numberOfStocks = symbols.length;
     const results:any[] = [];
     //Starts the loop
    for (let i = 0; i < numberOfStocks; i++)
    {
      const symbol = response['data']['quoteResponse']['result'][i]['symbol'];
      const price = response['data']['quoteResponse']['result'][i]['regularMarketPrice'];
      const dailychangetemp = response['data']['quoteResponse']['result'][i]['regularMarketChangePercent']
      const dailychange = parseFloat(dailychangetemp).toFixed(2);
      results.push([symbol,price,dailychange]);
      console.log("pushing",results)
      const formattedResults = formatStockDisplay(results)  
      if (i == numberOfStocks -1) {setPosts(formattedResults)}
    }
  
    

    }).catch(function (error=[]) {
      console.error(error);
    });
  };

  function updatePost() {
    var inputFormat = []
    inputFormat = [inputValue]
    const formattedInput = inputValue.split(',')
    SetSymbols(formattedInput)
    console.log("Symbols: ",symbols)

  }

  //Symbols is a dependency in this hook so we get the updated Symbols list each time we call the API
  useEffect(() => {
    console.log("Updating request")
    fetchPost();
    console.log("UseEffect Symbols: ",inputValue)
  }, [symbols]);


  return (
    <Box
      paddingY={10}
      alignItems="center"
      bg={'teal.100'}
      border='40px'
      borderRadius='40px'
      width='full'
    >
    
    <VStack paddingY='10px'>
      <Heading>Get Stock Price 😎</Heading>
      <Text>Enter in ticker symbol to get stock price.</Text>
    </VStack>

    
    <Box paddingY='20px'><Center>{posts}</Center></Box>

    <VStack align={'center'}>
      <SimpleGrid columns={1} spacingY='10px'>
        <GridItem paddingY='20px'><Center><Text><b>Search for stock prices, separate by commas</b></Text></Center></GridItem>
        <GridItem><Center><Input placeholder='AAPL,MSFT,GLD,TSLA' value={inputValue} onChange={e => setInputValue(e.target.value)}></Input></Center></GridItem>
        <GridItem><Center><Button onClick={updatePost}>Submit</Button></Center></GridItem>
        <GridItem paddingY={3}></GridItem>
        <Center><Text fontSize='sm'>Please use "Desktop Mode" if on mobile! 📱</Text></Center>
      </SimpleGrid>
    </VStack>
    </Box>
  );
}