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
    const page = await this.$axios.$get('company')
    commit('setPage', page)
  },
}

export const getters = {
    advantage: state => state.page.blocks.online,
    career: state => state.page.blocks.career,
    contact: state => state.page.blocks.contacts,
    magazine: state => state.page.journal,
    requisities: state => state.page.blocks.requisites,
    history: state => state.page.blocks.history,
    
    buttons: state => state.page.buttons,
    header: state => state.page.header,
    footer: state => state.page.footer,
}
