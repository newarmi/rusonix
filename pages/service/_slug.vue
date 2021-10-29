<template>
<div>
  <Benefits />
  <Details v-if="billing" />
  <Reviews v-if="reviews" />
</div>
</template>

<script>


  export default {
    components: {
       'Benefits': () => import('~/components/sections/service/universal/Benefits'),
       'Details': () => import('~/components/sections/service/universal/Details'),
       'Reviews': () => import('~/components/sections/service/universal/reviews/Reviews'),
    },

    async asyncData({ params, store }) {
      const slug = params.slug
      await store.dispatch('service/universal/fetchPage', slug)
    },
    computed: {
      header() {
        return this.$store.getters['service/universal/header']
      },
      reviews() {
        return this.header.reviews
      },
      billing() {
        return this.header.billing
      }
    },
  }
</script>