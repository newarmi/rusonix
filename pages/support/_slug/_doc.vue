<template>
  <div id="document">
    <Constructor />
  </div>
</template>

<script>


export default {
  components: {
    Constructor: () => import('~/components/constructor'),
  },

  async asyncData({params, store}) {
    const doc = params.doc
    await store.dispatch('fetchPage', 'support/dokumenty/' + doc)
  },
}
</script>
