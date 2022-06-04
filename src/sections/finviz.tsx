import type { NextPage } from "next";
import { useColorModeValue, ListIcon, List, ListItem, Image, SimpleGrid, Box, Center, GridItem, useColorMode, Heading, Text, Button, Select, Container, Flex, VStack } from "@chakra-ui/react"
import { CheckCircleIcon, SettingsIcon, ArrowUpIcon, ArrowForwardIcon, ArrowDownIcon, UpDownIcon } from '@chakra-ui/icons'

const FinvizDisplay = () => {

  return (
    <Box 
    paddingY={25} 
    bgColor='blue.200' 
    maxWidth='full'
    border='40px'
    borderRadius='40px'
    >

    <Center>
      <SimpleGrid columns={1} maxWidth='full'>
        <GridItem paddingY={25}>
          <Center><Heading>Current Finviz SNP500 Heatmap 🤩</Heading></Center>
        </GridItem>
        <GridItem paddingY={5}>
          <Center><Box padding='10px'><Image src="https://storage.googleapis.com/current-finviz-image/current.png"></Image></Box></Center>
        </GridItem>
        <GridItem width='full'>
          <Box paddingX='50px'>
          <Center><List spacing={1}>
            <ListItem><Text padding='15px'><ListIcon as={CheckCircleIcon} color='green.500'></ListIcon>
            This image points to a Google Cloud Storage bucket that is updated each hour during
            market hours (9:30AM - 4:00PM).
            </Text></ListItem>
            <ListItem><Text padding='15px'><ListIcon as={CheckCircleIcon} color='green.500'></ListIcon>
            Updated via a spare computer running selenium and uploading to Google Cloud Storage
            </Text></ListItem>
            <ListItem><Text padding='15px'><ListIcon as={CheckCircleIcon} color='green.500'></ListIcon>
            All images are also saved in a separate bucket with timestamp
            </Text></ListItem>
            <ListItem><Text padding='15px'><ListIcon as={SettingsIcon}></ListIcon>
            To-do: Add feature to scroll through heatmaps saved throughout the day
            </Text></ListItem>
            </List></Center>
            
            </Box>
        </GridItem>
      </SimpleGrid>
    </Center>
    </Box>
);
};

export default FinvizDisplay;
