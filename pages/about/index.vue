<template>
  <div id='company'>
    <Constructor :pageblocks="pageBlocks" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage', 'about')
  },
  computed: {
    ...mapGetters(['pageBlocks'])
  },
}
</script>

<style scoped>


</style>
