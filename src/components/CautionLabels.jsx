import { Flex, Text } from "@chakra-ui/react";
import { CautionLabel } from "./ui/CautionLabel";

export const CautionLabels = ({ recipe, ...props }) => {
  return (
    <>
      <Text pt={2}>Cautions</Text>
      <Flex gap={2} {...props}>
        {recipe.cautions.map((label) => (
          <CautionLabel key={self.crypto.randomUUID()} label={label} />
        ))}
      </Flex>
    </>
  );
};
