

export const state = () => ({
  page: {},
})

export const mutations = {
  setPage(state, homePage) {
    state.page = homePage
  },
}

export const actions = {
  async fetchPage({commit}) {   
    const page = await this.$axios.$get('home')
    commit('setPage', page)
  },
}

export const getters = {
    advantage: state => state.page.blocks.main_articles,

    articles: state => state.page.articles,

    confidents: state => state.page.blocks.trust,
    decision: state => state.page.blocks.solutions,
    details: state => state.page.blocks.cabinet,
    benefits: state => state.page.blocks.business_benefits,
    magazineTitle: state => state.page.blocks.journal.title,
    magazineArticles: state => state.page.journal,

    reviewsTitle: state => state.page.blocks.clients.title,
    reviewsClients: state => state.page.blocks.clients.sections,

    buttons: state => state.page.buttons,
    header: state => state.page.header,
    footer: state => state.page.footer,
}
