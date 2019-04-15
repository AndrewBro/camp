<template>
  <div class='accom'>
    <h1 class="title">Условия проживания</h1>
    <p class="text">
      Лагерь будет проходить на недавно отреконструированной базе отдыха «Нептун» возле Оскольского водохранилища.
      Каждая группа будет жить отдельно в своем уютном деревянном домике, в котором есть все необходимые условия для комфота електричество, кондиционер, холодильник, душевая кабинка.
      Вас ждет 3-х разовое питание и снек после ужина.
    </p>
    <div class="accom-wrap">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#000"
        img-width="1024"
        img-height="180"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <b-carousel-slide>
          <img slot="img"
               class="d-block img-fluid w-100"
               src="./../assets/images/base1.jpg"
               alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img"
               class="d-block img-fluid w-100"
               src="./../assets/images/base2.jpg"
               alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img"
               class="d-block img-fluid w-100"
               src="./../assets/images/base3.jpg"
               alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img"
               class="d-block img-fluid w-100"
               src="./../assets/images/base4.jpg"
               alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img"
               class="d-block img-fluid w-100"
               src="./../assets/images/base5.jpg"
               alt="image slot">
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img"
               class="d-block img-fluid w-100"
               src="./../assets/images/base6.jpg"
               alt="image slot">
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  export default {
    name: 'Accommodation',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/scss/_main.scss";
  .accom {
    background: #f6f9fc;
  }
  .accom-wrap {
    background: #f6f9fc;
    img {
      max-height: 600px;
      object-fit: contain;
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
    margin: 0 auto 2em;
    text-align: center;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #21232a;
  }
</style>
