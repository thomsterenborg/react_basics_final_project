import { SearchIcon } from "@chakra-ui/icons";
import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";

export const TextInput = () => {
  return (
    <Center>
      <InputGroup>
        <InputLeftElement
          top={4}
          pointerEvents="none"
          children={<SearchIcon color={"gray.300"} />}
        />
        <Input
          bg={"white"}
          w={{ base: 400, md: 600, lg: 900 }}
          my={4}
          placeholder="Search for recipe"
        />
        ;
      </InputGroup>
    </Center>
  );
};