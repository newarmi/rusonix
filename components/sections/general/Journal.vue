<template>
  <section id="journal" class="magazine">
    <Navigation v-if="navigation" :rubrics="rubrics" />
    <div class="container">
      <h2 v-if="!navigation" class="magazine__title title">{{ title }}</h2>
        <div v-for="(item, i) in articlesArray" :key="'item' + i" class="magazine__wrapper">
          <div v-for="(article, j) in item" :key="article.title" :class="leftRight(i, j)">
            <nuxt-link :to="'/blog/' + article.slug" class="picture">
              <source media="(max-width: 1250px)" :src="article.imgMobileLink" :srcset="article.imgMobileLink"/>
              <img :src="article.imgDesktopLink" :srcset="article.imgDesktopLink" :class="smallBigImg(i, j)" alt="magazine"/>
            </nuxt-link>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <p class="magazine__link" @click="goToRubric(article.rubricSlug)">{{ article.rubricName }}</p>
                <p class="magazine__text">{{ article.date }}</p>
              </div>
              <p class="magazine__descr">{{ article.description }}</p>
              <nuxt-link :to="'blog/' + article.slug" class="magazine__text-title magazine__link-to-post">{{ article.title }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>

  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Journal',
  components: {
    Navigation: () => import('~/components/sections/general/JournalNav'),
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Журнал'
    },
    lines: {
      type: String,
      required: false,
      default: 'three'
    },
    navigation: {
      type: Boolean,
      required: false,
      default: false
    },
    tag: {
      type: String,
      default: 'journal'
    }
  },
  computed: {
    ...mapGetters(['journal', 'rubrics', 'activeRubric']),
    currentRubric() {
      if(this.$route.name!=='blog')
      return 'all'
      return this.activeRubric
    },
    articles() {
      const articles = this.journal
      articles.forEach((element) => {
        element.imgDesktopLink = this.$config.imgURL + '' + element.img_desktop
        element.imgMobileLink = this.$config.imgURL + '' + element.img_mobile
        element.rubricName = element.rubric.title
        element.rubricSlug = element.rubric.slug
        element.date = this.timeConverter(element.created_at)
      })
      if(this.currentRubric==='all') return articles
      return articles.filter(article => this.currentRubric.includes(article.rubric.slug))
    },
    articlesArray() {
      const articlesArray = []
      if(this.lines==='two') {
        articlesArray.push(this.articles.slice(0,2))
        articlesArray.push(this.articles.slice(2,4))
        return articlesArray
      }

      articlesArray.push(this.articles.slice(0,2))
      articlesArray.push(this.articles.slice(2,4))
      articlesArray.push(this.articles.slice(4,6))
      return articlesArray
    }
  },
  methods: {
    ...mapActions(['setRubric', 'resetRubric']),
    goToRubric(rubric){
      this.setRubric(rubric)
      this.$router.push({path: '/blog'})
    },
    timeConverter(unixTimestamp) {
      const a = new Date(unixTimestamp)
      const months = [
        'Января', 'Февраля', 'Марта', 'Апреля',
        'Мая', 'Июня', 'Июля', 'Августа',
        'Сентября', 'Октября', 'Ноября', 'Декабря',
      ]
      const year = a.getFullYear()
      const month = months[a.getMonth()]
      const date = a.getDate()
      return date + ' ' + month + ' ' + year
    },
    leftRight(i, j) {
      if (i !== 1) {
        return j === 0 ? 'magazine__left' : 'magazine__right'
      } else {
        return j === 0 ? 'magazine__right' : 'magazine__left'
      }
    },

    smallBigImg(i, j) {
      if (i !== 1) {
        return j === 0 ? 'magazine__img-big' : 'magazine__img-small'
      } else {
        return j === 0 ? 'magazine__img-small' : 'magazine__img-big'
      }
    },
  },
}
</script>

<style scoped>
.magazine__link-to-post {
  color: black;
}
.magazine__title {
  padding-top: 72px;
  margin-bottom: 72px;
}

.magazine__wrapper {
  display: flex;
  justify-content: space-between;
  gap: 33px;
  margin-bottom: 72px;
}

.magazine__left-about {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 21px;
  /*max-width: 431px;*/
}
.magazine__wrap-text {
  display: flex;
  margin-bottom: 21px;
}
.magazine__link {
  color: #636aac;
  opacity: 0.6;
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  margin-right: 52px;
  cursor: pointer;
}

.magazine__descr {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: #787878;
  position: relative;
  min-height: 60px;
}

.magazine__text {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #bababa;
  position: relative;
}
.magazine__text-title {
  font-family: 'Graphik', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.magazine__text::before {
  display: block;
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  left: -24%;
}
.magazine__left,
.magazine__left--mod {
  max-width: 808px;
}
.magazine__right,
.magazine__right--mod {
  max-width: 430px;
}
[data-tab-content] {
  display: none;
}
.magazine__tabs-wrapper--active[data-tab-content] {
  display: block;
}

 .magazine__img-big{
   width: 100%;
   width: 808px;
   height: 390px;
   border-radius: 6px;
   object-fit: cover;

 }
 .magazine__img-small{
  width: 100%;
  max-width: 431px;
  height: 390px;
  border-radius: 6px;
  object-fit: cover;
 }

@media (max-width: 1250px) {
  .magazine__right {
    max-width: none;
  }
  .magazine__img {
    max-width: 343px;
  }
  .magazine__text-title {
    max-width: 343px;
  }
}
@media (max-width: 992px) {
  .magazine__wrapper {
    gap: 12px;
  }
}
@media (max-width: 768px) {
  .magazine__title {
    padding-top: 48px;
    margin-bottom: 48px;
  }
  .magazine__wrapper {
    margin-bottom: 48px;
  }
  .container__magazine-navigation {
    padding: 0 0 0 24px;
  }
}
@media (max-width: 750px) {
  .magazine__wrapper {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24px;
  }
  .magazine__img-small {
    max-width: none;
  }
}


</style>
