<template>
  <section class="file">
    <div class="file__wrapper">
      <div class="file__wrap">
        <p class="file__text text">
          Безналичным банковским переводом или с помощью клиент-банка
        </p>
        <p class="file__text text">
          В качестве основания платежа обязательно указывайте номер счета. Если
          счет не был выставлен — пожалуйста, свяжитесь с клиентским отделом.
        </p>
      </div>
      <div class="file__wrap">
        <p class="file__text text">Наши банковские реквизиты:</p>
        <p class="file__text text">Получатель: ООО «Русоникс»</p>
        <p class="file__text text">Почтовый адрес: 127137, г. Москва, а/я 19</p>
        <p class="file__text text">
          Адрес места нахождения: 125040, г. Москва, 5-я улица Ямского поля, дом
          9, Помещение II, этаж 2, комната №19
        </p>
        <p class="file__text text">
          Фактический адрес: 125040, г. Москва, 5-я улица Ямского поля, дом 9,
          Помещение II, этаж 2, комната №19
        </p>
        <p class="file__text text">ИНН 7707301630</p>
        <p class="file__text text">КПП 771401001</p>
      </div>
      <div class="file__wrap">
        <p class="file__text text">Код по ОКПО: 58206261</p>
        <p class="file__text text">Код по ОКОНХ: 82000, 14965, 52300, 80300</p>
        <p class="file__text text">Код по ОГРН: 1027739119286</p>
        <p class="file__text text">Код по ОКВЭД: 61.10.9</p>
      </div>
      <div class="file__wrap">
        <p class="file__text text">Расчетный счет:: 40702810100250000578</p>
        <p class="file__text text">
          Наименование банка: Филиал «Центральный» Банка ВТБ (ПАО)
        </p>
        <p class="file__text text">Местонахождение банка: г. Москва</p>
        <p class="file__text text">БИК: 044525411</p>
        <p class="file__text text">Кор. Счет: 30101810145250000411</p>
      </div>
      <button class="file__pdf">Скачать PDF</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Requisites',
  async asyncData({store, params}) {
      await store.dispatch('requisites/fetchPage', '/' + params.document)
  },
}
</script>

<style scoped>
.file {
    background-color: #f2f2f2;
    padding-top: 48px;
    padding-bottom: 72px;
}

.file__wrapper {
    width: 1098px;
    background-color: #fff;
    border-radius: 20px;
    padding: 72px 87px;
    margin: 0 auto;
}

.file__text {
    max-width: 890px;
    color: #000;
    opacity: 0.6;
}

.file__text-privacy {
    max-width: 765px;
}

.file__wrap {
    margin-bottom: 48px;
}

.file__pdf {
    width: 200px;
    font-family: "Graphik", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
    color: #fff;
    background-color: #0f7f69;
    border-radius: 6px;
    padding: 15px 20px;
    cursor: pointer;
}

.file__pdf:hover {
    background: #065848;
}

@media (max-width: 992px) {
    .header__decor {
        display: block;
    }
    .file {
        padding-top: 0;
        padding-bottom: 0;
    }
    .file__wrapper {
        width: 100%;
        border-radius: 0;
    }
    .file__wrapper {
        padding: 28px 24px 96px;
    }
}
</style>
