<template>
  <div class='parents'>
    <h1 class="title">Для родителей 👌</h1>
    <p class="text">Для ознакомления с правилами лагеря , нашим виденьем и целями скачайте файл и подпишите его*</p>
    <p class="text">После заполнения документа передайте его нам.....</p>
    <a class="file btn btn-outline-primary"
       href="./../../../camp/dist/file.pdf" download="Для родителей.pdf">
      Скачать файл</a>
  </div>
</template>

<script>
  export default {
    name: 'Parents',
    methods: {
    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/scss/_main.scss";
  .parents {
    padding: 3em 15px 7em;
    text-align: center;
  }
  .title {
    font-family: 'Evolventa-Bold', sans-serif;
    font-size: 62px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #21232a;
    margin: 0 auto 1em;
    max-width: 600px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 2.5em;
    }
  }
  .text {
    font-family: 'Evolventa-Bold', sans-serif;
    max-width: 600px;
    margin: 0 auto 2em;
    text-align: center;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #21232a;
  }
  .file {
    border-radius: 3px;

    &:hover {
      background-color: #008dff;
    }
  }
</style>
