# mmtreeast-html-attributes

![GitHub Actions Workflow Status][npm-publish] ![GitHub Actions Workflow Status][code-ql]

## Content

- [Overview](#overview)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Related](#related)
- [License](#license)

## Overview

HTML attributes ,fetch from [MDN][mdn-link].

## Install

```shell
npm i mmtreeast-html-attributes
```

```shell
pnpm i mmtreeast-html-attributes
```

```shell
yarn add mmtreeast-html-attributes
```

## Use

### ESM

```ts
import {
  attributes,
  global_attributes,
  non_global_attributes,
} from "mmtreeast-html-attributes";
```

### Commonjs

```js
const {
  attributes,
  global_attributes,
  non_global_attributes,
} = require("mmtreeast-html-attributes");
```

## API

### Exports

- This package exports:

  - javascript object : `attributes` , `global_attributes`, `non_global_attributes`

- There is no default export.

## Related

- [`mmtreeast-html-tags`][mmtreeast-html-tags]

## License

[MIT][file-license] © [Pho Thin Mg][ptm]

<!-- Definitions -->

[file-license]: LICENSE
[ptm]: https://github.com/phothinmg
[htmlAttributes-example]: #example
[htmlAttributeNames-example]: #example-1
[htmlAttributeInfo-exlments-example]: #example-2
[htmlAttributeInfo-des-example]: #example-3
[htmlAttributeInfo-mdn-example]: #example-4
[htmlAttributeInfo-deprecated-example]: #example-5
[htmlAttributeInfo-experimental-example]: #example-6
[htmlAttributeInfo-note-example]: #example-7
[mmtreeast-html-tags]: https://github.com/phothinmg/mmtreeast-html-tags
[mdn-link]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
[npm-publish]: https://img.shields.io/github/actions/workflow/status/phothinmg/mmtreeast-html-attributes/npm-publish.yml?style=for-the-badge&logo=npm&label=npm%20publish
[code-ql]: https://img.shields.io/github/actions/workflow/status/phothinmg/mmtreeast-html-attributes/codeql.yml?style=for-the-badge&logo=github&label=codeql
