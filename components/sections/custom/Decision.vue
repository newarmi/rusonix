<template>
  <section :id="blocks.tag" class="decision">
    <div class="container">
      <h2 class="decision__title title">{{blocks.title}}</h2>
      <div class="decision__wrapper-cards">
        <div v-for="(card, index) in blocks.cards" :key="card.key" class="decision__card"
          :class="'decision' + blocks.tag + index">
          <div class="decision__card-title"><nuxt-link class="black-link" :to="card.attributes.link">{{card.attributes.title}}</nuxt-link></div>
          <div class="decision__card-text" v-html="card.attributes.description"></div>
          <ul class="decision__list">
            <label class="decision__item" v-html="card.attributes.services"></label>
          </ul>
          <picture class="picture">
            <img
              :src="card.imageLink"
              :srcset="card.imageLink"
              class="decision__img"
              alt="decision-card"
            />
          </picture>
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
  name: 'Decision',
  props: {
    decisions: {
      type: Object,
      required: true
    }
  },
  computed: {
    blocks() {
      return this.decisions
    }
  },
  mounted() {
    this.scrollAnimation();
  },
  created() {
    this.blocks.cards.forEach(element => {
      element.imageLink = this.$config.imgURL + '' + element.attributes.image
    });
  },
  methods: {

    scrollAnimation() {
      this.blocks.cards.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".decision",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 3,
          }
        })
          .from(".decision" + this.blocks.tag + index, {y: innerHeight, opacity: 0, delay: 0.1 * index})
      })
    },
  }
}
</script>

<style scoped>
.black-link {
  color: black;
}

.decision {
  margin-top: 46px;
  margin-bottom: 72px;
}

.decision__title {
  color: #000000;
  margin-bottom: 72px;
}

.decision__wrapper-cards {
  display: flex;
  gap: 34px;
}

.decision__card {
  width: 402px;
  height: 520px;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  box-shadow: 0 20px 30px -20px #fcf7f2;
  position: relative;
}

.decision__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  max-width: 190px;
  margin-top: 48px;
  margin-left: 29px;
  margin-bottom: 24px;
}

.decision__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #9e9e9e;
  max-width: 275px;
  margin-left: 29px;
  margin-bottom: 24px;
}

.decision__list {
  display: flex;
  align-items: center;
  margin-left: 29px;
}

.decision__item {
  font-family: "Graphik", sans-serif;
  padding-right: 20px;
  white-space: pre-wrap;
  color: #5B5B5B;
}

.decision__img {
  position: absolute;
  z-index: -1;
  top: 41%;
  left: 2%;
}
@media (max-width: 1200px) {
  .decision__wrapper-cards {
    flex-wrap: wrap;
  }
}
@media (max-width: 992px) {
  .decision {
    margin-top: 8px;
    margin-bottom: 48px;
  }
  .decision__title {
    margin-bottom: 48px;
  }

  .decision__card {
    width: 343px;
  }
}

@media (max-width: 576px) {
  .decision__wrapper-cards {
    gap: 24px;
    justify-content: center;
  }
}

</style>
