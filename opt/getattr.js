import * as cheerio from "cheerio";
import $ from "dax-sh";

export async function getAttr() {
  const url =
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes";
  const data = await $.request(url).text();
  const a = cheerio.load(data);
  const table = a(".standard-table");
  const tableData = {};
  table.find("tr").each((index, row) => {
    const columns = a(row).find("td");
    if (columns.length >= 2) {
      // first col
      const k = a(columns[0]);
      const _url = k.find("a").attr("href") || k.find("a").attr("data-href");
      const url_ =
        _url !== undefined
          ? { MDN: `https://developer.mozilla.org${_url}` }
          : {};
      let key = k.text().trim();
      // find Deprecated
      const deprecated_ = /Deprecated/.test(key) ? { deprecated: true } : {};
      // find Experimental
      const experimental_ = /Experimental/.test(key)
        ? { experimental: true }
        : {};
      key = key
        .replace(/Deprecated/, "")
        .replace(/Experimental/, "")
        .replace(/\s+/g, "");
      // second col - elements list
      const _e = a(columns[1])
        .text()
        .trim()
        .replace(/\s+/g, "")
        .replace(/>/g, "")
        .replace(/</g, "")
        .replace(/Globalattribute/, "Global_Attribute")
        .replace(/imageelementsinsideansvg/, "image")
        .replace(/posterimagesofvideoelements/, "")
        .replace(/elementswhichhaveabackground-image/, "")
        .replace(/andelementscontainingtextnodes/, "")
        .replace(/suchasap/, "p")
        .split(",")
        .filter((i) => i !== "");
      // third col - description
      const isd = a(columns[2]).text().trim();
      const des = isd.split("Note:")[0].replace(/\s+/g, " ").replace(/\"/g, "");
      const note_ = isd.split("Note:")[1];
      const note =
        note_ !== null || note_ !== "" || note_ !== undefined
          ? { note: note_?.replace(/\s+/g, " ") }
          : {};
      const value = {
        elements: _e,
        description: des,
        ...url_,
        ...deprecated_,
        ...experimental_,
        ...note,
      };

      tableData[key] = value;
    }
  });
  const attrNames = Array.from(Object.keys(tableData));
  return {
    tableData,
    attrNames,
  };
}