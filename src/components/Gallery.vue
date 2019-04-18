<template>
  <div class='gallery' data-aos='fade-up' data-aos-easing='linear' data-aos-duration='1500'>
    <div class='gallery-wrap'>
      <div>
        <div class='gallery-title text-center'>
          <h3>Воспоминания</h3>
          <div class='leaf'></div>
        </div>
      </div>
      <div>
        <div class='gallery-grid'>
          <figure class='gallery__item gallery__item--1'>
            <img src='../assets/images/gallery1.jpg' class='gallery__img' alt='Image 1'>
          </figure>
          <figure class='gallery__item gallery__item--2'>
            <img src='../assets/images/gallery5.jpg' class='gallery__img' alt='Image 2'>
          </figure>
          <figure class='gallery__item gallery__item--3'>
            <img src='../assets/images/gallery7.jpg' class='gallery__img' alt='Image 3'>
          </figure>
          <figure class='gallery__item gallery__item--4'>
            <img src='../assets/images/gallery6.jpg' class='gallery__img' alt='Image 4'>
          </figure>
          <figure class='gallery__item gallery__item--5'>
            <img src='../assets/images/gallery4.jpg' class='gallery__img' alt='Image 5'>
          </figure>
          <figure class='gallery__item gallery__item--6'>
            <img src='../assets/images/gallery2.jpg' class='gallery__img' alt='Image 6'>
          </figure>
          <figure class='gallery__item gallery__item--7'>
            <img src='../assets/images/gallery8.jpg' class='gallery__img' alt='Image 7'>
          </figure>
          <figure class='gallery__item gallery__item--8'>
            <img src='../assets/images/gallery3.jpg' class='gallery__img' alt='Image 8'>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery'
  }
</script>

<style lang='scss'>
  @import '../assets/scss/_main.scss';
  .gallery {
    overflow: hidden;
    height: auto;
    padding-bottom: 5%;
    padding-top: 25px;
  }
  .gallery-wrap {
    .gallery-title {
      max-width: 670px;
      margin: 150px auto 100px;
      padding: 0 15px;
      position: relative;
      &:before,
      &:after {
        position: absolute;
        content: '';
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        @media (max-width: 900px) {
          bottom: -10vh;
          opacity: .2;
        }
      }
      &:before {
        top: -1vh;
        right: 0;
        left: -20vw;
        height: 100px;
        bottom: 0;
        background-image: url('../../src/assets/images/image.png');
        max-width: 200px;
        @media (max-width: 900px) {
          bottom: -10vh;
        }
      }
      &:after {
        top: -14vh;
        right: 0;
        left: 35vw;
        height: 150px;
        bottom: -15vh;
        background-image: url('../../src/assets/images/group.png');
        @media (max-width: 900px) {
          display: none;
        }
      }
      @media (max-width: 768px) {
        margin: 0 auto 50px;
      }
      h3 {
        font-family: 'Evolventa-Bold', sans-serif;
        font-size: 62px;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 1px;
        color: #21232a;
        margin: 0 auto 40px;
        max-width: 500px;
      }
      .leaf {
        position: relative;
        max-width: 960px;
        &:after,
        &:before {
          position: absolute;
          content: '';
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          z-index: -1;
        }
        &:before {
          top: -11px;
          right: 0;
          left: 8vw;
          height: 99px;
          bottom: 0;
          background-image: url('../../src/assets/images/flower-copy-10.png');
          max-width: 200px;
          @media (max-width: 900px) {
            bottom: -10vh;
          }
        }
        &:after {
          top: -8vh;
          right: 0;
          left: 25vw;
          height: 143px;
          bottom: -15vh;
          background-image: url('../../src/assets/images/flower-copy-8.png');
          @media (max-width: 900px) {
            top: 10vh;
            right: 0;
            left: 45vw;
          }
        }
      }
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(11, 5vw);
      grid-gap: 15px;
      max-width: 1200px;
      margin: 0 auto;
      .gallery__item {
        cursor: pointer;
      }
      figure {
        margin-bottom: 0;
      }
      .gallery__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
      }
      .gallery__item--1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
      }
      .gallery__item--2 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 4;
      }
      .gallery__item--3 {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 4;
      }
      .gallery__item--4 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 8;
      }
      .gallery__item--5 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 9;
      }
      .gallery__item--6 {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 4;
        grid-row-end: 7;
      }
      .gallery__item--7 {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 7;
        grid-row-end: 10;
      }
      .gallery__item--8 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 8;
        grid-row-end: 11;
      }
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(11, 5vw);
      grid-gap: 15px;
      max-width: 1200px;
      margin: 0 auto;
      figure {
        margin-bottom: 0;
      }
      .gallery__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
      }
      .gallery__item--1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
      }
      .gallery__item--2 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 4;
      }
      .gallery__item--3 {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 4;
      }
      .gallery__item--4 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 8;
      }
      .gallery__item--5 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 9;
      }
      .gallery__item--6 {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 4;
        grid-row-end: 7;
      }
      .gallery__item--7 {
        grid-column-start: 5;
        grid-column-end: 9;
        grid-row-start: 7;
        grid-row-end: 10;
      }
      .gallery__item--8 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 8;
        grid-row-end: 11;
      }
    }
  }
  @media screen and (max-width: 961px) {
    .gallery {
      .gallery-title {
        h3 {
          padding-top: 20px;
          font-size: 2.2em;
        }
      }
      .gallery-grid {
        display: block;
        width: 90%;
        .gallery__item {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
