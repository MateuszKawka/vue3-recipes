<template>
  <ul class="uk-list uk-list-divider" v-if="recipes.length">
    <li v-for="recipe in recipes" :key="recipe.idMeal" class="uk-flex">
      <img :src="recipe.strMealThumb" class="search-results-image" />
      <button
        class="uk-button uk-button-text uk-margin-small-left"
        @click="goToRecipe(recipe.idMeal)"
      >
        {{ recipe.strMeal }}
      </button>
    </li>
  </ul>
</template>

<script>
import { toRef, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "SearchResults",
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const router = useRouter();

    const goToRecipe = (recipeID) => {
      router.push(`/recipe/${recipeID}`);
    };
    return {
      goToRecipe,
    };
  },
};
</script>

<style scoped>
.search-results-image {
  height: 64px;
}
</style>
