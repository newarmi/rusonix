<template>
<div>
  <Benefits />
  <Possibilities />
  <Tariffs />
</div>
</template>

<script>
import Benefits from '~/components/sections/service/bitrix/Benefits.vue'
import Possibilities from '~/components/sections/service/bitrix/Possibilities.vue'
import Tariffs from '~/components/sections/service/bitrix/Tariffs.vue'

export default {
  name: 'Bitrix',
  components: { 
    Benefits,
    Possibilities,
    Tariffs 
    },
    async asyncData({store}) {
      await store.dispatch('service/bitrix/fetchPage')
  },

}
</script>

<style scoped>

</style>
