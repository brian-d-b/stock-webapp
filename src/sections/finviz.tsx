import type { NextPage } from "next";
import { useColorModeValue, Image, SimpleGrid, Box, Center, GridItem, useColorMode, Heading, Text, Button, Select, Container, Flex, VStack } from "@chakra-ui/react"

const FinvizDisplay = () => {

  return (
    <Box paddingY={25} bgColor='blue.500' maxWidth='full' width='full'>
    <Center>
      <SimpleGrid columns={1} maxWidth='full' width='full'>
        <GridItem paddingY={25}>
          <Center><Heading>Current Finviz SNP500 Heatmap 🤩</Heading></Center>
        </GridItem>
        <GridItem paddingY={5}>
          <Center><Image src="https://storage.googleapis.com/current-finviz-image/current.png"></Image></Center>
        </GridItem>
      </SimpleGrid>
    </Center>
    </Box>
);
};

export default FinvizDisplay;
