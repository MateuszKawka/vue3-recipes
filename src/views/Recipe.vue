<template>
  <div class="about">
    <Recipe :recipe="recipeData" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { RECIPE_PATH } from "../common/consts";
import Recipe from "../components/Recipe"

export default {
  name: "RecipeView",
  components: {
    Recipe
  },
  setup() {
    const route = useRoute();
    const recipeData = ref({});

    const getRecipe = async () => {
      const response = await fetch(`${RECIPE_PATH}${route.params.id}`);
      const recipe = await response.json();
      recipeData.value = recipe.meals[0];
    };

    onMounted(() => {
      getRecipe();
    });

    return {
      recipeData,
    };
  },
};
</script>
