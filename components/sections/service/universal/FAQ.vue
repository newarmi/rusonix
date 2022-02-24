<template>
  <section :id="items.tag" class="support">
    <div class="container">
      <div class="support__title title">{{ items.title }}</div>
      <div class="support__info-wrap">
        <ul class="support__info-list">
          <li v-for="article, index in items.blocks" :key="article.key" class="support__info-item">
            <div class="support__info-title" @click="showHideArticle(index)">
              {{ article.attributes.textTitle }}
            </div>
            <div v-show="show[index].show" class="support__info-text" v-html="article.attributes.text">
            </div>
          </li>
        </ul>
      </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Support',
  props: {
      items: {
        type: Object,
        required: true
      }
  },
  data() {
    return {
      show: []
    }
  },
  created() {
    let show = false
    if(this.items.open) {
      show = true
    }

    this.items.blocks.forEach(() => {
      this.show.push({show})
    });

  },
  methods: {
    showHideArticle(index) {
      this.show[index].show = !this.show[index].show
    }
  }
}
</script>

<style scoped>
.support {
  /*padding-top: 72px;*/
  /*padding-bottom: 24px;*/
}

.support__title {
  margin-bottom: 24px;
}

.support__text {
  max-width: 545px;
}

.support__info-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.support__info-item {
  background: url(@/assets/img/search.png) no-repeat 0px 2px;
}

.support__info-item {
  padding-left: 41px;
  margin-bottom: 10px;
}

.support__info-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  /* margin-bottom: 24px; */
  /* max-width: 450px; */
  cursor: pointer;
}

.support__info-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
  /* max-width: 560px; */
}

.support__info-item--modification {
  display: none;
}

.support__info-list {
  display: block;
  flex-wrap: wrap;
}

.support__info-wrapper .support__info-item {
  margin-bottom: 48px;
}

@media (max-width: 1200px) {
  .support__info-text {
    /* max-width: 470px; */
  }
}

@media (max-width: 992px) {
  .support__info-item--mod {
    display: none;
  }
  .support__info-wrap {
    justify-content: center;
  }
  .support__info-title {
    /* max-width: 360px; */
  }
  .support__info-text {
    /* max-width: 370px; */
  }
  .support__info-item--modification {
    display: block;
  }
}

@media (max-width: 768px) {
  .support {
    padding-top: 48px;
  }
  .support__info-title {
    /* max-width: 300px; */
  }
  .support__info-text {
    /* max-width: 319px; */
  }
}

@media (max-width: 576px) {
  .support__info-wrapper .support__info-item {
    margin-bottom: 24px;
  }
}
</style>
