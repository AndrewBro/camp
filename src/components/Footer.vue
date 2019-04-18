<template>
  <div class='footer' data-aos='fade-up' data-aos-easing='linear' data-aos-duration='500'>
    <div class='footer-wrap'>
      <div class='left'>
        <h3>Контакты</h3>
        <p>Если у вас остались вопросы, можете задать
          их любым удобным  для вас способом.</p>
        <a href='tel:+380639734390' class='call'>+380639734390</a>
        <a href='tel:+380971141187' class='call'>+380971141187</a>
        <div class='social'>
          <a href='https://www.instagram.com/jumanji_camp/'>Инстаграм</a>
          <a href='https://t.me/JumajiCamp'>Телеграм</a>
        </div>
      </div>
      <div class='right'>
        <div class='map'>
          <a href='https://www.google.com.ua/maps/place/%D0%91%D0%B0%D0%B7%D0%B0+%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0+%22%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD%22/@49.2738794,37.5635636,17.12z/data=!4m5!3m4!1s0x4120903c55555555:0x4741bf7c44329931!8m2!3d49.2738713!4d37.5633957?shorturl=1'>
            <img src='../assets/images/map.png' alt=''>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .footer {
    background-color: #008dff;
    position: relative;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      right: -50%;
      left: 75%;
      width: 100%;
      height: 100%;
      background-image: url('./../../src/assets/images/texture7.png');
      z-index: 0;
    }
  }
  .footer-wrap {
    max-width: 1024px;
    margin: 0 auto;
    padding: 70px 15px 80px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    font-family: 'Evolventa-Bold', sans-serif;
    letter-spacing: 0.8px;
    z-index: 1;
    position: relative;
    @media (max-width: 850px) {
      flex-direction: column;
      max-width: 100%;
    }
    .left {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      @media (max-width: 850px) {
        margin-bottom: 50px;
      }
      h3 {
        font-size: 48px;
        margin-bottom: 45px;
        color: inherit;
      }
      p {
        margin-bottom: 30px;
        font-family: 'Evolventa-Regular', sans-serif;
        font-size: 20px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0.5px;
      }
      .call {
        font-size: 32px;
        color: inherit;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 50px;
        }
      }
      a {
        transition: .3s;
      }
      .social {
        display: flex;
        a {
          border-radius: 3px;
          background-color: #21232a;
          margin: 0 20px 0 0;
          padding: 5px 20px 8px;
          color: #fff;
          font-size: 1em;
          font-family: 'Evolventa-Regular', sans-serif;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
    .right {
      max-width: 480px;
      height: 100%;
      @media (max-width: 850px) {
        max-width: 100%;
      }
    }
    .map {
      a {
        img:hover {
          opacity: .9;
          transition: all .5s;
          transform: scale(1.05);
        }
      }
      img {
        max-width: 400px;
        max-height: 400px;
        height: 100%;
        object-fit: cover;
        transition:  .5s;
        @media (max-width: 850px) {
          max-width: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
