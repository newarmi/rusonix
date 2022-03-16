<template>
  <div id="third">
    <Constructor />
  </div>
</template>

<script>
export default {
  name: 'ThirdPage',
  components: {
    Constructor: () => import('~/components/constructor'),
  },
  async asyncData({params, store}) {
    await store.dispatch('fetchPage', params.page + '/' + params.slug + '/' + params.doc)
  },
}
</script>
