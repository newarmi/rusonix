<template>
  <div>
    <div class="header-content__wrapper">
      <div class="container">
        <div class="start__title-wrapper">
          <h1 v-if="header.title&&!isArticle" class="start__title" v-html="header.title"></h1>
        </div>
        <Search v-if="header.search"/>
        <ul v-if="!isArticle&&isTags" class="start__list">
          <li v-for="tag in tags" :key="tag.key" class="start__item">
            <div class="start__link" @click="scrollToBlock(tag.attributes.tag)">{{ tag.attributes.name }}</div>
          </li>
        </ul>
        <div v-if="header.description" class="start__title-descr" v-html="header.description"></div>
        <div v-if="!isArticle">
          <button v-for="button in headerButtons" :key="button.key"
                  class="start__btn" @click="buttonAction(button)">{{ button.attributes.title }}
          </button>
        </div>
      </div>
    </div>
    <div v-if="isDecor" class="header__decor"
         :class="{ 'header__decor__color' : isKnowledgeCategory}"
         :style="decorColorClass"></div>
  </div>
</template>

<script>
import 'animate.css'
import { gsap } from 'gsap'
 import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

export default {
  name: 'HeaderContent',
  components: {
    Search: () => import('@/components/core/header/Search')
  },
  computed: {
    isTags() {
      if(this.header.tags) {
        if(this.header.tags.length===0) {
          return false
        } else {
          return this.header.tags.length
        }
      }
      return false
    },
    decorColorClass() {
      return this.isKnowledgeCategory ? {} : { 'background-color': this.header.color }
    },
    isKnowledgeCategory () {
        return this.$route.name==='knowledge-category'||this.$route.name==='knowledge-search'
    },
    isArticle() {
        return this.$route.name==='blog-article'
    },
    isPost() {
      return this.$route.name==='knowledge-category-post'
    },
    isDocument() {
        return this.$route.name==='about-document'
    },
    header() {
      switch(this.$route.name) {
        case('service-slug'): case('license-slug'): case('hosting-slug'):
        case('support-slug'): case('support-slug-doc'): case('about-slug'):
          return this.$store.getters['universal/header']
        case('blog-article'): return this.$store.getters['journal/header']
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
    },
  },
  mounted() {
    this.titlesAnimating();
  },
  methods: {
    titlesAnimating() {
      const allRevealParagraph = document.querySelectorAll('.start__title');

      const appearOptionsP = {
        threshold: 0.5,
        rootMargin: '-200px 0px'
      };

      const observerOne = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (!entry.isIntersecting) {
            el.tlp.pause();
          } else if (entry.isIntersecting) {
            el.tlp.play(0);
            observerOne.unobserve(el);
          }
        })
      }, appearOptionsP)

      allRevealParagraph.forEach((el) => {

        const outerSplitP = new SplitText(el, { type: 'words' })
        const innerSplitP = new SplitText(outerSplitP.words, {type: 'words'});

        el.tlp = gsap.timeline({
          paused: true,
        })
          .set(outerSplitP.words, {
            overflow: 'hidden'
          })
          .from(innerSplitP.words, {
            duration: 0.8,
            yPercent: 100,
            ease: 'expo',
            stagger: 0.1
          });

         observerOne.observe(el);
      });
    },
    buttonAction(button) {
      switch(button.layout) {
        case('tab'): this.scrollToBlock(button.attributes.tab); break;
        case('main'): this.$router.push({path: '/' + button.attributes.page, hash: button.attributes.tab}); break;
        case('service'): this.$router.push({path: '/service/' + button.attributes.page, hash: button.attributes.tab}); break;
        case('journal'): this.$router.push({path: '/blog/' + button.attributes.page}); break;
        case('category'): this.$router.push({path: '/knowledge/' + button.attributes.page}); break;
        case('post'): this.$router.push({path: '/knowledge/post/' + button.attributes.page}); break;
        case('link'):  window.open(button.attributes.link, '_blank'); break;
      }
    },
    scrollToBlock(tag) {
      const block = document.querySelector('#' + tag)
      if(block)
        block.scrollIntoView({behavior: 'smooth'})
    }
  }
}

</script>

<style scoped>

.start__title-wrapper{
  overflow: hidden;
}

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

.header-content__wrapper {
  padding-top: 250px;
  padding-bottom: 35px;
}

@media (max-width: 992px) {
  .header-content__wrapper{
    padding-top: 100px;
    padding-bottom: 24px;
  }
}

.start__title {
  font-family: "Graphik", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;
  padding-top: 0;
  margin-bottom: 12px;
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
  margin-bottom: 72px;
}

.start__list {
  display: flex;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .start__list {
    margin-bottom: 24px;
  }
  .start__link {
    margin-top: 15px;
  }
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
}

.start__btn {
  min-width: 195px;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  color: #fff;
  padding: 15px 33px;
  background-color: #0f7f69;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px 10px;
}

.start__btn:hover {
  background: #065848;
}

.header__decor__color {
  background-color: #FCF7F2;
}
</style>
