export const saveRecipesToLocalStorage = (recipeID) => {
  const recipes = getRecipesFromLocalStorate();

  recipes.push(recipeID);

  localStorage.setItem("saved_recipes", JSON.stringify(recipes));
};

export const getRecipesFromLocalStorate = () => {
  return JSON.parse(localStorage.getItem("saved_recipes")) || [];
};

export const removeRecipeFromLocalStorage = (recipeID) => {
  const recipes = getRecipesFromLocalStorate();

  const newRecipes = recipes.filter((recipe) => recipe !== recipeID);

  localStorage.setItem("saved_recipes", JSON.stringify(newRecipes));
};


export const isRecipeFavourite = recipeID => {
    const recipes = getRecipesFromLocalStorate();

    return recipes.includes(recipeID)
}