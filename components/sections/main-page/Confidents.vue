<template>
<section class="confidents">
        <div class="container">
          <h1 class="confidents__title title">{{ title }}</h1>
        </div>

        <div class="confidents__partners">
          <picture v-for="logo in firstLine" :key="logo.image" class="picture">
            <img
              :src="logo.imageLink"
              :srcset="logo.imageLink"
              class="confidents__img"
              alt="partner"
            />
          </picture>
        </div>

        <div class="confidents__partners">
          <picture v-for="logo in secondLine" :key="logo.image" class="picture">
            <img
              :src="logo.imageLink"
              :srcset="logo.imageLink"
              class="confidents__img"
              alt="partner"
            />
          </picture>
        </div>

        <div class="confidents__partners">
          <picture v-for="logo in thirdLine" :key="logo.image" class="picture">
            <img
              :src="logo.imageLink"
              :srcset="logo.imageLink"
              class="confidents__img"
              alt="partner"
            />
          </picture>
        </div>

        <!-- Slider tablet   -->
        <div class="swiper partner-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide__indent-1">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-1.png"
                  srcset="@/assets/img/partner-1@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-2.png"
                  srcset="@/assets/img/partner-2@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-3.png"
                  srcset="@/assets/img/partner-3@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-4.png"
                  srcset="@/assets/img/partner-4@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide slide__indent-5">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-5.png"
                  srcset="@/assets/img/partner-5@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-6.png"
                  srcset="@/assets/img/partner-6@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
          </div>
        </div>

        <div class="swiper partner-swiper partner-swiper-second">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-6.png"
                  srcset="@/assets/img/partner-6@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-4.png"
                  srcset="@/assets/img/partner-4@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide slide__indent-5">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-5.png"
                  srcset="@/assets/img/partner-5@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide slide__indent-1">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-1.png"
                  srcset="@/assets/img/partner-1@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-2.png"
                  srcset="@/assets/img/partner-2@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide slide__indent-3">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-3.png"
                  srcset="@/assets/img/partner-3@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
          </div>
        </div>

        <div class="swiper partner-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide__indent-1">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-1.png"
                  srcset="@/assets/img/partner-1@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-2.png"
                  srcset="@/assets/img/partner-2@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-3.png"
                  srcset="@/assets/img/partner-3@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-4.png"
                  srcset="@/assets/img/partner-4@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide slide__indent-5">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-5.png"
                  srcset="@/assets/img/partner-5@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
            <div class="swiper-slide">
              <picture class="picture">
                <img
                  src="@/assets/img/partner-6.png"
                  srcset="@/assets/img/partner-6@2x.png 2x"
                  class="confidents__img"
                  alt="partner"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Confidents',
  computed: {
    title() {
      return this.$store.getters.confidents.title
    },
    firstLine() {
      const firstLine = this.$store.getters.confidents.sections.find(Boolean).alt_title
      const arrayFirstLine = JSON.parse(firstLine)
      arrayFirstLine.forEach(element => {
        element.imageLink = this.$config.siteURL + '' + element.url
      });
      return arrayFirstLine
    },
    secondLine() {
      const secondLine = this.$store.getters.confidents.sections.find(Boolean).image
      const arraySecondLine = JSON.parse(secondLine)
      arraySecondLine.forEach(element => {
        element.imageLink = this.$config.siteURL + '' + element.url
      });
      return arraySecondLine
    },
    thirdLine() {
      const thirdLine = this.$store.getters.confidents.sections.find(Boolean).content
      const arrayThirdLine = JSON.parse(thirdLine)
      arrayThirdLine.forEach(element => {
        element.imageLink = this.$config.siteURL + '' + element.url
      });
      return arrayThirdLine
    }
  },
  mounted() {

    this.$nextTick(() => {
      this.slider = new Swiper(".partner-swiper", {
        slidesPerView: 5,
        spaceBetween: 96,
        loop: true,
        autoplay: {
         delay: 2500,
         disableOnInteraction: false,
       },
        breakpoints: {
          360: {
            slidesPerView: 2,
            spaceBetween: 96,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            }
          },
          576: {
            slidesPerView: 3.45,
            spaceBetween: 96,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            }
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 96,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
        },
      })
    })
   }
 }
</script>

<style scoped>


.confidents {
  background-color: #3f342c;
  padding-top: 72px;
  padding-bottom: 32px;
}

.confidents__title {
  color: #ffffff;
  margin-bottom: 96px;
}

.confidents__partners {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto 40px;
  max-width: 1440px;
}

.confidents__img {
  max-width: fit-content;
  flex: 1 1 calc((100% / 6) - 40px);
}
.partner-swiper {
  display: none;
}
@media (max-width: 1200px) {
  .confidents {
    padding-bottom: 8px;
    overflow: hidden;
  }
  .confidents__partners {
    display: none;
  }
  .partner-swiper {
    display: block;
    margin-bottom: 40px;
  }
  .slide__indent-1 {
    margin-right: 140px !important;
  }
  .slide__indent-5 {
    margin-right: 170px !important;
  }
  .slide__indent-3 {
    margin-right: 53px !important;
  }
}
@media (max-width: 992px) {
  .confidents {
    padding-top: 48px;
  }
  .slide__indent-1 {
    margin-right: 140px !important;
  }
  .slide__indent-5 {
    margin-right: 170px !important;
  }
}

@media (max-width: 768px) {
  .confidents__title {
    margin-bottom: 90px;
  }
}

@media (max-width: 576px) {
  .confidents__title {
    margin-bottom: 48px;
  }
}

</style>
