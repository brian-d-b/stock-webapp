import type { NextPage } from "next";
import { useColorModeValue, SimpleGrid, GridItem, useColorMode, Heading, Text, Button, Select, Container, Flex, VStack } from "@chakra-ui/react"

const Cart = () => {
  const { toggleColorMode } = useColorMode();
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
      <Heading>Bitcoin Price</Heading>
      <Text>Nigga Nuts</Text>
    </VStack>

    <SimpleGrid columns={2}>
      <GridItem colSpan={2}>
        <Button onClick={toggleColorMode}>Test</Button>
      </GridItem>
    </SimpleGrid>

    </VStack>

);
};

export default Cart;
