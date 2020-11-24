<template>
  <div class="uk-margin-medium-top uk-width-1-1">
    <div class="uk-inline uk-flex uk-flex-center uk-width-1-1">
      <span class="uk-form-icon loading-icon"
        ><div uk-spinner v-if="isLoading"></div
      ></span>
      <input
        class="uk-input uk-width-1-1"
        type="text"
        v-model="searchQuery"
        @keyup="SEARCH_RECIPES"
        @focus="showResults = true"
      />
    </div>
    <SearchResults :recipes="searchResults" v-if="!isLoading && showResults" />
  </div>
</template>

<script>
import { SEARCH_RECIPE_PATH } from "../common/consts";
import { ref } from "vue";
import SearchResults from "./SearchResults";
import { Loading } from "mdue";

export default {
  name: "Search",
  components: {
    SearchResults,
    Loading,
  },
  setup() {
    const searchQuery = ref("");
    const searchResults = ref([]);
    const isLoading = ref(false);
    const showResults = ref(false)
    const SEARCH_RECIPES = async () => {
      if (searchQuery.value.length > 2) {
        isLoading.value = true;
        const response = await fetch(
          `${SEARCH_RECIPE_PATH}${searchQuery.value}`
        );
        const recipes = await response.json();
        searchResults.value = recipes.meals;
        isLoading.value = false;
      }
    };

    return {
      searchQuery,
      SEARCH_RECIPES,
      searchResults,
      isLoading,
      showResults
    };
  },
};
</script>
