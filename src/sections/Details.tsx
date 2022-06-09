import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Zeca" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Nunes" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Rua Xuxu" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Manaus" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="br">Brazil</option>
              <option value="usa">USA</option>
              <option value="de">Germany</option>
              <option value="nmk">North Macedonia</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" >Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default Details;