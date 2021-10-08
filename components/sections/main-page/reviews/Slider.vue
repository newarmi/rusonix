<template>
  <div class="swiper-container" :class="sliderClass">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="reviews__wrapper">
          <p class="reviews__text">
            &laquo; С Rusonyx мы начали работать еще до того, как мне
            передали это направление. И спустя больше года я понял,
            почему Танаис остановила свой выбор на них. Грамотная
            поддержка - отвечают быстро и по-делу, качественный дата
            центр и все это находится в Москве. &raquo;
          </p>
          <div class="reviews__wrapper-icon">
            <picture class="picure">
              <img
                src='~/assets/img/review-icon.png'
                srcset="@/assets/img/review-icon@2x.png 2x"
                class="review__img"
                alt="reviews-icon"
              />
            </picture>
            <div class="reviews__icon-about">
              <div class="reviews__icon-title">Михаил Подпасков</div>
              <div class="reviews__icon-text">
                Исполнительный директор Танаис,
                <a href="#" class="reviews__icon-link">tanais.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="reviews__wrapper">
          <p class="reviews__text">
            &laquo; С Rusonyx мы начали работать еще до того, как мне
            передали это направление. И спустя больше года я понял,
            почему Танаис остановила свой выбор на них. Грамотная
            поддержка - отвечают быстро и по-делу, качественный дата
            центр и все это находится в Москве. &raquo;
          </p>
          <div class="reviews__wrapper-icon">
            <picture class="picure">
              <img
                src='~/assets/img/review-icon.png'
                srcset="@/assets/img/review-icon@2x.png 2x"
                class="review__img"
                alt="reviews-icon"
              />
            </picture>
            <div class="reviews__icon-about">
              <div class="reviews__icon-title">Михаил Подпасков</div>
              <div class="reviews__icon-text">
                Исполнительный директор Танаис,
                <a href="#" class="reviews__icon-link">tanais.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="reviews__wrapper">
          <p class="reviews__text">
            &laquo; С Rusonyx мы начали работать еще до того, как мне
            передали это направление. И спустя больше года я понял,
            почему Танаис остановила свой выбор на них. Грамотная
            поддержка - отвечают быстро и по-делу, качественный дата
            центр и все это находится в Москве. &raquo;
          </p>
          <div class="reviews__wrapper-icon">
            <picture class="picure">
              <img
                src='~/assets/img/review-icon.png'
                srcset="@/assets/img/review-icon@2x.png 2x"
                class="review__img"
                alt="reviews-icon"
              />
            </picture>
            <div class="reviews__icon-about">
              <div class="reviews__icon-title">Михаил Подпасков</div>
              <div class="reviews__icon-text">
                Исполнительный директор Танаис,
                <a href="#" class="reviews__icon-link">tanais.ru</a>
              </div>
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

export default {
  name: 'Slider',
  data: () => ({
    slider: null,
    sliderClass: ''
  }),
  mounted () {
    const sliderId = uniqueId()
    this.sliderClass = 'swiper-' + sliderId

    this.$nextTick(() => {
      this.slider = new Swiper('.' + this.sliderClass, {
        loop: true,
        spaceBetween: 33
      })
    })
  },
  beforeDestroy () {
    if (this.slider) { this.slider.destroy() }
  }
}
</script>

<style scoped>

.reviews__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
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

@media (max-width: 768px) {
  .reviews__text {
    margin-bottom: 48px;
  }
  .reviews__wrapper {
    align-items: flex-start;
  }
}

</style>
