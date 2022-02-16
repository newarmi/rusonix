export const state = () => ({
    page: {}
  })

  export const mutations = {
    setPage(state, page) {
      state.page = page
    },
  }

  export const actions = {
    async fetchPage({commit}, article) {
      const page = await this.$axios.$get('blog' + article)
      commit('setPage', page)
    },
  }

  export const getters = {
      article: state => state.page.article,
      bottom: state => state.page.bottom,

      buttons: state => state.page.buttons,
      header: state => state.page.header,
      footer: state => state.page.footer,
      topArticles: state => state.page.topArticles,
  }
