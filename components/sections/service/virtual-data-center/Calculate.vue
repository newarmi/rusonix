<template>
   <section class="calculate">
        <div class="container">
          <h1 class="calculate__title title">Рассчитайте стоимость</h1>
        </div>
        <div class="calculate__wrapper">
          <div class="calculate__wrapper-left">
            <div class="calculate__configuration">
              <form action="#" class="calculate__form">
                <div class="calculate__form-title">Конфигурация</div>
                <div class="calculate__input-text">
                  Операционная система

                  <div class="calculate__input-select">
                    <select class="calculate__select">
                      <option value="Ubuntu 20.04 LTS">Ubuntu 20.04 LTS</option>
                      <option value="Ubuntu 20.04 LTS2">
                        Ubuntu 20.04 LTS2
                      </option>
                    </select>
                  </div>
                </div>
                <div class="calculate__input-text">
                  Платформа
                  <div class="calculate__input-select">
                    <select class="calculate__select">
                      <option value="Intel Cascade Lake">
                        Intel Cascade Lake
                      </option>
                      <option value="Intel Cascade Lake2">
                        Intel Cascade Lake2
                      </option>
                    </select>
                  </div>
                </div>
                <div class="calculate__input-text">
                  Количество vCPU, шт

                  <div class="calculate__input">
                    <input
                      class="calculate__input-number"
                      type="number"
                      name="vCPU_input"
                      value="64"
                      oninput="this.form.vCPU_range.value=(this.value === '' ? 0 :
                      this.value)"
                    />
                    <input
                      id="status"
                      class="calculate__input-range"
                      type="range"
                      name="vCPU_range"
                      min="0"
                      max="128"
                      value="64"
                      oninput="this.form.vCPU_input.value=this.value"
                    />
                  </div>
                </div>
                <div class="calculate__input-text">
                  RAM, ГБ

                  <div class="calculate__input">
                    <input
                      class="calculate__input-number"
                      type="number"
                      name="RAM_input"
                      value="128"
                      oninput="this.form.RAM_range.value=(this.value === '' ? 0 :
                        this.value)"
                    />
                    <input
                      id="status"
                      class="calculate__input-range"
                      type="range"
                      name="RAM_range"                      
                      min="4"
                      max="516"
                      value="128"
                      oninput="this.form.RAM_input.value=this.value"
                    />
                  </div>
                </div>
                <div class="calculate__wrap-chechbox">
                  <label class="calculate__checkbox"
                    >Microsoft SQL server
                    <input class="calculate__checkbox-input" type="checkbox" />
                    <span class="calculate__checkmark"></span>
                  </label>
                  <label class="calculate__checkbox"
                    >VPN/L2
                    <input class="calculate__checkbox-input" type="checkbox" />
                    <span class="calculate__checkmark"></span>
                  </label>
                  <label class="calculate__checkbox"
                    >Публичный IP-адрес
                    <input class="calculate__checkbox-input" type="checkbox" />
                    <span class="calculate__checkmark"></span>
                  </label>
                </div>
                <div
                  class="calculate__input-text calculate__last-configuration"
                >
                  <div class="calculate__input-wrap-text">
                    Резервное копирование с тройной репликацией данных
                    <span class="calculate__input-text--mod"
                      >Acronis InfoProtect</span
                    >
                  </div>
                  <div class="calculate__input--mod">
                    <input
                      class="calculate__input-write"
                      type="text"
                      value="380 ГБ"
                    />
                  </div>
                </div>
                <div class="calculate__form-title">Диск 1 – загрузочный</div>
                <div class="calculate__input-text">
                  Тип диска
                  <div class="calculate-input-radio">
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
                <div class="calculate__btn-disk">+ добавить диск</div>
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
                  <div class="calculate__total-card-text">
                    Intel Cascade Lake. 100% vCPU
                  </div>
                  <div class="calculate__total-card-text">
                    Intel Cascade Lake. RAM
                  </div>
                  <div class="calculate__total-card-text">
                    Быстрое сетевое хранилище (SSD)
                  </div>
                </div>
                <div class="calculate__total-wrap-price">
                  <div class="calculate__total-card-text">4600 ₽</div>
                  <div class="calculate__total-card-text">9300 ₽</div>
                  <div class="calculate__total-card-text">7700 ₽</div>
                </div>
              </div>
              <div class="calculate__total-wrap">
                <div class="calculate__total-card-text">
                  <span class="calculate__total-card-text--mod">169 000 ₽</span>
                  / месяц
                </div>
                <div class="calculate__total-card-text">
                  <span class="calculate__total-card-text--mod"
                    >5 633,33 ₽</span
                  >
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
                <li class="calculate__total-item">
                  Безлимитный трафик 100 мбит
                </li>
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
                <div class="calculate__total-card-text">
                  Intel Cascade Lake. 100% vCPU
                </div>
                <div class="calculate__total-card-text">
                  Intel Cascade Lake. RAM
                </div>
                <div class="calculate__total-card-text">
                  Быстрое сетевое хранилище (SSD)
                </div>
              </div>
              <div class="calculate__total-wrap-price">
                <div class="calculate__total-card-text">4600 ₽</div>
                <div class="calculate__total-card-text">9300 ₽</div>
                <div class="calculate__total-card-text">7700 ₽</div>
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
        </div>
      </section>
</template>

<script>
export default {
  name: 'Calculate',
  computed: {

  }
}
</script>

<style scoped>
.calculate {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}
.calculate__title {
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
  font-family: "Graphik", sans-serif;
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

  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
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

.calculate__wrap-chechbox {
  margin-bottom: 32px;
}

.calculate__input-range::-webkit-slider-thumb {
  background-color: #1b5309;
  border: 5px solid #dbe3d8;
  border-radius: 50%;
  height: 21px;
  width: 21px;
  margin-top: -8px;
}
.calculate__wrap-chechbox {
  display: flex;
  align-items: center;
}
.calculate__checkbox {
  display: flex;
  position: relative;
  user-select: none;
  margin-right: 34px;
  padding-left: 28px;

  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
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
}
.calculate__checkbox-input:checked ~ .calculate__checkmark {
  background-color: #1b5309;
}

.calculate__checkmark:after {
  content: "";
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
.calculate__input-text {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #7c7c7c;
}
.calculate__input-wrap-text {
  width: 100%;
  max-width: 402px;
}
.calculate__input-text--mod {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
.calculate__input-write {
  width: 100%;
  max-width: 257px;
  height: 48px;

  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 14px 24px;

  border: 1px solid #ede7e2;
  border-radius: 8px;
}
.calculate-input-radio {
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
  font-family: "Graphik", sans-serif;
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
.calculate__btn-disk {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
  cursor: pointer;
}
.calculate__btn-disk:hover {
  opacity: 0.4;
}
.calculate__wrapper-btn-add {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
.calculate__btn-add {
  font-family: "Graphik", sans-serif;
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
.calculate__wrapper-right {
}
.calculate__total {
  background-color: #fff;
  border-radius: 8px;
  padding: 48px 29px;
}
.calculate__total-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
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
  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}
.calculate__btn {
  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
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
.calculate__total-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
}
.calculate__total-bottom-title {
  font-family: "Graphik", sans-serif;
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
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 8px;
}
.calculate__total-tablet {
  background-color: #ffffff;
  display: none;
}
.calculate__total-tablet-container {
  width: 100%;
  padding: 24px 213px;
  margin: 0 auto;
}
.calculate__total-wrap-tablet {
  flex-direction: column;
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
@media (max-width: 992px) {
  .calculate {
    padding-bottom: 0;
  }
  .calculate__wrapper {
    justify-content: center;
    padding: 0;
  }
  .calculate__wrapper-right {
    display: none;
  }
  .calculate__total-tablet {
    display: block;
  }
  .calculate__btn-add {
    margin-bottom: 48px;
  }
}
@media (max-width: 768px) {
  .calculate__input-text {
    flex-direction: column;
    align-items: flex-start;
  }
  .calculate__total-tablet-container {
    padding: 24px 16px;
  }
  .calculate-input-radio {
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    height: 98px;
  }

  .calculate__wrap-chechbox {
    flex-direction: column;
    align-items: flex-start;
  }
  .calculate__checkbox {
    margin-bottom: 12px;
  }
  .radio__lebel {
    padding: 8px 40px;
  }
}

@media (max-width: 576px) {
  .calculate__configuration {
    padding: 24px 16px;
  }
}


</style>