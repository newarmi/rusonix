<template>
  <div class="total_card">
    <div :class="containerClass">
      <div class="calculate__total-title-wrap" :class="wrapClass">
        <div class="calculate__total-title" :class="totalClass">Итого</div>
      </div>
      <div v-for="(item, i) in items" :key="item.title + i" class="calculate__wrapper-total-text">
        <div v-if="item" class="calculate__total-wrap-text">
          <div class="calculate__total-card-text title_bold">{{item.title}}</div>
          <div v-for="option in item.options" :key="option.key" class="calculate__total-card-text">{{option.option}}</div>
        </div>
        <div class="calculate__total-wrap-price">
          <div class="calculate__total-card-text"></div>
          <div v-for="(option, index) in item.options" :key="index + 'price' + option.price" class="calculate__total-card-text">
            <p></p>
            <div v-if="option.price&&option.option">{{option.price}} ₽</div>
          </div>
        </div>
      </div>

      <select v-if="isSale" v-model="periodSale" class="license__select">
        <option v-for="sale in sales" :key="sale.key" :value="sale">
          {{periodToText(sale.attributes.period)}}
        </option>
      </select>

      <div class="calculate__total-wrap" :class="wrapClass">
        <div class="calculate__total-wrap-inside">
          <div class="calculate__total-card-text">
            <span class="calculate__total-card-text--mod">Итого: {{ totalRound }} ₽</span>
          </div>
          <div v-if="totalmonth!==0" class="calculate__total-card-text">
            <span class="calculate__total-card-text--mod">{{ totalmonth }} ₽</span>
            / месяц
          </div>
        </div>
        <p v-if="economy!==0" class="license__card-total-economy">Экономия {{economy}} рублей</p>
        <p v-if="isSale&&saleEconomy!==0" class="license__card-total-economy">Экономия {{saleEconomy}} рублей</p>
      </div>

      <div class="button__container" :class="buttonClass">
        <button v-if="modal" class="calculate__btn" @click="$emit('openModal')">{{ button }}</button>
        <button v-else class="calculate__btn" @click="goToLink">{{ button }}</button>
        <button class="calculate__btn-download" type="button" @click="$emit('createPDF')">
          <svg class="clip__icon" width="9" height="18">
            <use xlink:href="@/assets/img/sprites.svg#clip"></use>
          </svg>
          Скачать PDF с расчетом
        </button>
        <div></div>
      </div>
    </div>

    <div v-if="bonus" class="calculate__total-bottom">
      <div class="calculate__total-bottom-title">
        {{ bonus.title }}
      </div>
      <ul class="calculate__total-list">
        <li v-for="item in bonus.bonuses" :key="item.key" class="calculate__total-item">
          {{ item.attributes.title }}
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import '@/assets/fonts/PTSans-Regular-normal.js'

export default {
  name: 'Total',
  props: {
    total: {
      type: Number,
      required: true,
    },
    economy: {
      type: Number,
      default: 0,
    },
    totalmonth: {
      type: Number,
      default: 0
    },
    bonus: {
      type: Object,
      default: () => {},
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => []
    },
    sales: {
      type: Array,
      default: () => []
    },
    button: {
      type: String,
      default: 'Подключиться'
    },
    link: {
      type: String,
      required: true
    },
    modal: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      periodSale: null
    }
  },
  computed: {
    isSale() {
      return this.sales.length
    },
    currentSale() {
      return this.periodSale.attributes.sale
    },
    currentPeriod() {
      return this.periodSale.attributes.period
    },
    saleEconomy() {
      return Math.round(this.total * this.currentPeriod * this.currentSale * 0.01)
    },
    totalRound() {
      if(this.isSale) {
        const total = this.total * this.currentPeriod  - this.total * this.currentPeriod * this.currentSale * 0.01
        return total.toFixed(2)
      }
      return this.total.toFixed(2)
    },
    containerClass() {
      return {
        'calculate__total-tablet-container': this.mobile,
        'calculate__total' : !this.mobile,
      }
    },
    totalClass() {
      return { 'calculate__total-tablet-title': this.mobile }
    },
    wrapClass() {
      return { 'calculate__total-wrap-tablet': this.mobile }
    },
    buttonClass() {
      return { 'calculate__total-wrap-tablet-btn': this.mobile }
    },
  },
  watch: {
    sales() {
      this.init()
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      if(this.isSale) {
        this.periodSale = this.sales[0]
      }
    },
    goToLink() {
        if(this.link)
        window.open(this.link, '_blank')
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
    },
  }
}
</script>

<style scoped>
.button__container {
  text-align: center;
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
  margin-bottom: 15px;
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

.total_card {
  width: 390px;
}

.calculate__total {
  background-color: #fff;
  border-radius: 8px;
  padding: 48px 29px;
}
.calculate__total-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;

}

.calculate__total-tablet-title {
  margin: 0 auto 48px auto;
}


.calculate__wrapper-total-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.calculate__total-card-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 16px;
  min-height: 20px;
}

.calculate__total-wrap {
  gap: 29px;
  margin-bottom: 48px;
}

.calculate__total-wrap-inside {
  display: flex;
  justify-content: space-around;
}

.calculate__total-title-wrap {
  display: flex;
  gap: 29px;
  margin-bottom: 10px;
}


.calculate__total-card-text--mod {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}
.calculate__btn {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  padding: 15px 113px;
  background-color: #830f1e;
  border-radius: 6px;
  margin-bottom: 32px;
  cursor: pointer;
}
.calculate__btn:hover {
  background-color: #660915;
}
.calculate__btn-download {
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #878b99;
  background-color: transparent;
  cursor: pointer;
}
.clip__icon {
  fill: transparent;
  stroke: #878b99;
  margin-right: 8px;
}
.calculate__btn-download:hover > .clip__icon,
.calculate__btn-download:hover {
  fill: transparent;
  stroke: #000;
  color: #000;
}
.calculate__total-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}
.calculate__total-bottom-title {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 16px;
}
.calculate__total-list {
  list-style-image: url(@/assets/img/total-item-active.png);
}
.calculate__total-item {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}
.calculate__total-tablet {
  background-color: #ffffff;
  display: none;
}
.calculate__total-tablet-container {
  width: 100%;
  padding: 24px 213px;
  text-align: center;
  margin: 0 auto;
}
.calculate__total-wrap-tablet {
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
}
.calculate__total-wrap-tablet-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


@media (max-width: 992px) {
  .calculate {
    padding-bottom: 0;
  }
  .calculate__wrapper {
    justify-content: center;
    padding: 0;
  }
  .calculate__wrapper-right {
    display: none;
  }
  .calculate__total-tablet {
    display: block;
  }
  .calculate__btn-add {
    margin-bottom: 48px;
  }
  .total_card {
  width: auto;
}
@media (max-width: 768px) {

  .calculate__total-tablet-container {
    padding: 24px 16px;
  }

}

}

.title_bold {
  font-weight: 600;
  color: #000;
}

</style>
