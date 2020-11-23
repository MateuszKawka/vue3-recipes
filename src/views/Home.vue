<template>
  <div class="home uk-container">
    <router-link
      to="/favourites"
      class="uk-button uk-button-text uk-margin-small-top uk-text-danger uk-flex uk-flex-right"
      >Favourites</router-link
    >
    <Search />

    <div class="uk-flex uk-flex-between uk-margin-medium-top">
      <Categories />
      <Areas />
    </div>

    <div class="uk-margin-large-top uk-flex uk-flex-center">
      <RecipePreview :recipe="recipeData" />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";
import RecipePreview from "../components/RecipePreview";
import Categories from "../components/Categories";
import Areas from "../components/Areas";
import { ref, onMounted } from "vue";
import { RANDOM_RECIPE_PATH } from "../common/consts";

export default {
  name: "HomeView",
  components: {
    Search,
    RecipePreview,
    Categories,
    Areas
  },
  setup() {
    const recipeData = ref({});

    const GET_RANDOM_RECIPE = async () => {
      const result = await fetch(RANDOM_RECIPE_PATH);
      const recipe = await result.json();
      recipeData.value = recipe.meals[0];
    };

    onMounted(() => {
      GET_RANDOM_RECIPE();
    });

    return {
      recipeData,
    };
  },
};
</script>
