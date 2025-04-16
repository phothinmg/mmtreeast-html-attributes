#!/usr/bin/env node
import $ from "dax-sh";
import fs from "node:fs/promises";
import { getAttr } from "./getattr.mjs";
import { tsTemplate } from "./template.mjs";

const attrNamesFname = "./src/attributes/htmlAttritubeNames.ts";

const attrInfoFname = "./src/attributes/htmlAttritubeInfo.ts";

const attrTypesFname = "./src/attributes/htmlAttritubetypes.ts";

const now = new Date().toLocaleString("en-US", { timeZoneName: "short" });

const data = await getAttr();

await $.sleep(3000);

await (async function () {
  const attrStringArray = data.attrNames.map((i) => `"${i}"`);
  const attrString = attrStringArray.join(" | ");
  const txt = `
  // Do not edit, this is generated file, last update at ${now}
  
  export type HTMLAttritubeNames = ${attrString}
  `;
  await fs.writeFile(attrTypesFname, txt);
  await $`npx biome format ${attrTypesFname} --write`;
})();

const dataText = tsTemplate(data.tableData, data.attrNames, now);

await (async function () {
  await fs.writeFile(attrInfoFname, dataText.attrInfo);
  await $`npx biome format ${attrInfoFname} --write`;
})();

await (async function () {
  await fs.writeFile(attrNamesFname, dataText.attrName);
  await $`npx biome format ${attrNamesFname} --write`;
})();
