import { Center, Flex } from "@chakra-ui/react";
import { RecipeCards } from "./RecipeCards";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = () => {
  return (
    <>
      <TextInput />
      <RecipeCards />
    </>
  );
};
