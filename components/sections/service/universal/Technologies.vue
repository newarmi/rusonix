<template>
  <section :id="items.tag" class="technologies">
    <div class="container">
      <div class="technologies__title title">{{ items.blockTitle }}</div>
      <div class="technologies__text-wrap">
        <div class="technologies__text text" v-html="items.blockDescription"></div>
      </div>
    </div>
    <div class="technologies__container">
      <div class="technologies__cards">
        <div v-for="card in items.blocks" :key="card.key" class="technologies__card-wrap">
          <div class="technologies__card-title">{{card.attributes.textTitle}}</div>
          <div class="technologies__card-text" v-html="card.attributes.text">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Technologies',
  props: {
    items: {
      type: Object,
      required: true
    }
  }, 
}
</script>

<style scoped>
.technologies {
  background-color: #fdf7f2;
  padding-top: 72px;
  padding-bottom: 24px;
}

.technologies__title {
  margin-bottom: 24px;
}

.technologies__text-wrap {
  margin-bottom: 72px;
}

.technologies__container {
  width: 100%;
  max-width: 1440px;
  padding: 0 18px 0 55px;
  margin: 0 auto;
}

.technologies__cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.technologies__card-wrap {
  padding: 24px 18px 24px 30px;
  margin-bottom: 48px;
}

.technologies__card-wrap:hover {
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
}

.technologies__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

.technologies__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 575px;
}

@media (max-width: 1200px) {
  .technologies__card-text {
    max-width: 450px;
  }
}

@media (max-width: 992px) {
  .technologies__card-text {
    max-width: 330px;
  }
}

@media (max-width: 768px) {
  .technologies {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .technologies__card-text {
    max-width: 312px;
  }
}

@media (max-width: 576px) {
  .technologies__text-wrap {
    margin-bottom: 48px;
  }
  .technologies__card-wrap {
    margin-bottom: 24px;
  }
}

</style>