<template>
  <div class='initialVideo' :class="{ finished: hidedVideo }">
    <video autoplay controls id='video' >
      <source src='./../assets/media/intro.mp4' type='video/mp4'>
    </video>
  </div>
</template>

<script>
  export default {
    name: 'InitialVideo',
    data () {
      return {
        hidedVideo: false
      }
    },
    methods: {
      videoInit () {
        const video = document.getElementById('video');
        document.getElementById('video').addEventListener('ended', (() => this.hidedVideo = true), false);
        if (!localStorage.isPlayed) {
          localStorage.setItem('isPlayed', '1');
          if (!this.hidedVideo) {
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
              video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
              video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
              video.msRequestFullscreen();
            }
          }
        } else {
          this.hidedVideo = true
        }
      }
    },
    computed: {
    },
    mounted() {
      this.videoInit()
    }
  }
</script>

<style lang='scss'>
  .initialVideo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
    overflow: hidden;
    &.finished {
      display: none;
    }
  }
  #video {
    height: 100vh;
    object-fit: cover;
    max-width: 100%;
  }
  video[poster] {
    height:100%;
    width:100%;
    background: black;
  }
</style>
