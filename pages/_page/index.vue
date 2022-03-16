<template>
  <div id="first">
    <Constructor />
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({params, store}) {
    await store.dispatch('fetchPage', params.page)
  },
}
</script>
