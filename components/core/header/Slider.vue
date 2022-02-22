<template>
  <div>
    <div class="swiper__wrapper">
      <div class="container">
          <div class="swiper-container container__start-sliders" :class="sliderClass" >
            <div class="swiper-wrapper">
              <div v-for="(article, index) in clearArticles" :key="article[0].content"
                class="swiper-slide start__slide pointer" :class="'article' + index">
                <p class="start__slide-text">{{ article[0].content }}</p>
              </div>

            </div>
            <div class="swiper-pagination swiper-pagination-white animate__animated animate__fadeInUp"></div>
          </div>
      </div>
    </div>

    <div v-for="(article, i) in clearArticles" :key="article[0].content">
      <Popup :title="article[0].content" :show-popup="is_show[i].show" @closePopup="closePopup(i)">
        <div v-for="(item, j) in article" :key="item.type + j">
          <div v-if="item.type === 'text'" class="popup-feature-text" v-html="item.content"></div>
          <picture v-if="item.type === 'image'" class="picture">
            <img class="popup__img" :src="$config.imgURL + item.image" :srcset="$config.imgURL + item.image" alt="popup img" />
          </picture>
          <button v-if="item.type === 'button'" class="popup__btn">{{ item.button }}</button>
        </div>
      </Popup>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import uniqueId from 'lodash/uniqueId'
import { gsap } from 'gsap'

export default {
  name: 'Slider',
  components: {
    Popup: () => import('~/components/core/header/Popup'),
  },
  data() {
    return {
      slider: null,
      sliderClass: '',
      is_show: []
    }
  },
  computed: {
    clearArticles() {
      return this.$store.getters.articles
    },
  },
  created() {
    this.clearArticles.forEach((element) => {
      this.is_show.push({ show: false })
    })
  },
  mounted() {
    const sliderId = uniqueId()
    this.sliderClass = 'swiper-' + sliderId
    this.$nextTick(() => {
      this.slider = new Swiper('.' + this.sliderClass, {
        slidesPerView: 'auto',
        spaceBetween: 33,
        loop: true,
        observer: true,
        loopedSlides: this.clearArticles.length,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        breakpoints: {
          576: {
            centerSlides: true,
          },
        },
        on: {
          click:  () => {
            const index = this.slider.clickedSlide.attributes[2].value
            this.showPopup(index);
          },
          init: () => {
            this.animation()
          }
        },
      })
    })
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destroy()
    }
  },
  methods: {
    animation() {
      const anim = [];
      this.clearArticles.forEach((item, index) => {
        anim.push(gsap.from(".article" + index, {duration: 1.5, y: innerHeight / 3,
                                                  opacity: 0, ease: "back.out(1.0)",
                                                  delay: 0.1 * index}))
      })
    },
    showPopup(i) {
      this.is_show[i].show = true
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
    },
    closePopup(i) {
      this.is_show[i].show = false
      document.body.style.overflow = 'auto'
      document.body.style.position = '';
    },
  },
}
</script>

<style scoped>
.swiper-container {
  overflow: visible;
}

.swiper-pagination {
  top: 145px;
}

.popup-feature-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  opacity: 0.6;
  max-width: 720px;
}
.popup-feature-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  opacity: 0.6;
  max-width: 770px;
}

.popup__img {
  margin-top: 24px;
  margin-bottom: 24px;
}
.popup__btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;
  background-color: #0f7f69;
  border-radius: 6px;
  padding: 15px 50px;
  margin-bottom: 48px;
  cursor: pointer;
}
.popup__btn:hover {
  background-color: #065848;
}

.pointer {
  cursor: pointer;
}

@media (max-width: 992px) {
  .swiper__wrapper {
    padding-bottom: 10px;
  }
}

.container {
  padding-right: 0;
}

.container__start-sliders {
  padding-bottom: 20px;
  max-width: 770px;
  width: 100%;
  margin-left: 0;
  overflow: hidden;
}

.start__slide {
  width: 228px !important;
  height: 136px;
  background-color: rgba(213, 213, 213, 0.15);
  backdrop-filter: blur(27px);
  border-radius: 6px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .start__slide {
    width: 216px !important;
  }
}
@media (max-width: 576px) {
  .start__slide {
    width: 228px !important;
  }
}

.start__slide-text {
  font-family: 'Graphik', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;
  padding: 48px 36px 24px 24px;
}
</style>
