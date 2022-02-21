<template>
  <div>
  <div :id="'storageLine' + number" class="license__wrapper-bottom license__wrapper-bottom-two">
    <div class="license__wrap-text" v-html="line.title"></div>

    <div class="license__input">
      <input v-model="tbytes" class="license__input-text" type="number"
             @change="changeTb($event.target.value)" />
    </div>

    <div class="license__wrap-select">
      <select v-model="gbytes" class="license__select license__select--mod">
        <option :value="0">0</option>
        <option :value="100">100</option>
        <option :value="200">200</option>
        <option :value="300">300</option>
        <option :value="400">400</option>
        <option :value="500">500</option>
        <option :value="600">600</option>
        <option :value="700">700</option>
        <option :value="800">800</option>
        <option :value="900">900</option>
      </select>
    </div>

    <div class="license__wrap-select">
      <select v-model="sale" class="license__select license__select--mod">
        <option :value="{ sale: line.sale1, month: 1, period: '1 месяц'}">1 месяц</option>
        <option :value="{ sale: line.sale6, month: 6, period: '6 месяцев'}">6 месяцев</option>
        <option :value="{ sale: line.sale12, month: 12, period: '12 месяцев'}">12 месяцев</option>
        <option :value="{ sale: line.sale24, month: 24, period: '24 месяца'}">24 месяца</option>
      </select>
    </div>

    <div class="license__wrap-total-box">
      <div class="license__wrap-full-box">
        <div class="license__wrap-price-box">
          <span v-if="currentSale&&isCorrect" class="sertificate__total-old--mod"></span>
          <div v-if="currentSale&&isCorrect" class="sertificate__total-old">{{ total }}</div>
          <div class="license__total">{{ price }} ₽</div>
        </div>
        <div v-if="currentSale&&isCorrect" class="license__wrap-economy">Экономия: {{ economy }} ₽</div>
      </div>
      <button v-if="line.modal" class="license__btn" @click="showPopup()">
        {{ line.buttonName ? line.buttonName : 'Заказать' }}
      </button>
      <button v-else class="license__btn" @click="goToLink(line.buttonLink)">
        {{ line.buttonName ? line.buttonName : 'Заказать' }}
      </button>
    </div>


  </div>
  <Modal v-if="line.modal" :title="line.title" :period="sale.period"
         :show-popup="is_show" @closePopup="closePopup()"/>
  </div>
</template>

<script>
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Storage',
  components: {
    Modal: () => import('~/components/sections/general/Modal'),
  },
  props: {
    line: {
      type: Object,
      required: true,
    },
    number: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      tbytes: this.line.min,
      gbytes: 0,
      cpuPrice: this.line.cpu2,
      sale: { sale: this.line.sale1, month: 1, period: '1 месяц' } ,
      is_show: false
    }
  },
  computed: {
    currentSale() {
      return Number(this.sale.sale)
    },
    isCorrect() {
      return Number(this.tbytes)<=Number(this.line.max)&&Number(this.tbytes)>=Number(this.line.min)
    },
    price() {
      const tbprice = this.line.price * this.tbytes * this.sale.month
      const gbprice = this.line.price * this.gbytes * 0.001 * this.sale.month
      const price = tbprice + gbprice
      const sale = price * this.sale.sale * 0.01
      const maxprice = this.line.price * this.line.max * this.sale.month + gbprice
      const minprice = this.line.price * this.line.min * this.sale.month + gbprice

      if(Number(this.tbytes)>Number(this.line.max))

        return Math.round(maxprice - maxprice * this.sale.sale * 0.01)
      if(Number(this.tbytes)<Number(this.line.min))
        return Math.round(minprice - minprice * this.sale.sale * 0.01)

      return Math.round(price - sale)
    },
    total() {
      let tbytes = this.tbytes
      if(Number(this.tbytes)>Number(this.line.max))
        tbytes = this.line.max

      return (this.line.price * tbytes +  this.line.price * this.gbytes * 0.001) * this.sale.month
    },
    economy() {
      return Math.round(this.total - this.price)
    }
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".storagesWrapper",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 2,
          }
        })
          .from("#storageLine" + this.number, {y: innerHeight, opacity: 0, delay: 0.1 * this.number})
    },
    changeTb(value) {
      if(Number(value)>Number(this.line.max)) {
        this.tbytes = this.line.max
      }
      if(Number(value)<Number(this.line.min)) {
        this.tbytes = this.line.min
      }
    },
    choosePeriod(line, period) {
      this.periods[line].period = period
    },
    goToLink(link) {
      window.open(link, '_blank')
    },
    showPopup() {
      this.is_show = true
      document.body.style.overflow = 'hidden'
    },
    closePopup() {
      this.is_show = false
      document.body.style.overflow = 'auto'
    },
  },
}
</script>

<style scoped>
.license__input-text {
  width: 100%;
  max-width: 94px;
  height: 60px;

  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  padding: 20px 24px;
  border: 1px solid #ede7e2;
  border-radius: 8px;

  outline: none;
}

.license__input-text::-webkit-inner-spin-button {
  display: none;
}

@media (max-width: 1200px) {
  .license__input-text {
    max-width: 185px;
  }
}


.sertificate__total-old {
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
.sertificate__total-old--mod::before {
  content: "";
  display: block;
  position: absolute;
  left: 17px;
  bottom: 0;
  width: 66px;
  height: 2px;
  background-color: #830f1e;
  transform: rotate(-10deg);
}

.license__wrap-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  width: 100%;
  max-width: 375px;
}

.license__select {
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 68px 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 75%;
  cursor: pointer;
}

.license__select--mod {
  background-position-x: 90%;
}

.license__select:focus {
  outline: 0;
}

.license__total {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.license__btn {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  background-color: #830f1e;
  border-radius: 6px;
  padding: 14px 69px 14px;
  cursor: pointer;
}

.license__btn:hover {
  background-color: #660915;
}

.license__wrapper-bottom {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  margin: 10px -10px;
}

.license__wrapper-bottom-two > div:nth-child(1) {
  flex: 1 2 27%;
}

.license__wrapper-bottom-two > div:nth-child(2) {
  flex: 1 2 10%;
}

.license__wrapper-bottom-two > div:nth-child(3) {
  flex: 1 2 12%;
}

.license__wrapper-bottom-two > div:nth-child(4) {
  flex: 1 2 15%;
}

.license__wrapper-bottom-two > div:nth-child(5) {
  flex: 1 0 36%;
}

.license__wrap-price-box {
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  gap: 24px;
  align-items: center;
  flex: 0 1 24%;
  min-width: 210px;
}

.license__wrap-economy {
  margin-top: 5px;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  opacity: 0.6;

  text-align: center;
}

.license__wrap-total-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
}
</style>
