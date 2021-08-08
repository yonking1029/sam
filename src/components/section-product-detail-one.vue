<template>
  <div class="w_1200 m_tb_40 bg_fff">
    <div class="p_tb_10 f_s_30 c_3b3e40 m_b_10 b_b_solid_f2 p_l_30">
      {{ product.name }}
    </div>
    <div class="flex flex_jc_b p_r_20">
      <div class="flex_center w_600 flex_ai_c">
        <img class="h_480" :src="product.img" />
      </div>
      <div class="flex_1">
        <div
          class="flex p_tb_8"
          v-for="(attr, index) in product.attrs"
          :key="index"
          :class="index % 2 === 1 ? '' : 'bg_f8f9fb'"
        >
          <div class="w_180 f_s_16 f_w_600 p_l_10">{{ attr.key }}</div>
          <div class="c_303233 f_s_16">
            <div v-for="(val, j) in attr.values" :key="j">{{ val }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
</style>