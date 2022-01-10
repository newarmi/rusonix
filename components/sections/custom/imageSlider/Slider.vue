<template>
  <div class="swiper history-swiper swiper-container" :class="sliderClass">
    <div class="swiper-wrapper">
      <div v-for="item in items.images" :key="item.key" class="swiper-slide">
        <div class="history__slide">
          <picture class="picture">
            <img
              :src="$config.imgURL + item.attributes.image"
              :srcset="$config.imgURL + item.attributes.image"
              class="history__img"
              :style="imageHeight"
              alt="history"
            />
          </picture>
          <div class="history__slide-date">{{item.attributes.title}}</div>
          <div class="history__slide-text text">{{item.attributes.description}}</div>
        </div>
      </div>

    </div>

    <div class="swiper-scrollbar">
      <div class="swiper-scrollbar-drag">
        <img src='@/assets/svg/scrollbar.svg' class="scrollbar__img" alt="" />
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
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    slider: null,
    sliderClass: ''
  }),
  computed: {
    imageHeight() {
      return this.items.height ? 'height:' + this.items.height + 'px' : '190px'
    }
  },
  mounted () {
    const sliderId = uniqueId()
    this.sliderClass = 'swiper-' + sliderId

    this.$nextTick(() => {
      this.slider = new Swiper('.' + this.sliderClass, {
        slidesPerView: 'auto',
        spaceBetween: 33,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: 120
        },
      })
    })
  },
  beforeDestroy () {
    if (this.slider) { this.slider.destroy() }
  }
}
</script>

<style scoped>

.history-swiper {
  padding-bottom: 100px;
  width: 100%;
}

.swiper-slide {
  width: 402px !important;
}

.swiper-scrollbar {
  bottom: 10px;
  background-color: #958885;
}

.swiper-scrollbar-drag {
  /*height: 100%;*/
  /*width: 100%;*/
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  padding: 8px 49px;
  top: -6px;
  background: #ffffff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .07);
  /*border-radius: 13px;*/
}

.scrollbar__img {
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.history__slide-text {
  max-width: 360px;
}

.history__img {

  margin-bottom: 24px auto;
  height: 190px;
}

.history__slide-date {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

</style>
