<template>
  <component :is="item.type" :item="item"></component>
</template>

<script>
import two from "./two.vue";
import three from "./three.vue";
export default {
  components: { two, three },
  props: {
    item: Object,
  },
};
</script>

<style>
</style>