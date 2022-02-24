<template>
  <div id="knowledge">
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'Knowledge',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'knowledge')
    await store.dispatch('knowledge/getData')
  },
}
</script>

<style scoped>

</style>
