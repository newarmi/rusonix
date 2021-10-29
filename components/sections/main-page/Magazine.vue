<template>
  <section class="magazine">
        <div class="container">
          <h1 class="magazine__title title">{{ title }}</h1>

          <div v-for="(item, i) in articlesArray" :key="'item' + i" class="magazine__wrapper">
            <div v-for="(article, j) in item" :key="article.title" :class="leftRight(i, j)">              
              <picture class="picture">
                <source
                  media="(max-width: 1250px)"
                  :src="article.imgMobileLink"
                  :srcset="article.imgMobileLink"
                />
                <img
                  :src="article.imgDesktopLink"
                  :srcset="article.imgDesktopLink"
                  :class="smallBigImg(i, j)"
                  alt="magazine"
                />
              </picture>
              <div class="magazine__left-about">
                <div class="magazine__wrap-text">
                  <a href="#" class="magazine__link">{{ article.rubricName }}</a>
                  <p class="magazine__text">{{ article.date }}</p>
                </div>
                <p class="magazine__text-title">{{ article.title }}</p>
              </div>           
            </div>
          </div>
        </div>
      </section> 
</template>

<script>
export default {
  name: 'Magazine',
  computed: {
    title() {
        return this.$store.getters.magazineTitle
    },
    articles() {
        const articles = this.$store.getters.magazineArticles
        articles.forEach(element => {
        element.imgDesktopLink = this.$config.imgURL + '' + element.img_desktop
        element.imgMobileLink = this.$config.imgURL + '' + element.img_mobile
        element.rubricName = element.rubric.title
        element.date = this.timeConverter(element.created_at)
        })
      return articles
    },
    articlesArray() {
      const articlesArray = []
      articlesArray.push(this.articles.slice(0,2))
      articlesArray.push(this.articles.slice(2,4))
      articlesArray.push(this.articles.slice(4,6))
      return articlesArray
    },

  }, 
  methods: {
    timeConverter(unixTimestamp){
        const a = new Date(unixTimestamp);
        const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const time = date + ' ' + month + ' ' + year;
        return time;
    },
    leftRight(i, j) {
      if(i!==1) {
      return j===0 ? 'magazine__left':'magazine__right';
    } else {
      return j===0 ? 'magazine__right':'magazine__left';
      }
    },

    smallBigImg(i, j) {
      if(i!==1) {
      return j===0 ? 'magazine__img-big':'magazine__img-small';
    } else {
      return j===0 ? 'magazine__img-small':'magazine__img-big';
      }
    }
  }
}


</script>

<style scoped>

.start__title-magazine {
  margin-bottom: 48px;
}

.magazine__title {
  padding-top: 72px;
  margin-bottom: 72px;
}

.magazine__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;
  gap: 33px;
}
.magazine__left-about {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 21px;
      max-width: 431px;
}
 
 .magazine__img-big{
   width: 100%;
   width: 808px;
   height: 390px;
   border-radius: 6px;
   /* object-fit: cover; */
  
 }
 .magazine__img-small{
  width: 100%;
  max-width: 431px;
  height: 390px;
  border-radius: 6px; 
  /* object-fit: cover; */
 }
.magazine__wrap-text {
  display: flex;
}

.magazine__link {
  color: #636aac;
  opacity: 0.6;
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  margin-right: 52px;
}

.magazine__text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #bababa;
  position: relative;
}

.magazine__text-title--mod {
  max-width: 400px;
}

.magazine__text::before {
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  left: -24%;
}

.magazine__text-title {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

@media (max-width: 1250px) {
  .magazine__text-title {
    max-width: 340px;
  }
  .magazine__right {
    max-width: none;
  }
  .magazine__img-big{
    width: 100%;
    max-width: 808px;
    
  }
  .magazine__img {
    object-fit: cover;
    max-width: 343px;
    height: 390px;
  }
}

@media (max-width: 768px) {
  .magazine__title {
    padding-top: 48px;
    margin-bottom: 48px;
  }
  .magazine__wrapper {
    margin-bottom: 48px;
  }
}

@media (max-width: 576px) {
  .magazine__wrapper {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 24px;
  }
}
</style>
