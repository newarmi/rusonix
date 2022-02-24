<template>
  <div id="about">
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store, params}) {
    await store.dispatch('fetchPage', 'about/' + params.slug)
  },
}
</script>

<style scoped>

</style>
