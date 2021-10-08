<template>
  <section class="career">
    <div class="container">
      <h1 class="career__title title">Карьера</h1>
      <div class="career__wrapper">
        <div class="career__wrap-card">
          <picture class="picture">
            <img
              src="@/assets/img/career-card-1.jpg"
              srcset="@/assets/img/career-card-1@2x.jpg 2x"
              class="career__img"
              alt="career card"
            />
          </picture>
          <div class="career__card-title">Жизнь сотрудников</div>
          <p class="career__card-text text">
            Команду Rusonyx объединяет стремление предоставлять вам лучшие
            сервисы и непрерывно развиваться, а также общие интересы и
            стремления. Мы движемся в одном направлении и проводим вместе
            много времени - в офисе и вне его стен. Мы регулярно проводим
            корпоративные мероприятия, чтобы лучше узнать друг друга,
            отлично провести время и зарядится энергией для ярких решений
            рабочих задач.
          </p>
        </div>
        <div class="career__wrap-card">
          <picture class="picture">
            <img
              src="@/assets/img/career-card-2.jpg"
              srcset="@/assets/img/career-card-2@2x.jpg 2x"
              class="career__img"
              alt="career card"
            />
          </picture>
          <div class="career__card-title">Культура</div>
          <p class="career__card-text text">
            Корпоративная культура Rusonyx построена на искренней
            заинтересованности каждого делом, которым он занимается. Каждый
            сотрудник - важен, поэтому каждый имеет право на собственное
            мнение, инициативу и карьерный рост. Rusonyx - это не строгая
            иерархия, Rusonyx - это сервис, который люди делают для людей,
            поэтому мы слышим каждого и каждому стремимся обеспечить комфорт
            и мотивацию.
          </p>
        </div>
        <div class="career__wrap-card">
          <picture class="picture">
            <img
              src="@/assets/img/career-card-3.jpg"
              srcset="@/assets/img/career-card-3@2x.jpg 2x"
              class="career__img"
              alt="career card"
            />
          </picture>
          <div class="career__card-title">Открытые вакансии</div>
          <p class="career__card-text text">
            Rusonyx непрерывно развивается, поэтому нам регулярно необходимы
            новые сотрудники. Если вам близка наша сфера, вы чувствуете в
            себе компетентность и потенциал, пожалуйста, ознакомьтесь с
            вакансиями, которые открыты прямо сейчас. Возможно, работа,
            которая поможет вам реализоваться, обеспечит стабильность, будет
            приносить удовольствие и желаемый доход - всего в нескольких
            клипах от вас.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Career'
}
</script>

<style scoped>

.career {
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: #fcf7f2;
}
.career__title {
  margin-bottom: 108px;
}
.career__wrapper {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  .career__wrap-card {
    margin-right: 34px;
  }
}
@media (max-width: 992px) {
  .career {
    padding-bottom: 24px;
  }
  .career__wrapper {
    flex-wrap: wrap;
  }
  .career__wrap-card {
    margin-right: 0px;
    margin-bottom: 48px;
  }
}
.career__img {
  margin-bottom: 24px;
}
.career__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.career__card-text {
  max-width: 390px;
}
@media (max-width: 768px) {
  .career {
    padding-bottom: 0;
  }
  .career__img {
    object-fit: cover;
    max-width: 343px;
  }
  .career__card-text {
    max-width: 343px;
  }
}
@media (max-width: 576px) {
  .career {
    padding-top: 48px;
  }
  .career__title {
    margin-bottom: 48px;
  }
  .career__wrapper {
    justify-content: center;
  }
}

</style>
