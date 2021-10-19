<template>
  <section class="advantage">
    <div class="container">
      <h1 class="advantage__title title">{{ page.title }}</h1>

      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ advantages[0].title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="advantages[0].content">
          </div>
        </div>
        <picture class="picture">
          <img
            :src="advantages[0].imageLink"
            :srcset="advantages[0].imageLink"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>
      <div class="advantage__wrapper advantage__wrapper--mod">
        <picture class="picture">
          <img
            :src="advantages[1].imageLink"
            :srcset="advantages[1].imageLink"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ advantages[1].title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="advantages[1].content">
          </div>
        </div>
      </div>
      <div class="advantage__wrapper">
        <div class="advantage__section-text">
          <div class="advantage__title-text">{{ advantages[2].title }}</div>
          <div class="advantage__text advantage__text-company text" v-html="advantages[2].content">
          </div>
        </div>
        <picture class="picture">
          <img
            :src="advantages[2].imageLink"
            :srcset="advantages[2].imageLink"
            class="advantage__img"
            alt="advantage-img"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Advantage',
  computed: {
    page() {
      return this.$store.getters['company/advantage']
    },
    advantages() {
      const advantages = this.page.sections
      advantages.forEach(element => {
        element.imageLink = this.$config.imgURL + '' + element.image
      });
      return advantages
    }
  }
}
</script>

<style scoped>

.advantage {
  padding-top: 72px;
  padding-bottom: 72px;
}
.advantage__title {
  margin-bottom: 75px;
}

.advantage__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 96px;
}
.advantage__wrapper:last-child {
  margin-bottom: 0;
}
.advantage__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 25px;
}

.advantage__text {
  max-width: 510px;
  margin-bottom: 48px;
}

.advantage__text-company {
  max-width: 550px;
}
/*.advantage__link {*/
/*  font-family: "Graphik", sans-serif;*/
/*  font-size: 16px;*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  line-height: 22px;*/
/*  letter-spacing: 0px;*/
/*  text-align: left;*/
/*  color: #202a89;*/
/*}*/
@media (max-width: 992px) {
  .advantage {
    padding-top: 28px;
    padding-bottom: 0;
  }
  .advantage__title {
    margin-bottom: 48px;
  }
  .advantage__wrapper {
    flex-direction: column-reverse;
  }
  .advantage__wrapper--mod {
    flex-direction: column;
  }
  .advantage__section-text {
    align-self: flex-start;
  }
  .advantage__text-company {
    max-width: 685px;
  }
  .advantage__img {
    margin-bottom: 24px;
  }
}


</style>
