export default class FilterNumber {

    constructor(params) {
        this.params = params;
    }

    compare() {
        switch (this.params.option) {
            case "<=":
                return this.params.currentValue <= this.params.value;
                break;
            case ">=":
                return this.params.currentValue >= this.params.value;
                break;
            case "==":
                return this.params.currentValue == this.params.value;
                break;
            default:
                return;
                break;
        }
    }
}


