<template>
<section>
      <section class="license">
        <div class="container">
          <div class="license__title title">
            Лицензии CommuniGate Pro Message Plus
          </div>
          <div class="license__communigate-wrap-text">
            <div class="license__communigate-text">Число учетных записей</div>
            <div class="license__communigate-text">Срок действия лицензии</div>
            <div class="license__communigate-text">Стоимость</div>
          </div>
          <div class="license__communigate-wrap">
            <div class="license__communigate-wrap-select">
              <select class="license__communigate-select">
                <option value="300">300</option>
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="300">50</option>
              </select>
            </div>
            <div class="license__communigate-radio">
              <div class="license__communigate-radio-wrap">
                <input
                  id="indefinitely"
                  class="license__communigate-input"
                  type="radio"
                  name="drone"
                  value="Бессрочная"
                  checked
                />
                <label class="license__communigate-label" for="indefinitely"
                  >Бессрочная</label
                >
              </div>
              <div class="license__communigate-radio-wrap">
                <input
                  id="month"
                  class="license__communigate-input"
                  type="radio"
                  name="drone"
                  value="12 месяцев"
                />
                <label class="license__communigate-label" for="month"
                  >12 месяцев</label
                >
              </div>
            </div>

            <div class="license__communigate-total">75 000 ₽</div>
            <button class="license__communigate-btn">Заказать</button>
          </div>
          <div class="license__communigate-tablet">
            <div class="license__communigate-tablet-text">
              Число учетных записей
            </div>
            <select
              class="
                license__communigate-select license__communigate-select--tablet
              "
            >
              <option value="300">300</option>
              <option value="200">200</option>
              <option value="100">100</option>
              <option value="300">50</option>
            </select>
            <div class="license__communigate-tablet-text">
              Срок действия лицензии
            </div>
            <div
              class="
                license__communigate-radio license__communigate-radio--tablet
              "
            >
              <div class="license__communigate-radio-wrap">
                <input
                  id="indefinitely-tablet"
                  class="license__communigate-input"                  
                  type="radio"                  
                  name="drone"
                  value="Бессрочная"
                  checked
                />
                <label
                  class="license__communigate-label"
                  for="indefinitely-tablet"
                  >Бессрочная</label
                >
              </div>
              <div class="license__communigate-radio-wrap">
                <input
                  id="month-tablet"
                  class="license__communigate-input"                  
                  type="radio"
                  name="drone"
                  value="12 месяцев"
                />
                <label class="license__communigate-label" for="month-tablet"
                  >12 месяцев</label
                >
              </div>
            </div>
            <div
              class="
                license__communigate-total license__communigate-total--tablet
              "
            >
              75 000 ₽
            </div>
            <button
              class="license__communigate-btn license__communigate-btn--tablet"
            >
              Заказать
            </button>
          </div>
        </div>
      </section>
      <section class="antispam">
        <div class="container">
          <div class="antispam__title title">
            Антиспам и антивирусное ПО для CommuniGate Pro
          </div>
          <div class="antispam__wrap-text">
            <div class="antispam__text">Тип лицензии</div>
            <div class="antispam__text">Число учетных записей</div>
            <div class="antispam__text">Срок</div>
            <div class="antispam__text">Стоимость</div>
          </div>
          <div class="antispam__wrapper">
            <div class="antispam__wrap-select">
              <select class="antispam__select">
                <option value="AS Cloudmark">AS Cloudmark</option>
                <option value="AS Cloudmark1">AS Cloudmark1</option>
                <option value="AS Cloudmark2">AS Cloudmark2</option>
                <option value="AS Cloudmark3">AS Cloudmark3</option>
              </select>

              <select class="antispam__select-number">
                <option value="300">300</option>
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="300">50</option>
              </select>
            </div>
            <div class="antispam__month">12 месяцев</div>
            <div class="antispam__price">143 000 ₽</div>
            <button class="antispam-btn">Заказать</button>
          </div>

          <div class="antispam__tablet">
            <div class="antispam__text antispam__text--tablet">
              Тип лицензии
            </div>
            <select class="antispam__select antispam__select--tablet">
              <option value="AS Cloudmark">AS Cloudmark</option>
              <option value="AS Cloudmark1">AS Cloudmark1</option>
              <option value="AS Cloudmark2">AS Cloudmark2</option>
              <option value="AS Cloudmark3">AS Cloudmark3</option>
            </select>
            <div class="antispam__text antispam__text--tablet">
              Число учетных записей
            </div>
            <select
              class="antispam__select-number antispam__select-number--tablet"
            >
              <option value="300">300</option>
              <option value="200">200</option>
              <option value="100">100</option>
              <option value="300">50</option>
            </select>

            <div class="antispam__text antispam__text--tablet">Срок</div>
            <div class="antispam__month antispam__month--tablet">
              12 месяцев
            </div>
            <div class="antispam__price antispam__price--tablet">143 000 ₽</div>
            <button class="antispam-btn antispam-btn--tablet">Заказать</button>
          </div>
        </div>
      </section>
</section>
</template>

<script>
export default {
  name: 'Possibilities',
  computed: {

  }
}
</script>

<style scoped>
/* license */

.license {
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 36px;
}

.license__title {
  margin-bottom: 48px;
}

.license__communigate-wrap {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
}

.license__communigate-wrap-text {
  display: flex;
  margin-bottom: 16px;
  padding-left: 24px;
}

.license__communigate-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  flex-basis: 27.8%;
}

.license__communigate-text:nth-child(2) {
  flex-basis: 32%;
}

.license__communigate-select {
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
  padding: 20px 68px 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 85px;
  cursor: pointer;
}

.license__communigate-select:focus {
  outline: 0;
}

.license__communigate-radio {
  display: flex;
}

.license__communigate-radio-wrap {
  margin-right: 24px;
}

.license__communigate-radio-wrap:last-child {
  margin-right: 0;
}

.license__communigate-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.license__communigate-input,
.license__communigate-label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.license__communigate-input,
.license__communigate-label::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #dfe1eb;
  border-radius: 50%;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.license__communigate-input:not(:disabled):not(:checked),
.license__communigate-label:hover::before {
  border-color: #1b5309;
}

.license__communigate-input:checked + .license__communigate-label::before {
  border-color: #1b5309;
  background-color: #1b5309;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
  background-position: center;
}

.license__communigate-label {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.license__communigate-total {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.license__communigate-btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  background-color: #830f1e;
  border-radius: 6px;
  padding: 14px 69px 14px;
  cursor: pointer;
}
.license__communigate-btn:hover {
  background-color: #660915;
}
.license__communigate-tablet {
  display: none;
  width: 343px;
  padding: 30px 24px 24px;
  background-color: #fff;
  border-radius: 8px;
}

.license__communigate-tablet-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  margin-bottom: 8px;
}

.license__communigate-tablet-text:nth-child(2) {
  margin-bottom: 16px;
}

.license__communigate-select--tablet {
  width: 100%;
  background-position-x: 251px;
  margin-bottom: 24px;
}

.license__communigate-radio--tablet {
  margin-bottom: 24px;
}

.license__communigate-total--tablet {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.license__communigate-btn--tablet {
  padding-left: 112px;
  padding-right: 113px;
}

@media (max-width: 992px) {
  .license__communigate-wrap-text {
    display: none;
  }
  .license__communigate-wrap {
    display: none;
  }
  .license__communigate-tablet {
    display: block;
  }
}

@media (max-width: 576px) {
  .license__title {
    max-width: 400px;
    margin-bottom: 65px;
  }
}

/* antispam */

.antispam {
  padding-top: 36px;
  padding-bottom: 72px;
  background-color: #fcf7f2;
}

.antispam__title {
  margin-bottom: 48px;
}

.antispam__wrap-text {
  display: flex;
  padding: 0 24px;
  margin-bottom: 16px;
}

.antispam__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  opacity: 0.6;
}

.antispam__text:first-child {
  flex-basis: 32%;
}

.antispam__text:nth-child(2) {
  flex-basis: 20%;
}

.antispam__text:nth-child(3) {
  flex-basis: 17%;
}

.antispam__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 24px;
}

.antispam__select {
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
  padding: 20px 198px 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 308px;
  cursor: pointer;
  margin-right: 37px;
}

.antispam__select-number {
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
  padding: 20px 68px 20px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 85px;
  cursor: pointer;
}

.antispam__month {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.antispam__price {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #830f1e;
}

.antispam-btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  background-color: #830f1e;
  border-radius: 6px;
  padding: 14px 69px 14px;
  cursor: pointer;
}
.antispam-btn:hover {
  background-color: #660915;
}
.antispam__tablet {
  display: none;
  width: 343px;
  padding: 30px 24px 24px;
  background-color: #fff;
  border-radius: 8px;
}

.antispam__month--tablet {
  margin-bottom: 44px;
}

.antispam__price--tablet {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.antispam__text--tablet {
  margin-bottom: 8px;
}

.antispam__text--tablet:first-child {
  margin-right: 0;
}

.antispam__text--tablet:nth-child(3) {
  margin-right: 0;
}

.antispam__text--tablet:nth-child(5) {
  margin-bottom: 28px;
}

.antispam__select--tablet,
.antispam__select-number--tablet {
  width: 100%;
  margin-bottom: 24px;
  background-position-x: 251px;
  padding-right: 68px;
}

.antispam-btn--tablet {
  padding-left: 112px;
  padding-right: 113px;
}

@media (max-width: 1200px) {
  .antispam__wrapper {
    display: none;
  }
  .antispam__wrap-text {
    display: none;
  }
  .antispam__tablet {
    display: block;
  }
}

</style>