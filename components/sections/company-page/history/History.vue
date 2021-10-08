<template>
  <section class="history">
    <div class="container">
      <h1 class="history__title title">История</h1>
    </div>
    <div class="container__history-slider">
      <Slider />
    </div>
  </section>
</template>

<script>
import Slider from '@/components/sections/company-page/history/Slider'

export default {
  name: 'History',
  components: {
    Slider
  }
}
</script>

<style scoped>

.history {
  padding-top: 72px;
  background-color: #fcf7f2;
  overflow: hidden;
}

.history__title {
  padding-bottom: 72px;
}
@media (max-width: 992px) {
  .history {
    padding-top: 48px;
  }
}
.container__history-slider {
  width: 100%;
  max-width: 1440px;
  padding-left: 84px;
  padding-bottom: 72px;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .container__history-slider {
    padding-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .container__history-slider {
    padding-left: 24px;
  }
}

</style>
