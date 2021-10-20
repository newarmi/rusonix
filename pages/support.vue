<template>
  <div class='hz'>
    <h1>Поддержка</h1>
  </div>
</template>

<script>
export default {
  name: 'SupportPage',
  async asyncData({store}) {
      await store.dispatch('support/fetchPage')
  },
}
</script>

<style scoped>
  .hz {
    height: 3000px;
    padding: 50px 100px;
  }

</style>
