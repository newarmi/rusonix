<template>
  <section class="knowledge">
    <div class="container">
      <div class="knowledge__wrapper">
        <div class="knowledge__wrapper-left">
          <picture class="picture">
            <img
              src="@/assets/img/knowledge-1.png"
              srcset="@/assets/img/knowledge-1@2x.png 2x"
              alt="knowledge 1"
              class="knowledge__img"
            />
          </picture>
          <div class="knowledge__left-title">База знаний</div>
          <div class="knowledge__left-text">
            Воспользуйтесь базой знаний – в ней уже есть ответ на ваш вопрос
          </div>
        </div>
        <div class="knowledge__wrapper-right">
          <picture class="picture">
            <img
              src="@/assets/img/knowledge-2.png"
              srcset="@/assets/img/knowledge-2@2x.png 2x"
              alt="knowledge 2"
              class="knowledge__img"
            />
          </picture>
          <div class="knowledge__right-title">Онлайн консультация</div>
          <div class="knowledge__right-text">
            Если вам необходимо срочное решение вопроса
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped>
.knowledge {
  margin-top: 72px;
  margin-bottom: 72px;
}
.knowledge__wrapper {
  display: flex;
  justify-content: center;
  gap: 62px;
}
.knowledge__img {
  border-radius: 8px;
  margin-bottom: 24px;
}
.knowledge__left-title,
.knowledge__right-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.knowledge__left-text,
.knowledge__right-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #9e9e9e;
}
@media (max-width: 768px) {
  .knowledge {
    margin-top: 28px;
    margin-bottom: 48px;
  }
  .knowledge__wrapper {
    gap: 34px;
  }
}
@media (max-width: 576px) {
  .knowledge__wrapper {
    flex-direction: column;
  }
}

</style>