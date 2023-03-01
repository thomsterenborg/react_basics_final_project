import { RecipeCards } from "./RecipeCards";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { useState } from "react";
import { Center, useToast } from "@chakra-ui/react";
import { RecipeFilter } from "./ui/RecipeFilter";

const availableRecipes = data.hits;

export const RecipeSearch = ({ onClick }) => {
  //useState for search field
  const [searchField, setSearchField] = useState("");

  //event handler for search field
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  //useStare for recipe Filter/Radio Buttons
  const [filterRecipe, setFilterRecipe] = useState("");

  const toast = useToast();

  //event handler for Radio buttons
  const handleRadioChange = (event) => {
    //set the useState
    setFilterRecipe(event.target.value);

    //Show toast
    if (event.target.value !== "") {
      toast({
        title: "Recipes Filtered",
        description: `Only showing recipes with the label ${event.target.value}. This will affect your search results.`,
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

  //Create array of recipes based on filter state
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

  //Create an array with recipes bases on user input in search field
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
