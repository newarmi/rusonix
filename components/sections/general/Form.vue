<template>
  <section id="form" class="form">
        <div class="container">
          <div class="form__title title">{{title}}</div>
        </div>
        <div class="form__wrapper">
            <form class="partner__form">
              <div class="form__card">
                <div v-show="!formSent">
                <div class="form__card-input-field">{{fields.title}}
                  <div class="form__card-input-wrap">
                    <input v-model="name" type="text" class="form__card-input" value="" />
                  </div>
                </div>

                <div class="form__card-input-field">{{fields.alt_title}}
                  <div class="form__card-input-wrap">
                    <input v-model="email" type="text" class="form__card-input" value="" />
                  </div>
                </div>

                <div class="form__card-input-field">{{fields.image}}
                  <div class="form__card-input-wrap">
                    <input v-model="phone" type="text" class="form__card-input" value="" />
                  </div>
                </div>

                <div class="form__card-input-field">{{fields.link_name}}
                  <div class="form__card-select">
                    <select v-model="department" class="form__select">                     
                      <option v-for="item in list" :key="item.key" :value="item.attributes.item">{{item.attributes.item}}</option>
                    </select>
                  </div>
                </div>
                <button class="form__btn-registration" type="button" @click="addPartner()">Зарегистрироваться</button>
              </div>
              <div v-show="formSent" class="decision__card-title">
               Заявка на партнерство отправлена
              </div>
              </div>
              
            </form>
        </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Form',
  props: {
    title: {
      type: String,
      default: "Заявка на партнерство"
    }
  },
  data() {
    return {
      formSent: false,
      name: '',
      email: '',
      phone: '',
      department: 'Представитель digital агентства'
    }
  },
  computed: {
    ...mapGetters(['form']),
    fields() {
      return this.form.sections[0]
    },
    list() {
      return JSON.parse(this.fields.content)
    }
  },
  methods: {
    addPartner() {
      this.$axios.$post(this.$config.siteURL + 'api/addPartner', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        department: this.department
      }).then(function (response) {
          
       })
       this.formSent = true
    }
  }
}
</script>

<style scoped>
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
    padding: 24px 16px;
  }
}

</style>
