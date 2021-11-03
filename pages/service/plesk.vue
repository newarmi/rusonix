<template>
  <div>
    <Benefits />
    <Possibilities />
    <Licenses />
  </div>
</template>

<script>
import Benefits from '@/components/sections/service/plesk/Benefits'
import Possibilities from '@/components/sections/service/plesk/Possibilities'
import Licenses from '@/components/sections/service/plesk/Licenses'

export default {
  name: 'Plesk',
  components: {
    Benefits,
    Possibilities,
    Licenses
  },
  async asyncData({store}) {
      await store.dispatch('service/plesk/fetchPage')
  },
}
</script>

<style scoped>

</style>
