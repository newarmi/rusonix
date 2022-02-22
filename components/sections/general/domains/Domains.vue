<template >
  <section :id="tag" class="domain">
    <div class="container">
      <h2 class="domain__title title">{{ title }}</h2>
      <div class="domain__text-wrap">
        <div class="domain__text text" v-html="description"></div>
      </div>
      <div class="domain__search">
        <div class="domain__search-wrap">
          <input v-model="domainString" type="text" placeholder="Введите имя домена, которое хотите зарегистрировать"
                 class="domain__search-input" @keyup.enter="checkIfNotNull" />
          <svg class="domain__icon" width="20" height="20" @click="checkIfNotNull">
            <use xlink:href="@/assets/svg/sprites.svg#search-domain"></use>
          </svg>
          <p class="info__message" :class="{'msg__show':load}">Подождите несколько секунд</p>
          <p class="error__message" :class="{'msg__show':error}">Ошибка запроса</p>
        </div>
      </div>
      <div class="domain__cards-wrapp">
        <div class="domain__cards">
          <div v-for="(item, index) in domainItems"
               :id = "'domains' + index + tag"
               :key="item.title"
               class="domain__card" :class="{'card__busy': item.status!=='free'}"
               @click="goToBilling(item.href)">
            <div class="domain__card-content">
              <span class="domain__card-title">{{ item.title }}</span>
              <span v-if="item.status==='free'" class="domain__card-text">{{ item.price | toTypePrice }}</span>
              <span v-if="domainAnswer" class="domain__card-status">{{ convertStatus(item.status) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="domain__sliders-wrapp">
        <Sliders :items="domainItems"/>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default {
  name: 'Domains',
  filters: {
    toTypePrice(val) {
      return `${val.toLocaleString('ru-RU')} ₽`
    }
  },
  components: {
    Sliders: () => import('@/components/sections/general/domains/Sliders')
  },
  props: {
    tag: {
      type: String,
      default: 'domains'
    },
    title: {
      type: String,
      default: 'Домены'
    },
    description: {
      type: String,
      default: 'Описание'
    }
  },
  data() {
    return {
      domainString: '',
      dom: '',
      load: false
    }
  },
  computed: {
    ...mapGetters(['domainTarriff', 'domainAnswer']),
    universalDomains() {
      return this.$store.getters['universal/domainTarriff']
    },
    error() {
      if(this.load) return false
      if(this.domainAnswer) return this.domainAnswer.error
      return this.domainAnswer
    },
    domainItems() {
      let domains = this.domainTarriff ? this.domainTarriff : this.universalDomains

      domains = domains.map(item => {
        return {
          title: item.title ? item.title : item.name,
          price: Math.floor(item.periods.find(Boolean).base_cost),
          status: 'free',
          href: 'https://my.rusonyx.ru/billmgr#/domain/order/register?page=pick',
          billing_id: item.billing_id
        }
      })

      if(this.domainAnswer&&!this.domainAnswer.error) {

        const filterDomains = this.domainAnswer.pricelist.map(item => {

            const el = domains.find(obj => obj.billing_id === item.id);
            let href = ''
            if(item.status==='free')
              href = 'https://my.rusonyx.ru/billmgr#/domain/order/register?domainName=' + this.dom + '&page=pick'
            return {
                  status: item.status,
                  price: item.price.period[0].cost,
                  href,
                  title: this.dom + el.title,
            }
          })
        return filterDomains
      }

      return domains
    },
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    ...mapActions(['checkBillingDomain']),
    scrollAnimation() {

      this.domainItems.forEach((item, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".domain__cards-wrapp",
            start: "top bottom",
            end: "center bottom",
            scrub: 3,
          }
        })
          .from('#domains' + index + this.tag, {y: innerHeight, opacity: 0, delay: 0.1 * index, ease: "back.out(1.0)"})
      })
    },
    checkIfNotNull() {
      if(this.domainString) {
        this.checkDomain()
      }
    },
    checkDomain() {
      this.domainString=this.domainString.trim().replaceAll(/ +/g, '-').toLowerCase()
      const point = this.domainString.indexOf('.')
      if(point!==-1)
      this.domainString = this.domainString.slice(0, point)

      if(this.dom !== this.domainString) {
        this.load = true
        this.checkBillingDomain(this.domainString).then(() => {
          this.dom = this.domainString
          this.load = false
        })
      }
    },
    convertStatus(status) {
      return status==='free' ? 'Купить' : 'Занят'
    },
    goToBilling(href) {
      if(href) {
         window.open(href, '_blank');
      }
    }
  }
}
</script>

<style scoped>

.domain {
  margin-top: 72px;
  margin-bottom: 72px;
}
.domain__title {
  margin-bottom: 24px;
}
.domain__text {
  max-width: 1145px;
}
.domain__text-wrap {
  margin-bottom: 96px;
}
.domain__search {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.domain__search-wrap {
  margin-bottom: 72px;
  position: relative;
}

.domain__search-input {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  width: 558px;
  height: 50px;
  border: 1px solid #dfe1eb;
  border-radius: 25px;
  padding: 15px 24px;
}

.error__message {
  font-family: "Graphik", sans-serif;
  font-size: 12px;
  color: crimson;
  margin: 5px 40%;
  display: none;
}
.info__message {
  font-family: "Graphik", sans-serif;
  font-size: 12px;
  color: black;
  margin: 5px 30%;
  display: none;
}


.msg__show {
  display: block;
}

@media (max-width: 500px) {
  .error__message {
    margin: 5px 35%;
  }
  .info__message {
    margin: 5px 20%;
  }
}


.domain__search-input::placeholder {
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}
.domain__search-input:focus {
  outline: none;
}
.domain__icon {
  fill: transparent;
  position: absolute;
  top: 15px;
  right: 24px;
  cursor: pointer;
}

.domain__sliders-wrapp {
  display: none;
}

.domain__cards-wrapp {
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
}

.domain__cards {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.domain__card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 228px;
  aspect-ratio: 1;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.09);
  margin-bottom: 24px;
  cursor: pointer;
  word-break: break-all;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 26px;
  color: #000000;
}

@media (max-width: 1150px) {
  .domain__card {
    max-width: 200px;
  }
}

@media (max-width: 1024px) {
  .domain__cards-wrapp {
    width: fit-content;
  }

  .domain__cards {
    justify-content: flex-start;
    margin: 0 auto 0 -33px;
  }

  .domain__card {
    max-width: 228px;
    margin-left: 26px;
    flex-basis: calc((100% - 99px) / 3);
  }

}

.domain__card-title {
  display: block;
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 24px;
}

.domain__card-text {
  display: block;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
}
.domain__card-status {
  display: block;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 24px;
}


@media (max-width: 768px) {
  .domain {
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .domain__text-wrap {
    margin-bottom: 46px;
  }
  .domain__search {
    align-items: flex-start;
  }
  .domain__search-wrap {
    width: 100%;
    margin-bottom: 48px;
  }
  .domain__search-input {
    width: 100%;
  }
  .domain__cards-wrapp {
    display: none;
  }
  .domain__sliders-wrapp {
    display: block;
  }
}

.card__busy {
  background-color: #FCF7F2;
  cursor: default;
}

</style>
