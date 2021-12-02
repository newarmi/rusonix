<template>
  <div id='mainPage'>
    <div v-for="block in blocks" :key="block.key">
      <Decision v-if="block.layout==='solutions'" :decisions="block" />
      <Billing v-if="block.layout==='billing'" :billing="billing" />
      <LinkArticles v-if="block.layout==='link_articles'" :articles="block" />
      <Trust v-if="block.layout==='trust'" :trust="trust"/>
      <Reviews v-if="block.layout==='reviews'" :reviews="reviews"/>
      <Journal v-if="block.layout==='journal'" :journal="journal" :title="block.attributes.title" :lines="block.attributes.linesNumber"/>
      <SimpleArticles v-if="block.layout==='simple_articles'" :articles="block.attributes" />
      <History v-if="block.layout==='history'" :history="history"/>
      <Career v-if="block.layout==='career'" :career="career"/>
      <Contacts v-if="block.layout==='contacts'" :contacts="contacts"/>
      <Requisites v-if="block.layout==='requisites'" :requisites="requisites"/>
      <ServiceSection v-if="block.layout==='services'" :services="block.attributes" />
      <Domains v-if="block.layout==='domains'" :domains="domains" :tariffs="domainTarriff" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    'ServiceSection': () => import('~/components/sections/custom/ServiceSection'),
    'Domains': () => import('~/components/sections/general/domains/Domains'),
    'Decision': () => import('~/components/sections/custom/Decision'),
    'Billing': () => import('~/components/sections/general/Billing'),
    'LinkArticles': () => import('~/components/sections/custom/LinkArticles'),
    'Trust': () => import('~/components/sections/general/Trust'),
    'Reviews': () => import('~/components/sections/general/reviews/Reviews'),
    'Journal': () => import('~/components/sections/general/Journal'),
    'SimpleArticles': () => import('~/components/sections/custom/SimpleArticles'),
    'History': () => import('~/components/sections/general/history/History'),
    'Career': () => import('~/components/sections/general/Career'),
    'Contacts': () => import('~/components/sections/general/Contacts'),
    'Requisites': () => import('~/components/sections/general/Requisites')
  },
  async asyncData({store}) {
    await store.dispatch('fetchPage')
  },
  data() {
    return {
        blocks: []
    }
  },
  computed: {
    ...mapGetters([
      'pageBlocks',
      'domains',
      'domainTarriff',
      'history',
      'contacts',
      'career',
      'requisites',
      'billing',
      'trust',
      'reviews',
      'journal'
    ])
  },
  created() {
      this.pageBlocks.forEach(block => {
        if(block.attributes.block[0].layout==='articles') {
          this.blocks.push(block.attributes.block[0].attributes.articles[0])
        } else if(block.attributes.block[0].layout==='images') {
          this.blocks.push(block.attributes.block[0].attributes.images[0])
        } else {
          this.blocks.push(block.attributes.block[0])
        }
      });
  }
}
</script>

<style scoped>


</style>
