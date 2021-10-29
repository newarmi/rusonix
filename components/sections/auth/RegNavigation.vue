<template>
  <div class="registration__header-navigation">
    <nuxt-link to="/login" class="login">Вход в личный кабинет</nuxt-link>
    <nuxt-link to="login/registration" class="registr">Регистрация</nuxt-link>
  </div>
</template>

<script></script>

<style scoped>
.registration__header-navigation {
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 511px;

  gap: 37px;
  margin-bottom: 48px;
}

.login {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.2;
}
.registr {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;

  border-bottom: 6px solid #0f7f69;
  padding-bottom: 8px;
}

.login:hover {
  opacity: 1;
}


</style>
