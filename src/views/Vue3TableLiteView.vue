<script setup>
import VueTableLite from 'vue3-table-lite';
import { onMounted, ref, reactive, computed, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const posts = computed(() => store.getters['posts/getPosts']);
const numberOfPosts = computed(() => store.getters['posts/getNumberOfPosts']);
const isLoading = computed(() => store.getters['posts/getLoading']);

let checkedRowsIds = [];

const searchTerm = ref(''); // Search text

watch(searchTerm, () => {
    doSearch('0', table.pageSize, table.sortable.order, table.sortable.sort);
});

onMounted(() => {
    doSearch('0', 10, 'title', 'asc');
});

const table = reactive({
    hasCheckbox: true,
    isLoading: isLoading,
    columns: [
        {
            label: 'ID',
            field: '_id',
            width: '5%',
            sortable: false,
            isKey: true,
            display: function (row) {
                return row._id.slice(5, 9);
            },
        },
        {
            label: 'Aut',
            field: 'author',
            width: '5%',
            sortable: false,
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
            width: '55%',
            sortable: true,
            display: function (row) {
                return row.content.slice(0, 71) + '...';
            },
        },
        {
            label: 'Edit',
            field: 'quick',
            width: '5%',
            display: function (row) {
                return `<button type="button" data-id="${row._id}" class="is-rows-el quick-btn">Edit</button>`;
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
    pageSize: 10,
});
const doSearch = (offset, limit, order, sort) => {
    store.dispatch('posts/fetchPaginatedPosts', {
        offset: offset,
        limit: limit,
        order: order,
        sort: sort == 'asc' ? '1' : '-1',
        keyword: searchTerm.value,
    });
    table.pageSize = parseInt(limit);
    table.sortable.order = order;
    table.sortable.sort = sort;
};

const tableLoadingFinish = (elements) => {
    // table.isLoading = false;
    Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains('quick-btn')) {
            element.addEventListener('click', function () {
                console.log(this.dataset.id + ' quick-btn click!!');
            });
        }
    });
};

const updateCheckedRows = (rowsKey) => {
    checkedRowsIds = rowsKey;
    const number = checkedRowsIds.length;
    console.log('Checked: ' + checkedRowsIds.length + (number == 1 ? 'row' : 'rows'));
};
</script>

<template>
    <v-container class="page">
        <h1 class="text-h4 ma-3">vue3-table-light</h1>
        <v-text-field v-model="searchTerm" label="Kérem a keresendő szórészletet!"></v-text-field>
        <vue-table-lite
            :has-checkbox="table.hasCheckbox"
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :sortable="table.sortable"
            :messages="table.messages"
            :page-size="table.pageSize"
            @do-search="doSearch"
            @is-finished="tableLoadingFinish"
            @return-checked-rows="updateCheckedRows"
        ></vue-table-lite>
    </v-container>
</template>

<style scoped>
.card ::v-deep(.table .thead-dark th) {
  color: #fff;
  background-color: #42b983;
  border-color: #42b983;
}
.card ::v-deep(.table td), .card ::v-deep(.table tr) {
  border: 1px solid #42b983;
}
.card ::v-deep(.quick-btn) {
    background-color: lightgray;
    border-style: solid;
}

.card ::v-deep(.table tr:nth-child(even)) {
  background-color: #f2f2f2;
}

.card ::v-deep(.table tr:hover) {
  background-color: #ddd;
}

</style>
