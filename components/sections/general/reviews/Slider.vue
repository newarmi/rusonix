<template>
  <div class="swiper-container" :class="sliderClass">
    <div class="swiper-wrapper">
      <div v-for="client in clients" :key="client.title" class="swiper-slide">
        <div class="reviews__wrapper">
          <div class="reviews__text" v-html="client.content">
          </div>
          <div class="reviews__wrapper-icon">
            <div class="picure">
              <img
                :src="client.imageLink"
                :srcset="client.imageLink"
                class="review__img"
                alt="reviews-icon"
              />
            </div>
            <div class="reviews__icon-about">
              <div class="reviews__icon-title">{{ client.title }}</div>
              <div class="reviews__icon-text">
                {{ client.alt_title }}
              </div>
              <button class="swiper-button-prev"></button>
              <button class="swiper-button-next"></button>
              <div class="swiper-pagination swiper-pagination-black"></div>
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
import { mapGetters } from "vuex";

export default {
  name: 'Slider',
  data: () => ({
    slider: null,
    sliderClass: ''
  }),
  computed: {
    ...mapGetters(['reviews']),
    clients() {
      const clients = this.reviews.sections
      clients.forEach(element => {
        element.imageLink = this.$config.imgURL + '' + element.image
      })
      return clients
    }
  },
  mounted () {
    const sliderId = uniqueId()
    this.sliderClass = 'swiper-' + sliderId

    this.$nextTick(() => {
      this.slider = new Swiper('.' + this.sliderClass, {
        loop: true,
        spaceBetween: 33,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
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
.swiper-button-next,
.swiper-button-prev {
  color: black;
  background: none;
}

.review__img {
  border-radius: 100px;
}

.reviews__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
}

.reviews__text {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 72px;
  max-width: 790px;
}

.reviews__wrapper-icon {
  display: flex;
  justify-content: center;
}

.reviews__icon-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 12px;
}

.reviews__icon-about {
  margin-left: 33px;
}

.reviews__icon-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 200px;
}

.reviews__icon-link {
  color: #000;
}

@media (max-width: 1100px) {
  .swiper-button-next,
  .swiper-button-prev {
    top: 90%;
  }
}


@media (max-width: 768px) {
  .reviews__text {
    margin-bottom: 48px;
  }
}

@media (min-width: 500px) {
  .swiper-pagination {
    display: none;
  }
}

@media (max-width: 500px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }


  .swiper-pagination {
    display: block;
    margin-top: 15px;
  }

  .swiper-container {
    overflow: visible;
  }
}

</style>
