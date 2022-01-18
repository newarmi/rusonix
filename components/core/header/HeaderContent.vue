<template>
<div>
  <div class="header-content__wrapper" :class="`header-content__${$route.name}`">
    <div class="container">
      <h1 v-if="header.title&&!isArticle" class="start__title start__title-cscard" v-html="header.title"></h1>
      <Search v-if="header.search"/>
      <h1 v-if="isJournal" class="start__title start__title-cscard" v-html="topArticles.top_journal.name"></h1>
      <ul v-if="header.tags" class="start__list">
            <li v-for="tag in tags" :key="tag.key" class="start__item">
              <div class="start__link" @click="scrollToBlock(tag.attributes.tag)">{{tag.attributes.name}}</div>
            </li>
          </ul>
      <div v-if="header.description" class="start__title-descr" :class="`header-content__${$route.name}`" v-html="header.description"></div>
      <div v-if="isButtonPage">
        <button v-for="button in headerButtons" :key="button.key" 
                class="start__cscard-btn" @click="buttonAction(button)">{{ button.attributes.title }}</button>
      </div>
    </div>
    
  </div>
  <div v-if="isDecor" class="header__decor" :class="{ 'header__decor__color' : isKnowledgeCategory}"></div>
</div>
</template>

<script>
import Search from '@/components/core/header/Search'

export default {
  name: 'HeaderContent',
  components: {
    Search
  },
  computed: {
    isKnowledgeCategory () {
        return this.$route.name==='knowledge-category'||this.$route.name==='knowledge-search'
    },
    isArticle() {
        return this.$route.name==='journal-article'
    },
    isPost() {
      return this.$route.name==='knowledge-category-post'
    },
    isDocument() {
        return this.$route.name==='company-document'
    },
    isJournal() {
        return this.$route.name==='journal'
    },
    isButtonPage() {
      return  !this.isArticle
    },
    header() {           
      if(this.$route.name==='service-slug') {
        return this.$store.getters['universal/header']
      }

      if(this.$route.name==='company-document') {
        return this.$store.getters['requisites/header']
      }

      if(this.isArticle) {
        const articleHeader = this.$store.getters['journal/header']
        return articleHeader
      }

      return this.$store.getters.header
    },
    headerButtons() {
      return this.header.header_button
    },
    tags() {
      return this.header.tags
    },
    topArticles() {
      return this.$store.getters.topArticles
      },
    isDecor() {
      return !this.isArticle&&!this.isDocument&&!this.isPost;
    }
  },
  methods: {
    buttonAction(button) {
      if(button.layout==='tab') {
        this.scrollToBlock(button.attributes.tab)
      } 
      
      if(button.layout==='journal') {
        this.$router.push({path: '/journal/' + button.attributes.page})  
      } 

      if(button.layout==='main') {
        this.$router.push({path: '/' + button.attributes.page, hash: button.attributes.tab})  
      }

      if(button.layout==='service') {
        this.$router.push({path: '/service/' + button.attributes.page, hash: button.attributes.tab})  
      }

      if(button.layout==='document') {
        this.$router.push({path: '/company/' + button.attributes.page})  
      }

      if(button.layout==='link') {
        window.open(button.attributes.link, '_blank');
      } 
    },
    scrollToBlock(tag) {
      const block = document.querySelector('#' + tag)
        if(block)
          block.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

</script>

<style scoped>
.header__decor {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.header__decor__color {
  background-color: #FCF7F2;
}

.header-content__wrapper {
  padding-top: 250px;
  padding-bottom: 72px;
}

@media (max-width: 992px) {
  .header-content__wrapper{
    padding-top: 100px;
    padding-bottom: 24px;
  }
}

/* .header-content__wrapper.header-content__company,
.header-content__wrapper.header-content__services {
  padding-top: 296px;
  padding-bottom: 200px;
} */

@media (max-width: 992px) {
  /* .header-content__wrapper.header-content__company,
  .header-content__wrapper.header-content__services {
    padding-top: 215px;
    padding-bottom: 200px;
  } */
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

.start__title-descr {
  font-family: "Graphik", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #fff;
    opacity: 0.6;
    max-width: 460px;
    margin-bottom: 72px;
}

.start__title-cscard {
    padding-top: 0;
    margin-bottom: 12px;
}

.start__list {
  display: flex;
  margin-bottom: 28px;
}

.start__item {
  margin-right: 40px;
}

.start__link {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;
  cursor: pointer;
}

.start__title-descr.header-content__services {
  max-width: 460px
}

@media (max-width: 768px) {
  .start__title-descr.header-content__services {
    max-width: 340px;
  }
  .start__list {
    margin-bottom: 24px;
  }
}
@media (max-width: 375px) {
  .start__title-descr.header-content__services {
    max-width: none;
  }
}

.start__title >>> .start__title-decor {
  font-family: "Graphik", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 64px;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;
  overflow: hidden;
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
  .start__title >>> .start__title-decor {
    font-family: "Graphik", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: left;
  }
}

.start__cscard-btn {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #fff;
  padding: 15px 33px;
  background-color: #0f7f69;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
}

.start__cscard-btn:hover {
  background: #065848;
}

</style>
