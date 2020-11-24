<template>
  <div>
    <p class="uk-text-center">{{ category }}</p>
    <RecipesList :recipes="recipesData" />
  </div>
</template>

<script>
import RecipesList from "../components/RecipesList";
import { RECIPES_BY_CATEGORY_PATH } from "../common/consts";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  name: "CategoryExplore",
  components: {
    RecipesList,
  },
  setup() {
    const route = useRoute();
    const recipesData = ref([]);
    const category = route.params.category;

    const getRecipes = async () => {
      const result = await fetch(`${RECIPES_BY_CATEGORY_PATH}${category}`);
      const recipes = await result.json();
      recipesData.value = recipes.meals;
    };

    onMounted(() => {
      getRecipes();
    });

    return {
      recipesData,
      category,
    };
  },
};
</script>
