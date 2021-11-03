<template>
  <section class="possibilities">
    <div class="container">
      <div class="possibilities__title title">Доступные возможности</div>
    </div>
    <div class="swiper cscard-swiper">
      <div class="swiper-wrapper possibilities__wrapper-tabs">
        <div
          data-tab-target="#cscard-1"
          class="
            swiper-slide
            possibilities__wrapper-tab possibilities__wrapper-tab--active
          "
        >
          Кому подойдёт панель
        </div>
        <div
          data-tab-target="#cscard-2"
          class="swiper-slide possibilities__wrapper-tab"
        >
          Сравнение изданий
        </div>
        <div
          data-tab-target="#cscard-3"
          class="swiper-slide possibilities__wrapper-tab"
        >
          Как выбрать редакция
        </div>
        <div
          data-tab-target="#cscard-4"
          class="swiper-slide possibilities__wrapper-tab"
        >
          Дополнения
        </div>
      </div>
    </div>

    <div
      id="cscard-1"
      data-tab-content
      class="possibilities__wrapper possibilities__wrapper--active"
    >
      <div class="possibilities__cards">
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Системные администраторы и разработчики
          </div>
          <div class="possibilities__card-text">
            Применяйте все возможности и богатую функциональность Plesk для
            реализации своих проектов
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">Компании</div>
          <div class="possibilities__card-text">
            Используйте Plesk для развития бизнеса и ускорения рабочих процессов
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">Студии разработки сайтов</div>
          <div class="possibilities__card-text">
            Панель управления обладает дружелюбным графическим интерфейсом,
            который обрадует клиентов своим удобством и простотой
          </div>
        </div>
      </div>
    </div>

    <div id="cscard-2" data-tab-content class="possibilities__wrapper">
      <div class="possibilities__cards">
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Интеграция с бухгалтерий 1С 2
          </div>
          <div class="possibilities__card-text">
            Двусторонний обмен данными вашего магазина с 1С по товарам, заказам,
            покупателям и контрагентам. Обмен работает в режиме реального
            времени.
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">Скорость и надежность 2</div>
          <div class="possibilities__card-text">
            Собственная запатентованная технология для быстрой загрузки страниц.
            Поддержка «облачных» хранилищ. Распределение нагрузки между
            серверами.
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Соответствие законодательству 2
          </div>
          <div class="possibilities__card-text">
            Соответствие и поддержание соответствия всем требованиям
            законодательства, включая требования ФЗ-54. Готовое соглашение об
            обработке персональных данных.
          </div>
        </div>
      </div>
    </div>

    <div id="cscard-3" data-tab-content class="possibilities__wrapper">
      <div class="possibilities__cards">
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Интеграция с бухгалтерий 1С 3
          </div>
          <div class="possibilities__card-text">
            Двусторонний обмен данными вашего магазина с 1С по товарам, заказам,
            покупателям и контрагентам. Обмен работает в режиме реального
            времени.
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">Скорость и надежность 3</div>
          <div class="possibilities__card-text">
            Собственная запатентованная технология для быстрой загрузки страниц.
            Поддержка «облачных» хранилищ. Распределение нагрузки между
            серверами.
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Соответствие законодательству 3
          </div>
          <div class="possibilities__card-text">
            Соответствие и поддержание соответствия всем требованиям
            законодательства, включая требования ФЗ-54. Готовое соглашение об
            обработке персональных данных.
          </div>
        </div>
      </div>
    </div>

    <div id="cscard-4" data-tab-content class="possibilities__wrapper">
      <div class="possibilities__cards">
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Интеграция с бухгалтерий 1С 4
          </div>
          <div class="possibilities__card-text">
            Двусторонний обмен данными вашего магазина с 1С по товарам, заказам,
            покупателям и контрагентам. Обмен работает в режиме реального
            времени.
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">Скорость и надежность4</div>
          <div class="possibilities__card-text">
            Собственная запатентованная технология для быстрой загрузки страниц.
            Поддержка «облачных» хранилищ. Распределение нагрузки между
            серверами.
          </div>
        </div>
        <div class="possibilities__card">
          <div class="possibilities__card-title">
            Соответствие законодательству4
          </div>
          <div class="possibilities__card-text">
            Соответствие и поддержание соответствия всем требованиям
            законодательства, включая требования ФЗ-54. Готовое соглашение об
            обработке персональных данных.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'Possibilities',
  computed: {

  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Swiper(".cscard-swiper", {
        slidesPerView: 3.65,
      spaceBetween: 64,
      breakpoints: {
        360: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3.1,
        },
        768: {
          slidesPerView: 3.4,
        },
      },
      })
    })

    const cscardTags = document.querySelectorAll("[ data-tab-target]");
    const cscardTabContents = document.querySelectorAll("[data-tab-content]");

    cscardTags.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        cscardTabContents.forEach((cscardTabContent) => {
        cscardTabContent.classList.remove("possibilities__wrapper--active");
      });
      target.classList.add("possibilities__wrapper--active");
      cscardTags.forEach((tab) => {
      tab.classList.remove("possibilities__wrapper-tab--active");
    });
    tab.classList.add("possibilities__wrapper-tab--active");
    });
  });
  },
}
</script>

<style scoped>
.possibilities {
  background-color: #fcf7f2;
  padding-top: 72px;
  overflow: hidden;
}

.possibilities__title {
  margin-bottom: 86px;
}

.cscard-swiper {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto 70px;
}

.possibilities__wrapper-tab {
  width: auto !important;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.4;
  padding-bottom: 10px;
  cursor: pointer;
  margin-right: 64px;
}

.possibilities__wrapper-tab--active {
  color: #000;
  opacity: 1;
  border-bottom: 6px solid #0f7f69;
}

.possibilities__wrapper {
  width: 100%;
  max-width: 1440px;
  padding: 0 18px 0 55px;
  margin: 0 auto;
}

[data-tab-content] {
  display: none;
}

.possibilities__wrapper--active[data-tab-content] {
  display: block;
}

.possibilities__cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.possibilities__card {
  padding: 24px 18px 24px 30px;
  margin-bottom: 48px;
}

.possibilities__card:hover {
  background-color: #fff;
  cursor: pointer;
  border-radius: 10px;
}

.possibilities__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 24px;
}

.possibilities__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 580px;
}

@media (max-width: 1200px) {
  .possibilities__card-text {
    max-width: 510px;
  }
}

@media (max-width: 768px) {
  .possibilities {
    padding-top: 48px;
  }
  .cscard-swiper {
    padding: 0 24px;
    margin-bottom: 48px;
  }
  .possibilities__title {
    margin-bottom: 48px;
  }
  .possibilities__wrapper {
    padding: 0;
  }
  .possibilities__card-text {
    max-width: 330px;
  }
  .possibilities__card {
    margin-bottom: 24px;
  }
}

@media (max-width: 576px) {
  .possibilities {
    padding-bottom: 24px;
  }
  .cscard-swiper {
    padding: 0 0 0 16px;
  }
  .possibilities__cards {
    justify-content: center;
  }
  .possibilities__card {
    margin-bottom: 0;
  }
  .possibilities__card-text {
    max-width: 510px;
  }
}
</style>