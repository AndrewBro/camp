<template>
  <div class='initialVideo' v-show="!hidedVideo">
    <div v-if="!loaded">
      <button type="button" class="btn btn-primary btn-sm" @click="hideVideo">Та видел я ваш видосик</button>
      <video autoplay controls id='video'>
      <!--<video autoplay id='video'>-->
        <source src='./../assets/media/intro.mp4' type='video/mp4'/>
      </video>
    </div>
    <div v-else class="spinner-border text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InitialVideo',
    data() {
      return {
        hidedVideo: false,
        loaded: false
      }
    },
    mounted() {
      this.videoInit();
    },
    methods: {
      videoInit() {
        const video = document.getElementById('video');
        if (video) {
          video.addEventListener('loadeddata', function() {
            this.loaded = true;
            video.play();
            video.addEventListener('ended', (() => {
              this.hidedVideo = true;
            }), false);
          }, false);
        }
        // Запись в lacalstorage
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
    z-index: 11;
    border: none;
  }
</style>
