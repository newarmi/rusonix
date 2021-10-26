<template>
  <full-journal />
</template>

<script>

import FullJournal from '@/components/sections/journal/FullJournal.vue'
export default {
  name: 'JournalPage',
  components: { 
    FullJournal 
    },
  async asyncData({ store }) {
    await store.dispatch('journal/fetchPage')
  },
}
</script>

<style scoped>

</style>
