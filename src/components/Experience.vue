<template>
  <div class='experience-section' id='experience' data-aos='fade-up' data-aos-easing='linear' data-aos-duration='1500'>
    <div>
      <div class='stripes'></div>
    </div>
    <div class='content'>
      <div>
        <h3>Тебя ждут</h3>
        <div class='experiences'>
          <div class='row items-holder'>
            <div class='column'>
              <div class='item' v-tilt>
                <div class='img'></div>
                <div class='description'>
                  Любите ощущение адреналина, а
                  экстрим - это неотъемлемая часть вашей жизни ?
                  Максимальную безопасность гарантируют наши инструктора.
                  Яркие воспоминания о таком экстремальном развлечении останутся у вас надолго
                </div>
                <div class='label'>Зип-лайн</div>
              </div>
            </div>
            <div class='column'>
              <div class='item' v-tilt>
                <div class='img'></div>
                <div class='description'>
                  Квесты, командно-приключенческие игры, популярный вид активного отдыха для
                  людей, наполненных энергией и жизненным силами, для тех, кто не желает сидеть на
                  месте. Скорость, смекалка, логика, умение находить правильное решение в
                  нестандартных ситуациях, командных дух и дух соперничества это атмосфера присущая
                  каждому нашему квесту
                </div>
                <div class='label'>Квесты</div>
              </div>
            </div>
            <div class='column'>
              <div class='item' v-tilt>
                <div class='img'></div>
                <div class='description'>
                  Тренинги по личностному росту. Профессиональный консультант с хорошим опытом работы
                  в сфере социальных услуг будет проводить лекции для подростков на темы, которые
                  особенно важны для них в этом возрасте. В интерактивной форме подростки будут
                  рассуждать на такие темы как 'Вызовы', 'Разрешение конфликтов', 'Взаимоотношения',
                  'Самоидентефикация' и другие.
                </div>
                <div class='label'>Тренинги</div>
              </div>
            </div>
            <div class='column'>
              <div class='item' v-tilt>
                <div class='img'></div>
                <div class='description'>
                  Участники нашего лагеря имеют прекрасную возможность не только весело провести время
                  и оздоровиться, но и повысить уровень английского языка в совершенно ненавязчивой
                  форме, играя и общаясь с сверстниками носителями языка на протяжении всего дня.
                </div>
                <div class='label'>Speaking Club</div>
              </div>
            </div>
            <div class='column'>
              <div class='item' v-tilt>
                <div class='img'></div>
                <div class='description'>
                  Это полностью интелектуальный вид развлечения. Вам понадобиться хорошая память,
                  логическое мышление и совсем чучь-чуть везения. Игры будут интересны всем. Больше
                  чем 30 разных видов игр.
                </div>
                <div class='label'>Настольные игры</div>
              </div>
            </div>
          </div>
          <h4 class='text-center'>и еще много всего…</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Experience',
  };
</script>

<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .experience-section {
    background-color: #f6f9fc;
    .stripes {
      position: relative;
      overflow: hidden;
      padding-top: 46%;
      background-color: white;
      &:before {
        content: '';
        position: absolute;
        z-index: 5;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background-size: contain;
        background-position: top;
        background-repeat: no-repeat;
        background-image: url(../assets/images/stripes.svg);
      }
      &:after {
        content: '';
        position: absolute;
        left: -20%;
        bottom: -145.5%;
        right: 0;
        height: 200%;
        width: 200%;
        background-color: #f6f9fc;
        -webkit-transform: rotate(-12deg);
        transform: rotate(-12deg);
        z-index: 1;
      }
    }
    .content {
      z-index: 6;
      position: relative;
      h3 {
        width: 100%;
        text-align: center;
        font-size: 62px;
        margin-top: -32%;
        margin-bottom: 10%;
        @media (max-width: 901px) {
          margin-bottom: 15%;
          font-size: 2.5em;
        }
      }
    }
    .experiences {
      padding: 25px 15px;
      @media (min-width: 901px) {
        padding-bottom: 80px;
      }
    }
    .items-holder {
      display: flex;
      flex-direction: row;
      position: relative;
      margin: 0 auto;
      z-index: 6;
      @media (min-width: 901px) {
        margin-bottom: 90px;
      }
    }
    .column {
      position: relative;
      width: 100%;
      &:nth-child(1) {
        .img {
          background-image: url(../assets/images/zip-line.jpg);
        }
      }
      &:nth-child(2) {
        .img {
          background-image: url(../assets/images/quest.jpg);
        }
      }
      &:nth-child(3) {
        .img {
          background-image: url(../assets/images/trainings.jpg);
        }
      }
      &:nth-child(4) {
        .img {
          background-image: url(../assets/images/speaking.jpg);
        }
      }
      &:nth-child(5) {
        .img {
          background-image: url(../assets/images/games.jpg);
        }
      }
      &:nth-child(3n + 2) {
        .label {
          background-color: $color-lavander;
          color: #917ec0;
        }
      }
      &:nth-child(3n + 3) {
        .label {
          background-color: $color-pale;
          color: #9b8162;
        }
      }
      @media (min-width: 601px) {
        width: 50%;
      }
      @media (min-width: 901px) {
        &:nth-child(3n + 2) {
          bottom: -60px;
        }
        width: 33.333%;
      }
    }
    .item {
      text-align: center;
      margin-bottom: 80px;
      position: relative;
      transition: box-shadow .2s ease-in-out 0s, transform .2s ease-in-out 0s;
      border-radius: 3px;
      font-size: 15px;
      transform: rotate(0deg);
      &:hover {
        .description {
          display: block;
          animation: puffIn 0.2s ease-in-out 0s;
        }
      }
      .img {
        width: 100%;
        padding-top: 150%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        margin: auto;
        border-radius: 3px;
      }
      .description {
        position: absolute;
        display: none;
        left: 10px;
        top: 10px;
        right: 10px;
        bottom: 10px;
        padding: 15px;
        background-color: rgba(255, 255, 255, 0.84);
        box-shadow: 0 0 0 0 #c5c5c5;
        transition: box-shadow .2s ease-in-out 0s;
        font-family: 'Evolventa-Bold', sans-serif;
      }
      .label {
        position: absolute;
        display: inline-block;
        line-height: 1;
        font-family: 'Evolventa-Bold', sans-serif;
        padding: 15px 20px;
        font-size: 18px;
        box-sizing: border-box;
        bottom: 0;
        left: calc(50%);
        transform: translate3d(-50%, 50%, 0);
        background-color: $color-aqua;
        color: #2e7067;
        @media (min-width: 901px) {
          font-size: 24px;
        }
        @media (min-width: 1201px) {
          min-width: 270px;
        }
      }
    }
  }
</style>
