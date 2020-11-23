<template>
  <div class="recipe">
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
        <img :src="recipe.strMealThumb" alt="" />
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title uk-text-center uk-margin-small-top">
          {{ recipe.strMeal }}
        </h3>
      </div>
    </div>
    <div class="uk-container uk-container-expand">
      <table class="uk-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Measures</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ingredient, index) in ingredients" :key="ingredient">
            <td>
              <img
                class="ingredient-thumb"
                :src="`${INGREDIENT_THUMB_PATH}${ingredient}-small.png`"
              />
            </td>
            <td>{{ ingredient }}</td>
            <td>{{ measures[index] }}</td>
          </tr>
        </tbody>
      </table>

      <p class="uk-text-center uk-margin-medium-bottom">
        {{ recipe.strInstructions }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { INGREDIENT_THUMB_PATH } from "../common/consts";

export default {
  name: "Recipe",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const ingredients = computed(() => {
      return Object.keys(props.recipe)
        .filter((key) => /Ingredient/.test(key))
        .map((key) => props.recipe[key])
        .filter(Boolean);
    });

    const measures = computed(() => {
      return Object.keys(props.recipe)
        .filter((key) => /Measure/.test(key))
        .map((key) => props.recipe[key]);
    });

    return {
      ingredients,
      measures,
      INGREDIENT_THUMB_PATH,
    };
  },
};

/*
  ingredients() {
      return Object.keys(this.recipe)
          .filter((key) => /Ingredient/.test(key))
          .map((key) => this.recipe[key])
          .filter(Boolean);
    },
    measures() {
      return Object.keys(this.recipe)
          .filter((key) => /Measure/.test(key))
          .map((key) => this.recipe[key]);
    },

*/
</script>

<style scoped>
.uk-card {
  box-shadow: none;
}

.ingredient-thumb {
  width: 48px;
}
</style>
