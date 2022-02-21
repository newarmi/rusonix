<template>
  <div class='sliders'>
    <div class="swiper-container" :class="sliderTopClass">
      <div class="swiper-wrapper">
        <div v-for="item in topItems" :key="item.title" class="swiper-slide">
          <div class="domain__card" :class="{'card__busy': item.status!=='free'}"
          @click="goToBilling(item.href)">
            <div class="domain__card-content">
              <span class="domain__card-title">{{ item.title }}</span>
              <span class="domain__card-text">{{ item.price | toTypePrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-container" :class="sliderBottomClass">
      <div class="swiper-wrapper">
        <div v-for="item in bottomItems" :key="item.title" class="swiper-slide">
          <div class="domain__card" :class="{'card__busy': item.status!=='free'}"
               @click="goToBilling(item.href)">
            <div class="domain__card-content">
              <span class="domain__card-title">{{ item.title }}</span>
              <span v-if="item.status==='free'" class="domain__card-text">{{ item.price | toTypePrice }}</span>
              <span v-if="domainAnswer" class="domain__card-status">{{ convertStatus(item.status) }}</span>
            </div>
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
import { mapGetters } from 'vuex';


export default {
  name: 'Sliders',
  filters: {
    toTypePrice(val) {
      return `${val.toLocaleString('ru-RU')} ₽`
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    sliderTop: null,
    sliderTopClass: '',
    sliderBottom: null,
    sliderBottomClass: ''
  }),
  computed: {
    ...mapGetters(['domainTarriff', 'domainAnswer']),
    topItems() {
      return this.items.slice(0, this.items.length / 2)
    },
    bottomItems() {
      return this.items.slice(this.items.length / 2, this.items.length)
    }
  },
  watch: {
    items() {

      this.mountSlider()
    }
  },
  mounted () {
    if (this.sliderTop) { this.sliderTop.destroy() }
    if (this.sliderBottom) { this.sliderBottom.destroy() }
    this.mountSlider()

  },
  beforeDestroy () {
    if (this.sliderTop) { this.sliderTop.destroy() }
    if (this.sliderBottom) { this.sliderBottom.destroy() }
  },
  methods: {
    mountSlider() {
      const sliderTopId = uniqueId()
      this.sliderTopClass = 'swiper-' + sliderTopId
      const sliderBottomId = uniqueId()
      this.sliderBottomClass = 'swiper-' + sliderBottomId

      this.$nextTick(() => {
        this.sliderTop = new Swiper('.' + this.sliderTopClass, {
          slidesPerView: 1.5,
          spaceBetween: 33,
          loop: true,
          breakpoints: {
            576: {
              slidesPerView: 'auto',
              spaceBetween: 33,
              centerSlides: true,
              loop: true,
            }
          }
        })
        this.sliderBottom = new Swiper('.' + this.sliderBottomClass, {
          slidesPerView: 1.5,
          spaceBetween: 33,
          loop: true,
          breakpoints: {
            576: {
              slidesPerView: 'auto',
              spaceBetween: 33,
              centerSlides: true,
              loop: true,
            }
          }
        })
      })
    },
    convertStatus(status) {
      return status==='free' ? 'Купить' : 'Занят'
    },
    goToBilling(href) {
      if(href) {
         window.open(href, '_blank');
      }
    }
  },

}
</script>

<style scoped>
.domain__card-status {
  display: block;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 24px;
}

.swiper-wrapper {
  padding: 3px 0 0 12px;
}

.swiper-slide {
  width: 228px!important;
}

.domain__card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 228px;
  aspect-ratio: 1;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.09);
  margin-bottom: 24px;
  cursor: pointer;
}

.domain__card-title {
  display: block;
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 24px;
}

.domain__card-text {
  display: block;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
}

.card__busy {
  background-color: #FCF7F2;
  cursor: default;
}
</style>
