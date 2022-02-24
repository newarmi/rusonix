<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__wrapper-left">
        <picture class="picture">
          <nuxt-link to='/' class='logo'>
            <img
              src="@/assets/img/logo.png"
              srcset="@/assets/img/logo@2x.png 2x"
              class="footer__logo"
              alt="logo"
            />
          </nuxt-link>
        </picture>
        <div class="footer__icon">
          <a class="footer__icon-link" :href="footer.instagram">
            <svg class="inst__icon" width="20" height="20">
              <use xlink:href="@/assets/svg/sprites.svg#instagram"></use>
            </svg>
          </a>
          <a class="footer__icon-link" :href="footer.facebook">
            <svg class="facebook__icon" width="20" height="20">
              <use xlink:href="@/assets/svg/sprites.svg#facebook"></use>
            </svg>
          </a>
          <a class="footer__icon-link" :href="footer.youtube">
            <svg class="youtube__icon" width="20" height="14">
              <use xlink:href="@/assets/svg/sprites.svg#youtube"></use>
            </svg>
          </a>
          <a class="footer__icon-link" :href="footer.youtube">
            <svg class="youtube__icon" width="20" height="14">
              <use xlink:href="@/assets/svg/telegram.svg"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer__wrapper-right">
        <nav class="navigation navigation__footer">
          <ul class="navigation__list">
            <li v-for="item in menu" :key="item.title + item.id + 'footer'" class="navigation__item navigation__item-footer">
              <a class="navigation__link" @click="buttonAction(item, item.type[0])">{{ item.type[0].attributes.title }}</a>
            </li>
          </ul>
        </nav>
        <p class="footer__text">
          {{footer.copyright}} <br />
          {{footer.license}} <br />
          {{footer.text}}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppFooter',
  computed: {
    ...mapGetters(['footer', 'menu'])
  },
  methods: {
    scrollToBlock(tag) {
      const block = document.querySelector('#' + tag)
      if(block)
        block.scrollIntoView({behavior: 'smooth'})
    },
    buttonAction(parent, button) {
      switch(button.layout) {
        case('tab'): {
          if(this.$route.fullPath==='/' + parent.attributes.page) {
            this.scrollToBlock(button.attributes.tab)
            this.isMenuOpen = !this.isMenuOpen
          } else {
            this.isMenuOpen = !this.isMenuOpen
            this.$router.push({path: '/' + parent.attributes.page, hash: button.attributes.tab})
          }
            break;
          }
        case('rubric'): {
          this.setRubric(button.attributes.page)
          this.$router.push({path: '/blog'})
          break
        }
        case('main'): this.$router.push({path: '/' + button.attributes.page, hash: button.attributes.tab}); break;
        case('document'): this.$router.push({path: '/about/' + button.attributes.page}); break;
        case('service'): this.$router.push({path: '/service/' + button.attributes.page, hash: button.attributes.tab}); break;
        case('journal'): this.$router.push({path: '/blog/' + button.attributes.page}); break;
        case('category'): this.$router.push({path: '/knowledge/' + button.attributes.page}); break;
        case('post'): this.$router.push({path: '/knowledge/post/' + button.attributes.page}); break;
        case('link'):  window.open(button.attributes.link, '_blank'); break;
      }
    },
  }
}
</script>

<style scoped>
.navigation__link {
  cursor: pointer;
}
.footer {
  background-color: #242424;
}
.footer__wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 37px 26px 36px 26px;
  margin: 0 auto;
}
.footer__wrapper-left {
  display: flex;
  flex-direction: column;
}
.footer__wrapper-right {
  display: flex;
  flex-direction: column;
  flex-basis: 69%;
}
.footer__logo {
  margin-bottom: 48px;
}
.navigation__footer {
  margin-bottom: 48px;
}
.navigation__item-footer:first-child {
  padding-left: 0;
}
.footer__icon {
  display: flex;
  align-items: center;
  opacity: 0.4;
}
.footer__icon-link {
  padding-right: 21px;
}
.footer__icon-link:last-child {
  padding-right: 0px;
}
.footer__text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  opacity: 0.4;
  max-width: 800px;
}
@media (max-width: 1250px) {
  .footer__wrapper {
    flex-direction: column;
  }
  .footer__wrapper-left {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .navigation__footer .navigation__item {
    padding: 0px 0px 24px 0px;
  }

  .navigation__footer .navigation__item:last-child {
    padding-bottom: 0;
  }
  .navigation__footer .navigation__list {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__text {
    max-width: 400px;
    opacity: 1;
  }
}

</style>
