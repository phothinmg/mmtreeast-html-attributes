#!/usr/bin/env node
import $ from "dax-sh";
import fs from "node:fs/promises";
import { getAttr } from "./getattr.js";
import { tsTemplate } from "./template.js";
import { _obj } from "./attrs.js";

const attrNamesFname = "./src/lib/htmlAttritubeNames.ts";

const attrInfoFname = "./src/lib/htmlAttritubeInfo.ts";

const attrTypesFname = "./src/lib/htmlAttritubetypes.ts";

const attrsFnName = "./src/index.ts";

const now = new Date().toLocaleString("en-US", { timeZoneName: "short" });

const data = await getAttr();

await $.sleep(3000);

await (async function () {
  const attrStringArray = data.attrNames.map((i) => `"${i}"`);
  const attrString = attrStringArray.join(" | ");
  const txt = `
  // Do not edit, this is generated file, last update at ${now}
  import type { HTMLTagNames } from "mmtreeast-html-tags";
  export type HTMLAttritubeNames = ${attrString}
  `;
  await fs.writeFile(attrTypesFname, txt);
})();

const dataText = tsTemplate(data.tableData, data.attrNames, now);

await (async function () {
  await fs.writeFile(attrInfoFname, dataText.attrInfo);
})();

await (async function () {
  await fs.writeFile(attrNamesFname, dataText.attrName);
})();

await (async function () {
  const txt = `
  import type { HTMLTagNames } from "mmtreeast-html-tags";
  import type { HTMLAttritubeNames } from "./lib/htmlAttritubetypes"

  export const htmlAttributes: Partial<Record<HTMLTagNames,HTMLAttritubeNames[]>> = Object.freeze(JSON.parse(\`${_obj}\`));
  `;
  await fs.writeFile(attrsFnName, txt);
})();

await $`npx biome check src --write`;
await $`npx biome format src --write`;
