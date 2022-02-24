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
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'about')
  },
}
</script>

<style scoped>

</style>
