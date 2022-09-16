interface Validator {
    type: Function;
    value?: any;
}

type ObjectEntries = {
    [key: keyof any]: Validator;
};

interface ObjectValidator extends Validator {
    value?: undefined;
    entries?: ObjectEntries | null;
}

type ArrayEntries = Array<Validator>;
interface ArrayValidator extends Validator {
    value?: undefined;
    entries?: ArrayEntries | null;
}

export { Validator, ObjectEntries, ObjectValidator, ArrayEntries, ArrayValidator };
