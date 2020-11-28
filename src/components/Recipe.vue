<template>
  <div class="recipe uk-container@m">
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
        <img :src="recipe.strMealThumb" alt="" class="recipe-image" />
        <a
          class=" uk-position-fixed uk-position-top-right uk-icon-button uk-margin-small-right uk-margin-small-top uk-background-muted"
          :class="{ 'uk-text-success': isFavourite }"
          @click="favouriteHandler"
          ><Heart
        /></a>
      </div>
      <div class="uk-card-body uk-card-small">
        <div
          class="uk-flex uk-flex-between uk-margin-small-bottom uk-width-1-2@m uk-align-center"
        >
          <router-link
            :to="`/area/${recipe.strArea}`"
            class="uk-badge uk-background-default uk-text-success"
            >{{ recipe.strArea }}</router-link
          >
          <router-link
            :to="`/category/${recipe.strCategory}`"
            class="uk-badge uk-background-default uk-text-success"
            >{{ recipe.strCategory }}</router-link
          >
        </div>
        <h3 class="uk-card-title uk-text-center uk-margin-small-top">
          {{ recipe.strMeal }}
        </h3>
      </div>
    </div>
    <div class="uk-container uk-margin-small-top">
      <RecipeIngredients
        :measures="measures"
        :ingredients="ingredients"
        :recipeName="recipe.strMeal"
      />
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
import { useToast } from "vue-toastification";
import RecipeIngredients from "./RecipeIngredients";
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
    RecipeIngredients,
  },
  setup(props) {
    const isFavourite = ref(false);
    const toast = useToast();

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
        toast.success("Recipe remove from favourites");
      } else {
        saveRecipesToLocalStorage(props.recipe.idMeal);
        toast.success("Recipe add to favourites");
      }
      isFavourite.value = isRecipeFavourite(props.recipe.idMeal);
    };

    onMounted(() => {
      isFavourite.value = isRecipeFavourite(props.recipe.idMeal);
    });

    return {
      ingredients,
      measures,
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

.recipe-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
</style>
