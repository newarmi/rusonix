<template>
  <div>
    <!-- desktop  -->
    <div class="license__wrapper">
      <div class="license__wrapper-top license__wrapper-top-two">
        <div class="license__top-title license__top-title-two">Сертификат</div>
        <div class="license__top-title license__top-title-two">Кол-во ТБ</div>
        <div class="license__top-title license__top-title-two">Кол-во ГБ</div>
        <div class="license__top-title license__top-title-two">Период</div>
        <div class="license__top-title license__top-title-two">Стоимость</div>
      </div>
      <Storage v-for="line in lines" :key="line.key" :line="line.attributes"/>
    </div>
    <!-- tablet  -->
    <div class="license__tablet-wrapper">
<!--      <ContainerTablet v-for="line in lines" :key="line.key" :line="line.attributes"/>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinesStorages',
  components: {
    Storage: () => import('~/components/sections/service/tariffs/lines/Storage'),
    // ContainerTablet: () => import('~/components/sections/service/tariffs/lines/ContainerTablet'),
  },
  props: {
    lines: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>

.license__tablet-wrapper {
  display: none;
  flex-wrap: wrap;
  gap: 48px 34px;
}


@media (max-width: 1250px) {
  .license__tablet-wrapper {
    display: flex;
  }

  .license__wrapper {
    display: none;
  }
}

.license__top-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  padding: 0 10px;
}
.license__wrapper-top {
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 -10px;
}

.license__top-title-two:nth-child(1) {
  flex: 1 2 27%;
}
.license__top-title-two:nth-child(2) {
  flex: 1 2 10%;
}
.license__top-title-two:nth-child(3) {
  flex: 1 2 12%;
}
.license__top-title-two:nth-child(4) {
  flex: 1 2 15%;
}
.license__top-title-two:nth-child(5) {
  flex: 1 0 36%;
}
</style>
