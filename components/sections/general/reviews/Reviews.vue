<template>
  <section class="reviews">
    <div class="container">
      <h1 class="reviews__title title">{{ reviews.title }}</h1>
      <Slider :reviews="reviews"/>
    </div>
  </section>
</template>

<script>
import Slider from '~/components/sections/general/reviews/Slider'

export default {
  name: 'Reviews',
  components: {
    Slider
  },
  props: {
    reviews: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.reviews.title
    }
  }
}
</script>

<style scoped>
.reviews {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
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
