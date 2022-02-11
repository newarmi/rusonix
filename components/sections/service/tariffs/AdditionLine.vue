<template>
  <div class="addition__wrap-item">
    <div class="addition__item-text">{{ addition.title }}</div>
    <div class="addition__item-select">
      <select class="addition__select" @change="selectPeriod($event.target.value)">
        <option v-for="(item, i) in addition.periodPrice" :key="item.key" :value="i">{{  periodToText(item.attributes.period) }}</option>
      </select>
    </div>
    <div class="addition__total">{{addition.periodPrice[period].attributes.price}} ₽</div>
    <button v-if="addition.modal" class="addition__btn" @click="showPopup">{{ addition.button ? addition.button : 'Заказать' }}</button>
    <button v-else class="addition__btn" @click="goToLink(addition.buttonLink)">{{ addition.button ? addition.button : 'Заказать' }}</button>

    <Modal v-if="addition.modal" :title="addition.title" :show-popup="is_show"
           :period="currentPeriod" @closePopup="closePopup"/>
  </div>
</template>

<script>
export default {
  components: {
    Modal: () => import('~/components/sections/general/Modal'),
  },
  props: {
    addition: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      period: 0,
      is_show: false
    }
  },
  computed: {
    currentPeriod() {
      return this.periodToText(this.addition.periodPrice[this.period].attributes.period)
    }
  },
  methods: {
    selectPeriod(index) {
      this.period = index
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
  }
}

</script>

<style scoped>
.addition__wrap-item {
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  gap: 60px;
}
.addition__item-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.addition__select {
  width: 100%;
  max-width: 250px;
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
  padding: 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}
.addition__total {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
  min-width: 87px;
}
.addition__btn {
  width: 100%;
  max-width: 207px;
  margin-left: auto;
  background: #830f1e;
  border-radius: 6px;
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  padding: 14px 37px;
  color: #fff;
  cursor: pointer;
}
.addition__btn:hover {
  background: #660915;
}
.addition__wrap-item > * {
  flex: 0 1 auto;
}
.addition__wrap-item > div:nth-child(1) {
  flex: 0 0 35%;
}
.addition__wrap-item > div:nth-child(2) {
  flex: 0 0 25%;
}

@media (max-width: 1250px) {
  .addition__wrap-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding-bottom: 48px;
    padding-top: 15px;
  }
  .addition__item-select {
    width: 100%;
    max-width: 672px;
  }
  .addition__select {
    max-width: 672px;
  }
  .addition__btn {
    margin: 0 auto;
    max-width: 293px;
  }
}
</style>

