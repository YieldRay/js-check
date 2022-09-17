import {
    Validator,
    ObjectEntries,
    ObjectValidator,
    ArrayEntries,
    ArrayValidator,
    AnyConstructor,
    ToStringTag,
} from "./interfaces";
import { constructorCheck } from "./utils";

/**
 * @param validator
 * @param data - any javascript value that need to check
 * @return - check if `data` meets `validator`
 */
function check(validator: Validator, data: any): boolean {
    const PRI: Array<ToStringTag | AnyConstructor> = [
        String,
        Number,
        Boolean,
        "String",
        "Number",
        "Boolean",
        "Null",
        "Undefined",
        "BigInt",
    ];
    // const REF = [Object, Array];
    // this array is not needed as we match each of them separated

    const priCons = PRI.find((cons) => constructorCheck(cons, data));
    const { value: definedValue, type: setCons } = validator;

    if (priCons /* matched constructor in primitive constructors */) {
        if (priCons === setCons) {
            // `validator.value`, if is undefined, accepts any value
            if (definedValue === undefined) return true;
            // however if `validator.value` is set
            return Object.is(data, definedValue);
        }
        return false;
    }

    // match Object & Array
    // if (validator.entries === null) then the ref of the object should be null
    // if (validator.entries === undefined) then any data is allowed (same as above)
    // if (validator.value) is set, then the ref should be the same
    if (setCons === Array) {
        if (!Array.isArray(data)) return false;
        if (definedValue) return Object.is(data, definedValue);
        const entries = (validator as ArrayValidator).entries;
        if (entries === null) return data === null;
        if (entries === undefined) return true;
        if (entries.length !== (data as Array<any>).length) return false;
        return entries.every((subValidator, subIndex) => check(subValidator, data[subIndex]));
    }
    // first we check Array, because only Array is a special Object
    // then we check any other data that instanceof Object
    if (data instanceof Object) {
        if (!constructorCheck(setCons, data)) return false;
        if (definedValue) return Object.is(data, definedValue);
        const entries = (validator as ObjectValidator).entries;
        if (entries === null) return data === null;
        if (entries === undefined) return true;
        return Object.entries(entries).every(([subKey, subValidator]) => check(subValidator, data[subKey]));
    }
    throw new Error(`Unexpected Constructor set in validator: ${typeof setCons === "string" ? setCons : setCons.name}`);
}

export { string_t, number_t, bigint_t, boolean_t, object_t, array_t } from "./type_fn";
export { check };
