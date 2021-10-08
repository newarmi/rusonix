<template>
  <div id='servicesMainPage'>
    <SectionDecision />
    <SectionLicenses />
    <SectionCertificates />
    <SectionDomains />
  </div>
</template>

<script>
export default {
  name: 'ServicesMain',
  components: {
    'SectionDecision': () => import('~/components/sections/services/Decision'),
    'SectionLicenses': () => import('~/components/sections/services/Licenses'),
    'SectionCertificates': () => import('~/components/sections/services/Certificates'),
    'SectionDomains': () => import('~/components/sections/services/domains/Domains')
  },
  async asyncData({store}) {
      await store.dispatch('services/fetchPage')
  },
}
</script>

<style scoped>

</style>
