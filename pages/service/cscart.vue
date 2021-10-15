<template>
  <div>
      <Benefits />
      <Possibilities />
      <Tariffs />
  </div>
</template>


<script>

import Benefits from '@/components/sections/service/cscart/Benefits.vue'
import Possibilities from '@/components/sections/service/cscart/Possibilities.vue'
import Tariffs from '@/components/sections/service/cscart/Tariffs.vue'

export default {
  name: 'CsCart',
  components: {
    Benefits,
    Possibilities,
    Tariffs    
  },
  async asyncData({store}) {
      await store.dispatch('service/cscart/fetchPage')
  },
}
</script>

<style scoped>

</style>
