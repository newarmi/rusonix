<template>
  <div id='mainPage'>
    <Decision />
    <Details />
    <Advantage />
    <Confidents />
    <Reviews />
    <Magazine />
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
    'Decision': () => import('~/components/sections/main-page/Decision'),
    'Details': () => import('~/components/sections/main-page/Details'),
    'Advantage': () => import('~/components/sections/main-page/Advantage'),
    'Confidents': () => import('~/components/sections/main-page/Confidents'),
    'Reviews': () => import('~/components/sections/main-page/reviews/Reviews'),
    'Magazine': () => import('~/components/sections/main-page/Magazine'),
  },
  async asyncData({store}) {
      await store.dispatch('fetchPage')
  },
}
</script>

<style scoped>


</style>
