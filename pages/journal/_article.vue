<template>
    <main>
      <section class="secret">

        <Article />
        <BottomArticles />
      </section>
    </main>
</template>

<script>

import Article from '@/components/sections/journal/Article'
import BottomArticles from '@/components/sections/journal/BottomArticles'
export default {
  name: 'ArticlePage',
  components: { 
    Article,
    BottomArticles
  },
  async asyncData({ store, params }) {
    await store.dispatch('journal/fetchPage', '/' + params.article)
  },
}
</script>

<style scoped>

main {
  background: url(@/assets/img/bg-magazine.svg) center / cover no-repeat;
  background-color: #f2f2f2;
}

</style>