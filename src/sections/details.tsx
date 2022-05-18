import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react"
import { useBreakpointValue, useColorMode, useColorModeValue, Checkbox, Button, Select, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react"


const Details = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.600','whiteAlpha.600');
  const textColor = useColorModeValue('blue.600','red.400');
  const colSpan = useBreakpointValue({base:2,md:1});
  return (
  <VStack
    w="full"
    h="full"
    p={10}
    spacing={10}
    alignItems="flex-start"
    bg={bgColor}
    
  >
    <VStack spacing={3} alignItems="flex-start">
      <Heading size='2xl'>Fuck Yes.</Heading>
      <Text color={textColor}>Testing my text nigga</Text>
    </VStack>
    
    <SimpleGrid columns={2} columnGap={3} rowGap={3}>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
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
    <GridItem colSpan={colSpan}>
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

export default Details;
