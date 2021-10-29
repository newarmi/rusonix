<template>
  <section class="form">
    <div class="container">
      <div class="form__title title">
        Анкета для регистрации в партнерской программе
      </div>
    </div>
    <div class="form__wrapper">
      <form action="#" class="partner__form">
        <div class="form__card">
          <div class="form__card-input-field">
            Ваше имя
            <div class="form__card-input-wrap">
              <input
                type="text"
                class="form__card-input"
                value=""
              />
            </div>
          </div>

          <div class="form__card-input-field">
            Email
            <div class="form__card-input-wrap">
              <input
                type="text"
                class="form__card-input"
                value=""
              />
            </div>
          </div>

          <div class="form__card-input-field">
            Телефон
            <div class="form__card-input-wrap">
              <input
                type="text"
                class="form__card-input"
                value=""
              />
            </div>
          </div>

          <div class="form__card-input-field">
            Ваша отрасль
            <div class="form__card-select">
              <select class="form__select">
                <option value="Представитель digital агентства">
                  Представитель digital агентства
                </option>
                <option value="Интегратор">
                  Интегратор
                </option>
              </select>
            </div>
          </div>
          <div class="form__btn-registration">Зарегистрироваться</div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.form {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.form__title {
  margin-bottom: 96px;
}
.form__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;
}
.form__card {
  background-color: #fff;
  padding: 48px 24px;
  width: 508px;
}
.form__card-input-field {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 24px;
}
.form__card-input-field:last-child {
  margin-bottom: 48px;
}
.form__card-input {
  width: 100%;
  max-width: 460px;

  height: 60px;
  padding: 20px 14px;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  outline: none;
}
.form__select {
  width: 100%;
  max-width: 460px;
  height: 60px;
  border: 1px solid #ede7e2;
  border-radius: 8 px;
  -webkit-appearance: none;
  appearance: none;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}
.form__btn-registration {
  width: 100%;
  max-width: 460px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  padding: 19px 29px;
  background: #830f1e;
  border-radius: 8px;
  cursor: pointer;
}
.form__btn-registration:hover {
  background: #660915;
}

@media (max-width: 768px) {
  .form {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .form__wrapper {
    padding: 0;
  }
}
@media (max-width: 576px) {
  .form__card {
    width: 375px;
    padding: 24px 16px;
  }
}

</style>
