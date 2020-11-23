<template>
  <div class="recipe uk-container@m">
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
        <img :src="recipe.strMealThumb" alt="" class="recipe-image" />
        <a
          class="uk-position-top-right uk-icon-button uk-margin-small-right uk-margin-small-top"
          :class="{ 'uk-text-warning': isFavourite }"
          @click="favouriteHandler"
          ><Heart
        /></a>
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title uk-text-center uk-margin-small-top">
          {{ recipe.strMeal }}
        </h3>
      </div>
    </div>
    <div class="uk-container">
      <button
        type="button"
        class="uk-button uk-button-text uk-button-small uk-text-center"
        @click="showIngredientsBind"
      >
        {{ showIngredients ? "hide ingredients" : "show ingrediends" }}
      </button>
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

      <p class="uk-text-center uk-margin-medium-bottom">
        {{ recipe.strInstructions }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref, onUpdated, onMounted } from "vue";
import { INGREDIENT_THUMB_PATH } from "../common/consts";
import {
  saveRecipesToLocalStorage,
  removeRecipeFromLocalStorage,
  isRecipeFavourite,
} from "../common/helpers";
import { Heart } from "mdue";
export default {
  name: "Recipe",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  components: {
    Heart,
  },
  setup(props) {
    const showIngredients = ref(true);
    const isFavourite = ref(false);

    const showIngredientsBind = () => {
      showIngredients.value = !showIngredients.value;
    };

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

    const favouriteHandler = () => {
      if (isFavourite.value) {
        removeRecipeFromLocalStorage(props.recipe.idMeal);
      } else {
        saveRecipesToLocalStorage(props.recipe.idMeal);
      }
      isFavourite.value = isRecipeFavourite(props.recipe.idMeal);
    };

    onMounted(() => {
      isFavourite.value = isRecipeFavourite(props.recipe.idMeal);
    });

    return {
      ingredients,
      measures,
      showIngredients,
      INGREDIENT_THUMB_PATH,
      showIngredientsBind,
      saveRecipesToLocalStorage,
      isFavourite,
      favouriteHandler,
    };
  },
};
</script>

<style scoped>
.uk-card {
  box-shadow: none;
}

.ingredient-thumb {
  width: 48px;
}

.recipe-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
</style>
