<template>
    <main>
      <section class="secret">
        <Article />
        <BottomArticles />
      </section>
    </main>
</template>

<script>

export default {
  name: 'JournalArticle',
  components: { 
    Article: () => import('@/components/sections/journal/Article'),
    BottomArticles: () => import('@/components/sections/journal/BottomArticles')
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