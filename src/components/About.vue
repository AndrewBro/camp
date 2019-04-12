<template>
  <div class="about">
    <div class="about-wrap">
      <div class="heading">
        <p data-aos="zoom-in-up">Лето пролетит быстро и незаметно, но ты можешь успеть ухватить неделю ярких впечатлений в загадочном <span>Jumanji CAMP </span></p>
      </div>
      <div class="desc">
        <div class="when desc-block">
          <div data-aos="zoom-in-right">
            <h3>Когда? <span>🗓️</span></h3>
            <p class="desc-block-price">C 21 по 28 июля</p>
            <div class="img-container">
              <img src="../assets/images/for.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="where desc-block">
          <div data-aos="zoom-in-left">
            <h3>Где? <span>🤔</span></h3>
            <p>Среди соснового леса на базе отдыха
              «Нептун» возле Краснооскольского
              водохранилища.</p>
            <div class="img-container">
              <img src="./../assets/images/where.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="for desc-block">
          <div data-aos="zoom-in-right">
            <h3>Для кого? <span>🔥️</span></h3>
            <p>Для современных молодых людей с 13 до 16 лет.</p>
            <p>Больше не стоит вопрос «чем заняться?», «куда пойти?»
              и «с кем пойти?»  в летние жаркие деньки! Ведь Jumanji CAMP
              приготовил для тебя (да, именно для тебя! ☺ ) самое разнообразное
              времяпровождение. Читай и убедись сам!</p>
            <div class="img-container">
              <img src="./../assets/images/for.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/_main.scss";
  .about {
    overflow: hidden;
  }
  .about-wrap {
    max-width: 1170px;
    margin: 0 auto;
    padding: 80px 15px 15px;
  }
  .heading {
    max-width: 670px;
    margin: 0 auto 100px;
    padding: 0 15px;
    position: relative;
    &:before,
    &:after {
      position: absolute;
      content: '';
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 100%;
      @media (max-width: 900px) {
        bottom: -10vh;
        opacity: .2;
      }
    }
    &:before {
      top: 0;
      right: 0;
      left: -20vw;
      bottom: 0;
      background-image: url("../../src/assets/images/texture4.png");
      max-width: 200px;
      @media (max-width: 900px) {
        bottom: -10vh;
      }
    }
    &:after {
      top: 15vh;
      right: 0;
      left: 20vw;
      bottom: -15vh;
      background-image: url("../../src/assets/images/texture5.png");
      @media (max-width: 900px) {
        top: 10vh;
        right: 0;
        left: 45vw;
      }
    }
    @media (max-width: 768px) {
      margin: 0 auto 50px;
    }
    p {
      font-family: 'Evolventa-Bold', sans-serif;
      font-size: 24px;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: 0.5px;
      text-align: center;
      color: #21232a;
      @media (max-width: 768px) {
        font-size: 1.1em;
      }
    }
    span {
      color: #268b67;
    }
  }
  .desc {
    position: relative;
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .when {
    max-width: 400px;
    .img-container {
      &:before {
        background-image: url("../../src/assets/images/texture.png");
        max-width: 200px;
        transform: rotate(90deg) translate(50%, -50%);
      }
    }
  }
  .where {
    max-width: 600px;
    position: absolute;
    top: 100px;
    right: 0;
    @media (max-width: 900px) {
      position: static;
    }
    p {
      max-width: 350px;
    }
    .img-container {
      &:before {
        background-image: url("../../src/assets/images/texture2.png");
        max-width: 330px;
        transform: translate(50%, -15%);
      }
     }
  }
  .for {
    max-width: 700px;
    position: relative;
    &:before {
      position: absolute;
      content: '';
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 100%;
      top: 0;
      right: -25%;
      bottom: 0;
      background-image: url("../../src/assets/images/texture6.png");
      max-width: 200px;
      @media (max-width: 768px) {
        right: 50%;
        bottom: -125%;
        opacity: 0.2;
      }
    }
    p {
      max-width: 600px;
    }
    .img-container {
      &:before {
        background-image: url("../../src/assets/images/texture3.png");
        max-width: 330px;
        transform: translate(50%);
      }
    }
    & > :not(.img-container) {
      margin-left: 50px;
      @media (max-width: 900px) {
        margin-left: 0;
      }
    }
  }
  .desc-block {
    margin: 0 0 100px;
    @media (max-width: 768px) {
      max-width: 500px;
    }
    @media (max-width: 500px) {
      max-width: 320px;
    }
    h3 {
      font-size: 32px;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.5px;
      color: #268b67;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        font-size: 1.1em;
      }
    }
    p {
      font-family: 'Evolventa-Bold', sans-serif;
      line-height: 1.63;
      letter-spacing: 0.5px;
      margin-bottom: 50px;
      @media (max-width: 768px) {
        font-size: .8em;
        margin-bottom: 20px;
      }
    }

    &-price {
      font-size: 30px;
    }

    .img-container {
      position: relative;
      max-width: 390px;
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        z-index: 1;
      }
    }
    img {
      width: 100%;
    }
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
