<template>
  <div class="secret__container">
    <div class="secret__wrapper">
      <div class="secret__date">
        <div class="secret__date-text">{{ data }}</div>
        <div class="secret__security" @click="goToRubric(rubric.slug)">{{ rubric.title }}</div>
      </div>

      <h1 class="secret__title">{{ article.title }}</h1>

      <div v-for="item in article.content" :key="item.key">
          <div v-if="item.layout==='description'" class="secret__title-text" v-html="item.attributes.description"></div>
          <div v-if="item.layout==='text'" class="secret__text secret__text-bottom" v-html="item.attributes.text"></div>
          <div v-if="item.layout==='title'" class="secret__title secret__title-second" v-html="item.attributes.title"></div>
          <picture v-if="item.layout==='image'" class="magazine__picture">
            <img
              :src="$config.imgURL + item.attributes.image"
              :srcset="$config.imgURL + item.attributes.image"
              class="magazine__img"
              alt="post img" />
          </picture>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('journal', ['article']),
    data () {
      return this.timeConverter(this.article.created_at)
    },
    rubric() {
      return this.article.rubric
    }
  },
  methods: {
    ...mapActions(['setRubric']),
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
  }
}
</script>

<style scoped>

.secret__container {
  padding: 0 171px;
  margin: 0 auto;
  position: relative;
  top: -100px;
}
.secret__wrapper {
  padding: 72px 87px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
    margin: 0 auto;
    max-width: 1121px;
}
.secret__date {
  display: flex;
  margin-bottom: 48px;
}
.secret__date-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: #bababa;
  position: relative;
  margin-right: 54px;

}
.secret__date-text::after {
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  right: -22%;
}
.secret__security {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: #202a89;
  text-transform: uppercase;
  cursor: pointer;
}

.secret__title {
  font-family: "Graphik", sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 24px;
}

.secret__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 72px;
}
.secret__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  opacity: 0.6;
}

.magazine__picture {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.secret__title-second {
  margin-bottom: 48px;
}

@media (max-width: 1250px) {
  .secret__container {
    padding: 0;
  }
}

@media (max-width: 992px) {
  .secret__wrapper {
    padding: 48px 24px;
  }
}
@media (max-width: 576px) {
  .secret__title {
  font-size: 24px;

}
  .secret__wrapper {
    padding: 48px 16px;
  }
}

</style>
