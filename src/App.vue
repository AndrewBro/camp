<template>
  <div id="app">
    <InitialVideo :v-if="isPlayed" />
    <div class="main-conteiner" :v-if="!isPlayed">
      <transition-group name="fade" appear>
        <div :key="key">
          <Header/>
          <Banner/>
          <About/>
          <Footer/>
        </div>
      </transition-group>
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
    data() {
      return {
        isPlayed: false,
        key: true
      }
    },
    methods: {
      videoInit() {
        !localStorage.isPlayed ? this.isPlayed = true : this.isPlayed = false
      }
    },
    mounted() {
      this.videoInit();
    }
  }
</script>

<style>
  #app {
    position: relative;
  }
  .fade-item {
    display: inline-block;
    margin-right: 10px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
