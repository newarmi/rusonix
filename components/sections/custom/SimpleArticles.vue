<template>
  <section class="advantage">
    <div class="container">
      <h1 class="advantage__title title">{{ articles.title }}</h1>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ articles.article[0].attributes.title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="articles.article[0].attributes.text">
          </div>
        </div>
        <picture class="picture">
          <img :src="images[0]" :srcset="images[0]" class="advantage__img" alt="advantage-img"/>
        </picture>
      </div>
      <div class="advantage__wrapper advantage__wrapper--mod">
        <picture class="picture">
          <img :src="images[1]" :srcset="images[1]" class="advantage__img" alt="advantage-img" />
        </picture>
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ articles.article[1].attributes.title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="articles.article[1].attributes.text">
          </div>
        </div>
      </div>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ articles.article[2].attributes.title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="articles.article[1].attributes.text">
          </div>
        </div>
        <picture class="picture">
          <img :src="images[2]" :srcset="images[2]" class="advantage__img" alt="advantage-img" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SimpleArticles',
  props: {
    articles: {
      type: Object,
      required: true
    }
  },
  computed: {
    images() {
      const images = []
      this.articles.article.forEach(element => {
        images.push(this.$config.imgURL + element.attributes.image)
      });
      return images
    }
  }
}
</script>

<style scoped>
.advantage {
  padding-top: 72px;
  padding-bottom: 72px;
}
.advantage__title {
  margin-bottom: 75px;
}
.advantage__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 96px;
}
.advantage__wrapper:last-child {
  margin-bottom: 0;
}
.advantage__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 25px;
}
.advantage__text {
  max-width: 510px;
  margin-bottom: 48px;
}
.advantage__text-company {
  max-width: 550px;
}

@media (max-width: 992px) {
  .advantage {
    padding-top: 28px;
    padding-bottom: 0;
  }
  .advantage__title {
    margin-bottom: 48px;
  }
  .advantage__wrapper {
    flex-direction: column-reverse;
  }
  .advantage__wrapper--mod {
    flex-direction: column;
  }
  .advantage__section-text {
    align-self: flex-start;
  }
  .advantage__text-company {
    max-width: 685px;
  }
  .advantage__img {
    margin-bottom: 24px;
  }
}
</style>
