<template>
    <nav class="d-inline-block">
        <ul class="pagination">
            <li class="page-item" :class="current == index+1 ? 'active': ''" v-for="(number, index) in pages"
                :key="index">
                <a class="page-link" @click.prevent="setPage(number)" href="#">{{number}}</a>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        props: ["current", "pages"],
        data() {
            return {};
        },
        methods: {
            setPage(number) {
                this.$emit('result', number);
            }
        }
    };
</script>

