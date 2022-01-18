<template>
  <div class="total_card">
    <div :class="containerClass">
      <div class="calculate__total-title-wrap" :class="wrapClass">
        <div class="calculate__total-title" :class="totalClass">Итого</div>
      </div>
      <div v-for="item in items" :key="item.title" class="calculate__wrapper-total-text">
        <div v-if="item" class="calculate__total-wrap-text">
          <div class="calculate__total-card-text title_bold">{{item.title}}</div>
          <div v-for="option in item.options" :key="option.key" class="calculate__total-card-text">{{option.option}}</div>
        </div>
        <div v-if="item.item" class="calculate__total-wrap-price">
          <div class="calculate__total-card-text"></div>
          <div class="calculate__total-card-text"></div>
          <div class="calculate__total-card-text"></div>
        </div>
      </div>

      <div class="calculate__total-wrap" :class="wrapClass">
        <div class="calculate__total-card-text">
          <span class="calculate__total-card-text--mod">{{ total }} ₽</span>
          / месяц
        </div>
        <div class="calculate__total-card-text">
          <span class="calculate__total-card-text--mod">{{ totalDay }} ₽</span>
          / день
        </div>
      </div>

      <div :class="buttonClass">
        <button class="calculate__btn">Подключиться</button>
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
  props: {
    total: {
      type: Number,
      required: true,
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
    }
  },
  computed: {
    totalDay() {
      return Math.round(this.total / 30)
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
  methods: {

  }
}
</script>

<style scoped>
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
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 16px;
}
.calculate__total-wrap {
  display: flex;
  gap: 29px;
  margin-bottom: 48px;
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
