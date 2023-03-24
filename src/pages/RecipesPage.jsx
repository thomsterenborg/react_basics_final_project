import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
  const [userRecipeChoice, setUserRecipeChoice] = useState("");
  return (
    <Flex minH="100vh" w="100%" align="center" flexDir="column" bg="green.500">
      {userRecipeChoice ? (
        <RecipeChoice recipe={userRecipeChoice} onClick={setUserRecipeChoice} />
      ) : (
        <>
          <Heading mt={10} color={"whiteAlpha.900"}>
            Recipe checker
          </Heading>
          <RecipeSearch onClick={setUserRecipeChoice} />
        </>
      )}
    </Flex>
  );
};
