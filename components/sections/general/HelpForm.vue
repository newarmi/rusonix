<template>
  <section :id="items.tag" class="form">
    <div class="container">
      <h2 class="form__title title">{{items.title}}</h2>
    </div>
    <div class="form__wrapper">
      <form class="partner__form">
        <div class="form__card">
          <div v-show="!formSent">
          <div class="form__card-input-field">ФИО*
            <div class="form__card-input-wrap">
              <input v-model="fields[0].value" type="text" class="form__card-input" 
                     value="" @keyup="checkFields()" />
              <p v-if="fields[0].error" class="error__msg">Это поле необходимо заполнить</p>
            </div>
          </div>
          <div class="form__card-input-field">E-mail*
            <div class="form__card-input-wrap">
              <input v-model="fields[1].value" type="text" class="form__card-input" 
                     value="" @keyup="checkFields()" />
              <p v-if="fields[1].error&&!isEmailValid" class="error__msg">Это поле необходимо заполнить</p>
              <p v-if="isEmailValid" class="error__msg">Введите корректный адрес электронной почты</p>
            </div>
          </div>

          <div class="form__card-input-field">Компания
            <div class="form__card-input-wrap">
              <input v-model="company" type="text" class="form__card-input" 
                     value="" @keyup="checkFields()" />
            </div>
          </div>

          <div class="form__card-input-field">Телефон*
            <div class="form__card-input-wrap">
              <input v-model="fields[2].value" type="text" class="form__card-input" 
                     value="" @keyup="checkFields()" />
              <p v-if="fields[2].error" class="error__msg">Это поле необходимо заполнить</p>
            </div>
          </div>

          <div class="form__card-input-field">Услуга:
            <div class="form__card-select">
              <select v-model="fields[3].value" class="form__select">                     
                <option>Лечение</option>
                <option>Лечение и защита</option>
              </select>
            </div>
          </div>


          <button class="form__btn-registration" type="button" @click="addPartner()">Отправить</button>
        </div>
        <div v-show="formSent" class="decision__card-title">
          <div class="form__answer title">Спасибо!</div>
          <div class="form__text">Мы приняли Вашу заявку, а наши менеджеры будут готовы связаться с Вами в ближайшее время</div>
        </div>
        </div> 
      </form>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SupportForm',
  props: {
    items: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      formSent: false,
      errors: [false, false, false],
      firstTry: false,
      company: '',
      fields: [{value: '', error: false},
               {value: '', error: false},
               {value: '', error: false},
               {value: 'Лечение', error: false}],
      file: ''
    }
  },
  computed: {
    isFieldsFull () {
      return this.fields.every(item => !item.error)&&!this.isEmailValid
    },
    isEmailValid() {
      if(this.firstTry) {
        if(this.fields[1].value==='') {
          return false 
          } else {
            return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.fields[1].value)
          }
      }     
      return false
    },

  },
  methods: {
addPartner() {
      this.firstTry = true
      this.checkFields()

      if(this.isFieldsFull) {

      this.$axios.$post(this.$config.siteURL + 'api/sendHelpOrder', {
        name: this.fields[0].value,
        email: this.fields[1].value,
        phone: this.fields[2].value,
        company: this.company,
        topic: this.fields[3].value,
      }).then(function (response) {
          
       })
       this.formSent = true
      }
    },

    checkFields() {
      if(this.firstTry) {
      this.fields.forEach(item => {
        if(item.value) {
          item.error = false
        } else {
          item.error = true
        }
      })
      }
    }
  }
}
</script>

<style scoped>
.form__card-file-title {
  margin-bottom: 20px;
}

.error__msg {
  font-size: 12px;
  color: #830f1e;
  text-align: center;
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
  background-color: #fcf7f2;
  padding-top: 72px;
  padding-bottom: 72px;
}

.form__title {
  margin-bottom: 96px;
  text-align: center;
}

.form__answer {
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

.form__card-textarea {
  width: 100%;
  max-width: 460px;
  height: 250px;
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
  resize: none; 
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
.form__btn-file {
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
  margin-top: 10px;
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
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .form__wrapper {
    padding: 0;
  }
}
@media (max-width: 576px) {
  .form__card {
    width: 375px;
    padding: 24px 24px;
  }
}

</style>
