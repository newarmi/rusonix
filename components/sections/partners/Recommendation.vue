<template>
  <section class="recommendation">
    <div class="container">
      <div class="recommendation__title title">Почему нас рекомендуют</div>
      <div class="recommendation__wrapper">
        <div class="recommendation__section-text">
          <div class="recommendation__title-text">
            Надежное и безопасное хранение данных
          </div>
          <p class="recommendation__text">
            Мы используем только промышленное оборудование DELL, ПО мировых
            лидеров рынка. Для обеспечения uptime 99,99% наши сервера
            располагаются в надежном дата центре уровня Tier IV.
          </p>
          <a href="" class="recommendation__link">Подробнее</a>
        </div>
        <picture class="picture">
          <img
            src="@/assets/img/advantage-section-1.png"
            srcset="@/assets/img/advantage-section-1@2x.png 2x"
            class="recommendation__img"
            alt="recommendation-img"
          />
        </picture>
      </div>

      <div class="recommendation__wrapper recommendation__wrapper--mod">
        <picture class="picture">
          <img
            src="@/assets/img/advantage-section-2.png"
            srcset="@/assets/img/advantage-section-2@2x.png 2x"
            class="recommendation__img"
            alt="recommendation-img"
          />
        </picture>
        <div class="recommendation__section-text">
          <div class="recommendation__title-text">
            Прозрачные цены и честные правила игры
          </div>
          <p class="recommendation__text">
            Тарифы подойдут как высоконагруженным сервисам больших компаний, так
            и небольшим проектам со скромными требованиями. Платите только за
            используемые ресурсы или зарезервируйте определенный объём на 1 или
            3 года и сэкономьте до 49%. Следить за расходами можно прямо в
            консоли управления.
          </p>
          <a href="" class="recommendation__link">Рассчитать стоимость</a>
        </div>
      </div>
      <div class="recommendation__wrapper">
        <div class="recommendation__section-text">
          <div class="recommendation__title-text">Проактивная поддержка</div>
          <p class="recommendation__text">
            Тарифы на хостинг для сайта с одним из лучших соотношений цены и
            качества на рынке. Просто занимайтесь своим бизнесом, не волнуясь за
            ваш сайт.
          </p>
          <a href="" class="recommendation__link">Подробнее</a>
        </div>
        <picture class="picture">
          <img
            src="@/assets/img/advantage-section-3.png"
            srcset="@/assets/img/advantage-section-3@2x.png 2x"
            class="recommendation__img"
            alt="recommendation-img"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>

export default {
   
}
</script>

<style scoped>
.recommendation {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.recommendation__title {
  margin-bottom: 72px;
}

.recommendation__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.recommendation__title-text {
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

.recommendation__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 510px;
  margin-bottom: 48px;
}

.recommendation__link {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}

.recommendation__link:hover {
  color: #202a89;
  mix-blend-mode: normal;
  opacity: 0.6;
}

@media (max-width: 992px) {
  .recommendation__img {
    margin-bottom: 24px;
  }
  .recommendation__wrapper {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-bottom: 48px;
  }
  .recommendation__wrapper--mod {
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .recommendation {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}
</style>