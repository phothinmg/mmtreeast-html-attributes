#!/usr/bin/env node
import { getAttr } from "./getattr.js";
import { htmlTags } from "mmtreeast-html-tags";

const dat = await getAttr();
const data = dat.tableData;
const tags = htmlTags.all_mdn_elements.elements;
const keys = Object.keys(data);

/**
 *
 * @param {import("mmtreeast-html-tags").HTMLTagNames} [tag]
 * @returns
 */
function $g(tag) {
  const r = keys.filter(
    (i) =>
      data[i].elements === tag ||
      (Array.isArray(data[i].elements) && data[i].elements.includes(tag))
  );
  const g = keys.filter(
    (i) =>
      data[i].elements === "Global_Attribute" ||
      (Array.isArray(data[i].elements) &&
        data[i].elements.includes("Global_Attribute"))
  );
  return [...r, ...g];
}

// const _tags = tags.filter(
//   (i) => !htmlTags.obsolete_and_deprecated_elements.elements.includes(i)
// );
const obj = {};

tags.map((tag) => {
  const attrs = $g(tag);
  obj[tag] = attrs;
});

export const _obj = JSON.stringify(obj);

export const attrString = `
import type { HTMLTagNames } from "mmtreeast-html-tags";

export const htmlAttributes: Partial<Record<HTMLTagNames,{attr:string[];global:string[]}>> = Object.freeze(JSON.parse(\`${_obj}\`));
`;
