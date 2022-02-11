<template>
  <div :id="lines.tag">
    <section class="license__storage">
      <div class="container">
        <div class="license__title title">
          {{ lines.tariffTitle }}
        </div>

        <div v-for="block in lines.block" :key="block.key">
          <LinesContainers v-if="block.layout==='containers'" :lines="block.attributes.lines" />
          <LinesStorages v-if="block.layout==='storages'" :lines="block.attributes.lines" />
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lines',
  components: {
    LinesContainers: () => import('~/components/sections/service/tariffs/lines/LinesContainers'),
    LinesStorages: () => import('~/components/sections/service/tariffs/lines/LinesStorages'),
  },
  props: {
    lines: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

.license__storage {
  background-color: #fcf7f2;
  padding-top: 36px;
  padding-bottom: 36px;
}

.license__title {
  margin-bottom: 48px;
}

@media (max-width: 576px) {
  .license__title {
    margin-bottom: 24px;
  }
}

</style>
