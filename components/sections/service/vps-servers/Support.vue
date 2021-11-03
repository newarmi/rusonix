<template>
  <section class="support">
    <div class="container">
      <div class="support__title title">Проактивная поддержка</div>
      <p class="support__text text">
        Тарифы на хостинг для сайта с одним из лучших соотношений цены и
        качества на рынке. Просто занимайтесь своим бизнесом, не волнуясь за ваш
        сайт.
      </p>
      <div class="support__info-wrap">
        <ul class="support__info-list">
          <li class="support__info-item support__info-item--mod">
            <div class="support__info-title">
              Я оплачиваю фактически потребляемые ресурсы или выделенные?
            </div>
            <p class="support__info-text">
              В случае с арендой облачного сервера вы оплачиваете только
              потребляемые ресурсы. Если речь идет о VPS сервере, то вы
              оплачиваете выделенные ресурсы, т.к. сервер полностью выделяется
              под ваши нужды.
            </p>
          </li>
        </ul>
        <div class="support__info-wrap-img">
          <picture class="picture">
            <img
              src="@/assets/img/advantage-section-3.png"
              srcset="@/assets/img/advantage-section-3@2x.png 2x"
              class="advantage__img"
              alt="advantage-img"
            />
          </picture>
        </div>
      </div>
      <div class="support__info-wrapper">
        <ul class="support__info-list">
          <li class="support__info-item">
            <div class="support__info-title">
              Я оплачиваю фактически потребляемые ресурсы или выделенные?
            </div>
            <p class="support__info-text">
              В случае с арендой облачного сервера вы оплачиваете только
              потребляемые ресурсы. Если речь идет о VPS сервере, то вы
              оплачиваете выделенные ресурсы, т.к. сервер полностью выделяется
              под ваши нужды.
            </p>
          </li>
          <li class="support__info-item">
            <div class="support__info-title">
              Будет ли проведен перерасчет стомости VPS сервера если я хочу
              увеличить мощность?
            </div>
            <p class="support__info-text">
              Да, вы можете в любой момент масштабировать свою инфраструкту в
              личном кабинете. Оплата будет производиться только за увеличенные
              ресурсы.
            </p>
          </li>
          <li class="support__info-item">
            <div class="support__info-title">
              Будет ли проведен перерасчет стомости VPS сервера если я хочу
              увеличить мощность?
            </div>
            <p class="support__info-text">
              Да, вы можете в любой момент масштабировать свою инфраструкту в
              личном кабинете. Оплата будет производиться только за увеличенные
              ресурсы.
            </p>
          </li>
          <li class="support__info-item">
            <div class="support__info-title">
              Я оплачиваю фактически потребляемые ресурсы или выделенные?
            </div>
            <p class="support__info-text">
              В случае с арендой облачного сервера вы оплачиваете только
              потребляемые ресурсы. Если речь идет о VPS сервере, то вы
              оплачиваете выделенные ресурсы, т.к. сервер полностью выделяется
              под ваши нужды.
            </p>
          </li>
          <li class="support__info-item support__info-item--modification">
            <div class="support__info-title">
              Я оплачиваю фактически потребляемые ресурсы или выделенные?
            </div>
            <p class="support__info-text">
              В случае с арендой облачного сервера вы оплачиваете только
              потребляемые ресурсы. Если речь идет о VPS сервере, то вы
              оплачиваете выделенные ресурсы, т.к. сервер полностью выделяется
              под ваши нужды.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.support {
  padding-top: 72px;
  padding-bottom: 24px;
}

.support__title {
  margin-bottom: 24px;
}

.support__text {
  max-width: 545px;
}

.support__info-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.support__info-item {
  background: url(@/assets/img/search.png) no-repeat 0px 2px;
}

.support__info-item {
  padding-left: 41px;
}

.support__info-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
  max-width: 450px;
}

.support__info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 560px;
}

.support__info-item--modification {
  display: none;
}

.support__info-list {
  display: flex;
  flex-wrap: wrap;
}

.support__info-wrapper .support__info-item {
  margin-bottom: 48px;
}

@media (max-width: 1200px) {
  .support__info-text {
    max-width: 470px;
  }
}

@media (max-width: 992px) {
  .support__info-item--mod {
    display: none;
  }
  .support__info-wrap {
    justify-content: center;
  }
  .support__info-title {
    max-width: 360px;
  }
  .support__info-text {
    max-width: 370px;
  }
  .support__info-item--modification {
    display: block;
  }
}

@media (max-width: 768px) {
  .support {
    padding-top: 48px;
  }
  .support__info-title {
    max-width: 300px;
  }
  .support__info-text {
    max-width: 319px;
  }
}

@media (max-width: 576px) {
  .support__info-wrapper .support__info-item {
    margin-bottom: 24px;
  }
}
</style>