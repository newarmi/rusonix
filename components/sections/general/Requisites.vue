<template>
  <section class="requisites">
    <div class="container">
      <div class="requisites__title title">
        {{ requisites.title }}
      </div>
      <div class="requisites__wrapper">
        <div v-for="item in requisitesItems" :key="item.title" class="requisites__info">
          <a href="#" class="requisites__link">
            <picture class="picture">
              <img
                :src="item.imageLink"
                :srcset="item.imageLink"
                alt="requisites-file"
                class="requisites__img"
              />
            </picture>
          </a>
          <div class="requisites__info-title">
            <nuxt-link :to="'/company/' + item.link" class="nl__black">{{ item.title }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Requisites',
  props: {
    requisites: {
      type: Object,
      required: true
    }
  },
  computed: {
    requisitesItems () {
      const requisities = this.requisites.sections
      requisities.forEach(element => {
        element.imageLink = this.$config.imgURL + element.image
      });
      return requisities
    }
  }
}
</script>

<style scoped>

.nl__black {
  color: black;
}

.requisites {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 40px;
}
.requisites__title {
  margin-bottom: 72px;
}
.requisites__wrapper {
  display: flex;
  flex-wrap: wrap;
}
.requisites__info {
  margin-right: 33px;
  margin-bottom: 48px;
}
.requisites__img {
  background-color: #fff;
  padding: 80px 81px;
  margin-bottom: 24px;
  width: 390px;
}
.requisites__info-title {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

@media (max-width: 992px) {
  .requisites__img {
    width: 379px;
  }
  .requisites__info-title--mod {
    max-width: 260px;
  }
}
@media (max-width: 768px) {
  .requisites {
    padding-bottom: 0;
  }
  .requisites__img {
    width: 343px;
  }

  .requisites__info:nth-child(2n) {
    margin-right: 0;
  }
}
@media (max-width: 576px) {
  .requisites__wrapper {
    justify-content: center;
  }
}
@media (max-width: 420px) {
  .requisites__info {
    margin-right: 0;
  }
}


</style>
