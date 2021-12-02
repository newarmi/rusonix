<template>
  <div class="tariff__configuration-card" :class="{'tariff__configuration-card--mod':choose}" @click="clickOnCard">
    <div class="tariff__configuration-card-title" :class="{'tariff__configuration-card-title--mod':choose}">{{ title }}</div>
    <div class="tariff__configuration-wrap-text" :class="{'tariff__configuration-card-text--mod':choose}">
      <div v-for="option in options" :key="option.key" class="tariff__configuration-card-text" :class="{'tariff__configuration-card-text--mod':choose}">
        {{ option.attributes.option }}
      </div>
    </div>
    <div class="tariff__configuration-card-total" :class="{'tariff__configuration-card-total--mod':choose}">{{ price }}</div>
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
      type: String,
      required: true,
    },
    choose: {
        type: Boolean,
        required: true,
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
