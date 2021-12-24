import { createStore } from 'vuex';
import axios from 'axios';
export const ITEMS_PER_PAGE = 10;
const api = axios.create({
    baseURL: 'https://jedlik-expr-mongoose-backend.herokuapp.com/',
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
        items: [],
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status;
        },
        loadItems(state, items) {
            state.items = [...state.items, ...items];
        },
        clearItems(state) {
            state.items = [];
        },
    },
    actions: {
        async fetchItems(context) {
            // init local items storage
            let items = [];
            context.commit('setLoading', true);
            // make the request
            let resp = await api.get('report');
            // slice data
            console.log(resp);
            context.commit('loadItems', items);
            context.commit('setLoading', false);
        },
    },
});
