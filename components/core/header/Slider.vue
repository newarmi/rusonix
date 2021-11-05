<template>
  <div>
    <div class="swiper__wrapper">
      <div class="container">
        <div
          class="swiper-container container__start-sliders"
          :class="sliderClass"
        >
          <div class="swiper-wrapper">
            <div v-for="(article) in clearArticles" :key="article[0].content"
              class="swiper-slide start__slide pointer" >
              <p class="start__slide-text">{{ article[0].content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(article, i) in clearArticles" :key="article[0].content">
      <Popup :title="article[0].content" :show-popup="is_show[i].show" @closePopup="closePopup(i)">
        <div v-for="(item, j) in article" :key="item.type + j">
          <div
            v-if="item.type === 'text'"
            class="popup-feature-text"
            v-html="item.content"
          ></div>
          <picture v-if="item.type === 'image'" class="picture">
            <img
              class="popup__img"
              :src="$config.imgURL + '' + item.image"
              :srcset="$config.imgURL + '' + item.image"
              alt="popup img"
            />
          </picture>
          <button v-if="item.type === 'button'" class="popup__btn">
            {{ item.button }}
          </button>
        </div>
      </Popup>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import uniqueId from 'lodash/uniqueId'

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
    showPopup(i) {
      this.is_show[i].show = true
    },
    closePopup(i) {
      this.is_show[i].show = false
    },
  },
}
</script>

<style scoped>
.popup-feature {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(135.914px);
}
.popup-feature {
  overflow-y: scroll;
}
.body-scroll {
  overflow-y: hidden;
}
.popup-show {
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.popup-container {
  width: 100%;
  max-width: 1440px;
  padding: 48px 258px;
  margin: 0 auto;
}
.popup-feature-wrap {
  background-color: #ffffff;
  border-radius: 8px;

  width: 100%;
  max-width: 924px;
  padding: 72px 58px;
  margin: 0 auto;
  position: relative;
}
.popup-feature-title {
  font-family: 'Graphik', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 48px;
}
.popup-feature-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 720px;
}

.popup-feature-wrap-text {
  margin-top: 50px;
  margin-bottom: 50px;
}
.popup__close-feature {
  position: absolute;
  right: -60px;
  top: 0;
  cursor: pointer;
}

.popup__img {
  margin-top: 24px;
  margin-bottom: 24px;
}
.popup__btn {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
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
.popup-feature2-wrap-text {
  margin-top: 50px;
  margin-bottom: 50px;
}
@media (max-width: 1200px) {
  .popup-container {
    padding: 48px 120px;
  }
}
@media (max-width: 768px) {
  .popup-container {
    padding: 48px 70px;
  }
  .popup__close-feature {
    right: -50px;
  }
}
@media (max-width: 576px) {
  .popup-feature-wrap {
    padding: 32px 20px;
  }
  .popup-feature {
    overflow-y: scroll;
  }
}

.pointer {
  cursor: pointer;
}

.swiper__wrapper {
  padding-bottom: 125px;
}

@media (max-width: 992px) {
  .swiper__wrapper {
    padding-bottom: 90px;
  }
}

.container {
  padding-right: 0;
}

.container__start-sliders {
  max-width: 780px;
  width: 100%;
  margin-left: 0;
}

.start__slide {
  width: 228px !important;
  height: 136px;
  background-color: rgba(213, 213, 213, 0.15);
  backdrop-filter: blur(27px);
  border-radius: 6px;
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
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  padding: 48px 36px 24px 24px;
}
</style>
