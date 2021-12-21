<template>
  <div class="top-line__wrapper">
    <div class="header__wrapper-top">
      <div class="header__wrapper">
        <div class="header__top-info">
          <nuxt-link :to="'/journal/' + topArticles.top_header.content" class="header__top-info">
            {{ topArticles.top_header.name }}
          </nuxt-link>
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
              <input id="search" class="contacts__search-input" :class="isActive" :placeholder="searchPlace" />
              <svg class="search__icon" :class="isActive" width="17" height="17"
                viewbox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"  @click="openSearch" >
                <path d="M4.66263 13.0119L4.3106 12.7034L3.97958 13.0343L0.720178 16.2929L0.707136 16.2799L3.9663 13.0213L4.29742 12.6902L3.98877 12.3381C1.53122 9.53454 1.63978 5.26526 4.31431 2.59073C7.10195 -0.196911 11.6216 -0.196911 14.4093 2.59073C17.1969 5.37838 17.1969 9.89805 14.4093 12.6857C11.735 15.36 7.46619 15.4688 4.66263 13.0119Z"
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
        <nuxt-link to="/" class="logo">
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
            <li v-for="item, i in menu" :key="item.id + item.title" class="navigation__item">
              <nuxt-link :to="'/' + item.link" class="navigation__link">{{ item.title }}</nuxt-link>
              <ul class="navigation__dropdown">
                <div class="navigation__container-dropdown">
                  <li v-for="subMenu in item.menu_items" :key="subMenu.id + subMenu.title" class="navigation__dropdown-item">
                    <a class="dropdown__link" @click="scrollTo('#' + subMenu.tab, subMenu.type + subMenu.link, i)">{{ subMenu.title }}</a>
                    <ul class="dropdown__submenu-navigation">
                      <li v-for="link in subMenu.menu_sections" :key="link.title + link.link" class="dropdown__submenu-item">
                        <a class="dropdown__submenu-link" @click="scrollTo('#' + link.tab, link.type + link.link, i)">{{link.title}}</a>
                      </li>
                    </ul>
                  </li>
                </div>
              </ul>
            </li>                
            <button class="navigation__btn" type="button">
              Протестировать
            </button>
          </ul>
        </nav>
      </div>
    </div>
    <!-- start mobile header-->
    <div class="header__wrapper-mobile">
      <button class="header__burger-btn" @click="isMenuOpen = !isMenuOpen">
        <span class="header__burger-btn-decor"></span>
      </button>
      <nuxt-link to="/" class="logo">
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
    <nav class="navigation__mobile" :class="{ open: isMenuOpen }">
      <ul class="navigation__list-mobile">
        <li v-for="item, i in menu" :key="item.id + item.title + 'mob'" class="navigation__item-mobile">
          <a class="navigation__link-mobile dropdown-submenu" @click="openSubmenu(i, item.link)">{{ item.title }}</a>
          <ul class="dropdown-submenu__list-mobile" :class="{'show_submenu' : isOpenSubmenu[i].open}">
            <li v-for="subMenu in item.menu_items" :key="subMenu.id + subMenu.title + 'mob'" class="dropdown-submenu__item-mobile">
              <a class="dropdown-submenu__link" @click="scrollTo('#' + subMenu.tab, subMenu.type + subMenu.link, i)">{{ subMenu.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="contacts__mobile search">
        <li class="contacts__search-mobile">
          <a href="#" class="contacts__search-link" @click="openSearch">{{ searchWord }}</a>

          <input id="search" class="contacts__search-input" :class="isActive" :placeholder="searchPlace" />
          <svg class="search__icon" :class="isActive" width="17" height="17" viewbox="0 0 17 17"
            fill="none" xmlns="http://www.w3.org/2000/svg" @click="openSearch" >
            <path d="M4.66263 13.0119L4.3106 12.7034L3.97958 13.0343L0.720178 16.2929L0.707136 16.2799L3.9663 13.0213L4.29742 12.6902L3.98877 12.3381C1.53122 9.53454 1.63978 5.26526 4.31431 2.59073C7.10195 -0.196911 11.6216 -0.196911 14.4093 2.59073C17.1969 5.37838 17.1969 9.89805 14.4093 12.6857C11.735 15.36 7.46619 15.4688 4.66263 13.0119Z"
              stroke="white" />
          </svg>
        </li>
      </ul>
    </nav>
    <!-- end mobile header-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'TopLine',
  components: {},
  data() {
    return {
      search: false,
      isMenuOpen: false,
      isOpenSubmenu: [],
      navigationDropdown: 'navigation__dropdown',
    }
  },

  computed: {
    ...mapGetters(['footer', 'menu', 'topArticles']),
    isActive() {
      if (this.search) return 'active'
      return ''
    },
    searchPlace() {
      if (this.search) return 'Поиск'
      return ''
    },
    searchWord() {
      if (this.search) return ''
      return 'Поиск'
    },
    display() {
      return this.isOpenSubmenu ? { display: 'block' } : { display: 'none' }
    },
  },
  created() {
      this.menu.forEach(() => {
        this.isOpenSubmenu.push({open: false})
      });
  },
  methods: {
    ...mapActions(['setTag']),
    openSubmenu(index, link) {
      if (this.isOpenSubmenu[index].open) {
        this.scrollTo('', link)
      } else {
        this.isOpenSubmenu.forEach(element => {
          element.open=false
        });
        this.isOpenSubmenu[index].open = true
      }
    },
    openSearch() {
      this.search = !this.search
    },
    scrollTo(id, route, index) {
       if(route[0]!=='/') {
         route = '/' + route
       }

       if(this.$route.fullPath===route) {
          if(id) {
            const block = document.querySelector(id)
              if(block) {  
                block.scrollIntoView()
                this.isMenuOpen = false
                this.isOpenSubmenu[index].open = false
              }
            }
       } else {
        // this.setTag(id)
        this.$router.push({path: route, hash: id})
       }
    },
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
  font-family: 'Graphik', sans-serif;
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
  font-family: 'Graphik', sans-serif;
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
  font-family: 'Graphik', sans-serif;
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
  font-family: 'Graphik', sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
}
.dropdown__submenu-navigation {
  margin-top: 48px;
}

.dropdown__submenu-item {
  margin-bottom: 24px;
}
.dropdown__submenu-link {
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
  color: #fff;
}

.navigation__btn:hover {
  background: #9c0e20;
}

.start__title {
  font-family: 'Graphik', sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
}

.start__title-decor {
  font-family: 'Graphik', sans-serif;
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
    font-family: 'Graphik', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  .start__title-decor {
    font-family: 'Graphik', sans-serif;
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
    font-family: 'Graphik', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
  .start__title-decor {
    font-family: 'Graphik', sans-serif;
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
  content: '';
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
  content: '';
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
  font-family: 'Graphik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  cursor: pointer;
}
.dropdown-submenu__list-mobile {
  padding: 36px 32px 0px;
  display: none;
}
.dropdown-submenu__item-mobile {
  margin-bottom: 24px;
}
.dropdown-submenu__link {
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  opacity: 0.6;
  cursor: pointer;
}
.contacts__mobile {
  padding-left: 16px;
}
.contacts__search-link {
  font-family: 'Graphik', sans-serif;
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

.show_submenu {
  display: block;
}
</style>
