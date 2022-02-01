<template>
   <section :id="data.tag" class="calculate" :class="data.tag" >
    <div class="container">
      <h1 class="calculate__title title">{{data.title}}</h1>
    </div>
        <div class="calculate__wrapper">
          <div v-for="config, c in configValues" :key="'config' + c" class="calculate__wrapper-left">
      
            <div class="calculate__configuration">
              <form action="#" class="calculate__form">
                <div class="calculate__form-title">Конфигурация</div>
                <div v-for="item in data.fields" :key="item.key + 'topField'">

                  <div v-if="item.layout==='listOption'" class="calculate__input-text">{{ item.attributes.option }}
                    <div class="calculate__input-select">
                      <select v-model="config.selects[item.attributes.index]" class="calculate__select" >
                        <option v-for="option in item.attributes.list" :key="option.key" :value="option.attributes">{{ option.attributes.listItem }}</option>
                      </select>
                    </div>
                  </div>

                  <div v-if="item.layout==='setting'" class="calculate__input-text">{{ item.attributes.title }}
                    <div class="calculate__input">
                      <input v-model="config.settings[item.attributes.index].value" class="calculate__input-number" type="number"  />
                      <Slider v-model="config.settings[item.attributes.index].value" 
                              :min="Number(item.attributes.min)" 
                              :max="Number(item.attributes.max)" />
                    </div>
                  </div>

                  <div v-if="item.layout==='checkbox'" class="calculate__wrap-chechbox">
                    <label v-for="checkbox, i in item.attributes.checkboxes" :key="checkbox.key" 
                     class="calculate__checkbox">{{ checkbox.attributes.title }}
                      <input v-model="config.flags[i].isTrue" class="calculate__checkbox-input" type="checkbox" />
                      <span class="calculate__checkmark"></span>
                      <div v-if="checkbox.attributes.help" class="calculate__checkbox-helper">
                        <div class="calculate__checkbox-helper-wrap">
                          <div class="calculate__checkbox-helper-box">
                            <p class="calculate__checkbox-helper-text">
                              {{ checkbox.attributes.help }}
                            </p>
                            <a v-if="checkbox.attributes.linkName" :href="checkbox.attributes.link" class="calculate__checkbox-helper-link">
                              {{ checkbox.attributes.linkName }}
                            </a>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div v-if="item.layout==='field'" class="calculate__input-text calculate__last-configuration">
                    <div class="calculate__input-wrap-text">{{ item.attributes.title }}
                    </div>
                    <div class="calculate__input--mod">
                      <input v-model="config.fields[item.attributes.index].value" class="calculate__input-write" type="text" />
                    </div>
                  </div>
                  
                </div>

                <div v-for="item in data.fields" :key="item.key + 'diskField'">
                  
                  <div v-if="item.layout==='disk'">
                      <div v-for="oneDisk, k in config.disks" :key="oneDisk.key">
                        <div class="calculate__form-title">{{ item.attributes.title + ' ' + (k +1)}}</div>
                          <div v-for="field in item.attributes.fields" :key="field.key">
                            <div v-if="field.layout==='radio'" class="calculate__input-text">{{field.attributes.title}}
                                <div class="calculate-input-radio">
                                    <div v-for="radio, i  in field.attributes.list" :key="radio.key" class="radio__wrapper-btn-1">
                                        <input :id="'radio-' + i + k + c" v-model="config.disks[k].price"
                                               class="radio__btn" type="radio" :name="'radio' + k + c" :value="radio.attributes.price" :checked="i===0" />
                                        <label class="radio__lebel" :for="'radio-' + i + k + c">{{ radio.attributes.listItem }}</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="field.layout==='setting'" class="calculate__input-text">{{ field.attributes.title }}
                                <div class="calculate__input">
                                    <input v-model="config.disks[k].amount" class="calculate__input-number" type="number"  />
                                    <Slider v-model="config.disks[k].amount" 
                                            :min="Number(field.attributes.min)" 
                                            :max="Number(field.attributes.max)"/>
                                </div>
                            </div>
                      
                          </div>    
                      </div>
                         <div class="calculate__btn-disk" @click="addDisk(c)">+ добавить диск</div>
                         <div v-if="config.disks.length>1" class="calculate__btn-disk" @click="removeDisk(c)">- убрать диск</div>      
                     </div>
                  </div>
              </form>
            </div>           
          </div>
          <div class="calculate__wrapper-right">
            <Total :total="total" :bonus="bonus" :mobile="false" 
                   :items="clearFields" 
                   :button="data.button" :link="data.link"
                   @createPDF="createPdf"/>
          </div>

        </div>
        <div class="calculate__wrapper-btn-add">
            <button class="calculate__btn-add" @click="addConfiguration()">+ добавить конфигурацию</button>
            <button v-if="configValues.length>1" class="calculate__btn-add" @click="removeConfiguration()">- убрать конфигурацию</button>
        </div>

        <div class="calculate__total-tablet">
          <Total :total="total" :bonus="bonus" :mobile="true" 
                 :items="clearFields"  
                 :button="data.button" :link="data.link"
                 @createPDF="createPdf" />
        </div>
      </section>
</template>

<script>
import { jsPDF as JsPDF  } from "jspdf";
import Slider from 'primevue/slider';

export default {
  name: 'Calculate',
  components: {
    Slider,
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
        firstDisk: null,
        configValues: [{
          selects: [],
          flags: [],
          fields: [],
          settings: [],
          disks:[]
        }],
        bonus: null
    }
  },
  computed: {
      clearFields() {
        return this.configValues.map(config => {
          let options = []
          
          const selects = config.selects.map(select => {
            return {
              option: select.listItem
            }
          })

          const fields = config.fields.map(field => {
            return {
              option: field.name + ': ' + field.value
            }
          })

          const flags = config.flags.map(flag => {
            if(flag.isTrue) {
            return {
              option: flag.name
            }
            } else {
              return {}
            }
          }).filter(item => Object.keys(item).length)

          const settings = config.settings.map(setting => {
            return {
              option: setting.name + ': ' + setting.value
            }
          })

          const disks = config.disks.map(disk => {
            return {
              option: ' ' + disk.title + ': ' + disk.amount
            }
          })

          options = options.concat(selects, settings, flags, fields, disks)

          return {
            title: 'Конфигурация',
            options
          }
        })
      },
      fields() {
        return this.data.fields
      },
      key(){
        return this.fields[0]
      },
      total() {
        let selects = 0
        let flags = 0
        let settings = 0
        let disks = 0
        let fields = 0
        let total = 0

        this.configValues.forEach(item => {
          selects = item.selects.reduce((accum, a) => {
            return accum + Number(a.price)
          }, 0)

          fields = item.fields.reduce((accum, a) => {
            return accum + Number(a.value)
          }, 0)

          flags = item.flags.reduce((accum, a) => {
            if(a.isTrue) { 
              return accum + a.value
            } 
            return accum
          }, 0)

          settings = item.settings.reduce((accum, a) => {
              return accum + (a.value * a.price)
          }, 0)

          disks = item.disks.reduce((accum, a) => {
              return accum + (a.amount * a.price)
          }, 0)

          total+=Number(selects) + Number(flags) + Number(settings) + Number(disks) + Number(fields)
        })

        return Number(this.data.basePrice) + Number(total)
      },

  },
  watch: {
    key(){
      this.init()
    }
  },
  created() {
    this.init()
  },
  methods: {
    createPdf() {
          const doc = new JsPDF()
          doc.setFont('PTSans-Regular', 'normal');
          doc.setFontSize(22);
          doc.text('RUSONYX', 90, 10)
          doc.setFontSize(14);
          doc.text('Расчет стоимости тарифа', 80, 20)
          let offset = 25
          this.clearFields.forEach(element => {
              doc.setLineWidth(0.5);
              doc.line(10, offset, 200, offset);
              offset+=10
              doc.text(element.title, 10, offset)
              element.options.forEach(option => {
                offset+=5
                doc.text(option.option, 15, offset)
              })
              offset+=10
            })
            doc.line(10, offset, 200, offset);            
            offset+=10
            doc.text('Оплата: ' + this.total + ' ₽', 10, offset)       
            doc.save("rusonyx.pdf")
    },
    init() {
      let i=0
      let j=0
      let k=0
      let f=0

      this.fields.forEach(field => {
        if(field.layout==='bonus') {
          this.bonus = field.attributes
        }

        if(field.layout==='listOption') {
          field.attributes.index=k
          this.configValues[0].selects.push({ price: Number(field.attributes.list[0].attributes.price), 
                                              listItem: field.attributes.list[0].attributes.listItem})              
          k++
        }

        if(field.layout==='field') {
          field.attributes.index=f
          this.configValues[0].fields.push({value: Number(field.attributes.default), 
                                            price: Number(field.attributes.price), 
                                            name: field.attributes.title})
          f++
        }

        if(field.layout==='checkbox') {
          field.attributes.checkboxes.forEach(item => {
            this.configValues[0].flags.push({value: Number(item.attributes.price), 
                                              isTrue: false, 
                                              name: item.attributes.title})
          })
        }

        if(field.layout==='setting') {
          field.attributes.index=i
          this.configValues[0].settings.push({value: Number(field.attributes.default), 
                                              price: Number(field.attributes.price),
                                              name: field.attributes.title})
          i++
        }

        if(field.layout==='disk') {
          let price
          this.firstDisk = field.attributes.fields
          this.firstDisk.forEach(disk => {
            if(disk.layout==='radio') {
              price = disk.attributes.list[0].attributes.price
            }

            if(disk.layout==='setting') {
              disk.attributes.index=j
              this.configValues[0].disks.push({amount: Number(disk.attributes.default), 
                                               title: disk.attributes.title,
                                               price})
              j++
            }
          })
        }
      });
    },
    addDisk(index) {
      let price
      this.firstDisk.forEach(disk => {
            if(disk.layout==='radio') {
              price = disk.attributes.list[0].attributes.price
            }
           if(disk.layout==='setting') {
             this.configValues[index].disks.push({amount: Number(disk.attributes.default), 
                                                  title: disk.attributes.title,
                                                  price})
           }
      })
    },
    removeDisk(index) {
      this.configValues[index].disks.pop()
    },
    addConfiguration() {
      let lastIndex
      this.configValues.push({selects: [], flags: [], fields: [], settings: [], disks: []})
      
        this.fields.forEach(field => {   
          lastIndex = this.configValues.length-1

          if(field.layout==='listOption') {
            this.configValues[lastIndex].selects.push({ 
                                                        price: Number(field.attributes.list[0].attributes.price),
                                                        listItem: field.attributes.list[0].attributes.listItem})  
          }

          if(field.layout==='setting') {
            this.configValues[lastIndex].settings.push({value: Number(field.attributes.default), 
                                                        price: Number(field.attributes.price),
                                                        name: field.attributes.title})
          }

          if(field.layout==='field') {
            this.configValues[lastIndex].fields.push({value: Number(field.attributes.default), 
                                                      price: Number(field.attributes.price), 
                                                      name: field.attributes.title})
          }

          if(field.layout==='checkbox') {
                field.attributes.checkboxes.forEach(item => {
                this.configValues[lastIndex].flags.push({value: Number(item.attributes.price), 
                                                         isTrue: false, 
                                                         name: item.attributes.title})
            })
          }

          if(field.layout==='disk') {  
            let price
            this.firstDisk = field.attributes.fields
            this.firstDisk.forEach(disk => {
            if(disk.layout==='radio') {
              price = disk.attributes.list[0].attributes.price
            }

            if(disk.layout==='setting') {
              this.configValues[lastIndex].disks.push({amount: Number(disk.attributes.default), 
                                                       title: disk.attributes.title,
                                                       price})
            }
          })
          }
      });

    },
    removeConfiguration() {
      this.configValues.pop()
    }
  }
}
</script>

<style scoped>
.calculate {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;

}
.calculate__title {
  margin-bottom: 48px;
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

.calculate__input-range {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  max-width: 518px;
  pointer-events: none;
}
.calculate__input-range,
.calculate__input-range::-webkit-slider-runnable-track,
.calculate__input-range::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.calculate__input-range::-webkit-slider-runnable-track {
  height: 3px;
  background: linear-gradient(to right, #1b5309, #1b5309), #ede7e2;
  background-size: var(--background-size2, 0%) 100%;
  background-repeat: no-repeat;
  border-radius: 8px;
}
/* точка input range*/


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
.calculate__input-text--mod {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
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
.calculate__btn-disk {
  display: inline-block;
  margin-right: 30px;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
  cursor: pointer;
}
.calculate__btn-disk:hover {
  opacity: 0.4;
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
  margin: 0 auto;
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