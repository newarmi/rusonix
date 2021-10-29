<template>
  <div>
    <Advantage />
    <Program />
    <Conditions />
    <Recommendation />
    <Form />
  </div>
</template>

<script>
export default {
  name: 'PartnersPage',
  components: {
    'Advantage': () => import('~/components/sections/partners/Advantage'),
    'Program': () => import('~/components/sections/partners/Program'),
    'Conditions': () => import('~/components/sections/partners/Conditions'),
    'Recommendation': () => import('~/components/sections/partners/Recommendation'),
    'Form': () => import('~/components/sections/partners/Form'),
  },
  async asyncData({store}) {
      await store.dispatch('partners/fetchPage')
  },
}
</script>

<style scoped>


</style>
