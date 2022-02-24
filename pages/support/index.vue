<template>
  <div id="support">
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'Support',

  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'support')
  },
}

</script>

<style scoped>

</style>
