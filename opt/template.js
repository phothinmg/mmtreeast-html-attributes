export function tsTemplate(info, attrNames) {
  const object = JSON.stringify(info);
  const object2 = JSON.stringify(attrNames);
  const attrInfo = `
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
    
    export const htmlAttributeInfo: HTMLAttritubeInfo = Object.freeze(JSON.parse(\`${object}\`));
    `;
  const attrName = `
     export const htmlAttributeNames: string[] = Object.freeze(JSON.parse(\`${object2}\`));
    `;

  return { attrInfo, attrName };
}
