<template>
  <div id="app">
    <transition-group name="fade" appear>
      <div :key="key">
        <Header/>
        <Banner/>
        <About/>
        <Experience/>
        <!--<Parents/>-->
        <Accommodation/>
        <AboutCamp/>
        <Gallery/>
        <Cost/>
        <Footer/>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Banner from './components/Banner.vue'
  import About from './components/About.vue'
  import Gallery from './components/Gallery.vue'
  import Footer from './components/Footer.vue'
  import Cost from "./components/Cost.vue";
  import Accommodation from "./components/Accommodation.vue";
  import Experience from "./components/Experience.vue";
  import Parents from "./components/Parents.vue";
  import AboutCamp from "./components/AboutCamp.vue";

  export default {
    name: 'app',
    components: {
      Header,
      Banner,
      About,
      Experience,
      Gallery,
      Cost,
      AboutCamp,
      Parents,
      Accommodation,
      Footer
    },
    data() {
      return {
        key: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "assets/scss/_main.scss";
  @font-face {
    font-family: "Sangha";
    src: url("assets/font/Sangha-font/Sangha.ttf") format("ttf"),
    url("./assets/font/Sangha-font/Sangha.eot") format("eot"),
    url("./assets/font/Sangha-font/Sangha.woff") format("woff"),
    url("./assets/font/Sangha-font/Sangha.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Evolventa-Bold";
    src: url("./assets/font/Evolventa-font/Evolventa-Bold.ttf") format("ttf"),
    url("./assets/font/Evolventa-font/Evolventa-Bold.eot") format("eot"),
    url("./assets/font/Evolventa-font/Evolventa-Bold.woff") format("woff"),
    url("./assets/font/Evolventa-font/Evolventa-Bold.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: "Evolventa-Regular";
    src: url("./assets/font/Evolventa-font/Evolventa-Regular.ttf") format("ttf"),
    url("./assets/font/Evolventa-font/Evolventa-Regular.eot") format("eot"),
    url("./assets/font/Evolventa-font/Evolventa-Regular.woff") format("woff"),
    url("./assets/font/Evolventa-font/Evolventa-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
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
