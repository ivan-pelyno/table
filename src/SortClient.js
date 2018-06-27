export default class SortClient {

    constructor(sorts, data, rules) {

        this.sorts = sorts;
        this.data = data;
        this.rules = rules;

    }

    performObjSort(sortValues) {
        let rules = this.rules;
        let keys = Object.keys(sortValues),
            prop = [];

        keys.forEach(function (value) {

            let res = {};
            res.name = value;

            switch (rules[value].rulesType) {
                case "number":
                    res.primer = parseInt;
                    break;
                case "date":
                    res.primer = Date.parse;
                    break;
                case 'enum':
                    res.primer = undefined;
                    break;
                default:
                    res.primer = undefined;
                    break;
            }

            sortValues[value].counter ? (res.reverse = true) : (res.reverse = false);
            prop.push(res);

        });
        return prop;
    }
    // sorting multiple 
    sorter(fields) {
        let n_fields;

        n_fields = fields.length;

        return function (A, B) {
            let a, b, field, key, primer, reverse, result, i;

            for (i = 0; i < n_fields; i++) {
                result = 0;
                field = fields[i];

                key = typeof field === "string" ? field : field.name;

                a = A[key];
                b = B[key];

                if (typeof field.primer !== "undefined") {
                    a = field.primer(a);
                    b = field.primer(b);
                }

                reverse = field.reverse ? -1 : 1;

                if (a < b) result = reverse * -1;
                if (a > b) result = reverse * 1;
                if (result !== 0) break;
            }
            return result;
        };
    }

    handle() {

        let params = this.performObjSort(this.sorts);

        let newObj = this.data;
        newObj.sort(this.sorter(params));

        return newObj;
    }
}