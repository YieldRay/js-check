type AnyConstructor = new (...args: any[]) => any;
type ToStringTag = "String" | "Number" | "Boolean" | "Array" | "Object" | "Null" | "Undefined" | "BigInt";

interface Validator {
    type: AnyConstructor | ToStringTag;
    value?: any;
}

type ObjectEntries = { [key: keyof any]: Validator };
type AnyObject = { [any: keyof any]: any };
interface ObjectValidator extends Validator {
    value?: AnyObject;
    entries?: ObjectEntries | null;
}

type ArrayEntries = Array<Validator>;
type AnyArray = Array<any>;
interface ArrayValidator extends Validator {
    value?: AnyArray;
    entries?: ArrayEntries | null;
}

export { Validator, ObjectEntries, ObjectValidator, ArrayEntries, ArrayValidator };
export { AnyConstructor, AnyObject, AnyArray, ToStringTag };
