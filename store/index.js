  import { pages } from '@/api'

export const state = () => ({
  // drawer: false,
  pagesData: [],
  currentPage: '',
  homePage: {},

})

export const mutations = {
  // SET_STATE_DRAWER (state, val) {
  //   state.drawer = val
  // },
  setPage(state, homePage) {
    state.homePage = homePage
  },
  setFooter(state, footer) {
    state.footer = footer
  },
  SET_PAGES_DATA (state, pagesData) {
    state.pagesData = pagesData
  },
  SET_CURRENT_PAGE (state, currentPage) {
    state.currentPage = currentPage
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('FETCH_PAGES_DATA')
  },
  async fetchPage({commit}) {   
    const homePage = await this.$axios.$get('https://api.rusonyx.staj.fun/api/home')
    commit('setPage', homePage)
  },

  FETCH_PAGES_DATA ({ commit }) {
    try {  
      const pagesData = pages
      commit('SET_PAGES_DATA', pagesData)
    } catch (e) {
      console.error(e)
    }
  },
}

export const getters = {
    advantage: state => state.homePage.blocks.main_articles,
    confidents: state => state.homePage.blocks.trust,
    decision: state => state.homePage.blocks.solutions,
    details: state => state.homePage.blocks.cabinet,
    magazine: state => state.homePage.journal,
    header: state => state.homePage.header,
    footer: state => state.homePage.footer,

    currentPage: ({ currentPage }) => currentPage,
    pageData: state => cur => {
    return state.pagesData.find(page => page.page === cur)
  }
}
