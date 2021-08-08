<template>
  <div class="flex_center flex_column p_tb_40">
    <div class="w_960">
      <div class="">
        <div class="f_s_20 c_000 b_b_solid_f2 m_tb_20 p_tb_20">联系我们</div>
        <div>
          <div class="f_s_30 c_000 f_w_700 m_tb_20">深圳零时差电子有限公司</div>
          <div class="f_s_16 c_333 m_t_10">CEO：瞿朝曙</div>
          <div class="f_s_16 c_333 m_t_10">邮箱：sam@igstech.com.cn</div>
          <div class="f_s_16 c_333 m_t_10">电话：13713841685</div>
          <div class="f_s_16 c_333 m_tb_10">地址：深圳市宝安区新桥街道万丰社区中心路18号高盛大厦A1115</div>
          <baidu-map class="map" :scroll-wheel-zoom="true" :center="location" :zoom="zoom">
            <bm-marker :position="location" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
              <bm-label content="零时差电子有限公司" :labelStyle="{fontSize : '16px'}" :offset="{width: 30, height: -10}"/>
            </bm-marker>
          </baidu-map>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
export default {
    components: {
    },
    data() {
      return {
        location: {
          lng: 113.831808,
          lat: 22.709814
        },
        zoom: 17,
      }
    },
}
</script>
<style scoped lang="scss">
.map {
  width: 100%;
  height: 300px;
}
</style>