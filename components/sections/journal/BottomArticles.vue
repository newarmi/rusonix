<template>
  <div class="container">
    <div class="magazine__title-additionally">Также в журнале</div>
    <div class="magazine__additionally-wrapper">
      <div v-for="card in bottom" :key="card.slug" class="magazine__additionally-card">
        <nuxt-link :to="'/journal/' + card.slug" class="picture">
          <img
            :src="$config.imgURL + card.img_mobile"
            :srcset="$config.imgURL + card.img_mobile"
            class="additionally__img"
            alt="card 1"
          />
        </nuxt-link>
        <div class="additionally__date">
          <div class="additionally__security">{{ card.rubric.title }}</div>
          <div class="additionally__text">{{ time(card.created_at) }}</div>
        </div>
        <nuxt-link :to="'/journal/' + card.slug" class="additionally__title nl_black">{{ card.title }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('journal', ['bottom']),
  },
  methods: {
    time(unixTimestamp) {
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
.nl_black {
  color: black;
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
  .additionally__img {
  max-width: 325px;
  }
  .secret__wrapper {
    padding: 48px 16px;
  }
  .magazine__additionally-card {
    flex: 1 1 calc(100% - 34px);
  }
}

</style>
