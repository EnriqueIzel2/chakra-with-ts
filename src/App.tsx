import React from 'react';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

import Details from './sections/Details';
import Cart from './sections/Cart';

function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="container.xl" padding={0}>
        <Flex h="100vh" py={20}>
          <Details />
          <Cart />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
