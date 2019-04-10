<template>
  <header class="header">
    <div class="header-wrap">
      <a href="tel:+380508455544" class="btn">+38 (050) 845 55 44</a>
      <a href="#" class="btn button3">Зарегистрироваться</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  @import "../assets/scss/_main.scss";
  @font-face {
    font-family: "Sangha";
    src: url("../assets/font/Sangha-font/Sangha.ttf") format("ttf"),
    url("../assets/font/Sangha-font/Sangha.eot") format("eot"),
    url("../assets/font/Sangha-font/Sangha.woff") format("woff"),
    url("../assets/font/Sangha-font/Sangha.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Evolventa-Bold";
    src: url("../assets/font/Evolventa-font/Evolventa-Bold.ttf") format("ttf"),
    url("../assets/font/Evolventa-font/Evolventa-Bold.eot") format("eot"),
    url("../assets/font/Evolventa-font/Evolventa-Bold.woff") format("woff"),
    url("../assets/font/Evolventa-font/Evolventa-Bold.woff2") format("woff2");
  }
  @font-face {
    font-family: "Evolventa-BoldOblique";
    src: url("../assets/font/Evolventa-font/Evolventa-BoldOblique.ttf") format("ttf"),
    url("../assets/font/Evolventa-font/Evolventa-BoldOblique.eot") format("eot"),
    url("../assets/font/Evolventa-font/Evolventa-BoldOblique.woff") format("woff"),
    url("../assets/font/Evolventa-font/Evolventa-BoldOblique.woff2") format("woff2");
  }
  @font-face {
    font-family: "Evolventa-Oblique";
    src: url("../assets/font/Evolventa-font/Evolventa-Oblique.ttf") format("ttf"),
    url("../assets/font/Evolventa-font/Evolventa-Oblique.eot") format("eot"),
    url("../assets/font/Evolventa-font/Evolventa-Oblique.woff") format("woff"),
    url("../assets/font/Evolventa-font/Evolventa-Oblique.woff2") format("woff2");
  }
  @font-face {
    font-family: "Evolventa-Regular";
    src: url("../assets/font/Evolventa-font/Evolventa-Regular.ttf") format("ttf"),
    url("../assets/font/Evolventa-font/Evolventa-Regular.eot") format("eot"),
    url("../assets/font/Evolventa-font/Evolventa-Regular.woff") format("woff"),
    url("../assets/font/Evolventa-font/Evolventa-Regular.woff2") format("woff2");
  }

  .header {
    position: fixed;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 75px; // TODO:
    z-index: 1;
  }
  .header-wrap {
    height: 100%;
    padding: 0 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1em;
    @media (max-width: 768px) {
      font-size: .75em;
      padding: 0 15px;
    }
    @media (max-width: 400px) {
      padding: 0 5px;
    }
    .btn-sm {
      font-size: inherit;
    }
    .button3 {
      margin: 0 0 0 50px;
      @media (max-width: 768px) {
        margin: 0 0 0 5px;
      }
    }
    a {
      color: #fff;
      &:hover {
        color: $blue2;
        text-decoration: none;
      }
      &.btn {
        font-size: inherit;
      }
    }
  }
</style>
