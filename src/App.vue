<template>
  <div id="app">
    <InitialVideo :v-if="isPlayed" />
    <div class="main-conteiner" :v-if="!isPlayed">
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
  },
  data () {
    return {
      isPlayed: false
    }
  },
  methods: {
    videoInit() {
      !localStorage.isPlayed ? this.isPlayed = true : this.isPlayed = false
    }
  },
  mounted() {
    this.videoInit()
  }
}
</script>

<style>
  #app {
    position: relative;
  }
</style>
