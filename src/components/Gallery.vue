<template>
  <div class="gallery">
    <div class="gallery-wrap">
      <h3>Галерея</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/_main.scss";
  .gallery {
  }
  .gallery-wrap {
    h3 {
      font-family: 'Evolventa-Bold', sans-serif;
      font-size: 62px;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 1px;
      color: #21232a;
      margin: 0 auto 40px;
      max-width: 300px;
      text-align: center;
    }
  }
</style>
