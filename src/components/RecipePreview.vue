<template>
    <div class="recipe-preview-container">
      <router-link :to="`/recipe/${recipe.idMeal}`">
      <div class="recipe-preview">
        <img class="recipe-preview__image" :src="recipe.strMealThumb" />
        <div class="recipe-preview__content">
          <h2 class="recipe-preview__name">{{ recipe.strMeal }}</h2>
        </div>
      </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "RecipePreview",
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

.recipe-preview-container {
   max-width: 400px;
}
.recipe-preview {
  width: 100%;
  height: 360px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
}

.recipe-preview__name {
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 600;
}

.recipe-preview__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
}

.recipe-preview__content {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

@media all and (min-width: 720px) {
  .recipe-preview {
    transform: scale(0.95);
    transition: 0.25s transform ease-in-out;
  }

  .recipe-preview:hover {
    transform: scale(1);
  }
}
</style>
