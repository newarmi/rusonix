<template>
    <div class="container">
      <div class="title__container">
        <h2 class="form__title title">{{items.title}}</h2>
      </div>
      <div class="sertificate__global-wrapper">
      <div class="sertificate__buy-wrapper">
          <div v-for="service in items.services" :key="service.key" class="sertificate__buy-wrapper-content">
            <div class="sertificate__content-title">{{service.attributes.title}}</div>
            <div class="sertificate__content-total">
              <div class="sertificate__total">{{ service.attributes.price }}</div>
            </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>

export default{
    props: {
      items: {
              type: Object,
              required: true,
             },
    },
    data() {
        return {

        }
    },
    computed: {
          

    },
    methods: {

    },
}
</script>

<style scoped>
.title__container {
  margin: 30px 0;
}

.sertificate__global-wrapper {
  margin: 20px 0;
  background-color: #FCF7F2;
  padding: 10px;
}

.sertificate-global-img {
  width: 125px;
  max-width: none;
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
.sertificate__buy-wrapper-title > .sertificate__buy-title:nth-child(1) {
  flex: 0 0 62%;
 
}

.sertificate__buy-wrapper {
  margin-bottom: 8px;
  
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

/*sdgvsdfgbsdf*/

.sertificate__buy-wrapper {
  margin-bottom: 8px;
}
.sertificate__buy-wrapper-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  padding: 15px 24px;
  margin: 10px 0;

  border-radius: 8px;

  flex: 0 1 35%;
}

.sertificate__buy-wrapper-content:hover {
  background-color: #FCF7F2;
}

.sertificate__content-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  flex: 1;
}
.sertificate__content {
  display: flex;  
  gap: 60px;
  align-items: center;
  flex: 1;
}
.sertificate__content-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  flex: 1 0 0%;

}
.sertificate__content-total {
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  flex: 0 1 24%;
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
  flex: 1 1 20%;
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


</style>
