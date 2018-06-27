
import FilterFactory from "./FilterFactory.js";

export default class FilterClient {

    constructor(filters, data, rules) {

        this.filters = filters;
        this.data = data;
        this.rules = rules;

    }

    handle() {

        let res;
        let self = this;

        res = this.data.filter(
            (currentValue) => {
                
                let keys = Object.keys(self.filters);
                let isFiltered = true;

                keys.forEach(element => {
                    let type = self.rules[element].rulesType;

                    if (
                        !self.filters[element].inputVal &&
                        self.rules[element].rulesType !== "enum"
                    ) return;

                    let params = {
                        option: self.filters[element].selectVal,
                        currentValue: currentValue[element],
                        value: self.filters[element].inputVal
                    };

                    let factory = new FilterFactory(type, params);
                    let obj = factory.build();

                    isFiltered = isFiltered && obj.compare();

                    if (!isFiltered) return;
                });

                return isFiltered;
            }
        );

        return res;
    }
}