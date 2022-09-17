# js-check

![npm](https://img.shields.io/npm/v/@crazywhite/js-check) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@crazywhite/js-check)  
check some javascript data via vanillaJS

```
$ npm install @crazywhite/js-check
```

```js
const { string_t, number_t, boolean_t, object_t, array_t, check } = require("@crazywhite/js-check");

check(string_t(), "this arg should be string"); // => true
check(string_t(), 12.3); // => false
check(string_t("abc"), "abc"); // => true

check(object_t(), { a: 1 }); // => true
check(object_t({ a: number_t() }), { a: 1 }); // => true
check(object_t({ a: number_t() }), { a: 1, b: 2 }); // => true

check(array_t(), ["abc"]); // => true
check(array_t([string_t(), number_t()]), ["abc", 123]); // => true
```

# dev

```
npm install
npm run build
```

# test

```
npm run test
```
