<template>
  <section class="magazine">
    <div class="container__magazine-navigation">
      <div class="swiper magazine-swiper">
        <div class="swiper-wrapper navigation__magazine">
          <div
            class="
              swiper-slide
              navigation__magazine-link navigation__magazine-link--active
            "
            data-tab-target="#magazine-link-1"
          >
            Все статьи
          </div>
          <div
            class="swiper-slide navigation__magazine-link"
            data-tab-target="#magazine-link-2"
          >
            Обзоры
          </div>
          <div
            class="swiper-slide navigation__magazine-link"
            data-tab-target="#magazine-link-3"
          >
            Технологии
          </div>
          <div
            class="swiper-slide navigation__magazine-link"
            data-tab-target="#magazine-link-4"
          >
            Безопасность
          </div>
          <div
            class="swiper-slide navigation__magazine-link"
            data-tab-target="#magazine-link-5"
          >
            Новости
          </div>
          <div
            class="swiper-slide navigation__magazine-link"
            data-tab-target="#magazine-link-6"
          >
            E-commerce
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        id="magazine-link-1"
        data-tab-content
        class="magazine__tabs-wrapper magazine__tabs-wrapper--active"
      >
        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture>
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-1.jpg"
                srcset="@/assets/img/magazine-mobile-1@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-1.jpg"
                srcset="@/assets/img/magazine-1@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-2.jpg"
                srcset="@/assets/img/magazine-mobile-2@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-2.jpg"
                srcset="@/assets/img/magazine-2@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-3.jpg"
                srcset="@/assets/img/magazine-mobile-3@2x.jpg 2x"
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
              <p class="magazine__text-title magazine__text-title--mod">
                Типичные ошибки при оценке киберрисков
              </p>
            </div>
          </div>
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-4.jpg"
                srcset="@/assets/img/magazine-mobile-4@2x.jpg 2x"
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
                Тонкие клиенты с точки зрения безопасности
              </p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-5.jpg"
                srcset="@/assets/img/magazine-mobile-5@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-5.jpg"
                srcset="@/assets/img/magazine-5@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>

              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-6.jpg"
                srcset="@/assets/img/magazine-mobile-6@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-6.jpg"
                srcset="@/assets/img/magazine-6@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>
      </div>

      <div id="magazine-link-2" data-tab-content class="magazine__tabs-wrapper">
        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture>
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-1.jpg"
                srcset="@/assets/img/magazine-mobile-1@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-1.jpg"
                srcset="@/assets/img/magazine-1@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность 2</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-2.jpg"
                srcset="@/assets/img/magazine-mobile-2@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-2.jpg"
                srcset="@/assets/img/magazine-2@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии 2</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-3.jpg"
                srcset="@/assets/img/magazine-mobile-3@2x.jpg 2x"
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
              <p class="magazine__text-title magazine__text-title--mod">
                Типичные ошибки при оценке киберрисков
              </p>
            </div>
          </div>
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-4.jpg"
                srcset="@/assets/img/magazine-mobile-4@2x.jpg 2x"
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
                Тонкие клиенты с точки зрения безопасности
              </p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-5.jpg"
                srcset="@/assets/img/magazine-mobile-5@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-5.jpg"
                srcset="@/assets/img/magazine-5@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>

              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-6.jpg"
                srcset="@/assets/img/magazine-mobile-6@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-6.jpg"
                srcset="@/assets/img/magazine-6@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>
      </div>

      <div id="magazine-link-3" data-tab-content class="magazine__tabs-wrapper">
        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture>
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-1.jpg"
                srcset="@/assets/img/magazine-mobile-1@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-1.jpg"
                srcset="@/assets/img/magazine-1@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность 3</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-2.jpg"
                srcset="@/assets/img/magazine-mobile-2@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-2.jpg"
                srcset="@/assets/img/magazine-2@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии 3</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-3.jpg"
                srcset="@/assets/img/magazine-mobile-3@2x.jpg 2x"
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
              <p class="magazine__text-title magazine__text-title--mod">
                Типичные ошибки при оценке киберрисков
              </p>
            </div>
          </div>
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-4.jpg"
                srcset="@/assets/img/magazine-mobile-4@2x.jpg 2x"
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
                Тонкие клиенты с точки зрения безопасности
              </p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-5.jpg"
                srcset="@/assets/img/magazine-mobile-5@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-5.jpg"
                srcset="@/assets/img/magazine-5@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>

              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-6.jpg"
                srcset="@/assets/img/magazine-mobile-6@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-6.jpg"
                srcset="@/assets/img/magazine-6@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>
      </div>

      <div id="magazine-link-4" data-tab-content class="magazine__tabs-wrapper">
        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture>
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-1.jpg"
                srcset="@/assets/img/magazine-mobile-1@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-1.jpg"
                srcset="@/assets/img/magazine-1@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-2.jpg"
                srcset="@/assets/img/magazine-mobile-2@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-2.jpg"
                srcset="@/assets/img/magazine-2@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-3.jpg"
                srcset="@/assets/img/magazine-mobile-3@2x.jpg 2x"
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
              <p class="magazine__text-title magazine__text-title--mod">
                Типичные ошибки при оценке киберрисков
              </p>
            </div>
          </div>
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-4.jpg"
                srcset="@/assets/img/magazine-mobile-4@2x.jpg 2x"
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
                Тонкие клиенты с точки зрения безопасности
              </p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-5.jpg"
                srcset="@/assets/img/magazine-mobile-5@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-5.jpg"
                srcset="@/assets/img/magazine-5@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>

              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-6.jpg"
                srcset="@/assets/img/magazine-mobile-6@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-6.jpg"
                srcset="@/assets/img/magazine-6@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>
      </div>

      <div id="magazine-link-5" data-tab-content class="magazine__tabs-wrapper">
        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture>
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-1.jpg"
                srcset="@/assets/img/magazine-mobile-1@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-1.jpg"
                srcset="@/assets/img/magazine-1@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-2.jpg"
                srcset="@/assets/img/magazine-mobile-2@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-2.jpg"
                srcset="@/assets/img/magazine-2@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-3.jpg"
                srcset="@/assets/img/magazine-mobile-3@2x.jpg 2x"
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
              <p class="magazine__text-title magazine__text-title--mod">
                Типичные ошибки при оценке киберрисков
              </p>
            </div>
          </div>
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-4.jpg"
                srcset="@/assets/img/magazine-mobile-4@2x.jpg 2x"
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
                Тонкие клиенты с точки зрения безопасности
              </p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-5.jpg"
                srcset="@/assets/img/magazine-mobile-5@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-5.jpg"
                srcset="@/assets/img/magazine-5@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>

              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-6.jpg"
                srcset="@/assets/img/magazine-mobile-6@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-6.jpg"
                srcset="@/assets/img/magazine-6@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>
      </div>

      <div id="magazine-link-6" data-tab-content class="magazine__tabs-wrapper">
        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture>
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-1.jpg"
                srcset="@/assets/img/magazine-mobile-1@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-1.jpg"
                srcset="@/assets/img/magazine-1@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-2.jpg"
                srcset="@/assets/img/magazine-mobile-2@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-2.jpg"
                srcset="@/assets/img/magazine-2@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-3.jpg"
                srcset="@/assets/img/magazine-mobile-3@2x.jpg 2x"
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
              <p class="magazine__text-title magazine__text-title--mod">
                Типичные ошибки при оценке киберрисков
              </p>
            </div>
          </div>
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-4.jpg"
                srcset="@/assets/img/magazine-mobile-4@2x.jpg 2x"
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
                Тонкие клиенты с точки зрения безопасности
              </p>
            </div>
          </div>
        </div>

        <div class="magazine__wrapper">
          <div class="magazine__left">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-5.jpg"
                srcset="@/assets/img/magazine-mobile-5@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-5.jpg"
                srcset="@/assets/img/magazine-5@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Безопасность</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>

              <p class="magazine__text-title">История одной DDOS атаки</p>
            </div>
          </div>
          <div class="magazine__right">
            <picture class="picture">
              <source
                media="(max-width: 1250px)"
                src="@/assets/img/magazine-mobile-6.jpg"
                srcset="@/assets/img/magazine-mobile-6@2x.jpg 2x"
              />
              <img
                src="@/assets/img/magazine-6.jpg"
                srcset="@/assets/img/magazine-6@2x.jpg 2x"
                class="magazine__img"
                alt="magazine"
              />
            </picture>
            <div class="magazine__left-about">
              <div class="magazine__wrap-text">
                <a href="#" class="magazine__link">Технологии</a>
                <p class="magazine__text">12 февраля 2021</p>
              </div>
              <p class="magazine__text-title">И целого бэкапа мало</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted() {
    this.$nextTick(() => {
      this.slider = new Swiper('.magazine-swiper', {
        spaceBetween: 48,
        centerSlides: true,
        breakpoints: {
          360: {
            slidesPerView: 2.7,
          },
          480: {
            slidesPerView: 3.5,
          },
          576: {
            slidesPerView: 4.2,
          },
          768: {
            slidesPerView: 4.5,
          },
          820: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 5.2,
          },
          992: {
            slidesPerView: 6,
          },
        },
      })
    })

    const magazineTabs = document.querySelectorAll('[data-tab-target]')
    const magazineTabContents = document.querySelectorAll('[data-tab-content]')

    magazineTabs.forEach((tab) => {
      tab?.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        magazineTabContents.forEach((magazineTabContent) => {
          magazineTabContent.classList.remove('magazine__tabs-wrapper--active')
        })
        target.classList.add('magazine__tabs-wrapper--active')
        magazineTabs.forEach((tab) => {
          tab.classList.remove('navigation__magazine-link--active')
        })
        tab.classList.add('navigation__magazine-link--active')
      })
    })
  },
}
</script>

<style scoped>
.header__magazine {
  background-image: url(@/assets/img/back-img-header-magazine.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.start__screen {
  padding-top: 138px;
  padding-bottom: 118px;
}
.start__title-magazine {
  margin-bottom: 48px;
}
.start__magazine-btn {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  padding: 15px 33px;
  background-color: #0f7f69;
  border-radius: 8px;
  cursor: pointer;
}
.start__magazine-btn:hover {
  background: #065848;
}
/* navigation Magazine*/
.container__magazine-navigation {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;

  overflow: hidden;
}
.navigation__magazine-link {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22 px;
  letter-spacing: 0px;
  text-align: left;
  width: auto !important;
}
.navigation__magazine-link--active {
  color: #202a89;
  border-bottom: 2px solid #202a89;
}
.navigation__magazine-link:hover {
  cursor: pointer;
  color: #202a89;
  border-bottom: 2px solid #202a89;
}
.magazine-swiper {
  margin: 28px auto 72px;
}

.magazine__wrapper {
  display: flex;
  justify-content: space-between;
  gap: 33px;
  margin-bottom: 72px;
}

.magazine__left-about {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 21px;
}
.magazine__wrap-text {
  display: flex;
  margin-bottom: 21px;
}
.magazine__link {
  color: #636aac;
  opacity: 0.6;
  font-family: 'Graphik', sans-serif;
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
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #bababa;
  position: relative;
}
.magazine__text-title {
  font-family: 'Graphik', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}
.magazine__text-title--mod {
  max-width: 400px;
}
.magazine__text::before {
  display: block;
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  left: -24%;
}
.magazine__left,
.magazine__left--mod {
  max-width: 808px;
}
.magazine__right,
.magazine__right--mod {
  max-width: 430px;
}
[data-tab-content] {
  display: none;
}
.magazine__tabs-wrapper--active[data-tab-content] {
  display: block;
}
@media (max-width: 1250px) {
  .magazine__right {
    max-width: none;
  }
  .magazine__img {
    max-width: 343px;
  }
  .magazine__text-title {
    max-width: 343px;
  }
}
@media (max-width: 992px) {
  .magazine__wrapper {
    gap: 12px;
  }
}
@media (max-width: 768px) {
  .magazine__wrapper {
    margin-bottom: 48px;
  }
  .container__magazine-navigation {
    padding: 0 0 0 24px;
  }
}
@media (max-width: 750px) {
  .magazine__wrapper {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24px;
  }
}
</style>
