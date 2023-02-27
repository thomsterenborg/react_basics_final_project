import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

export const RecipeFilter = ({ value, onChange }) => {
  return (
    <RadioGroup
      p={4}
      bg="blue.900"
      onChange={onChange}
      value={value}
      mb={8}
      borderRadius={15}
      color="white"
      boxShadow={"xl"}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Text fontWeight={700}>Filter recipes:</Text>
        <Radio bg="gray.100" value="">
          All
        </Radio>
        <Radio bg="gray.100" value="pescatarian">
          Pescatarian
        </Radio>
        <Radio bg="gray.100" value="vegetarian">
          Vegetarian
        </Radio>
        <Radio bg="gray.100" value="vegan">
          Vegan
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
