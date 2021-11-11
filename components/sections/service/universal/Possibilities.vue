<template>
      <section class="possibilities">
        <div class="container">
          <div class="possibilities__title title">{{tabs.blockTitle}}</div>
        </div>
        <div class="swiper cscard-swiper">
          <div class="swiper-wrapper possibilities__wrapper-tabs">
            <div v-for="tab, i in tabs.tab" :key="tab.key" :data-tab-target="'#cscard-' + i"
              class="swiper-slide possibilities__wrapper-tab" :class="{'possibilities__wrapper-tab--active' : i===0}">
              {{tab.attributes.tabTitle}}
            </div>
          </div>
        </div>

        <div v-for="tab, i in tabs.tab" :id="'cscard-' + i" :key="tab.key" data-tab-content class="possibilities__wrapper" 
            :class="{'possibilities__wrapper--active' : i===0}">
          <div class="possibilities__cards">
            <div v-for="article in tab.attributes.blocks" :key="article.key" class="possibilities__card">
              <div class="possibilities__card-title">
                {{ article.attributes.textTitle }}
              </div>
              <div class="possibilities__card-text" v-html="article.attributes.text">
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'Possibilities',
  computed: {
      tabs() {
        return this.$store.getters['universal/tabs']
      }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Swiper(".cscard-swiper", {
        slidesPerView: 3.65,
      spaceBetween: 64,
      breakpoints: {
        360: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3.1,
        },
        768: {
          slidesPerView: 3.4,
        },
      },
      })
    })

    const cscardTags = document.querySelectorAll("[ data-tab-target]");
    const cscardTabContents = document.querySelectorAll("[data-tab-content]");

    cscardTags.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        cscardTabContents.forEach((cscardTabContent) => {
        cscardTabContent.classList.remove("possibilities__wrapper--active");
      });
      target.classList.add("possibilities__wrapper--active");
      cscardTags.forEach((tab) => {
      tab.classList.remove("possibilities__wrapper-tab--active");
    });
    tab.classList.add("possibilities__wrapper-tab--active");
    });
  });
  },
}
</script>

<style scoped>
.possibilities {
  background-color: #fcf7f2;
  padding-top: 72px;
  overflow: hidden;
}

.possibilities__title {
  margin-bottom: 86px;
}

.cscard-swiper {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto 70px;
}

.possibilities__wrapper-tab {
  width: auto !important;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.4;
  padding-bottom: 10px;
  cursor: pointer;
  margin-right: 64px;
}

.possibilities__wrapper-tab--active {
  color: #000;
  opacity: 1;
  border-bottom: 6px solid #0f7f69;
}

.possibilities__wrapper {
  width: 100%;
  max-width: 1440px;
  padding: 0 18px 0 55px;
  margin: 0 auto;
}

[data-tab-content] {
  display: none;
}

.possibilities__wrapper--active[data-tab-content] {
  display: block;
}

.possibilities__cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.possibilities__card {
  padding: 24px 18px 24px 30px;
  margin-bottom: 48px;
}

.possibilities__card:hover {
  background-color: #fff;
  cursor: pointer;
  border-radius: 10px;
}

.possibilities__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 24px;
}

.possibilities__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 580px;
}

@media (max-width: 1200px) {
  .possibilities__card-text {
    max-width: 510px;
  }
}

@media (max-width: 768px) {
  .possibilities {
    padding-top: 48px;
  }
  .cscard-swiper {
    padding: 0 24px;
    margin-bottom: 48px;
  }
  .possibilities__title {
    margin-bottom: 48px;
  }
  .possibilities__wrapper {
    padding: 0;
  }
  .possibilities__card-text {
    max-width: 330px;
  }
  .possibilities__card {
    margin-bottom: 24px;
  }
}

@media (max-width: 576px) {
  .possibilities {
    padding-bottom: 24px;
  }
  .cscard-swiper {
    padding: 0 0 0 16px;
  }
  .possibilities__cards {
    justify-content: center;
  }
  .possibilities__card {
    margin-bottom: 0;
  }
  .possibilities__card-text {
    max-width: 510px;
  }
}
</style>
