export function tsTemplate(info, attrNames, ctime) {
  const object = JSON.stringify(info);
  const object2 = JSON.stringify(attrNames);
  const attrInfo = `
    // Do not edit, this is generated file, last update at ${ctime}
  
    import type {HTMLAttritubeNames} from "./htmlAttritubetypes"
  
    type HTMLAttritubeInfoValues = {
    elements: string | string[];
    description?: string;
    MDN?: string;
    deprecated?: boolean;
    experimental?: boolean;
    note?: string;
    };
    export type HTMLAttritubeInfo = Record<HTMLAttritubeNames, HTMLAttritubeInfoValues>;
    
    export const htmlAttributeInfo: HTMLAttritubeInfo = Object.assign(JSON.parse(\`${object}\`));
    `;
  const attrName = `
    // Do not edit, this is generated file, last update at ${ctime}
  
    export const htmlAttributeNames: string[] = Object.assign(JSON.parse(\`${object2}\`));
    `;

  return { attrInfo, attrName };
}
