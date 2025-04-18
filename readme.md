# mmtreeast-html-attributes

## Content

- [Overview](#overview)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [Exports](#exports)
  - [`htmlAttributes`](#htmlattributes)
    - [example][htmlAttributes-example]
  - [`htmlAttributeNames`](#htmlattributenames)
    - [example][htmlAttributeNames-example]
  - [`htmlAttributeInfo`](#htmlattributeinfo)
    - [elements](#elements)
      - [example][htmlAttributeInfo-exlments-example]
    - [description](#description)
      - [example][htmlAttributeInfo-des-example]
    - [MDN](#mdn)
      - [example][htmlAttributeInfo-mdn-example]
    - [deprecated](#deprecated)
      - [example][htmlAttributeInfo-deprecated-example]
    - [experimental](#experimental)
      - [example][htmlAttributeInfo-experimental-example]
    - [note](#note)
      - [example][htmlAttributeInfo-note-example]

## Overview

HTML attributes ,fetch from https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes.

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

```ts
import {
  htmlAttributes,
  htmlAttributeNames,
  htmlAttributeInfo,
} from "mmtreeast-html-attributes";
import type { HTMLAttributeNames } from "mmtreeast-html-attributes";
```

## API

### Exports

- This package exports:

  - javascript object : `htmlAttributes` , `htmlAttributeNames`, `htmlAttributeInfo`
  - type : `HTMLAttributeNames`

- There is no default export.

### `htmlAttributes`

Return an array of HTML attributes name of a HTML tag name.

#### example

```js
import { htmlAttributes } from "mmtreeast-html-attributes";

console.log(htmlAttributes.a);

/*
[
  'accesskey', 'autocapitalize',
  'class',     'contenteditable',
  'data-*',    'dir',
  'draggable', 'hidden',
  'id',        'itemprop',
  'lang',      'role',
  'slot',      'spellcheck',
  'style',     'tabindex',
  'title',     'translate'
]
*/
```

### `htmlAttributeNames`

An array of HTML attribute names.

#### example

```js
import { htmlAttributeNames } from "mmtreeast-html-attributes";

console.log(htmlAttributeNames.slice(3, 10));
// [ 'action', 'align', 'allow', 'alt', 'as', 'async', 'autocapitalize' ]
```

### `htmlAttributeInfo`

Return a object of some information for a HTML attribute.

#### elements

HTML tag name or an array of HTML tag names that can use this attribute.

##### example

```js
import { htmlAttributeInfo } from "mmtreeast-html-attributes";

console.log(htmlAttributeInfo.align.elements);
/* 
[
  'caption',  'col',
  'colgroup', 'hr',
  'iframe',   'img',
  'table',    'tbody',
  'td',       'tfoot',
  'th',       'thead',
  'tr'
]
*/
```

#### description

Short description of this attribute.

##### example

```js
import { htmlAttributeInfo } from "mmtreeast-html-attributes";

console.log(htmlAttributeInfo.align.description);

// Specifies the horizontal alignment of the element.
```

#### MDN

MDN link for this attribute, if it is undefined, deprecated or the documentation has not yet been written.

##### example

```js
import { htmlAttributeInfo } from "mmtreeast-html-attributes";

console.log(htmlAttributeInfo.align.MDN);
// undefined
```

#### deprecated

If this attribute is deprecated return `true`(not for use in new websites) otherwise `undefined`.

##### example

```js
import { htmlAttributeInfo } from "mmtreeast-html-attributes";

console.log(htmlAttributeInfo.align.deprecated);
// true
```

#### experimental

If this attribute is experimental return `true`( expect behavior to change in the future) otherwise `undefined`.

##### example

```js
import { htmlAttributeInfo } from "mmtreeast-html-attributes";

console.log(htmlAttributeInfo.align.experimental);
// undefined
```

#### note

Additional information provided by MDN if it is exist, otherwise `undefined`.

##### example

```js
import { htmlAttributeInfo } from "mmtreeast-html-attributes";

console.log(htmlAttributeInfo.align.note);
// undefined
```

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
