<template>
  <div>
    <Benefits />
    <Billing />
    <Reviews />
    <Calculate />
  </div>
</template>

<script>
import Benefits from '~/components/sections/service/cloud-web-hosting/Benefits'
import Billing from '~/components/sections/service/cloud-web-hosting/Billing'
import Reviews from '~/components/sections/service/cloud-web-hosting/reviews/Reviews'
import Calculate from '~/components/sections/service/cloud-web-hosting/Calculate'
export default {
  name: 'CloudWebHosting',
  components: {
    Benefits,
    Billing,
    Reviews,
    Calculate
  },
  async asyncData({store}) {
      await store.dispatch('service/cloud-web-hosting/fetchPage')
  },
}
</script>

<style scoped>

</style>
