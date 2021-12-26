import { createStore } from 'vuex';

import axios from 'axios';
const api = axios.create({
    baseURL: 'https://jedlik-expr-mongoose-backend.herokuapp.com/',
    withCredentials: true,
});

// async function* asyncGetter(data) {
//     let i = 0;
//     while (i < data.length) {
//         let res = await api.get(`item/${data[i]}.json?print=pretty`);
//         i++;
//         yield res.data;
//     }
// }

export default createStore({
    state: {
        loading: false,
        loggedIn: false,
        posts: [],
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status;
        },
        loadPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
        clearPosts(state) {
            state.posts = [];
        },
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
    },
    actions: {
        async loginUser(context) {
            api.post('auth/login', {
                email: 'student001@jedlik.eu',
                password: 'student001',
            })
                .then((res) => {
                    console.log('Authenticated');
                    console.log(res);
                    console.log(api.defaults.headers);
                    context.commit('setLoggedIn', true);
                })
                .catch(() => {
                    console.log('Error on Authentication');
                    context.commit('setLoggedIn', false);
                });
        },

        async fetchPosts(context) {
            // init local items storage
            context.commit('setLoading', true);
            // let authToken = localStorage.getItem('JWT');
            api.get('posts')
                .then((res) => {
                    // context.commit('loadPosts', res.data);
                    context.commit('setLoading', false);
                    console.log('postok:' + res.data);
                })
                .catch((error) => {
                    console.error('hiba: ' + error);
                });
            // make the request
        },
    },
});
