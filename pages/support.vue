<template>
  <div>
    <Knowlage />
    <Advice />
  </div>
</template>

<script>
export default {
  name: 'SupportPage',
  components: {
    'Knowlage': () => import('~/components/sections/support/Knowlage'),
    'Advice': () => import('~/components/sections/support/Advice'),
  },
  async asyncData({store}) {
      await store.dispatch('support/fetchPage')
  },
  


}
</script>

<style scoped>


</style>
