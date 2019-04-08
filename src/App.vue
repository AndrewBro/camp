<template>
  <div id="app">
    <Header />
    <Banner />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    About,
    Footer
  }
}
</script>

<style>
</style>
