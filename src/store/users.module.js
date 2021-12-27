import $axios from './axios.instance';

export default {
    namespaced: true,
    state: {
        loggedIn: false,
    },
    getters: {
        getLoggedIn(state) {
            return state.loggedIn;
        },
    },
    mutations: {
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
    },
    actions: {
        async loginUser(context) {
            $axios.post('auth/login', {
                email: 'student001@jedlik.eu',
                password: 'student001',
            })
                .then(() => {
                    console.log('Authenticated');
                    // console.log(res);
                    context.commit('setLoggedIn', true);
                })
                .catch(() => {
                    console.log('Error on Authentication');
                    context.commit('setLoggedIn', false);
                });
        },
        async logOut(context) {
            $axios.post('auth/logout')
                .then(() => {
                    console.log('Logged out');
                    // console.log(res);
                    context.commit('setLoggedIn', false);
                })
                .catch(() => {
                    console.log('Error on Authentication');
                    context.commit('setLoggedIn', false);
                });
        },
    },
};
