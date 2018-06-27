<template>
    <div class="main">
        <div class="container-fluid">
            <div class="file-block">
                <get-data-file :file-name="'inputGroupFile'" @rezult="getData"></get-data-file>
            </div>
            <!-- file-block -->
            <table class="table table-hover" v-if="data.length">
                <filters-group :data.sync="data" @rezult="getFilteredData"></filters-group>
                <custom-table :data.sync="computedData"></custom-table>
            </table>
            <!-- table -->
            <div class="text-center">
                <pagination :current="currentPage" :pages="numOfPages" @result="setPage"></pagination>
            </div>
        </div><!-- container-fluid -->
    </div><!-- main -->
</template>

<script>
    import getDataFile from "./components/GetDataFile";
    import filtersGroup from "./components/FiltersGroup";
    import customTable from "./components/CustomTable";
    import pagination from "./components/Pagination";

    export default {

        components: {
            getDataFile,
            filtersGroup,
            customTable,
            pagination
        },

        name: "app",

        data() {
            return {
                filteredData: [],
                data: [],
                currentPage: 1,
                perPage: 20
            };
        },
        methods: {

            getData(el) {
                this.data = el.data;
                this.filteredData = this.data;
            },

            getFilteredData(val) {
                this.filteredData = val;
                this.currentPage = 1;
            },

            setPage(number) {
                this.currentPage = number;
            }
        },
        computed: {

            offset() {
                return ((this.currentPage - 1) * this.perPage);
            },

            limit() {
                return (this.offset + this.perPage);
            },

            numOfPages() {
                return Math.ceil(this.filteredData.length / this.perPage);
            },

            computedData() {
                if (this.offset > this.filteredData.length) {
                    this.currentPage = this.numOfPages;
                }
                let data = this.filteredData;
                return data.slice(this.offset, this.limit);
            }
        }
    };
</script>

<style>
    .main {
        margin: 50px 0;
    }

    .file-block {
        margin: 40px auto;
        max-width: 500px;
    }
</style>
