export const state = () => ({
    page: {}
  })
  
  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
  }
  
  export const actions = {
    async fetchPage({commit}, slug) {   
      const page = await this.$axios.$get('services/' + slug)
      commit('setPage', page)
    },
  }
  
  export const getters = {
    buttons: state => state.page.buttons,
    header: state => state.page.header,
    footer: state => state.page.footer,   
    
    blocks: state => state.page.blocks,
    tabs: state => state.page.blocks.tabs.attributes,
    benefits: state => state.page.blocks.benefits.attributes,
    questions: state => state.page.blocks.questions.attributes,
    technologies: state => state.page.blocks.technologies.attributes,
    reviews: state => state.page.clients,
    billing: state => state.page.cabinet,

    tariffs: state => state.page.tariffs,
    billingTariffs: state => state.page.billingTariffs,
  }