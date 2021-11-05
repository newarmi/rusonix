<template>
  <section class="details">
    <div class="container">
      <h1 class="details__title title">
        {{details.title}}
      </h1>
      <p class="details__text text">
        {{details.description}}
      </p>
      <div class="details__wrapper-img">
        <div class="details__img-desk">
          <picture class="picture">
            <img
              :src="details.imageDesktop"
              :srcset="details.imageDesktop"
              class="details__img"
              alt="details-desk"
            />
          </picture>
        </div>
        <div class="details__img-mob">
          <picture class="picture">
            <img
              :src="details.imageMobile"
              :srcset="details.imageMobile"
              class="details__img"
              alt="details-mob"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Details',
  computed: {
      details() {

        const details = this.$store.getters['universal/details'];

        details.imageDesktop = this.$config.imgURL + '' + details.image
        details.imageMobile = this.$config.imgURL + '' + details.content
        return details
      }
  },

}
</script>

<style scoped>
.details {
  background-color: #fdf7f1;
  padding-top: 72px;
  padding-bottom: 72px;
}

.details__title {
  margin-bottom: 24px;
}

.details__text {
  color: #000;
  max-width: 750px;
  opacity: 0.6;
  margin-bottom: 48px;
}

.details__wrapper-img {
  display: flex;
}

.details__img {
  border: 4px solid #272727;
  border-radius: 20px;
}

.details__img-desk {
  margin-right: 73px;
}

.details__img-mob {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
}

@media (max-width: 768px) {
  .details {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .details__img-desk {
    margin-right: 50px;
  }
}

@media (max-width: 576px) {
  .details__wrapper-img {
    justify-content: center;
  }
  .details__img-desk {
    display: none;
  }
  .details__img {
    border: 3px solid #272727;
    border-radius: 20px;
  }
}

</style>
