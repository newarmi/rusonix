<template>
  <div>
    <div v-for="block, i in blocks" :key="block.layout + '' + i">
      <Benefits v-if="block.layout=='benefits'"/>
      <Possibilities v-if="block.layout=='tabs'" />
      <Details v-if="block.layout=='billing'" />
      <Reviews v-if="block.layout=='reviews'" />
      <Technologies v-if="block.layout=='technologies'"/>
      <Support v-if="block.layout=='questions'"/>
    </div>

    <div v-for="tariff, j in tariffs" :key="tariff.layout + '' + j">
      <BillingCards v-if="tariff.attributes.view=='cards'" :tariff="tariff.attributes" />
      <BillingLines v-if="tariff.attributes.view=='lines'" :lines="tariff.attributes" />

      <Cards v-if="tariff.layout=='cards'" :cards="tariff.attributes" />
      <Lines v-if="tariff.layout=='lines'" :lines="tariff.attributes" />
    </div>

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
    'Possibilities': () => import('~/components/sections/service/universal/Possibilities'),
    'Cards': () => import('~/components/sections/service/tariffs/Cards'),
    'Lines': () => import('~/components/sections/service/tariffs/Lines'),
    'BillingCards': () => import('~/components/sections/service/billing/Cards'),
    'BillingLines': () => import('~/components/sections/service/billing/Lines')
  },

  async asyncData({ params, store }) {
    const slug = params.slug
    await store.dispatch('universal/fetchPage', slug)
  },

  computed: {
    header() {
      return this.$store.getters['universal/header']
    },
    blocks() {
      return this.$store.getters['universal/blocks']
    },
    tariffs() {
      return this.$store.getters['universal/tariffs']
    },
  },
}
</script>