import { Text, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../cart"
import Details from "../details"

import { useEffect, useState } from "react";

export default function StonkGrabber2() {

  const [resultArray, setResultArray] = useState();

// useEffect hooks the market-data (returned as an array)
  useEffect(() => {

    const fetchMarketData = async () => {
      var axios = require("axios").default;
      var options = {
        method: 'GET',
        url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=SLV%2CGLD%2CBTC-USD%2CSPY%2C%3DX',
        params: {modules: 'defaultKeyStatistics,assetProfile'},
       headers: {
         'x-api-key': '3WtamPEn6CaP0O4rrs4m9500HJgcQPId5Xw42LgP'
       }
      };
    
      console.log("Making GET Request");
      var getPrice = axios.request(options).then((response:any) => {
       //This logs the entire output to console for testing purposes / inspecting
 
  
       //Ininitializes the loop and creates an array to export data to [[symbol,price],[symbol,price],..]
       const numberOfStocks = 4;
       const results = [];
       //Starts the loop
      for (let i = 0; i < numberOfStocks; i++)
      {
        const symbol = response['data']['quoteResponse']['result'][i]['symbol'];
        const price = response['data']['quoteResponse']['result'][i]['regularMarketPrice'];
        results.push([<Heading>{symbol}: {price}</Heading>]);
      }
      //Now we want to set the React Hook to the value of the data given from the API
       setResultArray(results);
  
      }).catch(function (error) {
        console.error(error);
      });
    }

    fetchMarketData();

  },[])
  

  const resulty = resultArray;
  
  //This will return an array of [[symbol,price],[symbol,price],.....]
  return resulty;

}