<template>
  <section class="article">
    <div class="container">
      <div class="article__wrapper">
          <div class="article__wrap">
              <h3 class="article__title">Наиболее популярные статьи</h3>
              <ul class="article__list">
                  <li v-for="item in topPosts" :key="item.slug" class="article__item">
                      <span class="article__item-img"><img src="@/assets/img/contact-icon.png" alt=""></span>
                      <nuxt-link :to="'/knowledge/top/' + item.slug" class="article__link">{{item.title}}</nuxt-link>
                  </li>
              </ul>
          </div>

          <div class="article__wrap">
              <h3 class="article__title">Последние добавления статьи</h3>
              <ul class="article__list">
                  <li v-for="item in lastPosts" :key="item.slug" class="article__item">
                      <span class="article__item-img"><img src="@/assets/img/contact-icon.png" alt=""></span>
                      <nuxt-link :to="'/knowledge/last/' + item.slug" class="article__link">{{item.title}}</nuxt-link>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  
    computed: {
        ...mapGetters('knowledge', ['topPosts', 'lastPosts'])
    },
}
</script>



<style scoped>
.article {
  background-color: #FCF7F2;
  padding-bottom: 75px;
}

@media (max-width: 768px) {
  .article {
    padding-bottom: 48px;
  }
}

.article__title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .article__title {
    margin-bottom: 48px;
  }
}

.article__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

@media (max-width: 1100px) {
  .article__wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}

.article__wrap {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
}

@media (max-width: 1100px) {
  .article__wrap {
    margin-bottom: 48px;
  }
  .article__wrap:last-child {
    margin-bottom: 0;
  }
}

.article__item {
  margin-bottom: 24px;
  position: relative;
}

.article__item:last-child {
  margin-bottom: 0;
}

.article__item-img {
  position: absolute;
}

.article__link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.6;
  margin-left: 28px;
  display: block;
}
</style>