<template>
  <div>
    <Benefits />
    <Possibilities />
    <Licenses />
  </div>
</template>

<script>
import Benefits from '@/components/sections/service/virtuozzo/Benefits'
import Possibilities from '@/components/sections/service/virtuozzo/Possibilities'
import Licenses from '@/components/sections/service/virtuozzo/Licenses'

export default {
  name: 'Virtuozzo',
  components: {
    Benefits,
    Possibilities,
    Licenses
  },
  async asyncData({store}) {
      await store.dispatch('service/virtuozzo/fetchPage')
  },
}
</script>

<style scoped>

</style>
