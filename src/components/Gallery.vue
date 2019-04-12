<template>
    <div class="gallery">
        <div class="gallery-wrap">
            <div class="gallery-title text-center">
                <h3>Галерея</h3>
            </div>
            <div class="gallery-grid" data-aos="zoom-in-right">
                <figure class="gallery__item gallery__item--1">
                    <img src="../assets/images/rectangle-copy-22.png" class="gallery__img" alt="Image 2">
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src="../assets/images/rectangle-copy-17.png" class="gallery__img" alt="Image 2">
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src="../assets/images/rectangle-copy-14.png" class="gallery__img" alt="Image 3">
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src="../assets/images/rectangle-copy-16.png" class="gallery__img" alt="Image 4">
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src="../assets/images/rectangle-copy-18.png" class="gallery__img" alt="Image 5">
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="../assets/images/rectangle-copy-15.png" class="gallery__img" alt="Image 6">
                </figure>
                <figure class="gallery__item gallery__item--7">
                    <img src="../assets/images/rectangle-copy-13.png" class="gallery__img" alt="Image 7">
                </figure>
                <figure class="gallery__item gallery__item--8">
                    <img src="../assets/images/rectangle-copy-27.png" class="gallery__img" alt="Image 8">
                </figure>
                <figure class="gallery__item gallery__item--9">
                    <img src="../assets/images/rectangle-copy-29.png" class="gallery__img" alt="Image 9">
                </figure>
            </div>
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
        overflow: hidden;
        height: auto;
        padding-bottom: 20%
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
                top: 5vh;
                right: 0;
                left: -15vw;
                height: 100px;
                bottom: 0;
                background-image: url("../../src/assets/images/image.png");
                max-width: 200px;
                @media (max-width: 900px) {
                    bottom: -10vh;
                }
            }
            &:after {
                top: -5vh;
                right: 0;
                left: 30vw;
                height: 150px;
                bottom: -15vh;
                background-image: url("../../src/assets/images/group.png");
                @media (max-width: 900px) {
                    top: 10vh;
                    right: 0;
                    left: 45vw;
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
                max-width: 300px;
            }
        }
        .gallery-grid {
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
            .gallery__img {
                object-fit: contain;
                border-radius: 3px;
            }
            .gallery__item {
                &--1 {
                    height: 150px;
                    align-self: center;
                }
                &--2 {
                    height: 150px;
                    align-self: center;
                }
                &--3 {
                    height: 150px;
                    align-self: end;
                }
                &--5 {
                    height: 150px;
                    align-self: start;
                    .gallery__img {
                        width: 80%;
                    }
                }
                &--6 {
                    height: 110px;
                    align-self: end;
                }
                &--7 {
                    height: 55px;
                    align-self: end;
                }
                &--8 {
                    height: 55px;
                    align-self: end;
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .gallery-wrap {
            .gallery-grid {
                display: flex;
                justify-content: center;
                .gallery__item {
                    width: 90%;
                    height: 100%;
                    align-self: start;
                    .gallery__img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
