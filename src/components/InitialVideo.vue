<template>
  <div class='initialVideo' v-show="!hidedVideo">
    <button type="button" class="btn btn-outline-danger" @click="hideVideo">Видел я ваш видосик</button>
    <video autoplay controls id='video'>
    <!--<video autoplay id='video'>-->
      <source src='./../assets/media/intro.mp4' type='video/mp4'/>
    </video>
  </div>
</template>

<script>
  export default {
    name: 'InitialVideo',
    data() {
      return {
        hidedVideo: false
      }
    },
    mounted() {
      this.videoInit();
    },
    methods: {
      videoInit() {
        const video = document.getElementById('video');
        localStorage.isPlayed && video.pause();
        video.play();
        video.addEventListener('ended', (() => {
          this.hidedVideo = true;
        }), false);
        // if (!localStorage.isPlayed) {
        //   video.play();
        //   video.addEventListener('ended', (() => {
        //     this.hidedVideo = true;
        //   }), false);
        //   localStorage.setItem('isPlayed', '1')
        // } else {
        //   this.hidedVideo = true;
        // }
      },
      hideVideo () {
        this.hidedVideo = true
      }
    }
  }
</script>

<style lang='scss' scoped>
  .initialVideo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
    overflow: hidden;
  }
  #video {
    object-fit: cover;
    height: 100vh;
    width: 100%;
    max-width: 100%;
  }
  video[poster] {
    height: 100%;
    width: 100%;
    background: black;
  }
  button {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 123123123;
    /*width: 50px;*/
    /*height: 50px;*/
  }
</style>
