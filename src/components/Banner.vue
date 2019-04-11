<template>
  <div class='banner'>
    <div class="banner-wrap">
      <div class="banner-title">Jumanji</div>
      <span class="banner-des">Новая История</span>
      <div class="banner-b">
        <button class="btn btn-primary">Зарегистрироваться</button>
        <button class="btn btn-outline-primary custom">
          <img src="./../assets/images/icon-play-24-px.png" alt="">Смотреть видео
        </button>
      </div>
    </div>
    <div class="bot-nav">
      <img src="./../assets/images/icon-mouse.png" alt="" class="mouse">
      <div class="bot-nav-wrap">
        <a href="https://www.instagram.com/jumanji_camp/" target="_blank">
          <img src="./../assets/images/logo-insta-24-px.png" alt="">Инстаграм
        </a>
        <a href="https://t.me/joinchat/CMPmuEZKwWwbo4r_Qx-HLg" target="_blank">
          <img src="./../assets/images/logo-telegram-24-px.png" alt="">Телеграм
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      hidedVideo: false
    }
  }
}
</script>


<style scoped lang="scss">
  @import "../assets/scss/_main.scss";
  .banner {
    position: relative;
    width: 100%;
    height: 100vh;
    &:before {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      background-image: url("../../src/assets/images/banner.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &:after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, .6);
    }
    &-wrap {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 400px;
      width: 100%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url("../../src/assets/images/texture.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transform: rotate(42deg);
        opacity: 0.3;
        z-index: -1;
        overflow: hidden;
      }
    }
    &-title {
      font-family: 'Sangha', sans-serif;
      font-size: 100px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      color: #ffffff;
      letter-spacing: 0.1px;
      position: relative;
      margin-bottom: 25px;
      @media (max-width: 768px) {
        font-size: 4em;
      }
    }
    &-des {
      font-family: 'Evolventa-Regular', sans-serif;
      font-size: 32px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 3.2px;
      text-align: center;
      color: rgba(255, 255, 255, 0.66);
      margin-bottom: 75px;
      @media (max-width: 768px) {
        font-size: 1.2em;
        margin-bottom: 25px;
      }
    }
    &-b {
      display: flex;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      button {
        margin: 0 15px;
        font-size: 1em;
        white-space: nowrap;
        border-radius: 3px;
        background: #008dff;
        @media (max-width: 768px) {
          margin: 0 0 15px;
          font-size: .8em;
        }
        &:hover {
          background: #0074d1;
        }
        &.custom {
          border: none;
          background: none;
          color: #fff;
          transition: .2s;
          img {
            padding: 0 10px 2px 0;
          }
          &:hover {
            color: rgba(255,255,255,.7);
          }
        }
      }
    }
  }
  .bot-nav {
    position: absolute;
    bottom: 60px;
    right: 0;
    left: 0;
    z-index: 1;
    color: #fff;
    @media (max-width: 768px) {
      bottom: 80px;
    }
    .mouse {
      position: absolute;
      left: 50%;
      transform: translate(50%);
      max-height: 32px;
      max-width: 32px;
      @media (max-width: 768px) {
        bottom: -60px;
      }
    }
    a {
      color: inherit;
      font-size: 14px;
      letter-spacing: .5px;
      opacity: .8;
      transition: .2s;
      &:hover {
        text-decoration: none;
        opacity: .4;
      }
    }
  }
  .bot-nav-wrap {
    display: flex;
    justify-content: flex-end;
    margin: 0 70px;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-end;
    }
    @media (max-width: 768px) {
      margin: 0 15px;
      a {
        font-size: .75em;
      }
    }
    img {
      height: 25px;
      width: 25px;
      margin: 0 10px;
    }
    a:last-child {
      margin: 0 0 0 50px;
    }
    a {
      @media (max-width: 1024px) {
        margin: 0 0 10px;
      }
    }
  }
</style>
