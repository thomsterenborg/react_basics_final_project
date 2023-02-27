import { SearchIcon } from "@chakra-ui/icons";
import { Center, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return (
    <Center>
      <InputGroup>
        <InputLeftElement
          top={4}
          pointerEvents="none"
          children={<SearchIcon color={"gray.300"} />}
        />
        <Input
          onChange={onChange}
          bg={"white"}
          w={{ base: 290, md: 600, lg: 900 }}
          my={4}
          placeholder="Search for recipe"
        />
      </InputGroup>
    </Center>
  );
};
