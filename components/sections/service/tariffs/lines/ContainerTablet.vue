<template>
  <div class="license__tablet">
    <div>
      <div class="license__tablet-title" v-html="line.title"></div>
      <div class="license__tablet-wrap--tablet">
        <div class="license__tablet-text">CPU</div>
        <div class="license__wrap-select">
          <select v-model="cpuPrice" class="license__select license__select-tablet license__select-tablet--mod">
            <option :value="line.cpu2">2</option>
            <option :value="line.cpu4">4</option>
            <option :value="line.cpu8">8</option>
          </select>
        </div>
      </div>
      <div class="license__tablet-wrap--tablet">
        <div class="license__tablet-text">Период</div>
        <div class="license__wrap-select">
          <select v-model="sale" class="license__select license__select-tablet license__select-tablet--mod">
            <option :value="{ sale: line.sale1, month: 1}">1 месяц</option>
            <option :value="{ sale: line.sale6, month: 6}">6 месяцев</option>
            <option :value="{ sale: line.sale12, month: 12}">12 месяцев</option>
            <option :value="{ sale: line.sale24, month: 24}">24 месяца</option>
          </select>
        </div>
      </div>
    </div>
    <div class="license__wrap-full-box">
      <div class="license__wrap-price-box">
        <span v-if="currentSale" class="sertificate__total-old--mod"></span>
        <div v-if="currentSale" class="sertificate__total-old">{{ total }}</div>
        <div class="license__total">{{ price }} ₽</div>
      </div>
      <div v-if="currentSale" class="license__wrap-economy">Экономия: {{ economy }} ₽</div>
    </div>
    <button v-if="line.modal" class="license__btn" @click="showPopup()">
      {{ line.buttonName ? line.buttonName : 'Заказать' }}
    </button>
    <button v-else class="license__btn license__btn--tablet" @click="goToLink(line.buttonLink)">
      {{ line.buttonName ? line.buttonName : 'Заказать' }}
    </button>
    <Modal v-if="line.modal" :title="line.title"
           :show-popup="is_show" @closePopup="closePopup()"/>
  </div>
</template>

<script>
export default {
  name: 'ContainerTablet',
  components: {
    Modal: () => import('~/components/sections/general/Modal'),
  },
  props: {
    line: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      is_show: false,
      cpuPrice: this.line.cpu2,
      sale: {sale: this.line.sale1, month: 1},
    }
  },
  computed: {
    currentSale() {
      return Number(this.sale.sale)
    },
    price() {
      return Math.round(this.cpuPrice * this.sale.month - this.cpuPrice * this.sale.month * (this.sale.sale * 0.01))
    },
    total() {
      return this.cpuPrice * this.sale.month
    },
    economy() {
      return Math.round(this.cpuPrice * this.sale.month - this.price)
    }
  },
  methods: {
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

.license__tablet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 calc((100% / 2) - 34px);
  max-width: 343px;
  padding: 30px 24px 24px;
  background-color: #fff;
  border-radius: 8px;
}

.license__tablet-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 24px;
  flex: 1;
}

.license__tablet-wrap--tablet {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
}

.license__tablet-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}

.license__select-tablet {
  padding: 20px 164px 20px 24px;
  background-position-x: 85%;
}

.license__select-tablet--mod {
  padding: 20px 74px 20px 24px;
  width: 196px;
}

.license__btn--tablet {
  padding-left: 114px;
  padding-right: 114px;
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

.license__wrap-full-box {
  margin-bottom: 15px;
}

</style>
