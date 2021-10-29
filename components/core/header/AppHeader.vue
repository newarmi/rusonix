<template>
  <header class="header" :style="bgImage">
    <TopLine />
    <HeaderContent />
    <Slider v-if="$route.name==='index'"/>
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
      if(this.$route.name==='index') {
        return this.$store.getters.header
      } 

      if(this.$route.name==='service-slug') {
        return this.$store.getters['service/universal/header']
      }

      return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/header']
    },
    bgImage () {
      console.log(this.header)
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
