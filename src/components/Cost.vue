<template>
  <div class='cost' data-aos='fade-up'>
    <div class='title'>
      <div>
        <h1 class='text-center'>Стоимость</h1>
      </div>
    </div>
    <div>
      <div class='cost__board'>
        <div class='cost__board-item'>
          <h3 class='cost__board-item-title text-center'>
            “Ранние пташки”
          </h3>
          <p class='sub-title_item text-center'>Первые 20 мест</p>
          <div class='amount text-center'>
            <span>₴2600</span>
          </div>
          <div class='line'></div>
          <div class='cost__sale'>
            <ul>
              <li>
                <span>Вы экономите 900 грн.</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
              <li>
                <span>Не беспокоитесь за планы на лето</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
            </ul>
          </div>
        </div>
        <div class='cost__board-item active-plan'>
          <div class='current-plan'>
            <img src='../assets/images/current-plan.png' alt='' class='active'>
          </div>
          <h3 class='cost__board-item-title text-center'>
            “Поздние пташки”
          </h3>
          <p class='sub-title_item text-center'>От 20 до 40 мест</p>
          <div class='amount text-center'>
            <span>₴3000</span>
          </div>
          <div class='line'></div>
          <div class='cost__sale'>
            <ul>
              <li>
                <span>Вы экономите 500 грн.</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
              <li>
                <span>Не беспокоитесь за планы на лето</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
            </ul>
          </div>
          <div class='btn-registration text-center'>
            <button class='btn btn-primary'>
              <a href='http://forms.gle/4qpwmahFsMSQHYyR6' target='_blank'>Зарегистрироваться</a>
            </button>
            <p class='bonus-text'>Приведи друга и получи 10% скидку 🔥</p>
          </div>
        </div>
        <div class='cost__board-item'>
          <h3 class='cost__board-item-title text-center'>
            “Обычный пакет”
          </h3>
          <div class='amount text-center'>
            <span>₴3300</span>
          </div>
          <div class='line'></div>
          <div class='cost__sale'>
            <ul>
              <li>
                <span>Вы экономите 200 грн.</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
              <li>
                <span>Не беспокоитесь за планы на лето</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
            </ul>
          </div>
        </div>
        <div class='cost__board-item'>
          <h3 class='cost__board-item-title text-center'>
            “Последний вагон”
          </h3>
          <p class='sub-title_item text-center clear-padding'>Осталось совсем</p>
          <p class='sub-title_item text-center'>мало путевок</p>
          <div class='amount text-center'>
            <span>₴3500</span>
          </div>
          <div class='line'></div>
          <div class='cost__sale'>
            <ul>
              <li>
                <span>Вы можете все ещё купить путевку</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
              <li>
                <span>Не беспокоитесь за планы на лето</span>
                <i class='icon-check-mark'><img src='../assets/images/icon-checkmark-16-px_2.png' alt=''></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cost'
  }
</script>


<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .cost {
    height: 100%;
    background: #f6f9fc;
    font-family: $font-cost-item;
    overflow: hidden;
    .title {
      padding: 80px 0 150px;
      h1 {
        font-size: 62px;
        font-weight: bold;
        letter-spacing: 1px;
        color: $color-cost-title;
      }
    }
    .cost__board {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      padding-bottom: 200px;
      max-width: 1300px;
      margin: 0 auto;
      &-item {
        position: relative;
        width: 20%;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background: #fff;
        opacity: .4;
        border: 1px solid #ccc;
        transition: .2s;
        &:hover {
          border: 1px solid $color-cost-amount;
        }
        .current-plan {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translate(-50%);
        }
        &-title {
          padding:30px 0 20px;
          font-size: 24px;
          color: $color-cost-title;
          font-weight: bold;
          letter-spacing: .5px;
        }
        .sub-title_item {
          font-size: 14px;
          font-family: $font-cost-sub-title;
          color: $color-cost-sub-title;
        }
        .amount {
          span {
            font-size: 32px;
            font-family: $font-cost-sub-title;
            color: $color-cost-amount;
            letter-spacing: .5px;
          }
        }
        .line {
          height: 2px;
          margin: 15px 25px;
          background: #dee5ed;
          opacity: .6;
        }
        .cost__sale {
          padding: 0 25px 0;
          li {
            padding-bottom: 10px;
            span {
              display: inline-block;
              width: 75%;
              font-family: $font-cost-sub-title;
              font-size: 14px;
              color: #97a0a8;
              vertical-align: middle;
            }
            .icon-check-mark {
              display: inline-block;
              width: 25%;
              text-align: right;
            }
          }
        }
        .btn-registration {
          margin: 20px 0;
          .btn {
            padding: 15px 20px;
            background: #008dff;
            border: transparent;
            &:hover {
              background: #0074d1;
              a {
                text-decoration: none;
              }
            }
            a {
              color: #fff;
              font-family: $font-cost-sub-title;
            }
          }
          .bonus-text {
            padding: 10px 25px 0;
            color: #97a0a8;
            letter-spacing: .5px;
            font-size: 12px;
            font-family: $font-cost-sub-title;
          }
        }
      }
      .active-plan {
        opacity: 1;
        box-shadow: 0 5px 16px -1px rgba(33, 35, 42, 0.04);
        .active {
          position: relative;
          animation: plan-animation 1s infinite;
        }
      }
    }
  }
  @media screen and (max-width: 1025px) {
    .cost {
      .cost__board {
        &-item {
          width: 35%;
          margin-bottom: 2%;
        }
      }
    }
  }
  @media screen and (max-width: 961px) {
    .cost {
      .title {
        padding: 100px 0 50px;
        h1 {
          font-size: 2.5em;
          margin: 0;
        }
      }
      .cost__board {
        padding-bottom: 25px;
        &-item {
          width: 55%;
          margin-bottom: 12%;
          .current-plan {
            top: -18%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .cost {
      .cost__board {
        &-item {
          width: 95%;
          margin-bottom: 5%;
        }
      }
    }
  }
  @keyframes plan-animation {
    0%   {top: 0;}
    25%  {top: 10px;}
    50%  {top: 5px;}
    75%  {top: 10px;}
    100% {top: 0;}
  }
</style>
