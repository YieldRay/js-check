# js-check

check some javascript data via vanillaJS

```js
const { string_t, number_t, boolean_t, object_t, array_t, check } = require("js-check.umd.js");

check(string_t(), "this arg should be string"); // => true
check(string_t(), 12.3); // => false
check(string_t("abc"), "abc"); // => true

check(object_t(), { a: 1 }); // => true
check(object_t({ a: number_t() }), { a: 1 }); // => true

check(array_t(), ["abc"]); // => true
check(array_t([string_t()]), ["abc"]); // => true
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
