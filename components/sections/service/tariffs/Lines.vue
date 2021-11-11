<template>
  <div>
    <section class="license__storage">
      <div class="container">
        <div class="license__title title">{{ lines.tariffTitle }}</div>
        <div class="license__wrap-title">
          <div class="license__text">Сертификат</div>
          <div
            v-for="option in lines.options"
            :key="option.key"
            class="license__text"
          >
            {{ option.attributes.title }}
          </div>
          <div class="license__text">Стоимость</div>
        </div>

        <div v-for="line in lines.lines" :key="line.key" class="license__wrap">
          <div class="license__wrap-text">
            {{ line.attributes.title }}
          </div>

          <div v-for="item in line.attributes.options" :key="item.key">

            <div v-if="item.layout === 'list'" class="license__wrap-select">
              <select class="license__select license__select--mod">
                <option
                  v-for="option in item.attributes.list"
                  :key="option.key"
                  :value="option.attributes.item">
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

          <div class="license__total">{{ line.attributes.price }}</div>
          <button class="license__btn">{{ line.attributes.buttonName }}</button>
        </div>

        <!-- tablet  -->
        <div class="license__tablet-wrapper">

          <div v-for="line in lines.lines" :key="line.key" class="license__tablet">
            <div class="license__tablet-title">{{ line.attributes.title }}</div>

            <div v-for="item, i in line.attributes.options" :key="item.key" class="license__tablet-wrap--tablet">

              <div class="license__tablet-text">{{ options[i].title }}</div>

              <div v-if="item.layout === 'field'" class="license__input">
                <input class="license__input-text" type="number" :value="item.attributes.value" />
              </div>

              <div v-if="item.layout === 'list'" class="license__wrap-select">
                <select class="license__select license__select-tablet license__select-tablet--mod">
                  <option v-for="option in item.attributes.list"
                  :key="option.key" :value="option.attributes.item">
                  {{ option.attributes.item }}</option>    
                </select>
              </div>

              <div v-if="item.layout === 'text'" class="license__tablet-text license__tablet-text--mod">
                  {{ item.attributes.value }}
              </div>

            </div>

            <div class="license__total license__total--tablet">{{ line.attributes.price }}</div>
            <button class="license__btn license__btn--tablet">{{ line.attributes.buttonName }}</button>
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
  },
}
</script>

<style scoped>
.license {
  background-color: #fcf7f2;
  padding-top: 72px;
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

/* license-indefinite */

.license-indefinite {
  background-color: #fcf7f2;
  padding-top: 36px;
  padding-bottom: 36px;
}

/* license-storage */

.license__storage {
  background-color: #fcf7f2;
  padding-top: 36px;
  padding-bottom: 36px;
}
.license__storage-text:nth-child(1) {
  flex-basis: 30%;
}
.license__storage-text:nth-child(2) {
  flex-basis: 11%;
}
.license__storage-text:nth-child(3) {
  flex-basis: 11%;
}
.license__storage-text:nth-child(4) {
  flex-basis: 19%;
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
/* license__perpetual */

.license__perpetual {
  background-color: #fcf7f2;
  padding-top: 36px;
  padding-bottom: 36px;
}
.license__perpetual-text:nth-child(1) {
  flex-basis: 39%;
}
.license__perpetual-text:nth-child(2) {
  flex-basis: 12%;
}
.license__perpetual-text:nth-child(3) {
  flex-basis: 19%;
}
.license__perpetual-wrap-text {
  max-width: 425px;
}
.license__perpetual-select {
  width: 200px;
}
@media (max-width: 1200px) {
  .license__perpetual-text-tablet--mod {
    max-width: 200px;
  }
  .license__select-perpetual-tablet--mod {
    width: 200px;
  }
}
/* license__readykernal */
.license__readykernal {
  background-color: #fcf7f2;
  padding-top: 36px;
  padding-bottom: 36px;
}
.license__input-readykernal-text {
  max-width: 103px;
}
</style>
