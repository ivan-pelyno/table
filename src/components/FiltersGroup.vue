<template>
    <thead>
    <tr>
        <th scope="col" v-for="(item , index) in rules" :key="index">
            <select-group v-if="item.component == 'selectGroup'" :type="item" @rezult="setDataFilter"></select-group>
            <select-gender v-if="item.component == 'customSelect'" :type="item" @rezult="setDataFilter"></select-gender>
            <datepicker v-if="item.component == 'datepicker'" :type="item" @rezult="setDataFilter"></datepicker>
            <div class="sort-wrap">
                <button class="btn btn-default btn-sort" :id="'btn-'+index" type="button"
                        @click.prevent="setDataSort(item,index)">sort
                </button>
            </div>
            <p class="text-center">{{item.id}}</p>
        </th>
    </tr>
    </thead>
</template>
<script>
    import selectGroup from "./form/SelectGroup";
    import selectGender from "./form/SelectForGender";
    import datepicker from "./form/Datepicker";

    import Filter from "../FilterClient.js";
    import SortClient from "../SortClient.js";

    export default {
        props: ["data"],
        components: {
            selectGroup,
            selectGender,
            datepicker
        },
        data() {
            return {
                rules: {
                    name: {
                        id: "name",
                        component: "selectGroup",
                        rulesType: "string"
                    },
                    age: {
                        id: "age",
                        component: "selectGroup",
                        rulesType: "number"
                    },
                    gender: {
                        id: "gender",
                        component: "customSelect",
                        rulesType: "enum"
                    },
                    company: {
                        id: "company",
                        component: "selectGroup",
                        rulesType: "string"
                    },
                    email: {
                        id: "email",
                        component: "selectGroup",
                        rulesType: "string"
                    },
                    phone: {
                        id: "phone",
                        component: "selectGroup",
                        rulesType: "string"
                    },
                    address: {
                        id: "address",
                        component: "selectGroup",
                        rulesType: "string"
                    },
                    about: {
                        id: "about",
                        component: "selectGroup",
                        rulesType: "string"
                    },
                    registered: {
                        id: "registered",
                        component: "datepicker",
                        rulesType: "date"
                    }
                },
                selectVal: "",
                dataFilter: {},
                originData: [],
                currentData: [],
                dataSort: {}
            };
        },

        methods: {
            // collect data from filters and write in dataFilter object
            setDataFilter(val) {

                let obj = {};

                if (val.inputVal) {
                    obj = {
                        selectVal: val.selectVal,
                        inputVal: val.inputVal
                    };
                } else {
                    obj = {selectVal: val.selectVal};
                }

                this.$set(this.dataFilter, val.id, {
                    selectVal: val.selectVal,
                    inputVal: val.inputVal
                });

                if (val.selectVal !== "" || this.rules[val.id].rulesType == "enum") {
                    this.globalFilter();
                }
            },
            // collect data from sorts and write in dataSort object
            setDataSort(val, index){

                if (!this.dataSort[val.id]) {
                    this.$set(this.dataSort, val.id, {
                        'counter': 0
                    });
                    $('#btn-' + index).addClass('up');
                } else {
                    let count = this.dataSort[val.id].counter;

                    if (count == 1) {
                        this.$delete(this.dataSort, val.id);
                        $('#btn-' + index).removeClass('bottom');
                    } else {
                        this.$set(this.dataSort, val.id, {
                            'counter': ++count
                        });
                        $('#btn-' + index).addClass('bottom').removeClass('up');
                    }
                }

                this.globalSort()
            },
            //  sotrting on all elements
            globalSort() {
                let sort = new SortClient(this.dataSort, this.currentData, this.rules);
                this.$emit("rezult", sort.handle());
            },
            // filtering on all elements
            globalFilter() {
                let filter = new Filter(this.dataFilter, this.originData, this.rules);
                this.currentData = filter.handle();
                this.$emit("rezult", this.currentData);
            }
        },

        watch: {
            //watch data
            data(val) {
                this.data = val;
                this.originData = this.data;
                this.currentData = this.data;
            }
        },

        mounted() {
            // get the data when you create
            this.originData = this.data;
            this.currentData = this.data;
        }
    };
</script>
<style scoped>
    /* thead  */
    thead tr th:nth-child(1) {
        width: 1%;
    }

    thead tr td:nth-child(2) {
        width: 4%;
    }

    thead tr td:nth-child(3) {
        width: 4%;
    }

    thead tr td:nth-child(4) {
        width: 4%;
    }

    thead tr td:nth-child(5) {
        width: 7%;
    }

    thead tr td:nth-child(6) {
        width: 7%;
    }

    thead tr td:nth-child(7) {
        width: 7%;
    }

    thead tr td:nth-child(8) {
        width: 7%;
    }

    thead tr td:nth-child(9) {
        width: 15%;
    }

    thead tr td:nth-child(10) {
        width: 7%;
    }

    /* .btn-sort */
    .btn-sort {
        position: relative;
        padding-right: 20px;
        display: block;
        width: 100%;
        margin-top: 15px;
        text-transform: uppercase;
    }

    .btn-sort.up:before {
        border-color: transparent transparent #000 transparent;
    }

    .btn-sort.bottom:after {
        border-color: #000 transparent transparent transparent;
    }

    .btn-sort:before {
        content: "";
        position: absolute;
        right: 5px;
        top: 5px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 5px 8px 5px;
        border-color: transparent transparent #fff transparent;
    }

    .btn-sort:after {
        content: "";
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 5px 0 5px;
        border-color: #fff transparent transparent transparent;
        z-index: 1;
    }

    .btn-secondary {
        margin: 0 auto;
        width: 100%;
        text-transform: uppercase;
    }

    p {
        color: #212121;
    }
</style>

