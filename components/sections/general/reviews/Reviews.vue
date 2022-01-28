<template>
  <section :id="tag" class="reviews">
    <div class="container">
      <h2 class="reviews__title title">{{ reviews.title }}</h2>
      <Slider :reviews="reviews"/>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Reviews',
  components: {
    Slider: () => import('~/components/sections/general/reviews/Slider')
  },
  props: {
    tag: {
      type: String,
      default: 'reviews'
    }
  },
  computed: {
    ...mapGetters(['reviews']),
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
