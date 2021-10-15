<template>
  <section class="details">
        <div class="container">
          <h1 class="details__title title">
            Детальный биллинг и удобный личный кабинет
          </h1>
          <div class="details__text-wrap">
            <p class="details__text text">
              Тарифы на хостинг для сайта с одним из лучших соотношений цены и
              качества на рынке.
            </p>
            <p class="details__text text">
              Просто занимайтесь своим бизнесом, не волнуясь за ваш сайт.
            </p>
          </div>
          <div class="details__wrapper-img">
            <div class="details__img-desk">
              <picture class="picture">
                <img
                  src="@/assets/img/details-desk.jpg"
                  srcset="@/assets/img/details-desk@2x.jpg 2x"
                  class="details__img"
                  alt="details-desk"
                />
              </picture>
            </div>
            <div class="details__img-mob">
              <picture class="picture">
                <img
                  src="@/assets/img/details-mob.jpg"
                  srcset="@/assets/img/details-mob@2x.jpg 2x"
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

}
</script>

<style scoped>
.details {
  background-color: #fdf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}

.details__title {
  margin-bottom: 24px;
}

.details__text-wrap {
  margin-bottom: 48px;
}

.details__text {
  color: #000;
  max-width: 780px;
  opacity: 0.6;
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
    padding-top: 49px;
    padding-bottom: 48px;
  }
  .details__title {
    max-width: 590px;
  }
  .details__text-wrap {
    margin-bottom: 72px;
  }
  .details__text {
    max-width: 590px;
  }
  .details__img-mob {
    display: none;
  }
  .details__img-desk {
    margin-right: 0;
  }
}

@media (max-width: 576px) {
  .details__title {
    max-width: 325px;
  }
  .details__text-wrap {
    margin-bottom: 48px;
  }
  .details__img-desk {
    display: none;
  }
  .details__img-mob {
    display: block;
  }
  .details__wrapper-img {
    justify-content: center;
  }
}
</style>
