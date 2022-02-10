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
    const slug = params.slug
    await store.dispatch('universal/fetchPage', 'support/' + slug)
  },
}
</script>