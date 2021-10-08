<template>
  <section class="decision">
    <div class="container">
      <h1 class="decision__title title">{{decision.title}}</h1>
      <div class="decision__wrapper-cards">
        <div v-for="card in decision.sections" :key="card.title" class="decision__card" >
          <div class="decision__card-title">{{card.title}}</div>
          <p class="decision__card-text">
            {{card.content}}
          </p>
          <ul class="decision__list">
            <li class="decision__item">
              <a href="#" class="decision__link">NVMe</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Intel Xeon Gold</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">KVM</a>
            </li>
            <li class="decision__item">
              <a href="#" class="decision__link">Plesk</a>
            </li>
          </ul>
          <picture class="picture">
            <img
              src='~/assets/img/decision-card-1.png'
              srcset="@/assets/img/decision-card-1@2x.png 2x"
              class="decision__img"
              alt="decision-card"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Decision',
  computed: {
        decision() {
        return this.$store.getters.decision
      }
  }
}
</script>

<style scoped>

.decision {
  margin-top: 46px;
  margin-bottom: 72px;
}

.title {
  font-family: "Graphik", sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
}

.decision__title {
  color: #000000;
  margin-bottom: 72px;
}

.decision__wrapper-cards {
  display: flex;
  gap: 34px;
}

.decision__card {
  width: 402px;
  height: 520px;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  box-shadow: 0px 20px 30px -20px #fcf7f2;

  position: relative;
}
.decision__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 190px;
  margin-top: 48px;
  margin-left: 29px;
  margin-bottom: 24px;
}

.decision__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #9e9e9e;
  max-width: 275px;
  margin-left: 29px;
  margin-bottom: 24px;
}

.decision__list {
  display: flex;
  align-items: center;
  margin-left: 29px;
}

.decision__item {
  padding-right: 20px;
}

.decision__link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  color: #5b5b5b;
}

.decision__img {
  position: absolute;
  z-index: -1;
  top: 41%;
  left: 2%;
}
@media (max-width: 1200px) {
  .decision__wrapper-cards {
    flex-wrap: wrap;
  }
}
@media (max-width: 992px) {
  .decision {
    margin-top: 8px;
    margin-bottom: 48px;
  }
  .decision__title {
    margin-bottom: 48px;
  }

  .decision__card {
    width: 343px;
  }
}

@media (max-width: 576px) {
  .decision__wrapper-cards {
    gap: 24px;
    justify-content: center;
  }
}

</style>
