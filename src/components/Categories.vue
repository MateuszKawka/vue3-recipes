<template>
  <div class="uk-inline">
    <button class="uk-button uk-button-text uk-text-success" type="button">
      Categories
    </button>
    <div uk-dropdown>
      <ul class="uk-nav uk-dropdown-nav">
        <li
          v-for="category in categoriesData"
          :key="category.strCategory"
          class="uk-margin-small-top"
        >
          <router-link :to="`/category/${category.strCategory}`">
            {{ category.strCategory }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CATEGORIES_LIST_PATH } from "../common/consts";
import { ref, onMounted } from "vue";

export default {
  name: "Categories",
  setup() {
    const categoriesData = ref([]);

    const getCategoriesList = async () => {
      const result = await fetch(CATEGORIES_LIST_PATH);
      const categories = await result.json();
      console.log(categories);
      categoriesData.value = categories.meals;
    };

    const goToCategory = () => {};

    onMounted(() => {
      getCategoriesList();
    });

    return {
      categoriesData,
    };
  },
};
</script>
