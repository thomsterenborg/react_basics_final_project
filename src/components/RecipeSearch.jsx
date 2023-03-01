import { RecipeCards } from "./RecipeCards";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { useState } from "react";
import { Center, useToast } from "@chakra-ui/react";
import { RecipeFilter } from "./ui/RecipeFilter";

const availableRecipes = data.hits;

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const toast = useToast();
  const [filterRecipe, setFilterRecipe] = useState("");
  const handleRadioChange = (event) => {
    setFilterRecipe(event.target.value);
    if (event.target.value !== "") {
      toast({
        title: "Recipes Filtered",
        description: `Only showing recipes with the label ${event.target.value}`,
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Filter has been reset",
        description: "Now showing all available recipes",
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const recipesForSearch = availableRecipes.filter((recipe) => {
    if (filterRecipe === "") return recipe;

    if (filterRecipe === "pescatarian") {
      return recipe.recipe.healthLabels.includes("Pescatarian");
    }

    if (filterRecipe === "vegetarian") {
      return recipe.recipe.healthLabels.includes("Vegetarian");
    }

    if (filterRecipe === "vegan") {
      return recipe.recipe.healthLabels.includes("Vegan");
    }
  });

  const matchedRecipes = recipesForSearch.filter((recipe) => {
    return recipe.recipe.label
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  return (
    <Center flexDir="column" maxW={{ base: "100%", lg: "1400px" }}>
      <TextInput onChange={handleChange} />
      <RecipeFilter value={filterRecipe} onChange={handleRadioChange} />
      <RecipeCards onClick={onClick} recipes={matchedRecipes} />
    </Center>
  );
};
