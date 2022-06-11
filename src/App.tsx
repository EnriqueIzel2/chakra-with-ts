import React from 'react';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

import Details from './sections/Details';
import Cart from './sections/Cart';

function App() {
  return (
    <ChakraProvider>
      <Container maxWidth="container.xl" padding={0}>
        <Flex
          h={{ base: "auto", md:"100vh" }}
          py={[0, 10, 20]}
          direction={{ base: 'column-reverse', md: "row"}} >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
