export const state = () => ({
    servicePage: {}
  })
  
  export const mutations = {
  
    setPage(state, page) {
      state.servicePage = page
    },
  
  }
  
  export const actions = {
    async fetchPage({commit}) {   
      const page = await this.$axios.$get('services')
      commit('setPage', page)
    },
  }
  
  export const getters = {
      domainsInfo: state => state.servicePage.blocks.domains,
      domainsList: state => state.servicePage.domains,
      solutionsTitle: state => state.servicePage.blocks.itForBusiness,
      solutionsSections: state => state.servicePage.blocks.solutions,
      licenses: state => state.servicePage.blocks.licenses,
      certificates: state => state.servicePage.blocks.certificates,
      
      header: state => state.servicePage.header,
      footer: state => state.servicePage.footer,
  }
  