<template>
  <div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">
      Areas
    </button>
    <div uk-dropdown>
      <ul class="uk-nav uk-dropdown-nav">
        <li
          v-for="area in areasData"
          :key="area.strArea"
          class="uk-margin-small-top"
        >
          <router-link :to="`/area/${area.strArea}`">
            {{ area.strArea }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { AREAS_LIST_PATH } from "../common/consts";
import { ref, onMounted } from "vue";

export default {
  name: "Areas",
  setup() {
    const areasData = ref([]);

    const getAreasList = async () => {
      const result = await fetch(AREAS_LIST_PATH);
      const areas = await result.json();
      areasData.value = areas.meals;
    };

    onMounted(() => {
      getAreasList();
    });

    return {
      areasData,
    };
  },
};
</script>
