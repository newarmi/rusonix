export const state = () => ({
    page: {}
  })
  
  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
  }
  
  export const actions = {
    async fetchPage({commit}, slug) {   
      const page = await this.$axios.$get('services/bitrix_license')
      console.log(this.$route)
      console.log(slug)
      commit('setPage', page)
    },
  }
  
  export const getters = {

      // topBlock: state => state.page.top_block[0].attributes,
      // tariffs: state => state.page.tariffs,
      topBlock: state => state.page.top_block[0].attributes,
      reviews: state => state.page.clients,
      details: state => state.page.cabinet,

      buttons: state => state.page.buttons,
      header: state => state.page.header,
      footer: state => state.page.footer,
  }