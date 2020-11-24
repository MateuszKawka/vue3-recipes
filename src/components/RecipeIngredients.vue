<template>
  <div>
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
  </div>
</template>

<script>
import { INGREDIENT_THUMB_PATH } from "../common/consts";
import { ref } from "vue";
import { EyeOff } from "mdue";

export default {
  name: "RecipeIngredients",
  components: {
    EyeOff
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
  },
  setup() {
    return {
      INGREDIENT_THUMB_PATH,
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
