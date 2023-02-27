import { Flex } from "@chakra-ui/react";
import { RecipeCard } from "./ui/RecipeCard";

export const RecipeCards = ({ recipes, onClick }) => {
  return (
    <>
      <Flex gap={4} flexWrap="wrap" justify="center" alignItems="center">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            onClick={onClick}
          />
        ))}
      </Flex>
    </>
  );
};
