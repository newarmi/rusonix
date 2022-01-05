<template>
  <section class="tariff">
    <div class="container">
      <div class="tariff__title title">{{ data.title }}</div>
      <div class="tariff__wrapper">
        <div class="tariff__wrapper-text">
          <div class="tariff__text text" v-html="data.description" >
          </div>
        </div>
      </div>
      <div class="tariff__common-wrapper tariff__common-wrapper--active">
        <div v-for="solution, s in solutionConfigs" :key="'solution-' + s" class="ready__cofiguration">
          <div class="tariff__wrapper-sample">
            <div class="tariff__wrap-tab">
              <p class="tariff__tab-text">Тип диска</p>
              <div class="tariff__tab-sample">
                <div class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.firstDisk===activeTab[s].tab}"
                    @click="changeDiscTab(s, data.firstDisk)">{{ data.firstDisk }}</div>
                <div class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.secondDisk===activeTab[s].tab}"
                    @click="changeDiscTab(s, data.secondDisk)">{{ data.secondDisk }}</div>
              </div>

              <div class="tariff__tab-sample tariff__tab-sample--mobile">
                <div class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.firstDisk===activeTab[s].tab}"
                    @click="changeDiscTab(s, data.firstDisk)">{{ data.firstDisk }}</div>
                <div class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.secondDisk===activeTab[s].tab}"
                    @click="changeDiscTab(s, data.secondDisk)">{{ data.secondDisk }}</div>
              </div>
            </div>

            <div class="tariff__wrap-dropdown">
              <p class="tariff__tab-text">Период</p>
              <div class="tariff__dropdown" :class="{'show__dropdown-content': dropdown[s].show}" @click="showDropdown(s)">
                <span class="tariff__dropdown-btn">{{ period[s].period }}</span>
                <svg class="dropdown__icon" width="20" height="20">
                  <use xlink:href="@/assets/img/sprites.svg#arrow-dropdown"></use>
                </svg>

                <ul class="tariff__dropdown-content">
                  <li v-for="onePeriod, p in data.periods" :key="onePeriod.key"
                      :dropText="onePeriod.attributes.period"
                      class="tariff__dropdown-text" @click="choosePeriod(s, onePeriod.attributes.period, p, onePeriod.attributes.month)">{{ onePeriod.attributes.period }}</li>
                </ul>
              </div>
            </div>
            <div class="tariff__wrap-counter">
              <p class="tariff__tab-text">Количество серверов</p>
              <div class="tariff__counter">
                <svg class="counter__icon-minus" width="8" height="3" @click="serversSub(s)">
                  <use xlink:href="@/assets/img/sprites.svg#counter-minus"></use>
                </svg>
                <span class="tariff__counter-text"> {{ servers[s].servers }} {{ servers[s].word }}</span>
                <svg class="counter__icon-plus" width="9" height="9" @click="serversAdd(s)">
                  <use xlink:href="@/assets/img/sprites.svg#counter-plus"></use>
                </svg>
              </div>
            </div>
          </div>
          <div data-tabTariff-content class="tariff__wrapper-configuration tariff__wrapper-configuration--active">

            <div class="tariff__configuration">
              <SolutionCard v-for="item, i in solutionGroup[s].solution" :key="item.key"
                            :title="item.attributes.title"
                            :price="item.attributes.periodPrice[period[s].periodNumber].price + ' ₽'"
                            :options="item.attributes.options"
                            :choose="selectCards[s][tabIndex[s].tab][i].select"
                            @chooseCard="chooseCard(s, i, item)" />
            </div>

            <div v-if="solutionConfigs.length-s===1" class="tariff__wrapper-right">
              <Total :total="totalMonth" :bonus="bonuses" :mobile="false" :items="items" />
            </div>
          </div>
          <div v-if="solutionConfigs.length-s===1" class="calculate__wrapper-btn-add btn_mobile_hide">
            <button class="calculate__btn-add" @click="addSolution(s)">+ добавить конфигурацию</button>
            <button v-if="solutionConfigs.length>1" class="calculate__btn-add" @click="removeSolution">- убрать конфигурацию</button>
          </div>

          <div class="tariff__wrapper-slider">
             <SolutionSlider :solutions="solutionGroup[s].solution" :period="period" :example="s" />
          </div>
          <div v-if="solutionConfigs.length-s===1" class="tariff__ready-configuration-btn-slider btn_desktop_hide">
             <button class="tariff__btn-add" @click="addSolution(s)">+ добавить конфигурацию</button>
             <button v-if="solutionConfigs.length>1" class="tariff__btn-add" @click="removeSolution">- убрать конфигурацию</button>
          </div>
        </div>
      </div>

    </div>
    <div class="calculate__total-tablet">
      <Total :total="totalMonth" :bonus="bonuses" :mobile="true" :items="items"/>
    </div>
  </section>
</template>

<script>

import 'swiper/css/swiper.min.css'

export default {
  components: {
    'SolutionCard': () => import('~/components/sections/service/tariffs/SolutionCard'),
    'SolutionSlider': () => import('~/components/sections/service/tariffs/SolutionSlider'),
    'Total': () => import('~/components/sections/service/tariffs/Total'),
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
        items: [{item: null}],
        solutionConfigs: [0],
        solutionGroup: [],
        servers: [],
        selectCards: [[[]]],
        activeTab: [{tab: this.data.firstDisk}],
        tabIndex: [{tab:0}],
        tab: true,
        dropdown: [{show: false}],
        period: [{period: this.data.periods[0].attributes.period, periodNumber: 0, month: this.data.periods[0].attributes.month}],
    }
  },
  computed: {
      total() {
        const result = this.items.reduce((accum, a, i) => {
          if(a.item)
          return accum + Number(a.item.periodPrice[this.period[i].periodNumber].price)
          return accum + 0
        }, 0)

        return Math.round(result)
      },

      totalMonth() {
        const result = this.items.reduce((accum, a, i) => {
          if(a.item)
          return accum + Number(a.item.periodPrice[this.period[i].periodNumber].price) / this.period[i].month
          return accum
        }, 0)
        return Math.round(result)
      },
      allBilling() {
        return this.$store.getters['universal/billingTariffs']
      },
      bonuses() {
        return this.data.bonus[0].attributes
      },
      billingClear() {
        return this.allBilling.map(item => {
        if(item.options) {
          const options = item.options[0]

          return {
            layout: options.layout,
            key: options.key,
            attributes: {
                          oldPrice: options.attributes.oldPrice,
                          options: options.attributes.options,
                          title: options.attributes.title ? options.attributes.title : item.name,
                          diskType: options.attributes.diskType,
                          price: Math.round(item.periods[0].amount) + ' ₽ / месяц',
                          periodPrice: item.periods.map(period => {
                            return {period: period.period, price: Math.round(period.amount)}
                          })
                        }
          }
        }
        return {}
      }).filter(item => Object.keys(item).length)
      },
      solutions() {
        const clearSolutions = this.data.solutions.map(item => {
          return {
            layout: item.layout,
            key: item.key,
            attributes: {
                title: item.attributes.title,
                diskType: item.attributes.diskType,
                options: item.attributes.options,
                price: item.attributes.periods[0].attributes.amount,
                periodPrice: item.attributes.periods.map(period => {
                    return {period: period.attributes.period, price: Math.round(period.attributes.amount)}
                })
            }
          }
        })
        return clearSolutions.concat(this.billingClear)
      },
      firstSolutions() {
        return this.solutions.filter(solution => solution.attributes.diskType===this.data.firstDisk)
      },
      secondSolutions() {
        return this.solutions.filter(solution => solution.attributes.diskType===this.data.secondDisk)
      },
      activeTabIndex() {
        if(this.activeTab===this.data.firstDisk) return 0
        return 1
      }
  },
  created() {
    this.servers.push({servers: Number(this.data.serverNumber), word: this.serversWord(Number(this.data.serverNumber))})

    this.selectCards[0].push([])

    this.firstSolutions.forEach(element => {
        this.selectCards[0][0].push({select: false})
    })

    this.secondSolutions.forEach(element => {
        this.selectCards[0][1].push({select: false})
    })

    this.solutionGroup.push({solution: this.firstSolutions})
  },
  methods: {
      serversWord(number) {
        switch(true) {
          case (number===1||(number>19&&number%10===1)): return 'сервер'
          case (number<5||(number>19&&number%10<5&&number%10>0)): return 'сервера'
          default: return 'серверов'
        }
      },
      addSolution(index) {
          this.solutionGroup.push({solution: this.firstSolutions})

          this.solutionConfigs.push(0)
          this.servers.push({servers: Number(this.data.serverNumber),
                             word: this.serversWord(Number(this.data.serverNumber))})
          this.dropdown.push({show: false})
          this.period.push({period: this.data.periods[0].attributes.period, periodNumber: 0})

          this.selectCards.push([[],[]])

          this.firstSolutions.forEach(element => {
              this.selectCards[index+1][0].push({select: false})
          })

          this.secondSolutions.forEach(element => {
              this.selectCards[index+1][1].push({select: false})
          })

          this.activeTab.push({tab: this.data.firstDisk})
          this.tabIndex.push({tab:0})

          this.items.push({item: null})

      },
      removeSolution() {
          this.solutionConfigs.pop()
          this.servers.pop()
          this.dropdown.pop()
          this.period.pop()
          this.selectCards.pop()
          this.activeTab.pop()
          this.solutionGroup.pop()
          this.tabIndex.pop()
          this.items.pop()
      },

      chooseCard(solutionNumber, i, item) {
        this.selectCards[solutionNumber][this.tabIndex[solutionNumber].tab].forEach(element => {
          element.select=false
        })
        this.selectCards[solutionNumber][this.tabIndex[solutionNumber].tab][i].select=true

        this.items[solutionNumber].item = item.attributes
      },

      changeDiscTab(index, tab) {
        this.activeTab[index].tab=tab

        if(tab===this.data.firstDisk) {
          this.tabIndex[index].tab=0
        } else {
          this.tabIndex[index].tab=1
        }

        this.solutionGroup[index].solution=this.solutions.filter(solution => solution.attributes.diskType===tab)

        this.selectCards[index][this.tabIndex[index].tab].forEach((item, i) => {
          if(item.select===true) {
            this.items[index].item = this.solutionGroup[index].solution[i].attributes
          }
        })

        if(this.selectCards[index][this.tabIndex[index].tab].every(item => item.select === false)) {
            this.items[index].item = null
        }

      },
      showTab(tab) {
        if(tab===1)
          this.tab=true
        if(tab===2)
          this.tab=false
      },
      serversSub(index) {
        if(this.servers[index].servers!==1) {
          this.servers[index].servers--
          this.servers[index].word=this.serversWord(this.servers[index].servers)
        }
      },
      serversAdd(index) {
        this.servers[index].servers++
        this.servers[index].word=this.serversWord(this.servers[index].servers)
      },
      showDropdown(index) {
        this.dropdown[index].show = !this.dropdown[index].show
      },
      choosePeriod(index, period, periodNumber, month) {
        this.period[index].period=period
        this.period[index].periodNumber=periodNumber
        this.period[index].month=month
      }
  },
}
</script>

<style scoped>
.btn_desktop_hide {
  display: none;
}

.tariff {
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: #fcf7f2;
  overflow: hidden;
}

.tariff__title {
  margin-bottom: 24px;
}

.tariff__text {
  opacity: 0.6;
}

.tariff__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.tariff__tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ede7e2;
  border-radius: 8px;
}

.tariff__tab-links {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  margin: 8px 31px 8px 24px;
  padding: 12px 24px;
  color: #000;
  background-color: transparent;
  cursor: pointer;
}
.tariff__tab-links--active {
  background-color: #fff;
  border-radius: 8px;
}
.tariff__common-wrapper {
  display: none;
}

.tariff__common-wrapper--active {
  display: block;
}

.tariff__wrapper-sample {
  display: flex;
  gap: 0 33px;
  margin-top: 15px;
  margin-bottom: 48px;
}

.tariff__tab-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 8px;
}

.tariff__tab-sample {
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ede7e2;
  border-radius: 8px;
}
.tariff__tab-sample-links {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 12px 16px;
  margin: 8px 16px 8px 40px;
  background-color: transparent;
  cursor: pointer;
}

.tariff__tab-sample-links--active {
  background-color: #fff;
  border-radius: 8px;
}

.tariff__dropdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ede7e2;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}

.tariff__dropdown-btn {
  display: flex;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 34px 20px;
  cursor: pointer;
}

.dropdown__icon {
  margin-right: 24px;
  transition: all 500ms ease-in-out;
}

.tariff__dropdown-content {
  width: 100%;
  position: absolute;
  top: 65px;
  z-index: 10;
  background-color: #ede7e2;
  border-radius: 8px;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: all 500ms ease-in-out;
}

.show__dropdown-content .tariff__dropdown-content {
  visibility: visible;
  opacity: 0.9;
  transition: all 500ms ease-in-out;
}

.show__dropdown-content .dropdown__icon {
  transform: rotate(180deg);
  transition: all 500ms ease-in-out;
}

.tariff__dropdown-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 6px 24px;
  transition: all 500ms ease-in-out;
}

.tariff__counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ede7e2;
  border-radius: 8px;
}

.counter__icon-minus,
.counter__icon-plus {
  cursor: pointer;
}

.tariff__counter-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  padding: 20px 39px;
}

.counter__icon-minus {
  margin-left: 24px;
}

.counter__icon-plus {
  margin-right: 24px;
}

[data-tabTariff-content] {
  display: none;
}

.tariff__wrapper-configuration {
  display: flex;
  align-items: flex-start;
  gap: 33px;
}

.tariff__wrapper-slider {
  display: none;
}

.tariff__configuration {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px 33px;
  flex: 1 1 50%;
  max-width: 850px;
}

.tariff__total {
  background-color: #fff;
  border-radius: 8px;
  padding: 48px 29px;
}

.tariff__wrapper-total-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}

.tarif__total-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

.tariff__total-card-text {
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

.tariff__total-wrap {
  display: flex;
  gap: 29px;
  margin-bottom: 48px;
}

.tariff__total-card-text--mod {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}

.tariff__btn {
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

.tariff__btn:hover {
  background-color: #660915;
}

.tariff__btn-download {
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

.tariff__btn-add {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  margin: auto;
}

.tariff__btn-add:hover {
  opacity: 0.4;
}

.clip__icon {
  fill: transparent;
  stroke: #878b99;
  margin-right: 8px;
}

.tariff__btn-download:hover > .clip__icon,
.tariff__btn-download:hover {
  fill: transparent;
  stroke: #000;
  color: #000;
}
.tariff__total-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}
.tariff__total-bottom-title {
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
.tariff__total-list {
  list-style-image: url(@/assets/img/total-item-active.png);
}
.tariff__total-item {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}


.radio__btn {
  display: none;
}

.radio__lebel {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #000;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  padding: 8px 50px;
  margin: 6px 16px;
}

/* Checked */

.radio__btn:checked + .radio__lebel {
  background: #1b5309;
  color: #fff;
  border-radius: 8px;
}

.container__tab-2 {
  width: 100%;
  max-width: 1440px;
  /* padding: 0 84px; */
  margin: 0 auto;
}
[data-tab-slider] {
  display: none;
}
.tariff__tab-sample--mobile {
  display: none;
}


.calculate__wrapper {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 62px;
    overflow: hidden;
}
.calculate__wrapper-left {
  width: 100%;
  max-width: 808px;
}
.calculate__configuration {
  background-color: #fff;
  flex: 1 1 calc((100% / 2) - 62px);
  padding: 48px 29px;
}
.calculate__form-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.calculate__input-text {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  color: #7c7c7c;
  margin-top: 10px;
  margin-bottom: 24px;
}
.calculate__last-configuration {
  margin-bottom: 32px;
}
.calculate__input-select {
  width: 100%;
  max-width: 518px;
}
.calculate__select {
  width: 100%;
  max-width: 518px;
  height: 48px;
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
  padding: 14px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}
.calculate__input {
  width: 100%;
  max-width: 518px;
  position: relative;
}
.calculate__input-number {
  width: 100%;
  max-width: 518px;
  height: 48px;
  padding: 14px 24px;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  outline: none;
}
.calculate__input-number::-webkit-inner-spin-button {
  display: none;
}

.calculate__input-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
}
.calculate__input-wrap-text {
  width: 100%;
  max-width: 402px;
}

.calculate__input-write {
  width: 100%;
  max-width: 257px;
  height: 48px;

  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 14px 24px;

  border: 1px solid #ede7e2;
  border-radius: 8px;
}
.calculate-input-radio {
  width: 100%;
  max-width: 518px;
  height: 48px;
  background-color: #fff;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.radio__btn {
  display: none;
}
.radio__lebel {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #000;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  padding: 8px 50px;
  margin: 6px 16px;
}
/* Checked */

.radio__btn:checked + .radio__lebel {
  background: #1b5309;
  color: #fff;
  border-radius: 8px;
}

.calculate__wrapper-btn-add {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
.calculate__btn-add {
  margin-left: 30px;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  background-color: transparent;
  cursor: pointer;
}
.calculate__btn-add:hover {
  opacity: 0.4;
}

.calculate__total {
  background-color: #fff;
  border-radius: 8px;
  padding: 48px 29px;
}
.calculate__total-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.calculate__wrapper-total-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.calculate__total-card-text {
  font-family: "Graphik", sans-serif;
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
.calculate__total-card-text--mod {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}
.calculate__btn {
  font-family: "Graphik", sans-serif;
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
  margin: 0 10px;
  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
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

.calculate__wrap-chechbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 26px;
  margin-top: 48px;
}
.calculate__checkbox {
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  padding-left: 28px;

  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  flex: 1 1 45%;
}
.calculate__checkbox-input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
.calculate__checkmark {
 position: absolute;
    top: 50%;
    left: 7px;
    height: 20px;
    width: 20px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #dfe1eb;
    border-radius: 3px;
    cursor: pointer;
}
.calculate__checkbox-input:checked ~ .calculate__checkmark {
  background-color: #1b5309;
}

.calculate__checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.calculate__checkbox-input:checked ~ .calculate__checkmark:after {
  display: block;
}
.calculate__checkmark:after {
  left: 6px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
.calculate__checkbox-helper {
  width: 16px;
  height: 16px;
  border: 1px solid #b0b0b0;
  background-color: #b0b0b0;
  border-radius: 50%;
  opacity: 1;
  margin-left: 4px;
  cursor: pointer;
}
.calculate__checkbox-helper-box {
  padding: 24px 16px;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: inherit;
}
.calculate__checkbox-helper-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 12px;
}
.calculate__checkbox-helper-link {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}
.calculate__checkbox-helper-wrap {
  position: absolute;
  left: 50%;
  margin-left: -161.5px;
  bottom: 90%;
  width: 343px;
  padding: 10px;
  opacity: 0;
  visibility: hidden;
}
.calculate__checkbox-helper:hover .calculate__checkbox-helper-wrap {
  opacity: 1;
  visibility: visible;
}

.calculate__wrapper {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 62px;
    overflow: hidden;
}

.calculate__configuration {
  background-color: #fff;
  flex: 1 1 calc((100% / 2) - 62px);
  padding: 48px 29px;
}



@media (max-width: 992px) {
  .tariff {
    padding-top: 48px;
    padding-bottom: 0;
  }
  .tariff__wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
  .tariff__total {
    display: none;
  }
  .tariff__total-bottom {
    display: none;
  }

  .tariff__wrapper-configuration {
    margin-bottom: 0;
  }
  .tariff__wrapper-text {
    margin-bottom: 48px;
  }
  .tariff__tab {
    width: 100%;
  }
  .tariff__wrapper-sample {
    flex-wrap: wrap;
  }
  .tariff__tab-sample-links {
    padding: 12px 50px;
  }
  .tariff__wrap-tab {
    width: 100%;
    margin-bottom: 24px;
  }
  .tariff__wrap-dropdown {
    width: 100%;
    margin-bottom: 24px;
  }
  .tariff__dropdown-btn {
    margin-left: 40%;
  }
  .tariff__wrap-counter {
    width: 100%;
  }
  .tariff__wrapper-configuration {
    flex-wrap: wrap;
  }
  .tariff__btn-add {
    margin: auto auto;
  }

  .container__tab-2 {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .radio__lebel {
    padding: 8px 45px;
  }
}

@media (max-width: 576px) {

.calculate__btn-add {
  margin-left: 0;
}

.btn_desktop_hide {
  display: block;
}


.btn_mobile_hide {
  display: none;
}

.tariff__wrapper-slider {
  display: block;
}

  .tariff__configuration {
    display: none;
  }

  .tariff__wrapper-configuration {
    display: none;
  }

  .tariff__ready-configuration-btn-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .tariff__wrapper {
    margin-bottom: 44px;
  }
  .tariff__tab {
    flex-wrap: wrap;
    justify-content: center;
  }
  .tariff__tab-sample {
    display: none;
    flex-direction: column;
  }
  .tariff__tab-sample--mobile {
    display: flex;
  }
  .tariff__tab-links {
    padding: 12px 45px;
  }
  .tariff__tab-sample-links {
    padding: 12px 40px;
    margin: 8px 16px;
  }
  .tariff__dropdown-btn {
    margin-left: 35%;
  }

}

@media (max-width: 393px) {
  .tariff__dropdown-btn {
    margin-left: 27%;
  }
  .container__tab-2 {
    padding: 0;
  }

}

@media (max-width: 360px) {
  .tariff__dropdown-btn {
    margin-left: 25%;
  }
}

::v-deep .p-slider {
    cursor: pointer;
}

::v-deep .p-slider .p-slider-range {
    background: #1b5309;
    cursor: pointer;
}

::v-deep .p-slider .p-slider-handle {
    height: 20px;
    width: 20px;
    background: #1b5309;
    border: 0 none;
    border-radius: 50%;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}

::v-deep .p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: #1b5309;
    border-color: 0 none;
}


@media (max-width: 992px) {

  .calculate__wrapper {
    justify-content: center;
    padding: 0;
  }
  .calculate__wrapper-right {
    display: none;
  }

  .tariff__wrapper-right {
    display: none;
  }
  .calculate__total-tablet {
    display: block;
  }
  .calculate__btn-add {
    margin-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .calculate__input-text {
    flex-direction: column;
    align-items: flex-start;
  }
  .calculate__total-tablet-container {
    padding: 24px 16px;
  }
  .calculate-input-radio {
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    height: 98px;
  }
  .calculate__checkmark{
    top:0%;
    left: 0;
    transform: translate(0);
  }
  .calculate__wrap-chechbox {
    flex-direction: column;
    align-items: flex-start;
  }
  .calculate__checkbox {
    margin-bottom: 12px;
  }
  .radio__lebel {
    padding: 8px 40px;
  }
}

@media (max-width: 576px) {
  .calculate__configuration {
    padding: 24px 16px;
  }
  .calculate__checkbox-helper {
    display: none;
  }

}
</style>
