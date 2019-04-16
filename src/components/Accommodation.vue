<template>
  <div class='accom'>
    <img src="./../assets/images/texture8.png" alt="" class="texture-8">
    <img src="./../assets/images/texture9.png" alt="" class="texture-9">
    <img src="./../assets/images/texture10.png" alt="" class="texture-10">
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
                       :slideImageInside="true"
                       :breakpoints="{ 900: {visibleSlides: 1} }">
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"></vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'
  import base1 from './../assets/images/base1.jpg'
  import base2 from './../assets/images/base2.jpg'
  import base3 from './../assets/images/base3.jpg'
  import base4 from './../assets/images/base4.jpg'
  import base5 from './../assets/images/base5.jpg'
  import base6 from './../assets/images/base6.jpg'

  export default {
    name: 'Accommodation',
    components: {
      VueperSlides,
      VueperSlide
    },
    data: () => ({
      slides: [
        { title: 'Mountain 1', content: 'Slide content 1', image: base1},
        { title: 'Mountain 1', content: 'Slide content 1', image: base2},
        { title: 'Mountain 1', content: 'Slide content 1', image: base3},
        { title: 'Mountain 1', content: 'Slide content 1', image: base4},
        { title: 'Mountain 1', content: 'Slide content 1', image: base5},
        { title: 'Mountain 1', content: 'Slide content 1', image: base6}
      ]
    })
  }
</script>


<style lang="scss">
  @import "../assets/scss/_main.scss";
  .accom {
    position: relative;
    &:before {
      background-image: url("./../assets/images/stripes.svg");
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      background-position: bottom;
      background-repeat: no-repeat;
      /*background-size: cover;*/
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  .accom-wrap {
    margin: 60px auto 50px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    @media (max-width: 900px) {
      margin: 30px auto 50px;
    }
    @media (max-width: 500px) {
      margin: 30px auto 0;
    }
  }
  .texture-8,
  .texture-9,
  .texture-10 {
    position: absolute;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    @media (max-width: 768px) {
      opacity: .6;
    }
  }
  .texture-8 {
    bottom: 0;
    left: 30%;
    top: -50px;
    width: 100%;
    max-width: 85px;
    height: 100%;
    max-height: 90px;
  }
  .texture-9 {
    bottom: 0;
    left: 5%;
    top: -50px;
    width: 100%;
    max-width: 85px;
    height: 100%;
    max-height: 90px;
    @media (max-width: 768px) {
      top: 150px;
    }
  }
  .texture-10 {
    bottom: 0;
    right: 15%;
    top: -50px;
    width: 100%;
    max-width: 85px;
    height: 100%;
    max-height: 90px;
    @media (max-width: 768px) {
      top: 50px;
    }
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
    height: 40px;
    width: 40px;
    padding: 2px 8px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 4px 9px 0 rgba(33, 35, 42, 0.2);
    opacity: 1;
    &:hover {
      box-shadow: 0 4px 9px 0 rgba(33, 35, 42, 0.8);
    }
    &:focus {
      outline: none;
    }
    svg {
      display: none;
    }
    &:before {
      bottom: 0;
      right: 0;
      top: 6px;
      content: '';
      position: absolute;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      width: 26px;
      height: 26px;
    }
  }
  .vueperslides__arrows--outside {
    .vueperslides__arrow--next {
      right: -25px;
      &:before {
        background-image: url("./../assets/images/right.png");
      }
    }
    .vueperslides__arrow--prev {
      left: -25px;
      &:before {
        background-image: url("./../assets/images/left.png");
      }
    }
  }
  .vueperslides__arrows {
    .vueperslides__arrow--next {
      &:before {
        background-image: url("./../assets/images/right.png");
        left: 8px;
      }
    }
    .vueperslides__arrow--prev {
      &:before {
        background-image: url("./../assets/images/left.png");
        left: 5px;
      }
    }
  }
  @media (max-width: 900px) {
    .vueperslides__parallax-wrapper,
    .vueperslides__track-inner,
    .vueperslide {
      max-height: 600px;
      height: 600px;
      padding-bottom: 0 !important;
    }
  }
</style>
