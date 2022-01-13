<template>
  <div class="start__screen">
    <div class="container">
      <div class="start__screen-search">
        <input v-model="searchString" class="start__screen-input" type="text" placeholder="Поиск по ресурсам службы поддержки" @keyup.enter="search"/>
        <label for="" class="start__screen-input-icon">
          <img src="@/assets/img/search__support.png" alt="search" @click="search" />
        </label>
      </div>
      <div class="start__screen-search-descr">
        <div v-for="item in quickSearch" :key="item" class="start__screen-descr-text" @click="quick(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'Slider',
  data() {
    return {
      searchString: ''
    }
  },
  computed: {
    ...mapGetters(['quickSearch'])
  },  
  methods: {
   ...mapActions('knowledge', ['setSearch']),
   quick(item) {
     this.searchString = item
     this.search()
   },
   search() {
     if(this.searchString!=='') {
      this.setSearch(this.searchString)
      this.$router.push({path: '/knowledge/search'})
     }
   }
  },
}
</script>

<style scoped>
.start__screen {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.start__screen-search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  max-width: 558px;
  margin: 0 auto 33px;
}
.start__screen-input {
  width: 100%;
  max-width: 558px;
  height: 50px;

  font-family: "Graphik", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #fff;

  background: transparent;
  border: 1px solid #dfe1eb;
  padding: 15px 24px;
  border-radius: 25px;
  outline: none;
}
.start__screen-input-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-40%);
  cursor: pointer;
}
.start__screen-input::-webkit-input-placeholder {
  color: #fff;
}
.start__screen-search-descr {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 48px;
  width: 100%;
  max-width: 710px;
  margin: 0 auto;
}
.start__screen-descr-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.contacts li:nth-child(2) {
  display: none;
}
@media (max-width: 768px) {
  .start__screen {
    margin-top: 50px;
    margin-bottom: 61px;
  }
  .start__title-cscard {
    margin-bottom: 24px;
  }
  .start__list {
    margin-bottom: 24px;
  }
  .start__title-descr {
    margin-bottom: 24px;
  }
}

@media (max-width: 390px) {
  .start__screen-input {
    font-size: 12px;
  }
}
</style>