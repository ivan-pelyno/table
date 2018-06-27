export default class FilterEnum {

    constructor(params) {
        this.params = params;
    }

    compare() {
        return ++this.params.currentValue == ++this.params.option;
    }
}
