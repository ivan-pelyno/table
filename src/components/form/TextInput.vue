<template>
    <div class="form-group">
        <input type="text" class="form-control" v-model="inputValue" placeholder="Value">
    </div>
</template>
<script>
    export default {

        data(){
            return {
                inputValue: ''
            }
        },

        watch: {
            inputValue(val){
                this.$emit('input', val);
            }
        }

    }
</script>
