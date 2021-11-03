<template>
  <div>
    <Benefits />
    <Billing />
    <Technologies />
    <Support />
    <Tariffs />
  </div>
</template>

<script>
import Benefits from '~/components/sections/service/vps-servers/Benefits'
import Billing from '~/components/sections/service/vps-servers/Billing'
import Technologies from '~/components/sections/service/vps-servers/Technologies'
import Support from '~/components/sections/service/vps-servers/Support'
import Tariffs from '~/components/sections/service/vps-servers/Tariffs'
export default {
  name: 'VpsServers',
  components: {
    Benefits,
    Billing,
    Technologies,
    Support,
    Tariffs
  },
  async asyncData({store}) {
      await store.dispatch('service/vps-servers/fetchPage')
  },

}
</script>

<style scoped>

</style>
