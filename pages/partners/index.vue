<template>
  <div id="partners">
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'Partners',

  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'partners')
  },

}

</script>

<style scoped>

</style>
