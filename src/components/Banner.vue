<template>
  <div class='banner'>
    <video loop='loop' autoplay='autoplay' muted='muted' class='video'>
      <source src='./../../src/assets/media/intro.mp4'/>
    </video>
    <div class='banner-wrap'>
      <div class='banner-title'>Jumanji</div>
      <span class='banner-des'>Новая История</span>
      <div class='banner-b'>
        <a href='http://forms.gle/4qpwmahFsMSQHYyR6' target='_blank' class='btn btn-primary'>Зарегистрироваться</a>
        <a href='https://www.youtube.com/watch?v=32w4KyDh_LA' target='_blank' class='btn btn-outline-primary custom'>
          <img src='./../assets/images/icon-play-24-px.png' alt=''>Смотреть видео
        </a>
      </div>
    </div>
    <div class='icon-scroll'></div>
    <div class='bot-nav'>
      <div class='bot-nav-wrap'>
        <a href='https://www.instagram.com/jumanji_camp/' target='_blank'>
          <img src='./../assets/images/logo-insta-24-px.png' alt=''>Инстаграм
        </a>
        <a href='https://t.me/JumanjiCamp' target='_blank'>
          <img src='./../assets/images/logo-telegram-24-px.png' alt=''>Телеграм
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


<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .banner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    &:after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, .8);
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
      overflow: initial;
      &:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('../../src/assets/images/texture.png');
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
        height: 300px;
        width: 300px;
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
      a {
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
    .video {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
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
      bottom: 30px;
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
  .icon-scroll,
  .icon-scroll:before {
    position: absolute;
    left: 50%;
    z-index: 1;
  }
  .icon-scroll {
    width: 30px;
    height: 53px;
    margin-left: -20px;
    margin-top: -35px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
    bottom: 50px;
    transform: translate(50%);
  }
  .icon-scroll {
    &:before {
      content: '';
      width: 8px;
      height: 8px;
      background: #fff;
      margin-left: -4px;
      top: 8px;
      border-radius: 4px;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: scroll;
    }
  }
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
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
        font-size: 0;
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
