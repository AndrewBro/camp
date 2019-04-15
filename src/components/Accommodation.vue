<template>
  <div class='accom'>
    <div class="accom-wrap">
      <h1 class="title">Проживание</h1>
      <p class="text">
        Лагерь будет проходить на современной, недавно отреставрированной базе отдыха «Нептун», недалеко от Оскольского
        водохранилища. Каждая группа будет жить в своем отдельном деревянном домике, расположенном в тени леса. Там есть
        электричество, душ с горячей водой и туалеты. Питание будет трехразовым, а перед сном приятным бонусом будет снек.
        На территории круглосуточно будет работать медсестра.
      </p>
      <div class="accom-content">
        <vueper-slides class="no-shadow"
                       :visible-slides="3"
                       :arrows="true"
                       :bullets="false"
                       :autoplay="false"
                       :breakpoints="{ 900: {visibleSlides: 1} }">
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"/>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  export default {
    name: 'Accommodation',
    components: {
      VueperSlides,
      VueperSlide
    },
    data: () => ({
      // slides: [
      //   { title: 'Mountain 1', content: 'Slide content 1', image: 'dist/img/base1.766fa4ce.jpg'},
      //   { title: 'Mountain 2', content: 'Slide content 1', image: 'dist/img/base2.169a8089.jpg'},
      //   { title: 'Mountain 3', content: 'Slide content 1', image: 'dist/img/base3.6c40a24b.jpg'},
      //   { title: 'Mountain 4', content: 'Slide content 1', image: 'dist/img/base4.f1b8d109.jpg'},
      //   { title: 'Mountain 5', content: 'Slide content 1', image: 'dist/img/base5.fdf67d3a.jpg'},
      //   { title: 'Mountain 6', content: 'Slide content 1', image: 'dist/img/base6.d27d1884.jpg'}
      // ]
      slides: [
        { title: 'Mountain 1', content: 'Slide content 1', image: './../assets/images/base1.jpg'},
        { title: 'Mountain 2', content: 'Slide content 1', image: './../assets/images/base2.jpg'},
        { title: 'Mountain 3', content: 'Slide content 1', image: './../assets/images/base3.jpg'},
        { title: 'Mountain 4', content: 'Slide content 1', image: './../assets/images/base4.jpg'},
        { title: 'Mountain 5', content: 'Slide content 1', image: './../assets/images/base5.jpg'},
        { title: 'Mountain 6', content: 'Slide content 1', image: './../assets/images/base6.jpg'}
      ]
    }),
    created() {
      this.slides[0].image = `./../assets/images/base1.jpg`
    }
  }
</script>


<style lang="scss">
  @import "../assets/scss/_main.scss";
  .accom {
    background: #f6f9fc;
    overflow: hidden;
    position: relative;
    &:before {
      background-image: url("./../assets/images/stripes.svg");
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  .accom-wrap {
    position: relative;
    margin: 30px auto 160px;
  }
  .accom-content {
    background: #f6f9fc;
    max-width: 1100px;
    margin: 0 auto;
    @media (max-width: 1400px) {
      max-width: 800px;
    }
  }
  .title {
    font-family: 'Evolventa-Bold', sans-serif;
    font-size: 62px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #21232a;
    margin: 0 auto 1em;
    max-width: 600px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 2.5em;
    }
  }
  .text {
    font-family: 'Evolventa-Bold', sans-serif;
    max-width: 600px;
    margin: 0 auto 60px;
    text-align: center;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #21232a;
    @media (max-width: 768px) {
      margin: 0 auto 30px;
    }
  }
  .vueperslides__track-inner {
    max-height: 380px;
    height: 100%;
  }
  .vueperslide {
    margin: 5px;
    background-size: contain;
    background-repeat: no-repeat;
    max-height: 380px;
    @media (max-width: 900px) {
      margin: 0;
    }
  }
  .vueperslides__parallax-wrapper {
    height: 380px;
    @media (max-width: 900px) {
      height: 400px;
    }
  }
  .vueperslides__arrow {
    padding: 2px 8px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 1px 1px 2px 2px #DADAC9;
    height: 50px;
    opacity: 1;
    &:focus {
      outline: none;
    }
    svg {
      margin-top: -35px;
    }
  }
</style>
