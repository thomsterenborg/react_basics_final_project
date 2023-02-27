import { RecipeCards } from "./RecipeCards";
import { TextInput } from "./ui/TextInput";
import { data } from "../utils/data";
import { useState } from "react";

const availableRecipes = data.hits;

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const matchedRecipes = availableRecipes.filter((recipe) => {
    return recipe.recipe.label
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  return (
    <>
      <TextInput onChange={handleChange} />
      <RecipeCards onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
