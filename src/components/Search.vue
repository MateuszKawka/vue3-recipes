<template>
  <div class="uk-margin-medium-top">
    <div class="uk-inline">
      <span class="uk-form-icon" uk-icon="icon: user"></span>
      <input
        class="uk-input uk-form-width-large"
        type="text"
        v-model="searchQuery"
        @change="SEARCH_RECIPES"
      />
    </div>
    <SearchResults :recipes="searchResults" />
  </div>
</template>

<script>
import { SEARCH_RECIPE_PATH } from "../common/consts";
import { ref } from "vue";
import SearchResults from "./SearchResults";
export default {
  name: "Search",
  components: {
    SearchResults,
  },
  setup() {
    const searchQuery = ref("");
    const searchResults = ref([]);

    const SEARCH_RECIPES = async () => {
      const response = await fetch(`${SEARCH_RECIPE_PATH}${searchQuery.value}`);
      const recipes = await response.json();
      searchResults.value = recipes.meals;
    };

    return {
      searchQuery,
      SEARCH_RECIPES,
      searchResults,
    };
  },
};
</script>
