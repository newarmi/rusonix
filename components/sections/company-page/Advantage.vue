<template>
  <section class="advantage">
    <div class="container">
      <h1 class="advantage__title title">Ваш бизнес всегда онлайн</h1>

      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">Наша Миссия</div>
          <p class="advantage__text advantage__text-company text">
            Мы помогаем строить бизнес и отношения в Интернет на
            долгосрочном партнерстве, отношения без доминирования одной или
            нескольких глобальных корпораций. Потому что у бизнесов, как и у
            людей, всегда должен быть выбор. У нас простая формула:
            партнерство ведет к успеху.
          </p>
        </div>
        <picture class="picture">
          <img
            src="@/assets/img/advantage-section-company-1.png"
            srcset="@/assets/img/advantage-section-company-1@2x.png 2x"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>
      <div class="advantage__wrapper advantage__wrapper--mod">
        <picture class="picture">
          <img
            src="@/assets/img/advantage-section-company-2.png"
            srcset="@/assets/img/advantage-section-company-2@2x.png 2x"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
        <div class="advantage__section-text">
          <div class="advantage__title-text">Наши Ценности</div>
          <p class="advantage__text advantage__text-company text">
            Успех наших партнеров автоматически означает и наш успех.
            Поэтому мы так привержены идее партнерства. Идее, которая
            означает конкретных людей, а не безликих «клиентов», идее,
            которая вызывает доверие и долгосрочные отношения, развивает наш
            профессионализм и совместное творчество, заставляет
            предоставлять нас крутой сервис и достигать результатов вместе.
            Она означает то, что мы делаем.
          </p>
        </div>
      </div>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">Наша стратегия</div>
          <p class="advantage__text advantage__text-company text">
            Мы предоставляем не серверы. Мы предоставляем сервис. Наша
            основная задача - предоставлять крутой сервис облачной
            инфраструктуры для e-commerce. С другой стороны, успех
            долгосрочного партнерства подразумевает постоянное развитие.
            Внедряя новые технические решения, повышая свой профессионализм,
            мы делаем инфраструктуру для наших партнеров надежнее,
            безопаснее и быстрее. Но самое главное – сверху этого, мы
            развиваем наш сервис, делаем его удобнее и незаметнее. Потому
            что именно сервис – лицо нашего бизнеса.
          </p>
        </div>
        <picture class="picture">
          <img
            src="@/assets/img/advantage-section-company-3.png"
            srcset="@/assets/img/advantage-section-company-3@2x.png 2x"
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
  name: 'Advantage'
}
</script>

<style scoped>

.advantage {
  padding-top: 72px;
  padding-bottom: 72px;
}
.advantage__title {
  margin-bottom: 75px;
}

.advantage__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 96px;
}
.advantage__wrapper:last-child {
  margin-bottom: 0;
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

.advantage__text-company {
  max-width: 550px;
}
/*.advantage__link {*/
/*  font-family: "Graphik", sans-serif;*/
/*  font-size: 16px;*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  line-height: 22px;*/
/*  letter-spacing: 0px;*/
/*  text-align: left;*/
/*  color: #202a89;*/
/*}*/
@media (max-width: 992px) {
  .advantage {
    padding-top: 28px;
    padding-bottom: 0;
  }
  .advantage__title {
    margin-bottom: 48px;
  }
  .advantage__wrapper {
    flex-direction: column-reverse;
  }
  .advantage__wrapper--mod {
    flex-direction: column;
  }
  .advantage__section-text {
    align-self: flex-start;
  }
  .advantage__text-company {
    max-width: 685px;
  }
  .advantage__img {
    margin-bottom: 24px;
  }
}


</style>
