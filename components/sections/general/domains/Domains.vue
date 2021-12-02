<template>
  <section class="domain">
    <div class="container">

      <div class="domain__title title">{{ domainsInfo.title }}</div>
      <div class="domain__text-wrap">
        <p class="domain__text text">{{ domainsInfo.description }}</p>
      </div>

      <div class="domain__search">
        <div class="domain__search-wrap">
          <input type="text" placeholder="Введите имя домена, которое хотите зарегистрировать" class="domain__search-input" />
          <svg class="domain__icon" width="20" height="20">
            <use xlink:href="@/assets/svg/sprites.svg#search-domain"></use>
          </svg>
        </div>
      </div>

      <div class="domain__cards-wrapp">
        <div class="domain__cards">
          <div v-for="item in domainItems" :key="item.title" class="domain__card">
            <div class="domain__card-content">
              <span class="domain__card-title">{{ item.title }}</span>
              <span class="domain__card-text">{{ item.price | toTypePrice }}</span>
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
import Sliders from '@/components/sections/general/domains/Sliders'

export default {
  name: 'Domains',
  filters: {
    toTypePrice(val) {
      return `${val.toLocaleString('ru-RU')} ₽`
    }
  },
  components: {
    Sliders
  },
  props: {
    domains: {
      type: Object,
      required: true
    },
    tariffs: {
      type: Array,
      required: true
    }
  },
  computed: {
    domainItems() {
      const item = this.tariffs
      item.forEach(element => {
        element.price = Math.floor(element.periods.find(Boolean).base_cost)
      })
      return item
    },
    domainsInfo() {
      return this.domains
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
  justify-content: space-between;
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
    margin-left: 33px;
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


</style>
