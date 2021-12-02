<template>
  <section class="advantage">
    <div class="container">
      <h1 class="advantage__title title">{{ blocks.title }}</h1>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">
            {{ blocks.article[0].attributes.title }}
          </div>
          <div class="advantage__text text" v-html="blocks.article[0].attributes.text"></div>
          <a href="" class="advantage__link">{{ blocks.article[0].attributes.linkName }}</a>
        </div>
        <picture class="picture">
          <img
            :src="blocks.article[0].attributes.imageLink"
            :srcset="blocks.article[0].attributes.imageLink"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>

      <div class="advantage__wrapper advantage__wrapper--mod">
        <picture class="picture">
          <img
            :src="blocks.article[1].attributes.imageLink"
            :srcset="blocks.article[1].attributes.imageLink"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
        <div class="advantage__section-text">
          <div class="advantage__title-text">
            {{ blocks.article[1].attributes.title }}
          </div>
          <div class="advantage__text text" v-html="blocks.article[1].attributes.text"></div>
          <a href="" class="advantage__link">{{ blocks.article[1].attributes.link_name }}</a>
        </div>
      </div>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ blocks.article[2].attributes.title }}</div>
          <div class="advantage__text text" v-html="blocks.article[2].attributes.text">
          </div>
          <a href="" class="advantage__link">{{ blocks.article[2].attributes.linkName }}</a>
        </div>
        <picture class="picture">
          <img
            :src="blocks.article[2].attributes.imageLink"
            :srcset="blocks.article[2].attributes.imageLink"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    articles: {
      type: Object,
      required: true
    }
  },
  computed: {
    blocks() {
      return this.articles.attributes
    },
  },
  created() {
    this.blocks.article.forEach(element => {
        element.attributes.imageLink = this.$config.imgURL + '' + element.attributes.image
    })
  }
}
</script>

<style scoped>
.advantage {
  margin-top: 72px;
  margin-bottom: 51px;
}

.advantage__title {
  margin-bottom: 75px;
}

.advantage__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.advantage__link {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}

.advantage__link:hover {
  color: #202a89;
  mix-blend-mode: normal;
  opacity: 0.6;
}

@media (max-width: 992px) {
  .advantage {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .advantage__img {
    margin-bottom: 24px;
  }
  .advantage__wrapper {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-bottom: 48px;
  }
  .advantage__wrapper--mod {
    flex-direction: column;
  }
}

</style>
