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
      const page = await this.$axios.$get('services')
      commit('setPage', page)
    },
  }
  
  export const getters = {
      domainsInfo: state => state.page.blocks.domains,
      domainsList: state => state.page.domains,
      solutionsTitle: state => state.page.blocks.itForBusiness,
      solutionsSections: state => state.page.blocks.solutions,
      licenses: state => state.page.blocks.licenses,
      certificates: state => state.page.blocks.certificates,
      
      buttons: state => state.page.buttons,
      header: state => state.page.header,
      footer: state => state.page.footer,
  }
  