<template>
  <div id='app'>
    <transition name="fade">
      <AppHeader
        :key="$route.path"
      />
    </transition>
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import AppHeader from '@/components/core/header/AppHeader'
import Footer from '@/components/core/footer/AppFooter'


export default {
  name: 'Default',
  components: {
    AppHeader,
    Footer
  },
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
