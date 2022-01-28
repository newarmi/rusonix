<template>
  <div id='mainPage'>
    <Constructor  :pageblocks="pageBlocks" />     
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MainPages',
  components: {
    'Constructor': () => import('~/components/constructor'),
  },
  async asyncData({params, store, route}) {
    let page = params.page
    if(route.fullPath==='/') page='index' 
    await store.dispatch('fetchPage', page)
  },
  computed: {
    ...mapGetters(['pageBlocks', 'tag'])
  },
  methods: {
    ...mapActions(['resetTag'])
  },
}
</script>

<style scoped>


</style>
