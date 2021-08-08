

<template>
  <div class="">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import ProductA from '@/views/product/Product-A.vue'

export default {
  name: 'Home',
  components: {
    Header,
    // ProductA,
    Footer,
  }
}
</script>
