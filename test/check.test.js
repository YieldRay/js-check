const { string_t, number_t, boolean_t, object_t, array_t, check } = require("../dist/js-check.umd.js");

test("string_t", () => {
    expect(check(string_t(), "str")).toBe(true);
    expect(check(string_t(), 12.3)).toBe(false);
    expect(check(string_t("str"), "str")).toBe(true);
    expect(check(string_t("str"), "foobar")).toBe(false);
});

test("number_t", () => {
    expect(check(number_t(), 12.3)).toBe(true);
    expect(check(number_t(), "12.3")).toBe(false);
    expect(check(number_t(12.3), 12.3)).toBe(true);
    expect(check(number_t(12.3), 23.4)).toBe(false);
});

test("boolean_t", () => {
    expect(check(boolean_t(), true)).toBe(true);
    expect(check(boolean_t(), false)).toBe(true);
    expect(check(boolean_t(), 123)).toBe(false);
    expect(check(boolean_t(true), true)).toBe(true);
    expect(check(boolean_t(false), true)).toBe(false);
});

test("object_t", () => {
    expect(check(object_t(), {})).toBe(true);
    expect(check(object_t({ a: string_t("a") }), { a: "a" })).toBe(true);
    expect(check(object_t({ a: object_t({ b: string_t("c") }) }), { a: { b: "c" } })).toBe(true);
    expect(check(object_t(), [])).toBe(false);
    expect(check(object_t(null), {})).toBe(false);
});

test("array_t", () => {
    expect(check(array_t(), [])).toBe(true);
    expect(check(array_t([string_t("a")]), ["a"])).toBe(true);
    expect(check(array_t([string_t("a"), string_t("b"), string_t("c")]), ["a", "b", "c"])).toBe(true);
    expect(check(array_t([string_t("a"), string_t("b"), string_t("c")]), ["a", "b"])).toBe(false);
});
