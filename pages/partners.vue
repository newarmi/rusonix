<template>
  <div class='hz'>
    <h1>Партнерская программа</h1>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage',
  async asyncData({store}) {
      await store.dispatch('partners/fetchPage')
  },
}
</script>

<style scoped>
  .hz {
    height: 3000px;
    padding: 50px 100px;
  }

</style>
