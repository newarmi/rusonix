<template>
  <div id="blog">
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'Blog',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'blog')
  },
}
</script>

<style scoped>

</style>
