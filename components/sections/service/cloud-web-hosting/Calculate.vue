<template>
  <section class="calculate">
    <div class="container">
      <h1 class="calculate__title title">Рассчитайте стоимость</h1>
      <p class="calculate__text">
        Тарифы на хостинг для сайта с одним из лучших соотношений цены и
        качества на рынке. Просто занимайтесь своим бизнесом, не волнуясь за ваш
        сайт. Все наши серверы находятся в России, тестируйте – убедитесь в
        качестве наших услуг!
      </p>
    </div>
    <div class="calculate__wrapper">
      <div class="calculate__wrapper-left">
        <div class="calculate__configuration">
          <form action="#" class="calculate__form">
            <div class="calculate__form-title">Конфигурация</div>

            <div class="calculate__input-text">
              Количество сайтов

              <div class="calculate__input">
                <input
                  class="calculate__input-number"
                  type="number"
                  name="count_input"
                  value="5"
                  oninput="this.form.count_range.value=(this.value === '' ? 0 :
                      this.value)"
                />
                <input
                  id="status"
                  class="calculate__input-range"
                  type="range"
                  name="count_range"
                  min="0"
                  max="8"
                  value="5"
                  oninput="this.form.count_input.value=this.value"
                />
              </div>
            </div>
            <div class="calculate__input-text">
              Объем диска, ГБ
              <div class="calculate__input">
                <input
                  class="calculate__input-number"
                  type="number"
                  name="GB_input"
                  value="16"
                  oninput="this.form.GB_range.value=(this.value === '' ? 0 :
                          this.value)"
                />
                <input
                  id="status"
                  class="calculate__input-range"
                  type="range"
                  name="GB_range"
                  min="2"
                  max="64"
                  value="16"
                  oninput="this.form.GB_input.value=this.value"
                />
              </div>
            </div>
            <div class="calculate__input-text">
              Период
              <div class="calculate__input-select">
                <select class="calculate__select">
                  <option value="24 месяца">24 месяца</option>
                  <option value="12 месяцев">12 месяцев</option>
                  <option value="6 месяцев">6 месяцев</option>
                </select>
              </div>
            </div>
            <div class="calculate__wrap-chechbox">
              <label class="calculate__checkbox"
                >Plesk WordPress Toolkit
                <input class="calculate__checkbox-input" type="checkbox" />
                <span class="calculate__checkmark"></span>
                <div class="calculate__checkbox-helper">
                  <div class="calculate__checkbox-helper-wrap">
                    <div class="calculate__checkbox-helper-box">
                      <p class="calculate__checkbox-helper-text">
                        Самый полный, безопасный и универсальный набор
                        инструментов для WordPress.
                      </p>
                      <a href="#" class="calculate__checkbox-helper-link">
                        Подробнее >
                      </a>
                    </div>
                  </div>
                </div>
              </label>
              <label class="calculate__checkbox"
                >Premium Email
                <input class="calculate__checkbox-input" type="checkbox" />
                <span class="calculate__checkmark"></span>
                <div class="calculate__checkbox-helper">
                  <div class="calculate__checkbox-helper-wrap">
                    <div class="calculate__checkbox-helper-box">
                      <p class="calculate__checkbox-helper-text">
                        Самый полный, безопасный и универсальный набор
                        инструментов для WordPress.
                      </p>
                      <a href="#" class="calculate__checkbox-helper-link">
                        Подробнее >
                      </a>
                    </div>
                  </div>
                </div>
              </label>
              <label class="calculate__checkbox calculate__checkbox--mod"
                >Оптимизация под CMS Битрикс
                <input
                  class="calculate__checkbox-input"
                  type="checkbox"
                  checked
                />
                <span class="calculate__checkmark"></span>
                <div class="calculate__checkbox-helper">
                  <div class="calculate__checkbox-helper-wrap">
                    <div class="calculate__checkbox-helper-box">
                      <p class="calculate__checkbox-helper-text">
                        Самый полный, безопасный и универсальный набор
                        инструментов для WordPress.
                      </p>
                      <a href="#" class="calculate__checkbox-helper-link">
                        Подробнее >
                      </a>
                    </div>
                  </div>
                </div>
              </label>
              <label class="calculate__checkbox"
                >SSL AlphaSSL
                <input class="calculate__checkbox-input" type="checkbox" />
                <span class="calculate__checkmark"></span>
                <div class="calculate__checkbox-helper">
                  <div class="calculate__checkbox-helper-wrap">
                    <div class="calculate__checkbox-helper-box">
                      <p class="calculate__checkbox-helper-text">
                        Самый полный, безопасный и универсальный набор
                        инструментов для WordPress.
                      </p>
                      <a href="#" class="calculate__checkbox-helper-link">
                        Подробнее >
                      </a>
                    </div>
                  </div>
                </div>
              </label>
              <label class="calculate__checkbox"
                >Антивирус imunify360
                <input class="calculate__checkbox-input" type="checkbox" />
                <span class="calculate__checkmark"></span>
                <div class="calculate__checkbox-helper">
                  <div class="calculate__checkbox-helper-wrap">
                    <div class="calculate__checkbox-helper-box">
                      <p class="calculate__checkbox-helper-text">
                        Самый полный, безопасный и универсальный набор
                        инструментов для WordPress.
                      </p>
                      <a href="#" class="calculate__checkbox-helper-link">
                        Подробнее >
                      </a>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div class="calculate__wrapper-btn-add">
          <button class="calculate__btn-add">
            + добавить еще одну конфигурацию
          </button>
        </div>
      </div>
      <div class="calculate__wrapper-right">
        <div class="calculate__total">
          <div class="calculate__total-title">Итого</div>
          <div class="calculate__wrapper-total-text">
            <div class="calculate__total-wrap-text">
              <div class="calculate__total-card-text">Количество сайтов: 5</div>
              <div class="calculate__total-card-text">
                Объем диска: 120 GB NVMe
              </div>
              <div
                class="
                  calculate__total-card-text calculate__total-card-text--modify
                "
              >
                Скидка 24%
              </div>
            </div>
            <div class="calculate__total-wrap-price">
              <div class="calculate__total-card-text">4600 ₽</div>
              <div class="calculate__total-card-text">9300 ₽</div>
              <div
                class="
                  calculate__total-card-text
                  calculate__total-card-text--modify
                  calculate__total-card-text--psevdo
                "
              >
                1200 ₽
              </div>
            </div>
          </div>
          <div class="calculate__total-wrap">
            <div class="calculate__total-card-text">
              <span class="calculate__total-card-text--mod">169 000 ₽</span>
              / месяц
            </div>
            <div class="calculate__total-card-text">
              <span class="calculate__total-card-text--mod">5 633,33 ₽</span>
              / день
            </div>
          </div>
          <button class="calculate__btn">Подключиться</button>
          <button class="calculate__btn-download">
            <svg class="clip__icon" width="9" height="18">
              <use xlink:href="@/assets/img/sprites.svg#clip"></use>
            </svg>
            Скачать PDF с расчетом
          </button>
        </div>

        <div class="calculate__total-bottom">
          <div class="calculate__total-bottom-title">
            В любую конфигурацию сервера всегда входит
          </div>
          <ul class="calculate__total-list">
            <li class="calculate__total-item">Голосовая поддержка 24/7</li>
            <li class="calculate__total-item">Безлимитный трафик 100 мбит</li>
            <li class="calculate__total-item">Маска и антисептик</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="calculate__total-tablet">
      <div class="calculate__total-tablet-container">
        <div class="calculate__total-tablet-title calculate__total-title">
          Итого
        </div>
        <div class="calculate__wrapper-total-text">
          <div class="calculate__total-wrap-text">
            <div class="calculate__total-card-text">Количество сайтов: 5</div>
            <div class="calculate__total-card-text">
              Объем диска: 120 GB NVMe
            </div>
            <div
              class="
                calculate__total-card-text calculate__total-tablet-card-text
              "
            >
              Скидка 24%
            </div>
          </div>
          <div class="calculate__total-wrap-price">
            <div class="calculate__total-card-text">4600 ₽</div>
            <div class="calculate__total-card-text">9300 ₽</div>
            <div
              class="
                calculate__total-card-text
                calculate__total-tablet-card-text
                calculate__total-tablet-card-text--mod
              "
            >
              1200 ₽
            </div>
          </div>
        </div>
        <div class="calculate__total-wrap calculate__total-wrap-tablet">
          <div class="calculate__total-card-text">
            <span class="calculate__total-card-text--mod">169 000 ₽</span> /
            месяц
          </div>
          <div class="calculate__total-card-text">
            <span class="calculate__total-card-text--mod">5 633,33 ₽</span>
            / день
          </div>
        </div>
        <div class="calculate__total-wrap-tablet-btn">
          <button class="calculate__btn">Подключиться</button>
          <button class="calculate__btn-download">
            <svg class="clip__icon" width="9" height="18">
              <use xlink:href="@/assets/img/sprites.svg#clip"></use>
            </svg>
            Скачать PDF с расчетом
          </button>
        </div>
      </div>
      <div class="calculate__total-bottom calculate__total-tablet-bottom">
        <div class="calculate__total-bottom-title">
          В любую конфигурацию сервера всегда входит
        </div>
        <ul class="calculate__total-list">
          <li class="calculate__total-item">Голосовая поддержка 24/7</li>
          <li class="calculate__total-item">Безлимитный трафик 100 мбит</li>
          <li class="calculate__total-item">Маска и антисептик</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const inputRange = document.querySelectorAll('.calculate__input-range')
    const inputText = document.querySelectorAll('.calculate__input-number')

    function setBackgroundSize(inputRange) {
      inputRange.style.setProperty(
        '--background-size2',
        `${getBackgroundSize(inputRange)}%`
      )
    }

    // setBackgroundSize(inputRange);
    inputText.forEach((item, index) => {
      setBackgroundSize(inputRange[index])
      item.addEventListener('input', () => setBackgroundSize(inputRange[index]))
    })

    function getBackgroundSize(inputRange) {
      const min = +inputRange.min || 0
      const max = +inputRange.max || 100
      const value = +inputRange.value

      const size = ((value - min) / (max - min)) * 100

      return size
    }
  },
}
</script>

<style scoped>
.calculate {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.calculate__title {
  font-family: 'Graphik', sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 24px;
}
.calculate__text {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 1100px;

  margin-bottom: 48px;
}

.calculate__wrapper {
  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 62px;
}
.calculate__wrapper-left {
  width: 100%;
  max-width: 808px;
}
.calculate__configuration {
  background-color: #fff;
  flex: 1 1 calc((100% / 2) - 62px);
  padding: 48px 29px;
}
.calculate__form-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.calculate__input-text {
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
.calculate__last-configuration {
  margin-bottom: 32px;
}
.calculate__input-select {
  width: 100%;
  max-width: 518px;
}
.calculate__select {
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
.calculate__input {
  width: 100%;
  max-width: 518px;
  position: relative;
}
.calculate__input-number {
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
  border: 1px solid #9b938d;
  border-radius: 8px;
  outline: none;
}
.calculate__input-number::-webkit-inner-spin-button {
  display: none;
}
.calculate__input-range {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  max-width: 518px;
  pointer-events: none;
}
.calculate__input-range,
.calculate__input-range::-webkit-slider-runnable-track,
.calculate__input-range::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.calculate__input-range::-webkit-slider-runnable-track {
  height: 3px;
  background: linear-gradient(to right, #1b5309, #1b5309), #ede7e2;
  background-size: var(--background-size2, 0%) 100%;
  background-repeat: no-repeat;
  border-radius: 8px;
}
/* точка input range*/

.calculate__input-range::-webkit-slider-thumb {
  background-color: #1b5309;
  border: 5px solid #dbe3d8;
  border-radius: 50%;
  height: 21px;
  width: 21px;
  margin-top: -8px;
}
.calculate__total {
  background-color: #fff;
  border-radius: 8px;
  padding: 48px 29px;
}
.calculate__total-title {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.calculate__wrapper-total-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.calculate__total-card-text {
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
.calculate__total-wrap {
  display: flex;
  gap: 29px;
  margin-bottom: 48px;
}
.calculate__total-card-text--mod {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}
.calculate__total-card-text--modify {
  color: #830f1e;
}
.calculate__total-card-text--psevdo {
  position: relative;
}
.calculate__total-card-text--psevdo::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -10px;
  background-color: #830f1e;
  width: 6px;
  height: 1px;
}
.calculate__btn {
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
.calculate__btn:hover {
  background-color: #660915;
}
.calculate__btn-download {
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
.clip__icon {
  fill: transparent;
  stroke: #878b99;
  margin-right: 8px;
}
.calculate__btn-download:hover > .clip__icon,
.calculate__btn-download:hover {
  fill: transparent;
  stroke: #000;
  color: #000;
}
.calculate__wrap-chechbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 26px;
  margin-top: 48px;
}
.calculate__checkbox {
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  padding-left: 28px;

  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  flex-basis: 27%;
}
.calculate__checkbox--mod {
  flex-basis: 35%;
}
.calculate__checkbox-input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
.calculate__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #dfe1eb;
  border-radius: 3px;
  cursor: pointer;
}
.calculate__checkbox-input:checked ~ .calculate__checkmark {
  background-color: #1b5309;
}

.calculate__checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.calculate__checkbox-input:checked ~ .calculate__checkmark:after {
  display: block;
}
.calculate__checkmark:after {
  left: 6px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
.calculate__checkbox-helper {
  width: 16px;
  height: 16px;
  border: 1px solid #b0b0b0;
  background-color: #b0b0b0;
  border-radius: 50%;
  opacity: 1;
  margin-left: 4px;
  cursor: pointer;
}
.calculate__checkbox-helper-box {
  padding: 24px 16px;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: inherit;
}
.calculate__checkbox-helper-text {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 12px;
}
.calculate__checkbox-helper-link {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}
.calculate__checkbox-helper-wrap {
  position: absolute;
  left: 50%;
  margin-left: -161.5px;
  bottom: 90%;
  width: 343px;
  padding: 10px;
  opacity: 0;
  visibility: hidden;
}
.calculate__checkbox-helper:hover .calculate__checkbox-helper-wrap {
  opacity: 1;
  visibility: visible;
}
.calculate__wrapper-btn-add {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
.calculate__btn-add {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #830f1e;
  background-color: transparent;
  cursor: pointer;
}
.calculate__btn-add:hover {
  opacity: 0.4;
}

.calculate__total-tablet {
  background-color: #ffffff;
  display: none;
}

.calculate__total-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}
.calculate__total-bottom-title {
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
.calculate__total-list {
  list-style-image: url(@/assets/img/total-item-active.png);
}
.calculate__total-item {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}

.calculate__total-tablet-container {
  width: 100%;
  padding: 24px 213px;
  margin: 0 auto;
}
.calculate__total-wrap-tablet {
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
}
.calculate__total-wrap-tablet-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.calculate__total-tablet-card-text {
  position: relative;
  color: #830f1e;
}
.calculate__total-tablet-card-text--mod::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -10px;
  background-color: #830f1e;
  width: 6px;
  height: 1px;
}
@media (max-width: 992px) {
  .calculate {
    padding-bottom: 0;
  }
  .calculate__wrapper {
    margin-bottom: 48px;
    justify-content: center;
    padding: 0;
  }
  .calculate__wrapper-right {
    display: none;
  }

  .calculate__total-tablet {
    display: block;
  }
  .calculate__wrap-chechbox {
    flex-direction: column;
    align-items: flex-start;
  }
  .calculate__total-tablet-bottom {
    margin-bottom: 48px;
  }
}
@media (max-width: 850px) {
  .calculate__input-text {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 768px) {
  .calculate__total-tablet-container {
    padding: 24px 16px;
  }
}
@media (max-width: 576px) {
  .calculate__configuration {
    padding: 24px 16px;
  }
  .calculate__total-wrap-tablet {
    flex-direction: column;
  }
}
</style>
