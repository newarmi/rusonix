<template>
  <section class="file">
    <div class="file__wrapper">
      <div class="file__wrap">
        <div v-for="item in content" :key="item.key">
          <div v-if="item.layout==='text'" class="file__text text" v-html="item.attributes.text"></div>
          <a v-if="item.layout==='button'" :href="$config.imgURL + item.attributes.file" class="file__pdf">{{item.attributes.title}}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Requisites',
  async asyncData({store, params}) {
      await store.dispatch('requisites/fetchPage', '/' + params.document)
  },
  computed: {
      content() {
        return JSON.parse(this.$store.getters['requisites/content'])
      }  
  },
}
</script>

<style scoped>
.file {
    background-color: #f2f2f2;
    padding-top: 48px;
    padding-bottom: 72px;
}

.file__wrapper {
    width: 1098px;
    background-color: #fff;
    border-radius: 20px;
    padding: 72px 87px;
    margin: 0 auto;
}

.file__text {
    max-width: 890px;
    color: #000;
    opacity: 0.6;
}

.file__text-privacy {
    max-width: 765px;
}

.file__wrap {
    margin-bottom: 48px;
}

.file__pdf {
    display: inline-block;
    margin-top: 15px;
    width: 200px;
    font-family: "Graphik", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: center;
    color: #fff;
    background-color: #0f7f69;
    border-radius: 6px;
    padding: 15px 20px;
    cursor: pointer;
}

.file__pdf:hover {
    background: #065848;
}

@media (max-width: 992px) {
    .header__decor {
        display: block;
    }
    .file {
        padding-top: 0;
        padding-bottom: 0;
    }
    .file__wrapper {
        width: 100%;
        border-radius: 0;
    }
    .file__wrapper {
        padding: 28px 24px 96px;
    }
}
</style>
