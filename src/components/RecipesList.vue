<template>
  <div class="uk-container uk-container-extend">
    <div class="uk-grid-large" uk-grid>
      <div
        v-for="recipe in recipes"
        :key="recipe.idMeal"
        class="uk-width-1-2@s"
      >
        <RecipePreview :recipe="recipe" />
      </div>
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
