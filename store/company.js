export const state = () => ({
  pagesData: [],
  currentPage: '',
  companyPage: {}
})

export const mutations = {

  setPage(state, page) {
    state.companyPage = page
  },

  SET_PAGES_DATA (state, pagesData) {
    state.pagesData = pagesData
  },
  SET_CURRENT_PAGE (state, currentPage) {
    state.currentPage = currentPage
  }
}

export const actions = {
  async fetchPage({commit}) {   
    const page = await this.$axios.$get('https://api.rusonyx.staj.fun/api/company')
    commit('setPage', page)
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('FETCH_PAGES_DATA')
  },
}

export const getters = {
    advantage: state => state.companyPage.blocks.online,
    career: state => state.companyPage.blocks.career,
    contact: state => state.companyPage.blocks.contacts,
    magazine: state => state.companyPage.journal,
    requisties: state => state.companyPage.blocks.requisites,
    history: state => state.companyPage.blocks.history,
    header: state => state.companyPage.header,
    footer: state => state.companyPage.footer,

    currentPage: ({ currentPage }) => currentPage,
    pageData: state => cur => {
    return state.pagesData.find(page => page.page === cur)
  }
}
