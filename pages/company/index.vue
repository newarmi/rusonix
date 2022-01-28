<template>
  <div id='company'>
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
    await store.dispatch('fetchPage', 'company')
  },
  computed: {
    ...mapGetters(['pageBlocks'])
  },
}
</script>

<style scoped>


</style>
