export const state = () => ({
    cscartPage: {}
  })
  
  export const mutations = {
    setPage(state, page) {
      state.cscartPage = page
    },
  }
  
  export const actions = {
    async fetchPage({commit}) {   
      const page = await this.$axios.$get('services/cscart')
      commit('setPage', page)
    },
  }
  
  export const getters = {
      header: state => state.cscartPage.header,
      footer: state => state.cscartPage.footer,
  }
  