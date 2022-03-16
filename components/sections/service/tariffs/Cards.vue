<template>
  <section :id="cards.tag" class="license">
    <div class="container">
      <h2 class="license__title title">{{ cards.tariffTitle }}</h2>
      <div class="license__wrapper-cards">
        <div v-for="(card, index) in cards.cards" :key="card.key"
             :class="'card' + cards.tag + index" class="license__wrap-card">
          <div class="license__card-title">{{ card.attributes.cardTitle }}</div>
          <div class="license__card-content">
            <div class="license__card-left">
              <div v-for="option in card.attributes.options" :key="option.key">
                <div v-if="option.layout === 'simpleOption'" class="license__card-left-text">
                  {{ option.attributes.option }}
                </div>
              </div>
            </div>
            <div class="license__card-content-right">
              <div v-for="option in card.attributes.options" :key="option.key">
                <div v-if="option.layout === 'simpleOption'" class="license__card-right-text">
                  {{ option.attributes.value }}
                </div>
              </div>
            </div>
          </div>

<!--          <div v-if="card.periods.length>1">-->
<!--            <div class="license__card-selection-title">-->
<!--              Период-->
<!--            </div>-->
<!--            <div class="license__card-selection">-->
<!--              <select class="license__select" @change="choosePeriod(ind, $event.target.value)">-->
<!--                <option-->
<!--                  v-for="(period, i) in card.periods"-->
<!--                  :key="period.key"-->
<!--                  :value="i">-->
<!--                  {{periodToText(period.period)}}-->
<!--                </option>-->
<!--              </select>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div v-for="option in card.attributes.options" :key="option.key">-->
<!--            <div v-if="option.layout === 'listOption'">-->
<!--              <div class="license__card-selection-title">-->
<!--                {{ option.attributes.option }}-->
<!--              </div>-->
<!--              <div class="license__card-selection">-->
<!--                <select class="license__select">-->
<!--                  <option v-for="item in option.attributes.list" :key="item.key"-->
<!--                    value="item.attributes.listItem">-->
<!--                    {{ item.attributes.listItem }}-->
<!--                  </option>-->
<!--                </select>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->


          <div class="license__card-total">
            {{ card.attributes.price }}
            <div v-show="card.attributes.priceComment" class="license__card-total-descr">
              {{ card.attributes.priceComment }}
            </div>
          </div>

<!--          <div class="license__card-wrap-total">-->
<!--            <div class="license__prices-wrapper">-->
<!--              <div v-if="" class="license__card-oldprice">-->
<!--                <p class="license__card-oldprice-text">{{ Math.floor(card.periods[periods[index].period].full_cost) }} ₽</p>-->
<!--              </div>-->
<!--              <div class="license__card-total license__card-total&#45;&#45;mod">{{ Math.floor(card.periods[periods[index].period].amount) }} ₽</div>-->
<!--            </div>-->
<!--            <p v-if="card.periods[periods[ind].period].percent!=='0%'" class="license__card-total-economy">-->
<!--              Экономия {{Math.floor(card.periods[periods[ind].period].full_cost - card.periods[periods[index].period].amount)}} рублей</p>-->
<!--          </div>-->


          <div class="license__btn-wrap">
            <div v-if="card.attributes.modal" class="license__btn"
                 @click="showPopup(index)">
              {{ card.attributes.buttonName ? card.attributes.buttonName : 'Заказать' }}
            </div>
            <div v-else class="license__btn"
                 @click="goToLink(card.attributes.buttonLink)">
              {{ card.attributes.buttonName ? card.attributes.buttonName : 'Заказать' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(card, index) in cards.cards" :key="card.key + 'modal'">
      <Modal v-if="card.attributes.modal" :title="card.attributes.cardTitle"
             :show-popup="is_show[index].show" @closePopup="closePopup(index)"/>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Cards',
  components: {
    Modal: () => import('~/components/sections/general/Modal'),
  },
  props: {
    cards: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      is_show: [],
      periods: [],
    }
  },
  created() {
    this.cards.cards.forEach(() => {
      this.is_show.push({ show: false })
      this.periods.push({ period: 0 })
    })
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      this.cards.cards.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#" + this.cards.tag,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          }
        })
          .from(".card" + this.cards.tag + index, {y: innerHeight, opacity: 0, delay: 0.1 * index})
      })

    },
    goToLink(link) {
     window.open(link, '_blank')
    },
    showPopup(i) {
      this.is_show[i].show = true
      document.body.style.overflow = 'hidden'
    },
    closePopup(i) {
      this.is_show[i].show = false
      document.body.style.overflow = 'auto'
    },
    choosePeriod(card, period) {
      this.periods[card].period = period
    },
    periodToText(period) {
      const periodNumber = Number(period)
      if(periodNumber===1) {
        return period + ' месяц'
      }
      if(periodNumber>1&&periodNumber<5) {
        return period + ' месяца'
      }
      if(periodNumber<12) {
        return period + ' месяцев'
      }
      if(periodNumber===12) return '12 месяцев'
      if(periodNumber===24) return '24 месяца'
      if(periodNumber===36) return '36 месяцев'
    }
  }
}
</script>

<style scoped>

.license__card-total-descr {
  color: black;
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  opacity: 0.6;
}

.license {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;

}

.license__title {
  margin-bottom: 72px;
}

.license__wrapper-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 33px;
}

.license__wrap-card {
  width: 100%;
  max-width: 402px;
  padding: 40px 24px 24px;
  background-color: #fff;
  border-radius: 8px;
}

.license__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 48px;
}

.license__card-content {
  display: flex;
  margin-bottom: 24px;
}

.license__card-left {
  width: 226px;
  margin-right: 21px;
}

.license__card-left-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 20px;
  opacity: 0.6;
}

.license__card-right-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 20px;
  opacity: 0.6;
}

.license__card-left-text:last-child,
.license__card-right-text:last-child {
  margin-bottom: 0;
}

.license__card-selection-title {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 8px;
}

.license__card-selection {
  width: 100%;
  max-width: 343px;
  margin-bottom: 48px;
}

.license__select {
  width: 100%;
  max-width: 343px;
  height: 60px;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  padding: 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}

.license__card-total {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  color: #830f1e;
  margin-bottom: 48px;
}

.license__btn-wrap {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  color: #830f1e;
  margin-bottom: 24px;
}

.license__btn {
  width: 100%;
  max-width: 354px;
  padding: 14px 60px;
  background: #830f1e;
  border-radius: 6px;
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  color: #fff;
  cursor: pointer;
}

.license__btn:hover {
  background-color: #660915;
}
@media (max-width: 768px) {
  .license {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .license__title {
    margin-bottom: 48px;
  }
  .license__wrapper-cards {
    gap: 48px 34px;
  }
}
@media (max-width: 576px) {
  .license__title {
    margin-bottom: 24px;
  }
  .license__wrapper-cards {
    gap: 24px 33px;
  }
}
</style>
