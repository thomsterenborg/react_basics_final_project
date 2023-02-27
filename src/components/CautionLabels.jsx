import { Flex, Text } from "@chakra-ui/react";
import { CautionLabel } from "./ui/CautionLabel";

export const CautionLabels = ({ recipe, ...props }) => {
  //Generetes and shows tag for every caution in the recipe

  return (
    <>
      <Text fontWeight={600}>Cautions</Text>
      <Flex gap={2} {...props}>
        {recipe.cautions.map((label) => (
          <CautionLabel key={self.crypto.randomUUID()} label={label} />
        ))}
      </Flex>
    </>
  );
};
