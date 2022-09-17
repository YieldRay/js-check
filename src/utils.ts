import { AnyConstructor, ToStringTag } from "./interfaces";

function toStringTag(data: any): string {
    return Object.prototype.toString.call(data).slice(8, -1);
}
function constructorCheck(constructor: AnyConstructor | ToStringTag, data: any): boolean {
    if (typeof constructor === "string") {
        return toStringTag(data) === constructor;
    }
    return toStringTag(data) === constructor.name || data instanceof constructor;
}

export { toStringTag, constructorCheck };
