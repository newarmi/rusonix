<template>
  <div>
    <Benefits />
    <Sertificate />
  </div>
</template>

<script>
import Benefits from '@/components/sections/service/ssl/Benefits'
import Sertificate from '@/components/sections/service/ssl/Sertificate'
export default {
  name: 'Ssl',
  components: {
    Benefits,
    Sertificate
  },
  async asyncData({store}) {
      await store.dispatch('service/ssl/fetchPage')
  },
}
</script>

<style scoped>

</style>
