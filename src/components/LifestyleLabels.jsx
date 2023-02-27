import { Flex } from "@chakra-ui/react";
import { LifestyleLabel } from "./ui/LifestyleLabel";

export const LifestyleLabels = ({ recipe, ...props }) => {
  const lifestyleLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );
  if (lifestyleLabels.length > 0) {
    console.table(lifestyleLabels);
    console.table(recipe.healthLabels);
  }
  return (
    <Flex gap={2} {...props}>
      {lifestyleLabels.map((label) => (
        <LifestyleLabel key={self.crypto.randomUUID()} label={label} />
      ))}
    </Flex>
  );
};
