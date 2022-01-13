<template>
  <div>
    <div class="tariff__wrapper-configuration-slider">
      <div class="swiper tariff__wrapper-configuration-swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, i) in solutions" :key="item.key" class="swiper-slide">
            <SolutionCard
              :title="item.attributes.title"
              :price="item.attributes.periodPrice[period[example].periodNumber].price + ' ₽'"
              :options="item.attributes.options"
              :choose="cards[i].select"
              @chooseCard="chooseCard(i, item)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
    components: {
        'SolutionCard': () => import('~/components/sections/service/tariffs/SolutionCard'),
    },
    props: {
        solutions: {
            type: Array,
            required: true
        },
        period: {
            type: Array,
            required: true
        },
        example: {
            type: Number,
            required: true
        }
    },
    data () {
        return {
            cards: [],
            slider: null,        
        }
    },
    computed: {
        
    },
    watch: {
      solutions(){
        this.cards = []
        this.solutions.forEach(element => {
            this.cards.push({select: false})
        })
      }
    },
    created() {
        this.solutions.forEach(element => {
            this.cards.push({select: false})
        })

    },
    mounted() {        
      this.slider = new Swiper('.tariff__wrapper-configuration-swiper', {
          observer: true,
          loop: false,
          slidesPerView: 1.35,
          spaceBetween: 33,
      })     
    },
    methods: {
      chooseCard(i, item) {
          this.cards.forEach(element => {
              element.select=false
          })
          this.cards[i].select=true
          
          this.$emit('chooseCard', item)
      }
    }
}
</script>

<style scoped>

.tariff__btn-add {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  margin-top: 24px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  /* margin: 48px auto 0; */
  margin: 10px auto;
}
</style>
