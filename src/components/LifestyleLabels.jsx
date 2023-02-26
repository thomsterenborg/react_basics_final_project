import { Flex } from "@chakra-ui/react";
import { LifestyleLabel } from "./ui/LifestyleLabel";

export const LifestyleLabels = () => {
  return (
    <Flex gap={2} align="center">
      <LifestyleLabel />
      <LifestyleLabel />
    </Flex>
  );
};
