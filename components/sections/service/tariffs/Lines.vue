<template>
  <div :id="lines.tag">
    <section class="license__storage">
      <div class="container">
        <div class="license__title title">
          {{ lines.tariffTitle }}
        </div>

        <div class="license__wrapper" :class="wrapper">
          <div class="license__wrapper-top" :class="titleWrapper">
            <div class="license__top-title" :class="titleText">Сертификат</div>
            <div v-for="option in lines.options" :key="option.key" class="license__top-title" :class="titleText">
              {{ option.attributes.title }}
            </div>
            <div class="license__top-title" :class="titleText">Стоимость</div>
          </div>

          <div v-for="line in lines.lines" :key="line.key" class="license__wrapper-bottom" :class="wrapperBottom">

            <div class="license__wrap-text">{{ line.attributes.title }}</div>

            <div v-for="item in line.attributes.options" :key="item.key">
              <div v-if="item.layout === 'list'" class="license__wrap-select">
                <select class="license__select license__select--mod">
                  <option v-for="option in item.attributes.list" :key="option.key" :value="option.attributes.item" >
                    {{ option.attributes.item }}
                  </option>
                </select>
              </div>

              <div v-if="item.layout === 'field'" class="license__input">
                <input class="license__input-text" type="number" :value="item.attributes.value" />
              </div>

              <div v-if="item.layout === 'text'" class="license__wrap-text">
                {{ item.attributes.value }}
              </div>
            </div>

            <div class="license__wrap-total-box">
              <div class="license__total">{{ line.attributes.price }}</div>
              <button class="license__btn">
                {{ line.attributes.buttonName }}
              </button>
            </div>
          </div>
        </div>

        <!-- tablet  -->
        <div class="license__tablet-wrapper">
          <div v-for="line in lines.lines" :key="line.key" class="license__tablet" >
            <div class="license__tablet-title">{{ line.attributes.title }}</div>

            <div v-for="(item, i) in line.attributes.options" :key="item.key" class="license__tablet-wrap--tablet" >
              <div class="license__tablet-text">{{ options[i].title }}</div>

              <div v-if="item.layout === 'field'" class="license__input">
                <input class="license__input-text" type="number" :value="item.attributes.value" />
              </div>

              <div v-if="item.layout === 'list'" class="license__wrap-select">
                <select class="license__select license__select-tablet license__select-tablet--mod" >
                  <option v-for="option in item.attributes.list" :key="option.key" :value="option.attributes.item" >
                    {{ option.attributes.item }}
                  </option>
                </select>
              </div>

              <div v-if="item.layout === 'text'" class="license__tablet-text license__tablet-text--mod" >
                {{ item.attributes.value }}
              </div>
            </div>

            <div class="license__total license__total--tablet">
              {{ line.attributes.price }}
            </div>
            <button class="license__btn license__btn--tablet">
              {{ line.attributes.buttonName }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lines',
  props: {
    lines: {
      type: Object,
      required: true,
    },
  },
  computed: {
    options() {
      const options = []
      this.lines.options.forEach((element) => {
        options.push(element.attributes)
      })
      return options
    },
    optionNumber() {
      return this.lines.options.length
    },
    wrapper() {
      return {'license__wrapper-one': this.optionNumber === 1,
              'license__wrapper-two': this.optionNumber === 2,
              'license__wrapper-three': this.optionNumber === 3,}
    },
    titleWrapper() {
      return {
        'license__wrapper-top-one': this.optionNumber === 1,
        'license__wrapper-top-two': this.optionNumber === 2,
        'license__wrapper-top-three': this.optionNumber === 3,
      }
    },
    titleText() {
      return {
        'license__top-title-one': this.optionNumber === 1,
        'license__top-title-two': this.optionNumber === 2,
        'license__top-title-three': this.optionNumber === 3,
      }
    },
    wrapperBottom() {
      return {
        'license__wrapper-bottom-one': this.optionNumber === 1,
        'license__wrapper-bottom-two': this.optionNumber === 2,
        'license__wrapper-bottom-three': this.optionNumber === 3,
      }
    },
  },
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

.license__tablet-wrapper {
  display: none;
  flex-wrap: wrap;
  gap: 48px 34px;
}

.license__tablet {
  display: flex;
  flex-direction: column;
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
.license__tablet-wrap--tablet-mod {
  justify-content: flex-start;
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
.license__tablet-text--mod {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 32px;
  opacity: 1;
}
.license__select-tablet {
  padding: 20px 164px 20px 24px;
  background-position-x: 85%;
}
.license__select-tablet--mod {
  padding: 20px 74px 20px 24px;
  width: 196px;
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
  .license__tablet-wrapper {
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
  .license__tablet-wrapper {
    gap: 24px 34px;
  }
  .license__tablet {
    max-width: 325px;
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
  flex: 1 2 33.333%;
}
.license__top-title-one:nth-child(2) {
  flex: 1 2 33.333%;
}
.license__top-title-one:nth-child(3) {
  flex: 1 0 33.333%;
}

.license__top-title-two:nth-child(1) {
  flex: 1 2 29%;
}
.license__top-title-two:nth-child(2) {
  flex: 1 2 19%;
}
.license__top-title-two:nth-child(3) {
  flex: 1 2 19%;
}
.license__top-title-two:nth-child(4) {
  flex: 1 0 33%;
}

.license__top-title-three:nth-child(1) {
  flex: 1 2 20%;
}
.license__top-title-three:nth-child(2) {
  flex: 1 2 15.66%;
}
.license__top-title-three:nth-child(3) {
  flex: 1 2 15.66%;
}
.license__top-title-three:nth-child(4) {
  flex: 1 2 15.66%;
}
.license__top-title-three:nth-child(5) {
  flex: 1 0 33%;
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
  flex: 1 2 33.33%;
}
.license__wrapper-bottom-one > div:nth-child(2) {
  flex: 1 2 33.33%;
}
.license__wrapper-bottom-one > div:nth-child(3) {
  flex: 1 0 33.33%;
}

.license__wrapper-bottom-two > div:nth-child(1) {
  flex: 1 2 29%;
}
.license__wrapper-bottom-two > div:nth-child(2) {
  flex: 1 2 19%;
}
.license__wrapper-bottom-two > div:nth-child(3) {
  flex: 1 2 19%;
}
.license__wrapper-bottom-two > div:nth-child(4) {
  flex: 1 0 33%;
}

.license__wrapper-bottom-three > div:nth-child(1) {
  flex: 1 2 20%;
}
.license__wrapper-bottom-three > div:nth-child(2) {
  flex: 1 2 15.66%;
}
.license__wrapper-bottom-three > div:nth-child(3) {
  flex: 1 2 15.66%;
}
.license__wrapper-bottom-three > div:nth-child(4) {
  flex: 1 2 15.66%;
}
.license__wrapper-bottom-three > div:nth-child(5) {
  flex: 1 0 33%;
}

.license__wrap-total-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
