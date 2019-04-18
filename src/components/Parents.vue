<template>
  <div class='parents' data-aos='fade-up' data-aos-easing='linear' data-aos-duration='500'>
    <div>
      <h1 class='title'>Для родителей 👌</h1>
      <p class='text'>
        Мы видим, что в нашем обществе очень много проблем. Многие родители вынуждены много работать, чтобы прокормить
        семью. Часто родители работают за границей. Где-то половина детей растут в неполных семьях. Очень мало детей
        видят своих отцов.
      </p>
      <p class='text'>
        В этом хаосе почти нет места подросткам. Подростки переживают достаточно много кризисов, они имеют
        очень много вопросов и не получают ответы. Родители перестают быть для них авторитетными взрослыми. С
        одной стороны, они еще дети, с другой - уже взрослые, и перед ними ставятся неподъемные вызовы, как им
        кажется. Многие подростки думают об образовании за границей...
      </p>
      <a class='file btn btn-primary' href='./../../../camp/dist/file.pdf' target='_blank'>Читать полностью</a>
      <a class='file2 btn btn-outline-primary' href='./../../../camp/dist/file.pdf' target='_blank'>Больше о сотрудниках 💪</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Parents'
  }
</script>


<style lang='scss' scoped>
  @import '../assets/scss/_main.scss';
  .parents {
    padding: 3em 15px 7em;
    text-align: center;
    position: relative;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      max-width: 200px;
      background-image: url('./../assets/images/texture.png');
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: rotate(42deg);
      z-index: -1;
    }
    a {
      margin: 0 5px 5px;
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
    .file,
    .file2 {
      border-radius: 3px;
    }
    .file {
      background-color: #008dff;
      &:hover {
        background-color: #0074d1;
      }
    }
  }
</style>
