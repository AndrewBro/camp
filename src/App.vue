<template>
  <div id="app">
    <InitialVideo />
    <div class="main-conteiner">
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import InitialVideo from "./components/InitialVideo";

export default {
  name: 'app',
  components: {
    InitialVideo,
    Header,
    Banner,
    About,
    Footer
  }
}
</script>

<style>
  #app {
    position: relative;
  }
</style>
