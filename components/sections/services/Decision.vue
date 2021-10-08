<template>
  <section class="decision">
    <div class="container">
      <h1 class="decision__title title">IT-инфраструктура для бизнеса</h1>
      <div class="decision__wrapper-cards">
        <div class="decision__card">
          <div class="decision__card-title">Облачные VPS серверы</div>
          <p class="decision__card-text">
            Гибкие конфигурации специально подготовленные для быстрой и
            надежной работы интернет проектов
          </p>
          <ul class="decision__list">
            <li class="decision__item">
              <a href="#" class="decision__link">NVMe</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Intel Xeon Gold</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">KVM</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Plesk</a>
            </li>
          </ul>
          <picture class="picture">
            <img
              src="@/assets/img/decision-card-1.png"
              srcset="@/assets/img/decision-card-1@2x.png 2x"
              class="decision__img"
              alt="decision-card"
            />
          </picture>
        </div>

        <div class="decision__card">
          <div class="decision__card-title">Виртуальный дата центр</div>
          <p class="decision__card-text">
            Масштабируемые вычислительные мощности для размещения и
            прототипирования ваших проектов
          </p>
          <ul class="decision__list">
            <li class="decision__item">
              <a href="#" class="decision__link">NVMe</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Intel Xeon Gold</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">KVM</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Plesk</a>
            </li>
          </ul>
          <picture class="picture">
            <img
              src="@/assets/img/decision-card-2.png"
              srcset="@/assets/img/decision-card-2@2x.png 2x"
              class="decision__img"
              alt="decision-card"
            />
          </picture>
        </div>

        <div class="decision__card">
          <div class="decision__card-title">Облачный веб хостинг</div>
          <p class="decision__card-text">
            Масштабируемые вычислительные мощности для размещения и
            прототипирования ваших проектов
          </p>
          <ul class="decision__list">
            <li class="decision__item">
              <a href="#" class="decision__link">NVMe</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Intel Xeon Gold</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">KVM</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Plesk</a>
            </li>
          </ul>
          <picture class="picture">
            <img
              src="@/assets/img/decision-card-3.png"
              srcset="@/assets/img/decision-card-3@2x.png 2x"
              class="decision__img"
              alt="decision-card"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Decision'
}
</script>

<style scoped>

.decision {
  margin-top: 72px;
  margin-bottom: 72px;
}
.decision__title {
  color: #000000;

  margin-bottom: 72px;
}

.decision__wrapper-cards {
  display: flex;
}

.decision__card {
  width: 402px;
  height: 520px;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  box-shadow: 0 20px 30px -20px #fcf7f2;
  margin-right: 33px;
  position: relative;
}

.decision__card:last-child {
  margin-right: 0;
}

.decision__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 190px;
  margin-top: 48px;
  margin-left: 29px;
  margin-bottom: 24px;
}

.decision__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: #9e9e9e;
  max-width: 275px;
  margin-left: 29px;
  margin-bottom: 24px;
}

.decision__list {
  display: flex;
  align-items: center;
  margin-left: 29px;
}

.decision__item {
  padding-right: 20px;
}

.decision__link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0;
  text-align: left;
  color: #5b5b5b;
}

.decision__img {
  position: absolute;
  z-index: -1;
  top: 41%;
  left: 2%;
}
@media (max-width: 992px) {
  .decision {
    margin-top: 28px;
  }
  .decision__title {
    margin-bottom: 48px;
  }
  .decision__wrapper-cards {
    flex-wrap: wrap;
  }
  .decision__card {
    width: 343px;
    margin-bottom: 48px;
    margin-right: 34px;
  }
  .decision__card:nth-child(2n + 2) {
    margin-right: 0;
  }
}
@media (max-width: 768px) {
  .decision {
    margin-bottom: 0;
  }
}
@media (max-width: 576px) {
  .decision__title {
    max-width: 343px;
  }
  .decision__title {
    margin-bottom: 90px;
  }
  .decision__card {
    margin-right: 0;
    margin-bottom: 24px;
  }
  .decision__card:last-child {
    margin-bottom: 0;
  }
  .decision__wrapper-cards {
    margin-bottom: 0;
  }
}

</style>
