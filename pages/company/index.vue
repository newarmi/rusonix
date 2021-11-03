<template>
  <div id='company'>
    <SectionAdvantage />
    <SectionHistory />
    <SectionMagazine />
    <SectionCareer />
    <SectionContact />
    <SectionRequisites />
  </div>
</template>

<script>
export default {
  name: 'CompanyPage',
  components: {
    'SectionAdvantage': () => import('~/components/sections/company-page/Advantage'),
    'SectionHistory': () => import('~/components/sections/company-page/history/History'),
    'SectionMagazine': () => import('~/components/sections/company-page/Magazine'),
    'SectionCareer': () => import('~/components/sections/company-page/Career'),
    'SectionContact': () => import('~/components/sections/company-page/Contact'),
    'SectionRequisites': () => import('~/components/sections/company-page/Requisites')
  },
  async asyncData({store}) {
      await store.dispatch('company/fetchPage')
  },
}
</script>

