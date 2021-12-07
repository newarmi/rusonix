<template>
  <div class='top-line__wrapper'>
    <div class="header__wrapper-top">
      <div class="header__wrapper">
        <div class="header__top-info">
          <nuxt-link :to="'/journal/' + topArticles.top_header.content" class="header__top-info">{{ topArticles.top_header.name }}</nuxt-link>
        </div>
        <ul class="contacts">
          <li class="contacts__phone">
            <a :href="'tel:' + footer.phone">{{ footer.phone }}</a>
          </li>
          <li class="search_word">
            <p @click="openSearch">{{ searchWord }}</p>
          </li>
          <li class="contacts__search">
                      
            <label for="search" class="search">              
                <input id="search" class="contacts__search-input" :class="isActive" :placeholder="searchPlace">
                <svg class="search__icon" :class="isActive" width="17" height="17" viewbox="0 0 17 17" fill="none"
                  xmlns="http://www.w3.org/2000/svg" @click="openSearch">
                  <path
                    d="M4.66263 13.0119L4.3106 12.7034L3.97958 13.0343L0.720178 16.2929L0.707136 16.2799L3.9663 13.0213L4.29742 12.6902L3.98877 12.3381C1.53122 9.53454 1.63978 5.26526 4.31431 2.59073C7.10195 -0.196911 11.6216 -0.196911 14.4093 2.59073C17.1969 5.37838 17.1969 9.89805 14.4093 12.6857C11.735 15.36 7.46619 15.4688 4.66263 13.0119Z"
                    stroke="white" />
                </svg>
              </label>
          </li>
          <li>
            <nuxt-link to="/support">База знаний</nuxt-link>
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

            <li class="navigation__item" @mouseover="openMenu">
              <nuxt-link to="/company" class="navigation__link">{{ buttons.company }}</nuxt-link>
               <ul class="navigation__dropdown">
                  <div class="navigation__container-dropdown">
                    <li class="navigation__dropdown-item">
                      <a class="dropdown__link">Ваш бизнес всегда онлайн</a>
                      <ul class="dropdown__submenu-navigation">
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Наша миссия</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Наши ценности</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Наша стратегия</a>
                        </li>
                      </ul>
                    </li>
                    <ul>
                      <li>
                        <a class="dropdown__link" href="#">История</a>
                      </li>
                      <li class="dropdown__submenu-navigation">
                        <a class="dropdown__link" href="#">Контакты</a>
                      </li>
                      <li class="dropdown__submenu-navigation">
                        <a class="dropdown__link" href="#">Карьера</a>
                      </li>
                    </ul>
                    <ul>
                    <li>
                      <a class="dropdown__link " href="#">События и новости</a>
                      <ul class="dropdown__submenu-navigation">
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Обзоры</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Технологии</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Безопасность</a
                          >
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Новости</a>
                        </li>
                      </ul>
                    </li>
                    </ul>
                    <li class="navigation__dropdown-item">
                      <a class="dropdown__link" href="#">Реквизиты и юридическая информация</a>
                      <ul class="dropdown__submenu-navigation">
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Для юридических лиц</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Для физических лиц</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Лицензия</a>
                        </li>
                        <li class="dropdown__submenu-item">
                          <a href="" class="dropdown__submenu-link">Свидетельство о регистрации</a>
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
                        <nuxt-link class="dropdown__link" to="/service/vps-servers">Облачные VPS серверы</nuxt-link>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Готовые тарифы</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Своя конфигурация</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">NVMe + Intel Xeon Gold</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link class="dropdown__link" to="/service/virtual-data-center">Виртуальный дата центр</nuxt-link>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Обзор</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Serverless</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link class="dropdown__link" to="/service/cloud-web-hosting">Облачный веб хостинг</nuxt-link>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Тарифы</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Тестовый хостинг</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a class="dropdown__link" href="/services">SSL, лицензии и домены</a>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">SSL сертификаты</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Лицензии</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Купить домен</a>
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
                      <a class="dropdown__link" href="#">Обзоры</a>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Что такое SSL сертификат</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Зачем нужно использовать Docker</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">GraphQL – новый взгляд на API</a>
                          </li>
                        </ul>
                    </li>
                    <li>
                      <a class="dropdown__link " href="#">Технологии</a>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Как настроить VPN сервер</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Восстановление сайта на Битриксе</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Топ 10 ошибок в VPS серверах</a>
                          </li>
                        </ul>
                    </li>
                    <li>
                      <a class="dropdown__link " href="#">Безопасность</a>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">10 популярных headless cms</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Использование GitFlow</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Server Side Rendering</a>
                          </li>
                        </ul>
                    </li>
                    <li>
                      <a class="dropdown__link " href="#">Новости</a>
                        <ul class="dropdown__submenu-navigation">
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Настройка автоматических бэкапов</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Установка Windows Server на VPS</a>
                          </li>
                          <li class="dropdown__submenu-item">
                            <a href="" class="dropdown__submenu-link">Роуты в Redux Store</a>
                          </li>
                        </ul>
                    </li>
                  </div>
                </ul>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/support" class="navigation__link">{{ buttons.support }}</nuxt-link>
              <ul class="navigation__dropdown">
                  <div class="navigation__container-dropdown">
                    <li class="navigation__dropdown-item">
                      <a class="dropdown__link" href="#">База знаний</a>
                    </li>
                    <li class="navigation__dropdown-item">
                      <a class="dropdown__link" href="#">Онлайн консультация</a>
                    </li>
                    <li class="navigation__dropdown-item">
                      <a class="dropdown__link" href="#">Служба поддержки</a>
                    </li>
                    <li class="navigation__dropdown-item">
                      <a class="dropdown__link" href="#">Популярные советы</a>
                    </li>
                  </div>
              </ul>
            </li>
            <li class="navigation__item">
              <nuxt-link to="/partners" class="navigation__link">{{ buttons.partners }}</nuxt-link>
                <ul class="navigation__dropdown">
                    <div class="navigation__container-dropdown">
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#">Преимущества</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#">Для кого подходит программа</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#">Условия</a>
                      </li>
                      <li class="navigation__dropdown-item">
                        <a class="dropdown__link" href="#">Анкета для регистрации</a>
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
          <nuxt-link to="/login">
            <svg class="auth__icon" width="15" height="18">
              <use xlink:href="@/assets/img/sprites.svg#auth"></use>
            </svg>
          </nuxt-link>
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
                  <nuxt-link to="/service/vps-servers" class="dropdown-submenu__link">Облачные VPS серверы</nuxt-link>
                </li>
                <li class="dropdown-submenu__item-mobile">
                  <nuxt-link to="/service/virtual-data-center" class="dropdown-submenu__link">Виртуальный дата центр</nuxt-link>
                </li>
                <li class="dropdown-submenu__item-mobile">
                  <nuxt-link to="/service/cloud-web-hosting" class="dropdown-submenu__link">Облачный веб хостинг</nuxt-link>
                </li>
                <li class="dropdown-submenu__item-mobile">
                  <nuxt-link to="/services" class="dropdown-submenu__link">SSL, лицензии и домены</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/journal" class="navigation__link-mobile">{{ buttons.journal }}</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/support" class="navigation__link-mobile">{{ buttons.support }}</nuxt-link>
            </li>
            <li class="navigation__item-mobile">
              <nuxt-link to="/partners" class="navigation__link-mobile" href="#"
                >{{ buttons.partners }}</nuxt-link>
            </li>
          </ul>
          <ul class="contacts__mobile search">
            
            <li class="contacts__search-mobile">
              <a href="#" class="contacts__search-link" @click="openSearch">{{ searchWord }}</a>

              <input id="search" class="contacts__search-input" :class="isActive" :placeholder="searchPlace">
                <svg class="search__icon" :class="isActive" width="17" height="17" viewbox="0 0 17 17" fill="none"
                  xmlns="http://www.w3.org/2000/svg" @click="openSearch">
                  <path
                    d="M4.66263 13.0119L4.3106 12.7034L3.97958 13.0343L0.720178 16.2929L0.707136 16.2799L3.9663 13.0213L4.29742 12.6902L3.98877 12.3381C1.53122 9.53454 1.63978 5.26526 4.31431 2.59073C7.10195 -0.196911 11.6216 -0.196911 14.4093 2.59073C17.1969 5.37838 17.1969 9.89805 14.4093 12.6857C11.735 15.36 7.46619 15.4688 4.66263 13.0119Z"
                    stroke="white" />
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
  components: {
    
  },
  data() {
    return {
      search: false,
      isMenuOpen: false,
      isOpenSubmenu: false,
      navigationDropdown: 'navigation__dropdown'
    }
  },

  computed: {
      isActive () {
          if(this.search) return 'active'
          return ''
      },
      searchPlace () {
          if(this.search) return 'Поиск'
          return ''
      },
      searchWord() {
          if(this.search) return ''
          return 'Поиск'
      }, 
      display() {
        return this.isOpenSubmenu ? {display: 'block'} : {display: 'none'};
      },
      buttons() {
        if(this.$route.name==='page'||this.$route.name==='journal'||this.$route.name==='company') {
          return this.$store.getters.buttons
        } 

        if(this.$route.name==='service-slug') {
          return this.$store.getters['universal/buttons']
        }

        if(this.$route.name==='journal-article') {
          return this.$store.getters['journal/buttons']
        }

        if(this.$route.name==='company-document') {
          return this.$store.getters['requisites/buttons']
        }

        return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/buttons']
        
      },
      footer() {
        if(this.$route.name==='page'||this.$route.name==='journal'||this.$route.name==='company') {
          return this.$store.getters.footer
        }
        
        if(this.$route.name==='service-slug') {
          return this.$store.getters['universal/footer']
        }

        if(this.$route.name==='journal-article') {
          return this.$store.getters['journal/footer']
        }

        if(this.$route.name==='company-document') {
          return this.$store.getters['requisites/footer']
        }

        return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/footer']      
      },

      topArticles() {
        if(this.$route.name==='page'||this.$route.name==='journal'||this.$route.name==='company') {
          return this.$store.getters.topArticles
        }
        
        if(this.$route.name==='service-slug') {
          return this.$store.getters['universal/topArticles']
        }

        if(this.$route.name==='journal-article') {
          return this.$store.getters['journal/topArticles']
        }

        if(this.$route.name==='company-document') {
          return this.$store.getters['requisites/topArticles']
        }

        return this.$store.getters[this.$route.fullPath.replace(/^\//, '') + '/topArticles']      
      }
  },
  methods: {
    openSubmenu() {
      if(this.isOpenSubmenu) {
        this.$router.push({path: '/services', query: {q: this.q}});
      } else {
        this.isOpenSubmenu =  true;
      }      
    },
    openSearch() {
      this.search = !this.search
    },
    openMenu() {
      
    }
  },
  
}
</script>

<style scoped>


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
.top-line__wrapper {
  position: absolute;
  width: 100%;
  z-index: 8;
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
  height: 30px;
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
.search {
  position: relative;
  text-align: right;
}

.search input {
  height: 17px;
  background: transparent;
  width: 17px;
  border-radius: 50px;
  transition: all 0.5s ease;
  outline: none;
  border: none;
}


.contacts__search-input.active {
  width: 200px;
  height: 30px;
  transition: all 0.5s ease;
  border: 1px solid #dfe1eb;
  padding: 0 15px;
  color: #ffffff;
}

.contacts__search-input::placeholder {
  color: #fff;
}

.search__input::placeholder .active {
  opacity: 1;
  color: #ffffff;
}

.search__icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  fill: transparent;
  cursor: pointer;
}
.search__icon.active {
  transition: 0.5s;
  right: 8px;
}

.contacts li:nth-child(2) {
  margin-right: 0px;
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

.navigation__link {
  color: #ffffff;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
}

.navigation__item:last-child {
  padding: 0;
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
.navigation__container-dropdown {
  display: flex;
  justify-content: space-between;

  width: calc(100vw - 17px);
  height: 15vh;
  max-width: 1440px;
  padding: 0 26px;
  margin: 10% auto;
}
.navigation__dropdown {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(12, 12, 12, 0.901088);
  backdrop-filter: blur(38.0559px);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}

.dropdown__link {
  color: #fff;
  font-family: "Graphik", sans-serif;
  font-size: 21px;
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

.navigation__btn:hover {
  background: #9c0e20;
}

.start__title {
  font-family: "Graphik", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
}

.start__title-decor {
  font-family: "Graphik", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 64px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
}

.header__decor {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

@media (max-width: 992px) {

  .start__title {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  .start__title-decor {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
}

@media (max-width: 576px) {
  .start__title {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  .start__title-decor {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
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
  text-align: left;
}
.search__icon-mobile {
  position: absolute;
  left: 53px;
  fill: transparent;
}

@media (max-width: 1250px) {

.search__icon {
  left: 50px;
}
.search__icon.active {
  transition: 0.5s;
  left: 170px;
}

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

.search_word {
  padding-right: 0;
  margin-right: 0;
  color: white;
}

</style>
