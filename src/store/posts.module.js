import $axios from './axios.instance';

export default {
    namespaced: true,
    state: {
        loading: false,
        numberOfPosts: 0,
        posts: [],
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getNumberOfPosts(state) {
            return state.numberOfPosts;
        },
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status;
        },
        setNumberOfPosts(state, numberOfPosts) {
            state.numberOfPosts = numberOfPosts;
        },
        loadPosts(state, posts) {
            state.posts = [...posts];
        },
        clearPosts(state) {
            state.posts = [];
        },
    },
    actions: {
        async fetchNumberOfPosts(context) {
            $axios
                .get('posts/count/of')
                .then((res) => {
                    if (res && res.data) {
                        context.commit('setNumberOfPosts', res.data.countOfPosts);
                    }
                })
                .catch((error) => {
                    console.error('hiba: ' + error);
                });
        },
        async fetchPosts(context) {
            // init local items storage
            context.commit('setLoading', true);
            await context.dispatch('fetchNumberOfPosts');
            $axios
                .get('posts')
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
        async fetchPaginatedPosts(context, params) {
            // init local items storage
            context.commit('setLoading', true);
            await context.dispatch('fetchNumberOfPosts');
            $axios
                .get(`posts/${params.offset}/${params.limit}/${params.order}/${params.sort}`)
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
