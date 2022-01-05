<template>
    <section class="category">
        <div class="container">
            <a class="btn__step-back" @click="back">
                <span class="arrow__step-back">
                    <img class="arrow__step-back-img" src="@/assets/img/arrow-step-back.png" alt="arrow step back">
                </span>Назад</a>

            <h3 class="category__title">Результаты поиска по запросу "{{searchQuery}}"</h3>
            <ul class="category__list">
                <li v-for="result in posts" :key="result.slug" class="category__item">
                    <div class="category__item-wrap">
                        <span class="category__item-img"><img src="@/assets/img/contact-icon.png" alt=""></span>
                        <div class="category__link" @click="openPage(result.slug)">{{result.title}}</div>
                    </div>
                    <p class="category__item-descr">{{result.text}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    async asyncData({ store }) {
    await store.dispatch('fetchPage', 'knowledge')
  },
  computed: {
      ...mapGetters('knowledge', ['searchQuery', 'searchResult']),
      posts() {
       const posts = [...this.searchResult]
        if (process.client) {
            const div = document.createElement("div");
            posts.forEach(element => {               
                div.innerHTML = element.content;
                element.text = div.textContent || div.innerText || "";
            });
        }
       return posts
     }
  },
  methods: {
    openPage(post) {
      this.$router.push({path: '/knowledge/post/' + post})
    },
    back() {
      this.$router.back()
    }
  }

}

</script>

<style scoped>
.category {
  background-color: #FCF7F2;
  padding-top: 40px;
  padding-bottom: 95px;
}

@media (max-width: 768px) {
  .category {
    padding-bottom: 48px;
  }
}

.category__title {
  font-family: "Graphik", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 48px;
}

.category__item {
  margin-bottom: 24px;
  position: relative;
}

.category__item:last-child {
  margin-bottom: 0;
}

.category__item-img {
  position: absolute;
}

.category__item-wrap {
  margin-bottom: 20px;
}

.category__item-descr {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.6;

   overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-clamp: 2;
      box-orient: vertical;
}

.category__link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-left: 28px;
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
}

@media (max-width: 768px) {
  .btn__step-back {
    margin-bottom: 48px;
  }
}

.arrow__step-back {
    cursor: pointer;
  margin-right: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

</style>