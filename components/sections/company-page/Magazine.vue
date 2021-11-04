<template>
  <section class="magazine">
    <div class="container">
      <h1 class="magazine__title title">События и новости</h1>
      <div class="magazine__wrapper">
        <div class="magazine__left">
          <picture class="picture">
            <source
              media="(max-width: 1250px)"
              srcset="@/assets/img/magazine-mobile-4.jpg, @/assets/img/magazine-mobile-4@2x.jpg 2x"
            />
            <img
              src="@/assets/img/magazine-4.jpg"
              srcset="@/assets/img/magazine-4@2x.jpg 2x"
              class="magazine__img"
              alt="magazine"
            />
          </picture>
          <div class="magazine__left-about">
            <div class="magazine__wrap-text">
              <a href="#" class="magazine__link">Технологии</a>
              <p class="magazine__text">12 февраля 2021</p>
            </div>
            <p class="magazine__text-title magazine__text-title--mod">
              Компания Русоникс успешно защитила serverless проект в MTS
              StartUp Hub
            </p>
          </div>
        </div>
        <div class="magazine__right">
          <picture class="picture">
            <img
              src="@/assets/img/magazine-7.jpg"
              srcset="@/assets/img/magazine-7@2x.jpg 2x"
              class="magazine__img"
              alt="magazine"
            />
          </picture>
          <div class="magazine__left-about">
            <div class="magazine__wrap-text">
              <a href="#" class="magazine__link">Безопасность</a>
              <p class="magazine__text">12 февраля 2021</p>
            </div>
            <p class="magazine__text-title magazine__text-title--mod2">
              Infobox стал частью группы компаний Rusonyx
            </p>
          </div>
        </div>
      </div>
      <div class="magazine__wrapper">
        <div class="magazine__left">
          <picture class="picture">
            <source
              media="(max-width: 1250px)"
              srcset="@/assets/img/magazine-mobile-3.jpg, @/assets/img/magazine-mobile-3@2x.jpg 2x"
            />
            <img
              src="@/assets/img/magazine-3.jpg"
              srcset="@/assets/img/magazine-3@2x.jpg 2x"
              class="magazine__img"
              alt="magazine"
            />
          </picture>
          <div class="magazine__left-about">
            <div class="magazine__wrap-text">
              <a href="#" class="magazine__link">Безопасность</a>
              <p class="magazine__text">12 февраля 2021</p>
            </div>
            <p class="magazine__text-title">
              Rusonyx приобрел Зенон Н.С.П.
            </p>
          </div>
        </div>
        <div class="magazine__right">
          <picture class="picture">
            <source
              media="(max-width: 1250px)"
              srcset="@/assets/img/magazine-mobile-4.jpg, @/assets/img/magazine-mobile-4@2x.jpg 2x"
            />
            <img
              src="@/assets/img/magazine-4.jpg"
              srcset="@/assets/img/magazine-4@2x.jpg 2x"
              class="magazine__img"
              alt="magazine"
            />
          </picture>
          <div class="magazine__left-about">
            <div class="magazine__wrap-text">
              <a href="#" class="magazine__link">Технологии</a>
              <p class="magazine__text">12 февраля 2021</p>
            </div>
            <p class="magazine__text-title">
              Rusonyx приобретает компанию Caravan Aero
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Magazine'
}
</script>

<style scoped>
.nl__black {
  color: black;
}


.start__title-magazine {
  margin-bottom: 48px;
}

.magazine__title {
  padding-top: 72px;
  margin-bottom: 72px;
}

.magazine__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;
  gap: 33px;
}
.magazine__left-about {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 21px;
      max-width: 431px;
}
 
 .magazine__img-big{
   width: 100%;
   width: 808px;
   height: 390px;
   border-radius: 6px;
   /* object-fit: cover; */
  
 }
 .magazine__img-small{
  width: 100%;
  max-width: 431px;
  height: 390px;
  border-radius: 6px; 
  /* object-fit: cover; */
 }
.magazine__wrap-text {
  display: flex;
}

.magazine__link {
  color: #636aac;
  opacity: 0.6;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  margin-right: 52px;
}

.magazine__text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #bababa;
  position: relative;
}

.magazine__text-title--mod {
  max-width: 400px;
}

.magazine__text::before {
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  left: -24%;
}

.magazine__text-title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

@media (max-width: 1250px) {
  .magazine__text-title {
    max-width: 340px;
  }
  .magazine__right {
    max-width: none;
  }
  .magazine__img-big{
    width: 100%;
    max-width: 808px;
    
  }
  .magazine__img {
    object-fit: cover;
    max-width: 343px;
    height: 390px;
  }
}

@media (max-width: 768px) {
  .magazine__title {
    padding-top: 48px;
    margin-bottom: 48px;
  }
  .magazine__wrapper {
    margin-bottom: 48px;
  }
}

@media (max-width: 576px) {
  .magazine__wrapper {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24px;
  }
}
</style>
