<template>
<div>
  <Benefits v-if="benefits"/>
  <Possibilities v-if="tabs" />
  <Details v-if="billing" />
  <Reviews v-if="reviews" />
  <Technologies v-if="technologies"/>
  <Support v-if="questions"/>

</div>
</template>

<script>


  export default {
    components: {
       'Benefits': () => import('~/components/sections/service/universal/Benefits'),
       'Details': () => import('~/components/sections/service/universal/Details'),
       'Reviews': () => import('~/components/sections/service/universal/reviews/Reviews'),
       'Technologies': () => import('~/components/sections/service/universal/Technologies'),
       'Support': () => import('~/components/sections/service/universal/Support'),
       'Possibilities': () => import('~/components/sections/service/universal/Possibilities')
    },

    async asyncData({ params, store }) {
      const slug = params.slug
      await store.dispatch('universal/fetchPage', slug)
    },

    computed: {
      header() {
        return this.$store.getters['universal/header']
      },
      benefits() {
        if(this.$store.getters['universal/top'])
          return this.$store.getters['universal/top'].length
        return false
      },
      technologies() {
        if(this.$store.getters['universal/technologies'])
          return this.$store.getters['universal/technologies'].length
        return false
      },
      questions() {
        if(this.$store.getters['universal/questions'])
          return this.$store.getters['universal/questions'].length
        return false
      },
      tabs() {
        if(this.$store.getters['universal/tabs'])
          return this.$store.getters['universal/tabs'].length
        return false
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