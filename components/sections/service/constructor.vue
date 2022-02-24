<template>
  <div>
    <div v-for="(block, i) in blocks" :key="block.layout + '' + i">
      <Benefits v-if="block.layout==='benefits'" :items="block.attributes" />
      <Tabs v-if="block.layout==='tabs'" :items="block.attributes" />
      <Details v-if="block.layout==='billing'" :tag="block.attributes.tag" />
      <Reviews v-if="block.layout==='reviews'" :tag="block.attributes.tag" />
      <Technologies v-if="block.layout==='technologies'" :items="block.attributes" />
      <Support v-if="block.layout==='questions'" :items="block.attributes" />
      <TextBlock v-if="block.layout==='textBlock'" :items="block.attributes" />
      <Youtube v-if="block.layout==='youtube'" :items="block.attributes" />
      <SimpleForm v-if="block.layout==='simpleForm'" :items="block.attributes" />
      <Faq v-if="block.layout==='faq'" :key="block.key" :items="block.attributes" />
      <SupportForm v-if="block.layout==='supportForm'" :key="block.key" :items="block.attributes" />
      <HelpForm v-if="block.layout==='helpForm'" :key="block.key" :items="block.attributes" />
      <ServiceLines v-if="block.layout==='serviceLines'" :key="block.key" :items="block.attributes" />
      <Domains v-if="block.layout==='domains'" :tag="block.attributes.tag" :title="block.attributes.title"
                                               :description="block.attributes.description" />
      <ImageSlider v-if="block.layout==='imagesSlider'" :items="block.attributes" />
      <Contacts v-if="block.layout==='contacts'" :tag="block.attributes.tag" />
    </div>

    <div id="tariff">
      <div v-for="(tariff, j) in tariffs" :key="tariff.layout + '' + j">
        <div v-if="tariff.layout==='billing'">
          <BillingCards v-if="tariff.attributes.view==='cards'" :tariff="tariff.attributes" />
          <BillingLines v-if="tariff.attributes.view==='lines'" :lines="tariff.attributes" />
          <BillingOneLine v-if="tariff.attributes.view==='oneLine'" :lines="tariff.attributes" />
        </div>

        <Cards v-if="tariff.layout==='cards'" :cards="tariff.attributes" />
        <Lines v-if="tariff.layout==='lines'" :lines="tariff.attributes" />
        <OneLine v-if="tariff.layout==='oneLine'" :lines="tariff.attributes" />
        <Additions v-if="tariff.layout==='additions'" :addition="tariff.attributes" />
        <Ssl v-if="tariff.layout==='filters'" :ssl="tariff.attributes" />
        <Calculate v-if="tariff.layout==='calculate'" :data="tariff.attributes" />
        <Solutions v-if="tariff.layout==='solutions'" :data="tariff.attributes" />
        <SolutionsClear v-if="tariff.layout==='clearSolutions'" :data="tariff.attributes" />
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
    Tabs: () => import('~/components/sections/service/universal/Tabs'),
    Cards: () => import('~/components/sections/service/tariffs/Cards'),
    Lines: () => import('~/components/sections/service/tariffs/lines/LinesBox'),
    OneLine: () => import('~/components/sections/service/tariffs/license/OneLine'),
    Additions: () => import('~/components/sections/service/tariffs/Additions'),
    Ssl: () => import('~/components/sections/service/tariffs/Ssl'),
    Calculate: () => import('~/components/sections/service/tariffs/Calculate'),
    Solutions: () => import('~/components/sections/service/tariffs/Solutions'),
    SolutionsClear: () => import('~/components/sections/service/tariffs/SolutionsClear'),
    SimpleForm: () => import('~/components/sections/general/SimpleForm'),
    SupportForm: () => import('~/components/sections/general/SupportForm'),
    ServiceLines: () => import('~/components/sections/general/ServiceLines'),
    HelpForm: () => import('~/components/sections/general/HelpForm'),
    Faq: () => import('~/components/sections/service/universal/FAQ'),
    Domains: () => import('~/components/sections/general/domains/Domains'),
    ImageSlider: () => import('~/components/sections/custom/imageSlider/Images'),
    Contacts: () => import('~/components/sections/service/universal/Contacts'),

    BillingCards: () => import('~/components/sections/service/billing/Cards'),
    BillingLines: () => import('~/components/sections/service/billing/SimpleLines'),
    BillingOneLine: () => import('~/components/sections/service/billing/OneLine'),
  },

  computed: {
    ...mapGetters(['tag']),
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
