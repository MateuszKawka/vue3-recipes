<template>
  <div>
    <p class="uk-text-right">
      Ingredients
      <a
        class="uk-icon-button uk-background-default "
        @click="showIngredientsBind"
      >
        <EyeOff v-if="showIngredients" />
        <Eye v-else />
      </a>
    </p>
    <table class="uk-table" v-if="showIngredients">
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
import { EyeOff, Eye } from "mdue";

export default {
  name: "RecipeIngredients",
  components: {
    EyeOff,
    Eye,
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
    const showIngredients = ref(true);

    const showIngredientsBind = () => {
      showIngredients.value = !showIngredients.value;
    };

    return {
      INGREDIENT_THUMB_PATH,
      showIngredientsBind,
      showIngredients,
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
