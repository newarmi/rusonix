<template>
  <div>
    <Benefits />
    <Possibilities />
    <Details />
    <Reviews />
    <Calculate />

  </div>
</template>

<script>
import Benefits from '@/components/sections/service/virtual-data-center/Benefits.vue'
import Possibilities from '@/components/sections/service/virtual-data-center/Possibilities.vue'
import Details from '@/components/sections/service/virtual-data-center/Details.vue'
import Calculate from '~/components/sections/service/virtual-data-center/Calculate.vue'
import Reviews from '@/components/sections/service/virtual-data-center/reviews/Reviews.vue'

export default {

  name: 'Cloud',
  components: {
      Benefits,
      Possibilities,
      Details,
      Calculate,
      Reviews
  },
  async asyncData({store}) {
      await store.dispatch('service/virtual-data-center/fetchPage')
  },
}
</script>

<style scoped>

</style>
