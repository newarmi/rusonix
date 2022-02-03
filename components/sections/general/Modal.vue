<template>
  <div v-show="showPopup" class="popup-feature popup-show">
    <div class="popup-container">
      <div class="popup-feature-wrap">
        <div class="popup__close-feature">
          <svg class="popup__icon" width="27" height="27" @click="$emit('closePopup')">
            <use xlink:href="@/assets/img/sprites.svg#popup-close"></use>
          </svg>
        </div>
    <section v-if="!isFormSent" class="form">
      <div class="container">
      <div class="form__title title">Ваш выбор:</div>
      <div class="form__title title">{{title}}</div>
    </div>
    <div class="form__wrapper">
      <div class="partner__form">
        <div class="form__card">
          <div class="form__card-input-field">{{ fields[0].title }}
            <div class="form__card-select">
              <select v-model="fields[0].value" class="form__select">                     
                <option value="Физическое лицо">Физическое лицо</option>
                <option value="Юридическое лицо">Юридическое лицо</option>
              </select>
            </div>
          </div>
          <div class="form__card-input-field">{{ fields[1].title }}
            <div class="form__card-input-wrap">
              <input v-model="fields[1].value" type="text" class="form__card-input" value="" @keyup="checkFields"/>
              <p v-if="fields[1].error" class="error__msg">Это поле необходимо заполнить</p>
            </div>
          </div>
          <div class="form__card-input-field">{{ fields[2].title }}
            <div class="form__card-input-wrap">
              <input v-model="fields[2].value" type="text" class="form__card-input" value="" @keyup="checkFields"/>
              <p v-if="fields[2].error&&!isEmailValid" class="error__msg">Это поле необходимо заполнить</p>
              <p v-if="isEmailValid" class="error__msg">Введите корректный адрес электронной почты</p>
            </div>
          </div>
          <div class="form__card-input-field">{{ fields[3].title }}
            <div class="form__card-input-wrap">
              <input v-model="fields[3].value" type="text" class="form__card-input" value="" @keyup="checkFields"/>
              <p v-if="fields[3].error" class="error__msg">Это поле необходимо заполнить</p>
            </div>
          </div>
          <div class="form__card-input-field">{{ fields[4].title }}
            <div class="form__card-input-wrap">
              <input v-model="fields[4].value" type="text" class="form__card-input" value="" @keyup="checkFields"/>
              <p v-if="fields[4].error" class="error__msg">Это поле необходимо заполнить</p>
            </div>
          </div>
          <button class="form__btn-registration" type="button" @click="sendForm">Отправить</button>
        </div>
      </div>
    </div>
  </section>
  <section v-else>
    <div class="form__wrapper">
      <div class="partner__form">
        <div class="form__card">
          <div class="form__title title">Спасибо!</div>
          <div class="form__text">Мы приняли Вашу заявку, а наши менеджеры будут готовы связаться с Вами в ближайшее время</div>
          <button class="form__btn-registration" type="button" @click="$emit('closePopup')">Ок</button>
        </div>
      </div> 
    </div> 
  </section>
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
    name: "Modal",
    props: {
        showPopup: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
        }
  },
  data() {
    return {
      type: 'Физическое лицо',
      fields:[{title: 'Тип клиента', value: 'Физическое лицо', error: false, required: false},
              {title: 'Имя*', value: '', error: false, required: true},
              {title: 'E-mail*', value: '', error: false, required: true},
              {title: 'Компания', value: '', error: false, required: false},
              {title: 'Телефон*', value: '', error: false, required: true}],
      isFormSent: false,
      firstTry: false
    }
  },
  computed: {
    isFieldsFull() {
      return this.fields.every(item => !item.error)&&!this.isEmailValid
    },
    isEmailValid() {
      if(this.firstTry) {
        if(this.fields[2].value==='') {
          return false 
          } else {
            return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.fields[2].value)
          }
      }     
      return false
    },
  },
  methods: {  
    
    sendForm() {
      this.firstTry = true
      this.checkFields()

      if(this.isFieldsFull) {
      this.$axios.$post(this.$config.siteURL + 'api/sendOrder', {
        tariff: this.title,
        type: this.fields[0].value,
        name: this.fields[1].value,
        email: this.fields[2].value,
        company: this.fields[3].value,
        phone: this.fields[4].value,
       
      }).then(function (response) {
          
      })

      this.isFormSent = true
      }

    },
  
  checkFields() {
    if(this.firstTry) {
    this.fields.forEach(item => {
      if(item.required&&!item.value) {
        item.error = true
      } else {
        item.error = false
      }
    })
    }
  }
  }
}
</script>

<style scoped>
.error__msg {
  font-size: 12px;
  color: #830f1e;
  text-align: center;
}

.popup-feature {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(135.914px);
  overflow-y: scroll;
}

.body-scroll {
  overflow-y: hidden;
}
.popup-show {
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.popup-container {
  width: 100%;
  max-width: 1440px;
  padding: 10px 258px;
  margin: 0 auto;
}
.popup-feature-wrap {
  background-color: #ffffff;
  border-radius: 8px;

  width: 100%;
  max-width: 700px;
  padding: 30px 58px;
  margin: 0 auto;
  position: relative;
}
.popup-feature-title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 48px;
}
.popup-feature-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 720px;
}
.popup-feature-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 770px;
}
.popup-feature-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  max-width: 785px;
}
.popup-feature-wrap-text {
  margin-top: 50px;
  margin-bottom: 50px;
}
.popup__close-feature {
  position: absolute;
  right: -60px;
  top: 0;
  cursor: pointer;
  fill: white;
}
.popup-feature-title-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.popup-feature__wrapper-content {
  margin-bottom: 48px;
}
.popup-feature__wrapper-content:last-child {
  margin-bottom: 0;
}
.popup__img {
  margin-top: 24px;
  margin-bottom: 24px;
}
.popup__btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;

  color: #ffffff;
  background-color: #0f7f69;
  border-radius: 6px;
  padding: 15px 50px;
  margin-bottom: 48px;
  cursor: pointer;
}
.popup__btn:hover {
  background-color: #065848;
}
.popup-feature-wrap-text {
  margin-top: 50px;
  margin-bottom: 50px;
}
@media (max-width: 1200px) {
  .popup-container {
    padding: 10px 120px;
  }
}
@media (max-width: 992px) {
  .popup-container {
    padding: 10px 10px;
  }
  .popup__close-feature {
    top: 10px;
    right: 10px;
    fill: #000;
  }
}

@media (max-width: 576px) {
  .popup-feature-wrap {
    padding: 32px 20px;
  }
  .popup-feature1 {
    overflow-y: scroll;
  }
}

.decision__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  margin: 15px auto;
}

.form {
  background-color: white;
}
.form__title {
  font-size: 24px;
  text-align: center;
}

.form__text {
  font-family: "Graphik", sans-serif;
  font-size: 20px;
  text-align: center;
  margin: 30px;
}

.form__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  padding: 0 84px;
  margin: 0 auto;
}
.form__card {
  background-color: #fff;
  padding: 48px 24px;
  width: 508px;
}
.form__card-input-field {
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
.form__card-input-field:last-child {
  margin-bottom: 48px;
}
.form__card-input {
  width: 100%;
  max-width: 460px;

  height: 60px;
  padding: 20px 14px;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  outline: none;
}
.form__select {
  width: 100%;
  max-width: 460px;
  height: 60px;
  border: 1px solid #ede7e2;
  border-radius: 8px;
  -webkit-appearance: none;
  appearance: none;
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 15px 24px;
  background: url(@/assets/img/arrow-select.png) no-repeat right;
  background-position-x: 95%;
  cursor: pointer;
  outline: none;
}
.form__btn-registration {
  width: 100%;
  max-width: 460px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  padding: 19px 29px;
  background: #830f1e;
  border-radius: 8px;
  cursor: pointer;
}
.form__btn-registration:hover {
  background: #660915;
}

@media (max-width: 768px) {
  .form {
    /* padding-top: 48px;
    padding-bottom: 48px; */
  }
  .form__wrapper {
    padding: 0;
  }
}
@media (max-width: 576px) {
  .form__title {
    font-size: 22px;
  }

  .form__card {
    width: 320px;
    padding: 24px 16px;
  }

  .form {
    padding-top: 0;
    padding-bottom: 0;
  }
}

@media (max-width: 360px) {
   .form__title {
    font-size: 20px;
  }
  .form__card {
    width: 100%;
    padding: 24px 16px;
  }
}


</style>