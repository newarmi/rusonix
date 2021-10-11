

export const state = () => ({
  homePage: {},
})

export const mutations = {
  setPage(state, homePage) {
    state.homePage = homePage
  },
  setFooter(state, footer) {
    state.footer = footer
  },
}

export const actions = {
  async fetchPage({commit}) {   
    const homePage = await this.$axios.$get('home')
    commit('setPage', homePage)
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

}
