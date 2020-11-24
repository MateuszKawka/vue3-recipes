import { jsPDF } from "jspdf";

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

export const isRecipeFavourite = (recipeID) => {
  const recipes = getRecipesFromLocalStorate();

  return recipes.includes(recipeID);
};

export const exportToPdf = (title, ingredients, measures) => {
  const doc = new jsPDF();
  doc.setFontSize(22);
  doc.text(`${title}`, 20, 20);
  doc.setFontSize(16);
  ingredients.forEach((item, index) => {
    doc.text(`${item} --- ${measures[index]}`, 20, 30 + index * 10);
  });
  doc.save(`${title}.pdf`);
};
