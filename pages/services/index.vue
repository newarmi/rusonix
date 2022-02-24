<template>
  <div id="services">
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'Services',

  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'services')
  },
}

</script>

<style scoped>


</style>
