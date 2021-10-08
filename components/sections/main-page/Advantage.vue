<template>
  <section class="advantage">
    <div class="container">
      <h1 class="advantage__title title">Преимущества для бизнеса</h1>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">
            Надежное и безопасное хранение данных
          </div>
          <p class="advantage__text text">
            Мы используем только промышленное оборудование DELL, ПО мировых
            лидеров рынка. Для обеспечения uptime 99,99% наши сервера
            располагаются в надежном дата центре уровня Tier IV.
          </p>
          <a href="" class="advantage__link">Подробнее</a>
        </div>
        <picture class="picture">
          <img
            src='~/assets/img/advantage-section-1.png'
            srcset="@/assets/img/advantage-section-1@2x.png 2x"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>

      <div class="advantage__wrapper advantage__wrapper--mod">
        <picture class="picture">
          <img
            src='~/assets/img/advantage-section-2.png'
            srcset="@/assets/img/advantage-section-2@2x.png 2x"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
        <div class="advantage__section-text">
          <div class="advantage__title-text">
            Прозрачные цены и честные правила игры
          </div>
          <p class="advantage__text text">
            Тарифы подойдут как высоконагруженным сервисам больших компаний,
            так и небольшим проектам со скромными требованиями. Платите
            только за используемые ресурсы или зарезервируйте определенный
            объём на 1 или 3 года и сэкономьте до 49%. Следить за расходами
            можно прямо в консоли управления.
          </p>
          <a href="" class="advantage__link">Рассчитать стоимость</a>
        </div>
      </div>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">Проактивная поддержка</div>
          <p class="advantage__text text">
            Тарифы на хостинг для сайта с одним из лучших соотношений цены и
            качества на рынке. Просто занимайтесь своим бизнесом, не
            волнуясь за ваш сайт.
          </p>
          <a href="" class="advantage__link">Подробнее</a>
        </div>
        <picture class="picture">
          <img
            src='~/assets/img/advantage-section-3.png'
            srcset="@/assets/img/advantage-section-3@2x.png 2x"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Advantage',
  computed: {

}
}
</script>

<style scoped>
.advantage {
  margin-top: 72px;
  margin-bottom: 51px;
}

.advantage__title {
  margin-bottom: 75px;
}

.advantage__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.advantage__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 25px;
}

.advantage__text {
  max-width: 510px;
  margin-bottom: 48px;
}

.advantage__link {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}

.advantage__link:hover {
  color: #202a89;
  mix-blend-mode: normal;
  opacity: 0.6;
}

@media (max-width: 992px) {
  .advantage {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .advantage__img {
    margin-bottom: 24px;
  }
  .advantage__wrapper {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-bottom: 48px;
  }
  .advantage__wrapper--mod {
    flex-direction: column;
  }
}

</style>
