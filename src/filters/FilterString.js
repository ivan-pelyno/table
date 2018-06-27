export default class FilterString {

    constructor(params) {
        this.params = params;
    }

    compare() {
        switch (this.params.option) {
            case "Starts With":
                return this.params.currentValue
                    .toLowerCase()
                    .startsWith(this.params.value.toLowerCase());
                break;
            case "Contains":
                return this.params.currentValue
                    .toLowerCase()
                    .includes(this.params.value.toLowerCase());
                break;
            case "Equals":
                return this.params.currentValue.toLowerCase() === this.params.value.toLowerCase();
                break;
        }
    }
}