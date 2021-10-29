<template>
  <div class="container">
    <RegNavigation />
    <div class="registration__form-wrap">
      <form action="#">
        <div class="registration__wrap">
          <label class="registration__form-text">Email</label>
          <input
            class="registration__form-input"
            type="text"
            value=""
          />
        </div>
        <div class="registration__wrap">
          <label class="registration__form-text">Пароль</label>
          <input class="registration__form-input" type="password" />
        </div>
        <div class="registration__wrap">
          <label class="registration__form-text">ФИО</label>
          <input
            class="registration__form-input"
            type="text"
            value=""
          />
        </div>
        <div class="registration__wrap">
          <label class="registration__form-text">Телефон</label>
          <input class="registration__form-input" type="tel" />
        </div>
        <div class="registration__wrap">
          <label class="registration__form-text">Страна</label>
          <input class="registration__form-input" type="tel" />
        </div>
        <div class="registration__btn">Зарегистрироваться</div>
      </form>
    </div>
    <nuxt-link to="/login" class="registration__link">Уже есть аккаунт? </nuxt-link>
  </div>
</template>

<script>
export default {
  components: {
    RegNavigation: () => import('~/components/sections/auth/RegNavigation.vue'),
  },
  layout: 'auth',
}
</script>

<style scoped>
.auth__wrapper .container {
  max-width: 740px;
  margin-bottom: 50px;
}

.registration__form-wrap {
  padding: 24px 40px;
  background-color: #fff;
  width: 100%;
  max-width: 511px;
  border-radius: 8px;
  margin-bottom: 24px;
}
.registration__wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.registration__form-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 8px;
}
.registration__form-input {
  width: 100%;
  max-width: 431px;
  height: 60px;
  padding: 20px 24px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #ede7e2;

  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.registration__btn {
  width: 100%;
  max-width: 431px;
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;

  color: #ffffff;
  padding: 19px 47px;
  background: #830f1e;
  border-radius: 8px;
  cursor: pointer;
}
.registration__btn:hover {
  background: #660915;
}
.registration__link {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  width: 100%;
  max-width: 511px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.registration__link:hover {
  opacity: 0.4;
}
</style>
