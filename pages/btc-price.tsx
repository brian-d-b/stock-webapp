import { Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../src/sections/cart"
import Details from "../src/sections/details"
import { useEffect, useState } from "react";

function BTCPrice() {

  const [price, setPrice] = useState(null);

  useEffect(() => {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL',
      params: {modules: 'defaultKeyStatistics,assetProfile'},
     headers: {
       'x-api-key': '3WtamPEn6CaP0O4rrs4m9500HJgcQPId5Xw42LgP'
     }
    };
  
    var getPrice = axios.request(options).then(response => {
      console.log(response);
     const stockprice = response['data']['quoteResponse']['result'][0]['regularMarketPrice'];
     console.log(stockprice);
     setPrice(stockprice);
    }).catch(function (error) {
      console.error(error);
    });
  })
  



  return (
    {price}
  )

}

export default BTCPrice;