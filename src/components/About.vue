<template>
  <div class='about' data-aos='fade-up'>
    <div class='about-wrap'>
      <div class='heading'>
        <p>Лето пролетит быстро и незаметно, но ты можешь успеть ухватить неделю ярких впечатлений в загадочном <span>Jumanji Camp </span></p>
        <div class='creators'>
          <h5>От создателей</h5>
          <a href='https://www.facebook.com/youtoocenter/' target='_blank'>
            <img src='./../assets/images/you-too.svg' alt=''>
          </a>
          <a href='https://www.instagram.com/prostirz/' target='_blank'>
            <img src='./../assets/images/prostirz.svg' alt=''>
          </a>
        </div>
      </div>
      <div class='desc'>
        <div class='when desc-block'>
          <div>
            <h3>Когда? <span>🗓️</span></h3>
            <p class='desc-block-price'>C 21 по 28 июля</p>
            <div class='img-container'>
              <img src='../assets/images/when.jpg' alt=''>
            </div>
          </div>
        </div>
        <div class='where desc-block'>
          <div>
            <h3>Где? <span>🤔</span></h3>
            <p>Среди соснового леса на базе отдыха
              «Нептун» возле Оскольского
              водохранилища.</p>
            <div class='img-container'>
              <img src='./../assets/images/where.jpg' alt=''>
            </div>
          </div>
        </div>
        <div class='for desc-block'>
          <div>
            <h3>Для кого? <span>🔥️</span></h3>
            <p>Для молодых людей с 13 до 16 лет, которые хотят запомнить это лето навсегда!</p>
            <div class='img-container'>
              <img src='./../assets/images/for.png' alt=''>
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

<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .about {
    overflow: hidden;
  }
  .about-wrap {
    max-width: 1170px;
    margin: 0 auto;
    padding: 80px 15px 15px;
    position: relative;
    .heading {
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
        @media (max-width: 1000px) {
          bottom: -10vh;
          opacity: .1;
        }
      }
      &:before {
        top: 0;
        right: 0;
        left: -20vw;
        bottom: 0;
        background-image: url('../../src/assets/images/texture4.png');
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
        background-image: url('../../src/assets/images/texture5.png');
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
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        max-width: 550px;
        width: 100%;
        @media (max-width: 1000px) {
          position: relative;
          transform: none;
          left: 0;
          margin: 0 auto 50px;
        }
        @media (max-width: 768px) {
          font-size: 1.1em;
          max-width: 300px;
        }
      }
      span {
        color: #268b67;
      }
      .creators {
        max-width: 200px;
        float: right;
        text-align: center;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
        @media (max-width: 1000px) {
          float: none;
          margin: 0 auto;
        }
        h5 {
          font-family: 'Evolventa-Bold', sans-serif;
          font-size: 1em;
          letter-spacing: 0.5px;
          color: #545764;
          margin-bottom: 25px;
        }
        img {
          margin-bottom: 25px;
        }
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
  }
  .when {
    max-width: 400px;
    .img-container {
      &:before {
        background-image: url('../../src/assets/images/texture.png');
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
        background-image: url('../../src/assets/images/texture2.png');
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
      background-image: url('../../src/assets/images/texture6.png');
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
        background-image: url('../../src/assets/images/texture3.png');
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
</style>
