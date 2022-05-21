import React, { useState, useEffect } from "react";
import { Divider, Container, Flex, VStack, Heading, Text, Input, Button } from "@chakra-ui/react"

export default function StockSearch() {
  //var symbolArray = ['AAPL','GOLD','PLTM','MSFT','SLV','BTC-USD']
  const [posts, setPosts] = useState<Element | undefined>();
  const [symbols, SetSymbols] = useState(['AAPL','TSLA','GLD','GOLD'])
  const [inputValue, setInputValue] = useState('')


  function formatStockDisplay(resultArray : any[]=[]) {
    const listSymbols = resultArray.map((symbol) =>
      <Heading>{symbol[0]} {" - "} {symbol[1]}</Heading>
      );
      return (<ul>{listSymbols}</ul>)
  }

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
      results.push([symbol,price]);
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

    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="center"
      bg={'gray.200'}
    >
    
    <VStack>
      <Heading>Get Stock Price</Heading>
      <Text>Enter in ticker symbol to get stock price.</Text>
    </VStack>

    
    <VStack>{posts}</VStack>

    <Divider/>
    <VStack align={'center'}>
      <Text>Search for stock prices, separate by commas</Text>
      <Input placeholder='AAPL,MSFT,GLD' value={inputValue} onChange={e => setInputValue(e.target.value)}></Input>
      <Button onClick={updatePost}>Submit</Button>
    </VStack>
    </VStack>
  );
}