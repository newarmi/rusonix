export const state = () => ({
    page: {}
  })
  
  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
  }
  
  export const actions = {
    async fetchPage({commit}) {   
      const page = await this.$axios.$get('support')
      commit('setPage', page)
    },
  }
  
  export const getters = {  
      buttons: state => state.page.buttons,
      header: state => state.page.header,
      footer: state => state.page.footer,
  }
  