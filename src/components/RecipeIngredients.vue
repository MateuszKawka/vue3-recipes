<template>
  <div>
    <p class="uk-text-right">
      <a class="uk-icon-button uk-margin-small-left uk-text-danger" @click="exportToPdf(recipeName, ingredients, measures)"><Printer /></a>
    </p>
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
          <td class="uk-text-danger">{{ ingredient }}</td>
          <td class="uk-text-danger">{{ measures[index] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { INGREDIENT_THUMB_PATH } from "../common/consts";
import {exportToPdf} from "../common/helpers"
import { ref } from "vue";
import { Printer } from "mdue";

export default {
  name: "RecipeIngredients",
  components: {
    Printer,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    measures: {
      type: Array,
      required: true,
    },
    recipeName: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      INGREDIENT_THUMB_PATH,
      exportToPdf
    };
  },
};
</script>

<style scoped>
.ingredient-thumb {
  width: auto;
  height: 32px;
}
</style>
