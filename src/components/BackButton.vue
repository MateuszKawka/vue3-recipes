<template>
  <a
    v-if="isPossibleToBack"
    @click="back"
    class="uk-position-fixed uk-position-top-left uk-icon-button uk-margin-small-left uk-margin-small-top uk-background-muted uk-position-z-index"
    ><ArrowLeft
  /></a>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { ArrowLeft } from "mdue";

export default {
  name: "BackButton",
  components: {
    ArrowLeft,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    
    const isPossibleToBack = computed(() => {
      return route.path !== "/";
    });

    const back = () => {
      router.back();
    };

    return {
      isPossibleToBack,
      back,
      router,
    };
  },
};
</script>
