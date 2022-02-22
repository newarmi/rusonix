<template>
  <section :id="tariff.tag" class="license-billing">
    <div class="container">
      <h2 class="license__title title" :class="tariff.tag + tariff.mode">{{ tariff.tariffTitle }}</h2>

      <div class="license__wrapper-cards">
        <div v-for="(card, ind) in cards" :key="card.key"
             class="license__wrap-card" :class="'billing' + tariff.tag + ind">
          <div class="license__wrap-card--title">
          <div class="license__card-title">{{ card.title ? card.title : card.name }}

          </div>
              <div v-if="card.options.length>0" class="license__card-content">
                <div class="license__card-left">
                  <div v-for="option in card.options[0].attributes.options" :key="option.key">
                    <div v-if="option.layout === 'simpleOption'" class="license__card-left-text">{{ option.attributes.option }}</div>
                  </div>
                  <div v-if="card.periods.length===1">
                    <div class="license__card-left-text">Период</div>
                  </div>
                </div>
                <div class="license__card-content-right">
                  <div v-for="option in card.options[0].attributes.options" :key="option.key">
                    <div v-if="option.layout === 'simpleOption'" class="license__card-right-text">{{ option.attributes.value }}</div>
                  </div>
                  <div v-if="card.periods.length===1">
                    <div class="license__card-right-text">{{ periodToText(card.periods[0].period) }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="card.periods.length>1">
                <div class="license__card-selection-title">
                  Период
                </div>
                <div class="license__card-selection">
                  <select class="license__select" @change="choosePeriod(ind, $event.target.value)">
                    <option
                      v-for="(period, i) in card.periods"
                      :key="period.key"
                      :value="i">
                      {{periodToText(period.period)}}
                    </option>
                  </select>
                </div>
            </div>

          <div v-if="card.options.length>0">
            <div v-for="option in card.options[0].attributes.options" :key="option.key">
              <div v-if="option.layout === 'listOption'">
                <div class="license__card-selection-title">
                  {{ option.attributes.option }}
                </div>
                <div class="license__card-selection">
                  <select class="license__select">
                    <option
                      v-for="item in option.attributes.list"
                      :key="item.key"
                      value="item.attributes.listItem">
                      {{ item.attributes.listItem }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="license__card-wrap-total">
              <div class="license__prices-wrapper">
                <div v-if="card.periods[periods[ind].period].percent!=='0%'" class="license__card-oldprice">
                  <p class="license__card-oldprice-text">{{ Math.floor(card.periods[periods[ind].period].full_cost) }} ₽</p>
                </div>
                <div class="license__card-total license__card-total--mod">{{ Math.floor(card.periods[periods[ind].period].amount) }} ₽</div>
              </div>
              <p v-if="card.periods[periods[ind].period].percent!=='0%'" class="license__card-total-economy">
                Экономия {{Math.floor(card.periods[periods[ind].period].full_cost - card.periods[periods[ind].period].amount)}} рублей</p>
            </div>

              <div class="license__btn-wrap">
                <div class="license__btn"
                @click="goToBilling(card.billing_id, card.type, card.periods[periods[ind].period].period)">
                  {{card.button ? card.button : 'Заказать'}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import {gsap} from "gsap";

export default {
  name: 'BillingCards',
  props: {
    tariff: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      periods: [],
      cards: null
    }
  },
  watch: {
    allCards() {
      this.init()
    }
  },
  created() {
    this.init()
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      this.cards.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: "." + this.tariff.tag + this.tariff.mode,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 2,
          }
        })
          .from(".billing" + this.tariff.tag + index, {y: innerHeight, opacity: 0, delay: 0.1 * index})
      })
    },
    init() {
      this.cards = this.$store.getters['universal/billingTariffs'].map(item=>item)

      if(this.tariff.mode) {
          this.cards = this.cards.filter(item => {
            return item.mode?.find(obj => obj.attributes.title === this.tariff.mode)
        })
      }

      this.cards = this.cards.sort((a ,b) => {
          return a.periods[0].amount-b.periods[0].amount
      })

      this.cards.forEach(() => {
        this.periods.push({period: 0})
      });
    },
    choosePeriod(card, period) {
      this.periods[card].period = period
    },
    goToBilling(id, type, period) {
      window.open(`https://my.rusonyx.ru/billmgr?startpage=`
                   + type + `&startform=` + type + `%2Eorder%2Eparam&pricelist=`
                   + id + `&period=` + period + `&project=3`, '_blank')
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

.license__prices-wrapper {
display: flex;
}

.sertificate__total-old {
  color: black;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.2;
}

.sertificate__total-old--mod {
  position: relative;
}

.license__btn-wrap {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  margin-bottom: 24px;
}

.license-billing {
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.license__wrap-card--title{

}
.license__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
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
  letter-spacing: 0px;
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
  letter-spacing: 0px;
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
  letter-spacing: 0px;
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
  letter-spacing: 0px;
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
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  margin-left: 10px;
  margin-bottom: 48px;
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
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  cursor: pointer;

}
.license__btn:hover {
  background-color: #660915;
}
@media(max-width:576px){
  .license__btn{
    padding: 14px 40px;
  }
}

.license__card-oldprice-text {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.2;
}
.license__card-oldprice {
  position: relative;
  margin-right: 20px;
}
.license__card-oldprice::before {
      content: "";
    position: absolute;
    background-color: #830f1e;
    width: 90px;
    height: 2px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-10deg);
}
.license__card-wrap-total {
  display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 48px;
}

.license__card-total {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;

  margin-bottom: 48px;
}
.license__card-total--mod {
  margin-bottom: 0;
}
.license__card-total-descr {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
}
.license__card-total-economy {
  margin-top: 5px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
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
