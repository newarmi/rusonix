export const state = () => ({
    page: {},
    filterType: '',
    filterValue: ''
  })

  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
    setFilter(state, {filterType, filterValue}) {
      state.filterType = filterType
      state.filterValue = filterValue
    },
  }

  export const actions = {
    async fetchPage({commit}, slug) {
      const page = await this.$axios.$get(slug)
      commit('setPage', page)
    },

    setFilter({commit}, {filterType, filterValue}) {
      commit('setFilter', {filterType, filterValue})
    },
  }

  export const getters = {
    buttons: state => state.page.buttons,
    header: state => state.page.header,
    footer: state => state.page.footer,
    topArticles: state => state.page.topArticles,

    filterType: state => state.filterType,
    filterValue: state => state.filterValue,
    domainTarriff: state => state.page.domains,
    contactsServices: state => state.page.contacts,

    blocks: state => state.page.blocks,

    reviews: state => state.page.reviews,
    billing: state => state.page.billing,

    tariffs: state => state.page.tariffs,

    billingTariffs: state => state.page.billingTariffs,
}
