<template>
  <div class="header-content__wrapper" :class="`header-content__${$route.name}`">
    <div class="container">
      <h1 class="start__title" v-html="header.title"></h1>
      <p v-if="header.description" class="start__title-descr" :class="`header-content__${$route.name}`" v-html="header.description"></p>
    </div>
    <div class="header__decor"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderContent',
  computed: {
    ...mapGetters([
      'currentPage',
      'pageData',      
    ]),
    headerData() {
      return this.pageData(this.currentPage)
    },
    header() {
      if(this.$route.name==='index') {
        return this.$store.getters.header
      } else {
        return this.$store.getters[this.$route.name + '/header']
      }
    }
  }
}

</script>

<style scoped>

.header-content__wrapper {
  padding-top: 310px;
  padding-bottom: 72px;
}

@media (max-width: 992px) {
  .header-content__wrapper{
    padding-top: 100px;
    padding-bottom: 24px;
  }
}

.header-content__wrapper.header-content__company,
.header-content__wrapper.header-content__services {
  padding-top: 296px;
  padding-bottom: 200px;
}

@media (max-width: 992px) {
  .header-content__wrapper.header-content__company,
  .header-content__wrapper.header-content__services {
    padding-top: 215px;
    padding-bottom: 200px;
  }
}

.start__title {
  font-family: "Graphik", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
}

.start__title-descr {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  opacity: 0.6;
  width: 100%;
  margin-top: 24px;
}


.start__title-descr.header-content__services {
  max-width: 460px
}

@media (max-width: 768px) {
  .start__title-descr.header-content__services {
    max-width: 340px;
  }
}
@media (max-width: 375px) {
  .start__title-descr.header-content__services {
    max-width: none;
  }
}

.start__title >>> .start__title-decor {
  font-family: "Graphik", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 64px;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;
  overflow: hidden;
}

@media (max-width: 992px) {
  .start__title {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  .start__title >>> .start__title-decor {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
}

</style>
