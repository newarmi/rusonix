<template>
  <section class="license">
    <div class="container">
      <div class="license__title title">{{ page.title }}</div>
      <div class="license__text-descr">
        <div class="license__text text" v-html="page.description">
        </div>
      </div>
      <div class="license__sertificates">
        <div v-for="license in licenses" :key="license.title" class="license__sertificate-wrap">
          <nuxt-link :to="license.link">
          <picture class="picture">
            <img
              :src="license.imageLink"
              :srcset="license.imageLink"
              alt="license"
              class="license__img"
            />
          </picture>
          </nuxt-link>
          <nuxt-link class="nl__black" :to="license.link">
            <div class="license__sertificate-title">{{ license.title }} </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionLicenses',
  
  computed: {
    page() {
        return this.$store.getters['services/licenses']
    },
    licenses() {
      const items  = this.page.sections
      items.forEach(element => {
        element.imageLink = this.$config.imgURL + '' + element.image
      });
      return items
    }
  }
}
</script>

<style scoped>
.nl__black {
  color: black
}


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
