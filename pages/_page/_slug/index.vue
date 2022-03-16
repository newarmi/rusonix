<template>
  <div id="second">
    <Constructor />
  </div>
</template>

<script>


export default {
  name: 'SecondPage',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({store, params}) {
    await store.dispatch('fetchPage', params.page + '/' + params.slug)
  },
}
</script>
