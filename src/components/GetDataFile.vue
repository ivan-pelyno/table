<template>
    <div class="input-group">
        <div class="custom-file">
            <form action="" id="file-form">
                <input type="file" class="custom-file-input" :id="fileName" @change="getData">
                <label class="custom-file-label" :for="fileName">Choose JSON file</label>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["fileName", 'rezult'],
        data() {
            return {
                data: []
            };
        },
        methods: {
            // processing data from json file
            getData(event) {
                let _this = event.target;

                if (_this.files && _this.files[0]) {
                    let myFile = _this.files[0];
                    let reader = new FileReader();

                    reader.addEventListener("load", e => {
                        this.data = JSON.parse(e.target.result);
                        
                        //manipulations with date for correct work
                        this.data.forEach(element => {
                            // create correct date
                            element.registered = element.registered.replace(/T/, ' ');

                            // replace enum type 
                            let replaceWith = 'male';
                            let replaceTo = 0;
                            if(element.gender == "female"){
                                replaceWith = 'female';
                                replaceTo = 1;
                            }
                            element.gender = element.gender.replace(replaceWith, replaceTo);
                        });

                        this.$emit('rezult', {'data': this.data});
                    });
                    reader.readAsBinaryString(myFile);
                }
            }
        }
    };
</script>
