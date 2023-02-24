import { Center, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "../components/RecipeSearch";
import { data } from "../utils/data";

export const RecipesPage = () => {
  return (
    <Center h="100vh" flexDir="column" bg={"green.50"}>
      <Heading color={"gray.500"}>Welcome to our restaurant</Heading>
      <RecipeSearch />
    </Center>
  );
};
