/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '@/views/Index.vue'
import Home from '@/views/Home.vue'
import CompanyInformation from '@/views/CompanyInformation.vue'
import ContactUs from '@/views/ContactUs.vue'

import Product from '@/views/product/Index.vue'
import ProductShuiPei from '@/views/product/shuipei/Index.vue'
import ProductIGS01 from '@/views/product/shuipei/Product-IGS-01.vue'
import ProductIGS02 from '@/views/product/shuipei/Product-IGS-02.vue'
import ProductIGS03 from '@/views/product/shuipei/Product-IGS-03.vue'
import ProductIGS05 from '@/views/product/shuipei/Product-IGS-05.vue'
import ProductIGS06 from '@/views/product/shuipei/Product-IGS-06.vue'
import ProductIGS09 from '@/views/product/shuipei/Product-IGS-09.vue'
import ProductIGS10 from '@/views/product/shuipei/Product-IGS-10.vue'
import ProductIGS14 from '@/views/product/shuipei/Product-IGS-14.vue'
import ProductIGS21 from '@/views/product/shuipei/Product-IGS-21.vue'
import ProductIGS22 from '@/views/product/shuipei/Product-IGS-22.vue'

import ProductBuguang from '@/views/product/buguang/Index.vue'
import ProductIGS11 from '@/views/product/buguang/Product-IGS-11.vue'
import ProductIGS12 from '@/views/product/buguang/Product-IGS-12.vue'
import ProductIGS13 from '@/views/product/buguang/Product-IGS-13.vue'
import ProductIGS31 from '@/views/product/buguang/Product-IGS-31.vue'
import ProductIGS32 from '@/views/product/buguang/Product-IGS-32.vue'
import ProductIGS33 from '@/views/product/buguang/Product-IGS-33.vue'
import ProductIGS51 from '@/views/product/buguang/Product-IGS-51.vue'
import ProductIGS02W from '@/views/product/buguang/Product-IGS-02W.vue'
import ProductIGS02B from '@/views/product/buguang/Product-IGS-02B.vue'

import ProductZhangPeng from '@/views/product/zhangpeng/Index.vue'
import ProductIGST01 from '@/views/product/zhangpeng/Product-IGS-T01.vue'
import ProductIGST02 from '@/views/product/zhangpeng/Product-IGS-T02.vue'
import ProductIGST03 from '@/views/product/zhangpeng/Product-IGS-T03.vue'

import ProductPeiJian from '@/views/product/peijian/Index.vue'
import ProductIGSBiocharMud from '@/views/product/peijian/Product-IGS-Biochar-Mud.vue'
import ProductIGSPP from '@/views/product/peijian/Product-IGS-PP.vue'
import ProductIGSNutA from '@/views/product/peijian/Product-IGS-Nut-A.vue'
import ProductIGSNutB from '@/views/product/peijian/Product-IGS-Nut-B.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
  return (originalPush.call(this, location) as any).catch((err: any) => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'company-information',
        name: 'CompanyInformation',
        component: CompanyInformation
      },
      {
        path: 'contact-us',
        name: 'ContactUs',
        component: ContactUs
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: 'product',
        name: 'Product',
        component: Product,
        children: [
          {
            path: 'igs-shui-pei',
            name: 'ProductShuiPei',
            component: ProductShuiPei
          },
          {
            path: 'igs-bu-guang',
            name: 'ProductBuguang',
            component: ProductBuguang
          },
          {
            path: 'igs-zhang-peng',
            name: 'ProductZhangPeng',
            component: ProductZhangPeng
          },
          {
            path: 'igs-pei-jian',
            name: 'ProductPeiJian',
            component: ProductPeiJian
          },

          {
            path: 'igs-10',
            name: 'ProductIGS10',
            component: ProductIGS10
          },
          {
            path: 'igs-01',
            name: 'ProductIGS01',
            component: ProductIGS01
          },
          {
            path: 'igs-02',
            name: 'ProductIGS02',
            component: ProductIGS02
          },
          {
            path: 'igs-05',
            name: 'ProductIGS05',
            component: ProductIGS05
          },
          {
            path: 'igs-21',
            name: 'ProductIGS21',
            component: ProductIGS21
          },
          {
            path: 'igs-22',
            name: 'ProductIGS22',
            component: ProductIGS22
          },
          {
            path: 'igs-03',
            name: 'ProductIGS03',
            component: ProductIGS03
          },
          {
            path: 'igs-22',
            name: 'ProductIGS22',
            component: ProductIGS22
          },
          {
            path: 'igs-06',
            name: 'ProductIGS06',
            component: ProductIGS06
          },
          {
            path: 'igs-09',
            name: 'ProductIGS09',
            component: ProductIGS09
          },
          {
            path: 'igs-11',
            name: 'ProductIGS11',
            component: ProductIGS11
          },
          {
            path: 'igs-12',
            name: 'ProductIGS12',
            component: ProductIGS12
          },
          {
            path: 'igs-13',
            name: 'ProductIGS13',
            component: ProductIGS13
          },
          {
            path: 'igs-14',
            name: 'ProductIGS14',
            component: ProductIGS14
          },
          {
            path: 'igs-31',
            name: 'ProductIGS31',
            component: ProductIGS31
          },
          {
            path: 'igs-32',
            name: 'ProductIGS32',
            component: ProductIGS32
          },
          {
            path: 'igs-33',
            name: 'ProductIGS33',
            component: ProductIGS33
          },
          {
            path: 'igs-51',
            name: 'ProductIGS51',
            component: ProductIGS51
          },
          {
            path: 'igs-02W',
            name: 'ProductIGS02W',
            component: ProductIGS02W
          },
          {
            path: 'igs-02B',
            name: 'ProductIGS02B',
            component: ProductIGS02B
          },
          {
            path: 'igs-T01',
            name: 'ProductIGST01',
            component: ProductIGST01
          },
          {
            path: 'igs-T02',
            name: 'ProductIGST02',
            component: ProductIGST02
          },
          {
            path: 'igs-T03',
            name: 'ProductIGST03',
            component: ProductIGST03
          },
          {
            path: 'igs-biochar-mud',
            name: 'ProductIGSBiocharMud',
            component: ProductIGSBiocharMud
          },
          {
            path: 'igs-pp',
            name: 'ProductIGSPP',
            component: ProductIGSPP
          },
          {
            path: 'igs-nut-a',
            name: 'ProductIGSNutA',
            component: ProductIGSNutA
          },
          {
            path: 'igs-nut-b',
            name: 'ProductIGSNutB',
            component: ProductIGSNutB
          },
        ]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router