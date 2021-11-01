export const state = () => ({
    page: {}
  })
  
  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
  }
  
  export const actions = {
    async fetchPage({commit}, article) {   
      const page = await this.$axios.$get('journal' + article)
      commit('setPage', page)
    },
  }
  
  export const getters = {  
      buttons: state => state.page.buttons,
      rubrics: state => state.page.rubrics,
      articles: state => state.page.articles,
      header: state => state.page.header,
      footer: state => state.page.footer,
  }
  