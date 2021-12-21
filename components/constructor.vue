<template>
  <div>
    <div v-for="block in pageblocks" :key="block.key">
      <Decision v-if="block.layout==='solutions'" :decisions="block.attributes" />
      <LinkArticles v-if="block.layout==='link_articles'" :articles="block.attributes" />
      <SimpleArticles v-if="block.layout==='simple_articles'" :articles="block.attributes" />
      <ServiceSection v-if="block.layout==='services'" :services="block.attributes" />
      <ImagesBottom v-if="block.layout==='imagesBottom'" :images="block.attributes" />
      <ImagesInside v-if="block.layout==='imagesInside'" :images="block.attributes" />

      <Knowledge v-if="block.layout==='knowledge'" />
      <Advice v-if="block.layout==='advice'" />
      <History v-if="block.layout==='history'" />
      <Billing v-if="block.layout==='billing'" />
      <Trust v-if="block.layout==='trust'" />
      <Reviews v-if="block.layout==='reviews'" />
      <Career v-if="block.layout==='career'" />
      <Contacts v-if="block.layout==='contacts'" />
      <Requisites v-if="block.layout==='requisites'"/>
      <Partner v-if="block.layout==='partner'" />
      <Form v-if="block.layout==='form'" />
      <Domains v-if="block.layout==='domains'" />
      <Journal v-if="block.layout==='journal'" 
            :navigation="block.attributes.navigation"
            :title="block.attributes.title" :lines="block.attributes.linesNumber" /> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

  
  name: 'ConstructorPage',
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
    'Requisites': () => import('~/components/sections/general/Requisites'),
    'ImagesBottom': () => import('~/components/sections/custom/ImagesBottom'),
    'ImagesInside': () => import('~/components/sections/custom/ImagesInside'),
    'Partner': () => import('~/components/sections/general/Partner'),
    'Form': () => import('~/components/sections/general/Form'),
    'Knowledge': () => import('~/components/sections/general/Knowledge'),
    'Advice': () => import('~/components/sections/general/Advice'),
  },
  props: {
    pageblocks: {
      type: Array,
      required: true
    }
  },
  data() {
      return {
        blocks: []
      }
  },
  computed: {
    ...mapGetters(['tag'])
  },
  mounted() {
    if(this.tag) {
     const block = document.querySelector(this.tag)
      if(block) {  
        block.scrollIntoView()
        this.resetTag()
      }
    }
  },
  methods: {
    ...mapActions(['resetTag'])
  },
    
}
</script>

<style scoped>


</style>
