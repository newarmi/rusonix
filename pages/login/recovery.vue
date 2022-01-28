<template>
<div class="container">
  <p class="recovery_label">Забыли пароль? </p>
  <div class="auth__form-wrap">
    <form action="#">
      <div class="auth__wrap">
          <div class="auth__simple-text">Введите электронную почту, указанную во время регистрации.<br> На нее мы вышлем временный пароль</div>
        <label class="auth__form-text">Почта</label>
        <input
          class="auth__form-input"
          type="text"
          value=""
        />
      </div>
      <div class="auth__btn">Воccтановить пароль</div>
    </form>
  </div>
  <nuxt-link to="/login" class="auth__link">Я вспомнил пароль</nuxt-link>
  <nuxt-link to="/login/support" class="auth__link">Я не помню свою почту</nuxt-link>
</div>
</template>

<script>
export default {
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
  margin-bottom: 20px;
}

.recovery_label {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  width: 100%;
  max-width: 511px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.auth__simple-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-bottom: 20px;
}
</style>
