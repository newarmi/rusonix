export const state = () => ({
  page: {},
  basic: {},
  tag: '',
  openMenu: true,
  searchQuery: '',
  searchResult: {},
  activeRubric: 'all',
  domain: null
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
  },
  setOpenMenuFalse(state) {
    state.openMenu = false
  },
  setOpenMenuTrue(state) {
    state.openMenu = true
  },
  setSearchQuery(state, search) {
    state.searchQuery = search
  },
  setSearchResult(state, searchResult) {
    state.searchResult = searchResult
  },
  setRubric(state, rubric) {
    state.activeRubric = rubric
  },
  setDomain(state, domain) {
    state.domain = domain
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
  async search({commit, state}) {
    let searchResult = [];
    if(state.searchQuery.length!==0) {
      searchResult = await this.$axios.$post('page/search', {search: state.searchQuery})
    }
    commit('setSearchResult', searchResult)
  },
  async checkBillingDomain({commit}, domain) {
    const domains = await this.$axios.$post('domain/check', {domain})
    commit('setDomain', domains)
    return ''
  },
  setTag({commit}, tag) {
    commit('setTag', tag)
  },
  resetTag({commit}) {
    commit('resetTag')
  },
  setOpenMenuFalse({commit}) {
    commit('setOpenMenuFalse')
  },
  setOpenMenuTrue({commit}) {
    commit('setOpenMenuTrue')
  },
  setSearchQuery({commit}, search) {
    commit('setSearchQuery', search)
  },
  setRubric({commit}, rubric) {
    commit('setRubric', rubric)
  }
}

export const getters = {
  footer: state => state.basic.footer,
  menu: state => state.basic.menu,
  topArticles: state => state.basic.articles,
  getOpenMenu: state => state.openMenu,
  search: state => state.searchQuery,
  searchResult: state => state.searchResult,
  domainAnswer: state => state.domain,

  tag: state => state.tag,

  pageBlocks: state => state.page.blocks,
  articles: state => state.page.articles,
  journal: state => state.page.journal,
  rubrics: state => state.page.rubrics,
  domainTarriff: state => state.page.domains,
  activeRubric: state => state.activeRubric,

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

  quickSearch: state => state.page.quickSearch,
}
