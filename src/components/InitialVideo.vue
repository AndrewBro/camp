<template>
  <div class='initialVideo' :class='{ finished: hidedVideo }'>
    <video autoplay controls id='video'>
    <!--<video autoplay id='video' >-->
      <source src='./../assets/media/intro.mp4' type='video/mp4' />
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
        localStorage.isPlayed && video.pause();
        if (!localStorage.isPlayed) {
          video.play();
          video.addEventListener('ended', (() => this.hidedVideo = true), false);
          localStorage.setItem('isPlayed', '1')
        } else {
          this.hidedVideo = true;
        }

        // const video = document.getElementById('video');
        // const playPromise = video.play();
        // if (playPromise) {
        //   playPromise.then(() => {
        //     const video = document.getElementById('video');
        //     if (!localStorage.isPlayed) {
        //       try {
        //         video.play();
        //         video.addEventListener('ended', (() => this.hidedVideo = true), false);
        //         localStorage.setItem('isPlayed', '1');
        //       } catch (e) {
        //         this.hidedVideo = true;
        //       }
        //     } else {
        //       // video.pause();
        //       this.hidedVideo = true;
        //     }
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        // }
      }
    },
    mounted() {
      this.videoInit();
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
    object-fit: cover;
    height: 100vh;
    width: 100%;
    max-width: 100%;
  }
  video[poster] {
    height:100%;
    width:100%;
    background: black;
  }
  .fade-enter {
    /*transition: opacity 1s;*/
  }
</style>
