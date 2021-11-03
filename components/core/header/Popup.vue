<template>
  <div v-show="showPopup" class="popup-feature popup-show">
    <div class="popup-container">
      <div class="popup-feature-wrap">
        <div class="popup__close-feature">
          <svg class="popup__icon" width="27" height="27" @click="$emit('closePopup')">
            <use xlink:href="@/assets/img/sprites.svg#popup-close"></use>
          </svg>
        </div>
        <div class="popup-feature-title">{{ title }}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
                type: String,
                required: true
                },
        showPopup: {
                type: Boolean,
                default: false
                }
            },
    data() {
        return {
            
        }
    },

            
    methods: {

    }
    
}
</script>


<style scoped>
.popup-feature {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(135.914px);
}
.popup-feature {
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
  padding: 48px 258px;
  margin: 0 auto;
}
.popup-feature-wrap {
  background-color: #ffffff;
  border-radius: 8px;

  width: 100%;
  max-width: 924px;
  padding: 72px 58px;
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

.popup-feature-wrap-text {
  margin-top: 50px;
  margin-bottom: 50px;
}
.popup__close-feature {
  position: absolute;
  right: -60px;
  top: 0;
  cursor: pointer;
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
.popup-feature2-wrap-text {
  margin-top: 50px;
  margin-bottom: 50px;
}
@media (max-width: 1200px) {
  .popup-container {
    padding: 48px 120px;
  }
}
@media (max-width: 768px) {
  .popup-container {
    padding: 48px 70px;
  }
  .popup__close-feature {
    right: -50px;
  }
}
@media (max-width: 576px) {
  .popup-feature-wrap {
    padding: 32px 20px;
  }
  .popup-feature {
    overflow-y: scroll;
  }
}
</style>