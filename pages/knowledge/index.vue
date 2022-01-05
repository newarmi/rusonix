<template>
  <div id='knowledge'>
      <Constructor :pageblocks="pageBlocks" />     
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Company',
  components: {
    'Constructor': () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'knowledge')
    await store.dispatch('knowledge/getData')
  },
  computed: {
    ...mapGetters(['pageBlocks'])
  },

}
</script>

<style scoped>


</style>