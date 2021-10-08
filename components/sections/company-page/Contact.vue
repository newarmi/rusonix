<template>
  <section class="contact">
    <div class="container">
      <div class="contact__title title">Контакты</div>
    </div>
    <div class="container contact__container-map">
      <div class="contact__map">
        <picture class="picture">
          <source
            media="(max-width: 768px)"
            srcset="@/assets/img/contact-map-tablet.jpg, @/assets/img/contact-map-tablet@2x.jpg 2x"
          />
          <img
            src="@/assets/img/contact-map.jpg"
            srcset="@/assets/img/contact-map@2x.jpg 2x"
            alt="contact-map"
            class="contact__map-img"
          />
        </picture>
        <div class="contact__map-address">
          <div class="contact__map-address-wrap">
            <div class="contact__address-title">
              Адрес московского офиса
            </div>
            <p class="contact__address-text">
              Ямского поля 5-я улица, дом 9, Помещение II, 2 этаж, офис №19
            </p>
          </div>
          <div class="contact__map-address-wrap">
            <div class="contact__address-title">
              Адрес для корреспонденции
            </div>
            <p class="contact__address-text">127137, г. Москва, а/я 19</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="contact__address">
        <div class="contact__address-map">
          <div class="contact__map-address-wrap">
            <div class="contact__address-title">
              Адрес московского офиса
            </div>
            <p class="contact__address-text">
              Ямского поля 5-я улица, дом 9, Помещение II, 2 этаж, офис №19
            </p>
          </div>
          <div class="contact__map-address-wrap">
            <div class="contact__address-title">
              Адрес для корреспонденции
            </div>
            <p class="contact__address-text">127137, г. Москва, а/я 19</p>
          </div>
        </div>
        <div class="contact__address-about">
          <div class="contact__address-about-wrap">
            <div class="contact__address-title">Телефон для Москвы</div>
            <p class="contact__address-text">+7 495 248 19 01</p>
          </div>

          <div class="contact__address-about-wrap">
            <div class="contact__address-title">Для регионов РФ</div>
            <p class="contact__address-text">8 800 600 28 01</p>
          </div>
        </div>

        <div class="contact__address-about">
          <div class="contact__address-about-wrap">
            <div class="contact__address-title">
              Для отзывов и предложений
            </div>
            <p class="contact__address-text">director@rusonyx.ru</p>
          </div>

          <div class="contact__address-about-wrap">
            <div class="contact__address-title">По общим вопросам</div>
            <p class="contact__address-text">managers@rusonyx.ru</p>
          </div>
        </div>
        <div class="contact__address-about">
          <div class="contact__address-about-wrap">
            <div class="contact__address-title">Партнерская программа</div>
            <p class="contact__address-text">partners@rusonyx.ru</p>
          </div>

          <div class="contact__address-about-wrap">
            <div class="contact__address-title">
              По бухгалтерским вопросам
            </div>
            <p class="contact__address-text">buh@rusonyx.ru</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>

.contact {
  padding-top: 72px;
}
.contact__title {
  margin-bottom: 72px;
}
.contact__map {
  position: relative;
  margin-bottom: 48px;
}
.contact__map-address {
  background-color: #fff;

  padding: 48px;

  position: absolute;
  top: 19%;
  right: 2.6%;
}
.contact__map-address-wrap {
  margin-bottom: 24px;
}
.contact__address-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 16px;
}
.contact__address-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  color: #000;
  opacity: 0.6;

  max-width: 300px;
}
.contact__address {
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
}
.contact__address-about {
  width: 402px;
}
.contact__address-about-wrap {
  margin-bottom: 56px;
}
.contact__address-about-wrap:last-child {
  margin-bottom: 0px;
}
.contact__address-map {
  display: none;
}
@media (max-width: 1200px) {
  .contact__address {
    flex-wrap: wrap;
  }
  .contact__map-address {
    display: none;
  }
  .contact__address-map {
    display: block;
  }
}
@media (max-width: 992px) {
  .contact__address-about {
    width: 265px;
  }
}
@media (max-width: 768px) {
  .contact {
    padding-top: 48px;
  }
  .contact__container-map {
    padding: 0;
  }
  .contact__map {
    margin-bottom: 24px;
  }
  .contact__title {
    margin-bottom: 48px;
  }
  .contact__map-address {
    display: none;
  }
  .contact__address-about-wrap {
    margin-bottom: 24px;
  }
  .contact__address {
    margin-bottom: 48px;
  }
}

</style>
