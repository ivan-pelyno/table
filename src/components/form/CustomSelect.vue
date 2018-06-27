<template>
    <div class="form-group">
        <select name="" id="" class="form-control" v-model="selectValue">
            <option :value="item" v-for="(item, index) in rulesType[type.rulesType].options" :key="index">
                <span v-if="item === 0">male</span>
                <span v-else-if="item === 1">female</span>
                <span v-else>{{item}}</span>
            </option>
        </select>
    </div>
</template>
<script>
    export default {
        props: ["type"],
        data() {
            return {
                selectValue: "",
                rulesType: {
                    number: {
                        options: [">=", "<=", "=="]
                    },
                    string: {
                        options: ["Starts With", "Contains", "Equals"]
                    },
                    date: {
                        options: [">=", "<=", "=="]
                    },
                    enum: {
                        options: [0, 1]
                    }
                }
            };
        },
        watch: {
            selectValue(val) {
                this.$emit("input", val);
            }
        },
        mounted(){
            if (this.type.rulesType !== "enum") this.selectValue = this.rulesType[this.type.rulesType].options[0];
        }
    };
</script>
