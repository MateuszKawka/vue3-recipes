<template>
  <div>
    <Spinner v-if="loading"/>
    <Recipe :recipe="recipeData" v-else/>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { RECIPE_PATH } from "../common/consts";
import Recipe from "../components/Recipe"
import Spinner from "../components/Spinner"
export default {
  name: "RecipeView",
  components: {
    Recipe,
    Spinner
  },
  setup() {
    const route = useRoute();
    const recipeData = ref({});
    const loading = ref(false)
    const getRecipe = async () => {
      loading.value = true;
      const response = await fetch(`${RECIPE_PATH}${route.params.id}`);
      const recipe = await response.json();
      recipeData.value = recipe.meals[0];
      loading.value = false
    };

    onMounted(() => {
      getRecipe();
    });

    return {
      recipeData,
      loading
    };
  },
};
</script>
