<template>
    <div class="select-group">
        <custom-select :type="type" v-model="selectVal"></custom-select>
        <date-input v-model="inputVal"></date-input>
    </div>
</template>
<script>
    import customSelect from "./CustomSelect";
    import dateInput from "./DateInput";
    export default {
        props: ["type", "rezult"],
        components: {
            customSelect,
            dateInput
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

            inputVal(val) {
                if (this.data.id == "") this.data.id = this.type.id;

                this.data.inputVal = val;
                this.$emit("rezult", this.data);
            }
        }
    };
</script>