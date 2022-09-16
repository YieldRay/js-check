import { Validator, ObjectEntries, ObjectValidator, ArrayEntries, ArrayValidator } from "./interfaces";
import { constructorCheck } from "./utils";

/**
 * @param validator
 * @param data - any javascript value that need to check
 * @return - check if `data` meets `validator`
 */
function check(validator: Validator, data: any): boolean {
    const PRI = [String, Number, Boolean];
    // const REF = [Object, Array];
    // this array is not needed as we match each of them separated

    const priCons = PRI.find((cons) => constructorCheck(cons, data));
    const { value, type: setCons } = validator;
    // value, if is undefined, accepts any value
    const isAllowAnyValue = value === undefined;
    if (priCons /* matched constructor in primitive constructors */) {
        if (priCons === setCons) {
            if (isAllowAnyValue) return true;
            return data === value;
        }
        return false;
    }

    // match Object & Array
    // if (validator.entries === null) then the ref should be null
    // if (validator.entries === undefined) then any data is allowed (same as above)
    // validator.value is ignored

    if (setCons === Object) {
        if (!constructorCheck(Object, data)) return false;
        const entries = (validator as ObjectValidator).entries;
        if (entries === null) return data === null;
        if (entries === undefined) return true;
        return Object.entries(entries).every(([subKey, subValidator]) => check(subValidator, data[subKey]));
    }

    if (setCons === Array) {
        if (!Array.isArray(data)) return false;
        const entries = (validator as ArrayValidator).entries;
        if (entries === null) return data === null;
        if (entries === undefined) return true;
        if (entries.length !== (data as Array<any>).length) return false;
        return entries.every((subValidator, subIndex) => check(subValidator, data[subIndex]));
    }

    throw new Error("only [String, Number, Boolean, Object, Array] is allowed!");
}

export { string_t, number_t, boolean_t, object_t, array_t } from "./type_fn";
export { check };
