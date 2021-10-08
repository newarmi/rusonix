<template>
  <div class="swiper__wrapper">
    <div class="container">
      <div class="swiper-container container__start-sliders" :class="sliderClass">
        <div class="swiper-wrapper">
          <div v-for="article in articles.sections" :key="article.title" class="swiper-slide start__slide">
            <p class="start__slide-text">{{article.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import uniqueId from 'lodash/uniqueId'

export default {
  name: 'Slider',
  data () {
    return {
      slider: null,
      sliderClass: ''
    }
  },
  computed: {
      articles() {
        return this.$store.getters.advantage
      }
  },
  mounted () {
    const sliderId = uniqueId()
    console.log(sliderId)

    this.sliderClass = 'swiper-' + sliderId

    this.$nextTick(() => {
      this.slider = new Swiper('.' + this.sliderClass, {
        slidesPerView: 'auto',
        // slidesPerView: 1.5,
        spaceBetween: 33,
        loop: true,
        breakpoints: {
          576: {
            // slidesPerView: 'auto',
            // spaceBetween: 33,
            centerSlides: true
           
          }
        }
      })
    })
  },
  beforeDestroy () {
    if (this.slider) { this.slider.destroy() }
  }
}
</script>

<style scoped>


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
  font-family: "Graphik", sans-serif;
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
