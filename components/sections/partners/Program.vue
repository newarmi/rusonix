<template>
    <section class="program">
        <div class="container">
          <div class="program__title title">Для кого подходит программа</div>
          <div class="program__title-wrap-text">
            <div class="program__title-text">
              В Русониксе партнеры получают готовые "Серверы без забот" с
              обслуживанием
            </div>
            <div class="program__title-text">
              и с предустановленной панелью Plesk – мировым лидером среди
              контрольных панелей.
            </div>
          </div>
          <div class="program__wrapper-cards">
            <div class="program__card">
              <picture class="picture">
                <img
                  src="@/assets/img/program-img-1.png"
                  srcset="@/assets/img/program-img-1@2x.png 2x"
                  class="program__img"
                  alt="program 1"
                />
              </picture>
              <div class="program__card-title">
                Digital агентствам и студиям
              </div>
            </div>

            <div class="program__card">
              <picture class="picture">
                <img
                  src="@/assets/img/program-img-2.png"
                  srcset="@/assets/img/program-img-2@2x.png 2x"
                  class="program__img"
                  alt="program 2"
                />
              </picture>
              <div class="program__card-title">Интеграторам</div>
            </div>

            <div class="program__card">
              <picture class="picture">
                <img
                  src="@/assets/img/program-img-3.png"
                  srcset="@/assets/img/program-img-3@2x.png 2x"
                  class="program__img"
                  alt="program 3"
                />
              </picture>
              <div class="program__card-title">Аутсорс командам</div>
            </div>

            <div class="program__card">
              <picture class="picture">
                <img
                  src="@/assets/img/program-img-4.png"
                  srcset="@/assets/img/program-img-4@2x.png 2x"
                  class="program__img"
                  alt="program 4"
                />
              </picture>
              <div class="program__card-title">DevOps и тим лидам</div>
            </div>

            <div class="program__card">
              <picture class="picture">
                <img
                  src="@/assets/img/program-img-5.png"
                  srcset="@/assets/img/program-img-5@2x.png 2x"
                  class="program__img"
                  alt="program 5"
                />
              </picture>
              <div class="program__card-title">IT блоггерам</div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.program {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.program__title {
  margin-bottom: 24px;
}
.program__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}
.program__title-wrap-text {
  margin-bottom: 96px;
}
.program__wrapper-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 48px 33px;
}
.program__card {
  flex: 0 1 calc((100% / 3) - 33px);
  position: relative;
}
.program__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  position: absolute;
  left: 24px;
  bottom: 48px;
}
@media (max-width: 1200px) {
  .program__card {
    flex: 0 1 calc((100% / 2) - 34px);
  }

  .program__card-title {
    max-width: 250px;
  }
}
@media (max-width: 768px) {
  .program {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .program__title-wrap-text {
    margin-bottom: 48px;
  }
}
@media (max-width: 576px) {
  .program__wrapper-cards {
    flex-direction: column;
    gap: 24px 33px;
  }
}
</style>
