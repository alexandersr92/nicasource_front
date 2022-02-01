import Vuex from "vuex";
const DOMAIN = "http://api.nicasource-podcast.online/";
export default new Vuex.Store({
  state: {
    hero: {},
    podcasts: [],
    blogs: [],
    menu: [],
    setting: [],
  },
  actions: {
    async GET_HERO({ commit }, pk) {
      const res = await fetch(
        `${DOMAIN}wp-json/wp/v2/pages/${pk}?_fields=acf&acf_format=standard`
      );
      const { acf } = await res.json();

      commit("SET_HERO", acf);
    },

    async GET_PODCASTS({ commit }) {
      const res = await fetch(
        `${DOMAIN}wp-json/wp/v2/podcast?acf_format=standard&_embed=`
      );
      const podcasts = await res.json();

      commit("SET_PODCASTS", podcasts);
    },

    async GET_BLOGS({ commit }) {
      const res = await fetch(`${DOMAIN}wp-json/wp/v2/posts?_embed=`);
      const blogs = await res.json();

      commit("SET_BLOGS", blogs);
    },
    async GET_MENU({ commit }) {
      const res = await fetch(`${DOMAIN}wp-json/wp/v2/menu`);
      const menu = await res.json();

      commit("SET_MENU", menu);
    },
    async GET_SETTING({ commit }) {
      const res = await fetch(`${DOMAIN}wp-json/wp/v2/nicasource`);
      const setting = await res.json();

      commit("SET_SETTING", setting);
    },
  },
  mutations: {
    SET_HERO(state, hero) {
      state.hero = hero;
    },

    SET_PODCASTS(state, podcasts) {
      state.podcasts = podcasts;
    },

    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    },
    SET_MENU(state, menu) {
      state.menu = menu;
    },
    SET_SETTING(state, setting) {
      state.setting = setting;
    },
  },
  getters: {
    hero: (state) => state.hero,
    podcasts: (state) => state.podcasts,
    blogs: (state) => state.blogs,
    menu: (state) => state.menu,
    setting: (state) => state.setting,
  },
});
