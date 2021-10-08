<template>
  <div class='top-line__wrapper'>
    <div class="header__wrapper-top">
      <div class="header__wrapper">
        <div class="header__top-info">
          Блог: Почему переход на NVMe окупается в первый месяц
        </div>
        <ul class="contacts">
          <li class="contacts__phone">
            <a href="tel:+7 495 106 15 63">+7 495 106 15 63</a>
          </li>
          <li class="contacts__search">
            <a href="#">Поиск</a>

            <svg class="search__icon" width="17" height="17">
              <use xlink:href="@/assets/svg/sprites.svg#search"></use>
            </svg>
          </li>
          <li>
            <nuxt-link to="/knowledge-base">База знаний</nuxt-link>
          </li>
          <li class="contact__auth">
            <nuxt-link to="/account">Личный кабинет
              <svg class="auth__icon" width="15" height="18">
                <use xlink:href="@/assets/svg/sprites.svg#auth"></use>
              </svg>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__wrapper-bottom">
      <div class="header__wrapper">
        <nuxt-link to='/' class='logo'>
          <picture class="picture">
            <img
              src="@/assets/img/logo.png"
              srcset="@/assets/img/logo@2x.png 2x"
              class="header__logo"
              alt="logo"
            />
          </picture>
        </nuxt-link>
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <nuxt-link to="/company" class="navigation__link">О компании</nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/services" class="navigation__link">Услуги</nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/magazine" class="navigation__link">Журнал</nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/support" class="navigation__link">Поддержка</nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/partners" class="navigation__link">Партнерская программа</nuxt-link>
            </li>
            <button class="navigation__btn" type='button'>Протестировать</button>
          </ul>
        </nav>
      </div>
    </div>
    <!-- start mobile header-->
    <div class="header__wrapper-mobile">
          <button class="header__burger-btn" @click="isMenuOpen=!isMenuOpen">
            <span class="header__burger-btn-decor"></span>
          </button>
          <nuxt-link to='/' class="logo">
            <picture class="picture">
              <img
                src="@/assets/img/logo-mobile.png"
                srcset="@/assets/img/logo-mobile@2x.png 2x"
                class="header__logo"
                alt="logo-mobile"
              />
            </picture>
          </nuxt-link>
          <a href="#">
            <svg class="auth__icon" width="15" height="18">
              <use xlink:href="@/assets/img/sprites.svg#auth"></use>
            </svg>
          </a>
        </div>
        <nav  class="navigation__mobile" :class="{open: isMenuOpen}">
          <ul class="navigation__list-mobile">
            <li class="navigation__item-mobile">
               <nuxt-link to="/company" class="navigation__link-mobile">О компании</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/services" class="navigation__link-mobile dropdown-submenu" 
                >Услуги</nuxt-link>
              <ul class="dropdown-submenu__list-mobile" :style="displayNone">
                <li class="dropdown-submenu__item-mobile">
                  <a href="#" class="dropdown-submenu__link"
                    >Облачные VPS серверы</a
                  >
                </li>
                <li class="dropdown-submenu__item-mobile">
                  <a href="#" class="dropdown-submenu__link"
                    >Виртуальный дата центр</a
                  >
                </li>
                <li class="dropdown-submenu__item-mobile">
                  <a href="#" class="dropdown-submenu__link"
                    >Облачный веб хостинг</a
                  >
                </li>
                <li class="dropdown-submenu__item-mobile">
                  <a href="#" class="dropdown-submenu__link"
                    >SSL, лицензии и домены</a
                  >
                </li>
              </ul>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/magazine" class="navigation__link-mobile">Журнал</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/support" class="navigation__link-mobile">Поддержка</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/partners" class="navigation__link-mobile" href="#"
                >Партнерская программа</nuxt-link>
            </li>
          </ul>
          <ul class="contacts__mobile">
            <li class="contacts__search-mobile">
              <a href="#" class="contacts__search-link">Поиск</a>

              <svg class="search__icon-mobile" width="17" height="17">
                <use xlink:href="@/assets/img/sprites.svg#search"></use>
              </svg>
            </li>
          </ul>
        </nav>
    <!-- end mobile header-->
  </div>
</template>

<script>
export default {
  name: 'TopLine',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  computed: {
      displayNone() {
        return this.$route.name==='services' ? {display: 'block'} : {display: 'none'};
      }
  },
}
</script>

<style scoped>

.top-line__wrapper {
  position: absolute;
  width: 100%;
}

.header__wrapper-top {
  padding: 10px 0;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 0 26px;
  margin: 0 auto;
}

.header__top-info {
  color: #ffffff;
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
}

.contacts {
  display: flex;
  align-items: center;
}

.contacts a {
  color: #ffffff;
}

.contacts li {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 25px;
  cursor: pointer;
}

.contacts__search {
  position: relative;
}

.search__icon {
  position: absolute;
  right: -26px;
  fill: transparent;
}

.contacts li:nth-child(2) {
  margin-right: 25px;
}

.contact__auth {
  position: relative;
}

.auth__icon {
  fill: transparent;
}

.contact__auth svg {
  position: absolute;
  right: -23px;
}

.contacts li:last-child {
  margin-right: 25px;
}

.header__wrapper-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header__wrapper-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation__list {
  display: flex;
  align-items: center;
}

.navigation__item {
  margin-right: 60px;
}

.navigation__item:last-child {
  padding: 0;
}

.navigation__link {
  color: #ffffff;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  border-bottom: 4px solid transparent;
  padding-bottom: 25px;
  transition: all 0.4s ease;
  transition-delay: 0.2s;
}

.navigation__link:hover {
  border-bottom: 4px solid #ffffff;
  padding-bottom: 25px;
  opacity: 1;
}

.navigation__link.nuxt-link-active {
  border-bottom: 4px solid #ffffff;
  padding-bottom: 25px;
  opacity: 1;
}

.navigation__btn {
  border-radius: 6px;
  background-color: #bd162c;
  color: #ffffff;
  padding: 15px 20px;
  margin-top: 15px;
  margin-bottom: 13px;
  cursor: pointer;
}
.navigation__btn:hover {
  background-color: #9C0E20;
  /*mix-blend-mode: normal;*/
  /*opacity: 0.2;*/
}


/*  burger  */

.header__burger-btn {
  position: relative;
  background-color: transparent;
  border: none;
  outline: 0;
  width: 20px;
  height: 15px;
}

.header__burger-btn::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s;
}

.header__burger-btn-decor {
  display: block;
  background-color: #fff;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 7px;
  right: 0;
  transition: 0.3s;
}

.header__burger-btn::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
}
.header__wrapper-mobile {
  display: none;
}

.navigation__mobile {
  display: none;
  position: fixed;
  top: 53px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: #000;

  transform: translateX(-150vw);
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.4s;
}
.navigation__mobile.open {
  transform: translateX(0);
  transition: all 0.4s;
}

.navigation__list-mobile {
  padding: 48px 16px;
}
.navigation__item-mobile {
  margin-bottom: 36px;
}
.navigation__item-mobile:last-child {
  margin-bottom: 0;
}
.navigation__link-mobile {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
}
.dropdown-submenu__list-mobile {
  padding: 36px 32px 0px;
  display: none;
}
.dropdown-submenu__item-mobile {
  margin-bottom: 24px;
}
.dropdown-submenu__link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  opacity: 0.6;
}
.contacts__mobile {
  padding-left: 16px;
}
.contacts__search-link {
  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;

  color: #fff;
}
.contacts__search-mobile {
  position: relative;
}
.search__icon-mobile {
  position: absolute;
  left: 53px;
  fill: transparent;
}

@media (max-width: 1250px) {
  .header__wrapper-top {
    display: none;
  }
  .header__wrapper-bottom {
    display: none;
  }
  .navigation__mobile {
    display: block;
  }
  .header__wrapper-mobile {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0px 34px;
    width: 100%;
    height: 53px;
    background-color: #000;
    border-bottom: 1px solid #757575;
  }
  .header__burger-btn {
    display: block;
    cursor: pointer;
  }
}

</style>
