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

export default {
  name: 'Default',
  components: {
   AppHeader: () => import('@/components/core/header/AppHeader'),
   Footer: () => import('@/components/core/footer/AppFooter')
  },
}
</script>

<style>

</style>
