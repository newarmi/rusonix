<template>
    <section class="advantage">
        <div class="container">
          <div class="advantage__title title">Преимущества</div>
          <div class="advantage__title-text">
            Сервисы Русоникс ориентированы на качественное и надежное
            функционирование партнерской программы. Среди хостеров из ТОП-10 мы
            выделяемся оперативной техподдержкой с возможностью "живого" общения
            с клиентом и финансово выгодной партнерской программой.
          </div>
          <div class="advantage__wrapper-cards">
            <div class="advantage__card">
              <picture class="picture">
                <img
                  src="@/assets/img/advantage-partner-1.png"
                  srcset="@/assets/img/advantage-partner-1@2x.png 2x"
                  class="partner__img"
                  alt="partner 1"
                />
              </picture>
              <div class="advantage__card-title">Высокие комиссионные</div>
            </div>

            <div class="advantage__card">
              <picture class="picture">
                <img
                  src="@/assets/img/advantage-partner-2.png"
                  srcset="@/assets/img/advantage-partner-2@2x.png 2x"
                  class="partner__img"
                  alt="partner 2"
                />
              </picture>
              <div class="advantage__card-title">Прозрачная статистика</div>
            </div>

            <div class="advantage__card">
              <picture class="picture">
                <img
                  src="@/assets/img/advantage-partner-3.png"
                  srcset="@/assets/img/advantage-partner-3@2x.png 2x"
                  class="partner__img"
                  alt="partner 3"
                />
              </picture>
              <div class="advantage__card-title">Персональный подход</div>
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
.advantage {
  margin-top: 52px;
  margin-bottom: 72px;
}
.advantage__title {
  margin-bottom: 24px;
}
.advantage__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  max-width: 975px;
  margin-bottom: 96px;
}
.advantage__wrapper-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px 34px;
}
.partner__img {
  margin-bottom: 24px;
}
.advantage__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 230px;
  flex: 1 1 calc((100% / 3) - 170px);
}
@media (max-width: 768px) {
  .advantage {
    margin-top: 28px;
    margin-bottom: 48px;
  }
  .advantage__title-text {
    margin-bottom: 48px;
  }
}
</style>
