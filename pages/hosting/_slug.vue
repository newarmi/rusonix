<template>
  <div id="license">
    <Constructor />
  </div>
</template>

<script>


export default {
  components: {
    Constructor: () => import('~/components/constructor'),
  },

  async asyncData({ params, store }) {
    const slug = params.slug
    await store.dispatch('fetchPage', 'hosting/' + slug)
  },
}
</script>
