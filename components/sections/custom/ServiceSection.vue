<template>
  <section :id="services.tag" class="license">
    <div class="container">
      <div class="license__title title">{{ services.title }}</div>
      <div class="license__text-descr">
        <div class="license__text text" v-html="services.description">
        </div>
      </div>
      <div class="license__sertificates">
        <div v-for="item in services.services" :key="item.key" class="license__sertificate-wrap">
         
          <picture class="picture">
            <img
              :src="$config.imgURL + item.attributes.image"
              :srcset="$config.imgURL + item.attributes.image"
              alt="license"
              class="license__img"
              @click="setSslFilter(item.attributes.filterType, item.attributes.filterValue, item.attributes.tab, 'service/' + item.attributes.link)"
            />
          </picture>
         
          <div class="nl__black">
            <div class="license__sertificate-title"
            @click="setSslFilter(item.attributes.filterType, item.attributes.filterValue, item.attributes.tab, 'service/' + item.attributes.link)">{{ item.attributes.title }} </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ServiceSection',
  props: {
    services: {
      type: Object,
      required: true
    }
  }, 
  computed: {

  },
  methods: {
    ...mapActions('universal', ['setFilter']),
    ...mapActions(['setTag']),
    setSslFilter(filterType, filterValue, tag, route) {
      if(filterValue)
      this.setFilter({filterType, filterValue})
      this.setTag(tag)
      this.$router.push({path: route, hash: tag})
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
.license__container {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;
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
  gap: 48px 33px;
}

.license__img {
  background-color: #fff;
  padding: 20px 81px;
  object-fit: cover;
  width: 391px;
  height: 200px;
  margin-bottom: 24px;
  cursor: pointer;
}
.license__sertificate-title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
}

@media (max-width: 992px) {
  .license__sertificate-wrap {
    width: 100%;
    max-width: 343px;
  }
  .license__container {
    padding: 0 24px;
  }
}
@media (max-width: 768px) {
  .license {
    padding-top: 48px;
    padding-bottom: 0;
  }

  .license__text-descr {
    margin-bottom: 48px;
  }
}
@media (max-width: 576px) {
  .license {
    padding-bottom: 24px;
  }
  .license__container {
    padding: 0 16px;
  }
  .license__sertificates {
    gap: 24px 33px;
  }
  .license__img {
    padding: 29px 65px;
  }
}
</style>
