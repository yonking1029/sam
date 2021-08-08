<template>
  <div class="flex_center flex_column bg_f6f9fa">
    <section-product-detail-one :product="product"></section-product-detail-one>
    <div v-for="(item, index) in product.details" :key="index">
      <section-product-item :item="item"></section-product-item>
    </div>

    <div class="bg_f5f5f7 m_b_50 p_tb_20">
      <div class="f_s_40 f_w_700 c_000 t_a_c m_b_30">哪款 补光 适合你？</div>
      <div class="flex w_960">
        <div class="flex_1 flex_center">
          <div class="">
            <img
              class="w_230"
              src="@/assets/img/product/shui-pei/igs-01/3.jpg"
            />
            <div class="">
              <div class="f_s_24 c_333 m_t_10 f_w_700">MacBook Air</div>
              <div class="f_s_18 c_666">RMB 7999 起</div>
              <div class="f_s_12 c_999 m_t_10">13.3 英寸视网膜显示屏1</div>
              <div class="f_s_12 c_999 m_t_10">
                最高可选配 4 核 Intel Core i7 处理器
              </div>
              <div class="f_s_12 c_999 m_t_10">最高可选配 16GB 内存</div>
              <div class="f_s_12 c_999 m_t_10">最高可选配 2TB 存储设备2</div>
            </div>
          </div>
        </div>
        <div class="flex_1 flex_center">
          <div class="">
            <img
              class="w_230"
              src="@/assets/img/product/shui-pei/igs-01/4.jpg"
            />
            <div class="">
              <div class="f_s_24 c_333 m_t_10 f_w_700">MacBook Air</div>
              <div class="f_s_18 c_666">RMB 7999 起</div>
              <div class="f_s_12 c_999 m_t_10">13.3 英寸视网膜显示屏1</div>
              <div class="f_s_12 c_999 m_t_10">
                最高可选配 4 核 Intel Core i7 处理器
              </div>
              <div class="f_s_12 c_999 m_t_10">最高可选配 16GB 内存</div>
              <div class="f_s_12 c_999 m_t_10">最高可选配 2TB 存储设备2</div>
            </div>
          </div>
        </div>
        <div class="flex_1 flex_center">
          <div class="">
            <img
              class="w_230"
              src="@/assets/img/product/shui-pei/igs-01/5.jpg"
            />
            <div class="">
              <div class="f_s_24 c_333 m_t_10 f_w_700">MacBook Air</div>
              <div class="f_s_18 c_666">RMB 7999 起</div>
              <div class="f_s_12 c_999 m_t_10">13.3 英寸视网膜显示屏1</div>
              <div class="f_s_12 c_999 m_t_10">
                最高可选配 4 核 Intel Core i7 处理器
              </div>
              <div class="f_s_12 c_999 m_t_10">最高可选配 16GB 内存</div>
              <div class="f_s_12 c_999 m_t_10">最高可选配 2TB 存储设备2</div>
            </div>
          </div>
        </div>
      </div>
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
      product: getProduct("shuipei", 0),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
