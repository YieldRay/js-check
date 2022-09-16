function toStringTag(data: any): string {
    return Object.prototype.toString.call(data).slice(8, -1);
}

type anyConstructor = new (...args: any[]) => any;
function constructorCheck(constructor: anyConstructor, data: any): boolean {
    return toStringTag(data) === constructor.name;
}

export { toStringTag, constructorCheck };
