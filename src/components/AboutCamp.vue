<template>
  <div class='about-camp' data-aos='fade-up'>
    <div class='divider'></div>
    <div class='about-camp-wrap'>
      <div class='about-camp-inner'>
        <img src='./../assets/images/stripes2.png' alt='' class='stripes2'>
        <h1 class='title'>О лагере</h1>
        <h4 class='desc'>Несколько причин выбрать именно нас</h4>
        <div class='items'>
          <div class='item'>
            <h5>Индивидуальный подход</h5>
            <p>Мы заботимся о том, чтобы каждому отдыхающему было уделено особое внимание (не на бумаге). </p>
          </div>
          <div class='item'>
            <h5>Атмосфера принятия</h5>
            <p>Которая максимально исключает буллинг и помогает раскрыться подростку.</p>
          </div>
          <div class='item'>
            <h5>Опыт</h5>
            <p>Мы занимаемся  проведением наших лагерей уже больше 25 лет.</p>
          </div>
          <div class='item'>
            <h5>Компетенция</h5>
            <p>Наши сотрудники постоянно развиваются, изучая самые передовые мировые подходы в организации лагерей. В лагере будут находиться сертифицированные психологи, которые на протяжении года работают с людьми. </p>
          </div>
          <div class='item'>
            <h5>Наши сотрудники</h5>
            <p>Не практиканты с института, а высокомотивированные волонтеры, заинтересованные в организации самого лучшего отдыха для подростков.</p>
          </div>
          <div class='item'>
            <h5>Не наследники советских
              лагерей</h5>
            <p>Наши принципы и структура совершенно отличаются от старых лагерей.</p>
          </div>
          <div class='item'>
            <h5>Стоимость</h5>
            <p>Мы не только не зарабатываем на лагере, но и вкладываем туда свои деньги. Поэтому за такую низкую цену вы не найдете лагерь того же уровня. Лагерь с такой же программой у конкурентов будет стоить в 2-3 раза больше! ;) </p>
          </div>
          <div class='item'>
            <h5>Уникальные мастер-классы</h5>
            <p>Которые будет очень сложно найти в другом месте (дайвинг, зип-лайн, бейсбол, игра на гитаре, рисование на сумках и многое другое).</p>
          </div>
          <div class='item'>
            <h5>Speaking Club </h5>
            <p>Общение и общее время провождение на мастер классах и не только с носителями языка.</p>
          </div>
          <div class='item'>
            <h5>Отсутствие интернета</h5>
            <p>У нас на территории базы его не будет! :) Подростки отвлекуться от своих смартфонов.</p>
          </div>
        </div>
        <div class='reasons'>
          <h4 class='desc'>“Портрет сотрудника”</h4>
          <ul class='list'>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              50/50 мужчины и женщины</li>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              Больше половины состоят в браке</li>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              30% работают в IT </li>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              Есть профессиональные социальные работники, консультанты</li>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              3 человека имеют свое дело</li>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              средний возраст 27 лет</li>
            <li class='list-item'>
              <img src='./../assets/images/checkmark.png' alt=''>
              больше половины сотрудников говорят по-английски</li>
          </ul>
        </div>
        <div class='register'>
          <h4 class='desc'>Готовы зарегистрироваться?
            Мы ждем именно тебя.</h4>
          <a href='http://forms.gle/4qpwmahFsMSQHYyR6' class='btn btn-primary' target='_blank'>Зарегистрироваться</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCamp'
}
</script>

<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .about-camp {
    overflow: hidden;
    position: relative;
    .title {
      font-family: 'Evolventa-Bold', sans-serif;
      font-size: 62px;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin: 0 auto 25px;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 2.5em;
      }
    }
    .desc {
      font-family: 'Evolventa-Bold', sans-serif;
      font-size: 32px;
      letter-spacing: 0.5px;
      line-height: normal;
      text-align: center;
      color: #9595ff;
      margin: 0 auto 60px;
      @media (max-width: 768px) {
        font-size: 1.5em;
      }
    }
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 1170px;
      margin: 0 auto 60px;
      @media (max-width: 1200px) {
        max-width: 768px;
      }
      @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        margin: 0 auto 40px;
      }
    }
    .item {
      padding: 0 15px 45px;
      width: 100%;
      @media (max-width: 768px) {
        padding: 0 15px 20px;
      }
      h5 {
        font-family: 'Evolventa-Bold', sans-serif;
        font-size: 24px;
        line-height: normal;
        letter-spacing: 0.4px;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          font-size: 1.1em;
          margin-bottom: 10px;
        }
      }
      p {
        font-family: 'Evolventa-Regular', sans-serif;
        font-size: 1em;
        line-height: 1.5;
        letter-spacing: 0.5px;
        @media (max-width: 768px) {
          font-size: .9em;
        }
      }
    }
  }
  .about-camp-wrap {
    position: relative;
    background: #2b2b53;
    color: #fff;
    &:before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      transform: translate(10vw, 0);
      background-image: url('./../assets/images/texture8.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      height: 100px;
      width: 200px;
      @media (max-width: 900px) {
        opacity: .5;
        left: 0;
      }
      @media (max-width: 600px) {
        left: -30%;
      }
      @media (max-width: 550px) {
        left: -40%;
      }
    }
    &:after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: '';
      transform: translate(25vw, 0);
      background-image: url('./../assets/images/flower2.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      height: 100px;
      width: 200px;
      @media (max-width: 900px) {
        opacity: .5;
        left: 30%;
      }
    }
  }
  .about-camp-inner {
    margin-top: -1px;
    padding: 120px 20px 80px;
    position: relative;
    z-index: 1;
  }
  .stripes2 {
    position: absolute;
    top: -300px;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 400px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .divider {
    height: 300px;
    background:#212531;
    background: linear-gradient(to right bottom, #fff 54%, #2b2b53 50%);
    @media (max-width: 768px) {
      display: none;
    }
  }
  .reasons {
    max-width: 690px;
    margin: 0 auto 30px;
    position: relative;
    .list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 80px;
      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }
    }
    .list-item {
      font-family: 'Evolventa-Regular', sans-serif;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: 0.5px;
      color: #ffffff;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      @media (max-width: 500px) {
        margin-bottom: 20px;
      }
    }
    img {
      width: 25px;
      height: 25px;
      margin-right: 15px;
    }
    &:before {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(50%, -150%);
      content: '';
      background-image: url('./../assets/images/letter.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      height: 100px;
      width: 200px;
      @media (max-width: 900px) {
        opacity: .5;
        transform: translate(-50%, -100%);
      }
    }
  }
  .register {
    max-width: 505px;
    margin: 0 auto;
    text-align: center;
    .desc {
      color: #fff;
      margin-bottom: 40px;
    }
    .btn {
      border-radius: 3px;
      background-color: #008dff;
      padding: 0.375rem 1.2rem;
      &:hover {
        background-color: #0074d1;
      }
    }
  }
</style>
