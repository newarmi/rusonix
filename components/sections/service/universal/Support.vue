<template>
  <section :id="items.tag" class="support">
    <div class="container">
      <div class="support__title title">{{ support.blockTitle }}</div>
      <div class="support__text text" v-html="support.blockDescription">
      </div>
      <div class="support__info-wrap">
        <ul class="support__info-list">
          <li class="support__info-item support__info-item--mod">
            <div class="support__info-title">
              {{ firtsArticle.textTitle }}
            </div>
            <div class="support__info-text" v-html="firtsArticle.text">
            </div>
          </li>
        </ul>
        <div class="support__info-wrap-img">
          <picture class="picture">
            <img
              :src="image"
              :srcset="image"
              class="advantage__img"
              alt="advantage-img"
            />
          </picture>
        </div>
      </div>
      <div class="support__info-wrapper">
        <ul class="support__info-list">
          <li v-for="article in articles" :key="article.key" class="support__info-item">
            <div class="support__info-title">
              {{article.attributes.textTitle}}
            </div>
            <div class="support__info-text" v-html="article.attributes.text">
            </div>
          </li>
        

          <li class="support__info-item support__info-item--modification">
            <div class="support__info-title">
              {{ firtsArticle.textTitle }}
            </div>
            <div class="support__info-text" v-html="firtsArticle.text">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Support',
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
      support () {
        return this.items
      },
      image () {
        return this.$config.imgURL + '' + this.support.blockImage
      },
      allArticles () {
        return this.support.blocks
      },
      firtsArticle () {
        return this.allArticles[0].attributes
      },

      articles () {
        const articles = []
        this.allArticles.forEach(element => {
          articles.push(element)
        });
        articles.splice(0, 1)
        return articles
      }
  },
}
</script>

<style scoped>
.support {
  padding-top: 72px;
  padding-bottom: 24px;
}

.support__title {
  margin-bottom: 24px;
}

.support__text {
  max-width: 545px;
}

.support__info-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.support__info-item {
  background: url(@/assets/img/search.png) no-repeat 0px 2px;
}

.support__info-item {
  padding-left: 41px;
}

.support__info-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
  max-width: 450px;
}

.support__info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 560px;
}

.support__info-item--modification {
  display: none;
}

.support__info-list {
  display: flex;
  flex-wrap: wrap;
}

.support__info-wrapper .support__info-item {
  margin-bottom: 48px;
}

@media (max-width: 1200px) {
  .support__info-text {
    max-width: 470px;
  }
}

@media (max-width: 992px) {
  .support__info-item--mod {
    display: none;
  }
  .support__info-wrap {
    justify-content: center;
  }
  .support__info-title {
    max-width: 360px;
  }
  .support__info-text {
    max-width: 370px;
  }
  .support__info-item--modification {
    display: block;
  }
}

@media (max-width: 768px) {
  .support {
    padding-top: 48px;
  }
  .support__info-title {
    max-width: 300px;
  }
  .support__info-text {
    max-width: 319px;
  }
}

@media (max-width: 576px) {
  .support__info-wrapper .support__info-item {
    margin-bottom: 24px;
  }
}
</style>