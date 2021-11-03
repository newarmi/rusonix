<template>
  <section class="sertificate">
    <div class="container">
      <div class="sertificate__title title">Выберите свой сертификат</div>
      <div class="sertificate__wrapper">
        <div class="sertificate__wrapper-first">
          <div class="sertificate__wrapper-left">
            <div class="sertificate__wrap-left">
              <div class="sertificate__left-title">
                Для чего подходит сертификат
              </div>
              <div class="sertificate__custom-radio">
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-1"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-1"
                    value="E-commerce"
                  />
                  <label class="custom__radio-label" for="custom-radio-1"
                    >E-commerce</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-2"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-1"
                    value="Подписи кода"
                  />
                  <label class="custom__radio-label" for="custom-radio-2"
                    >Подписи кода</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-3"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-1"
                    value="Почтовых серверов"
                  />
                  <label class="custom__radio-label" for="custom-radio-3"
                    >Почтовых серверов</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-4"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-1"
                    value="Сайтов"
                  />
                  <label class="custom__radio-label" for="custom-radio-4"
                    >Сайтов</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-5"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-1"
                    value="Любое"
                    checked="checked"
                  />
                  <label class="custom__radio-label" for="custom-radio-5"
                    >Любое</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sertificate__wrapper-right">
            <div class="sertificate__wrap-right">
              <div class="sertificate__right-title">Уровень доверия</div>

              <div class="sertificate__custom-radio">
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-6"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-6"
                    value="Базовый"
                  />
                  <label class="custom__radio-label" for="custom-radio-6"
                    >Базовый</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-7"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-6"
                    value="Стандартный"
                  />
                  <label class="custom__radio-label" for="custom-radio-7"
                    >Стандартный</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-8"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-6"
                    value="Максимальный"
                  />
                  <label class="custom__radio-label" for="custom-radio-8"
                    >Максимальный</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-9"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-6"
                    value="Любой"
                    checked="checked"
                  />
                  <label class="custom__radio-label" for="custom-radio-9"
                    >Любой</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sertificate__wrapper-second">
          <div class="sertificate__wrapper-left">
            <div class="sertificate__wrap-left">
              <div class="sertificate__left-title">Сертификационный центр</div>
              <div class="sertificate__custom-radio">
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-10"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-11"
                    value="GlobalSign"
                  />
                  <label class="custom__radio-label" for="custom-radio-10"
                    >GlobalSign</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-11"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-11"
                    value="Comodo"
                  />
                  <label class="custom__radio-label" for="custom-radio-11"
                    >Comodo</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-12"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-11"
                    value="AlphaSSL"
                  />
                  <label class="custom__radio-label" for="custom-radio-12"
                    >AlphaSSL</label
                  >
                </div>

                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-13"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-11"
                    value="Любое"
                    checked="checked"
                  />
                  <label class="custom__radio-label" for="custom-radio-13"
                    >Любой</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="sertificate__wrapper-right">
            <div class="sertificate__wrap-right">
              <div class="sertificate__right-title">Дополнительные домены</div>

              <div class="sertificate__custom-radio">
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-14"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-14"
                    value="Поддержка поддоменов WС"
                  />
                  <label class="custom__radio-label" for="custom-radio-14"
                    >Поддержка поддоменов WС</label
                  >
                </div>
                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-15"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-14"
                    value="Поддержка мультидоменов SAN"
                  />
                  <label class="custom__radio-label" for="custom-radio-15"
                    >Поддержка мультидоменов SAN</label
                  >
                </div>

                <div class="sertificate__custom-radio-wrap">
                  <input
                    id="custom-radio-16"
                    class="custom-radio"
                    type="radio"
                    name="custom-radio-14"
                    value="Любой"
                    checked="checked"
                  />
                  <label class="custom__radio-label" for="custom-radio-16"
                    >Любой</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sertificate__buy-wrapper-title">
        <div class="sertificate__buy-title">Сертификат</div>
        <div class="sertificate__buy-title">Поставщик</div>
        <div class="sertificate__buy-title">Уровень</div>
        <div class="sertificate__buy-title">Стоимость за 1 год</div>
      </div>
      <div class="sertificate__buy-wrapper">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">
            Organization ServerSign Wildcard
          </div>
          <div class="sertificate__content">
            <picture class="picture">
              <img
                src="@/assets/img/sertificate-global.png"
                srcset="@/assets/img/sertificate-global@2x.png 2x"
                alt="global"
                class="sertificate-global-img"
              />
            </picture>
            <div class="sertificate__content-text">Стандартный</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">9293 ₽</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">12390 ₽</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>
        <div class="sertificate__buy-wrapper-info">
          <div class="sertificate__info-text">
            <span class="sertificate__buy--mod"> SGC Wildcard SSL</span> —
            подходит для поддержки поддоменов, расположенных на одном доменом
            имени (www.abc.ru, mail.abc.ru, ftp.abc.ru). Отличительной
            особенностью такого SSL-сертификата является то, что он не только
            поддерживает современные операционные системы и браузеры, но также
            устаревшее ПО и операционные системы с 40 битной SSL-защитой.
          </div>
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Для</div>
                <div class="sertificate__info-left-text">Шифрование</div>
                <div class="sertificate__info-left-text">Размер ключа</div>
                <div class="sertificate__info-left-text">Проверка</div>
                <div class="sertificate__info-left-text">Особенность</div>
                <div class="sertificate__info-left-text">
                  Поддержка браузеров
                </div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">Юр. лиц</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">2048 бит</div>
                <div class="sertificate__info-right-text">Домен и компания</div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-left--mobile">
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Для
                </div>
                <div class="sertificate__info-right-text">Юр. лиц</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Шифрование
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Размер ключа
                </div>
                <div class="sertificate__info-right-text">2048 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Проверка
                </div>
                <div class="sertificate__info-right-text">Домен и компания</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Особенность
                </div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Поддержка браузеров
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>

            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Защищает</div>
                <div class="sertificate__info-left-text">Скорость выдачи</div>
                <div class="sertificate__info-left-text">Переиздание</div>
                <div class="sertificate__info-left-text">Оптимально для</div>
                <div class="sertificate__info-left-text">
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-left-text">Печать доверия</div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
                <div class="sertificate__info-right-text">Да</div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-right--mobile">
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Защищает
                </div>
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Скорость выдачи
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Переиздание
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Оптимально для
                </div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Печать доверия
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sertificate__buy-wrapper">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">
            Organization ServerSign Wildcard
          </div>
          <div class="sertificate__content">
            <picture class="picture">
              <img
                src="@/assets/img/sertificate-global.png"
                srcset="@/assets/img/sertificate-global@2x.png 2x"
                alt="global"
                class="sertificate-global-img"
              />
            </picture>
            <div class="sertificate__content-text">Стандартный</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">9293 ₽</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">12390 ₽</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>
        <div class="sertificate__buy-wrapper-info">
          <div class="sertificate__info-text">
            <span class="sertificate__buy--mod"> SGC Wildcard SSL</span> —
            подходит для поддержки поддоменов, расположенных на одном доменом
            имени (www.abc.ru, mail.abc.ru, ftp.abc.ru). Отличительной
            особенностью такого SSL-сертификата является то, что он не только
            поддерживает современные операционные системы и браузеры, но также
            устаревшее ПО и операционные системы с 40 битной SSL-защитой.
          </div>
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Для</div>
                <div class="sertificate__info-left-text">Шифрование</div>
                <div class="sertificate__info-left-text">Размер ключа</div>
                <div class="sertificate__info-left-text">Проверка</div>
                <div class="sertificate__info-left-text">Особенность</div>
                <div class="sertificate__info-left-text">
                  Поддержка браузеров
                </div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">Юр. лиц</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">2048 бит</div>
                <div class="sertificate__info-right-text">Домен и компания</div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-left--mobile">
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Для
                </div>
                <div class="sertificate__info-right-text">Юр. лиц</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Шифрование
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Размер ключа
                </div>
                <div class="sertificate__info-right-text">2048 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Проверка
                </div>
                <div class="sertificate__info-right-text">Домен и компания</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Особенность
                </div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Поддержка браузеров
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>

            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Защищает</div>
                <div class="sertificate__info-left-text">Скорость выдачи</div>
                <div class="sertificate__info-left-text">Переиздание</div>
                <div class="sertificate__info-left-text">Оптимально для</div>
                <div class="sertificate__info-left-text">
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-left-text">Печать доверия</div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
                <div class="sertificate__info-right-text">Да</div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-right--mobile">
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Защищает
                </div>
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Скорость выдачи
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Переиздание
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Оптимально для
                </div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Печать доверия
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sertificate__buy-wrapper">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">
            Organization ServerSign Wildcard
          </div>
          <div class="sertificate__content">
            <picture class="picture">
              <img
                src="@/assets/img/sertificate-comodo.png"
                srcset="@/assets/img/sertificate-comodo@2x.png 2x"
                alt="comodo"
                class="sertificate-comodo-img"
              />
            </picture>
            <div class="sertificate__content-text">Стандартный</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">9293 ₽</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">12390 ₽</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>
        <div class="sertificate__buy-wrapper-info">
          <div class="sertificate__info-text">
            <span class="sertificate__buy--mod"> SGC Wildcard SSL</span> —
            подходит для поддержки поддоменов, расположенных на одном доменом
            имени (www.abc.ru, mail.abc.ru, ftp.abc.ru). Отличительной
            особенностью такого SSL-сертификата является то, что он не только
            поддерживает современные операционные системы и браузеры, но также
            устаревшее ПО и операционные системы с 40 битной SSL-защитой.
          </div>
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Для</div>
                <div class="sertificate__info-left-text">Шифрование</div>
                <div class="sertificate__info-left-text">Размер ключа</div>
                <div class="sertificate__info-left-text">Проверка</div>
                <div class="sertificate__info-left-text">Особенность</div>
                <div class="sertificate__info-left-text">
                  Поддержка браузеров
                </div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">Юр. лиц</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">2048 бит</div>
                <div class="sertificate__info-right-text">Домен и компания</div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-left--mobile">
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Для
                </div>
                <div class="sertificate__info-right-text">Юр. лиц</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Шифрование
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Размер ключа
                </div>
                <div class="sertificate__info-right-text">2048 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Проверка
                </div>
                <div class="sertificate__info-right-text">Домен и компания</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Особенность
                </div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Поддержка браузеров
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>

            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Защищает</div>
                <div class="sertificate__info-left-text">Скорость выдачи</div>
                <div class="sertificate__info-left-text">Переиздание</div>
                <div class="sertificate__info-left-text">Оптимально для</div>
                <div class="sertificate__info-left-text">
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-left-text">Печать доверия</div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
                <div class="sertificate__info-right-text">Да</div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-right--mobile">
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Защищает
                </div>
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Скорость выдачи
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Переиздание
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Оптимально для
                </div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Печать доверия
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sertificate__buy-wrapper">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">
            Organization ServerSign Wildcard
          </div>
          <div class="sertificate__content">
            <picture class="picture">
              <img
                src="@/assets/img/sertificate-comodo.png"
                srcset="@/assets/img/sertificate-comodo@2x.png 2x"
                alt="comodo"
                class="sertificate-comodo-img"
              />
            </picture>
            <div class="sertificate__content-text">Стандартный</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">9293 ₽</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">12390 ₽</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>
        <div class="sertificate__buy-wrapper-info">
          <div class="sertificate__info-text">
            <span class="sertificate__buy--mod"> SGC Wildcard SSL</span> —
            подходит для поддержки поддоменов, расположенных на одном доменом
            имени (www.abc.ru, mail.abc.ru, ftp.abc.ru). Отличительной
            особенностью такого SSL-сертификата является то, что он не только
            поддерживает современные операционные системы и браузеры, но также
            устаревшее ПО и операционные системы с 40 битной SSL-защитой.
          </div>
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Для</div>
                <div class="sertificate__info-left-text">Шифрование</div>
                <div class="sertificate__info-left-text">Размер ключа</div>
                <div class="sertificate__info-left-text">Проверка</div>
                <div class="sertificate__info-left-text">Особенность</div>
                <div class="sertificate__info-left-text">
                  Поддержка браузеров
                </div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">Юр. лиц</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">2048 бит</div>
                <div class="sertificate__info-right-text">Домен и компания</div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-left--mobile">
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Для
                </div>
                <div class="sertificate__info-right-text">Юр. лиц</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Шифрование
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Размер ключа
                </div>
                <div class="sertificate__info-right-text">2048 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Проверка
                </div>
                <div class="sertificate__info-right-text">Домен и компания</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Особенность
                </div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Поддержка браузеров
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>

            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Защищает</div>
                <div class="sertificate__info-left-text">Скорость выдачи</div>
                <div class="sertificate__info-left-text">Переиздание</div>
                <div class="sertificate__info-left-text">Оптимально для</div>
                <div class="sertificate__info-left-text">
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-left-text">Печать доверия</div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
                <div class="sertificate__info-right-text">Да</div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-right--mobile">
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Защищает
                </div>
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Скорость выдачи
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Переиздание
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Оптимально для
                </div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Печать доверия
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sertificate__buy-wrapper">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">
            Organization ServerSign Wildcard
          </div>
          <div class="sertificate__content">
            <picture class="picture">
              <img
                src="@/assets/img/sertificate-comodo.png"
                srcset="@/assets/img/sertificate-comodo@2x.png 2x"
                alt="comodo"
                class="sertificate-comodo-img"
              />
            </picture>
            <div class="sertificate__content-text">Стандартный</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">9293 ₽</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">12390 ₽</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>
        <div class="sertificate__buy-wrapper-info">
          <div class="sertificate__info-text">
            <span class="sertificate__buy--mod"> SGC Wildcard SSL</span> —
            подходит для поддержки поддоменов, расположенных на одном доменом
            имени (www.abc.ru, mail.abc.ru, ftp.abc.ru). Отличительной
            особенностью такого SSL-сертификата является то, что он не только
            поддерживает современные операционные системы и браузеры, но также
            устаревшее ПО и операционные системы с 40 битной SSL-защитой.
          </div>
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Для</div>
                <div class="sertificate__info-left-text">Шифрование</div>
                <div class="sertificate__info-left-text">Размер ключа</div>
                <div class="sertificate__info-left-text">Проверка</div>
                <div class="sertificate__info-left-text">Особенность</div>
                <div class="sertificate__info-left-text">
                  Поддержка браузеров
                </div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">Юр. лиц</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">2048 бит</div>
                <div class="sertificate__info-right-text">Домен и компания</div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-left--mobile">
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Для
                </div>
                <div class="sertificate__info-right-text">Юр. лиц</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Шифрование
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Размер ключа
                </div>
                <div class="sertificate__info-right-text">2048 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Проверка
                </div>
                <div class="sertificate__info-right-text">Домен и компания</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Особенность
                </div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Поддержка браузеров
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>

            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Защищает</div>
                <div class="sertificate__info-left-text">Скорость выдачи</div>
                <div class="sertificate__info-left-text">Переиздание</div>
                <div class="sertificate__info-left-text">Оптимально для</div>
                <div class="sertificate__info-left-text">
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-left-text">Печать доверия</div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
                <div class="sertificate__info-right-text">Да</div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-right--mobile">
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Защищает
                </div>
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Скорость выдачи
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Переиздание
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Оптимально для
                </div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Печать доверия
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sertificate__buy-wrapper">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">
            Organization ServerSign Wildcard
          </div>
          <div class="sertificate__content">
            <picture class="picture">
              <img
                src="@/assets/img/sertificate-comodo.png"
                srcset="@/assets/img/sertificate-comodo@2x.png 2x"
                alt="comodo"
                class="sertificate-comodo-img"
              />
            </picture>
            <div class="sertificate__content-text">Стандартный</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">9293 ₽</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">12390 ₽</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>
        <div class="sertificate__buy-wrapper-info">
          <div class="sertificate__info-text">
            <span class="sertificate__buy--mod"> SGC Wildcard SSL</span> —
            подходит для поддержки поддоменов, расположенных на одном доменом
            имени (www.abc.ru, mail.abc.ru, ftp.abc.ru). Отличительной
            особенностью такого SSL-сертификата является то, что он не только
            поддерживает современные операционные системы и браузеры, но также
            устаревшее ПО и операционные системы с 40 битной SSL-защитой.
          </div>
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Для</div>
                <div class="sertificate__info-left-text">Шифрование</div>
                <div class="sertificate__info-left-text">Размер ключа</div>
                <div class="sertificate__info-left-text">Проверка</div>
                <div class="sertificate__info-left-text">Особенность</div>
                <div class="sertificate__info-left-text">
                  Поддержка браузеров
                </div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">Юр. лиц</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">2048 бит</div>
                <div class="sertificate__info-right-text">Домен и компания</div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-left--mobile">
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Для
                </div>
                <div class="sertificate__info-right-text">Юр. лиц</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Шифрование
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Размер ключа
                </div>
                <div class="sertificate__info-right-text">2048 бит</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Проверка
                </div>
                <div class="sertificate__info-right-text">Домен и компания</div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Особенность
                </div>
                <div class="sertificate__info-right-text">
                  Поддержка устаревшего ПО и ОС
                </div>
              </div>
              <div class="sertificate__info-mobile-left">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-left-text--mobile
                  "
                >
                  Поддержка браузеров
                </div>
                <div class="sertificate__info-right-text">99,3%</div>
              </div>
            </div>

            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div class="sertificate__info-left-text">Защищает</div>
                <div class="sertificate__info-left-text">Скорость выдачи</div>
                <div class="sertificate__info-left-text">Переиздание</div>
                <div class="sertificate__info-left-text">Оптимально для</div>
                <div class="sertificate__info-left-text">
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-left-text">Печать доверия</div>
              </div>
              <div class="sertificate__info-right">
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
                <div class="sertificate__info-right-text">до 256 бит</div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
                <div class="sertificate__info-right-text">Да</div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
            <div class="sertificate__info-wrap-right--mobile">
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Защищает
                </div>
                <div class="sertificate__info-right-text">
                  1 домен + поддомены одного уровня
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Скорость выдачи
                </div>
                <div class="sertificate__info-right-text">1-2 дня</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Переиздание
                </div>
                <div class="sertificate__info-right-text">до 256 бит</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Оптимально для
                </div>
                <div class="sertificate__info-right-text">
                  Сайт компании, почтовый сервер
                </div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Поддержка поддоменов
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
              <div class="sertificate__info-mobile-right">
                <div
                  class="
                    sertificate__info-left-text
                    sertificate__info-right-text--mobile
                  "
                >
                  Печать доверия
                </div>
                <div class="sertificate__info-right-text">Да</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sertificate {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.sertificate__title {
  margin-bottom: 36px;
}
.sertificate__left-title,
.sertificate__right-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 24px;
}
.sertificate__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-bottom: 36px;
}
.sertificate__wrapper-first,
.sertificate__wrapper-second {
  display: flex;
  gap: 80px;
}
.sertificate__custom-radio {
  display: flex;
  flex-direction: column;
}
.sertificate__custom-radio-wrap {
  margin-bottom: 12px;
}
.custom__radio-label {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
}
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-radio + .custom__radio-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.custom-radio + .custom__radio-label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-radio:checked + .custom__radio-label::before {
  border-color: #1b5309;
  background-color: #1b5309;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.sertificate__buy-wrapper-title {
  display: flex;
  margin-bottom: 16px;
}
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(1) {
  flex: 0 0 32%;
}
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(2) {
  flex: 0 1 14%;
}
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(3) {
  flex: 0 1 16%;
}
.sertificate__buy-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}
.sertificate__buy-wrapper {
  margin-bottom: 8px;
}
.sertificate__buy-wrapper-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  padding: 30px 24px;
  cursor: pointer;
  border-radius: 8px;
}
.sertificate__content-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.sertificate__content {
  display: flex;
  gap: 60px;
  align-items: center;
}
.sertificate__content-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.sertificate__content-total {
  display: flex;
  gap: 24px;
  align-items: center;
}
.sertificate__total {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.sertificate__total-old {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.2;
}
.sertificate__total-old--mod {
  position: relative;
}
.sertificate__total-old--mod::before {
  content: "";
  display: block;
  position: absolute;
  left: 24px;
  bottom: 0;
  width: 66px;
  height: 2px;
  background-color: #830f1e;
  transform: rotate(-10deg);
}
.sertificate__btn {
  width: 100%;
  max-width: 207px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  background: #830f1e;
  border-radius: 6px;
  padding: 14px 36px;
  cursor: pointer;
}
.sertificate__btn:hover {
  background-color: #660915;
}
.sertificate__buy-wrapper-info {
  display: none;
  padding: 40px 24px;
  background-color: #fff;
}
.sertificate__info-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
}
.sertificate__info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 40px;
}
.sertificate__buy--mod {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.8;
}
.sertificate__info-wrap-left {
  display: flex;
  gap: 60px;
}
.sertificate__info-wrap-right {
  display: flex;
  gap: 47px;
}

.sertificate__info-left {
  display: flex;
  flex-direction: column;
}
.sertificate__info-left-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 20px;
}
.sertificate__info-left-text:last-child {
  margin-bottom: 0;
}
.sertificate__info-right {
  display: flex;
  flex-direction: column;
}
.sertificate__info-right-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  margin-bottom: 20px;
}
.sertificate__info-right-text:last-child {
  margin-bottom: 0;
}
.sertificate__info-wrap-left--mobile,
.sertificate__info-wrap-right--mobile {
  display: none;
}
.sertificate__info-left-text--mobile,
.sertificate__info-right-text--mobile {
  margin-bottom: 0;
}
.sertificate__info-mobile-left,
.sertificate__info-mobile-right {
  margin-bottom: 12px;
}

.sertificate__buy-info--active {
  display: block;
}
/* .show__sertificate-content {
  display: flex;
}
.hide__sertificate-content {
  display: none;
} */
@media (max-width: 1315px) {
  .sertificate__info-wrap {
    gap: 20px;
  }
}
@media (max-width: 1300px) {
  .sertificate__buy-wrapper-content {
    flex-direction: column;
    gap: 24px;
  }
  .sertificate__buy-wrapper-title {
    display: none;
  }
  .sertificate__btn {
    max-width: 311px;
  }
}
@media (max-width: 600px) {
  .sertificate__info-wrap {
    gap: 12px;
  }
  .sertificate__info-wrap-left,
  .sertificate__info-wrap-right {
    display: none;
  }
  .sertificate__info-wrap-left--mobile,
  .sertificate__info-wrap-right--mobile {
    display: block;
  }
}

</style>
