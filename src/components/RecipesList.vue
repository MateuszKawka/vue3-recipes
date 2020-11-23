<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.idMeal">
      <RecipePreview :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview";

export default {
  name: "RecipesList",
  components: {
    RecipePreview,
  },
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
