<template>
    <div class="select-group">
        <custom-select :type="type" v-model="selectVal"></custom-select>
        <text-input v-model="inputVal"></text-input>
    </div>
</template>
<script>
    import customSelect from "./CustomSelect";
    import textInput from "./TextInput";
    export default {

        props: ["type", "rezult"],
        components: {
            customSelect,
            textInput
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
            //get data from select
            selectVal(val) {
                if (this.data.id == "") this.data.id = this.type.id;

                this.data.selectVal = val;
                this.$emit("rezult", this.data);
            },
            //get data from input
            inputVal(val) {
                if (this.data.id == "") this.data.id = this.type.id;

                this.data.inputVal = val;
                this.$emit("rezult", this.data);
            }
        }
    };
</script>
