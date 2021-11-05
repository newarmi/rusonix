export const state = () => ({
    page: {}
  })
  
  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
  }
  
  export const actions = {
    async fetchPage({commit}, hey) {   
      const page = await this.$axios.$get('services/bitrix')
      console.log(hey)
      commit('setPage', page)
    },
  }
  
  export const getters = {

      topBlock: state => state.page.top_block[0].attributes,
      tariffs: state => state.page.tariffs,

      buttons: state => state.page.buttons,
      header: state => state.page.header,
      footer: state => state.page.footer,
  }