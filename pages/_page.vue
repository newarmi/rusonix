<template>
  <div id='mainPage'>
    <Constructor />
  </div>
</template>

<script>

export default {
  name: 'MainPages',

  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({params, store, route}) {
    let page = params.page
    if(route.fullPath==='/') page='index'
    await store.dispatch('fetchPage', page)
  },
}

</script>

<style scoped>


</style>
