<template>
  <div id='mainPage'>
      <Constructor :pageblocks="pageBlocks" />     
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Journal',
  components: {
    'Constructor': () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'journal')
  },
  computed: {
    ...mapGetters(['pageBlocks'])
  },

}
</script>

<style scoped>


</style>
