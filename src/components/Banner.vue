<template>
  <div class='banner'>
    <div>
      <b-embed :class="{ active: hidedVideo }" type='video' aspect='16by9' allowfullscreen autoplay controls poster='poster.png' id='video' >
        <source src='./../assets/media/intro.mp4' type='video/mp4'>
      </b-embed>
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
  },
  methods: {
  },
  computed: {
  },
  mounted() {
    const video = document.getElementById('video');
    console.log(this.hidedVideo);
    if (!this.hidedVideo) {
      video.requestFullscreen();
      // if (video.requestFullscreen) {
      // } else if (video.mozRequestFullScreen) {
      //   video.mozRequestFullScreen();
      // } else if (video.webkitRequestFullscreen) {
      //   video.webkitRequestFullscreen();
      // } else if (video.msRequestFullscreen) {
      //   video.msRequestFullscreen();
      // }
    } else {
      console.log(2);
      document.getElementById('video').addEventListener('ended', myHandler, false);
      function myHandler() {
        console.log('finish');
        this.hidedVideo = true;
      }
    }
  }
}
</script>

<style scoped>
  video {
  }
</style>
