<template>
    <div class="sertificate__buy-wrapper" @click="openSubmenu">
        <div class="sertificate__buy-wrapper-content">
          <div class="sertificate__content-title">{{ title }}</div>
          <div class="sertificate__content">
            <picture class="picture">
              <img 
                :src="logo"
                :srcset="logo"
                alt="global" class="sertificate-global-img" />
            </picture>
            <div class="sertificate__content-text">{{ certificateData.level }}</div>
          </div>
          <div class="sertificate__content-total">
            <div class="sertificate__total">{{ certificateData.price }}</div>
            <span class="sertificate__total-old--mod"></span>
            <div class="sertificate__total-old">{{ certificateData.oldPrice }}</div>
          </div>
          <button class="sertificate__btn">Заказать</button>
        </div>

        <div class="sertificate__buy-wrapper-info" :class="showClass">
          <div class="sertificate__info-text" v-html="certificateData.description"></div>
          
          <!-- Left side -->
          <div class="sertificate__info-wrap">
            <div class="sertificate__info-wrap-left">
              <div class="sertificate__info-left">
                <div v-for="option  in leftOptions" :key="option.key" class="sertificate__info-left-text">
                  {{ option.attributes.option }}
                </div>
              </div>
              <div class="sertificate__info-right">
                <div v-for="option  in leftOptions" :key="option.key" class="sertificate__info-right-text">
                  {{ option.attributes.value }}
                </div>
              </div>
            </div>

            <!-- Right side -->
            <div class="sertificate__info-wrap-right">
              <div class="sertificate__info-left">
                <div v-for="option in rightOptions" :key="option.key" class="sertificate__info-left-text"> 
                  {{ option.attributes.option }}
                </div>
              </div>
              <div class="sertificate__info-right">
                <div v-for="option in rightOptions" :key="option.key" class="sertificate__info-right-text">
                    {{ option.attributes.value }}
                </div>
              </div>
            </div>

            <!-- Left side mobile -->
            <div class="sertificate__info-wrap-left--mobile">
              <div v-for="option  in leftOptions" :key="option.key" class="sertificate__info-mobile-left">
                <div class="sertificate__info-left-text sertificate__info-left-text--mobile">{{ option.attributes.option }}</div>
                <div class="sertificate__info-right-text">{{ option.attributes.value }}</div>
              </div>
            </div>
            <!-- Right side mobile -->
            <div class="sertificate__info-wrap-right--mobile">
              <div v-for="option in rightOptions" :key="option.key" class="sertificate__info-mobile-right">
                <div class="sertificate__info-left-text sertificate__info-right-text--mobile">{{ option.attributes.option }}</div>
                <div class="sertificate__info-right-text">{{ option.attributes.value }}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

export default{
    props: {
        certificate: {
                type: Object,
                required: true,
        }
    },
    data() {
        return {
            showInfo: false
        }
    },
    computed: {
            certificateData () {
                return this.certificate.attributes
            },
            title () {
                return this.certificateData.title
            },
            logo () {
                return this.$config.imgURL + this.certificateData.logo
            },
            options () {
                return this.certificateData.options
            },
            optionNumber () {
                return this.options.length
            },
            leftOptions () {
                if(this.optionNumber%2===0) {
                    return this.options.slice(0, this.optionNumber/2)
                }
                return this.options.slice(0, this.optionNumber/2+1)
            },
            rightOptions () {
                if(this.optionNumber%2===0) {
                    return this.options.slice(this.optionNumber/2, this.optionNumber)
                }
                return this.options.slice(this.optionNumber/2+1, this.optionNumber)
            },
            showClass() {
                if(!this.showInfo) 
                return 'hide__sertificate__buy-wrapper-info'
                return ''
            }

    },
    methods: {
        openSubmenu() {
            this.showInfo = !this.showInfo
        }
    },
}
</script>

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
  padding: 12px 24px;
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
  padding: 40px 24px;
  background-color: #fff;
}
.show__sertificate__buy-wrapper-info {
  display: block;
}
.hide__sertificate__buy-wrapper-info {
  display: none;
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
@media (max-width: 992px) {
  .sertificate__wrapper {
    gap: 48px;
  }
}
@media (max-width: 768px) {
  .sertificate__wrapper {
    margin-bottom: 48px;
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
@media (max-width: 576px) {
  .sertificate__wrapper {
    gap: 16px;
  }
  .sertificate__wrapper-first {
    flex-direction: column;
    gap: 16px;
  }
  .sertificate__wrapper-second {
    flex-direction: column;
    gap: 16px;
  }
}

</style>
