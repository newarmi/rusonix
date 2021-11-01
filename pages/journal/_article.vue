<template>
    <div>
        <Article />
    </div>
</template>

<script>
import Article from '@/components/sections/journal/Article'
export default {
  name: 'ArticlePage',
  components: { 
    Article
    },

  async asyncData({ store, params }) {
    await store.dispatch('journal/fetchPage', '/' + params.article)
  },
}
</script>

<style scoped>

</style>