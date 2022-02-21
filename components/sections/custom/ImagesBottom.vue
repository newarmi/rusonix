<template>
    <section :id="images.tag" class="advantage">
        <div class="container">
          <h2 class="advantage__title title">{{images.title}}</h2>
          <div class="advantage__title-text" v-html="images.description"></div>
          <div class="advantage__wrapper-cards">
            <div v-for="(article, index) in articles" :key="article.key"
                 class="advantage__card" :class="'image' + images.tag + index">
              <picture class="picture">
                <img
                  :src="$config.imgURL + article.attributes.image"
                  :srcset="$config.imgURL + article.attributes.image"
                  class="partner__img"
                  alt="partner 1" />
              </picture>
              <div class="advantage__card-title">{{ article.attributes.title }}</div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
name: 'ImagesBottom',
  props: {
    images: {
      type: Object,
      required: true
    }
  },
  computed: {
    articles() {
      return this.images.images
    }
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      this.articles.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#" + this.images.tag,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          }
        })
        .from('.image' + this.images.tag + index, {y: innerHeight, opacity: 0, delay: 0.1 * index})
      })

    },
  }
}
</script>

<style scoped>
.advantage {
  margin-top: 52px;
  margin-bottom: 72px;
}
.advantage__title {
  margin-bottom: 24px;
}
.advantage__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  max-width: 975px;
  margin-bottom: 96px;
}
.advantage__wrapper-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px 34px;
}
.partner__img {
  margin-bottom: 24px;
}
.advantage__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 230px;
  flex: 1 1 calc((100% / 3) - 170px);
}
@media (max-width: 768px) {
  .advantage {
    margin-top: 28px;
    margin-bottom: 48px;
  }
  .advantage__title-text {
    margin-bottom: 48px;
  }
}
</style>
