import { Flex, Text } from "@chakra-ui/react";

//Generates a nutrient-tag for the parsed data

export const NutriLabel = ({ label, quantity, unit }) => {
  return (
    <>
      <Flex flexDir="column">
        <Text
          fontSize={13}
          fontWeight={600}
          color="GrayText"
          textTransform="uppercase"
        >
          {label}
        </Text>
        <Text fontSize={12}>
          {quantity}
          {unit}
        </Text>
      </Flex>
    </>
  );
};
