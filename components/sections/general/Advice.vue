<template>
  <div :id="tag">
    <section class="knowledge">
      <div class="container">
        <div class="knowledge__wrapper">
          <div v-for="item in categories" :key="item.title" class="knowledge__wrap">
            <h4 class="knowledge__title" @click="openSubmenu(item.slug)">{{ item.title }}</h4>
            <ul class="knowledge__list">
              <li v-for="post in item.posts" :key="post.title" class="knowledge__item">
                <span class="knowledge__item-img">
                <img src="@/assets/img/contact-icon.png" alt=""></span>
                <div class="knowledge__link" @click="openPost(item.slug, post.slug)">{{ post.title }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <TopPosts />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Advice',
  components: {
    'TopPosts': () => import('~/components/sections/general/TopPosts'),
  },
  props: {
    tag: {
      type: String,
      default: 'knowledge'
    }
  },
  computed: {
   ...mapGetters('knowledge', ['posts', 'categories'])
  },
  methods: {
    openSubmenu(slug) {
      this.$router.push({path: '/knowledge/' + slug})
    },
    openPost(category, post) {
      this.$router.push({path: '/knowledge/' + category + '/' + post})
    }
  },

}

</script>

<style scoped>
.knowledge {
  background-color: #FCF7F2;
  padding-top: 75px;
  padding-bottom: 75px;
}

@media (max-width: 768px) {
  .knowledge {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}

.knowledge__title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 48px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .knowledge__title {
    margin-bottom: 24px;
  }
}

.knowledge__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

@media (max-width: 860px) {
  .knowledge__wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}

.knowledge__wrap {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
  margin-bottom: 75px;
}

@media (max-width: 768px) {
  .knowledge__wrap {
    margin-bottom: 48px;
  }
}

.knowledge__wrap:last-child {
  margin-bottom: 0;
}

.knowledge__item {
  margin-bottom: 24px;
  position: relative;
}

.knowledge__item:last-child {
  margin-bottom: 0;
}

.knowledge__item-img {
  position: absolute;

}
.knowledge__item-img>img{
  max-width: none;
}

.knowledge__link {
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
  width: 100%;
  max-width: 352px;
  cursor: pointer;
}

@media (max-width: 576px) {
  .knowledge__link {
    max-width: 260px;
  }
}

</style>
