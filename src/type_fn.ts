/**
 *  Shortcuts for building Validator Object
 */

import { Validator, ObjectEntries, ObjectValidator, ArrayEntries, ArrayValidator } from "./interfaces";

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

function boolean_t(value?: boolean): Validator {
    return {
        type: Boolean,
        value,
    };
}

function object_t(entries: ObjectEntries): ObjectValidator {
    return {
        type: Object,
        entries,
    };
}

function array_t(entries: ArrayEntries): ArrayValidator {
    return {
        type: Array,
        entries,
    };
}

export { string_t, number_t, boolean_t, object_t, array_t };
