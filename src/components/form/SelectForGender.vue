<template>
    <div class="select-group">
        <custom-select :type="type" v-model="selectVal"></custom-select>
    </div>
</template>
<script>
    import customSelect from "./CustomSelect";
    export default {
        props: ["type", "rezult"],
        components: {
            customSelect
        },
        data() {
            return {
                inputVal: "",
                selectVal: "",
                data: {
                    id: "",
                    selectVal: "",
                    inputVal: ""
                }
            };
        },

        watch: {
            selectVal(val) {

                if (this.data.id == "") this.data.id = this.type.id;

                this.data.selectVal = val;
                this.$emit("rezult", this.data);
            },
        }
    };
</script>
