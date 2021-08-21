<template>
  <div class="flex_center flex_column bg_f6f9fa">
    <section-product-detail-one :product="product"></section-product-detail-one>
    <div v-for="(item, index) in product.details" :key="index">
      <section-product-item :item="item"></section-product-item>
    </div>
  </div>
</template>

<script>
import { getProduct } from "@/config/project";
import SectionProductDetailOne from "@/components/section-product-detail-one.vue";
import SectionProductItem from "@/components/section-product-item";
export default {
  components: { SectionProductItem, SectionProductDetailOne },
  data() {
    return {
      product: getProduct("shuipei", 8),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
