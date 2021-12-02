<template>
  <div v-if="$route.name!=='support'" class="header-content__wrapper" :class="`header-content__${$route.name}`">
    <div class="container">
      <h1 v-if="header.title" class="start__title start__title-cscard" v-html="header.title"></h1>
      <ul v-if="header.tags" class="start__list">
            <li class="start__item">
              <a class="start__link" href="#">Обзор</a>
            </li>
            <li class="start__item">
              <a class="start__link" href="#">Стоимость</a>
            </li>
          </ul>
      <div v-if="header.description" class="start__title-descr" :class="`header-content__${$route.name}`" v-html="header.description"></div>
      <button v-if="button" class="start__cscard-btn">{{ button }}</button>
    </div>
    <div v-if="isDecor" class="header__decor"></div>
  </div>
</template>

<script>

export default {
  name: 'HeaderContent',
  computed: {
    isArticle() {
        return this.$route.name==='journal-article'
    },
    isDocument() {
        return this.$route.name==='company-document'
    },
    header() {
      if(this.$route.name==='index') {
        return this.$store.getters.header
      } 
      
      if(this.$route.name==='service-slug') {
        return this.$store.getters['universal/header']
      }

      if(this.$route.name==='company-document') {
        return this.$store.getters['requisites/header']
      }

      if(this.isArticle) {
        const articleHeader =  this.$store.getters['journal/header']
        return articleHeader
      }
       return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/header']
    },
    button() {
      if(this.isArticle) {
        return false
      }
      return this.header.header_button
    },
    isDecor() {
      return !this.isArticle&&!this.isDocument;
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
    color: #fff;
    opacity: 0.6;
    max-width: 460px;
    margin-bottom: 72px;
}

.start__title-cscard {
    padding-top: 0;
    margin-bottom: 12px;
}

.start__list {
  display: flex;
  margin-bottom: 28px;
}

.start__item {
  margin-right: 40px;
}

.start__link {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
}

.start__title-descr.header-content__services {
  max-width: 460px
}

@media (max-width: 768px) {
  .start__title-descr.header-content__services {
    max-width: 340px;
  }
  .start__list {
    margin-bottom: 24px;
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

.start__cscard-btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  padding: 15px 33px;
  background-color: #0f7f69;
  border-radius: 8px;
  cursor: pointer;
}

.start__cscard-btn:hover {
  background: #065848;
}

</style>
