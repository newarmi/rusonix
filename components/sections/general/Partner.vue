<template>
  <section id="partner" class="conditions">
    <div class="container">
      <div class="conditions__title title">{{title}}</div>
      <div class="conditions__title-wrap-text">
        <div class="conditions__title-text" v-html="description"></div>
      </div>
      <div class="conditions__wrap">
        <div class="conditions__info-wrap">
          <div class="conditions__info-title">Клиент покупает</div>
          <div class="conditions__info-title">Вы зарабатываете</div>
        </div>

        <div v-for="item in service" :key="item.title" class="conditions__content-wrap">
          <div class="conditions__content-title">{{item.title}}</div>
          <div class="conditions__circle-top">
            <div class="conditions__circle-left" :style="'background-color:' + item.link_name">{{item.alt_title}}</div>
            <div class="conditions__circle-right" :style="'background-color:' + item.link_name">{{item.image}}</div>
          </div>
          <div class="conditions__content-text" v-html="item.content"></div>
        </div>

      </div>
      <!-- slider -->
      <div class="conditions__slider-wrap">
        <div class="conditions__slider-info-top">Клиент покупает</div>
        <div class="swiper partner-nav-swiper">
          <div class="swiper-wrapper">
            <div v-for="item, i in service" :key="item.key" 
                  class="swiper-slide partner__navigation-content"
                  :class="{ 'partner__navigation-content--active' : i===tabNumber }" 
                  @click="changeTab(i)">{{item.title}}
            </div>
          </div>
        </div>

        <div class="conditions__slider-info-bottom">Вы зарабатываете</div>
        <div class="conditions__content-wrap-slider conditions__content-wrap-slider--active">
          <div class="conditions__circle-top-slider">
            <div class="conditions__circle-left-slider" :style="'background-color:' + activeTab.link_name">{{activeTab.alt_title}}</div>
            <div class="conditions__circle-right-slider" :style="'background-color:' + activeTab.link_name">{{activeTab.image}}</div>
          </div>
          <div class="conditions__content-text-slider" v-html="activeTab.content">
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  props: {
    title: {
      type: String,
      default: 'Условия'
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tabNumber: 0
    }
  },
  computed: {
    ...mapGetters(['partner']),
    service() {
      return this.partner.sections
    },
    activeTab() {
      return this.service[this.tabNumber]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Swiper('.partner-nav-swiper', {
        spaceBetween: 31,
        breakpoints: {
          320: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
          },
        },
      })
    })
  },
  methods: {
    changeTab(index) {
      this.tabNumber = index
    }
  },
}
</script>

<style scoped>
.conditions {
  margin-top: 72px;
  margin-bottom: 72px;
  overflow: hidden;
}
.conditions__title {
  margin-bottom: 24px;
}
.conditions__title-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}
.conditions__title-wrap-text {
  margin-bottom: 96px;
}
.conditions__info-wrap {
  display: flex;
  gap: 133px;
  margin-bottom: 96px;
  position: relative;
}

.conditions__info-wrap::before {
}
.conditions__info-wrap::after {
}
.conditions__info-title {
  font-family: 'Graphik', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
}
.conditions__content-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 48px;
}
.conditions__content-wrap:last-child {
  margin-bottom: 0;
}
.conditions__content-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  width: 100%;
  max-width: 190px;
  margin-right: 133px;
}
.conditions__circle-top {
  display: flex;
  gap: 24px 62px;
  margin-right: 62px;
  position: relative;
}

.conditions__circle-top::before {
  content: '1 год';
  position: absolute;
  top: -37px;
  left: 37px;

  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  opacity: 0.6;
}
.conditions__circle-top::after {
  content: '2 год и далее';
  position: absolute;
  top: -37px;
  right: 8px;

  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  opacity: 0.6;
}
.conditions__circle-left {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-color: #d05c6b;
  color: #fff;

  font-family: 'Graphik', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: center;
}

.conditions__circle-right {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-color: #d05c6b;
  color: #fff;

  font-family: 'Graphik', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: center;
}
.conditions__content-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 545px;
}
.conditions__circle-bottom {
  display: flex;
  gap: 24px 62px;
  margin-right: 62px;
}
.conditions__circle-left--mod {
  background-color: #57a596;
}
.conditions__circle-right--mod {
  background-color: #57a596;
}

/* slider conditions mobile*/

.conditions__slider-wrap {
  display: none;
}
.conditions__slider-info-top,
.conditions__slider-info-bottom {
  font-family: 'Graphik', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}
.conditions__slider-info-bottom {
  margin-bottom: 68px;
}
.partner-nav-swiper {
  margin-top: 24px;
  margin-bottom: 48px;
}
.partner__navigation-content {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  width: auto !important;
  opacity: 0.4;
  cursor: pointer;
}
.partner__navigation-content--active {
  opacity: 1;
  border-bottom: 6px solid #0f7f69;
  cursor: pointer;
}
.conditions__circle-left-slider,
.conditions__circle-right-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-color: #d05c6b;
  color: #fff;
  font-family: 'Graphik', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: center;
}
.conditions__circle-top-slider {
  display: flex;
  gap: 35px;
  margin-bottom: 24px;
  position: relative;
}
.conditions__circle-top-slider::before {
  content: '1 год';
  position: absolute;
  top: -37px;
  left: 37px;

  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  opacity: 0.6;
}
.conditions__circle-top-slider::after {
  content: '2 год и далее';
  position: absolute;
  top: -37px;
  left: 165px;

  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  opacity: 0.6;
}
.conditions__content-text-slider {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
[data-tab-content] {
  display: none;
}
.conditions__content-wrap-slider--active[data-tab-content] {
  display: block;
}
.conditions__circle-left-slider--mod {
  background-color: #57a596;
}
.conditions__circle-right-slider--mod {
  background-color: #57a596;
}

@media (max-width: 1430px) {
  .conditions__content-text {
    margin-top: 48px;
  }
}
@media (max-width: 992px) {
  .conditions__circle-top,
  .conditions__circle-bottom {
    margin-right: 0;
  }
  .conditions__content-title {
    margin-right: auto;
    flex-basis: 40%;
  }
}
@media (max-width: 768px) {
  .conditions {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .conditions__title-wrap-text {
    margin-bottom: 48px;
  }
  .conditions__content-title {
    margin-right: 133px;
  }
}
@media (max-width: 680px) {
  .conditions__wrap {
    display: none;
  }
  .conditions__slider-wrap {
    display: block;
  }
}

</style>
