<template>
  <div>
    <div v-for="block in blocks" :key="block.key">
      <Decision v-if="block.layout==='solutions'" :decisions="block.attributes" />
      <LinkArticles v-if="block.layout==='link_articles'" :articles="block.attributes" />
      <SimpleArticles v-if="block.layout==='simple_articles'" :articles="block.attributes" />
      <ServiceSection v-if="block.layout==='services'" :services="block.attributes" />
      <ServiceSection v-if="block.layout==='ssl'" :services="block.attributes" />

      <ImagesDescriptions v-if="block.layout==='imagesDescription'" :images="block.attributes" />
      <ImagesBottom v-if="block.layout==='imagesBottom'" :images="block.attributes" />
      <ImageSlider v-if="block.layout==='imagesSlider'" :items="block.attributes" />
      <ImagesInside v-if="block.layout==='imagesInside'" :images="block.attributes" />
      <ImagesLink v-if="block.layout==='imagesLinks'" :images="block.attributes" />
      <ImagesBig v-if="block.layout==='imagesBig'" :images="block.attributes" />

      <Youtube v-if="block.layout==='youtube'" :items="block.attributes" />
      <TextBlock v-if="block.layout==='textBlock'" :items="block.attributes" />

      <Advice v-if="block.layout==='advice'" :tag="block.attributes.tag" />
      <Billing v-if="block.layout==='billing'" :tag="block.attributes.tag" />
      <Trust v-if="block.layout==='trust'" :tag="block.attributes.tag"
                                           :title="block.attributes.title"/>
      <Reviews v-if="block.layout==='reviews'" :tag="block.attributes.tag"
                                               :title="block.attributes.title"/>
      <Contacts v-if="block.layout==='contacts'" :tag="block.attributes.tag"
                                                 :title="block.attributes.title"
                                                 :card="block.attributes.card"
                                                 :card-phone="block.attributes.cardPhone"/>
      <Partner v-if="block.layout==='partner'" :title="block.attributes.title"
                                               :description="block.attributes.description"
                                               :tag="block.attributes.tag"  />
      <Form v-if="block.layout==='form'" :title="block.attributes.title" :tag="block.attributes.tag" />
      <Domains v-if="block.layout==='domains'" :tag="block.attributes.tag"
                                               :title="block.attributes.title"
                                               :description="block.attributes.description" />
      <Journal v-if="block.layout==='journal'"
            :navigation="block.attributes.navigation"
            :title="block.attributes.title" :lines="block.attributes.linesNumber"
            :tag="block.attributes.tag" />

      <Benefits v-if="block.layout==='benefits'" :items="block.attributes" />
      <Tabs v-if="block.layout==='tabs'" :items="block.attributes" />
      <Technologies v-if="block.layout==='technologies'" :items="block.attributes" />
      <Support v-if="block.layout==='questions'" :items="block.attributes" />
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
  name: 'Constructor',
  components: {
    Technologies: () => import('~/components/sections/service/universal/Technologies'),
    Support: () => import('~/components/sections/service/universal/Support'),
    Benefits: () => import('~/components/sections/service/universal/Benefits'),
    Tabs: () => import('~/components/sections/service/universal/Tabs'),
    Youtube: () => import('~/components/sections/custom/Youtube'),
    TextBlock: () => import('~/components/sections/custom/TextBlock'),
    ServiceSection: () => import('~/components/sections/custom/ServiceSection'),
    Domains: () => import('~/components/sections/general/domains/Domains'),
    Decision: () => import('~/components/sections/custom/Decision'),
    ImageSlider: () => import('~/components/sections/custom/imageSlider/Images'),
    Billing: () => import('~/components/sections/general/Billing'),
    LinkArticles: () => import('~/components/sections/custom/LinkArticles'),
    Trust: () => import('~/components/sections/general/Trust'),
    Reviews: () => import('~/components/sections/general/reviews/Reviews'),
    Journal: () => import('~/components/sections/general/Journal'),
    SimpleArticles: () => import('~/components/sections/custom/SimpleArticles'),
    Contacts: () => import('~/components/sections/general/Contacts'),
    ImagesBottom: () => import('~/components/sections/custom/ImagesBottom'),
    ImagesInside: () => import('~/components/sections/custom/ImagesInside'),
    ImagesBig: () => import('~/components/sections/custom/ImagesBig'),
    ImagesDescriptions: () => import('~/components/sections/custom/ImagesDescriptions'),
    ImagesLink: () => import('~/components/sections/custom/ImageLink'),
    Partner: () => import('~/components/sections/general/Partner'),
    Form: () => import('~/components/sections/general/Form'),
    Advice: () => import('~/components/sections/general/Advice'),
    Cards: () => import('~/components/sections/service/tariffs/Cards'),
    Lines: () => import('~/components/sections/service/tariffs/lines/LinesBox'),
    OneLine: () => import('~/components/sections/service/tariffs/license/OneLine'),
    Additions: () => import('~/components/sections/service/tariffs/Additions'),
    Ssl: () => import('~/components/sections/service/tariffs/Ssl'),
    Calculate: () => import('~/components/sections/service/tariffs/Calculate'),
    Solutions: () => import('~/components/sections/service/tariffs/Solutions'),
    SolutionsClear: () => import('~/components/sections/service/tariffs/SolutionsClear'),
    BillingCards: () => import('~/components/sections/service/billing/Cards'),
    BillingLines: () => import('~/components/sections/service/billing/SimpleLines'),
    BillingOneLine: () => import('~/components/sections/service/billing/OneLine'),
  },
  computed: {
    ...mapGetters(['tag', 'blocks', 'tariffs'])
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

<style scoped>

</style>
