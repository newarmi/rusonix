<template>
  <section :id="images.tag" class="career">
    <div class="container">
      <h2 class="career__title title">{{ images.title }}</h2>
      <div class="career__wrapper">
        <div v-for="item in images.images" :key="item.key" class="career__wrap-card" >
          <picture class="picture">
            <img
              :src="$config.imgURL + item.attributes.image"
              :srcset="$config.imgURL + item.attributes.image"
              class="career__img"
              alt="career card"
            />
          </picture>
          <div class="career__card-title">{{ item.attributes.title }}</div>
          <div class="career__card-text text" v-html="item.attributes.description">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Career',
  props: {
    images: {
      type: Object,
      required: true
    }
  },
  computed: {
    // careerItems() {
    //   const career = this.career
    //   career.sections.forEach(element => {
    //     element.imageLink = this.$config.imgURL + element.image
    //   });
    //   return career
    // }
  }
}
</script>

<style scoped>

.career {
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: #fcf7f2;
}
.career__title {
  margin-bottom: 108px;
}
.career__wrapper {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  .career__wrap-card {
    margin-right: 34px;
  }
}
@media (max-width: 992px) {
  .career {
    padding-bottom: 24px;
  }
  .career__wrapper {
    flex-wrap: wrap;
  }
  .career__wrap-card {
    margin-right: 0px;
    margin-bottom: 48px;
  }
}
.career__img {
  margin-bottom: 24px;
}
.career__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.career__card-text {
  max-width: 390px;
}
@media (max-width: 768px) {
  .career {
    padding-bottom: 0;
  }
  .career__img {
    object-fit: cover;
    max-width: 343px;
  }
  .career__card-text {
    max-width: 343px;
  }
}
@media (max-width: 576px) {
  .career {
    padding-top: 48px;
  }
  .career__title {
    margin-bottom: 48px;
  }
  .career__wrapper {
    justify-content: center;
  }
}

</style>
