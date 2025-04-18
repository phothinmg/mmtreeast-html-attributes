export function tsTemplate(info, attrNames) {
  const object = JSON.stringify(info);
  const object2 = JSON.stringify(attrNames);
  const attrInfo = `
    import type {HTMLAttributeNames} from "./htmlAttributeTypes"
  
    type HTMLAttributeInfoValues = {
    /**
	   * An array of HTML attribute names.
	  */
    elements: string | string[];
    /**
	   * Short description of this attribute.
	  */
    description?: string;
    /**
	  * MDN link for this attribute, if it is undefined, deprecated or the documentation has not yet been written.
	  */
    MDN?: string;
    /**
	   * If this attribute is deprecated return \`true\`(not for use in new websites) otherwise \`undefined\`.
	  */
    deprecated?: boolean;
    /**
	   * If this attribute is experimental return \`true\`( expect behavior to change in the future) otherwise \`undefined\`.
	  */
    experimental?: boolean;
    /**
	   * Additional information provided by MDN if it is exist, otherwise \`undefined\`.
	  */
    note?: string;
    };
    export type HTMLAttributeInfo = Record<HTMLAttributeNames, HTMLAttributeInfoValues>;
    
    export const htmlAttributeInfo: HTMLAttributeInfo = Object.freeze(JSON.parse(\`${object}\`));
    `;
  const attrName = `
     export const htmlAttributeNames: string[] = Object.freeze(JSON.parse(\`${object2}\`));
    `;

  return { attrInfo, attrName };
}
