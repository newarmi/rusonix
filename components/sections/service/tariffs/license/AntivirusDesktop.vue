<template>
  <div>
    <div class="license__wrapper-top" :class="titleWrapper">
      <div class="license__top-title" :class="titleText">Тип лицензии</div>
      <div class="license__top-title" :class="titleText">Число учетных записей</div>
      <div class="license__top-title" :class="titleText">Срок действия</div>
      <div class="license__top-title" :class="titleText">Стоимость</div>
    </div>

    <div class="license__wrapper-bottom" :class="wrapperBottom">
      <div class="license__wrap-select">
        <select v-model="lineNumber" class="license__select license__select--mod">
          <option v-for="(line, i) in lines" :key="line.key" :value="i">
            {{ line.attributes.title }}
          </option>
        </select>
      </div>

      <div class="license__wrap-select">
        <select v-model="optionsNumbers[lineNumber]" class="license__select license__select--mod">
          <option v-for="(option, o) in options" :key="option.key" :value="o">
            {{ option.attributes.number }}
          </option>
        </select>
      </div>

      <div class="license__wrap-text">
        {{ period }}
      </div>

      <!--        <div v-if="item.layout === 'radio'" class="license__communigate-radio">-->
      <!--          <div v-for="(option, k)  in item.attributes.list" :key="option.key" class="license__communigate-radio-wrap">-->
      <!--            <input :id="'indefinitely-' + k" class="license__communigate-input" type="radio"-->
      <!--                   name="dron" :value="option.attributes.item" :checked="k===0"/>-->
      <!--            <label class="license__communigate-label" :for="'indefinitely-' + k"-->
      <!--                   :checked="k===0">{{ option.attributes.item }} </label>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div v-if="item.layout === 'field'" class="license__input">-->
      <!--          <input class="license__input-text" type="number" :value="item.attributes.value"/>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="license__wrap-total-box">
        <div class="license__total">{{ price }} ₽</div>
        <button class="license__btn" @click="openModal()">
          {{ button.title ? button.title : 'Заказать' }}
        </button>
      </div>
    </div>
    <Modal v-if="button.modal" :title="currentTitle" :period="period"
           :show-popup="is_show" @closePopup="closePopup()"/>
  </div>
</template>

<script>
export default {
  name: 'AntivirusDesktop',
  components: {
    Modal: () => import('~/components/sections/general/Modal'),
  },
  props: {
    lines: {
      type: Array,
      required: true,
    },
    button: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      lineNumber: 0,
      optionNumber: 0,
      optionsNumbers: [],
      is_show: false,
      opr: 2
    }
  },
  computed: {
    options() {
      return this.lines[this.lineNumber].attributes.numberPrice
    },
    period() {
      return this.lines[this.lineNumber].attributes.time
    },
    price() {
      return this.lines[this.lineNumber].attributes.numberPrice[this.currentOption].attributes.price
    },
    currentOption() {
      return this.optionsNumbers[this.lineNumber]
    },
    currentTitle() {
      return this.lines[this.lineNumber].attributes.title
    },
    wrapper() {
      return {
        'license__wrapper-two': this.opr === 1,
        'license__wrapper-three': this.opr === 2,
      }
    },
    titleWrapper() {
      return {
        'license__wrapper-top-two': this.opr === 1,
        'license__wrapper-top-three': this.opr === 2,
      }
    },
    titleText() {
      return {
        'license__top-title-two': this.opr === 1,
        'license__top-title-three': this.opr === 2,
      }
    },
    wrapperBottom() {
      return {
        'license__wrapper-bottom-two': this.opr === 1,
        'license__wrapper-bottom-three': this.opr === 2,
      }
    },
  },
  created() {
    this.lines.forEach(() => {
      this.optionsNumbers.push(0)
    })
  },
  methods: {
    openModal() {
      this.is_show = true
      document.body.style.overflow = 'hidden'
    },
    closePopup() {
      this.is_show = false
      document.body.style.overflow = 'auto'
      document.body.style.position = '';
    },
  }
}
</script>

<style scoped>
.license {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 36px;
}

.license__storage {
  background-color: #fcf7f2;
  padding-top: 36px;
  padding-bottom: 36px;
}

.license__title {
  margin-bottom: 48px;
}

.license__wrap {
  background-color: #fff;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.license__wrap-title {
  display: flex;
  margin-bottom: 16px;
  padding-left: 24px;
}

.license__text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
}

.license__text:nth-child(1) {
  flex-basis: 38%;
}

.license__text:nth-child(2) {
  flex-basis: 16%;
}

.license__text:nth-child(3) {
  flex-basis: 16%;
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

.license__wrap-text--mod {
  max-width: 175px;
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

.license__total--tablet {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.license__btn--tablet {
  padding-left: 114px;
  padding-right: 114px;
}

@media (max-width: 1250px) {
  .license__text:nth-child(1) {
    flex-basis: 38%;
  }
}

@media (max-width: 1200px) {
  .license__wrap-title {
    display: none;
  }

  .license__wrap {
    display: none;
  }

  .license__communigate-tablet {
    display: flex;
  }

  .license__wrapper {
    display: none;
  }
}

@media (max-width: 768px) {
  .license {
    padding-top: 36px;
  }
}

@media (max-width: 576px) {
  .license__title {
    margin-bottom: 24px;
  }
}

.license__input {
}

.license__storage-wrap-text {
  max-width: 320px;
}

.license__input-text {
  width: 100%;
  max-width: 94px;
  height: 60px;

  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
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
    max-width: 201px;
  }
}

.license__top-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  padding: 0 10px;
}

.license__wrapper-top {
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 -10px;
}

.license__top-title-one:nth-child(1) {
  flex: 1 2 67%;
}

.license__top-title-one:nth-child(2) {
  flex: 1 2 33%;
}

.license__top-title-two:nth-child(1) {
  flex: 1 2 33%;
}

.license__top-title-two:nth-child(2) {
  flex: 1 2 33%;
}

.license__top-title-two:nth-child(3) {
  flex: 1 2 33%;
}

.license__top-title-three:nth-child(1) {
  flex: 1 2 22%;
}

.license__top-title-three:nth-child(2) {
  flex: 1 2 23%;
}

.license__top-title-three:nth-child(3) {
  flex: 1 2 22%;
}

.license__top-title-three:nth-child(4) {
  flex: 1 2 33%;
}

.license__wrapper-bottom {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  margin: 10px -10px;
}

.license__wrapper-bottom > div {
  padding: 0 10px;
}

.license__wrapper-bottom-one > div:nth-child(1) {
  flex: 1 2 67%;
}

.license__wrapper-bottom-one > div:nth-child(2) {
  flex: 1 2 33%;
}

.license__wrapper-bottom-two > div:nth-child(1) {
  flex: 1 2 33%;
}

.license__wrapper-bottom-two > div:nth-child(2) {
  flex: 1 2 33%;
}

.license__wrapper-bottom-two > div:nth-child(3) {
  flex: 1 2 33%;
}

.license__wrapper-bottom-three > div:nth-child(1) {
  flex: 1 2 22%;
}

.license__wrapper-bottom-three > div:nth-child(2) {
  flex: 1 2 23%;
}

.license__wrapper-bottom-three > div:nth-child(3) {
  flex: 1 2 22%;
}

.license__wrapper-bottom-three > div:nth-child(4) {
  flex: 1 2 33%;
}

.license__wrap-total-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.license__communigate-radio {
  display: flex;
}

.license__communigate-radio-wrap {
  margin-right: 24px;
}

.license__communigate-radio-wrap:last-child {
  margin-right: 0;
}

.license__communigate-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.license__communigate-input,
.license__communigate-label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.license__communigate-input,
.license__communigate-label::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #dfe1eb;
  border-radius: 50%;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.license__communigate-input:not(:disabled):not(:checked),
.license__communigate-label:hover::before {
  border-color: #1b5309;
}

.license__communigate-input:checked + .license__communigate-label::before {
  border-color: #1b5309;
  background-color: #1b5309;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==');
  background-position: center;
}

.license__communigate-label {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.license__communigate-radio {
  display: flex;
}

.license__communigate-radio-wrap {
  margin-right: 24px;
}

.license__communigate-radio--tablet {
  margin-bottom: 24px;
}

.antispam {
  padding-top: 36px;
  padding-bottom: 72px;
  background-color: #fcf7f2;
}

.antispam__title {
  margin-bottom: 48px;
}

.antispam__wrap-text {
  display: flex;
  padding: 0 24px;
  margin-bottom: 16px;
}

.antispam__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
}

.antispam__text:first-child {
  flex-basis: 32%;
}

.antispam__text:nth-child(2) {
  flex-basis: 20%;
}

.antispam__text:nth-child(3) {
  flex-basis: 17%;
}

.antispam__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 24px;
}

.antispam__select {
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 198px 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  margin-right: 37px;
}

.antispam__select-number {
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 68px 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 85px;
  cursor: pointer;
}

.antispam__month {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.antispam__price {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.antispam-btn {
  font-family: "Graphik", sans-serif;
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

.antispam-btn:hover {
  background-color: #660915;
}

.antispam__tablet {
  display: none;
  width: 343px;
  padding: 30px 24px 24px;
  background-color: #fff;
  border-radius: 8px;
}

.antispam__month--tablet {
  margin-bottom: 44px;
}

.antispam__price--tablet {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.antispam__text--tablet {
  margin-bottom: 8px;
}

.antispam__text--tablet:first-child {
  margin-right: 0;
}

.antispam__text--tablet:nth-child(3) {
  margin-right: 0;
}

.antispam__text--tablet:nth-child(5) {
  margin-bottom: 28px;
}

.antispam__select--tablet,
.antispam__select-number--tablet {
  width: 100%;
  margin-bottom: 24px;
  background-position-x: 251px;
  padding-right: 68px;
}

.antispam-btn--tablet {
  padding-left: 112px;
  padding-right: 113px;
}

@media (max-width: 1200px) {
  .antispam__wrapper {
    display: none;
  }

  .antispam__wrap-text {
    display: none;
  }

  .antispam__tablet {
    display: block;
  }
}


</style>
