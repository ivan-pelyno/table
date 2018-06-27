import FilterString from "./filters/FilterString.js";
import FilterEnum from "./filters/FilterEnum.js";
import FilterNumber from "./filters/FilterNumber.js";
import FilterDate from "./filters/FilterDate.js";

export default class FilterFactory {

    constructor(type, params) {
        this.type = type;
        this.params = params;
    }

    build() {
        switch (this.type) {
            case "string":
                return new FilterString(this.params);
                break;
            case "number":
                return new FilterNumber(this.params);
                break;
            case "enum":
                return new FilterEnum(this.params);
                break;
            case "date":
                return new FilterDate(this.params);
                break;
        }
    }

}