<template>
<div class="container">
  <AuthNavigation />
  <div class="auth__form-wrap">
    <form action="#">
      <div class="auth__wrap">
        <label class="auth__form-text">Email</label>
        <input class="auth__form-input" type="text" value="" />
      </div>
      <div class="auth__wrap">
          <label class="auth__form-text">Пароль</label>
          <input class="auth__form-input" type="password" />
      </div>
      <div class="auth__btn">Войти</div>
    </form>
  </div>
  <nuxt-link to="/login/recovery" class="auth__link">Забыли пароль? </nuxt-link>
</div>
</template>

<script>
export default {
  components: {
      AuthNavigation: () => import('~/components/sections/auth/Navigation.vue'),
  },
  layout: 'auth',
}
</script>

<style scoped>
.auth__wrapper .container {
  max-width: 740px;
}

.auth__form-wrap {
  padding: 24px 40px;
  background-color: #fff;
  width: 100%;
  max-width: 511px;
  border-radius: 8px;
  margin-bottom: 24px;
}
.auth__wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.auth__form-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 8px;
}

.auth__form-input {
  width: 100%;
  max-width: 431px;
  height: 60px;
  padding: 20px 24px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #ede7e2;

  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.auth__btn {
  width: 100%;
  max-width: 431px;
  font-family: "Graphik", sans-serif;
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
.auth__btn:hover {
  background: #660915;
}

.auth__link {
  font-family: "Graphik", sans-serif;
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

@media (max-width: 1200px) {
  .contauner {
    padding: 50px;
  }
}
</style>
