import { Flex } from "@chakra-ui/react";
import { DietLabel } from "./ui/DietLabel";

export const DietLabels = () => {
  return (
    <Flex gap={2} align={"center"}>
      <DietLabel />
      <DietLabel />
    </Flex>
  );
};
