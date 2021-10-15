<template>
<section class="communigate__advantage">
        <div class="container">
          <div class="communigate__advantage-title title">
            Основные преимущества
          </div>
          <p class="communigate__advantage-text text">
            Панель Plesk обеспечивает безопасное соединение между сервером и
            браузером пользователя. Информация передается в закодированном виде
            по протоколу HTTPS, и расшифровать ее можно с помощью специального
            ключа, который известен только владельцу сертификата.
          </p>
          <div class="communigate__advantage-img-info--mod">
            <picture class="picture">
              <source
                media="(max-width: 768px)"
                src="@/assets/img/communigate-advantage-table.png"
                srcset="@/assets/img/communigate-advantage-table@2x.png 2x"
              />
              <img
                src="@/assets/img/communigate-advantage.png"
                srcset="@/assets/img/communigate-advantage@2x.png 2x"
                alt="cscard img"
                class="communigate__img"
              />
            </picture>
          </div>
          <div class="communigate__advantage-wrapper">
            <div class="communigate__advantage-card">
              <div class="communigate__advantage-card-title">IP-телефония</div>
              <p class="communigate__advantage-card-text">
                Все "Серверы без забот™" предоставляются с предустановленным
                инсталлятором CMS Битрикс. Настройки программного обеспечения
                оптимизированы для быстрой и стабильной работы ваших сайтов.
              </p>
              <a href="#" class="communigate__advantage-card-link"
                >Подробнее про оборудование ></a
              >
            </div>

            <div class="communigate__advantage-card">
              <div class="communigate__advantage-card-title">
                Веб-почта, Email
              </div>
              <p class="communigate__advantage-card-text">
                Выставляйте диапазоны цен и SKU, управляйте заказами и
                доставкой, предлагайте скидки и сравнение товаров, ведите
                остатки на складе, а также:импортируйте/экспортируйте данные;
                управляйте валютой; ведите аналитику продаж.
              </p>
              <a href="#" class="communigate__advantage-card-link"
                >Подробнее ></a
              >
            </div>
          </div>
          <div class="communigate__advantage-wrapper-info">
            <div class="communigate__advantage-wrap-info">
              <div class="communigate__advantage-card-info">
                <div class="communigate__advantage-card-info-title">
                  Гипервизорная и контейнерная виртуализацию
                </div>
                <p class="communigate__advantage-card-info-text">
                  Все инженерные системы дата-центра резервируются по схеме 2
                  (N+1): дублируются как основная, так и дополнительная системы.
                  Допустимый уровень простоя сервисов всего 26 минут в год.
                </p>
              </div>
              <div class="communigate__advantage-card-info">
                <div class="communigate__advantage-card-info-title">
                  Распределенное облачное хранилище
                </div>
                <p class="communigate__advantage-card-info-text">
                  Пропускная способность каналов связи превышает 100 Гбит/сек.
                  Благодаря этому скорость открытия сайта становится минимально
                  возможной
                </p>
              </div>
            </div>
            <div class="communigate__advantage-img-info">
              <picture class="picture">
                <img
                  src="@/assets/img/communigate-advantage.png"
                  srcset="@/assets/img/communigate-advantage@2x.png 2x"
                  alt="cscard img"
                  class="communigate__img"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: 'Benefits',
  computed: {

  }
}
</script>

<style scoped>
.communigate__advantage {
  margin-top: 52px;
  margin-bottom: 72px;
}

.communigate__advantage-title {
  margin-bottom: 24px;
}

.communigate__advantage-text {
  opacity: 0.6;
  margin-bottom: 96px;
}

.communigate__advantage-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 96px;
}

.communigate__advantage-card-title {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
  margin-bottom: 25px;
}

.communigate__advantage-card-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  max-width: 578px;
  opacity: 0.6;
  margin-bottom: 24px;
}

.communigate__advantage-card-link {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}

.communigate__advantage-wrapper-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.communigate__advantage-card-info-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-bottom: 24px;
}

.communigate__advantage-card-info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.6;
  max-width: 600px;
}

.communigate__advantage-card-info {
  margin-bottom: 72px;
}

.communigate__advantage-img-info--mod {
  display: none;
}

@media (max-width: 768px) {
  .communigate__advantage {
    margin-top: 28px;
    margin-bottom: 48px;
  }
  .communigate__advantage-title {
    margin-bottom: 48px;
  }
  .communigate__advantage-text {
    margin-bottom: 48px;
  }
  .communigate__advantage-img-info--mod {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
  }
  .communigate__advantage-card-text {
    max-width: 350px;
  }
  .communigate__advantage-img-info {
    display: none;
  }
  .communigate__advantage-wrapper {
    margin-bottom: 48px;
  }
  .test__title {
    font-family: "Graphik", sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0px;
    text-align: left;
  }
  .communigate__advantage-wrap-info {
    display: flex;
  }
  .communigate__advantage-card-info {
    margin-right: 34px;
  }
  .communigate__advantage-card-info-title {
    max-width: 320px;
  }
  .communigate__advantage-card-info-text {
    max-width: 350px;
  }
  .communigate__advantage-card-info {
    margin-bottom: 0;
  }
}

@media (max-width: 576px) {
  .communigate__advantage-text {
    margin-bottom: 64px;
  }
  .communigate__advantage-img-info--mod {
    margin-bottom: 64px;
  }
  .communigate__advantage-wrapper {
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
  .communigate__advantage-card {
    margin-bottom: 48px;
  }
  .communigate__advantage-card:last-child {
    margin-bottom: 0;
  }
  .communigate__advantage-wrap-info {
    flex-wrap: wrap;
  }
  .communigate__advantage-card-info {
    margin-bottom: 48px;
    margin-right: 0;
  }
  .communigate__advantage-card-info:last-child {
    margin-bottom: 0;
  }
  .communigate__advantage-card-info-title {
    max-width: 600px;
  }
  .communigate__advantage-card-info-text {
    max-width: 600px;
  }
}
</style>
