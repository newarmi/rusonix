<template>
  <AllArticles />
</template>

<script>

import AllArticles from '@/components/sections/journal/AllArticles'
export default {
  name: 'JournalPage',
  components: { 
    AllArticles 
    },
  async asyncData({ store }) {
    await store.dispatch('journal/fetchPage', '')
  },
}
</script>

<style scoped>

</style>
