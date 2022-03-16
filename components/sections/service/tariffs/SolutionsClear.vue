<template>
  <section :id="data.tag" class="tariff">
    <div class="container">
      <div class="tariff__title title">{{ data.title }}</div>
      <div class="tariff__wrapper">
        <div class="tariff__wrapper-text">
          <div class="tariff__text text" v-html="data.description" >
          </div>
        </div>
      </div>
      <div class="tariff__common-wrapper tariff__common-wrapper--active">
        <div v-for="(solution, s) in solutionConfigs" :key="'solution-' + s" class="ready__cofiguration">
          <div class="tariff__wrapper-sample">
            <div class="tariff__wrap-tab">
              <p class="tariff__tab-text">Тип диска</p>
              <div class="tariff__tab-sample">
                <div class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.firstDisk===activeTab[s].tab,
                              'ml-13' : !data.secondDisk}"
                    @click="changeDiscTab(s, data.firstDisk)">{{ data.firstDisk }}</div>
                <div v-if="data.secondDisk" class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.secondDisk===activeTab[s].tab}"
                    @click="changeDiscTab(s, data.secondDisk)">{{ data.secondDisk }}</div>
              </div>

              <div class="tariff__tab-sample tariff__tab-sample--mobile">
                <div class="tariff__tab-sample-links"
                    :class="{'tariff__tab-sample-links--active': data.firstDisk===activeTab[s].tab,
                              'ml-13' : !data.secondDisk}"
                    @click="changeDiscTab(s, data.firstDisk)">{{ data.firstDisk }}</div>
                <div v-if="data.secondDisk" class="tariff__tab-sample-links"
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
                  <li v-for="(onePeriod, p) in data.periods" :key="onePeriod.key"
                      :dropText="onePeriod.attributes.period"
                      class="tariff__dropdown-text" @click="choosePeriod(s, onePeriod.attributes.period, p, onePeriod.attributes.month)">
                      {{ onePeriod.attributes.period }}</li>
                </ul>
              </div>
            </div>

            <div v-if="data.isServer" class="tariff__wrap-counter">
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
              <SolutionCard v-for="(item, i) in solutionGroup[s].solution" :key="item.key"
                            :title="item.attributes.title"
                            :price="item.attributes.periodPrice[period[s].periodNumber].price"
                            :sale="item.attributes.periodPrice[period[s].periodNumber].sale"
                            :oldprice="item.attributes.periodPrice[period[s].periodNumber].oldPrice"
                            :economy="item.attributes.periodPrice[period[s].periodNumber].economy"
                            :options="item.attributes.options"
                            :choose="selectCards[s][tabIndex[s].tab][i].select"
                            @chooseCard="chooseCard(s, i, item)" />
            </div>

            <div v-if="solutionConfigs.length-s===1" class="tariff__wrapper-right">
              <Total :totalmonth="totalMonth" :bonus="bonuses" :mobile="false"
                     :items="clearItems" :link="link" :total="total" :economy="economy"
                      @createPDF="createPdf"/>
            </div>
          </div>
          <div v-if="solutionConfigs.length-s===1" class="calculate__wrapper-btn-add btn_mobile_hide">
            <button v-if="solutionConfigs.length<=1" class="calculate__btn-add" @click="addSolution(s)">+ добавить конфигурацию</button>
            <button v-if="solutionConfigs.length>1" class="calculate__btn-add" @click="removeSolution">- убрать конфигурацию</button>
          </div>

          <div class="tariff__wrapper-slider">
             <SolutionSlider :solutions="solutionGroup[s].solution" :period="period" :example="s" @chooseCard="chooseMobileCard($event, s)"/>
          </div>
          <div v-if="solutionConfigs.length-s===1" class="tariff__ready-configuration-btn-slider btn_desktop_hide">
             <button v-if="solutionConfigs.length<=1" class="tariff__btn-add" @click="addSolution(s)">+ добавить конфигурацию</button>
             <button v-if="solutionConfigs.length>1" class="tariff__btn-add" @click="removeSolution">- убрать конфигурацию</button>
          </div>
        </div>
      </div>

    </div>
    <div class="calculate__total-tablet">
      <Total :totalmonth="totalMonth" :bonus="bonuses" :mobile="true"
             :items="clearItems" :link="link" :total="total" :economy="economy"
              @createPDF="createPdf"/>
    </div>
  </section>
</template>

<script>
import { jsPDF as JsPDF  } from "jspdf";
import 'swiper/css/swiper.min.css'

export default {
  components: {
    SolutionCard: () => import('~/components/sections/service/tariffs/SolutionCard'),
    SolutionSlider: () => import('~/components/sections/service/tariffs/SolutionSlider'),
    Total: () => import('~/components/sections/service/tariffs/Total'),
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
      link() {
        if(this.items.length>1) {
          return 'https://my.rusonyx.ru/billmgr#/vds/order/list/basic'
        }
        if(!this.items[0].item) {
          return ''
        }
        if(this.items.length===1) {
          const type = this.items[0].item.type
          const period = this.period[0].month
          const id = this.items[0].item.billing_id
          return `https://my.rusonyx.ru/billmgr?startpage=`
                   + type + `&startform=` + type + `%2Eorder%2Eparam&pricelist=`
                   + id + `&period=` + period + `&project=3`
        }
        return ''
      },
      clearItems() {
          return this.items.map(item => {
            if(item.item) {
            const options = item.item.options.map(option => {
              return {
                option: option.attributes.option
              }
            })
            return {
              title: item.item.title,
              biling_id: item.item.billing_id,
              type: item.item.type,
              options,
            }
          } else {
            return {}
          }
          })
      },
      total() {
        const result = this.items.reduce((accum, a, i) => {
          if(a.item)
          return accum + Number(a.item.periodPrice[this.period[i].periodNumber].price)
          return accum
        }, 0)

        return Math.round(result)
      },
      economy() {
        const result = this.items.reduce((accum, a, i) => {
          if(a.item)
          return accum + Number(a.item.periodPrice[this.period[i].periodNumber].economy)
          return accum
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
      totalAll() {
        const result = this.items.reduce((accum, a, i) => {
          if(a.item)
          return accum + Number(a.item.periodPrice[this.period[i].periodNumber].price)
          return accum
        }, 0)
        return Math.round(result)
      },
      allBilling() {
        return this.$store.getters.billingTariffs
      },
      mode() {
        const tariffs = this.$store.getters.tariffs
        let mode  = ''
        tariffs.forEach(item => {
          if(item.layout === 'billing')
            mode =  item.attributes.mode
        })
        return mode
      },

      bonuses() {
        if(this.data.bonus.length) {
          return this.data.bonus[0].attributes
        }
        return {}
      },
      billingClear() {
        let billings = this.allBilling.filter(()=>{ return true })

        if(this.mode) {
          billings = billings.filter(item => {
            return item.mode?.find(obj => obj.attributes.title === this.mode)
          })
        }

        return billings.map(item => {

        if(item.options.length) {
          const options = item.options[0]

          return {
            layout: options.layout,
            key: options.key,
            attributes: {
                          billing_id: item.billing_id,
                          type: item.type,
                          oldPrice: options.attributes.oldPrice,
                          options: options.attributes.options,
                          title: options.attributes.title ? options.attributes.title : item.name,
                          diskType: options.attributes.diskType,
                          price: Math.round(item.periods[0].amount) + ' ₽ / месяц',
                          periodPrice: item.periods.map(period => {
                            return {
                                    period: period.period,
                                    price: Math.round(period.amount),
                                    sale: period.percent!=='0%',
                                    oldPrice: Math.round(period.full_cost),
                                    economy: Math.round(period.full_cost) - Math.round(period.amount)}
                          })
                        }
          }
        }
        return {}
      }).filter(item => Object.keys(item).length)
      },
      solutions() {
        let clearSolutions = []
        if(this.data.solutions.length)
        clearSolutions = this.data.solutions.map(item => {
          return {
            layout: item.layout,
            key: item.key,
            attributes: {
                title: item.attributes.title,
                diskType: item.attributes.diskType,
                options: item.attributes.options,
                price: item.attributes.periods[0].attributes.amount,
                periodPrice: item.attributes.periods.map(period => {
                    return {period: period.attributes.period,
                            price: Math.round(period.attributes.amount),
                            sale: period.percent!=='0%',
                            oldPrice: Math.round(period.full_cost),
                            economy: Math.round(period.full_cost) - Math.round(period.amount)}
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
      currentDate() {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ]
        return 'от '  + day + ' ' + months[month] + ' ' + year + ' г'
      },
      createPdf() {
        if(this.items[0].item) {
          const imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAMAAAExAAIAAAARAAAATgAAAAAAAJOjAAAD6AAAk6MAAAPocGFpbnQubmV0IDQuMi4xMwAA/9sAQwACAQEBAQECAQEBAgICAgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwECAgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK/8AAEQgAUASeAwEhAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/M+ivws/1cCigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACvf/8Agl1+yr8Pf22v26vA37MXxV1nWtP0HxN/af2+88P3EUV5H9n0y7u08tpopUGZIEByjZUsBg4I6cHRjiMZTpS2lJJ23s2keJxNmVfJeG8bmFBJzo0qlSKldpuEJSSaTTtda2adtmj9ff8AiFX/AOCe3/RY/jN/4UOk/wDyso/4hV/+Ce3/AEWP4zf+FDpP/wArK+//ANT8s/nn98f/AJE/kD/iZLjn/oHw3/gFX/5ccz8VP+DUf9ljUfDLxfBH9pH4gaPrK7jHP4qWx1K1f5TtUpBb2rr823Lb24z8uea/J39vL/gnn+0V/wAE8fikvw5+OmhQva3yvJ4f8SaYzSWGrQqQC0TkAq65G6NgGXI4IKsfBzzh1ZbR9vQk3HZ33Xnolp8j9c8K/GifGuYvK80pQp4hpuDhdQmlq42k5NSS1+JppPa1n4XRXyp+/BRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAV9l/8G+//ACl3+Ef/AHHv/TBqNd2V/wDIzof44/8ApSPk+PP+SGzT/sGr/wDpqR/TDXyV49/4Ll/8Ev8A4Y+Oda+G3jb9pT7HrXh/VbjTdWs/+ET1WTyLqCRopY9yWxVtrqwypIOOCRX6zjMwweXxUsRLlT20b/JM/wA9eGeDuIuMK1SllNH2kqaTkuaMbJuy+Jq+vY9V/ZQ/b3/ZJ/bfsdUvf2YvjLY+Jm0WRF1W0W1ntbm2D/cdobhEk2NggOFKkgjOQRWD/wAFNv2PPCv7b37GvjH4N6zo8dxqyaXLqHhK68tTLaapAheBkY42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FfNX/BHX9nS8/Ye/Z58Yfs5+M9ftGXR/irqz6HqMl5F/xMtNkitWtrobWwNycMP4XVlPINfqdWjGWYU8QuilF/OzX5P7z+B8vzPEU+D8blE4v36lKrFWe8eaMreqlH/wE/Cr/gsJcQXX/BTj40XFrOkkb+NJikkbBlYbE6EV811+TY7/AH6r/il+bP8AQjhO64VwCf8Az5pf+m4n9En/AATF/aM8Gf8ABT3/AIJL6n8CPiz4qtW8SWHhq68FeKGvrhfNc/ZytpekMwLFozG27OGkik54IFf/AIJuWvgv/gk9/wAEdb/4q/FxrG31+3t9S8S+ItLW8i82a+eTyLSzyvJZljto++GdsEjFfomGqU6qo4+T+GlK/quX/wC2P41zrA4vASzPhCjFr2uPo8is7ck1Us/l+6PwD+K/xP8AGXxq+Juv/F34h6vJfa54k1a41HVLqRiTJNK5dseignAHQAADgVz9fmc5yqTcpbt3P7jwuHo4PDQoUlaMEopdklZL7kfqt8av2BP2Uf2xP+CQ3g79rb9hz4L6Z4f+JWlzWq+LPD+j6hNJLqEysLS8gWOaVzkSlLhMc+XkcluMb/grn+yN+wv/AME8/wBhf4bfA/wf8PND1b42eJoYW17xhHqVxNPFFBtkvJ1QTGNBJOyQx5TBiEgAypI+uxOX4GnhamLUFyunBxV3pKWjtrut/mfzxkvF/FmMzzBcPVK8nWhjK8a0uWN5UKKU4p+7ZRmpOKas3y73PzCor48/o4KKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAK9c/YS/ZM1j9uX9qvwr+y1oPjK28P3fij7d5Or3lo08dv9msbi7OUVlLbhbleowWB7VthqLxOIhRTtzNK/q7Hl55mkclyXE5jKPMqNOdRpOzahFysn0va1z9Fv8AiEz+L3/R5Hhv/wAJS4/+PVxWmf8ABtfrup/tBav+zMv7bHhuLxVpHhWz8QtZyeFZ/wDSLC4nngEsf77nZJAVf08yP1r6yfCFSm4qVZau2z3s338j8Awv0jMDjIVZ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WC3jAjj64yBuIAyTiuzMuIMdmVP2c7Rj1S6+t2z5rgvwf4T4JxzxuG56tbVRlUabimrPlUYxSb72vZtXseU0V4Z+qGn4d8a+MvCHnf8ACJ+LdT0v7Rt8/wDs6/kg8zGcbthGcZOM+tZ0081zM1xcStJJIxaSR2JZmJ5JPc1XNJxSb0RnGjRhUlUjFKUt3ZXdtrvd2G0VJoFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFFABRQAUUAFdn+z7+0F8Xv2WPi9pHx4+A/i7+wfFmg/aP7K1X+z7e68jzreS3l/dXEckbbopZF+ZTjdkYIBGlKpUo1I1IOzi016rVHJj8Dhc0wNXB4mPNTqxlCSu1eMk4yV001dNq6aa6M+mP+Igj/AIK7/wDR2/8A5YWgf/IFfP8A+1N+2B+0V+2r8QbX4qftNfEP/hJtes9Kj022vv7JtLPZapJJIsey0iiQ4aVzuKlvm64AA9DF51mWOo+yr1Lx3taK/JI+O4f8M+COFcxWPyvCezqpNc3tKstHurTnJfgYXwL+O3xZ/Zp+Kmk/Gz4HeMptA8UaHM0mmapBDFKYiyMjAxyq0cilWZSrqykHkV9O/wDEQR/wV3/6O3/8sLQP/kCpweb5hl9N06E+VN3tZPX5pm3Enh3wbxfjI4vNsL7WpGPKnz1I+6m2l7k4p6t7q+p5h+1R/wAFO/23v22fBVl8Pv2n/jFbeKdK03UBe6fFJ4Q0m1kt59pXck1taxyqCpIKhtrcZBwMeB1zYrGYjHVva1neXeyW3oke5w/w7k/C+WrAZZT9nSTbUeaUrN6uznKT1etr2vfTUKK5j2gooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigD/2Q==\n'
          const currentDate = this.currentDate()

          const doc = new JsPDF()
          doc.addImage(imgData, 'JPEG', 10, 5, 189, 13)
          doc.setFont('PTSans-Regular', 'normal');
          doc.setFontSize(10);
          doc.text('Для заметок', 15, 25)
          let offset = 35
          doc.setLineWidth(0.2);
          doc.line(15, offset, 195, offset);
          offset+=10
          doc.line(15, offset, 195, offset);
          offset+=10
          doc.line(15, offset, 195, offset);
          offset+=10
          doc.setFontSize(14);
          doc.text('Ценовое предложение', (195-'Ценовое предложение'.length*2.3)/2, offset)
          offset+=8
          doc.text(currentDate, (195-currentDate.length*2.3)/2, offset)
          offset+=15
          doc.setFontSize(10);
          doc.text('Поставщик:', 15, offset)
          doc.text('ООО «РУСОНИКС», ИНН 7707301630, КПП 771401001, 125040, г. Москва,', 40, offset)
          offset+=5
          doc.text('5-ая улица Ямского поля, д.9, Помещение II, этаж 2, комната N 19', 40, offset)
          offset+=10
          doc.text('Поупатель:', 15, offset)
          doc.text('__________________________________________', 40, offset)
          offset+=10
          doc.setFontSize(10);
          doc.rect(15, offset, 180, 10)
          doc.rect(15, offset, 10, 10)
          doc.text('№', 20, offset + 6)
          doc.rect(15, offset, 70, 10)
          doc.text('Товары (работы, услуги)', 30, offset + 6)
          doc.rect(15, offset, 90, 10)
          doc.text('Период', 90, offset + 6)
          doc.rect(15, offset, 120, 10)
          doc.text('Цена за мес.', 110, offset + 6)
          doc.text('Сумма с НДС', 140, offset + 6)
          offset+=10

          this.items.forEach((element, index) => {
            if(element.item) {
              doc.rect(15, offset, 180, 45)
              doc.rect(15, offset, 10, 45)
              doc.text((index + 1) + '', 20, offset + 6)
              doc.rect(15, offset, 70, 45)
              doc.text('Тариф: ' + element.item.title, 30, offset + 6)
              doc.text('Тип диска: ' + element.item.diskType, 30, offset + 12)
              doc.text('Количество серверов: ' + this.servers[index].servers, 30, offset + 18)
              doc.text('Характеристики:', 30, offset + 24)
              let tempOffset = offset + 30
              element.item.options.forEach(option => {
                doc.text(option.attributes.option, 35, tempOffset)
                tempOffset+=5
              })

              const month = this.period[index].month
              const price = element.item.periodPrice[this.period[index].periodNumber].price
              const priceMonth = Math.round(price/month)

              doc.rect(15, offset, 90, 45)
              doc.text(month + ' мес.', 90, offset + 6)
              doc.rect(15, offset, 120, 45)
              doc.text(priceMonth + ' ₽', 110, offset + 6)
              doc.text( price + ' ₽', 140, offset + 6)
              offset+=45
              }
            })

            offset+=10

            doc.setFontSize(14);
            const total = 'Всего к оплате: ' + this.totalAll + ' ₽'
            doc.text(total, 195-total.length*2.3, offset)
            offset+=10
            doc.setDrawColor(255, 236, 168)
            doc.setFillColor(255, 236, 168)
            doc.rect(15, offset, 180, 20, 'FD')
            const attension = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVEhLtZY7aBRRFIbPPDab3dnNprCILEYWwULRStAgi3mIlnap0mxaQYR0KmKXpDMEJa34KMRaTMAoNoEVQVDELXw0C0JEm83i7M7M9T97T4okO3PHBD84nHvv3Pv/M3PuPCwyEEXRcaTLiCml1FnkQ7Ztuxhvov3WsqxX3W53PZvNfkT/34BIFfEc4UM8EczpIj1FHpPlZoIguB2GoVF8NzBpIW6ITH8wIYt4IGv2DWuI5F5w9ssy78DA6JTIUq/wGPCQrqCIj7kfx6+NDfqxttZb5FUqdGRmhizb1gd3AZ/30KsiWr0BmFxDfNXnEE9jfl49wnqciXp9bkxFYShH+gPNm6xvo51Hvg7HCg8kkR0ZoRzyACI3Ohp7FdtA+yqMcmwymcaAcT1P31+QKRakFQ+ep8Oo8wSfykU9ZMYtFMhyHFJoO3kuoxnHcS6xSVV3zTh53Fnb0W0YpmSSTU7othkXZ79dB9fjUppBOY7ZqMeg9I24pSGyXLdXF7dY1IMGUJe8jeq3pW/EQeHDrRYFaFsZ3mNmoO/zlXyRvpGB4WE6WpulyvQ0DZ1Md5eh/4md7uK+/Tegv8RVXNWeZvzNTfowN0fvajX6Xa/LqJGXXP1BuDW1bzKNhQX1BBuG4834hIqCQI70B7rfkQpckz9wu48Of+kSyZRKpDcwXivlMm8d6cWyBH39gmQ3uM6yexJBu62+rayoxuKiajeTLx56daS9TyzeM/f0lIPj+/5pkd0J3PnL+FDm7RvWEMl4MOkWYkvWpAZr+L/gjsiYwYLziGeI5C0EMKeDeNHpdC7I8h2k+e/ib/UUYhxxBrulzMbIP9Hnh2Ud7VXEZ7T7QPQXHI/kjAPkNEEAAAAASUVORK5CYII='
            doc.addImage(attension, 'JPEG', 20, offset+5, 6, 6)
            doc.setFontSize(10);
            const textDoc = 'Данный документ является ценовым предложением и не предназначен для оплаты.'
            doc.text(textDoc, 28, offset + 9)
            const textTov = 'Для приобретения товара и получения окончательной цены, необходимо завершить оформление заказа.'
            doc.text(textTov, 28, offset + 14)

            doc.setDrawColor(174, 0, 1)
            doc.setFillColor(174, 0, 1)
            doc.rect(10, 280, 190, 5, 'FD')
            doc.save("rusonyx.pdf")
        }
      },
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
          this.period.push({period: this.data.periods[0].attributes.period, periodNumber: 0, month: 1})

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
      chooseMobileCard(item, solutionNumber) {
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

.ml-13 {
  margin-left: 13px;
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
