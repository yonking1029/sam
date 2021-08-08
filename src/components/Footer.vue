<template>
  <div class="bg_f5f5f7 flex flex_column flex_ai_c p_tb_40">
      <div class="flex">
        <div class="flex flex_column w_180">
            <div class="f_s_14 c_333 f_w_700 m_b_20">品牌介绍</div>
            <div class="f_s_12 c_666 m_b_10">品牌故事</div>
            <div class="f_s_12 c_666 m_b_10">品牌背景</div>
            <div class="f_s_12 c_666 m_b_10">发展历程</div>
            <div class="f_s_12 c_666 m_b_10">品牌理念</div>
            <div class="f_s_12 c_666 m_b_10">品牌荣誉</div>
        </div>
        <div class="flex flex_column w_180">
            <div class="f_s_14 c_333 f_w_700 m_b_20">新闻资讯</div>
            <div class="f_s_12 c_666 m_b_10">公司资讯</div>
        </div>
        <div class="flex flex_column w_180">
            <div class="f_s_14 c_333 f_w_700 m_b_20">产品介绍</div>
            <div class="f_s_12 c_666 m_b_10">最新产品</div>
            <div class="f_s_12 c_666 m_b_10">水培</div>
            <div class="f_s_12 c_666 m_b_10">补光</div>
            <div class="f_s_12 c_666 m_b_10">帐篷</div>
            <div class="f_s_12 c_666 m_b_10">配件</div>
        </div>
        <div class="flex flex_column w_180">
            <div class="f_s_14 c_333 f_w_700 m_b_20">服务中心</div>
            <div class="f_s_12 c_666 m_b_10">售前服务</div>
            <div class="f_s_12 c_666 m_b_10">售后服务</div>
            <div class="f_s_12 c_666 m_b_10">联系我们</div>
            <div class="f_s_12 c_666 m_b_10">品牌理念</div>
            <div class="f_s_12 c_666 m_b_10">常见问题</div>
        </div>
        <div class="flex flex_column w_180">
            <div class="f_s_14 c_333 f_w_700 m_b_20">友情链接</div>
            <div class="f_s_12 c_666 m_b_10">欧美家具</div>
            <div class="f_s_12 c_666 m_b_10">欧美沙发</div>
        </div>
      </div>
    <div class="f_s_12 c_333 m_t_80">
        Copyright © 2020 IGS 版权所有粤ICP备19129868号
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
