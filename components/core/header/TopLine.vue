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
            <nuxt-link to="/login">Личный кабинет
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
              <nuxt-link to="/company" class="navigation__link">{{ buttons.company }}</nuxt-link>
               <ul class="navigation__dropdown">
                    <div class="navigation__container-dropdown">
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link"
                          >Ваш бизнес всегда онлайн</a>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Наша миссия</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Наши ценности</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Наша стратегия</a
                            >
                          </li>
                        </ul>
                      </li>
                      <ul>
                      <li>
                        <a class="dropdown__link" href="#"
                          >История</a>
                      </li>
                      <li class="dropdown__submenu-navigation">
                        <a class="dropdown__link" href="#"
                          >Контакты</a>
                      </li>
                      <li class="dropdown__submenu-navigation">
                        <a class="dropdown__link" href="#"
                          >Карьера</a>
                      </li>
                      </ul>
                      <ul>
                      <li>
                        <a class="dropdown__link " href="#"
                          >События и новости</a
                        >
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Обзоры</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Технологии</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Безопасность</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Новости</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >E-commerce</a
                            >
                          </li>
                        </ul>
                      </li>
                      </ul>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Реквизиты и юридическая информация</a
                        >
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Для юридических лиц</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Для физических лиц</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Лицензия</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Свидетельство о регистрации</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Результаты СОУТ</a
                            >
                          </li>
                        </ul>
                      </li> 
                    </div>
                  </ul>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/services" class="navigation__link">{{ buttons.services }}</nuxt-link>
                  <ul class="navigation__dropdown">
                    <div class="navigation__container-dropdown">
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Облачные VPS серверы</a
                        >
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Готовые тарифы</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Своя конфигурация</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >NVMe + Intel Xeon Gold</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown__link" href="#"
                          >Виртуальный дата центр</a
                        >
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Обзор</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Serverless</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown__link" href="#"
                          >Облачный веб хостинг</a
                        >
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Тарифы</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Тестовый хостинг</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown__link" href="#"
                          >SSL, лицензии и домены</a
                        >
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >SSL сертификаты</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Лицензии</a
                            >
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link"
                              >Купить домен</a
                            >
                          </li>
                        </ul>
                      </li>
                    </div>
                  </ul>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/journal" class="navigation__link">{{ buttons.journal }}</nuxt-link>
                 <ul class="navigation__dropdown">
                    <div class="navigation__container-dropdown">
                    <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Все статьи</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Обзоры</a>
                      </li>
                      <li>
                        <a class="dropdown__link " href="#"
                          >Технологии</a>
                      </li>
                      <li>
                        <a class="dropdown__link " href="#"
                          >Безопасность</a>
                      </li>
                      <li>
                        <a class="dropdown__link " href="#"
                          >Новости</a>
                      </li>
                      <li>
                        <a class="dropdown__link " href="#"
                          >E-commerce</a>
                      </li>
                    </div>
                  </ul>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/support" class="navigation__link">{{ buttons.support }}</nuxt-link>
              <ul class="navigation__dropdown">
                    <div class="navigation__container-dropdown">
                    <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >База знаний</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Онлайн консультация</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Поиск по ресурсам службы поддержки</a>
                      </li>
                    </div>
              </ul>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/partners" class="navigation__link">{{ buttons.partners }}</nuxt-link>
                <ul class="navigation__dropdown">
                    <div class="navigation__container-dropdown">
                    <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Преимущества</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Для кого подходит программа</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Условия</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Почему нас рекомендуют</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#"
                          >Анкета для регистрации</a>
                      </li>
                    </div>
                </ul>
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
               <nuxt-link to="/company" class="navigation__link-mobile">{{ buttons.company }}</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <a style="cursor: pointer" class="navigation__link-mobile dropdown-submenu" @click="openSubmenu()"
                >{{ buttons.services }}</a>
              <ul class="dropdown-submenu__list-mobile" :style="display">
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
              <nuxt-link to="/magazine" class="navigation__link-mobile">{{ buttons.journal }}</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/support" class="navigation__link-mobile">{{ buttons.support }}</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/partners" class="navigation__link-mobile" href="#"
                >{{ buttons.partners }}</nuxt-link>
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
      isOpenSubmenu: false,
    }
  },
  computed: {
      display() {
        return this.isOpenSubmenu ? {display: 'block'} : {display: 'none'};
      },
      buttons() {
        if(this.$route.name==='index') {
        return this.$store.getters.buttons
      } 

      if(this.$route.name==='service-slug') {
        return this.$store.getters['service/universal/buttons']
      }

      if(this.$route.name==='journal-article') {
        return this.$store.getters['journal/buttons']
      }

      return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/buttons']
      
      }
  },
  methods: {
    openSubmenu() {
      if(this.isOpenSubmenu) {
        this.$router.push({path: '/services', query: {q: this.q}});
      } else {
        this.isOpenSubmenu =  true;
      }      
    }
  },
}
</script>

<style scoped>



.top-line__wrapper {
  position: absolute;
  width: 100%;
  z-index: 5;
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

.navigation__item--active {
  padding-top: 25px;
  padding-bottom: 21px;
  border-bottom: 4px solid #ffffff;
}
.navigation__item:hover {
  padding-top: 25px;
  padding-bottom: 21px;
  border-bottom: 4px solid #ffffff;
}
.navigation__item:hover > .navigation__dropdown {
  transition: 0.3s ease-in-out;
  opacity: 0.9;
  visibility: visible;
}

.navigation__container-dropdown {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: calc(100vw - 17px);
  height: 60vh;

  padding: 0 26px;

  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
}

.navigation__dropdown {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(12, 12, 12, 0.901088);
  backdrop-filter: blur(38.0559px);
  opacity: 0;
  visibility: hidden;

}

.dropdown__link {
  color: #fff;
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}
.dropdown__submenu-navigation {
  margin-top: 48px;
}

.dropdown__submenu-item {
  margin-bottom: 24px;
}
.dropdown__submenu-link {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
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
