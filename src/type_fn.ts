/**
 *  Shortcuts for building Validator Object
 */

import { Validator, ObjectEntries, ObjectValidator, ArrayEntries, ArrayValidator } from "./interfaces";
import { AnyObject, AnyArray } from "./interfaces";

function string_t(value?: string): Validator {
    return {
        type: String,
        value,
    };
}

function number_t(value?: number): Validator {
    return {
        type: Number,
        value,
    };
}

function bigint_t(value?: bigint): Validator {
    return {
        type: "BigInt",
        value,
    };
}

function boolean_t(value?: boolean): Validator {
    return {
        type: Boolean,
        value,
    };
}

function object_t(entries?: ObjectEntries, value?: AnyObject): ObjectValidator {
    return {
        type: Object,
        entries,
        value,
    };
}

function array_t(entries?: ArrayEntries, value?: AnyArray): ArrayValidator {
    if (entries && !Array.isArray(entries)) throw new Error("entries should be Array");
    return {
        type: Array,
        entries,
        value,
    };
}

export { string_t, number_t, bigint_t, boolean_t, object_t, array_t };
