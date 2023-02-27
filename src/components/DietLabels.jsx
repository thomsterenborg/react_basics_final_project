import { Flex } from "@chakra-ui/react";
import { DietLabel } from "./ui/DietLabel";

export const DietLabels = ({ recipe, ...props }) => {
  return (
    <Flex gap={2} {...props}>
      {recipe.dietLabels.map((label) => (
        <DietLabel key={self.crypto.randomUUID()} label={label} />
      ))}
    </Flex>
  );
};
