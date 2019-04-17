<template>
    <div class="experience-section" id="experience">
        <div>
            <div class="stripes"></div>
        </div>
        <div class="content">
            <div>
                <h3>Тебя ждут</h3>
                <div class="experiences">
                    <div class="row items-holder">
                        <div class="column">
                            <div class="item">
                                <img src="../assets/images/zip-line.jpg" alt="">
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                                    fugit molestias obcaecati quae quia voluptates.
                                </div>
                                <div class="label">Зип-лайн</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="item">
                                <img src="../assets/images/quest.jpg" alt="">
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                                    fugit molestias obcaecati quae quia voluptates.
                                </div>
                                <div class="label">Квесты</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="item">
                                <img src="../assets/images/trainings.jpg" alt="">
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                                    fugit molestias obcaecati quae quia voluptates.
                                </div>
                                <div class="label">Тренинги</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="item">
                                <img src="../assets/images/speaking.jpg" alt="">
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                                    fugit molestias obcaecati quae quia voluptates.
                                </div>
                                <div class="label">Speaking Club</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="item">
                                <img src="../assets/images/games.jpg" alt="">
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                                    fugit molestias obcaecati quae quia voluptates.
                                </div>
                                <div class="label">Настольные игры</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="item">
                                <img src="../assets/images/aiming.jpg" alt="">
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                                    fugit molestias obcaecati quae quia voluptates.
                                </div>
                                <div class="label">Стрельба из лука</div>
                            </div>
                        </div>
                    </div>
                    <h4 class="text-center">и еще много всего…</h4>
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

<style scoped lang="scss">
    @import "../assets/scss/_main.scss";

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
                font-size: 30px;
                margin-bottom: 24%;
                margin-top: -32%;
                @media (min-width: 901px) {
                    font-size: 60px;
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
            margin-top: -100px;
            z-index: 6;
            @media (min-width: 901px) {
                margin-bottom: 90px;
            }
        }

        .column {
            position: relative;
            width: 100%;

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
                box-shadow: 0 0 8px 0 #c5c5c5;
                transform: rotate(3deg);

                .description {
                    display: block;
                    animation: puffIn 0.2s ease-in-out 0s;
                    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.36);
                }
            }

            img {
                width: 100%;
                max-width: 100%;
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
