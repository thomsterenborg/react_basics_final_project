import { Flex } from "@chakra-ui/react";
import { LifestyleLabel } from "./ui/LifestyleLabel";

export const LifestyleLabels = ({ recipe, ...props }) => {
  //Generetes and shows tags for Vegetarian and Vegan.
  //Filter Vegan en Vegetarian from the Health-labels
  const lifestyleLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );

  return (
    <>
      <Flex gap={2} {...props}>
        {lifestyleLabels.map((label) => (
          <LifestyleLabel key={self.crypto.randomUUID()} label={label} />
        ))}
      </Flex>
    </>
  );
};
