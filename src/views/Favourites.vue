<template>
  <div>
    <p class="uk-text-center uk-margin-top uk-text-danger" v-if="recipesData.length">Favourites</p>
    <RecipesList :recipes="recipesData" v-if="recipesData.length" />
    <div v-else class="uk-text-center uk-margin-top uk-text-danger">
      No favorite recipes
    </div>
  </div>
</template>

<script>
import RecipesList from "../components/RecipesList";
import { ref, onMounted } from "vue";
import { getRecipesFromLocalStorate } from "../common/helpers";
import { RECIPE_PATH } from "../common/consts";
export default {
  name: "Favourites",
  components: {
    RecipesList,
  },
  setup() {
    const recipesData = ref([]);

    const savedRecipes = getRecipesFromLocalStorate();

    const getSavedRecipes = async () => {
      await Promise.all(
        savedRecipes.map(async (recipeID, index) => {
          const response = await fetch(`${RECIPE_PATH}${recipeID}`);
          const recipe = await response.json();
          recipesData.value[index] = await recipe.meals[0];
        })
      );
    };

    onMounted(() => {
      if (savedRecipes.length) {
        getSavedRecipes();
      }
    });

    return {
      recipesData,
    };
  },
};
</script>
