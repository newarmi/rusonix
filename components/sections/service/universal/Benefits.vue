<template>
    <section class="bitrix__advantage">
        <div class="container">
          <div class="bitrix__advantage-title title">{{ benefits.blockTitle }}</div>
          <div class="bitrix__advantage-text text" v-html="benefits.blockDescription">
            
          </div>
          <div class="bitrix__advantage-img-info--mod">
            <picture class="picture">
              <source
                media="(max-width: 768px)"
                :src="benefits.image"
                :srcset="benefits.image"
              />
              <img
                :src="benefits.image"
                :srcset="benefits.image"
                alt="bitrix img"
                class="bitrix__img"
              />
            </picture>
          </div>

          <div class="bitrix__advantage-wrapper">
            <div v-for="article in articlesWithLink" :key="article.textTitle" class="bitrix__advantage-card">
              <div class="bitrix__advantage-card-title">{{ article.textTitle }}</div>
              <div class="bitrix__advantage-card-text" v-html="article.text">
              </div>
              <a href="#" class="bitrix__advantage-card-link"
                >{{ article.linkName }}</a>
            </div>
          </div>

          <div class="bitrix__advantage-wrapper-info">
            <div class="bitrix__advantage-wrap-info">
              <div v-for="article in simpleArticles" :key="article.textTitle" class="bitrix__advantage-card-info">
                <div class="bitrix__advantage-card-info-title">{{ article.textTitle }}</div>
                <div class="bitrix__advantage-card-info-text" v-html="article.text">
                </div>
              </div>
            </div>
            <div class="bitrix__advantage-img-info">
              <picture class="picture">
                <img
                  :src="benefits.image"
                  :srcset="benefits.image"
                  alt="bitrix img"
                  class="bitrix__img"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
</template>

<script>

export default {
    computed: {
      benefits() {
        const benefits = this.$store.getters['universal/topBlock']
        benefits.image = this.$config.imgURL + '' + benefits.blockImage
        return benefits
      },
      articlesWithLink() {
        const articles = []
        this.benefits.blocks.forEach(element => {
          if(element.layout==='textWithLink') {
            articles.push(element.attributes)
          }
        });
        return articles
      },
      simpleArticles() {
        const simpleArticles = []
        this.benefits.blocks.forEach(element => {
          if(element.layout==='simpleText') {
            simpleArticles.push(element.attributes)
          }
        });
        return simpleArticles
      }
    }
}
</script>

<style scoped>
.bitrix__advantage {
  margin-top: 52px;
  margin-bottom: 72px;
}

.bitrix__advantage-title {
  margin-bottom: 24px;
}

.bitrix__advantage-text {
  opacity: 0.6;
  margin-bottom: 96px;
}

.bitrix__advantage-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 96px;
}

.bitrix__advantage-card-title {
  font-family: "Graphik", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
  margin-bottom: 25px;
}

.bitrix__advantage-card-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  max-width: 578px;
  opacity: 0.6;
  margin-bottom: 24px;
}

.bitrix__advantage-card-link {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
}

.bitrix__advantage-wrapper-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bitrix__advantage-card-info-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-bottom: 24px;
}

.bitrix__advantage-card-info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.6;
  max-width: 600px;
}

.bitrix__advantage-card-info {
  margin-bottom: 72px;
}

.bitrix__advantage-img-info--mod {
  display: none;
}

@media (max-width: 768px) {
  .bitrix__advantage {
    margin-top: 28px;
    margin-bottom: 48px;
  }
  .bitrix__advantage-title {
    margin-bottom: 48px;
  }
  .bitrix__advantage-text {
    margin-bottom: 48px;
  }
  .bitrix__advantage-img-info--mod {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
  }
  .bitrix__advantage-card-text {
    max-width: 350px;
  }
  .bitrix__advantage-img-info {
    display: none;
  }
  .bitrix__advantage-wrapper {
    margin-bottom: 48px;
  }
  .test__title {
    font-family: "Graphik", sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0px;
    text-align: left;
  }
  .bitrix__advantage-wrap-info {
    display: flex;
  }
  .bitrix__advantage-card-info {
    margin-right: 34px;
  }
  .bitrix__advantage-card-info-title {
    max-width: 320px;
  }
  .bitrix__advantage-card-info-text {
    max-width: 350px;
  }
  .bitrix__advantage-card-info {
    margin-bottom: 0;
  }
}

@media (max-width: 576px) {
  .bitrix__advantage-text {
    margin-bottom: 64px;
  }
  .bitrix__advantage-img-info--mod {
    margin-bottom: 64px;
  }
  .bitrix__advantage-wrapper {
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
  .bitrix__advantage-card {
    margin-bottom: 48px;
  }
  .bitrix__advantage-card:last-child {
    margin-bottom: 0;
  }
  .bitrix__advantage-wrap-info {
    flex-wrap: wrap;
  }
  .bitrix__advantage-card-info {
    margin-bottom: 48px;
    margin-right: 0;
  }
  .bitrix__advantage-card-info:last-child {
    margin-bottom: 0;
  }
  .bitrix__advantage-card-info-title {
    max-width: 600px;
  }
  .bitrix__advantage-card-info-text {
    max-width: 600px;
  }
}
</style>