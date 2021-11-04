<template>
  <div class="start__screen">
    <div class="container">
      <div class="start__screen-search">
        <input
          class="start__screen-input"
          type="text"
          placeholder="Поиск по ресурсам службы поддержки"
        />
        <label for="" class="start__screen-input-icon">
          <img src="@/assets/img/search__support.png" alt="search" />
        </label>
      </div>
      <div class="start__screen-search-descr">
        <div class="start__screen-descr-text">
          Проблема с доступом к серверу
        </div>
        <div class="start__screen-descr-text">
          Ошибка 404</div>
        <div class="start__screen-descr-text">
          Как привязать домен к хостингу
        </div>
        <div class="start__screen-descr-text">
          Зачем нужен SSL сертификат</div>
        <div class="start__screen-descr-text">
          Что делать если изменились реквизиты
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.start__screen {
  display: flex;
  justify-content: center;
  padding-top: 230px;
  padding-bottom: 100px;
  margin-bottom: 203px;
}
.start__screen-search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  max-width: 558px;
  margin: 0 auto 33px;
}
.start__screen-input {
  width: 100%;
  max-width: 558px;
  height: 50px;

  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;

  background: transparent;
  border: 1px solid #dfe1eb;
  padding: 15px 24px;
  border-radius: 25px;
  outline: none;
}
.start__screen-input-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-40%);
  cursor: pointer;
}
.start__screen-input::-webkit-input-placeholder {
  color: #fff;
}
.start__screen-search-descr {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 48px;
  width: 100%;
  max-width: 710px;
  margin: 0 auto;
}
.start__screen-descr-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.contacts li:nth-child(2) {
  display: none;
}
@media (max-width: 768px) {
  .start__screen {
    margin-top: 50px;
    margin-bottom: 61px;
  }
  .start__title-cscard {
    margin-bottom: 24px;
  }
  .start__list {
    margin-bottom: 24px;
  }
  .start__title-descr {
    margin-bottom: 24px;
  }
}
</style>