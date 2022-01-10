export const state = () => ({
    knowledge: {},
    subcategory: {},
    category: null,
    content: {},
    searchQuery: '',
    searchResult: []
})
  
export const mutations = {
    setPage(state, page) {
      state.knowledge = page
    },
    setSubcategory(state, page) {
        state.subcategory = page
    },
    setCategory(state, slug) {
        state.category = slug
    },
    setContent(state, content) {
        state.content = content
    },
    setSearch(state, search) {
        state.searchQuery = search
    },
    setSearchResult(state, searchResult) {
        state.searchResult = searchResult
    },

}
  
export const actions = {
    async getData({commit}) {   
      const page = await this.$axios.$get('support')
      commit('setPage', page)
    },
    async getSubcategory({commit}, slug) {   
        const page = await this.$axios.$get('support/' + slug)
        commit('setSubcategory', page)
        commit('setCategory', slug)
    },
    async getContent({commit}, slug) {   
        const content = await this.$axios.$get('support/post/' + slug)
        commit('setContent', content)
    },
    async setSearch({commit}, search) {
        commit('setSearch', search)
        const searchResult = await this.$axios.$post('support/search/', {search})
        commit('setSearchResult', searchResult)
    }

}
  
export const getters = {
    posts: state => state.knowledge.posts,
    categories: state => state.knowledge.categories,
    subcategory: state => state.subcategory,

    category: state => state.category,
    content: state => state.content,
    searchQuery: state => state.searchQuery,
    searchResult: state => state.searchResult,

    topPosts: state => state.knowledge.top,
    lastPosts: state => state.knowledge.last,

    
}