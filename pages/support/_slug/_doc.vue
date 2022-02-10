<template>
  <div>
    <Service />
  </div>
</template>

<script>


export default {
  components: {
    Service: () => import('~/components/sections/service/constructor'),
  },

  async asyncData({ params, store }) {
    const doc = params.doc
    await store.dispatch('universal/fetchPage', 'support/dokumenty/' + doc)
  },
}
</script>