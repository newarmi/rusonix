<template>
  <div id='mainPage'>
    <SectionDecision />
    <SectionDetails />
    <SectionAdvantage />
    <SectionConfidents />
    <SectionReviews />
    <SectionMagazine />
    <!-- <SectionModal /> -->
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
    'SectionDecision': () => import('~/components/sections/main-page/Decision'),
    'SectionDetails': () => import('~/components/sections/main-page/Details'),
    'SectionAdvantage': () => import('~/components/sections/main-page/Advantage'),
    'SectionConfidents': () => import('~/components/sections/main-page/Confidents'),
    'SectionReviews': () => import('~/components/sections/main-page/reviews/Reviews'),
    'SectionMagazine': () => import('~/components/sections/main-page/Magazine'),
    // 'SectionModal': () => import('~/components/sections/main-page/Modal')
  },
  async asyncData({store}) {
      await store.dispatch('fetchPage')
  },
}
</script>

<style scoped>


</style>
