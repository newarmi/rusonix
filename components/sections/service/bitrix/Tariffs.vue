<template>
    <section class="license">
        <div class="container">
          <div class="license__title title">Лицензии 1С Битрикс</div>

          <div class="license__wrapper-cards">

            <div v-for="card in tariffs" :key="card.name" class="license__wrap-card">
              <div class="license__card-title">{{ card.name }}</div>
              <div class="license__card-content">
                <div class="license__card-left">
                  <div class="license__card-left-text">Количество сайтов</div>
                  <div class="license__card-left-text">Количество модулей</div>
                  <div class="license__card-left-text">
                    Интеграция с Битрикс24
                  </div>
                  <div class="license__card-left-text">Социальные сервисы</div>
                </div>
                <div class="license__card-content-right">
                  <div class="license__card-right-text">2 шт</div>
                  <div class="license__card-right-text">14</div>
                  <div class="license__card-right-text">Да</div>
                  <div class="license__card-right-text">Да</div>
                </div>
              </div>
              <div class="license__card-selection-title">Выберите подарок</div>
              <div class="license__card-selection">
                <select class="license__select">
                  <option value="Ultra One (10Gb NVME) 3 мес.">
                    Ultra One (10Gb NVME) 3 мес.
                  </option>

                  <option value="Ultra One (10Gb NVME) 2 мес.">
                    Ultra One (10Gb NVME) 2 мес.
                  </option>
                  <option value="Ultra One (10Gb NVME) 1 мес.">
                    Ultra One (10Gb NVME) 1 мес.
                  </option>
                </select>
              </div>
              <div class="license__card-total">{{card.price}} ₽</div>
              <button class="license__btn">Заказать</button>
            </div>

          </div>
        </div>
      </section>
</template>

<script>

export default {
  computed: {
    tariffs() {
      const tariffs = this.$store.getters['service/bitrix/tariffs']
      tariffs.forEach(element => {
        element.price = Math.floor(element.periods[0].amount)
      });
      return tariffs
    }
  }

}
</script>

<style scoped>
/* license */

.license {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.license__title {
  margin-bottom: 72px;
}
.license__wrapper-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 33px;
}
.license__wrap-card {
  width: 100%;
  max-width: 402px;

  padding: 40px 24px 24px;

  background-color: #fff;
  border-radius: 8px;
}
.license__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 48px;
}
.license__card-content {
  display: flex;
  margin-bottom: 24px;
}
.license__card-left {
  width: 226px;
  margin-right: 21px;
}
.license__card-left-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  opacity: 0.6;
}
.license__card-right-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;
  opacity: 0.6;
}
.license__card-left-text:last-child,
.license__card-right-text:last-child {
  margin-bottom: 0;
}
.license__card-selection-title {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 8px;
}
.license__card-selection {
  width: 100%;
  max-width: 343px;
  margin-bottom: 48px;
}
.license__select {
  width: 100%;
  max-width: 343px;
  height: 60px;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;

  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  padding: 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}
.license__card-total {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  margin-bottom: 48px;
}
.license__btn {
  width: 100%;
  max-width: 354px;
  padding: 14px 60px;
  background: #830f1e;
  border-radius: 6px;

  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.license__btn:hover {
  background-color: #660915;
}
@media (max-width: 768px) {
  .license {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .license__title {
    margin-bottom: 48px;
  }
  .license__wrapper-cards {
    gap: 48px 34px;
  }
}
@media (max-width: 576px) {
  .license__title {
    margin-bottom: 24px;
  }
  .license__wrapper-cards {
    gap: 24px 33px;
  }
}
</style>
