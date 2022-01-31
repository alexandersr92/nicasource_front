import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    hero: {},
    podcasts: [],
  },
  actions: {
    async GET_HERO({ commit }, pk) {
      const res = await fetch(
        `http://nicasource.local/wp-json/wp/v2/pages/${pk}?_fields=acf&acf_format=standard`
      );
      const { acf } = await res.json();

      commit("SET_HERO", acf);
    },

    async GET_PODCASTS({ commit }) {
      const res = await fetch(`http://nicasource.local/wp-json/wp/v2/podcast`);
      const podcasts = await res.json();

      commit("SET_PODCASTS", podcasts);

    },
  },
  mutations: {
    SET_HERO(state, hero) {
      state.hero = hero;
    },

    SET_PODCASTS(state, podcasts) {
      state.podcasts = podcasts;
    },
  },
  getters: {
    hero: (state) => state.hero,
    podcasts: (state) => state.podcasts,
  },
});
