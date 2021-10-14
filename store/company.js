export const state = () => ({
  companyPage: {}
})

export const mutations = {
  setPage(state, page) {
    state.companyPage = page
  },
}

export const actions = {
  async fetchPage({commit}) {   
    const page = await this.$axios.$get('company')
    commit('setPage', page)
  },
}

export const getters = {
    advantage: state => state.companyPage.blocks.online,
    career: state => state.companyPage.blocks.career,
    contact: state => state.companyPage.blocks.contacts,
    magazine: state => state.companyPage.journal,
    requisities: state => state.companyPage.blocks.requisites,
    history: state => state.companyPage.blocks.history,
    
    header: state => state.companyPage.header,
    footer: state => state.companyPage.footer,
}
