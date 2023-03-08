import { RecipeCards } from "./RecipeCards";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { useState } from "react";
import { Center, useToast } from "@chakra-ui/react";
import { RecipeFilter } from "./ui/RecipeFilter";

const availableRecipes = data.hits;

export const RecipeSearch = ({ onClick }) => {
  //useState for search field
  const [search, setSearch] = useState("");

  //useStare for recipe Filter/Radio Buttons
  const [filter, setFilter] = useState("all");

  //event handler for Radio buttons
  const toast = useToast();
  const handleFilter = (e) => {
    //set the useState
    setFilter(e.target.value);

    //Show toast
    toast({
      title: "Recipes filtered",
      description: `Currently showing ${e.target.value} recipes`,
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  //Create array of recipes based on filter state
  const recipesForSearch = availableRecipes.filter((recipe) => {
    if (filter === "all") return recipe;

    if (filter === "pescatarian") {
      return recipe.recipe.healthLabels.includes("Pescatarian");
    }

    if (filter === "vegetarian") {
      return recipe.recipe.healthLabels.includes("Vegetarian");
    }

    if (filter === "vegan") {
      return recipe.recipe.healthLabels.includes("Vegan");
    }
  });

  //Create an array with recipes bases on user input in search field
  const matchedRecipes = recipesForSearch.filter((recipe) => {
    return recipe.recipe.label
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return (
    <Center flexDir="column" maxW={{ base: "100%", lg: "1400px" }}>
      <TextInput onChange={(e) => setSearch(e.target.value)} />
      <RecipeFilter value={filter} onChange={handleFilter} />
      <RecipeCards onClick={onClick} recipes={matchedRecipes} />
    </Center>
  );
};
