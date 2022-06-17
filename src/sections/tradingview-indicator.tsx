import { useColorModeValue, List, ListItem, ListIcon, Box, Center, SimpleGrid, GridItem, useColorMode, Heading, Text, Button, Select, Container, Flex, VStack } from "@chakra-ui/react"
import { CheckCircleIcon, SettingsIcon, ArrowUpIcon, ArrowForwardIcon, ArrowDownIcon, UpDownIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from "react";


const TVIndicators = () => {


  const bgColor = useColorModeValue('purple.200','whiteAlpha.50');
  return (
    <VStack
      w="full"
      h="full"
      p={7}
      spacing={10}
      alignItems="center"
      bg={bgColor}
      border='40px'
      borderRadius='40px'
    >

<Center>
<Center><Heading>TradingView Indicators by sector</Heading></Center></Center>

<iframe height='300px' width='600px' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSxN0QEcFxIxxwV4kv1wCaz7wMUScJo4bfz2S_4AkLY0Ixp3OfePp_--6DjRX5xt6Sdl3k7CQVtXCK6/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

<Center><List spacing={1}>
    <ListItem><Text padding='15px'><ListIcon as={CheckCircleIcon} color='green.500'></ListIcon>
    This public sheet is automatically updated via a Google Cloud Function that takes incoming POST requests and formats them into this sheet.
    </Text></ListItem>
</List></Center>

</VStack>


);
};

export default TVIndicators;

