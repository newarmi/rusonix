<template>
    <section class="advantage-server">
        <div class="container">
          <div class="advantage-server__title title">Основные преимущества</div>
          <div class="advantage-server__title-text">
            <p class="advantage-server__text text">
              Мы используем только промышленное оборудование DELL, ПО мировых
              лидеров рынка.
            </p>
            <p class="advantage-server__text text">
              Для обеспечения uptime 99,99% наши сервера располагаются в
              надежном дата центре уровня Tier IV.
            </p>
          </div>
          <div class="advantage-server__wrapper-img">
            <picture class="picture">
              <img
                src="@/assets/img/advantage-section-1.png"
                srcset="@/assets/img/advantage-section-1@2x.png 2x"
                class="advantage-server__img"
                alt="server__img"
              />
            </picture>
          </div>
          <div class="advantage-server__wrapper">
            <div class="advantage-server__wrapper-info">
              <div class="advantage-server__info-title">
                Промышленное оборудования DELL и Cisco
              </div>
              <p class="advantage-server__info-text">
                Мы используем только надежные серверы производства компании DELL
                и качественное сетевое оборудование Cisco System, что позволяет
                нам предоставлять самое лушчее качество услуг ЦОД для наших
                клиентов.
              </p>
              <a href="#" class="advantage-server__info-link"
                >Подробнее про оборудование ></a
              >
            </div>
            <div class="advantage-server__wrapper-info">
              <div class="advantage-server__info-title">
                Полное соответствие ФЗ-152
              </div>
              <p class="advantage-server__info-text">
                Согласно федеральному закону "О персональном хранении данных"
                все персональные данные ваших пользователей нужно хранить на
                территории РФ. Наши сервера полностью отвечают требованиям и
                находятся в Москве.
              </p>
              <a href="#" class="advantage-server__info-link"
                >Подробнее про ФЗ-152 ></a
              >
            </div>
          </div>
          <div class="advantage-server__wrapper">
            <div class="advantage-server__above">
              <div class="advantage-server__above-wrap">
                <div class="advantage-server__above-title">Uptime 99,99%</div>
                <p class="advantage-server__above-text">
                  Все инженерные системы дата-центра резервируются по схеме 2
                  (N+1): дублируются как основная, так и дополнительная системы.
                  Допустимый уровень простоя сервисов всего 26 минут в год.
                </p>
              </div>
              <div class="advantage-server__above-wrap">
                <div class="advantage-server__above-title">100 Гбит/сек</div>
                <p class="advantage-server__above-text">
                  Пропускная способность каналов связи превышает 100 Гбит/сек.
                  Благодаря этому скорость открытия сайта становится минимально
                  возможной
                </p>
              </div>
            </div>

            <div class="advantage-server__above-img">
              <picture class="picture">
                <img
                  src="@/assets/img/advantage-section-1.png"
                  srcset="@/assets/img/advantage-section-1@2x.png 2x"
                  class="server__img"
                  alt="server__img"
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
.advantage-server {
  margin-top: 52px;
  margin-bottom: 24px;
}

.advantage-server__title {
  margin-bottom: 19px;
}

.advantage-server__text {
  color: #000;
  opacity: 0.6;
}

.advantage-server__title-text {
  margin-bottom: 96px;
}

.advantage-server__wrapper-img {
  display: flex;
  justify-content: center;
}

.advantage-server__img {
  display: none;
}

.advantage-server__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 79px;
}

.advantage-server__info-title {
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

.advantage-server__info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 605px;
  opacity: 0.6;
  margin-bottom: 24px;
}

.advantage-server__info-link {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}

.advantage-server__info-link:hover {
  opacity: 0.6;
}

.advantage-server__above-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

.advantage-server__above-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 605px;
  opacity: 0.6;
  margin-bottom: 72px;
}

@media (max-width: 768px) {
  .advantage-server {
    margin-top: 28px;
    margin-bottom: 24px;
  }
  .advantage-server__title {
    margin-bottom: 48px;
  }
  .advantage-server__title-text {
    margin-bottom: 48px;
  }
  .advantage-server__wrapper-img {
    margin-bottom: 48px;
  }
  .advantage-server__img {
    display: block;
  }
  .advantage-server__above-img {
    display: none;
  }
  .advantage-server__wrapper {
    margin-bottom: 48px;
  }
  .advantage-server__wrapper:last-child {
    margin-bottom: 0;
  }
  .advantage-server__info-title {
    max-width: 330px;
  }
  .advantage-server__info-text {
    max-width: 343px;
  }
  .advantage-server__above {
    display: flex;
  }
  .advantage-server__above-wrap {
    margin-right: 34px;
  }
  .advantage-server__above-wrap:last-child {
    margin-right: 0;
  }
  .advantage-server__above-wrap .advantage-server__above-text:last-child {
    margin-bottom: 24px;
  }
}

@media (max-width: 576px) {
  .advantage-server__title {
    margin-bottom: 24px;
  }
  .advantage-server__wrapper {
    flex-direction: column;
  }
  .advantage-server__wrapper-info {
    margin-bottom: 48px;
  }
  .advantage-server__wrapper-info:last-child {
    margin-bottom: 0;
  }
  .advantage-server__above {
    flex-direction: column;
    align-items: flex-start;
  }
  .advantage-server__above-wrap {
    margin-right: 0;
    margin-bottom: 48px;
  }
  .advantage-server__above-wrap:last-child {
    margin-bottom: 0;
  }
  .advantage-server__above-text {
    max-width: 330px;
  }
}
</style>
