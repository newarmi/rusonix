<template>
  <div id='app'>
    <transition name="fade">
      <AppHeader
        :key="$route.path"
        :header-data="headerData"
      />
    </transition>
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/core/header/AppHeader'
import Footer from '@/components/core/footer/AppFooter'
// import AppDrawer from '~/components/core/drawer/AppDrawer'

export default {
  name: 'Default',
  components: {
    AppHeader,
    Footer
    // AppDrawer
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'pageData'
    ]),
    headerData () {
      return this.pageData(this.currentPage)
    },
    meta () {
      return [
        { hid: this.headerData.hid, name: this.headerData.name, content: this.headerData.content }
      ]
    }
  },
  watch: {
    '$route' () {
      this.$store.commit('SET_CURRENT_PAGE', this.$route.name)
    }
  },
  created() {
    this.$store.commit('SET_CURRENT_PAGE', this.$route.name)
  }
}
</script>

<style>


/* Анимация появления Header`a при смене роутов*/

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
