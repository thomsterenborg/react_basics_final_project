import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

//Chakra UI Radio Button may cause "Unable to preventDefault inside passive event listener invocation."
//error in the Chrome Dev Tools console. This is an issue in Chakra UI
//The issue is closed but unsloved: https://github.com/chakra-ui/chakra-ui/issues/2925

export const RecipeFilter = ({ value, onChange }) => {
  return (
    <RadioGroup
      p={4}
      bg="yellow.500"
      onChange={onChange}
      value={value}
      mb={8}
      borderRadius={15}
      color="white"
      boxShadow={"xl"}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Text fontWeight={700}>Filter recipes:</Text>
        <Radio bg="gray.100" value="" onChange={onChange}>
          All
        </Radio>
        <Radio bg="gray.100" value="pescatarian" onChange={onChange}>
          Pescatarian
        </Radio>
        <Radio bg="gray.100" value="vegetarian" onChange={onChange}>
          Vegetarian
        </Radio>
        <Radio bg="gray.100" value="vegan" onChange={onChange}>
          Vegan
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
