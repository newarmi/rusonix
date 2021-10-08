export const state = () => ({
    pagesData: [],
    currentPage: '',
    servicePage: {}
  })
  
  export const mutations = {
  
    setPage(state, page) {
      state.servicePage = page
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
      const page = await this.$axios.$get('https://api.rusonyx.staj.fun/api/services')
      commit('setPage', page)
    },
    async nuxtServerInit ({ dispatch, commit }) {
      await dispatch('FETCH_PAGES_DATA')
    },
  }
  
  export const getters = {
      header: state => state.servicePage.header,
      footer: state => state.servicePage.footer,
  
      currentPage: ({ currentPage }) => currentPage,
      pageData: state => cur => {
      return state.pagesData.find(page => page.page === cur)
    }
  }
  