<template>
  <section class="payers">
      <div class="container">
          <div class="payers__wrapper">
              <div class="wrap__stap-back">
                  <a href="#" class="btn__step-back" @click="back">
                    <span class="arrow__step-back">
                      <img class="arrow__step-back-img" src="@/assets/img/arrow-step-back.png" alt="arrow step back">
                    </span>
                  Назад</a>

                  <div class="date__stap-back">
                      {{timeConverter(content.created_at)}}
                  </div>
              </div>

              <h1 class="payers__title">{{content.title}}</h1>
              <div class="payers__wrap-content" v-html="content.content"></div>          
              <p v-if="content.author!=='NULL'&&content.author" class="payers__publication">Опубликовано: {{content.author}}</p>
          </div>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  async asyncData({ store, params }) {    
    await store.dispatch('fetchPage', 'knowledge')
    await store.dispatch('knowledge/getContent', params.post)
  },
  head() {
    return {
        title: this.content.meta_title,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: this.content.meta_description,
            }
        ],
    }
  },
  computed: {
    ...mapGetters('knowledge', ['content']),
  },
  methods: {
    back() {
      this.$router.back()
    },
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
.payers {
  background-color: #FCF7F2;
}

.payers > .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

@media (max-width: 992px) {
  .payers > .container {
    padding: 0;
  }
}

.payers__wrapper {
  padding: 72px 87px 35px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #FFFFFF;
  overflow: hidden;
  width: 100%;
  max-width: 1121px;

  position: relative;
  top: -75px;
}

@media (max-width: 992px) {
  .payers__wrapper {
    max-width: none;
    padding: 48px 24px;
  }
}

@media (max-width: 576px) {
  .payers__wrapper {
    padding: 48px 26px;
  }
}

.payers__title {
  font-family: "Graphik", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-bottom: 48px;
}

.payers__wrap {
  margin-bottom: 72px;
}

.payers__wrap-content {
  margin-bottom: 72px;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  width: 100%;
  max-width: 890px;
  opacity: 0.7;

}

@media (max-width: 992px) {
  .payers__wrap {
    margin-bottom: 48px;
  }
}

.payers__wrap-info {
  margin-bottom: 48px;
}

.payers__wrap-info:last-child {
  margin-bottom: 45px;
}

.payers__wrap-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-bottom: 24px;
}

.payers__wrap-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  width: 100%;
  max-width: 890px;
  opacity: 0.7;
}

.payers__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.7;
  margin-bottom: 18px;
  width: 100%;
  max-width: 900px;
}

.payers__text-decor {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.payers__list {
  padding-left: 25px;
  margin-bottom: 18px;
}

.payers__item {
  list-style-type: disc;
  font-family: "Graphik",sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.7;
}

.payers__img {
  width: 100%;
  max-width: 945px;
  margin-bottom: 48px;
}

.payers__publication {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}

.wrap__stap-back {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-bottom: 45px;
}

.wrap__stap-back .btn__step-back {
  margin-bottom: 0;
}

.date__stap-back {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #BABABA;
  margin-left: 27px;
}

@media (max-width: 576px) {
  .date__stap-back {
    font-size: 11px;
  }
}

.btn__step-back {
  background-color: #ffffff;
  border: 1px solid #EDE7E2;
  border-radius: 8px;
  padding: 8px 29px;
  color: #000000;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 160px;
  margin-bottom: 75px;
}

@media (max-width: 768px) {
  .btn__step-back {
    margin-bottom: 48px;
  }
}

.arrow__step-back {
  margin-right: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
</style>