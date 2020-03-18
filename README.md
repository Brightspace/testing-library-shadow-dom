# Shadow DOM Testing Library

A version of [DOM Testing Library] which supports operations within the shadow DOM.

# The Problem

You want to use Testing Library to test your web UI, but your UI uses [Web Components], which may contain elements inaccessible via standard queries.

# The Solution
## Used Directly
This library's API is identical to that of `@testing-library/dom`. For API documentation, please visit the [Testing Library documentation](https://testing-library.com/docs/dom-testing-library/api-queries).

> Current functionality is focused around ensuring standard get*/find* functionality is supported.
> If you find Testing Library features which are unsupported by this library, please file an issue!

## Used via Framework-Specific Testing Library (eg. React Testing Library)

As `@testing-library/dom` is a dependency of Testing Library solutions, one way of adding shadow DOM query support to these libraries is to alias `@testing-library/dom` within your build.

[Using Webpack](https://webpack.js.org/configuration/resolve/#resolvealias):
```
{
    ...
    alias: {
        '@testing-library/dom': '@d2l/testing-library-shadow-dom',
        ...
    },
    ...
}
```

[DOM Testing Library]: https://github.com/testing-library/dom-testing-library
[Web Components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components
