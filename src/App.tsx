import React from 'react';
import { ChakraProvider, Container, Flex, VStack } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="container.xl" padding={0}>
        <Flex h="100vh" py={20}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
          >
            <h1>Hello</h1>
          </VStack>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg="gray.50"
          >
            <h1>Hello</h1>
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
