<template>
  <div class="tariff__configuration-card" :class="{'tariff__configuration-card--mod':choose}" @click="clickOnCard">
    <div class="tariff__configuration-card-title" :class="{'tariff__configuration-card-title--mod':choose}">{{ title }}</div>
    <div class="tariff__configuration-wrap-text" :class="{'tariff__configuration-card-text--mod':choose}">
      <div v-for="option in options" :key="option.key" class="tariff__configuration-card-text" :class="{'tariff__configuration-card-text--mod':choose}">
        {{ option.attributes.option }}
      </div>
    </div>
    <div>
      <div v-if="sale" class="license__card-oldprice">
        <div class="license__card-oldprice-text" :class="{'tariff__configuration-card-total--mod':choose}">{{ oldprice }} ₽</div>
      </div>
      <div class="tariff__configuration-card-total" :class="{'tariff__configuration-card-total--mod':choose}">{{ price }} ₽</div>
      <p v-if="sale" class="license__card-total-economy" :class="{'license__card-total-economy--mod':choose}">Экономия {{economy}} рублей</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    choose: {
        type: Boolean,
        required: true,
    },
    sale: {
      type: Boolean,
      default: false
    },
    oldprice: {
      type: Number,
      default: 0,
    },
    economy: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    clickOnCard() {
        this.$emit('chooseCard')
    }
  }
}
</script>

<style scoped>
.license__card-oldprice-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.5;
}
.license__card-oldprice {
  position: relative;
  margin-right: 20px;
}
.license__card-oldprice::after {
    content: "";
    position: absolute;
    background-color: #830f1e;
    width: 80px;
    height: 2px;
    left: 29px;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-10deg);
}
.license__card-total-economy {
  margin-top: 5px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.license__card-total-economy--mod {
  color: white;
}

.tariff__configuration-card {
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0869858);
  border-radius: 6px;
  padding: 48px 24px;
  flex: 0 1 calc((100% / 2) - 33px);
  max-width: 390px; 
 
}

.tariff__configuration-card--mod {
  background-color: #1b5309;
}

.tariff__configuration-card-title {
  font-family: 'Graphik', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}

.tariff__configuration-card-title--mod {
  color: #fff;
}

.tariff__configuration-wrap-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
}

.tariff__configuration-card-text {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #878b99;
  margin-bottom: 8px;
}

.tariff__configuration-card-text:last-child {
  margin-bottom: 0;
}

.tariff__configuration-card-text--mod {
  color: #fff;
}

.tariff__configuration-card-total {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.tariff__configuration-card-total--mod {
  color: #fff;
}

</style>
