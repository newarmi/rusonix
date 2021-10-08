<template>
  <section class="license">
    <div class="container">
      <div class="license__title title">Лицензии</div>
      <div class="license__text-descr">
        <p class="license__text text">
          Мы используем только промышленное оборудование DELL, ПО мировых
          лидеров рынка.
        </p>
        <p class="license__text text">
          Для обеспечения uptime 99,99% наши сервера располагаются в
          надежном дата центре уровня Tier IV.
        </p>
      </div>

      <div class="license__sertificates">
        <div class="license__sertificate-wrap">
          <picture class="picture">
            <img
              src="@/assets/img/license-1.png"
              srcset="@/assets/img/license-1@2x.png 2x"
              alt="license"
              class="license__img"
            />
          </picture>
          <div class="license__sertificate-title">Лицензии Plesk</div>
        </div>
        <div class="license__sertificate-wrap">
          <picture class="picture">
            <img
              src="@/assets/img/license-2.png"
              srcset="@/assets/img/license-2@2x.png 2x"
              alt="license"
              class="license__img"
            />
          </picture>
          <div class="license__sertificate-title">Лицензии Virtuozzo</div>
        </div>
        <div class="license__sertificate-wrap">
          <picture class="picture">
            <img
              src="@/assets/img/license-3.png"
              srcset="@/assets/img/license-3@2x.png 2x"
              alt="license"
              class="license__img"
            />
          </picture>
          <div class="license__sertificate-title">Лицензии Communigate</div>
        </div>
        <div class="license__sertificate-wrap">
          <picture class="picture">
            <img
              src="@/assets/img/license-4.png"
              srcset="@/assets/img/license-4@2x.png 2x"
              alt="license"
              class="license__img"
            />
          </picture>
          <div class="license__sertificate-title">Лицензии CS Cart</div>
        </div>
        <div class="license__sertificate-wrap">
          <picture class="picture">
            <img
              src="@/assets/img/license-5.png"
              srcset="@/assets/img/license-5@2x.png 2x"
              alt="license"
              class="license__img"
            />
          </picture>
          <div class="license__sertificate-title">Лицензии 1С Битрикс</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionLicenses'
}
</script>

<style scoped>

.license {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 24px;
}
.license__title {
  margin-bottom: 24px;
}
.license__text {
  color: #000000;
  opacity: 0.6;
}
.license__text-descr {
  margin-bottom: 96px;
}
.license__sertificates {
  display: flex;
  flex-wrap: wrap;
}
.license__sertificate-wrap {
  margin-right: 33px;
  margin-bottom: 48px;
}

.license__img {
  background-color: #fff;
  padding: 20px 81px;
  object-fit: cover;
  width: 391px;
  height: 200px;
  margin-bottom: 24px;
}
.license__sertificate-title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}
@media (max-width: 1440px) {
  .license__sertificate-wrap:nth-child(3n + 3) {
    margin-right: 0;
  }
}
@media (max-width: 1200px) {
  .license__sertificate-wrap {
    margin-right: 34px;
  }
  .license__sertificate-wrap:nth-child(3n + 3) {
    margin-right: 34px;
  }
}
@media (max-width: 992px) {
  .license__img {
    width: 395px;
  }
  .license__sertificate-wrap:nth-child(2n + 2) {
    margin-right: 0;
  }
}
@media (max-width: 768px) {
  .license {
    padding-top: 48px;
    padding-bottom: 0;
  }
  .license__img {
    width: 343px;
    height: 200px;
  }
  .license__text-descr {
    margin-bottom: 48px;
  }
}
@media (max-width: 576px) {
  .license {
    padding-bottom: 24px;
  }
  .license__sertificate-wrap {
    margin-right: 0;
    margin-bottom: 24px;
  }
  .license__sertificate-wrap:nth-child(3n + 3) {
    margin-right: 0;
  }
}



</style>
