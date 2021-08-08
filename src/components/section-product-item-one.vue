<template>
  <div class="m_t_20">
    <div
      class="flex w_1200 m_auto bg_fff b_shadow"
      :class="type === 'right' ? 'flex_row_reverse' : ''"
    >
      <div class="flex_1 p_64 flex flex_column">
        <div class="flex_1 flex flex_column flex_jc_c">
          <div class="f_s_36 l_h_64 f_w_600">
            {{ item.name }}
          </div>
          <div class="c_303233 f_s_16 l_h_24" v-html="item.desc"></div>
        </div>
        <div class="c_303233 f_w_600 pointer" @click="onClick">了解更多 ></div>
      </div>
      <div class="w_600 h_480 t_a_c of_h">
        <img :src="item.img" class="h_480 scale12" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
  },
  methods: {
    onClick() {
      this.$router.push(this.item.router);
    },
  },
};
</script>

<style>
</style>