<template>
  <div>
    <p class="uk-text-center uk-text-large uk-padding-large uk-text-success">{{ area }}</p>
    <RecipesList :recipes="recipesData" />
  </div>
</template>

<script>
import RecipesList from "../components/RecipesList";
import { RECIPES_BY_AREA_PATH } from "../common/consts";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  name: "AreaExplore",
  components: {
    RecipesList,
  },
  setup() {
    const route = useRoute();
    const recipesData = ref([]);
    const area = route.params.area;

    const getRecipes = async () => {
      const result = await fetch(`${RECIPES_BY_AREA_PATH}${area}`);
      const recipes = await result.json();
      recipesData.value = recipes.meals;
    };

    onMounted(() => {
      getRecipes();
    });

    return {
      recipesData,
      area,
    };
  },
};
</script>
