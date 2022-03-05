<template>
  <div id="partners">
    <Constructor />
  </div>
</template>

<script>


export default {
  components: {
    Constructor: () => import('~/components/constructor'),
  },

  async asyncData({ params, store }) {
    await store.dispatch('fetchPage', 'partners/' + params.slug)
  },
}
</script>
