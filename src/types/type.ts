import type { HTMLGlobalAttributes, HtmlLang } from "./global-type";
import type { Target, ReferrerPolicy } from "./global-type";
import type { AttrRel, AttrAs, InputElType } from "./global-type";

export interface HTMLHtmlAttributes extends HTMLGlobalAttributes {}
export interface HTMLHeadAttributes extends HTMLGlobalAttributes {}
export interface HTMLBodyAttributes extends HTMLGlobalAttributes {
  background?: string | string[];
  bgcolor?: string | string[];
}
export interface HTMLBaseAttributes extends HTMLGlobalAttributes {
  href?: string | string[];
  target?: Target;
}
export interface HTMLLinkAttributes extends HTMLGlobalAttributes {
  as?: AttrAs;
  crossorigin?: string | string[];
  href?: string | string[];
  hreflang?: HtmlLang;
  integrity?: string | string[];
  media?: string | string[];
  referrerpolicy?: ReferrerPolicy;
  rel?: AttrRel;
  sizes?: string | string[];
  type?: string | string[];
}
export interface HTMLMetaAttributes extends HTMLGlobalAttributes {
  charset?: string | string[];
  content?: string | string[];
  "http-equiv"?: string | string[];
  name?: string | string[];
}
export interface HTMLScriptAttributes extends HTMLGlobalAttributes {
  async?: string | string[];
  crossorigin?: string | string[];
  defer?: string | string[];
  integrity?: string | string[];
  language?: HtmlLang;
  referrerpolicy?: ReferrerPolicy;
  src?: string | string[];
  type?: string | string[];
}
export interface HTMLStyleAttributes extends HTMLGlobalAttributes {
  media?: string | string[];
  "scopedNon-standard"?: string | string[];
  type?: string | string[];
}
export interface HTMLTitleAttributes extends HTMLGlobalAttributes {}
// ---
export interface HTMLAnchorAttributes extends HTMLGlobalAttributes {
  download?: string | string[];
  href?: string | string[];
  hreflang?: HtmlLang;
  media?: string | string[];
  ping?: string | string[];
  referrerpolicy?: ReferrerPolicy;
  rel?: AttrRel;
  shape?: string | string[];
  target?: Target;
}
// -----------------------
export interface HTMLAbbrAttributes extends HTMLGlobalAttributes {}
export interface HTMLAddressAttributes extends HTMLGlobalAttributes {}
export interface HTMLAreaAttributes extends HTMLGlobalAttributes {
  alt?: string | string[];
  coords?: string | string[];
  download?: string | string[];
  href?: string | string[];
  media?: string | string[];
  ping?: string | string[];
  referrerpolicy?: string | string[];
  rel?: AttrRel;
  shape?: string | string[];
  target?: string | string[];
}
export interface HTMLArticleAttributes extends HTMLGlobalAttributes {}
export interface HTMLAsideAttributes extends HTMLGlobalAttributes {}
export interface HTMLAudioAttributes extends HTMLGlobalAttributes {
  autoplay?: string | string[];
  controls?: string | string[];
  crossorigin?: string | string[];
  loop?: string | string[];
  muted?: string | string[];
  preload?: string | string[];
  src?: string | string[];
}
export interface HTMLBAttributes extends HTMLGlobalAttributes {}
export interface HTMLBdiAttributes extends HTMLGlobalAttributes {}
export interface HTMLBdoAttributes extends HTMLGlobalAttributes {}
export interface HTMLBlockquoteAttributes extends HTMLGlobalAttributes {
  cite?: string | string[];
}
export interface HTMLBrAttributes extends HTMLGlobalAttributes {}
export interface HTMLButtonAttributes extends HTMLGlobalAttributes {
  disabled?: string | string[] | "";
  form?: string | string[];
  formaction?: string | string[];
  formenctype?: string | string[];
  formmethod?: string | string[];
  formnovalidate?: string | string[];
  formtarget?: string | string[];
  name?: string | string[];
  type?: string | string[];
  value?: string | string[];
}
export interface HTMLCanvasAttributes extends HTMLGlobalAttributes {
  height?: string | string[];
  width?: string | string[];
}
export interface HTMLCaptionAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
}
export interface HTMLCiteAttributes extends HTMLGlobalAttributes {}
export interface HTMLCodeAttributes extends HTMLGlobalAttributes {}
export interface HTMLColAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  bgcolor?: string | string[];
  span?: string | string[];
}
export interface HTMLColgroupAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  bgcolor?: string | string[];
  span?: string | string[];
}
export interface HTMLDataAttributes extends HTMLGlobalAttributes {
  value?: string | string[];
}
export interface HTMLDatalistAttributes extends HTMLGlobalAttributes {}
export interface HTMLDdAttributes extends HTMLGlobalAttributes {}
export interface HTMLDelAttributes extends HTMLGlobalAttributes {
  cite?: string | string[];
  datetime?: string | string[];
}
export interface HTMLDetailsAttributes extends HTMLGlobalAttributes {
  open?: string | string[];
}
export interface HTMLDfnAttributes extends HTMLGlobalAttributes {}
export interface HTMLDialogAttributes extends HTMLGlobalAttributes {
  open?: string | string[];
}
export interface HTMLDivAttributes extends HTMLGlobalAttributes {}
export interface HTMLDlAttributes extends HTMLGlobalAttributes {}
export interface HTMLDtAttributes extends HTMLGlobalAttributes {}
export interface HTMLEmAttributes extends HTMLGlobalAttributes {}
export interface HTMLEmbedAttributes extends HTMLGlobalAttributes {
  height?: string | string[];
  src?: string | string[];
  type?: string | string[];
  width?: string | string[];
}
export interface HTMLFieldsetAttributes extends HTMLGlobalAttributes {
  disabled?: string | string[];
  form?: string | string[];
  name?: string | string[];
}
export interface HTMLFigcaptionAttributes extends HTMLGlobalAttributes {}
export interface HTMLFigureAttributes extends HTMLGlobalAttributes {}
export interface HTMLFooterAttributes extends HTMLGlobalAttributes {}
export interface HTMLFormAttributes extends HTMLGlobalAttributes {
  accept?: string | string[];
  "accept-charset"?: string | string[];
  action?: string | string[];
  autocomplete?: string | string[];
  enctype?: string | string[];
  method?: string | string[];
  name?: string | string[];
  novalidate?: string | string[];
  target?: string | string[];
}
export interface HTMLH1Attributes extends HTMLGlobalAttributes {}
export interface HTMLHeaderAttributes extends HTMLGlobalAttributes {}
export interface HTMLHgroupAttributes extends HTMLGlobalAttributes {}
export interface HTMLHrAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  color?: string | string[];
}
export interface HTMLIAttributes extends HTMLGlobalAttributes {}
export interface HTMLIframeAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  allow?: string | string[];
  csp?: string | string[];
  height?: string | string[];
  loading?: string | string[];
  name?: string | string[];
  referrerpolicy?: string | string[];
  sandbox?: string | string[];
  src?: string | string[];
  srcdoc?: string | string[];
  width?: string | string[];
}
export interface HTMLImgAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  alt?: string | string[];
  border?: string | string[];
  crossorigin?: string | string[];
  decoding?: string | string[];
  elementtiming?: string | string[];
  height?: string | string[];
  intrinsicsize?: string | string[];
  ismap?: string | string[];
  loading?: string | string[];
  referrerpolicy?: string | string[];
  sizes?: string | string[];
  src?: string | string[];
  srcset?: string | string[];
  usemap?: string | string[];
  width?: string | string[];
}
export interface HTMLInputAttributes extends HTMLGlobalAttributes {
  accept?: string | string[];
  alt?: string | string[];
  autocomplete?: string | string[];
  capture?: string | string[];
  checked?: string | string[];
  dirname?: string | string[];
  disabled?: string | string[];
  form?: string | string[];
  formaction?: string | string[];
  formenctype?: string | string[];
  formmethod?: string | string[];
  formnovalidate?: string | string[];
  formtarget?: string | string[];
  height?: string | string[];
  list?: string | string[];
  max?: string | string[];
  maxlength?: string | string[];
  minlength?: string | string[];
  min?: string | string[];
  multiple?: string | string[];
  name?: string | string[];
  pattern?: string | string[];
  placeholder?: string | string[];
  readonly?: string | string[];
  required?: string | string[];
  size?: string | string[];
  src?: string | string[];
  step?: string | string[];
  type?: string | string[];
  usemap?: string | string[];
  value?: string | string[];
  width?: string | string[];
}
export interface HTMLInsAttributes extends HTMLGlobalAttributes {
  cite?: string | string[];
  datetime?: string | string[];
}
export interface HTMLKbdAttributes extends HTMLGlobalAttributes {}
export interface HTMLLabelAttributes extends HTMLGlobalAttributes {
  for?: string | string[];
  form?: string | string[];
}
export interface HTMLLegendAttributes extends HTMLGlobalAttributes {}
export interface HTMLLiAttributes extends HTMLGlobalAttributes {
  value?: string | string[];
}
export interface HTMLMainAttributes extends HTMLGlobalAttributes {}
export interface HTMLMapAttributes extends HTMLGlobalAttributes {
  name?: string | string[];
}
export interface HTMLMarkAttributes extends HTMLGlobalAttributes {}
export interface HTMLMenuAttributes extends HTMLGlobalAttributes {
  type?: string | string[];
}
export interface HTMLMeterAttributes extends HTMLGlobalAttributes {
  form?: string | string[];
  high?: string | string[];
  low?: string | string[];
  max?: string | string[];
  min?: string | string[];
  optimum?: string | string[];
  value?: string | string[];
}
export interface HTMLNavAttributes extends HTMLGlobalAttributes {}
export interface HTMLNoscriptAttributes extends HTMLGlobalAttributes {}
export interface HTMLObjectAttributes extends HTMLGlobalAttributes {
  border?: string | string[];
  data?: string | string[];
  form?: string | string[];
  height?: string | string[];
  name?: string | string[];
  type?: string | string[];
  usemap?: string | string[];
  width?: string | string[];
}
export interface HTMLOlAttributes extends HTMLGlobalAttributes {
  reversed?: string | string[];
  start?: string | string[];
  type?: string | string[];
}
export interface HTMLOptgroupAttributes extends HTMLGlobalAttributes {
  disabled?: string | string[];
  label?: string | string[];
}
export interface HTMLOptionAttributes extends HTMLGlobalAttributes {
  disabled?: string | string[];
  label?: string | string[];
  selected?: string | string[];
  value?: string | string[];
}
export interface HTMLOutputAttributes extends HTMLGlobalAttributes {
  for?: string | string[];
  form?: string | string[];
  name?: string | string[];
}
export interface HTMLPAttributes extends HTMLGlobalAttributes {
  elementtiming?: string | string[];
}
export interface HTMLPictureAttributes extends HTMLGlobalAttributes {}
export interface HTMLPreAttributes extends HTMLGlobalAttributes {}
export interface HTMLProgressAttributes extends HTMLGlobalAttributes {
  form?: string | string[];
  max?: string | string[];
  value?: string | string[];
}
export interface HTMLQAttributes extends HTMLGlobalAttributes {
  cite?: string | string[];
}
export interface HTMLRpAttributes extends HTMLGlobalAttributes {}
export interface HTMLRtAttributes extends HTMLGlobalAttributes {}
export interface HTMLRubyAttributes extends HTMLGlobalAttributes {}
export interface HTMLSAttributes extends HTMLGlobalAttributes {}
export interface HTMLSampAttributes extends HTMLGlobalAttributes {}
export interface HTMLSearchAttributes extends HTMLGlobalAttributes {}
export interface HTMLSectionAttributes extends HTMLGlobalAttributes {}
export interface HTMLSelectAttributes extends HTMLGlobalAttributes {
  autocomplete?: string | string[];
  disabled?: string | string[];
  form?: string | string[];
  multiple?: string | string[];
  name?: string | string[];
  required?: string | string[];
  size?: string | string[];
}
export interface HTMLSlotAttributes extends HTMLGlobalAttributes {}
export interface HTMLSmallAttributes extends HTMLGlobalAttributes {}
export interface HTMLSourceAttributes extends HTMLGlobalAttributes {
  media?: string | string[];
  sizes?: string | string[];
  src?: string | string[];
  srcset?: string | string[];
  type?: string | string[];
}
export interface HTMLSpanAttributes extends HTMLGlobalAttributes {}
export interface HTMLStrongAttributes extends HTMLGlobalAttributes {}
export interface HTMLSubAttributes extends HTMLGlobalAttributes {}
export interface HTMLSummaryAttributes extends HTMLGlobalAttributes {}
export interface HTMLSupAttributes extends HTMLGlobalAttributes {}
export interface HTMLTableAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  background?: string | string[];
  bgcolor?: string | string[];
  border?: string | string[];
  summary?: string | string[];
}
export interface HTMLTbodyAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  bgcolor?: string | string[];
}
export interface HTMLTdAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  background?: string | string[];
  bgcolor?: string | string[];
  colspan?: string | string[];
  headers?: string | string[];
  rowspan?: string | string[];
}
export interface HTMLTemplateAttributes extends HTMLGlobalAttributes {}
export interface HTMLTextareaAttributes extends HTMLGlobalAttributes {
  autocomplete?: string | string[];
  cols?: string | string[];
  dirname?: string | string[];
  disabled?: string | string[];
  enterkeyhint?: string | string[];
  form?: string | string[];
  inputmode?: string | string[];
  maxlength?: string | string[];
  minlength?: string | string[];
  name?: string | string[];
  placeholder?: string | string[];
  readonly?: string | string[];
  required?: string | string[];
  rows?: string | string[];
  wrap?: string | string[];
}
export interface HTMLTfootAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  bgcolor?: string | string[];
}
export interface HTMLThAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  background?: string | string[];
  bgcolor?: string | string[];
  colspan?: string | string[];
  headers?: string | string[];
  rowspan?: string | string[];
  scope?: string | string[];
}
export interface HTMLTheadAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
}
export interface HTMLTimeAttributes extends HTMLGlobalAttributes {
  datetime?: string | string[];
}
export interface HTMLTrAttributes extends HTMLGlobalAttributes {
  align?: string | string[];
  bgcolor?: string | string[];
}
export interface HTMLTrackAttributes extends HTMLGlobalAttributes {
  default?: string | string[];
  kind?: string | string[];
  label?: string | string[];
  src?: string | string[];
  srclang?: string | string[];
}
export interface HTMLUAttributes extends HTMLGlobalAttributes {}
export interface HTMLUlAttributes extends HTMLGlobalAttributes {}
export interface HTMLVarAttributes extends HTMLGlobalAttributes {}
export interface HTMLVideoAttributes extends HTMLGlobalAttributes {
  autoplay?: string | string[];
  controls?: string | string[];
  crossorigin?: string | string[];
  height?: string | string[];
  loop?: string | string[];
  muted?: string | string[];
  playsinline?: string | string[];
  poster?: string | string[];
  preload?: string | string[];
  src?: string | string[];
  width?: string | string[];
}
export interface HTMLWbrAttributes extends HTMLGlobalAttributes {}

export interface HTMLAttributesMap {
  html: HTMLHtmlAttributes;
  head: HTMLHeadAttributes;
  body: HTMLBodyAttributes;
  base: HTMLBaseAttributes;
  link: HTMLLinkAttributes;
  meta: HTMLMetaAttributes;
  script: HTMLScriptAttributes;
  style: HTMLStyleAttributes;
  title: HTMLTitleAttributes;
  a: HTMLAnchorAttributes;
  abbr: HTMLAbbrAttributes;
  address: HTMLAddressAttributes;
  area: HTMLAreaAttributes;
  article: HTMLArticleAttributes;
  aside: HTMLAsideAttributes;
  audio: HTMLAudioAttributes;
  b: HTMLBAttributes;
  bdi: HTMLBdiAttributes;
  bdo: HTMLBdoAttributes;
  blockquote: HTMLBlockquoteAttributes;
  br: HTMLBrAttributes;
  button: HTMLButtonAttributes;
  canvas: HTMLCanvasAttributes;
  caption: HTMLCaptionAttributes;
  cite: HTMLCiteAttributes;
  code: HTMLCodeAttributes;
  col: HTMLColAttributes;
  colgroup: HTMLColgroupAttributes;
  data: HTMLDataAttributes;
  datalist: HTMLDatalistAttributes;
  dd: HTMLDdAttributes;
  del: HTMLDelAttributes;
  details: HTMLDetailsAttributes;
  dfn: HTMLDfnAttributes;
  dialog: HTMLDialogAttributes;
  div: HTMLDivAttributes;
  dl: HTMLDlAttributes;
  dt: HTMLDtAttributes;
  em: HTMLEmAttributes;
  embed: HTMLEmbedAttributes;
  fieldset: HTMLFieldsetAttributes;
  figcaption: HTMLFigcaptionAttributes;
  figure: HTMLFigureAttributes;
  footer: HTMLFooterAttributes;
  form: HTMLFormAttributes;
  h1: HTMLH1Attributes;
  header: HTMLHeaderAttributes;
  hgroup: HTMLHgroupAttributes;
  hr: HTMLHrAttributes;
  i: HTMLIAttributes;
  iframe: HTMLIframeAttributes;
  img: HTMLImgAttributes;
  input: HTMLInputAttributes;
  ins: HTMLInsAttributes;
  kbd: HTMLKbdAttributes;
  label: HTMLLabelAttributes;
  legend: HTMLLegendAttributes;
  li: HTMLLiAttributes;
  main: HTMLMainAttributes;
  map: HTMLMapAttributes;
  mark: HTMLMarkAttributes;
  menu: HTMLMenuAttributes;
  meter: HTMLMeterAttributes;
  nav: HTMLNavAttributes;
  noscript: HTMLNoscriptAttributes;
  object: HTMLObjectAttributes;
  ol: HTMLOlAttributes;
  optgroup: HTMLOptgroupAttributes;
  option: HTMLOptionAttributes;
  output: HTMLOutputAttributes;
  p: HTMLPAttributes;
  picture: HTMLPictureAttributes;
  pre: HTMLPreAttributes;
  progress: HTMLProgressAttributes;
  q: HTMLQAttributes;
  rp: HTMLRpAttributes;
  rt: HTMLRtAttributes;
  ruby: HTMLRubyAttributes;
  s: HTMLSAttributes;
  samp: HTMLSampAttributes;
  search: HTMLSearchAttributes;
  section: HTMLSectionAttributes;
  select: HTMLSelectAttributes;
  slot: HTMLSlotAttributes;
  small: HTMLSmallAttributes;
  source: HTMLSourceAttributes;
  span: HTMLSpanAttributes;
  strong: HTMLStrongAttributes;
  sub: HTMLSubAttributes;
  summary: HTMLSummaryAttributes;
  sup: HTMLSupAttributes;
  table: HTMLTableAttributes;
  tbody: HTMLTbodyAttributes;
  td: HTMLTdAttributes;
  template: HTMLTemplateAttributes;
  textarea: HTMLTextareaAttributes;
  tfoot: HTMLTfootAttributes;
  th: HTMLThAttributes;
  thead: HTMLTheadAttributes;
  time: HTMLTimeAttributes;
  tr: HTMLTrAttributes;
  track: HTMLTrackAttributes;
  u: HTMLUAttributes;
  ul: HTMLUlAttributes;
  var: HTMLVarAttributes;
  video: HTMLVideoAttributes;
  wbr: HTMLWbrAttributes;
}
