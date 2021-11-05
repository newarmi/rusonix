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
      console.log(this.$route)
      console.log(slug)
      commit('setPage', page)
    },
  }
  
  export const getters = {
   
      tariffs: state => state.page.tariffs,
      top: state => state.page.top_block,
      topBlock: state => state.page.top_block[0].attributes,
      technologies: state => state.page.technologies,
      technologiesData: state => state.page.technologies[0].attributes,
      questions: state => state.page.questions,
      questionsData: state => state.page.questions[0].attributes,
      tabs: state => state.page.tabs,
      tabsData: state => state.page.tabs[0].attributes,
      reviews: state => state.page.clients,
      details: state => state.page.cabinet,

      buttons: state => state.page.buttons,
      header: state => state.page.header,
      footer: state => state.page.footer,
  }