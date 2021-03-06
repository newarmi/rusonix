export const state = () => ({
  page: {},
  basic: {},
  tag: '',
  openMenu: true,
  searchQuery: '',
  searchResult: {},
  activeRubric: 'all',
  domain: null,
  filterType: '',
  filterValue: ''
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
  resetRubric(state) {
    state.activeRubric = 'all'
  },
  setDomain(state, domain) {
    state.domain = domain
  },
  setFilter(state, {filterType, filterValue}) {
    state.filterType = filterType
    state.filterValue = filterValue
  },
  resetDomain(state) {
    state.domain = null
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
      searchResult = await this.$axios.$post('searchInfo', {search: state.searchQuery})
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
  },
  resetRubric({commit}) {
    commit('resetRubric')
  },
  setFilter({commit}, {filterType, filterValue}) {
    commit('setFilter', {filterType, filterValue})
  },
  resetDomain({commit}) {
    commit('resetDomain')
  }
}

export const getters = {
  footer: state => state.basic.footer,
  menu: state => state.basic.menu,
  topArticles: state => state.basic.articles,
  getOpenMenu: state => state.openMenu,
  search: state => state.searchQuery,
  searchResult: state => state.searchResult,

  domainTarriff: state => state.page.domains,
  domainAnswer: state => state.domain,

  tag: state => state.tag,

  blocks: state => state.page.blocks,
  tariffs: state => state.page.tariffs,
  billingTariffs: state => state.page.billingTariffs,

  articles: state => state.page.articles,
  journal: state => state.page.journal,
  rubrics: state => state.page.rubrics,
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

  filterType: state => state.filterType,
  filterValue: state => state.filterValue,
}
