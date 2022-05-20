import { Text, Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../cart"
import Details from "../details"

import { useEffect, useState } from "react";
import { concat } from "lodash";



export default function StonkGrabber(stockArray=['GLD','GOLD','SLV','BTC-USD','SPY']) {

  const [resultArray, setResultArray] = useState();


  function formatStockURL() {
    const baseURL = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=';
    var URLbuilder = '';

    //If we are only looking up one stock, we just want to append the symbol and return
    if (stockArray.length == 1) {
      return baseURL.concat(stockArray[0]);
    }
    //Otherwise, we want to loop through the array and append
    else {
      for (let i = 0; i < stockArray.length; i++) {
        URLbuilder = URLbuilder.concat(stockArray[i],'%2C');
      }
      //We just need to delete the last 'comma' inserted, aka the %2C
      URLbuilder = URLbuilder.substring(0,URLbuilder.length - 3);
      console.log("URLBUilt: ",URLbuilder);
      return baseURL.concat(URLbuilder);

    }

  }


  useEffect(() => {
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
  },[])
  

  const resulty = resultArray;
  
  //This will return an array of [[symbol,price],[symbol,price],.....]
  return resulty;

}