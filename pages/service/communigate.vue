<template>
  <div>
    <Benefits />
    <Possibilities />
    <Tariffs />
  </div>
</template>



<script>
import Benefits from '@/components/sections/service/communigate/Benefits.vue'
import Possibilities from '~/components/sections/service/communigate/Possibilities.vue'
import Tariffs from '~/components/sections/service/communigate/Tariffs.vue'

export default {
  name: 'Communigate',
  components: {
    Benefits,
    Possibilities,
    Tariffs
  },
  async asyncData({store}) {
      await store.dispatch('service/communigate/fetchPage')
  },
}
</script>

<style scoped>

</style>
