<template>
  <section class="license">
    <div class="container">
      <div class="addition__wrapper">
        <div class="addition__wrap" @click="showContent">
          <span class="plus-minus__plesk" :class="{ 'plus-minus__plesk--mod': showAdditions }"></span>
          <div class="addition__wrapper-title">
            {{ addition.additionTitle }}
          </div>
        </div>
        <div v-show="showAdditions" class="addition__wrap-content ">
          <div class="addition__wrap-title">
            <div class="addition__text">Редакция</div>
            <div class="addition__text">Период</div>
            <div class="addition__text">Стоимость</div>
          </div>
          <AdditionLine v-for="item in addition.additions" :key="item.key" :addition="item.attributes" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdditionLine from "~/components/sections/service/tariffs/AdditionLine";
export default {
  components: {AdditionLine},
  props: {
    addition: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showAdditions: false
    }
  },
  methods: {
    showContent() {
      this.showAdditions = !this.showAdditions
    }
  },
}
</script>

<style scoped>

.license {
  background-color: #fcf7f2;
  padding-top: 10px;
  padding-bottom: 36px;
}

@media (max-width: 768px) {
  .license {
    padding-top: 48px;
    padding-bottom: 48px;
  }
}

/* addition */
.addition__wrapper {
  background-color: #fff;
  border-radius: 8px;
}
.addition__wrap {
  display: flex;
  align-items: center;
  padding: 28px 24px;
  cursor: pointer;
}

.plus-minus__plesk {
  position: relative;
  width: 24px;
  height: 24px;
}
.plus-minus__plesk::before {
  content: '';
  position: absolute;
  background-color: #830f1e;
  top: 4%;
  left: 46%;
  width: 2px;
  height: 100%;

  border-radius: 2px;
}
.plus-minus__plesk--mod::before {
  display: none;
}
.plus-minus__plesk::after {
  content: '';
  position: absolute;
  background-color: #830f1e;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;

  border-radius: 2px;
}

.addition__wrapper-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 40px;
}
.addition__wrap-title {
  display: flex;
  padding: 24px;
  gap: 60px;
}
.addition__wrap-title > div {
  flex: 1 1 auto;
}
.addition__wrap-title > div:nth-child(1) {
  flex: 0 0 35%;
}
.addition__wrap-title > div:nth-child(2) {
  flex: 0 0 25%;
}
@media (max-width: 1240px) {
  .addition__wrap-title > div:nth-child(2) {
    flex: 0 1 30%;
  }
  .addition__wrap-title > div:nth-child(3) {
    flex: 1 0 auto;
  }
}

.addition__text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}

@media (max-width: 1250px) {
  .addition__wrap-title {
    display: none;
  }
}
</style>
