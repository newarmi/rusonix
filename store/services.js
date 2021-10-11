export const state = () => ({
    servicePage: {}
  })
  
  export const mutations = {
  
    setPage(state, page) {
      state.servicePage = page
    },
  
  }
  
  export const actions = {
    async fetchPage({commit}) {   
      const page = await this.$axios.$get('services')
      commit('setPage', page)
    },
  }
  
  export const getters = {
      header: state => state.servicePage.header,
      footer: state => state.servicePage.footer,
  }
  