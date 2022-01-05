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

    <div id="tariff">
      <div v-for="tariff, j in tariffs" :key="tariff.layout + '' + j">
        
        <div v-if="tariff.layout=='billing'">
          <BillingCards v-if="tariff.attributes.view=='cards'" :tariff="tariff.attributes" />
          <BillingLines v-if="tariff.attributes.view=='lines'" :lines="tariff.attributes" />
        </div>

        <Cards v-if="tariff.layout=='cards'" :cards="tariff.attributes" />
        <Lines v-if="tariff.layout=='lines'" :lines="tariff.attributes" />
        <OneLine v-if="tariff.layout=='oneLine'" :lines="tariff.attributes" />
        <Additions v-if="tariff.layout=='additions'" :addition="tariff.attributes" />
        <Ssl v-if="tariff.layout=='filters'" :ssl="tariff.attributes" />
        <Calculate v-if="tariff.layout=='calculate'" :data="tariff.attributes" />
        <Solutions v-if="tariff.layout=='solutions'" :data="tariff.attributes" />
        <SolutionsClear v-if="tariff.layout=='clearSolutions'" :data="tariff.attributes" />
      </div>
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
    'OneLine': () => import('~/components/sections/service/tariffs/OneLine'),
    'Additions': () => import('~/components/sections/service/tariffs/Additions'),
    'Ssl': () => import('~/components/sections/service/tariffs/Ssl'),
    'Calculate': () => import('~/components/sections/service/tariffs/Calculate'),
    'Solutions': () => import('~/components/sections/service/tariffs/Solutions'),
    'SolutionsClear': () => import('~/components/sections/service/tariffs/SolutionsClear'),
    
    'BillingCards': () => import('~/components/sections/service/billing/Cards'),
    'BillingLines': () => import('~/components/sections/service/billing/SimpleLines'),
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