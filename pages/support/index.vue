<template>
  <div id='mainPage'>
    <Constructor  :pageblocks="pageBlocks" />     
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPages',
  
  components: {
    'Constructor': () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'support')
  },
  computed: {
    ...mapGetters(['pageBlocks'])
  },
}

</script>

<style scoped>


</style>
