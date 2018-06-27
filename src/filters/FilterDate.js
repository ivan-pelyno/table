export default class FilterDate {

    constructor(params) {
        this.params = params;
    }

    compare() {
        let registered = this.params.currentValue.split(" ");

        switch (this.params.option) {
            case "<=":
                return new Date(registered[0]) <= new Date(this.params.value);
                break;
            case ">=":
                return new Date(registered[0]) >= new Date(this.params.value);
                break;
            case "==":
                return new Date(registered[0]) == new Date(this.params.value);
                break;
            default:
                break;
        }
    }
}


