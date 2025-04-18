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
import type { HTMLAttritubeNames } from "mmtreeast-html-attributes";
```

## API

### Exports

- This package exports:

  - javascript object : `htmlAttributes` , `htmlAttributeNames`, `htmlAttributeInfo`
  - type : `HTMLAttritubeNames`

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

An array of HTML attribut names.

#### example

```js
import { htmlAttributeNames } from "mmtreeast-html-attributes";

console.log(htmlAttributeNames.slice(3, 10));
// [ 'action', 'align', 'allow', 'alt', 'as', 'async', 'autocapitalize' ]
```

### `htmlAttributeInfo`

Return a object of some information for a HTML attritube.

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

##### example

## License

[MIT][file-license] © [Pho Thin Mg][ptm]

<!-- Definitions -->

[file-license]: LICENSE

[ptm]: https://github.com/phothinmg

[htmlAttributes-example]: #example

[htmlAttributeNames-example]: #example-1

[htmlAttributeInfo-exlments-example]: #example-2
