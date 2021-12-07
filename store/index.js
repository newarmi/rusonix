export const state = () => ({
  page: {},
})

export const mutations = {
  setPage(state, page) {
    state.page = page
  },
}

export const actions = {
  async fetchPage({commit}, slug) {   
    const page = await this.$axios.$get(slug)
    commit('setPage', page)
  },
}

export const getters = {
  pageBlocks: state => state.page.blocks,
  articles: state => state.page.articles,
  journal: state => state.page.journal,
  rubrics: state => state.page.rubrics,
  domainTarriff: state => state.page.domains,

  billing: state => state.page.general.billing,
  trust: state => state.page.general.trust,
  reviews: state => state.page.general.reviews,
  history: state => state.page.general.history,
  career: state => state.page.general.career,
  contacts: state => state.page.general.contacts,
  requisites: state => state.page.general.requisites,
  domains: state => state.page.general.domains,
  partner: state => state.page.general.partner,
  form: state => state.page.general.form,
    
  buttons: state => state.page.buttons,
  header: state => state.page.header,
  footer: state => state.page.footer,
  topArticles: state => state.page.topArticles,
}
