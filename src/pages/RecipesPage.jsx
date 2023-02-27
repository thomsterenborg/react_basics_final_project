import { Center, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeCard } from "../components/ui/RecipeCard";
import { data } from "../utils/data";

export const RecipesPage = () => {
  const [userRecipeChoice, setUserRecipeChoice] = useState("");
  return (
    <Flex minH="100vh" w="100vw" align="center" flexDir="column" bg="blue.400">
      {userRecipeChoice ? (
        <RecipeChoice recipe={userRecipeChoice} onClick={setUserRecipeChoice} />
      ) : (
        <>
          <Heading my={10} color={"whiteAlpha.900"}>
            Recipe checker
          </Heading>
          <RecipeSearch onClick={setUserRecipeChoice} />
        </>
      )}
    </Flex>
  );
};
