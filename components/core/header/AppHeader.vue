<template>
  <header class="header" :style="bgImage">
    <TopLine />
    <HeaderContent />
    <Slider v-if="$route.name==='index'"/>
    <Search v-if="header.search"/>
  </header>
</template>

<script>
import TopLine from '@/components/core/header/TopLine'
import HeaderContent from '@/components/core/header/HeaderContent'
import Slider from '@/components/core/header/Slider'
import Search from '@/components/core/header/Search'

export default {
  name: "AppHeader",
  components: {
    TopLine,
    HeaderContent,
    Slider,
    Search
  },
  data: () => ({

  }),
  computed: {
    header() {
      if(this.$route.name==='index') {
        return this.$store.getters.header
      } 

      if(this.$route.name==='service-slug') {
        return this.$store.getters['service/universal/header']
      }

      if(this.$route.name==='journal-article') {
        return this.$store.getters['journal/header']
      }

      return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/header']
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
  min-height: 100vh;
}

</style>
