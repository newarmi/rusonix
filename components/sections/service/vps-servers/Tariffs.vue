<template>
  <section class="tariff">
    <div class="container">
      <div class="tariff__title title">Тарифы</div>
      <div class="tariff__wrapper">
        <div class="tariff__wrapper-text">
          <p class="tariff__text text">
            Лучшее соотношение цены и качества на рынке.
          </p>
          <p class="tariff__text text">
            Просто занимайтесь своим бизнесом, не волнуясь за ваш сайт.
          </p>
        </div>

        <div class="tariff__tab">
          <a href="#tab-1" class="tariff__tab-links tariff__tab-links--active">
            Готовые конфигурации
          </a>
          <a href="#tab-2" class="tariff__tab-links"> Своя конфигурация </a>
        </div>
      </div>

      <div
        id="tab-1"
        class="tariff__common-wrapper tariff__common-wrapper--active"
      >
        <div class="ready__cofiguration">
          <div class="tariff__wrapper-sample">
            <div class="tariff__wrap-tab">
              <p class="tariff__tab-text">Тип диска</p>

              <div class="tariff__tab-sample">
                <div
                  class="tariff__tab-sample-links"
                  data-tab-tariff="#tariff-1"
                >
                  SSD
                </div>
                <div
                  class="
                    tariff__tab-sample-links tariff__tab-sample-links--active
                  "
                  data-tab-tariff="#tariff-2"
                >
                  NVMe + Intel Xeon Gold
                </div>
              </div>
              <div class="tariff__tab-sample tariff__tab-sample--mobile">
                <div
                  class="tariff__tab-sample-links"
                  data-tab-tariff="#tariff-3"
                >
                  SSD
                </div>
                <div
                  class="
                    tariff__tab-sample-links tariff__tab-sample-links--active
                  "
                  data-tab-tariff="#tariff-4"
                >
                  NVMe + Intel Xeon Gold
                </div>
              </div>
            </div>
            <div class="tariff__wrap-dropdown">
              <p class="tariff__tab-text">Период</p>
              <div class="tariff__dropdown">
                <span class="tariff__dropdown-btn">12 месяцев </span>
                <svg class="dropdown__icon" width="20" height="20">
                  <use
                    xlink:href="@/assets/img/sprites.svg#arrow-dropdown"
                  ></use>
                </svg>
                <ul class="tariff__dropdown-content">
                  <li dropText="1 месяц" class="tariff__dropdown-text">
                    1 месяц
                  </li>
                  <li dropText="2 месяца" class="tariff__dropdown-text">
                    2 месяца
                  </li>
                  <li dropText="3 месяца" class="tariff__dropdown-text">
                    3 месяца
                  </li>
                  <li dropText="4 месяца" class="tariff__dropdown-text">
                    4 месяца
                  </li>
                  <li dropText="5 месяцев" class="tariff__dropdown-text">
                    5 месяцев
                  </li>
                  <li dropText="6 месяцев" class="tariff__dropdown-text">
                    6 месяцев
                  </li>
                  <li dropText="7 месяцев" class="tariff__dropdown-text">
                    7 месяцев
                  </li>
                  <li dropText="8 месяцев" class="tariff__dropdown-text">
                    8 месяцев
                  </li>
                  <li dropText="9 месяцев" class="tariff__dropdown-text">
                    9 месяцев
                  </li>
                  <li dropText="10 месяцев" class="tariff__dropdown-text">
                    10 месяцев
                  </li>
                  <li dropText="11 месяцев" class="tariff__dropdown-text">
                    11 месяцев
                  </li>
                  <li dropText="12 месяцев" class="tariff__dropdown-text">
                    12 месяцев
                  </li>
                </ul>
              </div>
            </div>
            <div class="tariff__wrap-counter">
              <p class="tariff__tab-text">Количество серверов</p>
              <div class="tariff__counter">
                <svg class="counter__icon-minus" width="8" height="3">
                  <use
                    xlink:href="@/assets/img/sprites.svg#counter-minus"
                  ></use>
                </svg>
                <span class="tariff__counter-text"> 26 серверов</span>
                <svg class="counter__icon-plus" width="9" height="9">
                  <use xlink:href="@/assets/img/sprites.svg#counter-plus"></use>
                </svg>
              </div>
            </div>
          </div>

          <!-- START Tariff SSD -->
          <div
            id="tariff-1"
            data-tabTariff-content
            class="tariff__wrapper-configuration"
          >
            <div class="tariff__configuration">
              <div class="tariff__configuration-card">
                <div class="tariff__configuration-card-title">S Ultra SSD</div>
                <div class="tariff__configuration-wrap-text">
                  <div class="tariff__configuration-card-text">2 CPU SSD</div>
                  <div class="tariff__configuration-card-text">4 ГБ RAM</div>
                  <div class="tariff__configuration-card-text">39 ГБ SSD</div>
                </div>
                <div class="tariff__configuration-card-total">
                  2500 ₽ / месяц
                </div>
              </div>
              <div class="tariff__configuration-card">
                <div class="tariff__configuration-card-title">M Ultra</div>
                <div class="tariff__configuration-wrap-text">
                  <div class="tariff__configuration-card-text">4 CPU</div>
                  <div class="tariff__configuration-card-text">6 ГБ RAM</div>
                  <div class="tariff__configuration-card-text">97 ГБ SSD</div>
                </div>
                <div class="tariff__configuration-card-total">
                  4500 ₽ / месяц
                </div>
              </div>
              <div
                class="
                  tariff__configuration-card tariff__configuration-card--mod
                "
              >
                <div
                  class="
                    tariff__configuration-card-title
                    tariff__configuration-card-title--mod
                  "
                >
                  L Ultra
                </div>
                <div
                  class="
                    tariff__configuration-wrap-text
                    tariff__configuration-card-text--mod
                  "
                >
                  <div
                    class="
                      tariff__configuration-card-text
                      tariff__configuration-card-text--mod
                    "
                  >
                    6 CPU
                  </div>
                  <div
                    class="
                      tariff__configuration-card-text
                      tariff__configuration-card-text--mod
                    "
                  >
                    8 ГБ RAM
                  </div>
                  <div
                    class="
                      tariff__configuration-card-text
                      tariff__configuration-card-text--mod
                    "
                  >
                    136 ГБ SSD
                  </div>
                </div>
                <div
                  class="
                    tariff__configuration-card-total
                    tariff__configuration-card-total--mod
                  "
                >
                  6500 ₽ / месяц
                </div>
              </div>
              <div class="tariff__configuration-card">
                <div class="tariff__configuration-card-title">L+ Ultra</div>
                <div class="tariff__configuration-wrap-text">
                  <div class="tariff__configuration-card-text">8 CPU</div>
                  <div class="tariff__configuration-card-text">16 ГБ RAM</div>
                  <div class="tariff__configuration-card-text">135 ГБ SSD</div>
                </div>
                <div class="tariff__configuration-card-total">
                  9500 ₽ / месяц
                </div>
              </div>
              <button class="tariff__btn-add">
                + добавить еще одну конфигурацию
              </button>
            </div>
            <div class="tariff__total">
              <div class="tarif__total-title">Итого</div>
              <div class="tariff__wrapper-total-text">
                <div class="tariff__total-wrap-text">
                  <div class="tariff__total-card-text">CPU: 6 шт</div>
                  <div class="tariff__total-card-text">RAM: 8 GB</div>
                  <div class="tariff__total-card-text">SSD: 136 GB</div>
                </div>
                <div class="tariff__total-wrap-price">
                  <div class="tariff__total-card-text">4600 ₽</div>
                  <div class="tariff__total-card-text">9300 ₽</div>
                  <div class="tariff__total-card-text">7700 ₽</div>
                </div>
              </div>
              <div class="tariff__total-wrap">
                <div class="tariff__total-card-text">
                  <span class="tariff__total-card-text--mod">169 000 ₽</span>
                  / месяц
                </div>
                <div class="tariff__total-card-text">
                  <span class="tariff__total-card-text--mod">5 633,33 ₽</span>
                  / день
                </div>
              </div>
              <button class="tariff__btn">Подключиться</button>
              <button class="tariff__btn-download">
                <svg class="clip__icon" width="9" height="18">
                  <use xlink:href="@/assets/img/sprites.svg#clip"></use>
                </svg>
                Скачать PDF с расчетом
              </button>
            </div>
          </div>

          <!-- START Tariff total NVMe + Intel Xeon Gold -->
          <div
            id="tariff-2"
            data-tabTariff-content
            class="
              tariff__wrapper-configuration
              tariff__wrapper-configuration--active
            "
          >
            <div class="tariff__configuration">
              <div class="tariff__configuration-card">
                <div class="tariff__configuration-card-title">S Ultra</div>
                <div class="tariff__configuration-wrap-text">
                  <div class="tariff__configuration-card-text">2 CPU</div>
                  <div class="tariff__configuration-card-text">4 ГБ RAM</div>
                  <div class="tariff__configuration-card-text">39 ГБ SSD</div>
                </div>
                <div class="tariff__configuration-card-total">
                  2500 ₽ / месяц
                </div>
              </div>
              <div class="tariff__configuration-card">
                <div class="tariff__configuration-card-title">M Ultra</div>
                <div class="tariff__configuration-wrap-text">
                  <div class="tariff__configuration-card-text">4 CPU</div>
                  <div class="tariff__configuration-card-text">6 ГБ RAM</div>
                  <div class="tariff__configuration-card-text">97 ГБ SSD</div>
                </div>
                <div class="tariff__configuration-card-total">
                  4500 ₽ / месяц
                </div>
              </div>
              <div
                class="
                  tariff__configuration-card tariff__configuration-card--mod
                "
              >
                <div
                  class="
                    tariff__configuration-card-title
                    tariff__configuration-card-title--mod
                  "
                >
                  L Ultra
                </div>
                <div
                  class="
                    tariff__configuration-wrap-text
                    tariff__configuration-card-text--mod
                  "
                >
                  <div
                    class="
                      tariff__configuration-card-text
                      tariff__configuration-card-text--mod
                    "
                  >
                    6 CPU
                  </div>
                  <div
                    class="
                      tariff__configuration-card-text
                      tariff__configuration-card-text--mod
                    "
                  >
                    8 ГБ RAM
                  </div>
                  <div
                    class="
                      tariff__configuration-card-text
                      tariff__configuration-card-text--mod
                    "
                  >
                    136 ГБ SSD
                  </div>
                </div>
                <div
                  class="
                    tariff__configuration-card-total
                    tariff__configuration-card-total--mod
                  "
                >
                  6500 ₽ / месяц
                </div>
              </div>
              <div class="tariff__configuration-card">
                <div class="tariff__configuration-card-title">L+ Ultra</div>
                <div class="tariff__configuration-wrap-text">
                  <div class="tariff__configuration-card-text">8 CPU</div>
                  <div class="tariff__configuration-card-text">16 ГБ RAM</div>
                  <div class="tariff__configuration-card-text">135 ГБ SSD</div>
                </div>
                <div class="tariff__configuration-card-total">
                  9500 ₽ / месяц
                </div>
              </div>
              <button class="tariff__btn-add">
                + добавить еще одну конфигурацию
              </button>
            </div>
            <div class="tariff__wrapper-right">
              <div class="tariff__total">
                <div class="tarif__total-title">Итого</div>
                <div class="tariff__wrapper-total-text">
                  <div class="tariff__total-wrap-text">
                    <div class="tariff__total-card-text">CPU: 6 шт</div>
                    <div class="tariff__total-card-text">RAM: 8 GB</div>
                    <div class="tariff__total-card-text">SSD: 136 GB</div>
                  </div>
                  <div class="tariff__total-wrap-price">
                    <div class="tariff__total-card-text">4600 ₽</div>
                    <div class="tariff__total-card-text">9300 ₽</div>
                    <div class="tariff__total-card-text">7700 ₽</div>
                  </div>
                </div>
                <div class="tariff__total-wrap">
                  <div class="tariff__total-card-text">
                    <span class="tariff__total-card-text--mod">169 000 ₽</span>
                    / месяц
                  </div>
                  <div class="tariff__total-card-text">
                    <span class="tariff__total-card-text--mod">5 633,33 ₽</span>
                    / день
                  </div>
                </div>
                <button class="tariff__btn">Подключиться</button>
                <button class="tariff__btn-download">
                  <svg class="clip__icon" width="9" height="18">
                    <use xlink:href="@/assets/img/sprites.svg#clip"></use>
                  </svg>
                  Скачать PDF с расчетом
                </button>
              </div>
              <div class="tariff__total-bottom">
                <div class="tariff__total-bottom-title">
                  В любую конфигурацию сервера всегда входит
                </div>
                <ul class="tariff__total-list">
                  <li class="tariff__total-item">Голосовая поддержка 24/7</li>
                  <li class="tariff__total-item">
                    Безлимитный трафик 100 мбит
                  </li>
                  <li class="tariff__total-item">Маска и антисептик</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- END Tariff total NVMe + Intel Xeon Gold -->

          <!-- START Tariff slider SSD -->
          <div id="tariff-3" data-tab-slider class="tariff__wrapper-slider">
            <div class="tariff__wrapper-configuration-slider">
              <div class="swiper tariff__wrapper-configuration-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="tariff__configuration-card">
                      <div class="tariff__configuration-card-title">
                        S Ultra NVMe + Intel Xeon Gold SSD
                      </div>
                      <div class="tariff__configuration-wrap-text">
                        <div class="tariff__configuration-card-text">2 CPU</div>
                        <div class="tariff__configuration-card-text">
                          4 ГБ RAM
                        </div>
                        <div class="tariff__configuration-card-text">
                          39 ГБ SSD
                        </div>
                      </div>
                      <div class="tariff__configuration-card-total">
                        2500 ₽ / месяц
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="tariff__configuration-card">
                      <div class="tariff__configuration-card-title">
                        M Ultra NVMe + Intel Xeon Gold
                      </div>
                      <div class="tariff__configuration-wrap-text">
                        <div class="tariff__configuration-card-text">4 CPU</div>
                        <div class="tariff__configuration-card-text">
                          6 ГБ RAM
                        </div>
                        <div class="tariff__configuration-card-text">
                          97 ГБ SSD
                        </div>
                      </div>
                      <div class="tariff__configuration-card-total">
                        4500 ₽ / месяц
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div
                      class="
                        tariff__configuration-card
                        tariff__configuration-card--mod
                      "
                    >
                      <div
                        class="
                          tariff__configuration-card-title
                          tariff__configuration-card-title--mod
                        "
                      >
                        L Ultra
                      </div>
                      <div
                        class="
                          tariff__configuration-wrap-text
                          tariff__configuration-card-text--mod
                        "
                      >
                        <div
                          class="
                            tariff__configuration-card-text
                            tariff__configuration-card-text--mod
                          "
                        >
                          6 CPU
                        </div>
                        <div
                          class="
                            tariff__configuration-card-text
                            tariff__configuration-card-text--mod
                          "
                        >
                          8 ГБ RAM
                        </div>
                        <div
                          class="
                            tariff__configuration-card-text
                            tariff__configuration-card-text--mod
                          "
                        >
                          136 ГБ SSD
                        </div>
                      </div>
                      <div
                        class="
                          tariff__configuration-card-total
                          tariff__configuration-card-total--mod
                        "
                      >
                        6500 ₽ / месяц
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="tariff__configuration-card">
                      <div class="tariff__configuration-card-title">
                        L+ Ultra
                      </div>
                      <div class="tariff__configuration-wrap-text">
                        <div class="tariff__configuration-card-text">8 CPU</div>
                        <div class="tariff__configuration-card-text">
                          16 ГБ RAM
                        </div>
                        <div class="tariff__configuration-card-text">
                          135 ГБ SSD
                        </div>
                      </div>
                      <div class="tariff__configuration-card-total">
                        9500 ₽ / месяц
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tariff__ready-configuration-btn-slider">
              <button class="tariff__btn-add">
                + добавить еще одну конфигурацию
              </button>
            </div>
          </div>
          <!-- END Tariff slider SSD -->
          <!-- START Tariff slider NVMe + Intel Xeon Gold -->
          <div
            id="tariff-4"
            data-tab-slider
            class="tariff__wrapper-slider tariff__wrapper-slider--active"
          >
            <div class="tariff__wrapper-configuration-slider">
              <div class="swiper tariff__wrapper-configuration-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="tariff__configuration-card">
                      <div class="tariff__configuration-card-title">
                        S Ultra NVMe + Intel Xeon Gold
                      </div>
                      <div class="tariff__configuration-wrap-text">
                        <div class="tariff__configuration-card-text">2 CPU</div>
                        <div class="tariff__configuration-card-text">
                          4 ГБ RAM
                        </div>
                        <div class="tariff__configuration-card-text">
                          39 ГБ SSD
                        </div>
                      </div>
                      <div class="tariff__configuration-card-total">
                        2500 ₽ / месяц
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="tariff__configuration-card">
                      <div class="tariff__configuration-card-title">
                        M Ultra NVMe + Intel Xeon Gold
                      </div>
                      <div class="tariff__configuration-wrap-text">
                        <div class="tariff__configuration-card-text">4 CPU</div>
                        <div class="tariff__configuration-card-text">
                          6 ГБ RAM
                        </div>
                        <div class="tariff__configuration-card-text">
                          97 ГБ SSD
                        </div>
                      </div>
                      <div class="tariff__configuration-card-total">
                        4500 ₽ / месяц
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div
                      class="
                        tariff__configuration-card
                        tariff__configuration-card--mod
                      "
                    >
                      <div
                        class="
                          tariff__configuration-card-title
                          tariff__configuration-card-title--mod
                        "
                      >
                        L Ultra
                      </div>
                      <div
                        class="
                          tariff__configuration-wrap-text
                          tariff__configuration-card-text--mod
                        "
                      >
                        <div
                          class="
                            tariff__configuration-card-text
                            tariff__configuration-card-text--mod
                          "
                        >
                          6 CPU
                        </div>
                        <div
                          class="
                            tariff__configuration-card-text
                            tariff__configuration-card-text--mod
                          "
                        >
                          8 ГБ RAM
                        </div>
                        <div
                          class="
                            tariff__configuration-card-text
                            tariff__configuration-card-text--mod
                          "
                        >
                          136 ГБ SSD
                        </div>
                      </div>
                      <div
                        class="
                          tariff__configuration-card-total
                          tariff__configuration-card-total--mod
                        "
                      >
                        6500 ₽ / месяц
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="tariff__configuration-card">
                      <div class="tariff__configuration-card-title">
                        L+ Ultra
                      </div>
                      <div class="tariff__configuration-wrap-text">
                        <div class="tariff__configuration-card-text">8 CPU</div>
                        <div class="tariff__configuration-card-text">
                          16 ГБ RAM
                        </div>
                        <div class="tariff__configuration-card-text">
                          135 ГБ SSD
                        </div>
                      </div>
                      <div class="tariff__configuration-card-total">
                        9500 ₽ / месяц
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tariff__ready-configuration-btn-slider">
              <button class="tariff__btn-add">
                + добавить еще одну конфигурацию
              </button>
            </div>
          </div>
          <!-- END Tariff slider NVMe + Intel Xeon Gold -->
        </div>
      </div>
    </div>
    <!-- content 2  -->
    <div class="container__tab-2">
      <div id="tab-2" class="tariff__common-wrapper">
        <div class="tariff__ready-configuration-wrap">
          <div class="tariff__ready-configuration-wrap-left">
            <div class="tariff__ready-configuration">
              <form action="#" class="tariff__ready-configuration-form">
                <div class="tariff__ready-configuration-title">
                  Конфигурация
                </div>
                <div class="tariff__ready-configuration-input-text">
                  Количество ядер CPU
                  <div class="tariff__ready-configuration-input">
                    <input
                      class="tariff__input-text"
                      type="number"
                      name="CPUinput"
                      value="8"
                      oninput="this.form.CPUrange.value=(this.value === '' ? 0 :
                      this.value)"
                    />
                    <input
                      id="status"
                      class="tariff__input-range"
                      type="range"
                      name="CPUrange"
                      min="0"
                      max="10"
                      value="8"
                      oninput="this.form.CPUinput.value=this.value"
                    />
                  </div>
                </div>
                <div class="tariff__ready-configuration-input-text">
                  RAM, ГБ
                  <div class="tariff__ready-configuration-input">
                    <input
                      class="tariff__input-text"
                      type="number"
                      name="RAMinput"
                      value="64"
                      oninput="this.form.RAMrange.value=(this.value === '' ? 0 :
                      this.value)"
                    />
                    <input
                      id="status"
                      class="tariff__input-range"
                      type="range"
                      name="RAMrange"
                      min="2"
                      max="128"
                      value="64"
                      oninput="this.form.RAMinput.value=this.value"
                    />
                  </div>
                </div>
                <div class="tariff__ready-configuration-input-text">
                  IPv4 адресов
                  <div class="tariff__ready-configuration-input">
                    <input
                      class="tariff__input-text"
                      type="number"
                      name="IPv4input"
                      value="20"
                      oninput="this.form.IPv4range.value=(this.value === '' ? 0 :
                      this.value)"
                    />
                    <input
                      id="status"
                      class="tariff__input-range"
                      type="range"
                      name="IPv4range"
                      min="2"
                      max="60"
                      value="20"
                      oninput="this.form.IPv4input.value=this.value"
                    />
                  </div>
                </div>

                <div class="tariff__ready-configuration-input-text">
                  Тип диска
                  <div class="tariff__ready-configuration-input-radio">
                    <div class="radio__wrapper-btn-1">
                      <input
                        id="radio-1"
                        class="radio__btn"
                        type="radio"
                        name="radio"
                        value="1"
                        checked
                      />
                      <label class="radio__lebel" for="radio-1">SSD</label>
                    </div>

                    <div class="radio__wrapper-btn-2">
                      <input
                        id="radio-2"
                        class="radio__btn"
                        type="radio"
                        name="radio"
                        value="2"
                      />
                      <label class="radio__lebel" for="radio-2"
                        >NVMe + Intel Xeon Gold</label
                      >
                    </div>
                  </div>
                </div>

                <div class="tariff__ready-configuration-input-text">
                  Объем диска, ГБ
                  <div class="tariff__ready-configuration-input">
                    <input
                      class="tariff__input-text"
                      type="number"
                      name="Volume_input"
                      value="160"
                      oninput="this.form.Volume_range.value=(this.value === '' ? 0 :
                      this.value)"
                    />
                    <input
                      id="status"
                      class="tariff__input-range"
                      type="range"
                      name="Volume_range"
                      min="2"
                      max="240"
                      value="160"
                      oninput="this.form.Volume_input.value=this.value"
                    />
                  </div>
                </div>

                <div class="tariff__ready-configuration-input-text">
                  Период
                  <div class="tariff__ready-configuration-select">
                    <select class="tariff__select">
                      <option value="24 месяца">24 месяца</option>
                      <option value="12 месяцев">12 месяцев</option>
                      <option value="6 месяцев">6 месяцев</option>
                      <option value="3 месяца">3 месяца</option>
                      <option value="1 месяц">1 месяц</option>
                    </select>
                  </div>
                </div>

                <div class="tariff__ready-configuration-input-text">
                  Количество серверов
                  <div class="tariff__ready-configuration-select">
                    <select class="tariff__select">
                      <option value="1 сервер">1 сервер</option>
                      <option value="2 сервера">2 сервера</option>
                      <option value="3 сервера">3 сервера</option>
                      <option value="4 сервера">4 сервера</option>
                      <option value="5 серверов">5 серверов</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="tariff__ready-configuration-btn-add">
              <button class="tariff__btn-add">
                + добавить еще одну конфигурацию
              </button>
            </div>
          </div>
          <div class="tariff__wrapper-right">
            <div class="tariff__total">
              <div class="tarif__total-title">ИтогоTe</div>
              <div class="tariff__wrapper-total-text">
                <div class="tariff__total-wrap-text">
                  <div class="tariff__total-card-text">CPU: 6 шт</div>
                  <div class="tariff__total-card-text">RAM: 8 GB</div>
                  <div class="tariff__total-card-text">SSD: 136 GB</div>
                </div>
                <div class="tariff__total-wrap-price">
                  <div class="tariff__total-card-text">4600 ₽</div>
                  <div class="tariff__total-card-text">9300 ₽</div>
                  <div class="tariff__total-card-text">7700 ₽</div>
                </div>
              </div>
              <div class="tariff__total-wrap">
                <div class="tariff__total-card-text">
                  <span class="tariff__total-card-text--mod">169 000 ₽</span>
                  / месяц
                </div>
                <div class="tariff__total-card-text">
                  <span class="tariff__total-card-text--mod">5 633,33 ₽</span>
                  / день
                </div>
              </div>
              <button class="tariff__btn">Подключиться</button>
              <button class="tariff__btn-download">
                <svg class="clip__icon" width="9" height="18">
                  <use xlink:href="@/assets/img/sprites.svg#clip"></use>
                </svg>
                Скачать PDF с расчетом
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tablet bottom -->
    <div class="tariff__total-tablet">
      <div class="tariff__total-tablet-container">
        <div class="tariff__total-tablet-title tarif__total-title">Итого</div>
        <div class="tariff__wrapper-total-text">
          <div class="tariff__total-wrap-text">
            <div class="tariff__total-card-text">CPU: 6 шт</div>
            <div class="tariff__total-card-text">RAM: 8 GB</div>
            <div class="tariff__total-card-text">SSD: 136 GB</div>
          </div>
          <div class="tariff__total-wrap-price">
            <div class="tariff__total-card-text">4600 ₽</div>
            <div class="tariff__total-card-text">9300 ₽</div>
            <div class="tariff__total-card-text">7700 ₽</div>
          </div>
        </div>
        <div class="tariff__total-wrap tariff__total-wrap-tablet">
          <div class="tariff__total-card-text">
            <span class="tariff__total-card-text--mod">169 000 ₽</span> / месяц
          </div>
          <div class="tariff__total-card-text">
            <span class="tariff__total-card-text--mod">5 633,33 ₽</span> / день
          </div>
        </div>
        <div class="tariff__total-wrap-tablet-btn">
          <button class="tariff__btn">Подключиться</button>
          <button class="tariff__btn-download">
            <svg class="clip__icon" width="9" height="18">
              <use xlink:href="@/assets/img/sprites.svg#clip"></use>
            </svg>
            Скачать PDF с расчетом
          </button>
        </div>
      </div>

      <div class="tariff__total-bottom tariff__total-tablet-bottom">
        <div class="tariff__total-bottom-title">
          В любую конфигурацию сервера всегда входит
        </div>
        <ul class="tariff__total-list">
          <li class="tariff__total-item">Голосовая поддержка 24/7</li>
          <li class="tariff__total-item">Безлимитный трафик 100 мбит</li>
          <li class="tariff__total-item">Маска и антисептик</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const plansTabs = document.querySelectorAll('[data-tab-tariff]')
    const plansTabContents = document.querySelectorAll(
      '[data-tabTariff-content]'
    )
    const plansTabsSliders = document.querySelectorAll('[data-tab-slider]')
    console.log(plansTabsSliders)

    // const plansSliders = document.querySelectorAll(".tariff__wrapper-slider");
    // console.log(plansSliders);
    plansTabs.forEach((tab) => {
      tab?.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTariff)
        plansTabContents.forEach((plansTabContent) => {
          plansTabContent.classList.remove(
            'tariff__wrapper-configuration--active'
          )
        })
        target.classList.add('tariff__wrapper-configuration--active')

        plansTabsSliders.forEach((plansTabsSlider) => {
          plansTabsSlider.classList.remove('tariff__wrapper-slider--active')
        })
        target.classList.add('tariff__wrapper-slider--active')

        plansTabs.forEach((tab) => {
          tab.classList.remove('tariff__tab-sample-links--active')
        })
        tab.classList.add('tariff__tab-sample-links--active')
      })
    })

    const tabs = document.querySelectorAll('.tariff__tab-links')
    const content = document.querySelectorAll('.tariff__common-wrapper')

    tabs.forEach((item, index) => {
      item?.addEventListener('click', function (event) {
        event.preventDefault()
        tabs.forEach((item) =>
          item.classList.remove('tariff__tab-links--active')
        )
        item.classList.add('tariff__tab-links--active')

        content.forEach((item) =>
          item.classList.remove('tariff__common-wrapper--active')
        )
        content[index].classList.add('tariff__common-wrapper--active')
      })
    })

    const dropdown = document.querySelector('.tariff__dropdown')
    const options = document.querySelector('.tariff__dropdown-content')
    const dropdownBtn = document.querySelector('.tariff__dropdown-btn')

    dropdown?.addEventListener('click', () => {
      dropdown.classList.toggle('show__dropdown-content')
    })
    options?.addEventListener('click', (event) => {
      const listItem = event.target
      const valuesDropText = listItem.attributes.dropText.value
      dropdownBtn.innerText = valuesDropText
      console.log(dropdownBtn.innerText)
    })

    const inputRange = document.querySelectorAll('.tariff__input-range')
    const inputText = document.querySelectorAll('.tariff__input-text')

    function setBackgroundSize(inputRange) {
      inputRange.style.setProperty(
        '--background-size',
        `${getBackgroundSize(inputRange)}%`
      )
    }

    inputText.forEach((item, index) => {
      setBackgroundSize(inputRange[index])
      item?.addEventListener('input', () =>
        setBackgroundSize(inputRange[index])
      )
    })

    function getBackgroundSize(inputRange) {
      const min = +inputRange.min || 0
      const max = +inputRange.max || 100
      const value = +inputRange.value

      const size = ((value - min) / (max - min)) * 100

      return size
    }

    let counter = 26
    const btnPlus = document.querySelector('.counter__icon-plus')
    const btnMinus = document.querySelector('.counter__icon-minus')
    const contentText = document.querySelector('.tariff__counter-text')

    btnPlus?.addEventListener('click', () => {
      counter += 1
      if (counter > 1) {
        contentText.innerText = `${counter} сервера`
      }
      if (counter > 4) {
        contentText.innerText = `${counter} серверов`
      }
      if (counter < 2) {
        contentText.innerText = `${counter} сервер`
      }
    })

    btnMinus?.addEventListener('click', () => {
      if (counter > 1 && counter <= 5) {
        counter -= 1
        contentText.innerText = `${counter} сервера`
      } else if (counter >= 5) {
        counter -= 1
        contentText.innerText = `${counter} серверов`
      }
      if (counter === 1) {
        contentText.innerText = `${counter} сервер`
      }
    })
  },
}
</script>

<style scoped>
.tariff {
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: #fcf7f2;
    overflow: hidden;
}

.tariff__title {
  margin-bottom: 24px;
}

.tariff__text {
  opacity: 0.6;
}

.tariff__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.tariff__tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ede7e2;
  border-radius: 8px;
}
.tariff__tab-links {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  margin: 8px 31px 8px 24px;
  padding: 12px 24px;
  color: #000;
  background-color: transparent;
}
.tariff__tab-links--active {
  background-color: #fff;
  border-radius: 8px;
}
.tariff__common-wrapper {
  display: none;
}

.tariff__common-wrapper--active {
  display: block;
}

.tariff__wrapper-sample {
  display: flex;
  gap: 0 33px;
  margin-bottom: 48px;
}

.tariff__tab-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 8px;
}

.tariff__tab-sample {
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ede7e2;
  border-radius: 8px;
}
.tariff__tab-sample-links {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 12px 16px;
  margin: 8px 16px 8px 40px;
  background-color: transparent;
  cursor: pointer;
}

.tariff__tab-sample-links--active {
  background-color: #fff;
  border-radius: 8px;
}

.tariff__dropdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ede7e2;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}

.tariff__dropdown-btn {
  display: flex;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px 34px 20px;
  cursor: pointer;
}

.dropdown__icon {
  margin-right: 24px;
  transition: all 500ms ease-in-out;
}

.tariff__dropdown-content {
  width: 100%;
  position: absolute;
  top: 65px;
  z-index: 10;
  background-color: #ede7e2;
  border-radius: 8px;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: all 500ms ease-in-out;
}

.show__dropdown-content .tariff__dropdown-content {
  visibility: visible;
  opacity: 0.9;
  transition: all 500ms ease-in-out;
}

.show__dropdown-content .dropdown__icon {
  transform: rotate(180deg);
  transition: all 500ms ease-in-out;
}

.tariff__dropdown-text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 6px 24px;
  transition: all 500ms ease-in-out;
}

.tariff__counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ede7e2;
  border-radius: 8px;
}

.counter__icon-minus,
.counter__icon-plus {
  cursor: pointer;
}

.tariff__counter-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  padding: 20px 39px;
}

.counter__icon-minus {
  margin-left: 24px;
}

.counter__icon-plus {
  margin-right: 24px;
}

[data-tabTariff-content] {
  display: none;
}

.tariff__wrapper-configuration--active[data-tabTariff-content] {
  display: flex;
}
.tariff__wrapper-configuration {
  align-items: flex-start;
  gap: 33px;
}
.tariff__wrapper-slider {
  display: block;
}
.tariff__configuration {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 33px;
}

.tariff__configuration-card {
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0869858);
  border-radius: 6px;
  padding: 48px 24px;
  flex: 1 1 calc((100% / 2) - 33px);
}

.tariff__configuration-card--mod {
  background-color: #1b5309;
}

.tariff__configuration-card-title {
  font-family: 'Graphik', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}

.tariff__configuration-card-title--mod {
  color: #fff;
}

.tariff__configuration-wrap-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
}

.tariff__configuration-card-text {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #878b99;
  margin-bottom: 8px;
}

.tariff__configuration-card-text:last-child {
  margin-bottom: 0;
}

.tariff__configuration-card-text--mod {
  color: #fff;
}

.tariff__configuration-card-total {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.tariff__configuration-card-total--mod {
  color: #fff;
}

.tariff__total {
  background-color: #fff;
  border-radius: 8px;
  padding: 48px 29px;
}

.tariff__wrapper-total-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}

.tarif__total-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

.tariff__total-card-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 16px;
}

.tariff__total-wrap {
  display: flex;
  gap: 29px;
  margin-bottom: 48px;
}

.tariff__total-card-text--mod {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}

.tariff__btn {
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  padding: 15px 113px;
  background-color: #830f1e;
  border-radius: 6px;
  margin-bottom: 32px;
  cursor: pointer;
}

.tariff__btn:hover {
  background-color: #660915;
}

.tariff__btn-download {
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-family: 'Graphik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #878b99;
  background-color: transparent;
  cursor: pointer;
}

.tariff__btn-add {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  margin-top: 24px;
  background-color: transparent;
  cursor: pointer;
}

.tariff__btn-add:hover {
  opacity: 0.4;
}

.clip__icon {
  fill: transparent;
  stroke: #878b99;
  margin-right: 8px;
}

.tariff__btn-download:hover > .clip__icon,
.tariff__btn-download:hover {
  fill: transparent;
  stroke: #000;
  color: #000;
}
.tariff__total-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}
.tariff__total-bottom-title {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 16px;
}
.tariff__total-list {
  list-style-image: url(@/assets/img/total-item-active.png);
}
.tariff__total-item {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}
.tariff__ready-configuration-wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 62px;
}

.tariff__ready-configuration-wrap-left {
  width: 100%;
  max-width: 808px;
}

.tariff__ready-configuration {
  background-color: #fff;
  /* flex: 1 1 calc((100% / 2) - 62px); */
  padding: 48px 29px;
}

.tariff__ready-configuration-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  margin-bottom: 24px;
}

.tariff__ready-configuration-input-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
  margin-bottom: 24px;
}

.tariff__ready-configuration-input-text:last-child {
  margin-bottom: 0;
}

.tariff__ready-configuration-input {
  width: 100%;
  max-width: 518px;
  position: relative;
}

.tariff__input-text {
  width: 100%;
  max-width: 518px;
  height: 48px;
  padding: 14px 24px;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  outline: none;
}

.tariff__input-text::-webkit-inner-spin-button {
  display: none;
}

.tariff__input-range {
  -webkit-appearance: none;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  max-width: 518px;
  pointer-events: none;
}

.tariff__input-range,
.tariff__input-range::-webkit-slider-runnable-track,
.tariff__input-range::-webkit-slider-thumb {
  -webkit-appearance: none;
}

.tariff__input-range::-webkit-slider-runnable-track {
  height: 3px;
  background: linear-gradient(to right, #1b5309, #1b5309), #ede7e2;
  background-size: var(--background-size, 0%) 100%;
  background-repeat: no-repeat;
  border-radius: 8px;
}

/* точка input range*/

.tariff__input-range::-webkit-slider-thumb {
  background-color: #1b5309;
  border: 5px solid #dbe3d8;
  border-radius: 50%;
  height: 21px;
  width: 21px;
  margin-top: -8px;
}

.tariff__ready-configuration-input-radio {
  width: 100%;
  max-width: 518px;
  height: 48px;
  background-color: #fff;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  display: flex;
  align-items: center;
}

.radio__btn {
  display: none;
}

.radio__lebel {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #000;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  padding: 8px 50px;
  margin: 6px 16px;
}

/* Checked */

.radio__btn:checked + .radio__lebel {
  background: #1b5309;
  color: #fff;
  border-radius: 8px;
}

.tariff__ready-configuration-select {
  width: 100%;
  max-width: 518px;
}

.tariff__select {
  width: 100%;
  max-width: 518px;
  height: 48px;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 14px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}

.tariff__ready-configuration-btn-add {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.tariff__total-tablet {
  display: none;
  background-color: #ffffff;
}

.tariff__total-tablet-container {
  width: 100%;
  padding: 24px 213px;
  margin: 0 auto;
}

.tariff__total-wrap-tablet {
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
}

/* .tariff__wrapper-configuration-slider {
  display: none;
}

.tariff__ready-configuration-btn-slider {
  display: none;
} */

.container__tab-2 {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;
}
[data-tab-slider] {
  display: none;
}
.tariff__tab-sample--mobile {
  display: none;
}
@media (max-width: 992px) {
  .tariff {
    padding-top: 48px;
    padding-bottom: 0;
  }
  .tariff__wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
  .tariff__total {
    display: none;
  }
  .tariff__total-bottom {
    display: none;
  }
  .tariff__total-tablet {
    display: block;
  }
  .tariff__total-tablet-bottom {
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
  }
  .tariff__wrapper-configuration {
    margin-bottom: 0;
  }
  .tariff__wrapper-text {
    margin-bottom: 48px;
  }
  .tariff__tab {
    width: 100%;
  }
  .tariff__wrapper-sample {
    flex-wrap: wrap;
  }
  .tariff__tab-sample-links {
    padding: 12px 50px;
  }
  .tariff__wrap-tab {
    width: 100%;
    margin-bottom: 24px;
  }
  .tariff__wrap-dropdown {
    width: 100%;
    margin-bottom: 24px;
  }
  .tariff__dropdown-btn {
    margin-left: 40%;
  }
  .tariff__wrap-counter {
    width: 100%;
  }
  .tariff__wrapper-configuration {
    flex-wrap: wrap;
  }
  .tariff__btn-add {
    margin-bottom: 48px;
  }
  .tariff__total-wrap-tablet-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tariff__ready-configuration-wrap {
    justify-content: center;
    gap: 0;
  }
  .container__tab-2 {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .radio__lebel {
    padding: 8px 45px;
  }
}

@media (max-width: 700px) {
  .tariff__ready-configuration-input-text {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 576px) {
  .tariff__configuration {
    display: none;
  }

  .tariff__wrapper-configuration {
    display: none;
  }

  .tariff__wrapper-slider--active[data-tab-slider] {
    display: block;
  }
  /* .tariff__wrapper-slider--active {
    display: block;
  } */

  .tariff__wrapper-configuration-slider {
    margin-bottom: 24px;
  }

  .tariff__ready-configuration-btn-slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tariff__wrapper {
    margin-bottom: 44px;
  }
  .tariff__tab {
    flex-wrap: wrap;
    justify-content: center;
  }
  .tariff__tab-sample {
    display: none;
    flex-direction: column;
  }
  .tariff__tab-sample--mobile {
    display: flex;
  }
  /* .tariff__tab-sample-wrap {
    margin-bottom: 20px;
  } */
  /* .tariff__tab-sample-wrap:last-child {
    margin-bottom: 0;
  } */
  .tariff__tab-links {
    padding: 12px 45px;
  }
  .tariff__tab-sample-links {
    padding: 12px 40px;
    margin: 8px 16px;
  }
  .tariff__dropdown-btn {
    margin-left: 35%;
  }
  .tariff__total-tablet-container {
    padding: 24px 16px;
  }
  .tariff__total-wrap-tablet-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tariff__ready-configuration-input-radio {
    width: 100%;
    max-width: 492px;
    height: 98px;
    flex-direction: column;
  }
  .tariff__btn-add {
    margin-bottom: 24px;
  }

  .tariff__ready-configuration-input {
    margin-left: 0;
  }
  .tariff__ready-configuration {
    padding: 24px 16px;
  }
  .container__tab-2 {
    padding: 0 26px;
  }
}

@media (max-width: 393px) {
  .tariff__dropdown-btn {
    margin-left: 27%;
  }
  .container__tab-2 {
    padding: 0;
  }
  .tariff__ready-configuration-wrap {
    justify-content: center;
  }
}

@media (max-width: 360px) {
  .tariff__dropdown-btn {
    margin-left: 25%;
  }
}
</style>
