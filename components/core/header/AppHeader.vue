<template>
  <header class="header" :style="bgImage">
    <TopLine />
    <HeaderContent />
    <Slider v-if="headerData.headerSlider"/>
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
  props: {
    headerData: {
      type: Object,
      required: true
    }
  },
  data: () => ({

  }),
  computed: {
    bgImage () {
      return `background-image: url(${this.headerData.headerBgSrc});`
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
}




</style>
