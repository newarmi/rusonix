<template>
  <section :id="tag" class="reviews">
    <div class="container">
      <h2 class="reviews__title title">{{ title }}</h2>
      <Slider />
    </div>
  </section>
</template>

<script>

export default {
  name: 'Reviews',
  components: {
    Slider: () => import('~/components/sections/general/reviews/Slider')
  },
  props: {
    tag: {
      type: String,
      default: 'reviews'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.reviews {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
  overflow: hidden;
}

.reviews__title {
  margin-bottom: 96px;
}

@media (max-width: 768px) {
  .reviews {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .reviews__title {
    margin-bottom: 48px;
  }
}


</style>
