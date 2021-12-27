import $axios from './axios.instance';

export default {
    namespaced: true,
    state: {
        loading: false,
        posts: [],
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status;
        },
        loadPosts(state, posts) {
            state.posts = [...posts];
        },
        clearPosts(state) {
            state.posts = [];
        },
    },
    actions: {
        async fetchPosts(context) {
            // init local items storage
            context.commit('setLoading', true);
            $axios.get('posts')
                .then((res) => {
                    if (res && res.data) {
                        context.commit('loadPosts', res.data);
                    }
                    context.commit('setLoading', false);
                })
                .catch((error) => {
                    console.error('hiba: ' + error);
                });
            // make the request
        },
    },
};