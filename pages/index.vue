<template>
  <div id='mainPage'>
    <Constructor />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'index')
  },
}
</script>

