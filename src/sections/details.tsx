import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import { Checkbox, Button, Select, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react"

const Cart = () => {
  return (
  <VStack
    w="full"
    h="full"
    p={10}
    spacing={10}
    alignItems="flex-start"
    bg="gray.50"
  >
    <VStack spacing={3} alignItems="flex-start">
      <Heading size='2xl'>Fuck Yes.</Heading>
      <Text>Testing my text nigga</Text>
    </VStack>
    
    <SimpleGrid columns={2} columnGap={3} rowGap={3}>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="1223 Lacewood"></Input>
        </FormControl>
      </GridItem>
    </SimpleGrid>
    <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="usa">United States</option>
            <option value="uae">United Arab Emirates</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Checkbox defaultChecked>Ship to billing</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
        <Button size='lg' w='full'>
          Place Order
        </Button>
      </GridItem>




  </VStack>
  );
};

export default Cart;
