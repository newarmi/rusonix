<template>
  <section class="license">
    <div class="container">
      <div class="license__title title">{{ tariff.tariffTitle }}</div>
      <div class="license__wrapper-cards">

        <div v-for="card in cards" :key="card.key" class="license__wrap-card">
          <div class="license__card-title">{{ card.name }}</div>
              <div class="license__card-content">
                <div class="license__card-left">
                  <div v-for="option in card.options[0].attributes.options" :key="option.key">
                    <div v-if="option.layout === 'simpleOption'" class="license__card-left-text">{{ option.attributes.option }}</div>
                  </div>
                </div>
                <div class="license__card-content-right">
                  <div v-for="option in card.options[0].attributes.options" :key="option.key">
                    <div v-if="option.layout === 'simpleOption'" class="license__card-right-text">{{ option.attributes.value }}</div>
                  </div>
                </div>
              </div>

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
          
           <div class="license__card-total">
            {{ Math.floor(card.periods[0].amount) }} ₽
            <div
              v-show="card.options[0].attributes.priceComment"
              class="license__card-total-descr">
              {{ card.options[0].attributes.priceComment }}
            </div>
          </div>        
            <a href="#" class="license__btn">
              {{card.options[0].attributes.buttonName}}</a>
          </div>
        </div>
      </div>
    
  </section>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    tariff: {
      type: Object,
      required: true
    }
  },
  computed: {
    cards() {
      return this.$store.getters['universal/billingTariffs']
    },
  },
}
</script>

<style scoped>
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
  margin-bottom: 48px;
}
.license__btn {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  background-color: #830f1e;
  border-radius: 6px;
  padding: 19px 141px 18px 144px;
  cursor: pointer;
  margin-top: 30px;
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
