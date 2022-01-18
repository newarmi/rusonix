<template>
  <header class="header" :style="bgImage">
    <TopLine />   
    <HeaderContent />
    <Slider v-if="$route.fullPath==='/'"/>
  </header>
</template>

<script>
import TopLine from '@/components/core/header/TopLine'

import HeaderContent from '@/components/core/header/HeaderContent'
import Slider from '@/components/core/header/Slider'

export default {
  name: "AppHeader",
  components: {
    TopLine,
    HeaderContent,
    Slider
  },
  data: () => ({

  }),
  computed: {
    header() {
      if(this.$route.name==='service-slug') {
        return this.$store.getters['universal/header']
      }

      if(this.$route.name==='journal-article') {
        return this.$store.getters['journal/header']
      }

      if(this.$route.name==='company-document') {
        return this.$store.getters['requisites/header']
      }

      return this.$store.getters.header
    },
    bgImage () {
      return `background-image: url(${this.$config.imgURL}${this.header.image});`
    }
  }
}
</script>

<style scoped>

.header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-bottom: 80px;
}

</style>
