<template>
  <header class="header" :style="bgImage">
    <TopLine />   
    <HeaderContent />
    <Slider v-if="$route.fullPath==='/'"/>
  </header>
</template>

<script>

export default {
  name: "AppHeader",
  components: {
    TopLine: () => import('@/components/core/header/TopLine'),
    HeaderContent: () => import('@/components/core/header/HeaderContent'),
    Slider: () => import('@/components/core/header/Slider')
  },
  head() {
    return {
        title: this.$route.name !== 'knowledge-category-post' ? this.header.meta_title : this.$store.getters['knowledge/metaTitle'],
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: this.header.meta_description,
            }
        ],
    }
  },
  computed: {
    header() {
      switch(this.$route.name) {
        case('service-slug'): return this.$store.getters['universal/header']
        case('company-document'): return this.$store.getters['requisites/header']
        case('journal-article'): return this.$store.getters['journal/header']
      }
      return this.$store.getters.header
    },
    bgImage () {
      return `background-image: url(${this.$config.imgURL}${this.header.image});`
    }
  },
  created() {
    console.log(this.$route.name)
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
