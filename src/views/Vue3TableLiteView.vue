<script setup>
import VueTableLite from 'vue3-table-lite';
import { onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const posts = computed(() => store.getters['posts/getPosts']);
const numberOfPosts = computed(() => store.getters['posts/getNumberOfPosts']);

onMounted(() => {
    store.dispatch('posts/fetchPaginatedPosts', {
        offset: '0',
        limit: '10',
        order: 'title',
        sort: '1',
    });
});

const table = reactive({
    isLoading: false,
    columns: [
        {
            label: 'ID',
            field: '_id',
            width: '5%',
            sortable: true,
            isKey: true,
            display: function (row) {
                return row._id.slice(5, 9);
            },
        },
        {
            label: 'Aut',
            field: 'author',
            width: '5%',
            sortable: true,
            display: function (row) {
                return row.author.slice(5, 9);
            },
        },
        {
            label: 'Title',
            field: 'title',
            width: '30%',
            sortable: true,
        },
        {
            label: 'Content',
            field: 'content',
            width: '60%',
            sortable: true,
            display: function (row) {
                return row.content.slice(0, 71) + '...';
            },
        },
    ],
    rows: posts,
    totalRecordCount: numberOfPosts,
    sortable: {
        order: 'title',
        sort: 'asc',
    },
    messages: {
        pagingInfo: 'Dokumentumok {0}-{1}-ig (össz.:{2})',
        pageSizeChangeLabel: 'Dok. / oldal: ',
        gotoPageLabel: 'Ugrás: ',
        noDataAvailable: 'Nincsenek adatok!',
    },
});
const doSearch = (offset, limit, order, sort) => {
    table.isLoading = true;
    store.dispatch('posts/fetchPaginatedPosts', {
        offset: offset,
        limit: limit,
        order: order,
        sort: sort == 'asc' ? '1' : '-1',
    });
    table.totalRecordCount = numberOfPosts;
    table.sortable.order = order;
    table.sortable.sort = sort;
};

const tableLoadingFinish = () => {
    table.isLoading = false;
};
</script>

<template>
    <v-container class="page">
        <h1 class="text-h4">vue3-table-light</h1>
        <vue-table-lite
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :sortable="table.sortable"
            :messages="table.messages"
            @do-search="doSearch"
            @is-finished="tableLoadingFinish"
        ></vue-table-lite>
    </v-container>
</template>

<style scoped>
.card ::v-deep(.table .thead-dark th) {
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;
}
.card ::v-deep(.table td),
.card ::v-deep(.table tr) {
    border: 1px solid #42b983;
}
</style>
