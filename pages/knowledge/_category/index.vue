<template>
<div>
    <section class="subcategories">
        <div class="container">
            <a href="#" class="btn__step-back" @click="back">
                <span class="arrow__step-back">
                    <img class="arrow__step-back-img" src="@/assets/img/arrow-step-back.png" alt="arrow step back">
                </span>
                Назад</a>

            <div class="subcategories__wrapper">
                <div v-for="item in categories" :key="item.title" class="subcategories__wrap">
                    <h4 class="subcategories__title" @click="openSubmenu(item.slug)">{{ item.title }}</h4>
                    <ul class="subcategories__list">
                        <li v-for="post in item.posts" :key="post.title" class="subcategories__item">
                            <span class="subcategories__item-img"><img src="@/assets/img/contact-icon.png" alt=""></span>
                            <div class="subcategories__link" @click="openPost(item.slug, post.slug)">{{ post.title }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
      <div class="container mt-30">
        <ul class="category__list">
          <li v-for="post in posts" :key="post.title" class="category__item">
              <div class="category__item-wrap">
                  <span class="category__item-img"><img src="@/assets/img/contact-icon.png" alt=""></span>
                  <div class="category__link" @click="openPost(0, post.slug)">{{ post.title }}</div>
              </div>
              <p class="category__item-descr">{{ post.text }}</p>
          </li>
        </ul>
      </div>
    </section>
    <TopPosts />


</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    'TopPosts': () => import('~/components/sections/general/TopPosts'),
  },
  async asyncData({ store, params }) {
    await store.dispatch('fetchPage', 'knowledge')
    await store.dispatch('knowledge/getSubcategory', params.category)
  },
  data() {
    return {

    }
  },
  computed: {
     ...mapGetters('knowledge', ['subcategory', 'category']),
     categories() {
         return this.subcategory.categories
     },
     posts() {
       const posts = [...this.subcategory.posts]
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
      openSubmenu(slug) {
        this.$router.push({path: '/knowledge/' + slug})
      },
      openPost(category, post) {
        if(category===0) {
          this.$router.push({path: '/knowledge/' + this.category + '/' + post})
        } else {
          this.$router.push({path: '/knowledge/' + category + '/' + post})
        }
      },
      back() {
        this.$router.back()
      }
  }
}
</script>

<style scoped>
.mt-30 {
  margin-top: 30px;
}

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

.subcategories {
  background-color: #FCF7F2;
  padding-top: 40px;
  padding-bottom: 75px;
}

@media (max-width: 768px) {
  .subcategories {
    padding-bottom: 48px;
  }
}

.subcategories__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

@media (max-width: 768px) {
  .subcategories__wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}

.subcategories__wrap {
  -webkit-box-flex: 0;
      -ms-flex: 0 1 50%;
          flex: 0 1 50%;
  margin-bottom: 75px;
}

@media (max-width: 768px) {
  .subcategories__wrap {
    margin-bottom: 48px;
  }
}

.subcategories__wrap:last-child {
  margin-bottom: 0;
}

.subcategories__title {
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

.subcategories__item {
  margin-bottom: 24px;
  position: relative;
}

.subcategories__item:last-child {
  margin-bottom: 0;
}

.subcategories__item-img {
  position: absolute;
}

.subcategories__link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.6;
  display: block;
  margin-left: 28px;
  cursor: pointer;
}

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