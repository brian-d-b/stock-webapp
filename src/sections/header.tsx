import type { NextPage } from "next";
import { useColorModeValue, Box, Center, SimpleGrid, GridItem, useColorMode, Heading, Text, Button, Select, Container, Flex, VStack } from "@chakra-ui/react"

const Header = () => {
  const bgColor = useColorModeValue('gray.50','whiteAlpha.50');
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
<Center><Heading>Brians Stock Webapp</Heading></Center></Center>
</VStack>

);
};

export default Header;
