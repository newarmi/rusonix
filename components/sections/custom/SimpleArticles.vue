<template>
  <section :id="articles.tag" class="advantage">
    <div class="container">
      <h2 class="advantage__title title">{{ articles.title }}</h2>
      <div class="advantage__wrapper first">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ articles.article[0].attributes.title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="articles.article[0].attributes.text">
          </div>
        </div>
        <picture class="picture-1">
          <img :src="images[0]" :srcset="images[0]" class="advantage__img" alt="advantage-img"/>
        </picture>
      </div>
      <div class="advantage__wrapper advantage__wrapper--mod second">
        <picture class="picture-2">
          <img :src="images[1]" :srcset="images[1]" class="advantage__img" alt="advantage-img" />
        </picture>
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ articles.article[1].attributes.title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="articles.article[1].attributes.text">
          </div>
        </div>
      </div>
      <div class="advantage__wrapper third">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ articles.article[2].attributes.title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="articles.article[1].attributes.text">
          </div>
        </div>
        <picture class="picture-3">
          <img :src="images[2]" :srcset="images[2]" class="advantage__img" alt="advantage-img" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".first",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.5,
        }
      })
      .from(".picture-1", {x: innerWidth * 2, opacity: 0})

      gsap.timeline({
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.5,

        }
      })
      .from(".picture-2", {x: 0 - innerWidth * 2, opacity: 0})

      gsap.timeline({
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.5,
        }
      })
        .from(".picture-3", {x: innerWidth * 2, opacity: 0})
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
.advantage__wrapper,  .advantage__wrapper-third{
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
