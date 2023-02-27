import { Flex, Text } from "@chakra-ui/react";
import { NutriLabel } from "./ui/NutriLabel";

export const NutriLabels = ({ recipe, ...props }) => {
  //Generetes and shows tag for every nutrient in the recipe
  //create variables for nutrients
  const energy = recipe.totalNutrients.ENERC_KCAL;
  const fat = recipe.totalNutrients.FAT;
  const carbs = recipe.totalNutrients.CHOCDF;
  const protein = recipe.totalNutrients.PROCNT;
  const cholesterol = recipe.totalNutrients.CHOLE;
  const sodium = recipe.totalNutrients.NA;

  //create array of nutrients so we can map them
  const neededNutrients = [energy, fat, carbs, protein, cholesterol, sodium];

  return (
    <>
      <Text fontWeight={600}>Nutrients</Text>
      <Flex gap={4} {...props}>
        {neededNutrients.map((nutrient) => (
          <NutriLabel
            key={self.crypto.randomUUID()}
            label={nutrient.label}
            quantity={Math.round(nutrient.quantity)}
            unit={nutrient.unit}
          />
        ))}
      </Flex>
    </>
  );
};
