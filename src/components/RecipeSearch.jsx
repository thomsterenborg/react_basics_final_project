import { RecipeCards } from "./RecipeCards";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { useState } from "react";
import { Center } from "@chakra-ui/react";
import { RecipeFilter } from "./ui/RecipeFilter";

const availableRecipes = data.hits;

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const [filterRecipe, setFilterRecipe] = useState("");

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
      <RecipeFilter value={filterRecipe} onChange={setFilterRecipe} />
      <RecipeCards onClick={onClick} recipes={matchedRecipes} />
    </Center>
  );
};
