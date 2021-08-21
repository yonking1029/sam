<template>
  <div class="sticky" @mouseleave="onMenuChange({})">
    <div class="flex flex_ai_c flex_jc_c bg_000 h_44 f_s_12 c_fff">
      <div class="m_l_60 pointer" @click="onGoHome">
        <img src="@/assets/logo.png" class="w_60 h_30" />
      </div>
      <div class="flex_1 flex_center">
        <div class="flex">
          <div
            class="p_lr_20 pointer h_44 l_h_44 t_a_c"
            v-for="item in menus"
            :key="item.id"
            @mouseover="onMenuChange(item)"
            @click="onMenuClick(item)"
          >
            {{ item.lable }}
          </div>
        </div>
      </div>
      <div class="m_r_60">语言</div>
    </div>
    <transition name="fade" mode="out-in">
      <div
        v-show="menus2 && menus2.length"
        class="menu-box-2 flex_center flex_column bg_f9f9fa c_999 h_44 f_s_12"
      >
        <div class="flex">
          <div
            class="m_lr_20 pointer"
            v-for="item in menus2"
            :key="item.id"
            @click="onMenuChildrenChange(item)"
          >
            {{ item.lable }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Prop, Vue } from "vue-property-decorator";
class Menus {
  public key: Number;
  public lable: String;
  public path: String;
  public children: Array<Children>;
  constructor(
    key: Number,
    lable: String,
    path: String,
    children: Array<Children>
  ) {
    this.key = key;
    this.lable = lable;
    this.path = path;
    this.children = children;
  }
}
class Children {
  public lable: String;
  public name: String;
  public path: String;
  constructor(lable: String, name: String, path: String) {
    this.lable = lable;
    this.name = name;
    this.path = path;
  }
}
@Component
export default class Index extends Vue {
  @Prop() private msg!: string;
  private current: Number;
  private menus = new Array(
    new Menus(
      1,
      "水培",
      "/product/igs-shui-pei",
      new Array(
        new Children("igs-01", "ProductIGS01", "/product/igs-01"),
        new Children("igs-02", "ProductIGS02", "/product/igs-02"),
        // new Children("igs-03", "ProductIGS03", "/product/igs-03"),
        new Children("igs-05", "ProductIGS05", "/product/igs-05"),
        new Children("igs-06", "ProductIGS06", "/product/igs-06"),
        new Children("igs-09", "ProductIGS09", "/product/igs-09"),
        new Children("igs-10", "ProductIGS10", "/product/igs-10"),
        new Children("igs-14", "ProductIGS14", "/product/igs-14"),
        new Children("igs-21", "ProductIGS21", "/product/igs-21"),
        new Children("igs-22", "ProductIGS22", "/product/igs-22")
      )
    ),
    new Menus(
      2,
      "补光",
      "/product/igs-bu-guang",
      new Array(
        new Children("igs-11", "ProductIGS11", "/product/igs-11"),
        new Children("igs-12", "ProductIGS12", "/product/igs-12"),
        new Children("igs-13", "ProductIGS13", "/product/igs-13"),
        new Children("igs-02W", "ProductIGS02W", "/product/igs-02W"),
        new Children("igs-02B", "ProductIGS02B", "/product/igs-02B"),
        new Children("igs-31", "ProductIGS31", "/product/igs-31"),
        new Children("igs-32", "ProductIGS32", "/product/igs-32"),
        new Children("igs-33", "ProductIGS33", "/product/igs-33"),
        new Children("igs-51", "ProductIGS51", "/product/igs-51")
      )
    ),
    new Menus(
      3,
      "帐篷",
      "/product/igs-zhang-peng",
      new Array(
        new Children("igs-T01", "ProductIGST01", "/product/igs-T01"),
        new Children("igs-T02", "ProductIGST02", "/product/igs-T02"),
        new Children("igs-T03", "ProductIGST03", "/product/igs-T03")
      )
    ),
    new Menus(
      4,
      "配件",
      "/product/igs-pei-jian",
      new Array(
        new Children(
          "igs-biochar-mud",
          "ProductIGSBiocharMud",
          "/product/igs-biochar-mud"
        ),
        new Children("igs-pp", "ProductIGSPP", "/product/igs-pp"),
        new Children("igs-nut-a", "ProductIGSNutA", "/product/igs-nut-a"),
        new Children("igs-nut-b", "ProductIGSNutB", "/product/igs-nut-b")
      )
    ),
    new Menus(5, "公司资讯", "/company-information", new Array()),
    new Menus(6, "联系我们", "/contact-us", new Array())
  );
  private menus2 = new Array();

  constructor() {
    super();
    this.current = 1;
  }
  mounted() {
    let { name } = this.$route;
    if (name) {
      this.menus.forEach((item) => {
        item.children.forEach((child) => {
          if (child.name === name) {
            this.current = item.key || 1;
            this.menus2 = item.children;
          }
        });
      });
    }
  }
  getItems = () => {
    const temp = this.menus.filter((item) => {
      return item.key === this.current;
    });
    return temp[0].children;
  };
  onGoHome() {
    this.$router.push({ name: "Home" });
  }
  onMenuChange(item: any): void {
    this.current = item.key;
    this.menus2 = item.children;
  }
  onMenuClick(item: any): void {
    this.$router.push(item.path);
  }
  onMenuChildrenChange(item: any): void {
    this.$router.push(item.path);
  }
  onGoPage(name: string) {
    this.$router.push(name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.8s;
}
.menu-box-2 {
  position: absolute;
  top: 45px;
  width: 100%;
  z-index: 1;
}
</style>
