<template>
    <div class="secret__container">
          <div class="secret__wrapper">
            <div class="secret__date">
              <div class="secret__date-text">{{data}}</div>
              <div class="secret__security">{{ rubric.title }}</div>
            </div>

            <div class="secret__title">{{ article.title }}</div>

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
import { mapGetters } from 'vuex';

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
    timeConverter(unixTimestamp) {
      const a = new Date(unixTimestamp)
      const months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
      ]
      const year = a.getFullYear()
      const month = months[a.getMonth()]
      const date = a.getDate()
      const time = date + ' ' + month + ' ' + year
      return time
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
  letter-spacing: 0px;
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
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
  text-transform: uppercase;
}

.secret__title {
  font-family: "Graphik", sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

.secret__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 72px;
}
.secret__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}
.secret__text-top,
.secret__text-middle {
  margin-bottom: 50px;
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
.magazine__title-additionally {
  font-family: "Graphik", sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 72px;
}
.magazine__additionally-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px 34px;
  padding-bottom: 72px;
}
.magazine__additionally-card {
  flex: 1 1 calc((100% / 3) - 34px);
}
.additionally__img {
  margin-bottom: 24px;
}
.additionally__date {
  display: flex;
  margin-bottom: 21px;
}
.additionally__security {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  color: #636aac;
}
.additionally__text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #bababa;
  margin-left: 52px;
  position: relative;
}
.additionally__text::before {
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  left: -22%;
}
.additionally__title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}
@media (max-width: 1250px) {
  .secret__container {
    padding: 0;
  }
}
@media (max-width: 1200px) {
  .additionally__text {
    margin-left: 40px;
  }
  .additionally__text::before {
    left: -15%;
  }
}
@media (max-width: 1150px) {
  .additionally__text {
    margin-left: 35px;
  }
  .magazine__additionally-card {
    flex: 1 1 calc((100% / 2) - 34px);
  }
}
@media (max-width: 1000px) {
  .additionally__img {
    max-width: 343px;
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
  .magazine__additionally-card {
    flex: 1 1 calc(100% - 34px);
  }
}

</style>