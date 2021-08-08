<template>
  <div class="w_1200">
    <div class="f_s_40 t_a_c p_tb_30 f_w_600">{{ item.desc }}</div>
    <div class="flex bg_fff p_10 of_h b_shadow">
      <div
        v-for="(item, index) in item.img"
        :key="index"
        class="flex_1 flex_jc_c t_a_c"
      >
        <img :src="item" class="w_300" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
</style>