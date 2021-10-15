<template>
    <section class="license">
        <div class="container">
          <div class="license__title title">Лицензии CS-Cart</div>
          <div class="license__wrapper-cards">
            <div class="license__card">
              <div class="license__card-title">CS-Cart Русская версия</div>
              <div class="license__card-list">
                <div class="license__card-list-text">
                  <div class="card__list-text">
                    Преимущество 1
                    <div class="card__list-total">2 шт</div>
                  </div>
                  <div class="card__list-text">
                    Преимущество 2
                    <div class="card__list-total">14</div>
                  </div>
                  <div class="card__list-text">
                    Преимущество 3
                    <div class="card__list-total">Да</div>
                  </div>
                </div>
                <!-- <div class="license__card-list-total"></div> -->
              </div>
              <div class="license__card-price">24 500 ₽</div>
              <a href="#" class="license__card-btn">Заказать</a>
            </div>

            <div class="license__card">
              <div class="license__card-title">
                CS-Cart Ultimate Русская версия
              </div>
              <div class="license__card-list">
                <div class="license__card-list-text">
                  <div class="card__list-text">
                    Преимущество 1
                    <div class="card__list-total">2 шт</div>
                  </div>
                  <div class="card__list-text">
                    Преимущество 2
                    <div class="card__list-total">14</div>
                  </div>
                  <div class="card__list-text">
                    Преимущество 3
                    <div class="card__list-total">Да</div>
                  </div>
                </div>
                <!-- <div class="license__card-list-total"></div> -->
              </div>
              <div class="license__card-price">47 500 ₽</div>
              <a href="#" class="license__card-btn">Заказать</a>
            </div>

            <div class="license__card">
              <div class="license__card-title">CS-Cart для маркетплейсов</div>
              <div class="license__card-list">
                <div class="license__card-list-text">
                  <div class="card__list-text">
                    Преимущество 1
                    <div class="card__list-total">2 шт</div>
                  </div>
                  <div class="card__list-text">
                    Преимущество 2
                    <div class="card__list-total">14</div>
                  </div>
                  <div class="card__list-text">
                    Преимущество 3
                    <div class="card__list-total">Да</div>
                  </div>
                </div>
                <!-- <div class="license__card-list-total"></div> -->
              </div>
              <div class="license__card-price">По запросу</div>
              <a href="#" class="license__card-btn">Заказать</a>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: 'Possibilities',
  computed: {

  }
}
</script>

<style scoped>
.license {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}

.license__title {
  font-family: "Graphik", sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 72px;
}

.license__wrapper-cards {
  display: flex;
  flex-wrap: wrap;
}

.license__card {
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 24px 40px;
  margin-right: 33px;
}

.license__card:last-child {
  margin-right: 0;
}

.license__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 48px;
}

.license__card-list {
  display: flex;
  margin-bottom: 48px;
}

.card__list-text {
  display: flex;
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 20px;
}

.card__list-total {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-left: 130px;
}

.license__card-price {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  margin-bottom: 48px;
}

.license__card-btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  background-color: #830f1e;
  border-radius: 6px;
  padding: 19px 141px 18px 144px;
  cursor: pointer;
}
.license__card-btn:hover {
  background-color: #660915;
}
@media (max-width: 1200px) {
  .license {
    padding-bottom: 0;
  }
  .license__card {
    margin-bottom: 48px;
  }
}

@media (max-width: 992px) {
  .license__card {
    margin-right: 25px;
  }
  .license__card:nth-child(2n) {
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .license {
    padding-top: 48px;
  }
  .license__title {
    margin-bottom: 65px;
  }
  .license__card {
    margin-right: 33px;
  }
  .license__card-title {
    margin-bottom: 24px;
  }
  .card__list-text {
    display: block;
    margin-bottom: 12px;
  }
  .card__list-total {
    margin-left: 0;
  }
  .license__card-list {
    margin-bottom: 24px;
  }
  .license__card-price {
    margin-bottom: 24px;
  }
  .license__card-btn {
    padding: 19px 113px 18px 116px;
  }
}

@media (max-width: 576px) {
  .license {
    padding-bottom: 24px;
  }
  .license__title {
    margin-bottom: 24px;
    max-width: 240px;
  }
  .license__card {
    margin-bottom: 24px;
  }
}

</style>