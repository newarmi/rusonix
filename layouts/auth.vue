<template>
  <div class="auth">
    <div class="auth__global-wrapper">
      <AuthHeader />
      <div class="auth__wrapper">
          <nuxt />
      </div>
    </div>
    <div class="auth__background"></div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  components: {
    AuthHeader: () => import('~/components/core/auth/Header.vue'),
  },
}
</script>

<style scoped>
.auth {
  display: flex;
  flex: 1 1 calc(100% / 2);
}

.auth__global-wrapper {
  background-color: #fcf7f2;
  width: 100vw;
  min-height: 100vh;
}

.auth__background {
  width: 100vw;
  min-height: 100vh;
  background-image: url(@/assets/img/bg__auth.png);
  background-repeat: no-repeat;
  background-size: cover;
}


.auth__link:hover {
  opacity: 0.4;
}
</style>
