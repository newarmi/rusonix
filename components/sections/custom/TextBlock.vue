<template>
  <div>
    <section class="contact">
        <div class="container">
          <h3 class="contact__title title">{{items.title}}</h3>

            <div v-for="block in blocks" :key="block.key">

                <div v-if="block.layout==='simpleText'" class="support__text text" v-html="block.attributes.text">
                </div>

                <ul v-if="block.layout==='list'" class="contact__list">
                    <li v-for="item in block.attributes.list" :key="item.key" class="contact__item" v-html="item.attributes.text"></li>
                </ul>

                <div v-if="block.layout==='posts'" class="contact__list contact__list--mod">
                    <ul class="contact__list-content">
                      <div v-for="post, i in block.attributes.post" :key="post.key">
                        <li v-if="(i%2)===0" class="contact__item contact__item-content"><span class="contact__item-img">
                          <img src="@/assets/img/contact-icon.png" alt="contact icon"></span>
                          <nuxt-link :to="'/knowledge/post/' + post.attributes.slug" class="contact__item-link">{{post.attributes.title}}</nuxt-link>
                        </li>
                      </div> 
                    </ul>
                    <ul class="contact__list-content">
                      <div v-for="post, j in block.attributes.post" :key="post.key">
                        <li v-if="(j%2)!==0" class="contact__item contact__item-content">
                          <span class="contact__item-img"><img src="@/assets/img/contact-icon.png" alt="contact icon"></span>
                          <nuxt-link :to="'/knowledge/post/' + post.attributes.slug" class="contact__item-link">{{post.attributes.title}}</nuxt-link>
                        </li>
                      </div>
                    </ul>
                </div>

            </div>
        </div>
    </section>
    
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    blocks() {
      return this.items.block
    },

  },
  
}
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 0 84px;
}

@media (max-width: 767.98px) {
  .container {
    padding: 0 24px;
  }
}

@media (max-width: 575.98px) {
  .container {
    padding: 0 16px;
  }
}

.title {
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 28px;
}

.support {
  padding-top: 28px;
  padding-bottom: 75px;
}

@media (max-width: 768px) {
  .support {
    padding-bottom: 48px;
  }

  .title {
    margin-top: 7px;
  }
}

.support__title {
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .support__title {
    margin-bottom: 24px;
  }
}

.support__text {
  opacity: 0.6;
  width: 100%;
  max-width: 1070px;
}

.contact {
  padding-bottom: 75px;
}

@media (max-width: 768px) {
  .contact {
    padding-bottom: 48px;
  }
}

.contact__title {
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .contact__title {
    margin-bottom: 24px;
  }
}

.contact__list {
  background-color: #FCF7F2;
  border-radius: 5px;
  padding: 34px 38px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 576px) {
  .contact__list {
    padding: 24px 20px;
  }
}

.contact__list--mod {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-bottom: 0;
}

@media (max-width: 1100px) {
  .contact__list-content {
    margin-bottom: 18px;
  }
  .contact__list-content:last-child {
    margin-bottom: 0;
  }
}

.contact__item {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  list-style-type: disc;
  opacity: 0.7;
  margin-bottom: 18px;
}

.contact__item:last-child {
  margin-bottom: 0;
}

.contact__item-tel {
  color: #BD162C;
}

.contact__item-content {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
}

.contact__item-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.contact__item-img > img{
  max-width: none;
}

.contact__item-link {
  margin-left: 14px;
  color: #000000;
}

.contact__wrap {
  margin-bottom: 18px;
}

.contact__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
  opacity: 0.6;
  width: 100%;
  max-width: 1040px;
}

.contact__text:last-child {
  margin-bottom: 0;
}




</style>