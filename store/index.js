export const state = () => ({
  page: {},
  basic: {},
  tag: ''
})

export const mutations = {
  setPage(state, page) {
    state.page = page
  },
  setBasic(state, basic) {
    state.basic = basic
  },
  setTag(state, tag) {
    state.tag = tag
  },
  resetTag(state) {
    state.tag = ''
  }
}

export const actions = {
  async fetchPage({commit}, slug) {   
    const page = await this.$axios.$get(slug)
    commit('setPage', page)
  },
  async nuxtServerInit({commit}) {
    const basic = await this.$axios.$get('page/basics')
    commit('setBasic', basic)
  },
  setTag({commit}, tag) {
    commit('setTag', tag)
  },
  resetTag({commit}) {
    commit('resetTag')
  }
}

export const getters = {
  footer: state => state.basic.footer,
  menu: state => state.basic.menu,
  topArticles: state => state.basic.articles,

  tag: state => state.tag,

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
}
