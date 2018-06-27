<template>
    <div class="form-group">
        <input type="date" class="form-control" v-model="inputValue">
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

