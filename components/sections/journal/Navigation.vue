<template>
  <div class="container__magazine-navigation">
    <div class="swiper magazine-swiper">
      <div class="swiper-wrapper navigation__magazine">
        <div v-for="rubric, i in rubrics" :key="rubric.slug" class="swiper-slide navigation__magazine-link" :class="{'navigation__magazine-link--active':(i==0)}"
          :data-tab-target="'#magazine-link-' + (i+1)" @click="$emit('filter', rubric.slug)">{{rubric.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  computed: {
    rubrics () {
      return this.$store.getters['journal/rubrics']
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.slider = new Swiper('.magazine-swiper', {
        spaceBetween: 48,
        centerSlides: true,

        breakpoints: {
          360: {
            slidesPerView: 3.2,
          },
          480: {
            slidesPerView: 3.5,
          },
          576: {
            slidesPerView: 4.2,     
          },
          768: {
            slidesPerView: 4.5,
          },
          820: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 5.2,
          },
          992: {
            slidesPerView: 6,
          },
        },
      })
    })
  },
  methods: {
    filterArticles(rubric) {
      this.$emits.filterArticles(rubric)
    }
  },
}
</script>

<style scoped>
.magazine-swiper {
  margin: 28px auto 72px;
}

.container__magazine-navigation {
  display: flex;
  justify-content: left; 
  align-items: center;

  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;

  overflow: hidden;
}

.navigation__magazine-link {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22 px;
  letter-spacing: 0px;
  text-align: left;
  width: auto !important;
  
}
.navigation__magazine-link--active {
  color: #202a89;
  border-bottom: 2px solid #202a89;
}
.navigation__magazine-link:hover {
  cursor: pointer;
  color: #202a89;
  border-bottom: 2px solid #202a89;
}
</style>