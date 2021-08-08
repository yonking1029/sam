<template>
  <div class="bg_f6f9fa of_h p_tb_30">
    <img src="http://igstech.com.cn/igs/2.jpeg" alt="" />
    <div v-for="(item, index) in list" :key="index">
      <section-product-item-one
        :item="item"
        :type="index % 2 === 1 ? 'right' : 'left'"
      ></section-product-item-one>
    </div>
  </div>
</template>

<script>
import { shuipei } from "@/config/project";
import SectionProductItemOne from "@/components/section-product-item-one.vue";
export default {
  components: { SectionProductItemOne },
  data() {
    return {
      list: shuipei,
    };
  },
};
</script>

<style>
</style>