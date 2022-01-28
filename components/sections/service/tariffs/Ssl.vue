<template>
  <section :id="ssl.tag" class="sertificate" :class="ssl.tag">
    <div class="container">
      <div class="sertificate__title title">{{ title }}</div>
      <div class="sertificate__wrapper">
        <div class="sertificate__wrapper-first">
          <div class="sertificate__wrapper-left">
            <div class="sertificate__wrap-left">
              <div class="sertificate__mode-title">{{filters[0]}}</div>
              <div class="sertificate__custom-radio">
                <div v-for="radio, i in ssl.filter1" :key="radio.key" class="sertificate__custom-radio-wrap">
                  <input :id="'custom-radio-first-' + i" v-model="filterValues[0].filter" class="custom-radio" type="radio" name="custom-radio-1" :value="radio.attributes.filterValue" />
                  <label class="custom__radio-label" :for="'custom-radio-first-' + i">{{ radio.attributes.filterValue }}</label>
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input id="custom-radio-first-all" v-model="filterValues[0].filter" class="custom-radio" type="radio" name="custom-radio-1" value="all" checked="checked" />
                  <label class="custom__radio-label" for="custom-radio-first-all">Любое</label>
                </div>
              </div>
            </div>
          </div>

          <div class="sertificate__wrapper-right">
            <div class="sertificate__wrap-right">
              <div class="sertificate__mode-title">{{filters[1]}}</div>
              <div class="sertificate__custom-radio">
                <div v-for="radio, i in ssl.filter2" :key="radio.key"  class="sertificate__custom-radio-wrap">
                  <input :id="'custom-radio-second-' + i" v-model="filterValues[1].filter" class="custom-radio" type="radio" name="custom-radio-2" :value="radio.attributes.filterValue" />
                  <label class="custom__radio-label" :for="'custom-radio-second-' + i">{{ radio.attributes.filterValue }}</label>
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input id="custom-radio-second-all" v-model="filterValues[1].filter" class="custom-radio" type="radio" name="custom-radio-2" value="all" checked="checked" />
                  <label class="custom__radio-label" for="custom-radio-second-all">Любой</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sertificate__wrapper-second">
          <div class="sertificate__wrapper-left">
            <div class="sertificate__wrap-left">
              <div class="sertificate__mode-title">{{filters[2]}}</div>
              <div class="sertificate__custom-radio">
                <div v-for="radio, i in ssl.filter3" :key="radio.key" class="sertificate__custom-radio-wrap">
                  <input :id="'custom-radio-third-' + i" v-model="filterValues[2].filter" class="custom-radio" type="radio" name="custom-radio-3" :value="radio.attributes.filterValue" />
                  <label class="custom__radio-label" :for="'custom-radio-third-' + i">{{ radio.attributes.filterValue }}</label>
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input id="custom-radio-third-all" v-model="filterValues[2].filter" class="custom-radio" type="radio" name="custom-radio-3" value="all" checked="checked" />
                  <label class="custom__radio-label" for="custom-radio-third-all">Любой</label>
                </div>
              </div>
            </div>
          </div>

          <div class="sertificate__wrapper-right">
            <div class="sertificate__wrap-right">
              <div class="sertificate__mode-title">{{filters[3]}}</div>
              <div class="sertificate__custom-radio">
                <div v-for="radio, i in ssl.filter4" :key="radio.key" class="sertificate__custom-radio-wrap">
                  <input :id="'custom-radio-fourth-' + i" v-model="filterValues[3].filter" class="custom-radio" type="radio" name="custom-radio-4" :value="radio.attributes.filterValue" />
                  <label class="custom__radio-label" :for="'custom-radio-fourth-' + i">{{ radio.attributes.filterValue }}</label>
                </div>           
                <div class="sertificate__custom-radio-wrap">
                  <input id="custom-radio-fourth-all" v-model="filterValues[3].filter" class="custom-radio" type="radio" name="custom-radio-4" value="all" checked="checked" />
                  <label class="custom__radio-label" for="custom-radio-fourth-all">Любой</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sertificate__buy-wrapper-title">
        <div v-for="option in mainOptions" :key="option" class="sertificate__buy-title">{{option}}</div>
      </div>
      
      <SslLine v-for="certificate in filtered" :key="certificate.key" :certificate="certificate"/>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Lines',
  components: {
    'SslLine': () => import('~/components/sections/service/tariffs/SslLine'),
  },
  props: {
    ssl: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mainOptions: ['Сертификат', 'Поставщик', 'Уровень', 'Стоимость за 1 год'],
      filters: ['Для чего подходит сертификат', 'Уровень доверия', 'Сертификационный центр', 'Дополнительные домены'],
      filterValues: [{filter: 'all'}, {filter: 'all'}, {filter: 'all'}, {filter: 'all'}]
    }
  },
  computed: {
      ...mapGetters('universal', ['filterType', 'filterValue']),
      allBilling() {
        return this.$store.getters['universal/billingTariffs']
      },
      billingClear() {
        return this.allBilling.map(item => {
        if(item.options) {
            const options = item.options[0]

            return {
              layout: options.layout,
              key: options.key,
              attributes: {
                            type: item.type,
                            billing_id: item.billing_id,
                            logo: options.attributes.logo,
                            provider: options.attributes.provider,
                            forWhat: options.attributes.forWhat,
                            domains: options.attributes.domains,
                            level: options.attributes.level,
                            description: options.attributes.description,
                            options: options.attributes.options,
                            title: item.title ? item.title : item.name,
                            price: Math.round(item.periods[0].amount) + ' ₽',
                            oldPrice: item.periods[0].percent==="0%" ? '' : Math.round(item.periods[0].full_cost) + ' ₽'
                        }
            }
          } else {
            return {}
          }
      }).filter(item => Object.keys(item).length)
      },
      title() {
        return this.ssl.filterTitle
      },
      certificates() {
        if(this.ssl.certificates.length)
        return this.ssl.certificates[0].attributes.certificates.concat(this.billingClear)
        return this.billingClear
      },
      filterDomens () {
        if(this.filter4==='all') {
          let all = ''
          this.ssl.filter4.forEach(element => {
            all += element.attributes.filterValue + ' '
          });
          return all
        }
        return this.filter4
      },
      filtered () {
        let filtered = this.certificates
        const finish = [];
        if(this.filterValues[0].filter!=='all') filtered = filtered.filter(certificates => this.filterValues[0].filter === certificates.attributes.forWhat)
        if(this.filterValues[1].filter!=='all') filtered = filtered.filter(certificates => this.filterValues[1].filter === certificates.attributes.level)
        if(this.filterValues[2].filter!=='all') filtered = filtered.filter(certificates => this.filterValues[2].filter === certificates.attributes.provider)
        if(this.filterValues[3].filter!=='all') filtered = filtered.filter(certificates => this.filterValues[3].filter === certificates.attributes.domains)

        filtered.forEach(element => {
          if(element.attributes.oldPrice)
          finish.push(element)
        })

        filtered.forEach(element => {
          if(!element.attributes.oldPrice)
          finish.push(element)
        })
        
        return finish
      }
      
  },
  created() {
        if(this.filterValue) {
           this.filterValues[this.filterType].filter = this.filterValue
        }
  },
}
</script>

<style scoped>
.sertificate {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.sertificate__title {
  margin-bottom: 36px;
}
.sertificate__mode-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 24px;
}
.sertificate__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 36px;
}
.sertificate__wrapper-first,
.sertificate__wrapper-second {
  display: flex;
  gap: 80px;
}
.sertificate__custom-radio {
  display: flex;
  flex-direction: column;
}
.sertificate__custom-radio-wrap {
  margin-bottom: 12px;
}
.custom__radio-label {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
}
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-radio + .custom__radio-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.custom-radio + .custom__radio-label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-radio:checked + .custom__radio-label::before {
  border-color: #1b5309;
  background-color: #1b5309;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.sertificate__buy-wrapper-title {
  display: flex;
  margin-bottom: 16px;
}
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(1) {
  flex: 0 0 30%;
  margin-left: 20px;
 
}
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(2) {
  flex: 0 1 18%;
}
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(3) {
  flex: 0 1 14%;
}

.sertificate__buy-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}
.sertificate__buy-wrapper {
  margin-bottom: 8px;
}
.sertificate__buy-wrapper-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
}

.sertificate__content-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.sertificate__content {
  display: flex;
  gap: 60px;
  align-items: center;
}
.sertificate__content-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.sertificate__content-total {
  display: flex;
  gap: 24px;
  align-items: center;
}
.sertificate__total {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.sertificate__total-old {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.2;
}
.sertificate__total-old--mod {
  position: relative;
}
.sertificate__total-old--mod::before {
  content: "";
  display: block;
  position: absolute;
  left: 24px;
  bottom: 0;
  width: 66px;
  height: 2px;
  background-color: #830f1e;
  transform: rotate(-10deg);
}
.sertificate__btn {
  width: 100%;
  max-width: 207px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  background: #830f1e;
  border-radius: 6px;
  padding: 14px 36px;
  cursor: pointer;
}
.sertificate__btn:hover {
  background-color: #660915;
}
.sertificate__buy-wrapper-info {
  padding: 40px 24px;
  background-color: #fff;
}
.show__sertificate__buy-wrapper-info {
  display: block;
}
.hide__sertificate__buy-wrapper-info {
  display: none;
}
.sertificate__info-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
}
.sertificate__info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 40px;
}
.sertificate__buy--mod {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.8;
}
.sertificate__info-wrap-left {
  display: flex;
  gap: 60px;
}
.sertificate__info-wrap-right {
  display: flex;
  gap: 47px;
}

.sertificate__info-left {
  display: flex;
  flex-direction: column;
}
.sertificate__info-left-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 20px;
}
.sertificate__info-left-text:last-child {
  margin-bottom: 0;
}
.sertificate__info-right {
  display: flex;
  flex-direction: column;
}
.sertificate__info-right-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 20px;
}
.sertificate__info-right-text:last-child {
  margin-bottom: 0;
}
.sertificate__info-wrap-left--mobile,
.sertificate__info-wrap-right--mobile {
  display: none;
}
.sertificate__info-left-text--mobile,
.sertificate__info-right-text--mobile {
  margin-bottom: 0;
}
.sertificate__info-mobile-left,
.sertificate__info-mobile-right {
  margin-bottom: 12px;
}

.sertificate__buy-info--active {
  display: block;
}

@media (max-width: 1315px) {
  .sertificate__info-wrap {
    gap: 20px;
  }
}
@media (max-width: 1300px) {
  .sertificate__buy-wrapper-content {
    flex-direction: column;
    gap: 24px;
  }
  .sertificate__buy-wrapper-title {
    display: none;
  }
  .sertificate__btn {
    max-width: 311px;
  }
}
@media (max-width: 992px) {
  .sertificate__wrapper {
    gap: 48px;
  }
}
@media (max-width: 768px) {
  .sertificate__wrapper {
    margin-bottom: 48px;
  }
}
@media (max-width: 600px) {
  .sertificate__info-wrap {
    gap: 12px;
  }
  .sertificate__info-wrap-left,
  .sertificate__info-wrap-right {
    display: none;
  }
  .sertificate__info-wrap-left--mobile,
  .sertificate__info-wrap-right--mobile {
    display: block;
  }
}
@media (max-width: 576px) {
  .sertificate__wrapper {
    gap: 16px;
  }
  .sertificate__wrapper-first {
    flex-direction: column;
    gap: 16px;
  }
  .sertificate__wrapper-second {
    flex-direction: column;
    gap: 16px;
  }
}




</style>
