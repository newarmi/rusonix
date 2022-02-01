<template>
  <div>
    <div v-for="block, i in blocks" :key="block.layout + '' + i">
      <Benefits v-if="block.layout=='benefits'" :tag="block.attributes.tag" />
      <Possibilities v-if="block.layout=='tabs'" :tag="block.attributes.tag" />
      <Details v-if="block.layout=='billing'" :tag="block.attributes.tag" />
      <Reviews v-if="block.layout=='reviews'" :tag="block.attributes.tag" />
      <Technologies v-if="block.layout=='technologies'" :tag="block.attributes.tag" />
      <Support v-if="block.layout=='questions'" :tag="block.attributes.tag" />
      <TextBlock v-if="block.layout==='textBlock'" :items="block.attributes" />
      <Youtube v-if="block.layout==='youtube'" :items="block.attributes" />
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Constructor",
  components: {
    Youtube: () => import('~/components/sections/custom/Youtube'),
    TextBlock: () => import('~/components/sections/custom/TextBlock'),
    Benefits: () => import('~/components/sections/service/universal/Benefits'),
    Details: () => import('~/components/sections/service/universal/Details'),
    Reviews: () => import('~/components/sections/service/universal/reviews/Reviews'),
    Technologies: () => import('~/components/sections/service/universal/Technologies'),
    Support: () => import('~/components/sections/service/universal/Support'),
    Possibilities: () => import('~/components/sections/service/universal/Possibilities'),
    Cards: () => import('~/components/sections/service/tariffs/Cards'),
    Lines: () => import('~/components/sections/service/tariffs/Lines'),
    OneLine: () => import('~/components/sections/service/tariffs/OneLine'),
    Additions: () => import('~/components/sections/service/tariffs/Additions'),
    Ssl: () => import('~/components/sections/service/tariffs/Ssl'),
    Calculate: () => import('~/components/sections/service/tariffs/Calculate'),
    Solutions: () => import('~/components/sections/service/tariffs/Solutions'),
    SolutionsClear: () => import('~/components/sections/service/tariffs/SolutionsClear'),
    
    BillingCards: () => import('~/components/sections/service/billing/Cards'),
    BillingLines: () => import('~/components/sections/service/billing/SimpleLines'),
  },

  computed: {
    ...mapGetters(['tag']),
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
  mounted() {
    this.scroll()
  },    
  methods: {
    ...mapActions(['resetTag']),
    scroll() {
      if(this.tag) {
      
      const block = document.querySelector('#' + this.tag)
        if(block)
          block.scrollIntoView({ behavior: 'smooth' })
          this.resetTag()
      }
    }
  },

}
</script>