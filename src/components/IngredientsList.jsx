import { Flex, Text } from "@chakra-ui/react";

export const IngredientsList = ({ recipe, ...props }) => {
  //Generetes and shows tag for every ingredient line in the recipe
  return (
    <>
      <Text fontWeight={600}>Ingredients:</Text>
      <Flex {...props}>
        {recipe.ingredientLines.map((ingredient) => (
          <Text key={self.crypto.randomUUID()}>{ingredient}</Text>
        ))}
      </Flex>
    </>
  );
};
