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
  pageBlocks: state => state.page.blocks,
  articles: state => state.page.articles,
  journal: state => state.page.journal,
  domainTarriff: state => state.page.domains,

  billing: state => state.page.general.cabinet,
  trust: state => state.page.general.trust,
  reviews: state => state.page.general.clients,
  history: state => state.page.general.history,
  career: state => state.page.general.career,
  contacts: state => state.page.general.contacts,
  requisites: state => state.page.general.requisites,
  domains: state => state.page.general.domains,
    
  buttons: state => state.page.buttons,
  header: state => state.page.header,
  footer: state => state.page.footer,
}
