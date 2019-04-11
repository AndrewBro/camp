<template>
    <div class='cost'>
        <div class="title">
            <h1 class="text-center">Стоимость</h1>
        </div>
        <div class="cost__board">
            <div class="cost__board-item">
                <h3 class="cost__board-item-title text-center">
                    “Ранние пташки”
                </h3>
                <p class="sub-title_item text-center">Первые 20 мест</p>
                <div class="amount text-center">
                    <span>₴2600</span>
                </div>
                <div class="line"></div>
                <div class="cost__sale">
                    <ul>
                        <li>
                            <span>Вы экономите 900 грн.</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                        <li>
                            <span>Не беспокоитесь за планы на лето</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cost__board-item active-plan">
                <div class="current-plan"><img src="../assets/images/current-plan.png" alt=""></div>
                <h3 class="cost__board-item-title text-center">
                    “Поздние пташки”
                </h3>
                <p class="sub-title_item text-center">От 20 до 40 мест</p>
                <div class="amount text-center">
                    <span>₴3000</span>
                </div>
                <div class="line"></div>
                <div class="cost__sale">
                    <ul>
                        <li>
                            <span>Вы экономите 500 грн.</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                        <li>
                            <span>Не беспокоитесь за планы на лето</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                    </ul>
                </div>
                <div class="btn-registration text-center">
                    <button class="btn btn-primary"><a href="http://forms.gle/4qpwmahFsMSQHYyR6">Зарегистрироваться</a></button>
                    <p class="bonus-text">Приведи друга и получи 10% скидку 🔥</p>
                </div>
            </div>
            <div class="cost__board-item">
                <h3 class="cost__board-item-title text-center">
                    “Обычный пакет”
                </h3>
                <div class="amount text-center">
                    <span>₴3300</span>
                </div>
                <div class="line"></div>
                <div class="cost__sale">
                    <ul>
                        <li>
                            <span>Вы экономите 200 грн.</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                        <li>
                            <span>Не беспокоитесь за планы на лето</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cost__board-item">
                <h3 class="cost__board-item-title text-center">
                    “Последний вагон”
                </h3>
                <p class="sub-title_item text-center clear-padding">Осталось совсем</p>
                <p class="sub-title_item text-center">мало путевок</p>
                <div class="amount text-center">
                    <span>₴3500</span>
                </div>
                <div class="line"></div>
                <div class="cost__sale">
                    <ul>
                        <li>
                            <span>Вы можете все ещё купить путевку</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                        <li>
                            <span>Не беспокоитесь за планы на лето</span>
                            <i class="icon-check-mark"><img src="../assets/images/icon-checkmark-16-px_2.png" alt=""></i>
                        </li>
                    </ul>
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


<style lang="scss" scoped>
    @import "../assets/scss/_main.scss";
</style>
