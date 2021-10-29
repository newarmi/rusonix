<template>
  <div class="auth__header">
    <picture class="picture">
      <nuxt-link to="/"><img
        src="@/assets/img/logo__auth.png"
        srcset="@/assets/img/logo_auth@2x.png"
        class="logo__auth"
        alt="logo"
      /></nuxt-link>
    </picture>
  </div>
</template>

<script>

</script>

<style scoped>
.auth__header {
  margin-bottom: 85px;
}
.logo__auth {
  width: 100%;
  max-width: 125px;
  margin: 48px 26px;
}
</style>