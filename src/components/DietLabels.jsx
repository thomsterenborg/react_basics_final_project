import { Flex, Text } from "@chakra-ui/react";
import { DietLabel } from "./ui/DietLabel";

export const DietLabels = ({ recipe, ...props }) => {
  //Generetes and shows tag for every diet in the recipe
  return (
    <>
      <Text fontWeight={600}>Diet</Text>
      <Flex gap={2} {...props}>
        {recipe.dietLabels.map((label) => (
          <DietLabel key={self.crypto.randomUUID()} label={label} />
        ))}
      </Flex>
    </>
  );
};
