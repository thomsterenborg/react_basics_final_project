import { Center, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeCard } from "../components/ui/RecipeCard";
import { data } from "../utils/data";

export const RecipesPage = () => {
  return (
    <Center minH="100vh" w="100vw" flexDir="column" bg={"blue.400"}>
      <Heading color={"whiteAlpha.900"}>Welcome to our restaurant</Heading>
      <RecipeSearch />
    </Center>
  );
};
