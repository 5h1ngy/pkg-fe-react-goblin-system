import { j as zn } from "../../.chunks/CYK1ROHF.js";
function lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Oo(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const Io = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ro = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Mo = {};
function zr(e, n) {
  return (Mo.jsx ? Ro : Io).test(e);
}
const Do = /[ \t\n\f\r]/g;
function Lo(e) {
  return typeof e == "object" ? e.type === "text" ? Ur(e.value) : !1 : Ur(e);
}
function Ur(e) {
  return e.replace(Do, "") === "";
}
class qn {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(n, t, r) {
    this.property = n, this.normal = t, r && (this.space = r);
  }
}
qn.prototype.property = {};
qn.prototype.normal = {};
qn.prototype.space = null;
function zi(e, n) {
  const t = {}, r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
  return new qn(t, r, n);
}
function Qt(e) {
  return e.toLowerCase();
}
class He {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(n, t) {
    this.property = n, this.attribute = t;
  }
}
He.prototype.space = null;
He.prototype.boolean = !1;
He.prototype.booleanish = !1;
He.prototype.overloadedBoolean = !1;
He.prototype.number = !1;
He.prototype.commaSeparated = !1;
He.prototype.spaceSeparated = !1;
He.prototype.commaOrSpaceSeparated = !1;
He.prototype.mustUseProperty = !1;
He.prototype.defined = !1;
let Po = 0;
const J = bn(), ke = bn(), Ui = bn(), v = bn(), me = bn(), An = bn(), Fe = bn();
function bn() {
  return 2 ** ++Po;
}
const Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: J,
  booleanish: ke,
  commaOrSpaceSeparated: Fe,
  commaSeparated: An,
  number: v,
  overloadedBoolean: Ui,
  spaceSeparated: me
}, Symbol.toStringTag, { value: "Module" })), It = Object.keys(Jt);
class cr extends He {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(n, t, r, i) {
    let o = -1;
    if (super(n, t), $r(this, "space", i), typeof r == "number")
      for (; ++o < It.length; ) {
        const a = It[o];
        $r(this, It[o], (r & Jt[a]) === Jt[a]);
      }
  }
}
cr.prototype.defined = !0;
function $r(e, n, t) {
  t && (e[n] = t);
}
const Bo = {}.hasOwnProperty;
function Cn(e) {
  const n = {}, t = {};
  let r;
  for (r in e.properties)
    if (Bo.call(e.properties, r)) {
      const i = e.properties[r], o = new cr(
        r,
        e.transform(e.attributes || {}, r),
        i,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[Qt(r)] = r, t[Qt(o.attribute)] = r;
    }
  return new qn(n, t, e.space);
}
const $i = Cn({
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Hi = Cn({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Gi(e, n) {
  return n in e ? e[n] : n;
}
function Ki(e, n) {
  return Gi(e, n.toLowerCase());
}
const qi = Cn({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Ki,
  properties: { xmlns: null, xmlnsXLink: null }
}), Wi = Cn({
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ke,
    ariaAutoComplete: null,
    ariaBusy: ke,
    ariaChecked: ke,
    ariaColCount: v,
    ariaColIndex: v,
    ariaColSpan: v,
    ariaControls: me,
    ariaCurrent: null,
    ariaDescribedBy: me,
    ariaDetails: null,
    ariaDisabled: ke,
    ariaDropEffect: me,
    ariaErrorMessage: null,
    ariaExpanded: ke,
    ariaFlowTo: me,
    ariaGrabbed: ke,
    ariaHasPopup: null,
    ariaHidden: ke,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: me,
    ariaLevel: v,
    ariaLive: null,
    ariaModal: ke,
    ariaMultiLine: ke,
    ariaMultiSelectable: ke,
    ariaOrientation: null,
    ariaOwns: me,
    ariaPlaceholder: null,
    ariaPosInSet: v,
    ariaPressed: ke,
    ariaReadOnly: ke,
    ariaRelevant: null,
    ariaRequired: ke,
    ariaRoleDescription: me,
    ariaRowCount: v,
    ariaRowIndex: v,
    ariaRowSpan: v,
    ariaSelected: ke,
    ariaSetSize: v,
    ariaSort: null,
    ariaValueMax: v,
    ariaValueMin: v,
    ariaValueNow: v,
    ariaValueText: null,
    role: null
  }
}), Fo = Cn({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Ki,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: An,
    acceptCharset: me,
    accessKey: me,
    action: null,
    allow: null,
    allowFullScreen: J,
    allowPaymentRequest: J,
    allowUserMedia: J,
    alt: null,
    as: null,
    async: J,
    autoCapitalize: null,
    autoComplete: me,
    autoFocus: J,
    autoPlay: J,
    blocking: me,
    capture: null,
    charSet: null,
    checked: J,
    cite: null,
    className: me,
    cols: v,
    colSpan: null,
    content: null,
    contentEditable: ke,
    controls: J,
    controlsList: me,
    coords: v | An,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: J,
    defer: J,
    dir: null,
    dirName: null,
    disabled: J,
    download: Ui,
    draggable: ke,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: J,
    formTarget: null,
    headers: me,
    height: v,
    hidden: J,
    high: v,
    href: null,
    hrefLang: null,
    htmlFor: me,
    httpEquiv: me,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: J,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: J,
    itemId: null,
    itemProp: me,
    itemRef: me,
    itemScope: J,
    itemType: me,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: J,
    low: v,
    manifest: null,
    max: null,
    maxLength: v,
    media: null,
    method: null,
    min: null,
    minLength: v,
    multiple: J,
    muted: J,
    name: null,
    nonce: null,
    noModule: J,
    noValidate: J,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: J,
    optimum: v,
    pattern: null,
    ping: me,
    placeholder: null,
    playsInline: J,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: J,
    referrerPolicy: null,
    rel: me,
    required: J,
    reversed: J,
    rows: v,
    rowSpan: v,
    sandbox: me,
    scope: null,
    scoped: J,
    seamless: J,
    selected: J,
    shadowRootClonable: J,
    shadowRootDelegatesFocus: J,
    shadowRootMode: null,
    shape: null,
    size: v,
    sizes: null,
    slot: null,
    span: v,
    spellCheck: ke,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: v,
    step: null,
    style: null,
    tabIndex: v,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: J,
    useMap: null,
    value: ke,
    width: v,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: me,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: v,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: v,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: J,
    // Lists. Use CSS to reduce space between items instead
    declare: J,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: v,
    // `<img>` and `<object>`
    leftMargin: v,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: v,
    // `<body>`
    marginWidth: v,
    // `<body>`
    noResize: J,
    // `<frame>`
    noHref: J,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: J,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: J,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: v,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ke,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: v,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: v,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: J,
    disableRemotePlayback: J,
    prefix: null,
    property: null,
    results: v,
    security: null,
    unselectable: null
  }
}), zo = Cn({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Gi,
  properties: {
    about: Fe,
    accentHeight: v,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: v,
    amplitude: v,
    arabicForm: null,
    ascent: v,
    attributeName: null,
    attributeType: null,
    azimuth: v,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: v,
    by: null,
    calcMode: null,
    capHeight: v,
    className: me,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: v,
    diffuseConstant: v,
    direction: null,
    display: null,
    dur: null,
    divisor: v,
    dominantBaseline: null,
    download: J,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: v,
    enableBackground: null,
    end: null,
    event: null,
    exponent: v,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: v,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: An,
    g2: An,
    glyphName: An,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: v,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: v,
    horizOriginX: v,
    horizOriginY: v,
    id: null,
    ideographic: v,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: v,
    k: v,
    k1: v,
    k2: v,
    k3: v,
    k4: v,
    kernelMatrix: Fe,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: v,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: v,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: v,
    overlineThickness: v,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: v,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: me,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: v,
    pointsAtY: v,
    pointsAtZ: v,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Fe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Fe,
    rev: Fe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Fe,
    requiredFeatures: Fe,
    requiredFonts: Fe,
    requiredFormats: Fe,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: v,
    specularExponent: v,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: v,
    strikethroughThickness: v,
    string: null,
    stroke: null,
    strokeDashArray: Fe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: v,
    strokeOpacity: v,
    strokeWidth: null,
    style: null,
    surfaceScale: v,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Fe,
    tabIndex: v,
    tableValues: null,
    target: null,
    targetX: v,
    targetY: v,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Fe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: v,
    underlineThickness: v,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: v,
    values: null,
    vAlphabetic: v,
    vMathematical: v,
    vectorEffect: null,
    vHanging: v,
    vIdeographic: v,
    version: null,
    vertAdvY: v,
    vertOriginX: v,
    vertOriginY: v,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: v,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Uo = /^data[-\w.:]+$/i, Hr = /-[a-z]/g, $o = /[A-Z]/g;
function Ho(e, n) {
  const t = Qt(n);
  let r = n, i = He;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Uo.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(Hr, Ko);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!Hr.test(o)) {
        let a = o.replace($o, Go);
        a.charAt(0) !== "-" && (a = "-" + a), n = "data" + a;
      }
    }
    i = cr;
  }
  return new i(r, n);
}
function Go(e) {
  return "-" + e.toLowerCase();
}
function Ko(e) {
  return e.charAt(1).toUpperCase();
}
const qo = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Wo = zi([Hi, $i, qi, Wi, Fo], "html"), ur = zi([Hi, $i, qi, Wi, zo], "svg");
function Vo(e) {
  return e.join(" ").trim();
}
var wn = {}, Rt, Gr;
function Yo() {
  if (Gr) return Rt;
  Gr = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, t = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, a = /^[;\s]*/, s = /^\s+|\s+$/g, c = `
`, l = "/", d = "*", u = "", f = "comment", p = "declaration";
  Rt = function(_, k) {
    if (typeof _ != "string")
      throw new TypeError("First argument must be a string");
    if (!_) return [];
    k = k || {};
    var E = 1, x = 1;
    function S(B) {
      var R = B.match(n);
      R && (E += R.length);
      var F = B.lastIndexOf(c);
      x = ~F ? B.length - F : x + B.length;
    }
    function A() {
      var B = { line: E, column: x };
      return function(R) {
        return R.position = new C(B), K(), R;
      };
    }
    function C(B) {
      this.start = B, this.end = { line: E, column: x }, this.source = k.source;
    }
    C.prototype.content = _;
    function y(B) {
      var R = new Error(
        k.source + ":" + E + ":" + x + ": " + B
      );
      if (R.reason = B, R.filename = k.source, R.line = E, R.column = x, R.source = _, !k.silent) throw R;
    }
    function U(B) {
      var R = B.exec(_);
      if (R) {
        var F = R[0];
        return S(F), _ = _.slice(F.length), R;
      }
    }
    function K() {
      U(t);
    }
    function H(B) {
      var R;
      for (B = B || []; R = w(); )
        R !== !1 && B.push(R);
      return B;
    }
    function w() {
      var B = A();
      if (!(l != _.charAt(0) || d != _.charAt(1))) {
        for (var R = 2; u != _.charAt(R) && (d != _.charAt(R) || l != _.charAt(R + 1)); )
          ++R;
        if (R += 2, u === _.charAt(R - 1))
          return y("End of comment missing");
        var F = _.slice(2, R - 2);
        return x += 2, S(F), _ = _.slice(R), x += 2, B({
          type: f,
          comment: F
        });
      }
    }
    function L() {
      var B = A(), R = U(r);
      if (R) {
        if (w(), !U(i)) return y("property missing ':'");
        var F = U(o), re = B({
          type: p,
          property: g(R[0].replace(e, u)),
          value: F ? g(F[0].replace(e, u)) : u
        });
        return U(a), re;
      }
    }
    function P() {
      var B = [];
      H(B);
      for (var R; R = L(); )
        R !== !1 && (B.push(R), H(B));
      return B;
    }
    return K(), P();
  };
  function g(_) {
    return _ ? _.replace(s, u) : u;
  }
  return Rt;
}
var Kr;
function Zo() {
  if (Kr) return wn;
  Kr = 1;
  var e = wn && wn.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(wn, "__esModule", { value: !0 }), wn.default = t;
  var n = e(Yo());
  function t(r, i) {
    var o = null;
    if (!r || typeof r != "string")
      return o;
    var a = (0, n.default)(r), s = typeof i == "function";
    return a.forEach(function(c) {
      if (c.type === "declaration") {
        var l = c.property, d = c.value;
        s ? i(l, d, c) : d && (o = o || {}, o[l] = d);
      }
    }), o;
  }
  return wn;
}
var Xo = Zo();
const qr = /* @__PURE__ */ lr(Xo), Qo = qr.default || qr, Vi = Yi("end"), dr = Yi("start");
function Yi(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Jo(e) {
  const n = dr(e), t = Vi(e);
  if (n && t)
    return { start: n, end: t };
}
function Un(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Wr(e.position) : "start" in e || "end" in e ? Wr(e) : "line" in e || "column" in e ? jt(e) : "";
}
function jt(e) {
  return Vr(e && e.line) + ":" + Vr(e && e.column);
}
function Wr(e) {
  return jt(e && e.start) + "-" + jt(e && e.end);
}
function Vr(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ae extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", o = {}, a = !1;
    if (t && ("line" in t && "column" in t ? o = { place: t } : "start" in t && "end" in t ? o = { place: t } : "type" in t ? o = {
      ancestors: [t],
      place: t.position
    } : o = { ...t }), typeof n == "string" ? i = n : !o.cause && n && (a = !0, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
      const c = r.indexOf(":");
      c === -1 ? o.ruleId = r : (o.source = r.slice(0, c), o.ruleId = r.slice(c + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const c = o.ancestors[o.ancestors.length - 1];
      c && (o.place = c.position);
    }
    const s = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = Un(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Ae.prototype.file = "";
Ae.prototype.name = "";
Ae.prototype.reason = "";
Ae.prototype.message = "";
Ae.prototype.stack = "";
Ae.prototype.column = void 0;
Ae.prototype.line = void 0;
Ae.prototype.ancestors = void 0;
Ae.prototype.cause = void 0;
Ae.prototype.fatal = void 0;
Ae.prototype.place = void 0;
Ae.prototype.ruleId = void 0;
Ae.prototype.source = void 0;
const pr = {}.hasOwnProperty, jo = /* @__PURE__ */ new Map(), es = /[A-Z]/g, ns = /-([a-z])/g, ts = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), rs = /* @__PURE__ */ new Set(["td", "th"]), Zi = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function is(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = ps(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = ds(t, n.jsx, n.jsxs);
  }
  const i = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: r,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: t,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? ur : Wo,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, o = Xi(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Xi(e, n, t) {
  if (n.type === "element")
    return as(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return os(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return ls(e, n, t);
  if (n.type === "mdxjsEsm")
    return ss(e, n);
  if (n.type === "root")
    return cs(e, n, t);
  if (n.type === "text")
    return us(e, n);
}
function as(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ur, e.schema = i), e.ancestors.push(n);
  const o = Ji(e, n.tagName, !1), a = fs(e, n);
  let s = gr(e, n);
  return ts.has(n.tagName) && (s = s.filter(function(c) {
    return typeof c == "string" ? !Lo(c) : !0;
  })), Qi(e, a, o, n), fr(a, s), e.ancestors.pop(), e.schema = r, e.create(n, o, a, t);
}
function os(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Gn(e, n.position);
}
function ss(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  Gn(e, n.position);
}
function ls(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = ur, e.schema = i), e.ancestors.push(n);
  const o = n.name === null ? e.Fragment : Ji(e, n.name, !0), a = gs(e, n), s = gr(e, n);
  return Qi(e, a, o, n), fr(a, s), e.ancestors.pop(), e.schema = r, e.create(n, o, a, t);
}
function cs(e, n, t) {
  const r = {};
  return fr(r, gr(e, n)), e.create(n, e.Fragment, r, t);
}
function us(e, n) {
  return n.value;
}
function Qi(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function fr(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function ds(e, n, t) {
  return r;
  function r(i, o, a, s) {
    const l = Array.isArray(a.children) ? t : n;
    return s ? l(o, a, s) : l(o, a);
  }
}
function ps(e, n) {
  return t;
  function t(r, i, o, a) {
    const s = Array.isArray(o.children), c = dr(r);
    return n(
      i,
      o,
      a,
      s,
      {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0
      },
      void 0
    );
  }
}
function fs(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && pr.call(n.properties, i)) {
      const o = hs(e, i, n.properties[i]);
      if (o) {
        const [a, s] = o;
        e.tableCellAlignToStyle && a === "align" && typeof s == "string" && rs.has(n.tagName) ? r = s : t[a] = s;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      t.style || (t.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function gs(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const s = a.properties[0];
        s.type, Object.assign(
          t,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        Gn(e, n.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, o = e.evaluater.evaluateExpression(s.expression);
        } else
          Gn(e, n.position);
      else
        o = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return t;
}
function gr(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : jo;
  for (; ++r < n.children.length; ) {
    const o = n.children[r];
    let a;
    if (e.passKeys) {
      const c = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (c) {
        const l = i.get(c) || 0;
        a = c + "-" + l, i.set(c, l + 1);
      }
    }
    const s = Xi(e, o, a);
    s !== void 0 && t.push(s);
  }
  return t;
}
function hs(e, n, t) {
  const r = Ho(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? Oo(t) : Vo(t)), r.property === "style") {
      let i = typeof t == "object" ? t : ms(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = bs(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? qo[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function ms(e, n) {
  const t = {};
  try {
    Qo(n, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = (
        /** @type {Error} */
        i
      ), a = new Ae("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: o,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw a.file = e.filePath || void 0, a.url = Zi + "#cannot-parse-style-attribute", a;
    }
  }
  return t;
  function r(i, o) {
    let a = i;
    a.slice(0, 2) !== "--" && (a.slice(0, 4) === "-ms-" && (a = "ms-" + a.slice(4)), a = a.replace(ns, _s)), t[a] = o;
  }
}
function Ji(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let o = -1, a;
    for (; ++o < i.length; ) {
      const s = zr(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: s,
        computed: !!(o && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = a;
  } else
    r = zr(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return pr.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Gn(e);
}
function Gn(e, n) {
  const t = new Ae(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = Zi + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function bs(e) {
  const n = {};
  let t;
  for (t in e)
    pr.call(e, t) && (n[Es(t)] = e[t]);
  return n;
}
function Es(e) {
  let n = e.replace(es, ys);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function _s(e, n) {
  return n.toUpperCase();
}
function ys(e) {
  return "-" + e.toLowerCase();
}
const Mt = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, ks = {};
function hr(e, n) {
  const t = ks, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return ji(e, r, i);
}
function ji(e, n, t) {
  if (ws(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Yr(e.children, n, t);
  }
  return Array.isArray(e) ? Yr(e, n, t) : "";
}
function Yr(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ji(e[i], n, t);
  return r.join("");
}
function ws(e) {
  return !!(e && typeof e == "object");
}
const Zr = document.createElement("i");
function mr(e) {
  const n = "&" + e + ";";
  Zr.innerHTML = n;
  const t = Zr.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
function ze(e, n, t, r) {
  const i = e.length;
  let o = 0, a;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(n, t), e.splice(...a);
  else
    for (t && e.splice(n, t); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(n, 0), e.splice(...a), o += 1e4, n += 1e4;
}
function $e(e, n) {
  return e.length > 0 ? (ze(e, e.length, 0, n), e) : n;
}
const Xr = {}.hasOwnProperty;
function ea(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    xs(n, e[t]);
  return n;
}
function xs(e, n) {
  let t;
  for (t in n) {
    const i = (Xr.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let a;
    if (o)
      for (a in o) {
        Xr.call(i, a) || (i[a] = []);
        const s = o[a];
        Ss(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Ss(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  ze(e, 0, 0, r);
}
function na(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
function qe(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Ie = pn(/[A-Za-z]/), Te = pn(/[\dA-Za-z]/), Ns = pn(/[#-'*+\--9=?A-Z^-~]/);
function pt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const er = pn(/\d/), Ts = pn(/[\dA-Fa-f]/), As = pn(/[!-/:-@[-`{-~]/);
function W(e) {
  return e !== null && e < -2;
}
function fe(e) {
  return e !== null && (e < 0 || e === 32);
}
function ne(e) {
  return e === -2 || e === -1 || e === 32;
}
const Et = pn(new RegExp("\\p{P}|\\p{S}", "u")), mn = pn(/\s/);
function pn(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function On(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const o = e.charCodeAt(t);
    let a = "";
    if (o === 37 && Te(e.charCodeAt(t + 1)) && Te(e.charCodeAt(t + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const s = e.charCodeAt(t + 1);
      o < 56320 && s > 56319 && s < 57344 ? (a = String.fromCharCode(o, s), i = 1) : a = "�";
    } else
      a = String.fromCharCode(o);
    a && (n.push(e.slice(r, t), encodeURIComponent(a)), r = t + i + 1, a = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
function ie(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(c) {
    return ne(c) ? (e.enter(t), s(c)) : n(c);
  }
  function s(c) {
    return ne(c) && o++ < i ? (e.consume(c), s) : (e.exit(t), n(c));
  }
}
const vs = {
  tokenize: Cs
};
function Cs(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ie(e, n, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), o(s);
  }
  function o(s) {
    const c = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = c), t = c, a(s);
  }
  function a(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return W(s) ? (e.consume(s), e.exit("chunkText"), o) : (e.consume(s), a);
  }
}
const Os = {
  tokenize: Is
}, Qr = {
  tokenize: Rs
};
function Is(e) {
  const n = this, t = [];
  let r = 0, i, o, a;
  return s;
  function s(S) {
    if (r < t.length) {
      const A = t[r];
      return n.containerState = A[1], e.attempt(A[0].continuation, c, l)(S);
    }
    return l(S);
  }
  function c(S) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && x();
      const A = n.events.length;
      let C = A, y;
      for (; C--; )
        if (n.events[C][0] === "exit" && n.events[C][1].type === "chunkFlow") {
          y = n.events[C][1].end;
          break;
        }
      E(r);
      let U = A;
      for (; U < n.events.length; )
        n.events[U][1].end = {
          ...y
        }, U++;
      return ze(n.events, C + 1, 0, n.events.slice(A)), n.events.length = U, l(S);
    }
    return s(S);
  }
  function l(S) {
    if (r === t.length) {
      if (!i)
        return f(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(S);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(Qr, d, u)(S);
  }
  function d(S) {
    return i && x(), E(r), f(S);
  }
  function u(S) {
    return n.parser.lazy[n.now().line] = r !== t.length, a = n.now().offset, g(S);
  }
  function f(S) {
    return n.containerState = {}, e.attempt(Qr, p, g)(S);
  }
  function p(S) {
    return r++, t.push([n.currentConstruct, n.containerState]), f(S);
  }
  function g(S) {
    if (S === null) {
      i && x(), E(0), e.consume(S);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), _(S);
  }
  function _(S) {
    if (S === null) {
      k(e.exit("chunkFlow"), !0), E(0), e.consume(S);
      return;
    }
    return W(S) ? (e.consume(S), k(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, s) : (e.consume(S), _);
  }
  function k(S, A) {
    const C = n.sliceStream(S);
    if (A && C.push(null), S.previous = o, o && (o.next = S), o = S, i.defineSkip(S.start), i.write(C), n.parser.lazy[S.start.line]) {
      let y = i.events.length;
      for (; y--; )
        if (
          // The token starts before the line ending…
          i.events[y][1].start.offset < a && // …and either is not ended yet…
          (!i.events[y][1].end || // …or ends after it.
          i.events[y][1].end.offset > a)
        )
          return;
      const U = n.events.length;
      let K = U, H, w;
      for (; K--; )
        if (n.events[K][0] === "exit" && n.events[K][1].type === "chunkFlow") {
          if (H) {
            w = n.events[K][1].end;
            break;
          }
          H = !0;
        }
      for (E(r), y = U; y < n.events.length; )
        n.events[y][1].end = {
          ...w
        }, y++;
      ze(n.events, K + 1, 0, n.events.slice(U)), n.events.length = y;
    }
  }
  function E(S) {
    let A = t.length;
    for (; A-- > S; ) {
      const C = t[A];
      n.containerState = C[1], C[0].exit.call(n, e);
    }
    t.length = S;
  }
  function x() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function Rs(e, n, t) {
  return ie(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function vn(e) {
  if (e === null || fe(e) || mn(e))
    return 1;
  if (Et(e))
    return 2;
}
function _t(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const nr = {
  name: "attention",
  resolveAll: Ms,
  tokenize: Ds
};
function Ms(e, n) {
  let t = -1, r, i, o, a, s, c, l, d;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const u = {
            ...e[r][1].end
          }, f = {
            ...e[t][1].start
          };
          Jr(u, -c), Jr(f, c), a = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: u,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[t][1].start
            },
            end: f
          }, o = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[t][1].start
            }
          }, i = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[t][1].start = {
            ...s.end
          }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = $e(l, [["enter", e[r][1], n], ["exit", e[r][1], n]])), l = $e(l, [["enter", i, n], ["enter", a, n], ["exit", a, n], ["enter", o, n]]), l = $e(l, _t(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), l = $e(l, [["exit", o, n], ["enter", s, n], ["exit", s, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (d = 2, l = $e(l, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : d = 0, ze(e, r - 1, t - r + 3, l), t = r + l.length - d - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Ds(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = vn(r);
  let o;
  return a;
  function a(c) {
    return o = c, e.enter("attentionSequence"), s(c);
  }
  function s(c) {
    if (c === o)
      return e.consume(c), s;
    const l = e.exit("attentionSequence"), d = vn(c), u = !d || d === 2 && i || t.includes(c), f = !i || i === 2 && d || t.includes(r);
    return l._open = !!(o === 42 ? u : u && (i || !f)), l._close = !!(o === 42 ? f : f && (d || !u)), n(c);
  }
}
function Jr(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Ls = {
  name: "autolink",
  tokenize: Ps
};
function Ps(e, n, t) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Ie(p) ? (e.consume(p), a) : p === 64 ? t(p) : l(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || Te(p) ? (r = 1, s(p)) : l(p);
  }
  function s(p) {
    return p === 58 ? (e.consume(p), r = 0, c) : (p === 43 || p === 45 || p === 46 || Te(p)) && r++ < 32 ? (e.consume(p), s) : (r = 0, l(p));
  }
  function c(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || pt(p) ? t(p) : (e.consume(p), c);
  }
  function l(p) {
    return p === 64 ? (e.consume(p), d) : Ns(p) ? (e.consume(p), l) : t(p);
  }
  function d(p) {
    return Te(p) ? u(p) : t(p);
  }
  function u(p) {
    return p === 46 ? (e.consume(p), r = 0, d) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : f(p);
  }
  function f(p) {
    if ((p === 45 || Te(p)) && r++ < 63) {
      const g = p === 45 ? f : u;
      return e.consume(p), g;
    }
    return t(p);
  }
}
const Wn = {
  partial: !0,
  tokenize: Bs
};
function Bs(e, n, t) {
  return r;
  function r(o) {
    return ne(o) ? ie(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || W(o) ? n(o) : t(o);
  }
}
const ta = {
  continuation: {
    tokenize: zs
  },
  exit: Us,
  name: "blockQuote",
  tokenize: Fs
};
function Fs(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
    }
    return t(a);
  }
  function o(a) {
    return ne(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(a));
  }
}
function zs(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return ne(a) ? ie(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
  }
  function o(a) {
    return e.attempt(ta, n, t)(a);
  }
}
function Us(e) {
  e.exit("blockQuote");
}
const ra = {
  name: "characterEscape",
  tokenize: $s
};
function $s(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return As(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const ia = {
  name: "characterReference",
  tokenize: Hs
};
function Hs(e, n, t) {
  const r = this;
  let i = 0, o, a;
  return s;
  function s(u) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), c;
  }
  function c(u) {
    return u === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(u), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), o = 31, a = Te, d(u));
  }
  function l(u) {
    return u === 88 || u === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(u), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = Ts, d) : (e.enter("characterReferenceValue"), o = 7, a = er, d(u));
  }
  function d(u) {
    if (u === 59 && i) {
      const f = e.exit("characterReferenceValue");
      return a === Te && !mr(r.sliceSerialize(f)) ? t(u) : (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return a(u) && i++ < o ? (e.consume(u), d) : t(u);
  }
}
const jr = {
  partial: !0,
  tokenize: Ks
}, ei = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Gs
};
function Gs(e, n, t) {
  const r = this, i = {
    partial: !0,
    tokenize: C
  };
  let o = 0, a = 0, s;
  return c;
  function c(y) {
    return l(y);
  }
  function l(y) {
    const U = r.events[r.events.length - 1];
    return o = U && U[1].type === "linePrefix" ? U[2].sliceSerialize(U[1], !0).length : 0, s = y, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(y);
  }
  function d(y) {
    return y === s ? (a++, e.consume(y), d) : a < 3 ? t(y) : (e.exit("codeFencedFenceSequence"), ne(y) ? ie(e, u, "whitespace")(y) : u(y));
  }
  function u(y) {
    return y === null || W(y) ? (e.exit("codeFencedFence"), r.interrupt ? n(y) : e.check(jr, _, A)(y)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), f(y));
  }
  function f(y) {
    return y === null || W(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(y)) : ne(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ie(e, p, "whitespace")(y)) : y === 96 && y === s ? t(y) : (e.consume(y), f);
  }
  function p(y) {
    return y === null || W(y) ? u(y) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(y));
  }
  function g(y) {
    return y === null || W(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), u(y)) : y === 96 && y === s ? t(y) : (e.consume(y), g);
  }
  function _(y) {
    return e.attempt(i, A, k)(y);
  }
  function k(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), E;
  }
  function E(y) {
    return o > 0 && ne(y) ? ie(e, x, "linePrefix", o + 1)(y) : x(y);
  }
  function x(y) {
    return y === null || W(y) ? e.check(jr, _, A)(y) : (e.enter("codeFlowValue"), S(y));
  }
  function S(y) {
    return y === null || W(y) ? (e.exit("codeFlowValue"), x(y)) : (e.consume(y), S);
  }
  function A(y) {
    return e.exit("codeFenced"), n(y);
  }
  function C(y, U, K) {
    let H = 0;
    return w;
    function w(F) {
      return y.enter("lineEnding"), y.consume(F), y.exit("lineEnding"), L;
    }
    function L(F) {
      return y.enter("codeFencedFence"), ne(F) ? ie(y, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(F) : P(F);
    }
    function P(F) {
      return F === s ? (y.enter("codeFencedFenceSequence"), B(F)) : K(F);
    }
    function B(F) {
      return F === s ? (H++, y.consume(F), B) : H >= a ? (y.exit("codeFencedFenceSequence"), ne(F) ? ie(y, R, "whitespace")(F) : R(F)) : K(F);
    }
    function R(F) {
      return F === null || W(F) ? (y.exit("codeFencedFence"), U(F)) : K(F);
    }
  }
}
function Ks(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? t(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? t(a) : n(a);
  }
}
const Dt = {
  name: "codeIndented",
  tokenize: Ws
}, qs = {
  partial: !0,
  tokenize: Vs
};
function Ws(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("codeIndented"), ie(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? a(l) : t(l);
  }
  function a(l) {
    return l === null ? c(l) : W(l) ? e.attempt(qs, a, c)(l) : (e.enter("codeFlowValue"), s(l));
  }
  function s(l) {
    return l === null || W(l) ? (e.exit("codeFlowValue"), a(l)) : (e.consume(l), s);
  }
  function c(l) {
    return e.exit("codeIndented"), n(l);
  }
}
function Vs(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? t(a) : W(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : ie(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? n(a) : W(a) ? i(a) : t(a);
  }
}
const Ys = {
  name: "codeText",
  previous: Xs,
  resolve: Zs,
  tokenize: Qs
};
function Zs(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Xs(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Qs(e, n, t) {
  let r = 0, i, o;
  return a;
  function a(u) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(u);
  }
  function s(u) {
    return u === 96 ? (e.consume(u), r++, s) : (e.exit("codeTextSequence"), c(u));
  }
  function c(u) {
    return u === null ? t(u) : u === 32 ? (e.enter("space"), e.consume(u), e.exit("space"), c) : u === 96 ? (o = e.enter("codeTextSequence"), i = 0, d(u)) : W(u) ? (e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(u));
  }
  function l(u) {
    return u === null || u === 32 || u === 96 || W(u) ? (e.exit("codeTextData"), c(u)) : (e.consume(u), l);
  }
  function d(u) {
    return u === 96 ? (e.consume(u), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(u)) : (o.type = "codeTextData", l(u));
  }
}
class Js {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Pn(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), Pn(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), Pn(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Pn(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Pn(this.left, t.reverse());
      }
  }
}
function Pn(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function aa(e) {
  const n = {};
  let t = -1, r, i, o, a, s, c, l;
  const d = new Js(e);
  for (; ++t < d.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = d.get(t), t && r[1].type === "chunkFlow" && d.get(t - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, o = 0, o < c.length && c[o][1].type === "lineEndingBlank" && (o += 2), o < c.length && c[o][1].type === "content"))
      for (; ++o < c.length && c[o][1].type !== "content"; )
        c[o][1].type === "chunkText" && (c[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, js(d, t)), t = n[t], l = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o--; )
        if (a = d.get(o), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (d.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
        else if (a[1].type !== "linePrefix") break;
      i && (r[1].end = {
        ...d.get(i)[1].start
      }, s = d.slice(i, t), s.unshift(r), d.splice(i, t - i + 1, s));
    }
  }
  return ze(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !l;
}
function js(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const o = [], a = t._tokenizer || r.parser[t.contentType](t.start), s = a.events, c = [], l = {};
  let d, u, f = -1, p = t, g = 0, _ = 0;
  const k = [_];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    o.push(i), p._tokenizer || (d = r.sliceStream(p), p.next || d.push(null), u && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(d), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), u = p, p = p.next;
  }
  for (p = t; ++f < s.length; )
    // Find a void token that includes a break.
    s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (_ = f + 1, k.push(_), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : k.pop(), f = k.length; f--; ) {
    const E = s.slice(k[f], k[f + 1]), x = o.pop();
    c.push([x, x + E.length - 1]), e.splice(x, 2, E);
  }
  for (c.reverse(), f = -1; ++f < c.length; )
    l[g + c[f][0]] = g + c[f][1], g += c[f][1] - c[f][0] - 1;
  return l;
}
const el = {
  resolve: tl,
  tokenize: rl
}, nl = {
  partial: !0,
  tokenize: il
};
function tl(e) {
  return aa(e), e;
}
function rl(e, n) {
  let t;
  return r;
  function r(s) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? o(s) : W(s) ? e.check(nl, a, o)(s) : (e.consume(s), i);
  }
  function o(s) {
    return e.exit("chunkContent"), e.exit("content"), n(s);
  }
  function a(s) {
    return e.consume(s), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function il(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ie(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || W(a))
      return t(a);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? n(a) : e.interrupt(r.parser.constructs.flow, t, n)(a);
  }
}
function oa(e, n, t, r, i, o, a, s, c) {
  const l = c || Number.POSITIVE_INFINITY;
  let d = 0;
  return u;
  function u(E) {
    return E === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(E), e.exit(o), f) : E === null || E === 32 || E === 41 || pt(E) ? t(E) : (e.enter(r), e.enter(a), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), _(E));
  }
  function f(E) {
    return E === 62 ? (e.enter(o), e.consume(E), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), p(E));
  }
  function p(E) {
    return E === 62 ? (e.exit("chunkString"), e.exit(s), f(E)) : E === null || E === 60 || W(E) ? t(E) : (e.consume(E), E === 92 ? g : p);
  }
  function g(E) {
    return E === 60 || E === 62 || E === 92 ? (e.consume(E), p) : p(E);
  }
  function _(E) {
    return !d && (E === null || E === 41 || fe(E)) ? (e.exit("chunkString"), e.exit(s), e.exit(a), e.exit(r), n(E)) : d < l && E === 40 ? (e.consume(E), d++, _) : E === 41 ? (e.consume(E), d--, _) : E === null || E === 32 || E === 40 || pt(E) ? t(E) : (e.consume(E), E === 92 ? k : _);
  }
  function k(E) {
    return E === 40 || E === 41 || E === 92 ? (e.consume(E), _) : _(E);
  }
}
function sa(e, n, t, r, i, o) {
  const a = this;
  let s = 0, c;
  return l;
  function l(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), d;
  }
  function d(p) {
    return s > 999 || p === null || p === 91 || p === 93 && !c || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !s && "_hiddenFootnoteSupport" in a.parser.constructs ? t(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : W(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), u(p));
  }
  function u(p) {
    return p === null || p === 91 || p === 93 || W(p) || s++ > 999 ? (e.exit("chunkString"), d(p)) : (e.consume(p), c || (c = !ne(p)), p === 92 ? f : u);
  }
  function f(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), s++, u) : u(p);
  }
}
function la(e, n, t, r, i, o) {
  let a;
  return s;
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? (e.enter(r), e.enter(i), e.consume(f), e.exit(i), a = f === 40 ? 41 : f, c) : t(f);
  }
  function c(f) {
    return f === a ? (e.enter(i), e.consume(f), e.exit(i), e.exit(r), n) : (e.enter(o), l(f));
  }
  function l(f) {
    return f === a ? (e.exit(o), c(a)) : f === null ? t(f) : W(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), ie(e, l, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(f));
  }
  function d(f) {
    return f === a || f === null || W(f) ? (e.exit("chunkString"), l(f)) : (e.consume(f), f === 92 ? u : d);
  }
  function u(f) {
    return f === a || f === 92 ? (e.consume(f), d) : d(f);
  }
}
function $n(e, n) {
  let t;
  return r;
  function r(i) {
    return W(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : ne(i) ? ie(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const al = {
  name: "definition",
  tokenize: sl
}, ol = {
  partial: !0,
  tokenize: ll
};
function sl(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), a(p);
  }
  function a(p) {
    return sa.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function s(p) {
    return i = qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), c) : t(p);
  }
  function c(p) {
    return fe(p) ? $n(e, l)(p) : l(p);
  }
  function l(p) {
    return oa(
      e,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function d(p) {
    return e.attempt(ol, u, u)(p);
  }
  function u(p) {
    return ne(p) ? ie(e, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || W(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function ll(e, n, t) {
  return r;
  function r(s) {
    return fe(s) ? $n(e, i)(s) : t(s);
  }
  function i(s) {
    return la(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function o(s) {
    return ne(s) ? ie(e, a, "whitespace")(s) : a(s);
  }
  function a(s) {
    return s === null || W(s) ? n(s) : t(s);
  }
}
const cl = {
  name: "hardBreakEscape",
  tokenize: ul
};
function ul(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return W(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const dl = {
  name: "headingAtx",
  resolve: pl,
  tokenize: fl
};
function pl(e, n) {
  let t = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, ze(e, r, t - r + 1, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["exit", i, n]])), e;
}
function fl(e, n, t) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("atxHeading"), o(d);
  }
  function o(d) {
    return e.enter("atxHeadingSequence"), a(d);
  }
  function a(d) {
    return d === 35 && r++ < 6 ? (e.consume(d), a) : d === null || fe(d) ? (e.exit("atxHeadingSequence"), s(d)) : t(d);
  }
  function s(d) {
    return d === 35 ? (e.enter("atxHeadingSequence"), c(d)) : d === null || W(d) ? (e.exit("atxHeading"), n(d)) : ne(d) ? ie(e, s, "whitespace")(d) : (e.enter("atxHeadingText"), l(d));
  }
  function c(d) {
    return d === 35 ? (e.consume(d), c) : (e.exit("atxHeadingSequence"), s(d));
  }
  function l(d) {
    return d === null || d === 35 || fe(d) ? (e.exit("atxHeadingText"), s(d)) : (e.consume(d), l);
  }
}
const gl = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], ni = ["pre", "script", "style", "textarea"], hl = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: El,
  tokenize: _l
}, ml = {
  partial: !0,
  tokenize: kl
}, bl = {
  partial: !0,
  tokenize: yl
};
function El(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function _l(e, n, t) {
  const r = this;
  let i, o, a, s, c;
  return l;
  function l(b) {
    return d(b);
  }
  function d(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), u;
  }
  function u(b) {
    return b === 33 ? (e.consume(b), f) : b === 47 ? (e.consume(b), o = !0, _) : b === 63 ? (e.consume(b), i = 3, r.interrupt ? n : h) : Ie(b) ? (e.consume(b), a = String.fromCharCode(b), k) : t(b);
  }
  function f(b) {
    return b === 45 ? (e.consume(b), i = 2, p) : b === 91 ? (e.consume(b), i = 5, s = 0, g) : Ie(b) ? (e.consume(b), i = 4, r.interrupt ? n : h) : t(b);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? n : h) : t(b);
  }
  function g(b) {
    const ve = "CDATA[";
    return b === ve.charCodeAt(s++) ? (e.consume(b), s === ve.length ? r.interrupt ? n : P : g) : t(b);
  }
  function _(b) {
    return Ie(b) ? (e.consume(b), a = String.fromCharCode(b), k) : t(b);
  }
  function k(b) {
    if (b === null || b === 47 || b === 62 || fe(b)) {
      const ve = b === 47, Ue = a.toLowerCase();
      return !ve && !o && ni.includes(Ue) ? (i = 1, r.interrupt ? n(b) : P(b)) : gl.includes(a.toLowerCase()) ? (i = 6, ve ? (e.consume(b), E) : r.interrupt ? n(b) : P(b)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(b) : o ? x(b) : S(b));
    }
    return b === 45 || Te(b) ? (e.consume(b), a += String.fromCharCode(b), k) : t(b);
  }
  function E(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? n : P) : t(b);
  }
  function x(b) {
    return ne(b) ? (e.consume(b), x) : w(b);
  }
  function S(b) {
    return b === 47 ? (e.consume(b), w) : b === 58 || b === 95 || Ie(b) ? (e.consume(b), A) : ne(b) ? (e.consume(b), S) : w(b);
  }
  function A(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Te(b) ? (e.consume(b), A) : C(b);
  }
  function C(b) {
    return b === 61 ? (e.consume(b), y) : ne(b) ? (e.consume(b), C) : S(b);
  }
  function y(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? t(b) : b === 34 || b === 39 ? (e.consume(b), c = b, U) : ne(b) ? (e.consume(b), y) : K(b);
  }
  function U(b) {
    return b === c ? (e.consume(b), c = null, H) : b === null || W(b) ? t(b) : (e.consume(b), U);
  }
  function K(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || fe(b) ? C(b) : (e.consume(b), K);
  }
  function H(b) {
    return b === 47 || b === 62 || ne(b) ? S(b) : t(b);
  }
  function w(b) {
    return b === 62 ? (e.consume(b), L) : t(b);
  }
  function L(b) {
    return b === null || W(b) ? P(b) : ne(b) ? (e.consume(b), L) : t(b);
  }
  function P(b) {
    return b === 45 && i === 2 ? (e.consume(b), re) : b === 60 && i === 1 ? (e.consume(b), ue) : b === 62 && i === 4 ? (e.consume(b), le) : b === 63 && i === 3 ? (e.consume(b), h) : b === 93 && i === 5 ? (e.consume(b), de) : W(b) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ml, pe, B)(b)) : b === null || W(b) ? (e.exit("htmlFlowData"), B(b)) : (e.consume(b), P);
  }
  function B(b) {
    return e.check(bl, R, pe)(b);
  }
  function R(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), F;
  }
  function F(b) {
    return b === null || W(b) ? B(b) : (e.enter("htmlFlowData"), P(b));
  }
  function re(b) {
    return b === 45 ? (e.consume(b), h) : P(b);
  }
  function ue(b) {
    return b === 47 ? (e.consume(b), a = "", Z) : P(b);
  }
  function Z(b) {
    if (b === 62) {
      const ve = a.toLowerCase();
      return ni.includes(ve) ? (e.consume(b), le) : P(b);
    }
    return Ie(b) && a.length < 8 ? (e.consume(b), a += String.fromCharCode(b), Z) : P(b);
  }
  function de(b) {
    return b === 93 ? (e.consume(b), h) : P(b);
  }
  function h(b) {
    return b === 62 ? (e.consume(b), le) : b === 45 && i === 2 ? (e.consume(b), h) : P(b);
  }
  function le(b) {
    return b === null || W(b) ? (e.exit("htmlFlowData"), pe(b)) : (e.consume(b), le);
  }
  function pe(b) {
    return e.exit("htmlFlow"), n(b);
  }
}
function yl(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return W(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : t(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? t(a) : n(a);
  }
}
function kl(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Wn, n, t);
  }
}
const wl = {
  name: "htmlText",
  tokenize: xl
};
function xl(e, n, t) {
  const r = this;
  let i, o, a;
  return s;
  function s(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), c;
  }
  function c(h) {
    return h === 33 ? (e.consume(h), l) : h === 47 ? (e.consume(h), C) : h === 63 ? (e.consume(h), S) : Ie(h) ? (e.consume(h), K) : t(h);
  }
  function l(h) {
    return h === 45 ? (e.consume(h), d) : h === 91 ? (e.consume(h), o = 0, g) : Ie(h) ? (e.consume(h), x) : t(h);
  }
  function d(h) {
    return h === 45 ? (e.consume(h), p) : t(h);
  }
  function u(h) {
    return h === null ? t(h) : h === 45 ? (e.consume(h), f) : W(h) ? (a = u, ue(h)) : (e.consume(h), u);
  }
  function f(h) {
    return h === 45 ? (e.consume(h), p) : u(h);
  }
  function p(h) {
    return h === 62 ? re(h) : h === 45 ? f(h) : u(h);
  }
  function g(h) {
    const le = "CDATA[";
    return h === le.charCodeAt(o++) ? (e.consume(h), o === le.length ? _ : g) : t(h);
  }
  function _(h) {
    return h === null ? t(h) : h === 93 ? (e.consume(h), k) : W(h) ? (a = _, ue(h)) : (e.consume(h), _);
  }
  function k(h) {
    return h === 93 ? (e.consume(h), E) : _(h);
  }
  function E(h) {
    return h === 62 ? re(h) : h === 93 ? (e.consume(h), E) : _(h);
  }
  function x(h) {
    return h === null || h === 62 ? re(h) : W(h) ? (a = x, ue(h)) : (e.consume(h), x);
  }
  function S(h) {
    return h === null ? t(h) : h === 63 ? (e.consume(h), A) : W(h) ? (a = S, ue(h)) : (e.consume(h), S);
  }
  function A(h) {
    return h === 62 ? re(h) : S(h);
  }
  function C(h) {
    return Ie(h) ? (e.consume(h), y) : t(h);
  }
  function y(h) {
    return h === 45 || Te(h) ? (e.consume(h), y) : U(h);
  }
  function U(h) {
    return W(h) ? (a = U, ue(h)) : ne(h) ? (e.consume(h), U) : re(h);
  }
  function K(h) {
    return h === 45 || Te(h) ? (e.consume(h), K) : h === 47 || h === 62 || fe(h) ? H(h) : t(h);
  }
  function H(h) {
    return h === 47 ? (e.consume(h), re) : h === 58 || h === 95 || Ie(h) ? (e.consume(h), w) : W(h) ? (a = H, ue(h)) : ne(h) ? (e.consume(h), H) : re(h);
  }
  function w(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Te(h) ? (e.consume(h), w) : L(h);
  }
  function L(h) {
    return h === 61 ? (e.consume(h), P) : W(h) ? (a = L, ue(h)) : ne(h) ? (e.consume(h), L) : H(h);
  }
  function P(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? t(h) : h === 34 || h === 39 ? (e.consume(h), i = h, B) : W(h) ? (a = P, ue(h)) : ne(h) ? (e.consume(h), P) : (e.consume(h), R);
  }
  function B(h) {
    return h === i ? (e.consume(h), i = void 0, F) : h === null ? t(h) : W(h) ? (a = B, ue(h)) : (e.consume(h), B);
  }
  function R(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? t(h) : h === 47 || h === 62 || fe(h) ? H(h) : (e.consume(h), R);
  }
  function F(h) {
    return h === 47 || h === 62 || fe(h) ? H(h) : t(h);
  }
  function re(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(h);
  }
  function ue(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), Z;
  }
  function Z(h) {
    return ne(h) ? ie(e, de, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : de(h);
  }
  function de(h) {
    return e.enter("htmlTextData"), a(h);
  }
}
const br = {
  name: "labelEnd",
  resolveAll: Al,
  resolveTo: vl,
  tokenize: Cl
}, Sl = {
  tokenize: Ol
}, Nl = {
  tokenize: Il
}, Tl = {
  tokenize: Rl
};
function Al(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e.length !== t.length && ze(e, 0, e.length, t), e;
}
function vl(e, n) {
  let t = e.length, r = 0, i, o, a, s;
  for (; t--; )
    if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = t);
  const c = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, l = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[a][1].end
    }
  }, d = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return s = [["enter", c, n], ["enter", l, n]], s = $e(s, e.slice(o + 1, o + r + 3)), s = $e(s, [["enter", d, n]]), s = $e(s, _t(n.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), n)), s = $e(s, [["exit", d, n], e[a - 2], e[a - 1], ["exit", l, n]]), s = $e(s, e.slice(a + 1)), s = $e(s, [["exit", c, n]]), ze(e, o, e.length, s), e;
}
function Cl(e, n, t) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return s;
  function s(f) {
    return o ? o._inactive ? u(f) : (a = r.parser.defined.includes(qe(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(f), e.exit("labelMarker"), e.exit("labelEnd"), c) : t(f);
  }
  function c(f) {
    return f === 40 ? e.attempt(Sl, d, a ? d : u)(f) : f === 91 ? e.attempt(Nl, d, a ? l : u)(f) : a ? d(f) : u(f);
  }
  function l(f) {
    return e.attempt(Tl, d, u)(f);
  }
  function d(f) {
    return n(f);
  }
  function u(f) {
    return o._balanced = !0, t(f);
  }
}
function Ol(e, n, t) {
  return r;
  function r(u) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), i;
  }
  function i(u) {
    return fe(u) ? $n(e, o)(u) : o(u);
  }
  function o(u) {
    return u === 41 ? d(u) : oa(e, a, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(u);
  }
  function a(u) {
    return fe(u) ? $n(e, c)(u) : d(u);
  }
  function s(u) {
    return t(u);
  }
  function c(u) {
    return u === 34 || u === 39 || u === 40 ? la(e, l, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(u) : d(u);
  }
  function l(u) {
    return fe(u) ? $n(e, d)(u) : d(u);
  }
  function d(u) {
    return u === 41 ? (e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), e.exit("resource"), n) : t(u);
  }
}
function Il(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return sa.call(r, e, o, a, "reference", "referenceMarker", "referenceString")(s);
  }
  function o(s) {
    return r.parser.defined.includes(qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(s) : t(s);
  }
  function a(s) {
    return t(s);
  }
}
function Rl(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const Ml = {
  name: "labelStartImage",
  resolveAll: br.resolveAll,
  tokenize: Dl
};
function Dl(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), o;
  }
  function o(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), a) : t(s);
  }
  function a(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(s) : n(s);
  }
}
const Ll = {
  name: "labelStartLink",
  resolveAll: br.resolveAll,
  tokenize: Pl
};
function Pl(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const Lt = {
  name: "lineEnding",
  tokenize: Bl
};
function Bl(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ie(e, n, "linePrefix");
  }
}
const dt = {
  name: "thematicBreak",
  tokenize: Fl
};
function Fl(e, n, t) {
  let r = 0, i;
  return o;
  function o(l) {
    return e.enter("thematicBreak"), a(l);
  }
  function a(l) {
    return i = l, s(l);
  }
  function s(l) {
    return l === i ? (e.enter("thematicBreakSequence"), c(l)) : r >= 3 && (l === null || W(l)) ? (e.exit("thematicBreak"), n(l)) : t(l);
  }
  function c(l) {
    return l === i ? (e.consume(l), r++, c) : (e.exit("thematicBreakSequence"), ne(l) ? ie(e, s, "whitespace")(l) : s(l));
  }
}
const Re = {
  continuation: {
    tokenize: Hl
  },
  exit: Kl,
  name: "list",
  tokenize: $l
}, zl = {
  partial: !0,
  tokenize: ql
}, Ul = {
  partial: !0,
  tokenize: Gl
};
function $l(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return s;
  function s(p) {
    const g = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : er(p)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(dt, t, l)(p) : l(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), c(p);
    }
    return t(p);
  }
  function c(p) {
    return er(p) && ++a < 10 ? (e.consume(p), c) : (!r.interrupt || a < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), l(p)) : t(p);
  }
  function l(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      Wn,
      // Can’t be empty when interrupting.
      r.interrupt ? t : d,
      e.attempt(zl, f, u)
    );
  }
  function d(p) {
    return r.containerState.initialBlankLine = !0, o++, f(p);
  }
  function u(p) {
    return ne(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), f) : t(p);
  }
  function f(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(p);
  }
}
function Hl(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Wn, i, o);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ie(e, n, "listItemIndent", r.containerState.size + 1)(s);
  }
  function o(s) {
    return r.containerState.furtherBlankLines || !ne(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ul, n, a)(s));
  }
  function a(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ie(e, e.attempt(Re, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function Gl(e, n, t) {
  const r = this;
  return ie(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? n(o) : t(o);
  }
}
function Kl(e) {
  e.exit(this.containerState.type);
}
function ql(e, n, t) {
  const r = this;
  return ie(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !ne(o) && a && a[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const ti = {
  name: "setextUnderline",
  resolveTo: Wl,
  tokenize: Vl
};
function Wl(e, n) {
  let t = e.length, r, i, o;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
  const a = {
    type: "setextHeading",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, n]), e.splice(o + 1, 0, ["exit", e[r][1], n]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = a, e.push(["exit", a, n]), e;
}
function Vl(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(l) {
    let d = r.events.length, u;
    for (; d--; )
      if (r.events[d][1].type !== "lineEnding" && r.events[d][1].type !== "linePrefix" && r.events[d][1].type !== "content") {
        u = r.events[d][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || u) ? (e.enter("setextHeadingLine"), i = l, a(l)) : t(l);
  }
  function a(l) {
    return e.enter("setextHeadingLineSequence"), s(l);
  }
  function s(l) {
    return l === i ? (e.consume(l), s) : (e.exit("setextHeadingLineSequence"), ne(l) ? ie(e, c, "lineSuffix")(l) : c(l));
  }
  function c(l) {
    return l === null || W(l) ? (e.exit("setextHeadingLine"), n(l)) : t(l);
  }
}
const Yl = {
  tokenize: Zl
};
function Zl(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    Wn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ie(e, e.attempt(this.parser.constructs.flow, i, e.attempt(el, i)), "linePrefix"))
  );
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const Xl = {
  resolveAll: ua()
}, Ql = ca("string"), Jl = ca("text");
function ca(e) {
  return {
    resolveAll: ua(e === "text" ? jl : void 0),
    tokenize: n
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], o = t.attempt(i, a, s);
    return a;
    function a(d) {
      return l(d) ? o(d) : s(d);
    }
    function s(d) {
      if (d === null) {
        t.consume(d);
        return;
      }
      return t.enter("data"), t.consume(d), c;
    }
    function c(d) {
      return l(d) ? (t.exit("data"), o(d)) : (t.consume(d), c);
    }
    function l(d) {
      if (d === null)
        return !0;
      const u = i[d];
      let f = -1;
      if (u)
        for (; ++f < u.length; ) {
          const p = u[f];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ua(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function jl(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, a = -1, s = 0, c;
      for (; o--; ) {
        const l = i[o];
        if (typeof l == "string") {
          for (a = l.length; l.charCodeAt(a - 1) === 32; )
            s++, a--;
          if (a) break;
          a = -1;
        } else if (l === -2)
          c = !0, s++;
        else if (l !== -1) {
          o++;
          break;
        }
      }
      if (s) {
        const l = {
          type: t === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...l.start
        }, r.start.offset === r.end.offset ? Object.assign(r, l) : (e.splice(t, 0, ["enter", l, n], ["exit", l, n]), t += 2);
      }
      t++;
    }
  return e;
}
const ec = {
  42: Re,
  43: Re,
  45: Re,
  48: Re,
  49: Re,
  50: Re,
  51: Re,
  52: Re,
  53: Re,
  54: Re,
  55: Re,
  56: Re,
  57: Re,
  62: ta
}, nc = {
  91: al
}, tc = {
  [-2]: Dt,
  [-1]: Dt,
  32: Dt
}, rc = {
  35: dl,
  42: dt,
  45: [ti, dt],
  60: hl,
  61: ti,
  95: dt,
  96: ei,
  126: ei
}, ic = {
  38: ia,
  92: ra
}, ac = {
  [-5]: Lt,
  [-4]: Lt,
  [-3]: Lt,
  33: Ml,
  38: ia,
  42: nr,
  60: [Ls, wl],
  91: Ll,
  92: [cl, ra],
  93: br,
  95: nr,
  96: Ys
}, oc = {
  null: [nr, Xl]
}, sc = {
  null: [42, 95]
}, lc = {
  null: []
}, cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: sc,
  contentInitial: nc,
  disable: lc,
  document: ec,
  flow: rc,
  flowInitial: tc,
  insideSpan: oc,
  string: ic,
  text: ac
}, Symbol.toStringTag, { value: "Module" }));
function uc(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: t && t.line || 1,
    column: t && t.column || 1,
    offset: t && t.offset || 0
  };
  const i = {}, o = [];
  let a = [], s = [];
  const c = {
    attempt: U(C),
    check: U(y),
    consume: x,
    enter: S,
    exit: A,
    interrupt: U(y, {
      interrupt: !0
    })
  }, l = {
    code: null,
    containerState: {},
    defineSkip: _,
    events: [],
    now: g,
    parser: e,
    previous: null,
    sliceSerialize: f,
    sliceStream: p,
    write: u
  };
  let d = n.tokenize.call(l, c);
  return n.resolveAll && o.push(n), l;
  function u(L) {
    return a = $e(a, L), k(), a[a.length - 1] !== null ? [] : (K(n, 0), l.events = _t(o, l.events, l), l.events);
  }
  function f(L, P) {
    return pc(p(L), P);
  }
  function p(L) {
    return dc(a, L);
  }
  function g() {
    const {
      _bufferIndex: L,
      _index: P,
      line: B,
      column: R,
      offset: F
    } = r;
    return {
      _bufferIndex: L,
      _index: P,
      line: B,
      column: R,
      offset: F
    };
  }
  function _(L) {
    i[L.line] = L.column, w();
  }
  function k() {
    let L;
    for (; r._index < a.length; ) {
      const P = a[r._index];
      if (typeof P == "string")
        for (L = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === L && r._bufferIndex < P.length; )
          E(P.charCodeAt(r._bufferIndex));
      else
        E(P);
    }
  }
  function E(L) {
    d = d(L);
  }
  function x(L) {
    W(L) ? (r.line++, r.column = 1, r.offset += L === -3 ? 2 : 1, w()) : L !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = L;
  }
  function S(L, P) {
    const B = P || {};
    return B.type = L, B.start = g(), l.events.push(["enter", B, l]), s.push(B), B;
  }
  function A(L) {
    const P = s.pop();
    return P.end = g(), l.events.push(["exit", P, l]), P;
  }
  function C(L, P) {
    K(L, P.from);
  }
  function y(L, P) {
    P.restore();
  }
  function U(L, P) {
    return B;
    function B(R, F, re) {
      let ue, Z, de, h;
      return Array.isArray(R) ? (
        /* c8 ignore next 1 */
        pe(R)
      ) : "tokenize" in R ? (
        // Looks like a construct.
        pe([
          /** @type {Construct} */
          R
        ])
      ) : le(R);
      function le(be) {
        return Qe;
        function Qe(Me) {
          const Je = Me !== null && be[Me], De = Me !== null && be.null, on = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Je) ? Je : Je ? [Je] : [],
            ...Array.isArray(De) ? De : De ? [De] : []
          ];
          return pe(on)(Me);
        }
      }
      function pe(be) {
        return ue = be, Z = 0, be.length === 0 ? re : b(be[Z]);
      }
      function b(be) {
        return Qe;
        function Qe(Me) {
          return h = H(), de = be, be.partial || (l.currentConstruct = be), be.name && l.parser.constructs.disable.null.includes(be.name) ? Ue() : be.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            P ? Object.assign(Object.create(l), P) : l,
            c,
            ve,
            Ue
          )(Me);
        }
      }
      function ve(be) {
        return L(de, h), F;
      }
      function Ue(be) {
        return h.restore(), ++Z < ue.length ? b(ue[Z]) : re;
      }
    }
  }
  function K(L, P) {
    L.resolveAll && !o.includes(L) && o.push(L), L.resolve && ze(l.events, P, l.events.length - P, L.resolve(l.events.slice(P), l)), L.resolveTo && (l.events = L.resolveTo(l.events, l));
  }
  function H() {
    const L = g(), P = l.previous, B = l.currentConstruct, R = l.events.length, F = Array.from(s);
    return {
      from: R,
      restore: re
    };
    function re() {
      r = L, l.previous = P, l.currentConstruct = B, l.events.length = R, s = F, w();
    }
  }
  function w() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function dc(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
  let a;
  if (t === i)
    a = [e[t].slice(r, o)];
  else {
    if (a = e.slice(t, i), r > -1) {
      const s = a[0];
      typeof s == "string" ? a[0] = s.slice(r) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function pc(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const o = e[t];
    let a;
    if (typeof o == "string")
      a = o;
    else switch (o) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && i) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(o);
    }
    i = o === -2, r.push(a);
  }
  return r.join("");
}
function fc(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      ea([cc, ...(e || {}).extensions || []])
    ),
    content: i(vs),
    defined: [],
    document: i(Os),
    flow: i(Yl),
    lazy: {},
    string: i(Ql),
    text: i(Jl)
  };
  return r;
  function i(o) {
    return a;
    function a(s) {
      return uc(r, o, s);
    }
  }
}
function gc(e) {
  for (; !aa(e); )
    ;
  return e;
}
const ri = /[\0\t\n\r]/g;
function hc() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, a, s) {
    const c = [];
    let l, d, u, f, p;
    for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), u = 0, n = "", t && (o.charCodeAt(0) === 65279 && u++, t = void 0); u < o.length; ) {
      if (ri.lastIndex = u, l = ri.exec(o), f = l && l.index !== void 0 ? l.index : o.length, p = o.charCodeAt(f), !l) {
        n = o.slice(u);
        break;
      }
      if (p === 10 && u === f && r)
        c.push(-3), r = void 0;
      else
        switch (r && (c.push(-5), r = void 0), u < f && (c.push(o.slice(u, f)), e += f - u), p) {
          case 0: {
            c.push(65533), e++;
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, c.push(-2); e++ < d; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      u = f + 1;
    }
    return s && (r && c.push(-5), n && c.push(n), c.push(null)), c;
  }
}
const mc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function bc(e) {
  return e.replace(mc, Ec);
}
function Ec(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return na(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return mr(t) || e;
}
const da = {}.hasOwnProperty;
function _c(e, n, t) {
  return typeof n != "string" && (t = n, n = void 0), yc(t)(gc(fc(t).document().write(hc()(e, n, !0))));
}
function yc(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(yn),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: o(_n),
      blockQuote: o(De),
      characterEscape: H,
      characterReference: H,
      codeFenced: o(on),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(on, a),
      codeText: o(In, a),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: o(Rn),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(Mn),
      hardBreakEscape: o(ae),
      hardBreakTrailing: o(ae),
      htmlFlow: o(je, a),
      htmlFlowData: H,
      htmlText: o(je, a),
      htmlTextData: H,
      image: o(en),
      label: a,
      link: o(yn),
      listItem: o(xt),
      listItemValue: f,
      listOrdered: o(Dn, u),
      listUnordered: o(Dn),
      paragraph: o(St),
      reference: b,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(_n),
      strong: o(Zn),
      thematicBreak: o(Xn)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: C,
      autolink: c(),
      autolinkEmail: Je,
      autolinkProtocol: Me,
      blockQuote: c(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: Ue,
      characterReferenceMarkerNumeric: Ue,
      characterReferenceValue: be,
      characterReference: Qe,
      codeFenced: c(k),
      codeFencedFence: _,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: g,
      codeFlowValue: w,
      codeIndented: c(E),
      codeText: c(F),
      codeTextData: w,
      data: w,
      definition: c(),
      definitionDestinationString: A,
      definitionLabelString: x,
      definitionTitleString: S,
      emphasis: c(),
      hardBreakEscape: c(P),
      hardBreakTrailing: c(P),
      htmlFlow: c(B),
      htmlFlowData: w,
      htmlText: c(R),
      htmlTextData: w,
      image: c(ue),
      label: de,
      labelText: Z,
      lineEnding: L,
      link: c(re),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ve,
      resourceDestinationString: h,
      resourceTitleString: le,
      resource: pe,
      setextHeading: c(K),
      setextHeadingLineSequence: U,
      setextHeadingText: y,
      strong: c(),
      thematicBreak: c()
    }
  };
  pa(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(N) {
    let I = {
      type: "root",
      children: []
    };
    const V = {
      stack: [I],
      tokenStack: [],
      config: n,
      enter: s,
      exit: l,
      buffer: a,
      resume: d,
      data: t
    }, ee = [];
    let oe = -1;
    for (; ++oe < N.length; )
      if (N[oe][1].type === "listOrdered" || N[oe][1].type === "listUnordered")
        if (N[oe][0] === "enter")
          ee.push(oe);
        else {
          const Le = ee.pop();
          oe = i(N, Le, oe);
        }
    for (oe = -1; ++oe < N.length; ) {
      const Le = n[N[oe][0]];
      da.call(Le, N[oe][1].type) && Le[N[oe][1].type].call(Object.assign({
        sliceSerialize: N[oe][2].sliceSerialize
      }, V), N[oe][1]);
    }
    if (V.tokenStack.length > 0) {
      const Le = V.tokenStack[V.tokenStack.length - 1];
      (Le[1] || ii).call(V, void 0, Le[0]);
    }
    for (I.position = {
      start: dn(N.length > 0 ? N[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: dn(N.length > 0 ? N[N.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, oe = -1; ++oe < n.transforms.length; )
      I = n.transforms[oe](I) || I;
    return I;
  }
  function i(N, I, V) {
    let ee = I - 1, oe = -1, Le = !1, tn, Ge, sn, fn;
    for (; ++ee <= V; ) {
      const Ce = N[ee];
      switch (Ce[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ce[0] === "enter" ? oe++ : oe--, fn = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ce[0] === "enter" && (tn && !fn && !oe && !sn && (sn = ee), fn = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          fn = void 0;
      }
      if (!oe && Ce[0] === "enter" && Ce[1].type === "listItemPrefix" || oe === -1 && Ce[0] === "exit" && (Ce[1].type === "listUnordered" || Ce[1].type === "listOrdered")) {
        if (tn) {
          let ln = ee;
          for (Ge = void 0; ln--; ) {
            const Pe = N[ln];
            if (Pe[1].type === "lineEnding" || Pe[1].type === "lineEndingBlank") {
              if (Pe[0] === "exit") continue;
              Ge && (N[Ge][1].type = "lineEndingBlank", Le = !0), Pe[1].type = "lineEnding", Ge = ln;
            } else if (!(Pe[1].type === "linePrefix" || Pe[1].type === "blockQuotePrefix" || Pe[1].type === "blockQuotePrefixWhitespace" || Pe[1].type === "blockQuoteMarker" || Pe[1].type === "listItemIndent")) break;
          }
          sn && (!Ge || sn < Ge) && (tn._spread = !0), tn.end = Object.assign({}, Ge ? N[Ge][1].start : Ce[1].end), N.splice(Ge || ee, 0, ["exit", tn, Ce[2]]), ee++, V++;
        }
        if (Ce[1].type === "listItemPrefix") {
          const ln = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ce[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          tn = ln, N.splice(ee, 0, ["enter", ln, Ce[2]]), ee++, V++, sn = void 0, fn = !0;
        }
      }
    }
    return N[I][1]._spread = Le, V;
  }
  function o(N, I) {
    return V;
    function V(ee) {
      s.call(this, N(ee), ee), I && I.call(this, ee);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(N, I, V) {
    this.stack[this.stack.length - 1].children.push(N), this.stack.push(N), this.tokenStack.push([I, V || void 0]), N.position = {
      start: dn(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function c(N) {
    return I;
    function I(V) {
      N && N.call(this, V), l.call(this, V);
    }
  }
  function l(N, I) {
    const V = this.stack.pop(), ee = this.tokenStack.pop();
    if (ee)
      ee[0].type !== N.type && (I ? I.call(this, N, ee[0]) : (ee[1] || ii).call(this, N, ee[0]));
    else throw new Error("Cannot close `" + N.type + "` (" + Un({
      start: N.start,
      end: N.end
    }) + "): it’s not open");
    V.position.end = dn(N.end);
  }
  function d() {
    return hr(this.stack.pop());
  }
  function u() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(N) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(N), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = N;
  }
  function g() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = N;
  }
  function _() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function E() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = N.replace(/(\r?\n|\r)$/g, "");
  }
  function x(N) {
    const I = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = I, V.identifier = qe(this.sliceSerialize(N)).toLowerCase();
  }
  function S() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = N;
  }
  function A() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = N;
  }
  function C(N) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const V = this.sliceSerialize(N).length;
      I.depth = V;
    }
  }
  function y() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function U(N) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(N).codePointAt(0) === 61 ? 1 : 2;
  }
  function K() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function H(N) {
    const V = this.stack[this.stack.length - 1].children;
    let ee = V[V.length - 1];
    (!ee || ee.type !== "text") && (ee = nn(), ee.position = {
      start: dn(N.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, V.push(ee)), this.stack.push(ee);
  }
  function w(N) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(N), I.position.end = dn(N.end);
  }
  function L(N) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const V = I.children[I.children.length - 1];
      V.position.end = dn(N.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(I.type) && (H.call(this, N), w.call(this, N));
  }
  function P() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = N;
  }
  function R() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = N;
  }
  function F() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = N;
  }
  function re() {
    const N = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      N.type += "Reference", N.referenceType = I, delete N.url, delete N.title;
    } else
      delete N.identifier, delete N.label;
    this.data.referenceType = void 0;
  }
  function ue() {
    const N = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      N.type += "Reference", N.referenceType = I, delete N.url, delete N.title;
    } else
      delete N.identifier, delete N.label;
    this.data.referenceType = void 0;
  }
  function Z(N) {
    const I = this.sliceSerialize(N), V = this.stack[this.stack.length - 2];
    V.label = bc(I), V.identifier = qe(I).toLowerCase();
  }
  function de() {
    const N = this.stack[this.stack.length - 1], I = this.resume(), V = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, V.type === "link") {
      const ee = N.children;
      V.children = ee;
    } else
      V.alt = I;
  }
  function h() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = N;
  }
  function le() {
    const N = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = N;
  }
  function pe() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function ve(N) {
    const I = this.resume(), V = this.stack[this.stack.length - 1];
    V.label = I, V.identifier = qe(this.sliceSerialize(N)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ue(N) {
    this.data.characterReferenceType = N.type;
  }
  function be(N) {
    const I = this.sliceSerialize(N), V = this.data.characterReferenceType;
    let ee;
    V ? (ee = na(I, V === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ee = mr(I);
    const oe = this.stack[this.stack.length - 1];
    oe.value += ee;
  }
  function Qe(N) {
    const I = this.stack.pop();
    I.position.end = dn(N.end);
  }
  function Me(N) {
    w.call(this, N);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(N);
  }
  function Je(N) {
    w.call(this, N);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(N);
  }
  function De() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function on() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function In() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Rn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Mn() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function _n() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ae() {
    return {
      type: "break"
    };
  }
  function je() {
    return {
      type: "html",
      value: ""
    };
  }
  function en() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function yn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Dn(N) {
    return {
      type: "list",
      ordered: N.type === "listOrdered",
      start: null,
      spread: N._spread,
      children: []
    };
  }
  function xt(N) {
    return {
      type: "listItem",
      spread: N._spread,
      checked: null,
      children: []
    };
  }
  function St() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Zn() {
    return {
      type: "strong",
      children: []
    };
  }
  function nn() {
    return {
      type: "text",
      value: ""
    };
  }
  function Xn() {
    return {
      type: "thematicBreak"
    };
  }
}
function dn(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function pa(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? pa(e, r) : kc(e, r);
  }
}
function kc(e, n) {
  let t;
  for (t in n)
    if (da.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function ii(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Un({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + Un({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + Un({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function wc(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return _c(r, {
      ...n.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function xc(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Sc(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function Nc(e, n) {
  const t = n.value ? n.value + `
` : "", r = {};
  n.lang && (r.className = ["language-" + n.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (i.data = { meta: n.meta }), e.patch(n, i), i = e.applyData(n, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(n, i), i;
}
function Tc(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Ac(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function vc(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = On(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let a, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = o + 1, s += 1, e.footnoteCounts.set(r, s);
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(a) }]
  };
  e.patch(n, c);
  const l = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [c]
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Cc(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Oc(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function fa(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function Ic(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return fa(e, n);
  const i = { src: On(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, o), e.applyData(n, o);
}
function Rc(e, n) {
  const t = { src: On(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Mc(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Dc(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return fa(e, n);
  const i = { href: On(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Lc(e, n) {
  const t = { href: On(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Pc(e, n, t) {
  const r = e.all(n), i = t ? Bc(t) : ga(n), o = {}, a = [];
  if (typeof n.checked == "boolean") {
    const d = r[0];
    let u;
    d && d.type === "element" && d.tagName === "p" ? u = d : (u = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(u)), u.children.length > 0 && u.children.unshift({ type: "text", value: " " }), u.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const d = r[s];
    (i || s !== 0 || d.type !== "element" || d.tagName !== "p") && a.push({ type: "text", value: `
` }), d.type === "element" && d.tagName === "p" && !i ? a.push(...d.children) : a.push(d);
  }
  const c = r[r.length - 1];
  c && (i || c.type !== "element" || c.tagName !== "p") && a.push({ type: "text", value: `
` });
  const l = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(n, l), e.applyData(n, l);
}
function Bc(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = ga(t[r]);
  }
  return n;
}
function ga(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function Fc(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function zc(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Uc(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function $c(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Hc(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], a), i.push(a);
  }
  if (t.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, s = dr(n.children[1]), c = Vi(n.children[n.children.length - 1]);
    s && c && (a.position = { start: s, end: c }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Gc(e, n, t) {
  const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", a = t && t.type === "table" ? t.align : void 0, s = a ? a.length : n.children.length;
  let c = -1;
  const l = [];
  for (; ++c < s; ) {
    const u = n.children[c], f = {}, p = a ? a[c] : void 0;
    p && (f.align = p);
    let g = { type: "element", tagName: o, properties: f, children: [] };
    u && (g.children = e.all(u), e.patch(u, g), g = e.applyData(u, g)), l.push(g);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(n, d), e.applyData(n, d);
}
function Kc(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const ai = 9, oi = 32;
function qc(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      si(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(si(n.slice(i), i > 0, !1)), o.join("");
}
function si(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === ai || o === oi; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === ai || o === oi; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Wc(e, n) {
  const t = { type: "text", value: qc(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Vc(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Yc = {
  blockquote: xc,
  break: Sc,
  code: Nc,
  delete: Tc,
  emphasis: Ac,
  footnoteReference: vc,
  heading: Cc,
  html: Oc,
  imageReference: Ic,
  image: Rc,
  inlineCode: Mc,
  linkReference: Dc,
  link: Lc,
  listItem: Pc,
  list: Fc,
  paragraph: zc,
  // @ts-expect-error: root is different, but hard to type.
  root: Uc,
  strong: $c,
  table: Hc,
  tableCell: Kc,
  tableRow: Gc,
  text: Wc,
  thematicBreak: Vc,
  toml: tt,
  yaml: tt,
  definition: tt,
  footnoteDefinition: tt
};
function tt() {
}
const ha = -1, yt = 0, Hn = 1, ft = 2, Er = 3, _r = 4, yr = 5, kr = 6, ma = 7, ba = 8, li = typeof self == "object" ? self : globalThis, Zc = (e, n) => {
  const t = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, a] = n[i];
    switch (o) {
      case yt:
      case ha:
        return t(a, i);
      case Hn: {
        const s = t([], i);
        for (const c of a)
          s.push(r(c));
        return s;
      }
      case ft: {
        const s = t({}, i);
        for (const [c, l] of a)
          s[r(c)] = r(l);
        return s;
      }
      case Er:
        return t(new Date(a), i);
      case _r: {
        const { source: s, flags: c } = a;
        return t(new RegExp(s, c), i);
      }
      case yr: {
        const s = t(/* @__PURE__ */ new Map(), i);
        for (const [c, l] of a)
          s.set(r(c), r(l));
        return s;
      }
      case kr: {
        const s = t(/* @__PURE__ */ new Set(), i);
        for (const c of a)
          s.add(r(c));
        return s;
      }
      case ma: {
        const { name: s, message: c } = a;
        return t(new li[s](c), i);
      }
      case ba:
        return t(BigInt(a), i);
      case "BigInt":
        return t(Object(BigInt(a)), i);
      case "ArrayBuffer":
        return t(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: s } = new Uint8Array(a);
        return t(new DataView(s), a);
      }
    }
    return t(new li[o](a), i);
  };
  return r;
}, ci = (e) => Zc(/* @__PURE__ */ new Map(), e)(0), xn = "", { toString: Xc } = {}, { keys: Qc } = Object, Bn = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [yt, n];
  const t = Xc.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [Hn, xn];
    case "Object":
      return [ft, xn];
    case "Date":
      return [Er, xn];
    case "RegExp":
      return [_r, xn];
    case "Map":
      return [yr, xn];
    case "Set":
      return [kr, xn];
    case "DataView":
      return [Hn, t];
  }
  return t.includes("Array") ? [Hn, t] : t.includes("Error") ? [ma, t] : [ft, t];
}, rt = ([e, n]) => e === yt && (n === "function" || n === "symbol"), Jc = (e, n, t, r) => {
  const i = (a, s) => {
    const c = r.push(a) - 1;
    return t.set(s, c), c;
  }, o = (a) => {
    if (t.has(a))
      return t.get(a);
    let [s, c] = Bn(a);
    switch (s) {
      case yt: {
        let d = a;
        switch (c) {
          case "bigint":
            s = ba, d = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + c);
            d = null;
            break;
          case "undefined":
            return i([ha], a);
        }
        return i([s, d], a);
      }
      case Hn: {
        if (c) {
          let f = a;
          return c === "DataView" ? f = new Uint8Array(a.buffer) : c === "ArrayBuffer" && (f = new Uint8Array(a)), i([c, [...f]], a);
        }
        const d = [], u = i([s, d], a);
        for (const f of a)
          d.push(o(f));
        return u;
      }
      case ft: {
        if (c)
          switch (c) {
            case "BigInt":
              return i([c, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return i([c, a.valueOf()], a);
          }
        if (n && "toJSON" in a)
          return o(a.toJSON());
        const d = [], u = i([s, d], a);
        for (const f of Qc(a))
          (e || !rt(Bn(a[f]))) && d.push([o(f), o(a[f])]);
        return u;
      }
      case Er:
        return i([s, a.toISOString()], a);
      case _r: {
        const { source: d, flags: u } = a;
        return i([s, { source: d, flags: u }], a);
      }
      case yr: {
        const d = [], u = i([s, d], a);
        for (const [f, p] of a)
          (e || !(rt(Bn(f)) || rt(Bn(p)))) && d.push([o(f), o(p)]);
        return u;
      }
      case kr: {
        const d = [], u = i([s, d], a);
        for (const f of a)
          (e || !rt(Bn(f))) && d.push(o(f));
        return u;
      }
    }
    const { message: l } = a;
    return i([s, { name: c, message: l }], a);
  };
  return o;
}, ui = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return Jc(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, gt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? ci(ui(e, n)) : structuredClone(e)
) : (e, n) => ci(ui(e, n));
function jc(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function eu(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function nu(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || jc, r = e.options.footnoteBackLabel || eu, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const l = e.footnoteById.get(
      e.footnoteOrder[c]
    );
    if (!l)
      continue;
    const d = e.all(l), u = String(l.identifier).toUpperCase(), f = On(u.toLowerCase());
    let p = 0;
    const g = [], _ = e.footnoteCounts.get(u);
    for (; _ !== void 0 && ++p <= _; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let x = typeof t == "string" ? t : t(c, p);
      typeof x == "string" && (x = { type: "text", value: x }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + f + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(c, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(x) ? x : [x]
      });
    }
    const k = d[d.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const x = k.children[k.children.length - 1];
      x && x.type === "text" ? x.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...g);
    } else
      d.push(...g);
    const E = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + f },
      children: e.wrap(d, !0)
    };
    e.patch(l, E), s.push(E);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...gt(a),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Vn = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return au;
    if (typeof e == "function")
      return kt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? tu(e) : ru(e);
    if (typeof e == "string")
      return iu(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function tu(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Vn(e[t]);
  return kt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i)) return !0;
    return !1;
  }
}
function ru(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return kt(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o]) return !1;
    return !0;
  }
}
function iu(e) {
  return kt(n);
  function n(t) {
    return t && t.type === e;
  }
}
function kt(e) {
  return n;
  function n(t, r, i) {
    return !!(ou(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function au() {
  return !0;
}
function ou(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ea = [], su = !0, tr = !1, lu = "skip";
function _a(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = Vn(i), a = r ? -1 : 1;
  s(e, void 0, [])();
  function s(c, l, d) {
    const u = (
      /** @type {Record<string, unknown>} */
      c && typeof c == "object" ? c : {}
    );
    if (typeof u.type == "string") {
      const p = (
        // `hast`
        typeof u.tagName == "string" ? u.tagName : (
          // `xast`
          typeof u.name == "string" ? u.name : void 0
        )
      );
      Object.defineProperty(f, "name", {
        value: "node (" + (c.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let p = Ea, g, _, k;
      if ((!n || o(c, l, d[d.length - 1] || void 0)) && (p = cu(t(c, d)), p[0] === tr))
        return p;
      if ("children" in c && c.children) {
        const E = (
          /** @type {UnistParent} */
          c
        );
        if (E.children && p[0] !== lu)
          for (_ = (r ? E.children.length : -1) + a, k = d.concat(E); _ > -1 && _ < E.children.length; ) {
            const x = E.children[_];
            if (g = s(x, _, k)(), g[0] === tr)
              return g;
            _ = typeof g[1] == "number" ? g[1] : _ + a;
          }
      }
      return p;
    }
  }
}
function cu(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [su, e] : e == null ? Ea : [e];
}
function wt(e, n, t, r) {
  let i, o, a;
  typeof n == "function" && typeof t != "function" ? (o = void 0, a = n, i = t) : (o = n, a = t, i = r), _a(e, o, s, i);
  function s(c, l) {
    const d = l[l.length - 1], u = d ? d.children.indexOf(c) : void 0;
    return a(c, u, d);
  }
}
const rr = {}.hasOwnProperty, uu = {};
function du(e, n) {
  const t = n || uu, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = { ...Yc, ...t.handlers }, s = {
    all: l,
    applyData: fu,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: a,
    one: c,
    options: t,
    patch: pu,
    wrap: hu
  };
  return wt(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const u = d.type === "definition" ? r : i, f = String(d.identifier).toUpperCase();
      u.has(f) || u.set(f, d);
    }
  }), s;
  function c(d, u) {
    const f = d.type, p = s.handlers[f];
    if (rr.call(s.handlers, f) && p)
      return p(s, d, u);
    if (s.options.passThrough && s.options.passThrough.includes(f)) {
      if ("children" in d) {
        const { children: _, ...k } = d, E = gt(k);
        return E.children = s.all(d), E;
      }
      return gt(d);
    }
    return (s.options.unknownHandler || gu)(s, d, u);
  }
  function l(d) {
    const u = [];
    if ("children" in d) {
      const f = d.children;
      let p = -1;
      for (; ++p < f.length; ) {
        const g = s.one(f[p], d);
        if (g) {
          if (p && f[p - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = di(g.value)), !Array.isArray(g) && g.type === "element")) {
            const _ = g.children[0];
            _ && _.type === "text" && (_.value = di(_.value));
          }
          Array.isArray(g) ? u.push(...g) : u.push(g);
        }
      }
    }
    return u;
  }
}
function pu(e, n) {
  e.position && (n.position = Jo(e));
}
function fu(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const a = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: a };
      }
    t.type === "element" && o && Object.assign(t.properties, gt(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function gu(e, n) {
  const t = n.data || {}, r = "value" in n && !(rr.call(t, "hProperties") || rr.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function hu(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function di(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function pi(e, n) {
  const t = du(e, n), r = t.one(e, void 0), i = nu(t), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function mu(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      pi(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      pi(t, { file: r, ...e || n })
    );
  };
}
function fi(e) {
  if (e)
    throw e;
}
var Pt, gi;
function bu() {
  if (gi) return Pt;
  gi = 1;
  var e = Object.prototype.hasOwnProperty, n = Object.prototype.toString, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(l) {
    return typeof Array.isArray == "function" ? Array.isArray(l) : n.call(l) === "[object Array]";
  }, o = function(l) {
    if (!l || n.call(l) !== "[object Object]")
      return !1;
    var d = e.call(l, "constructor"), u = l.constructor && l.constructor.prototype && e.call(l.constructor.prototype, "isPrototypeOf");
    if (l.constructor && !d && !u)
      return !1;
    var f;
    for (f in l)
      ;
    return typeof f > "u" || e.call(l, f);
  }, a = function(l, d) {
    t && d.name === "__proto__" ? t(l, d.name, {
      enumerable: !0,
      configurable: !0,
      value: d.newValue,
      writable: !0
    }) : l[d.name] = d.newValue;
  }, s = function(l, d) {
    if (d === "__proto__")
      if (e.call(l, d)) {
        if (r)
          return r(l, d).value;
      } else return;
    return l[d];
  };
  return Pt = function c() {
    var l, d, u, f, p, g, _ = arguments[0], k = 1, E = arguments.length, x = !1;
    for (typeof _ == "boolean" && (x = _, _ = arguments[1] || {}, k = 2), (_ == null || typeof _ != "object" && typeof _ != "function") && (_ = {}); k < E; ++k)
      if (l = arguments[k], l != null)
        for (d in l)
          u = s(_, d), f = s(l, d), _ !== f && (x && f && (o(f) || (p = i(f))) ? (p ? (p = !1, g = u && i(u) ? u : []) : g = u && o(u) ? u : {}, a(_, { name: d, newValue: c(x, g, f) })) : typeof f < "u" && a(_, { name: d, newValue: f }));
    return _;
  }, Pt;
}
var Eu = bu();
const Bt = /* @__PURE__ */ lr(Eu);
function ir(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function _u() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    s(null, ...i);
    function s(c, ...l) {
      const d = e[++o];
      let u = -1;
      if (c) {
        a(c);
        return;
      }
      for (; ++u < i.length; )
        (l[u] === null || l[u] === void 0) && (l[u] = i[u]);
      i = l, d ? yu(d, s)(...l) : a(null, ...l);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function yu(e, n) {
  let t;
  return r;
  function r(...a) {
    const s = e.length > a.length;
    let c;
    s && a.push(i);
    try {
      c = e.apply(this, a);
    } catch (l) {
      const d = (
        /** @type {Error} */
        l
      );
      if (s && t)
        throw d;
      return i(d);
    }
    s || (c && c.then && typeof c.then == "function" ? c.then(o, i) : c instanceof Error ? i(c) : o(c));
  }
  function i(a, ...s) {
    t || (t = !0, n(a, ...s));
  }
  function o(a) {
    i(null, a);
  }
}
const Ze = { basename: ku, dirname: wu, extname: xu, join: Su, sep: "/" };
function ku(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  Yn(e);
  let t = 0, r = -1, i = e.length, o;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let a = -1, s = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else
      a < 0 && (o = !0, a = i + 1), s > -1 && (e.codePointAt(i) === n.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = a));
  return t === r ? r = a : r < 0 && (r = e.length), e.slice(t, r);
}
function wu(e) {
  if (Yn(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function xu(e) {
  Yn(e);
  let n = e.length, t = -1, r = 0, i = -1, o = 0, a;
  for (; n--; ) {
    const s = e.codePointAt(n);
    if (s === 47) {
      if (a) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (a = !0, t = n + 1), s === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function Su(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    Yn(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Nu(t);
}
function Nu(e) {
  Yn(e);
  const n = e.codePointAt(0) === 47;
  let t = Tu(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Tu(e, n) {
  let t = "", r = 0, i = -1, o = 0, a = -1, s, c;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      s = e.codePointAt(a);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === a - 1 || o === 1)) if (i !== a - 1 && o === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (c = t.lastIndexOf("/"), c !== t.length - 1) {
              c < 0 ? (t = "", r = 0) : (t = t.slice(0, c), r = t.length - 1 - t.lastIndexOf("/")), i = a, o = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = a, o = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else
        t.length > 0 ? t += "/" + e.slice(i + 1, a) : t = e.slice(i + 1, a), r = a - i - 1;
      i = a, o = 0;
    } else s === 46 && o > -1 ? o++ : o = -1;
  }
  return t;
}
function Yn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Au = { cwd: vu };
function vu() {
  return "/";
}
function ar(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Cu(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ar(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return Ou(e);
}
function Ou(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const Ft = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class ya {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? ar(n) ? t = { path: n } : typeof n == "string" || Iu(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : Au.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Ft.length; ) {
      const o = Ft[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      Ft.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ze.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    Ut(n, "basename"), zt(n, "basename"), this.path = Ze.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ze.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    hi(this.basename, "dirname"), this.path = Ze.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ze.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (zt(n, "extname"), hi(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ze.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    ar(n) && (n = Cu(n)), Ut(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ze.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    Ut(n, "stem"), zt(n, "stem"), this.path = Ze.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new Ae(
      // @ts-expect-error: the overloads are fine.
      n,
      t,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function zt(e, n) {
  if (e && e.includes(Ze.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + Ze.sep + "`"
    );
}
function Ut(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function hi(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Iu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Ru = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), Mu = {}.hasOwnProperty;
class wr extends Ru {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = _u();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new wr()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(Bt(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (Gt("data", this.frozen), this.namespace[n] = t, this) : Mu.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (Gt("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const t = it(n), r = this.parser || this.Parser;
    return $t("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, t) {
    const r = this;
    return this.freeze(), $t("process", this.parser || this.Parser), Ht("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(o, a) {
      const s = it(n), c = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(c, s, function(d, u, f) {
        if (d || !u || !f)
          return l(d);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          u
        ), g = r.stringify(p, f);
        Pu(g) ? f.value = g : f.result = g, l(
          d,
          /** @type {VFileWithOutput<CompileResult>} */
          f
        );
      });
      function l(d, u) {
        d || !u ? a(d) : o ? o(u) : t(void 0, u);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let t = !1, r;
    return this.freeze(), $t("processSync", this.parser || this.Parser), Ht("processSync", this.compiler || this.Compiler), this.process(n, i), bi("processSync", "process", t), r;
    function i(o, a) {
      t = !0, fi(o), r = a;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, t, r) {
    mi(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
    function o(a, s) {
      const c = it(t);
      i.run(n, c, l);
      function l(d, u, f) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          u || n
        );
        d ? s(d) : a ? a(p) : r(void 0, p, f);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, t) {
    let r = !1, i;
    return this.run(n, t, o), bi("runSync", "run", r), i;
    function o(a, s) {
      fi(a), i = s, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, t) {
    this.freeze();
    const r = it(t), i = this.compiler || this.Compiler;
    return Ht("stringify", i), mi(n), i(n, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (Gt("use", this.frozen), n != null) if (typeof n == "function")
      c(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? s(n) : a(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function o(l) {
      if (typeof l == "function")
        c(l, []);
      else if (typeof l == "object")
        if (Array.isArray(l)) {
          const [d, ...u] = (
            /** @type {PluginTuple<Array<unknown>>} */
            l
          );
          c(d, u);
        } else
          a(l);
      else
        throw new TypeError("Expected usable value, not `" + l + "`");
    }
    function a(l) {
      if (!("plugins" in l) && !("settings" in l))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(l.plugins), l.settings && (i.settings = Bt(!0, i.settings, l.settings));
    }
    function s(l) {
      let d = -1;
      if (l != null) if (Array.isArray(l))
        for (; ++d < l.length; ) {
          const u = l[d];
          o(u);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + l + "`");
    }
    function c(l, d) {
      let u = -1, f = -1;
      for (; ++u < r.length; )
        if (r[u][0] === l) {
          f = u;
          break;
        }
      if (f === -1)
        r.push([l, ...d]);
      else if (d.length > 0) {
        let [p, ...g] = d;
        const _ = r[f][1];
        ir(_) && ir(p) && (p = Bt(!0, _, p)), r[f] = [l, p, ...g];
      }
    }
  }
}
const Du = new wr().freeze();
function $t(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ht(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Gt(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function mi(e) {
  if (!ir(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function bi(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function it(e) {
  return Lu(e) ? e : new ya(e);
}
function Lu(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Pu(e) {
  return typeof e == "string" || Bu(e);
}
function Bu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Fu = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Ei = [], _i = { allowDangerousHtml: !0 }, zu = /^(https?|ircs?|mailto|xmpp)$/i, Uu = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function $u(e) {
  const n = e.allowedElements, t = e.allowElement, r = e.children || "", i = e.className, o = e.components, a = e.disallowedElements, s = e.rehypePlugins || Ei, c = e.remarkPlugins || Ei, l = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ..._i } : _i, d = e.skipHtml, u = e.unwrapDisallowed, f = e.urlTransform || Hu, p = Du().use(wc).use(c).use(mu, l).use(s), g = new ya();
  typeof r == "string" && (g.value = r);
  for (const x of Uu)
    Object.hasOwn(e, x.from) && ("" + x.from + (x.to ? "use `" + x.to + "` instead" : "remove it") + Fu + x.id, void 0);
  const _ = p.parse(g);
  let k = p.runSync(_, g);
  return i && (k = {
    type: "element",
    tagName: "div",
    properties: { className: i },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      k.type === "root" ? k.children : [k]
    )
  }), wt(k, E), is(k, {
    Fragment: zn.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: o,
    ignoreInvalidStyle: !0,
    jsx: zn.jsx,
    jsxs: zn.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function E(x, S, A) {
    if (x.type === "raw" && A && typeof S == "number")
      return d ? A.children.splice(S, 1) : A.children[S] = { type: "text", value: x.value }, S;
    if (x.type === "element") {
      let C;
      for (C in Mt)
        if (Object.hasOwn(Mt, C) && Object.hasOwn(x.properties, C)) {
          const y = x.properties[C], U = Mt[C];
          (U === null || U.includes(x.tagName)) && (x.properties[C] = f(String(y || ""), C, x));
        }
    }
    if (x.type === "element") {
      let C = n ? !n.includes(x.tagName) : a ? a.includes(x.tagName) : !1;
      if (!C && t && typeof S == "number" && (C = !t(x, S, A)), C && A && typeof S == "number")
        return u && x.children ? A.children.splice(S, 1, ...x.children) : A.children.splice(S, 1), S;
    }
  }
}
function Hu(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || // It is a protocol, it should be allowed.
    zu.test(e.slice(0, n)) ? e : ""
  );
}
function yi(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
function Gu(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Ku(e, n, t) {
  const i = Vn((t || {}).ignore || []), o = qu(n);
  let a = -1;
  for (; ++a < o.length; )
    _a(e, "text", s);
  function s(l, d) {
    let u = -1, f;
    for (; ++u < d.length; ) {
      const p = d[u], g = f ? f.children : void 0;
      if (i(
        p,
        g ? g.indexOf(p) : void 0,
        f
      ))
        return;
      f = p;
    }
    if (f)
      return c(l, d);
  }
  function c(l, d) {
    const u = d[d.length - 1], f = o[a][0], p = o[a][1];
    let g = 0;
    const k = u.children.indexOf(l);
    let E = !1, x = [];
    f.lastIndex = 0;
    let S = f.exec(l.value);
    for (; S; ) {
      const A = S.index, C = {
        index: S.index,
        input: S.input,
        stack: [...d, l]
      };
      let y = p(...S, C);
      if (typeof y == "string" && (y = y.length > 0 ? { type: "text", value: y } : void 0), y === !1 ? f.lastIndex = A + 1 : (g !== A && x.push({
        type: "text",
        value: l.value.slice(g, A)
      }), Array.isArray(y) ? x.push(...y) : y && x.push(y), g = A + S[0].length, E = !0), !f.global)
        break;
      S = f.exec(l.value);
    }
    return E ? (g < l.value.length && x.push({ type: "text", value: l.value.slice(g) }), u.children.splice(k, 1, ...x)) : x = [l], k + x.length;
  }
}
function qu(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([Wu(i[0]), Vu(i[1])]);
  }
  return n;
}
function Wu(e) {
  return typeof e == "string" ? new RegExp(Gu(e), "g") : e;
}
function Vu(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Kt = "phrasing", qt = ["autolink", "link", "image", "label"];
function Yu() {
  return {
    transforms: [nd],
    enter: {
      literalAutolink: Xu,
      literalAutolinkEmail: Wt,
      literalAutolinkHttp: Wt,
      literalAutolinkWww: Wt
    },
    exit: {
      literalAutolink: ed,
      literalAutolinkEmail: ju,
      literalAutolinkHttp: Qu,
      literalAutolinkWww: Ju
    }
  };
}
function Zu() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Kt,
        notInConstruct: qt
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Kt,
        notInConstruct: qt
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Kt,
        notInConstruct: qt
      }
    ]
  };
}
function Xu(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Wt(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Qu(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Ju(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function ju(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function ed(e) {
  this.exit(e);
}
function nd(e) {
  Ku(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, td],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), rd]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function td(e, n, t, r, i) {
  let o = "";
  if (!ka(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !id(t)))
    return !1;
  const a = ad(t + r);
  if (!a[0]) return !1;
  const s = {
    type: "link",
    title: null,
    url: o + n + a[0],
    children: [{ type: "text", value: n + a[0] }]
  };
  return a[1] ? [s, { type: "text", value: a[1] }] : s;
}
function rd(e, n, t, r) {
  return (
    // Not an expected previous character.
    !ka(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function id(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function ad(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = yi(e, "(");
  let o = yi(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function ka(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || mn(t) || Et(t)) && // If it’s an email, the previous character should not be a slash.
  (!n || t !== 47);
}
wa.peek = md;
function od() {
  return {
    enter: {
      gfmFootnoteDefinition: ld,
      gfmFootnoteDefinitionLabelString: cd,
      gfmFootnoteCall: pd,
      gfmFootnoteCallString: fd
    },
    exit: {
      gfmFootnoteDefinition: dd,
      gfmFootnoteDefinitionLabelString: ud,
      gfmFootnoteCall: hd,
      gfmFootnoteCallString: gd
    }
  };
}
function sd() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: bd, footnoteReference: wa }
  };
}
function ld(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function cd() {
  this.buffer();
}
function ud(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = qe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function dd(e) {
  this.exit(e);
}
function pd(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function fd() {
  this.buffer();
}
function gd(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.label = n, t.identifier = qe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function hd(e) {
  this.exit(e);
}
function wa(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const a = t.enter("footnoteReference"), s = t.enter("reference");
  return o += i.move(
    t.safe(t.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), s(), a(), o += i.move("]"), o;
}
function md() {
  return "[";
}
function bd(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const a = t.enter("footnoteDefinition"), s = t.enter("label");
  return o += i.move(
    t.safe(t.associationId(e), {
      ...i.current(),
      before: o,
      after: "]"
    })
  ), s(), o += i.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), i.shift(4), o += i.move(
    t.indentLines(t.containerFlow(e, i.current()), Ed)
  ), a(), o;
}
function Ed(e, n, t) {
  return n === 0 ? e : (t ? "" : "    ") + e;
}
const _d = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
xa.peek = Sd;
function yd() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: wd },
    exit: { strikethrough: xd }
  };
}
function kd() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: _d
      }
    ],
    handlers: { delete: xa }
  };
}
function wd(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function xd(e) {
  this.exit(e);
}
function xa(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let a = i.move("~~");
  return a += t.containerPhrasing(e, {
    ...i.current(),
    before: a,
    after: "~"
  }), a += i.move("~~"), o(), a;
}
function Sd() {
  return "~";
}
function Nd(e) {
  return e.length;
}
function Td(e, n) {
  const t = n || {}, r = (t.align || []).concat(), i = t.stringLength || Nd, o = [], a = [], s = [], c = [];
  let l = 0, d = -1;
  for (; ++d < e.length; ) {
    const _ = [], k = [];
    let E = -1;
    for (e[d].length > l && (l = e[d].length); ++E < e[d].length; ) {
      const x = Ad(e[d][E]);
      if (t.alignDelimiters !== !1) {
        const S = i(x);
        k[E] = S, (c[E] === void 0 || S > c[E]) && (c[E] = S);
      }
      _.push(x);
    }
    a[d] = _, s[d] = k;
  }
  let u = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++u < l; )
      o[u] = ki(r[u]);
  else {
    const _ = ki(r);
    for (; ++u < l; )
      o[u] = _;
  }
  u = -1;
  const f = [], p = [];
  for (; ++u < l; ) {
    const _ = o[u];
    let k = "", E = "";
    _ === 99 ? (k = ":", E = ":") : _ === 108 ? k = ":" : _ === 114 && (E = ":");
    let x = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      c[u] - k.length - E.length
    );
    const S = k + "-".repeat(x) + E;
    t.alignDelimiters !== !1 && (x = k.length + x + E.length, x > c[u] && (c[u] = x), p[u] = x), f[u] = S;
  }
  a.splice(1, 0, f), s.splice(1, 0, p), d = -1;
  const g = [];
  for (; ++d < a.length; ) {
    const _ = a[d], k = s[d];
    u = -1;
    const E = [];
    for (; ++u < l; ) {
      const x = _[u] || "";
      let S = "", A = "";
      if (t.alignDelimiters !== !1) {
        const C = c[u] - (k[u] || 0), y = o[u];
        y === 114 ? S = " ".repeat(C) : y === 99 ? C % 2 ? (S = " ".repeat(C / 2 + 0.5), A = " ".repeat(C / 2 - 0.5)) : (S = " ".repeat(C / 2), A = S) : A = " ".repeat(C);
      }
      t.delimiterStart !== !1 && !u && E.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && x === "") && (t.delimiterStart !== !1 || u) && E.push(" "), t.alignDelimiters !== !1 && E.push(S), E.push(x), t.alignDelimiters !== !1 && E.push(A), t.padding !== !1 && E.push(" "), (t.delimiterEnd !== !1 || u !== l - 1) && E.push("|");
    }
    g.push(
      t.delimiterEnd === !1 ? E.join("").replace(/ +$/, "") : E.join("")
    );
  }
  return g.join(`
`);
}
function Ad(e) {
  return e == null ? "" : String(e);
}
function ki(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function vd(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const a = t.indentLines(
    t.containerFlow(e, o.current()),
    Cd
  );
  return i(), a;
}
function Cd(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function Od(e, n) {
  return wi(e, n.inConstruct, !0) && !wi(e, n.notInConstruct, !1);
}
function wi(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function xi(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && Od(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Id(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, a = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > a && (a = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return a;
}
function Rd(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Md(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function Dd(e, n, t, r) {
  const i = Md(t), o = e.value || "", a = i === "`" ? "GraveAccent" : "Tilde";
  if (Rd(e, t)) {
    const u = t.enter("codeIndented"), f = t.indentLines(o, Ld);
    return u(), f;
  }
  const s = t.createTracker(r), c = i.repeat(Math.max(Id(o, i) + 1, 3)), l = t.enter("codeFenced");
  let d = s.move(c);
  if (e.lang) {
    const u = t.enter(`codeFencedLang${a}`);
    d += s.move(
      t.safe(e.lang, {
        before: d,
        after: " ",
        encode: ["`"],
        ...s.current()
      })
    ), u();
  }
  if (e.lang && e.meta) {
    const u = t.enter(`codeFencedMeta${a}`);
    d += s.move(" "), d += s.move(
      t.safe(e.meta, {
        before: d,
        after: `
`,
        encode: ["`"],
        ...s.current()
      })
    ), u();
  }
  return d += s.move(`
`), o && (d += s.move(o + `
`)), d += s.move(c), l(), d;
}
function Ld(e, n, t) {
  return (t ? "" : "    ") + e;
}
function xr(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function Pd(e, n, t, r) {
  const i = xr(t), o = i === '"' ? "Quote" : "Apostrophe", a = t.enter("definition");
  let s = t.enter("label");
  const c = t.createTracker(r);
  let l = c.move("[");
  return l += c.move(
    t.safe(t.associationId(e), {
      before: l,
      after: "]",
      ...c.current()
    })
  ), l += c.move("]: "), s(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), l += c.move("<"), l += c.move(
    t.safe(e.url, { before: l, after: ">", ...c.current() })
  ), l += c.move(">")) : (s = t.enter("destinationRaw"), l += c.move(
    t.safe(e.url, {
      before: l,
      after: e.title ? " " : `
`,
      ...c.current()
    })
  )), s(), e.title && (s = t.enter(`title${o}`), l += c.move(" " + i), l += c.move(
    t.safe(e.title, {
      before: l,
      after: i,
      ...c.current()
    })
  ), l += c.move(i), s()), a(), l;
}
function Bd(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
function Kn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function ht(e, n, t) {
  const r = vn(e), i = vn(n);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    t === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Sa.peek = Fd;
function Sa(e, n, t, r) {
  const i = Bd(t), o = t.enter("emphasis"), a = t.createTracker(r), s = a.move(i);
  let c = a.move(
    t.containerPhrasing(e, {
      after: i,
      before: s,
      ...a.current()
    })
  );
  const l = c.charCodeAt(0), d = ht(
    r.before.charCodeAt(r.before.length - 1),
    l,
    i
  );
  d.inside && (c = Kn(l) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), f = ht(r.after.charCodeAt(0), u, i);
  f.inside && (c = c.slice(0, -1) + Kn(u));
  const p = a.move(i);
  return o(), t.attentionEncodeSurroundingInfo = {
    after: f.outside,
    before: d.outside
  }, s + c + p;
}
function Fd(e, n, t) {
  return t.options.emphasis || "*";
}
function zd(e, n) {
  let t = !1;
  return wt(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, tr;
  }), !!((!e.depth || e.depth < 3) && hr(e) && (n.options.setext || t));
}
function Ud(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (zd(e, t)) {
    const d = t.enter("headingSetext"), u = t.enter("phrasing"), f = t.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return u(), d(), f + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      f.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(f.lastIndexOf("\r"), f.lastIndexOf(`
`)) + 1)
    );
  }
  const a = "#".repeat(i), s = t.enter("headingAtx"), c = t.enter("phrasing");
  o.move(a + " ");
  let l = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(l) && (l = Kn(l.charCodeAt(0)) + l.slice(1)), l = l ? a + " " + l : a, t.options.closeAtx && (l += " " + a), c(), s(), l;
}
Na.peek = $d;
function Na(e) {
  return e.value || "";
}
function $d() {
  return "<";
}
Ta.peek = Hd;
function Ta(e, n, t, r) {
  const i = xr(t), o = i === '"' ? "Quote" : "Apostrophe", a = t.enter("image");
  let s = t.enter("label");
  const c = t.createTracker(r);
  let l = c.move("![");
  return l += c.move(
    t.safe(e.alt, { before: l, after: "]", ...c.current() })
  ), l += c.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), l += c.move("<"), l += c.move(
    t.safe(e.url, { before: l, after: ">", ...c.current() })
  ), l += c.move(">")) : (s = t.enter("destinationRaw"), l += c.move(
    t.safe(e.url, {
      before: l,
      after: e.title ? " " : ")",
      ...c.current()
    })
  )), s(), e.title && (s = t.enter(`title${o}`), l += c.move(" " + i), l += c.move(
    t.safe(e.title, {
      before: l,
      after: i,
      ...c.current()
    })
  ), l += c.move(i), s()), l += c.move(")"), a(), l;
}
function Hd() {
  return "!";
}
Aa.peek = Gd;
function Aa(e, n, t, r) {
  const i = e.referenceType, o = t.enter("imageReference");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let c = s.move("![");
  const l = t.safe(e.alt, {
    before: c,
    after: "]",
    ...s.current()
  });
  c += s.move(l + "]["), a();
  const d = t.stack;
  t.stack = [], a = t.enter("reference");
  const u = t.safe(t.associationId(e), {
    before: c,
    after: "]",
    ...s.current()
  });
  return a(), t.stack = d, o(), i === "full" || !l || l !== u ? c += s.move(u + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Gd() {
  return "!";
}
va.peek = Kd;
function va(e, n, t) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
    const a = t.unsafe[o], s = t.compilePattern(a);
    let c;
    if (a.atBreak)
      for (; c = s.exec(r); ) {
        let l = c.index;
        r.charCodeAt(l) === 10 && r.charCodeAt(l - 1) === 13 && l--, r = r.slice(0, l) + " " + r.slice(c.index + 1);
      }
  }
  return i + r + i;
}
function Kd() {
  return "`";
}
function Ca(e, n) {
  const t = hr(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Oa.peek = qd;
function Oa(e, n, t, r) {
  const i = xr(t), o = i === '"' ? "Quote" : "Apostrophe", a = t.createTracker(r);
  let s, c;
  if (Ca(e, t)) {
    const d = t.stack;
    t.stack = [], s = t.enter("autolink");
    let u = a.move("<");
    return u += a.move(
      t.containerPhrasing(e, {
        before: u,
        after: ">",
        ...a.current()
      })
    ), u += a.move(">"), s(), t.stack = d, u;
  }
  s = t.enter("link"), c = t.enter("label");
  let l = a.move("[");
  return l += a.move(
    t.containerPhrasing(e, {
      before: l,
      after: "](",
      ...a.current()
    })
  ), l += a.move("]("), c(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (c = t.enter("destinationLiteral"), l += a.move("<"), l += a.move(
    t.safe(e.url, { before: l, after: ">", ...a.current() })
  ), l += a.move(">")) : (c = t.enter("destinationRaw"), l += a.move(
    t.safe(e.url, {
      before: l,
      after: e.title ? " " : ")",
      ...a.current()
    })
  )), c(), e.title && (c = t.enter(`title${o}`), l += a.move(" " + i), l += a.move(
    t.safe(e.title, {
      before: l,
      after: i,
      ...a.current()
    })
  ), l += a.move(i), c()), l += a.move(")"), s(), l;
}
function qd(e, n, t) {
  return Ca(e, t) ? "<" : "[";
}
Ia.peek = Wd;
function Ia(e, n, t, r) {
  const i = e.referenceType, o = t.enter("linkReference");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let c = s.move("[");
  const l = t.containerPhrasing(e, {
    before: c,
    after: "]",
    ...s.current()
  });
  c += s.move(l + "]["), a();
  const d = t.stack;
  t.stack = [], a = t.enter("reference");
  const u = t.safe(t.associationId(e), {
    before: c,
    after: "]",
    ...s.current()
  });
  return a(), t.stack = d, o(), i === "full" || !l || l !== u ? c += s.move(u + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Wd() {
  return "[";
}
function Sr(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function Vd(e) {
  const n = Sr(e), t = e.options.bulletOther;
  if (!t)
    return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different"
    );
  return t;
}
function Yd(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function Ra(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function Zd(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let a = e.ordered ? Yd(t) : Sr(t);
  const s = e.ordered ? a === "." ? ")" : "." : Vd(t);
  let c = n && t.bulletLastUsed ? a === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (a === "*" || a === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (c = !0), Ra(t) === a && d
    ) {
      let u = -1;
      for (; ++u < e.children.length; ) {
        const f = e.children[u];
        if (f && f.type === "listItem" && f.children && f.children[0] && f.children[0].type === "thematicBreak") {
          c = !0;
          break;
        }
      }
    }
  }
  c && (a = s), t.bulletCurrent = a;
  const l = t.containerFlow(e, r);
  return t.bulletLastUsed = a, t.bulletCurrent = o, i(), l;
}
function Xd(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function Qd(e, n, t, r) {
  const i = Xd(t);
  let o = t.bulletCurrent || Sr(t);
  n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) + o);
  let a = o.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
  const s = t.createTracker(r);
  s.move(o + " ".repeat(a - o.length)), s.shift(a);
  const c = t.enter("listItem"), l = t.indentLines(
    t.containerFlow(e, s.current()),
    d
  );
  return c(), l;
  function d(u, f, p) {
    return f ? (p ? "" : " ".repeat(a)) + u : (p ? o : o + " ".repeat(a - o.length)) + u;
  }
}
function Jd(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), a = t.containerPhrasing(e, r);
  return o(), i(), a;
}
const jd = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Vn([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function ep(e, n, t, r) {
  return (e.children.some(function(a) {
    return jd(a);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function np(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
Ma.peek = tp;
function Ma(e, n, t, r) {
  const i = np(t), o = t.enter("strong"), a = t.createTracker(r), s = a.move(i + i);
  let c = a.move(
    t.containerPhrasing(e, {
      after: i,
      before: s,
      ...a.current()
    })
  );
  const l = c.charCodeAt(0), d = ht(
    r.before.charCodeAt(r.before.length - 1),
    l,
    i
  );
  d.inside && (c = Kn(l) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), f = ht(r.after.charCodeAt(0), u, i);
  f.inside && (c = c.slice(0, -1) + Kn(u));
  const p = a.move(i + i);
  return o(), t.attentionEncodeSurroundingInfo = {
    after: f.outside,
    before: d.outside
  }, s + c + p;
}
function tp(e, n, t) {
  return t.options.strong || "*";
}
function rp(e, n, t, r) {
  return t.safe(e.value, r);
}
function ip(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function ap(e, n, t) {
  const r = (Ra(t) + (t.options.ruleSpaces ? " " : "")).repeat(ip(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Da = {
  blockquote: vd,
  break: xi,
  code: Dd,
  definition: Pd,
  emphasis: Sa,
  hardBreak: xi,
  heading: Ud,
  html: Na,
  image: Ta,
  imageReference: Aa,
  inlineCode: va,
  link: Oa,
  linkReference: Ia,
  list: Zd,
  listItem: Qd,
  paragraph: Jd,
  root: ep,
  strong: Ma,
  text: rp,
  thematicBreak: ap
};
function op() {
  return {
    enter: {
      table: sp,
      tableData: Si,
      tableHeader: Si,
      tableRow: cp
    },
    exit: {
      codeText: up,
      table: lp,
      tableData: Vt,
      tableHeader: Vt,
      tableRow: Vt
    }
  };
}
function sp(e) {
  const n = e._align;
  this.enter(
    {
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function lp(e) {
  this.exit(e), this.data.inTable = void 0;
}
function cp(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Vt(e) {
  this.exit(e);
}
function Si(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function up(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, dp));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function dp(e, n) {
  return n === "|" ? n : e;
}
function pp(e) {
  const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: f,
      table: a,
      tableCell: c,
      tableRow: s
    }
  };
  function a(p, g, _, k) {
    return l(d(p, _, k), p.align);
  }
  function s(p, g, _, k) {
    const E = u(p, _, k), x = l([E]);
    return x.slice(0, x.indexOf(`
`));
  }
  function c(p, g, _, k) {
    const E = _.enter("tableCell"), x = _.enter("phrasing"), S = _.containerPhrasing(p, {
      ...k,
      before: o,
      after: o
    });
    return x(), E(), S;
  }
  function l(p, g) {
    return Td(p, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: t,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function d(p, g, _) {
    const k = p.children;
    let E = -1;
    const x = [], S = g.enter("table");
    for (; ++E < k.length; )
      x[E] = u(k[E], g, _);
    return S(), x;
  }
  function u(p, g, _) {
    const k = p.children;
    let E = -1;
    const x = [], S = g.enter("tableRow");
    for (; ++E < k.length; )
      x[E] = c(k[E], p, g, _);
    return S(), x;
  }
  function f(p, g, _) {
    let k = Da.inlineCode(p, g, _);
    return _.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function fp() {
  return {
    exit: {
      taskListCheckValueChecked: Ni,
      taskListCheckValueUnchecked: Ni,
      paragraph: hp
    }
  };
}
function gp() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: mp }
  };
}
function Ni(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function hp(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === "text") {
      const i = n.children;
      let o = -1, a;
      for (; ++o < i.length; ) {
        const s = i[o];
        if (s.type === "paragraph") {
          a = s;
          break;
        }
      }
      a === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function mp(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", a = "[" + (e.checked ? "x" : " ") + "] ", s = t.createTracker(r);
  o && s.move(a);
  let c = Da.listItem(e, n, t, {
    ...r,
    ...s.current()
  });
  return o && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
  function l(d) {
    return d + a;
  }
}
function bp() {
  return [
    Yu(),
    od(),
    yd(),
    op(),
    fp()
  ];
}
function Ep(e) {
  return {
    extensions: [
      Zu(),
      sd(),
      kd(),
      pp(e),
      gp()
    ]
  };
}
const _p = {
  tokenize: Np,
  partial: !0
}, La = {
  tokenize: Tp,
  partial: !0
}, Pa = {
  tokenize: Ap,
  partial: !0
}, Ba = {
  tokenize: vp,
  partial: !0
}, yp = {
  tokenize: Cp,
  partial: !0
}, Fa = {
  name: "wwwAutolink",
  tokenize: xp,
  previous: Ua
}, za = {
  name: "protocolAutolink",
  tokenize: Sp,
  previous: $a
}, an = {
  name: "emailAutolink",
  tokenize: wp,
  previous: Ha
}, Xe = {};
function kp() {
  return {
    text: Xe
  };
}
let hn = 48;
for (; hn < 123; )
  Xe[hn] = an, hn++, hn === 58 ? hn = 65 : hn === 91 && (hn = 97);
Xe[43] = an;
Xe[45] = an;
Xe[46] = an;
Xe[95] = an;
Xe[72] = [an, za];
Xe[104] = [an, za];
Xe[87] = [an, Fa];
Xe[119] = [an, Fa];
function wp(e, n, t) {
  const r = this;
  let i, o;
  return a;
  function a(u) {
    return !or(u) || !Ha.call(r, r.previous) || Nr(r.events) ? t(u) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(u));
  }
  function s(u) {
    return or(u) ? (e.consume(u), s) : u === 64 ? (e.consume(u), c) : t(u);
  }
  function c(u) {
    return u === 46 ? e.check(yp, d, l)(u) : u === 45 || u === 95 || Te(u) ? (o = !0, e.consume(u), c) : d(u);
  }
  function l(u) {
    return e.consume(u), i = !0, c;
  }
  function d(u) {
    return o && i && Ie(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(u)) : t(u);
  }
}
function xp(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !Ua.call(r, r.previous) || Nr(r.events) ? t(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(_p, e.attempt(La, e.attempt(Pa, o), t), t)(a));
  }
  function o(a) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(a);
  }
}
function Sp(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return a;
  function a(u) {
    return (u === 72 || u === 104) && $a.call(r, r.previous) && !Nr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(u), e.consume(u), s) : t(u);
  }
  function s(u) {
    if (Ie(u) && i.length < 5)
      return i += String.fromCodePoint(u), e.consume(u), s;
    if (u === 58) {
      const f = i.toLowerCase();
      if (f === "http" || f === "https")
        return e.consume(u), c;
    }
    return t(u);
  }
  function c(u) {
    return u === 47 ? (e.consume(u), o ? l : (o = !0, c)) : t(u);
  }
  function l(u) {
    return u === null || pt(u) || fe(u) || mn(u) || Et(u) ? t(u) : e.attempt(La, e.attempt(Pa, d), t)(u);
  }
  function d(u) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(u);
  }
}
function Np(e, n, t) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, e.consume(a), i) : a === 46 && r === 3 ? (e.consume(a), o) : t(a);
  }
  function o(a) {
    return a === null ? t(a) : n(a);
  }
}
function Tp(e, n, t) {
  let r, i, o;
  return a;
  function a(l) {
    return l === 46 || l === 95 ? e.check(Ba, c, s)(l) : l === null || fe(l) || mn(l) || l !== 45 && Et(l) ? c(l) : (o = !0, e.consume(l), a);
  }
  function s(l) {
    return l === 95 ? r = !0 : (i = r, r = void 0), e.consume(l), a;
  }
  function c(l) {
    return i || r || !o ? t(l) : n(l);
  }
}
function Ap(e, n) {
  let t = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (t++, e.consume(a), i) : a === 41 && r < t ? o(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? e.check(Ba, n, o)(a) : a === null || fe(a) || mn(a) ? n(a) : (e.consume(a), i);
  }
  function o(a) {
    return a === 41 && r++, e.consume(a), i;
  }
}
function vp(e, n, t) {
  return r;
  function r(s) {
    return s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126 ? (e.consume(s), r) : s === 38 ? (e.consume(s), o) : s === 93 ? (e.consume(s), i) : (
      // `<` is an end.
      s === 60 || // So is whitespace.
      s === null || fe(s) || mn(s) ? n(s) : t(s)
    );
  }
  function i(s) {
    return s === null || s === 40 || s === 91 || fe(s) || mn(s) ? n(s) : r(s);
  }
  function o(s) {
    return Ie(s) ? a(s) : t(s);
  }
  function a(s) {
    return s === 59 ? (e.consume(s), r) : Ie(s) ? (e.consume(s), a) : t(s);
  }
}
function Cp(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Te(o) ? t(o) : n(o);
  }
}
function Ua(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || fe(e);
}
function $a(e) {
  return !Ie(e);
}
function Ha(e) {
  return !(e === 47 || or(e));
}
function or(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Te(e);
}
function Nr(e) {
  let n = e.length, t = !1;
  for (; n--; ) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t;
}
const Op = {
  tokenize: Fp,
  partial: !0
};
function Ip() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Lp,
        continuation: {
          tokenize: Pp
        },
        exit: Bp
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Dp
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Rp,
        resolveTo: Mp
      }
    }
  };
}
function Rp(e, n, t) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; i--; ) {
    const c = r.events[i][1];
    if (c.type === "labelImage") {
      a = c;
      break;
    }
    if (c.type === "gfmFootnoteCall" || c.type === "labelLink" || c.type === "label" || c.type === "image" || c.type === "link")
      break;
  }
  return s;
  function s(c) {
    if (!a || !a._balanced)
      return t(c);
    const l = qe(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return l.codePointAt(0) !== 94 || !o.includes(l.slice(1)) ? t(c) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), n(c));
  }
}
function Mp(e, n) {
  let t = e.length;
  for (; t--; )
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[t + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[t + 3][1].end),
    end: Object.assign({}, e[t + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, s = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[t + 1],
    e[t + 2],
    ["enter", r, n],
    // The `[`
    e[t + 3],
    e[t + 4],
    // The `^`.
    ["enter", i, n],
    ["exit", i, n],
    // Everything in between.
    ["enter", o, n],
    ["enter", a, n],
    ["exit", a, n],
    ["exit", o, n],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, n]
  ];
  return e.splice(t, e.length - t + 1, ...s), e;
}
function Dp(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, a;
  return s;
  function s(u) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), c;
  }
  function c(u) {
    return u !== 94 ? t(u) : (e.enter("gfmFootnoteCallMarker"), e.consume(u), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l);
  }
  function l(u) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      u === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || fe(u)
    )
      return t(u);
    if (u === 93) {
      e.exit("chunkString");
      const f = e.exit("gfmFootnoteCallString");
      return i.includes(qe(r.sliceSerialize(f))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(u);
    }
    return fe(u) || (a = !0), o++, e.consume(u), u === 92 ? d : l;
  }
  function d(u) {
    return u === 91 || u === 92 || u === 93 ? (e.consume(u), o++, l) : l(u);
  }
}
function Lp(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, a = 0, s;
  return c;
  function c(g) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
  }
  function l(g) {
    return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : t(g);
  }
  function d(g) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      g === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || fe(g)
    )
      return t(g);
    if (g === 93) {
      e.exit("chunkString");
      const _ = e.exit("gfmFootnoteDefinitionLabelString");
      return o = qe(r.sliceSerialize(_)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
    }
    return fe(g) || (s = !0), a++, e.consume(g), g === 92 ? u : d;
  }
  function u(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), a++, d) : d(g);
  }
  function f(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(o) || i.push(o), ie(e, p, "gfmFootnoteDefinitionWhitespace")) : t(g);
  }
  function p(g) {
    return n(g);
  }
}
function Pp(e, n, t) {
  return e.check(Wn, n, e.attempt(Op, n, t));
}
function Bp(e) {
  e.exit("gfmFootnoteDefinition");
}
function Fp(e, n, t) {
  const r = this;
  return ie(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? n(o) : t(o);
  }
}
function zp(e) {
  let t = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return t == null && (t = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(a, s) {
    let c = -1;
    for (; ++c < a.length; )
      if (a[c][0] === "enter" && a[c][1].type === "strikethroughSequenceTemporary" && a[c][1]._close) {
        let l = c;
        for (; l--; )
          if (a[l][0] === "exit" && a[l][1].type === "strikethroughSequenceTemporary" && a[l][1]._open && // If the sizes are the same:
          a[c][1].end.offset - a[c][1].start.offset === a[l][1].end.offset - a[l][1].start.offset) {
            a[c][1].type = "strikethroughSequence", a[l][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, a[l][1].start),
              end: Object.assign({}, a[c][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, a[l][1].end),
              end: Object.assign({}, a[c][1].start)
            }, f = [["enter", d, s], ["enter", a[l][1], s], ["exit", a[l][1], s], ["enter", u, s]], p = s.parser.constructs.insideSpan.null;
            p && ze(f, f.length, 0, _t(p, a.slice(l + 1, c), s)), ze(f, f.length, 0, [["exit", u, s], ["enter", a[c][1], s], ["exit", a[c][1], s], ["exit", d, s]]), ze(a, l - 1, c - l + 3, f), c = l + f.length - 2;
            break;
          }
      }
    for (c = -1; ++c < a.length; )
      a[c][1].type === "strikethroughSequenceTemporary" && (a[c][1].type = "data");
    return a;
  }
  function o(a, s, c) {
    const l = this.previous, d = this.events;
    let u = 0;
    return f;
    function f(g) {
      return l === 126 && d[d.length - 1][1].type !== "characterEscape" ? c(g) : (a.enter("strikethroughSequenceTemporary"), p(g));
    }
    function p(g) {
      const _ = vn(l);
      if (g === 126)
        return u > 1 ? c(g) : (a.consume(g), u++, p);
      if (u < 2 && !t) return c(g);
      const k = a.exit("strikethroughSequenceTemporary"), E = vn(g);
      return k._open = !E || E === 2 && !!_, k._close = !_ || _ === 2 && !!E, s(g);
    }
  }
}
class Up {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, t, r) {
    $p(this, n, t, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(o, a) {
      return o[0] - a[0];
    }), this.map.length === 0)
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0; )
      t -= 1, r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), n.length = this.map[t][0];
    r.push(n.slice()), n.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        n.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function $p(e, n, t, r) {
  let i = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === n) {
        e.map[i][1] += t, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([n, t, r]);
  }
}
function Hp(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length; ) {
    const i = e[n];
    if (t) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = !0);
    n += 1;
  }
  return r;
}
function Gp() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Kp,
        resolveAll: qp
      }
    }
  };
}
function Kp(e, n, t) {
  const r = this;
  let i = 0, o = 0, a;
  return s;
  function s(w) {
    let L = r.events.length - 1;
    for (; L > -1; ) {
      const R = r.events[L][1].type;
      if (R === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      R === "linePrefix") L--;
      else break;
    }
    const P = L > -1 ? r.events[L][1].type : null, B = P === "tableHead" || P === "tableRow" ? y : c;
    return B === y && r.parser.lazy[r.now().line] ? t(w) : B(w);
  }
  function c(w) {
    return e.enter("tableHead"), e.enter("tableRow"), l(w);
  }
  function l(w) {
    return w === 124 || (a = !0, o += 1), d(w);
  }
  function d(w) {
    return w === null ? t(w) : W(w) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), p) : t(w) : ne(w) ? ie(e, d, "whitespace")(w) : (o += 1, a && (a = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), a = !0, d) : (e.enter("data"), u(w)));
  }
  function u(w) {
    return w === null || w === 124 || fe(w) ? (e.exit("data"), d(w)) : (e.consume(w), w === 92 ? f : u);
  }
  function f(w) {
    return w === 92 || w === 124 ? (e.consume(w), u) : u(w);
  }
  function p(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(w) : (e.enter("tableDelimiterRow"), a = !1, ne(w) ? ie(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : g(w));
  }
  function g(w) {
    return w === 45 || w === 58 ? k(w) : w === 124 ? (a = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), _) : C(w);
  }
  function _(w) {
    return ne(w) ? ie(e, k, "whitespace")(w) : k(w);
  }
  function k(w) {
    return w === 58 ? (o += 1, a = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), E) : w === 45 ? (o += 1, E(w)) : w === null || W(w) ? A(w) : C(w);
  }
  function E(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), x(w)) : C(w);
  }
  function x(w) {
    return w === 45 ? (e.consume(w), x) : w === 58 ? (a = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(w));
  }
  function S(w) {
    return ne(w) ? ie(e, A, "whitespace")(w) : A(w);
  }
  function A(w) {
    return w === 124 ? g(w) : w === null || W(w) ? !a || i !== o ? C(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(w)) : C(w);
  }
  function C(w) {
    return t(w);
  }
  function y(w) {
    return e.enter("tableRow"), U(w);
  }
  function U(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), U) : w === null || W(w) ? (e.exit("tableRow"), n(w)) : ne(w) ? ie(e, U, "whitespace")(w) : (e.enter("data"), K(w));
  }
  function K(w) {
    return w === null || w === 124 || fe(w) ? (e.exit("data"), U(w)) : (e.consume(w), w === 92 ? H : K);
  }
  function H(w) {
    return w === 92 || w === 124 ? (e.consume(w), K) : K(w);
  }
}
function qp(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], a = [0, 0, 0, 0], s = !1, c = 0, l, d, u;
  const f = new Up();
  for (; ++t < e.length; ) {
    const p = e[t], g = p[1];
    p[0] === "enter" ? g.type === "tableHead" ? (s = !1, c !== 0 && (Ti(f, n, c, l, d), d = void 0, c = 0), l = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, f.add(t, 0, [["enter", l, n]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, u = void 0, o = [0, 0, 0, 0], a = [0, t + 1, 0, 0], s && (s = !1, d = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, f.add(t, 0, [["enter", d, n]])), i = g.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (o[1] !== 0 && (a[0] = a[1], u = at(f, n, o, i, void 0, u), o = [0, 0, 0, 0]), a[2] = t)) : g.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (a[0] = a[1], u = at(f, n, o, i, void 0, u)), o = a, a = [o[1], t, 0, 0])) : g.type === "tableHead" ? (s = !0, c = t) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (c = t, o[1] !== 0 ? (a[0] = a[1], u = at(f, n, o, i, t, u)) : a[1] !== 0 && (u = at(f, n, a, i, t, u)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (a[3] = t);
  }
  for (c !== 0 && Ti(f, n, c, l, d), f.consume(n.events), t = -1; ++t < n.events.length; ) {
    const p = n.events[t];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = Hp(n.events, t));
  }
  return e;
}
function at(e, n, t, r, i, o) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", s = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, Sn(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const c = Sn(n.events, t[1]);
  if (o = {
    type: a,
    start: Object.assign({}, c),
    // Note: correct end is set later.
    end: Object.assign({}, c)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const l = Sn(n.events, t[2]), d = Sn(n.events, t[3]), u = {
      type: s,
      start: Object.assign({}, l),
      end: Object.assign({}, d)
    };
    if (e.add(t[2], 0, [["enter", u, n]]), r !== 2) {
      const f = n.events[t[2]], p = n.events[t[3]];
      if (f[1].end = Object.assign({}, p[1].end), f[1].type = "chunkText", f[1].contentType = "text", t[3] > t[2] + 1) {
        const g = t[2] + 1, _ = t[3] - t[2] - 1;
        e.add(g, _, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", u, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Sn(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function Ti(e, n, t, r, i) {
  const o = [], a = Sn(n.events, t);
  i && (i.end = Object.assign({}, a), o.push(["exit", i, n])), r.end = Object.assign({}, a), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function Sn(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const Wp = {
  name: "tasklistCheck",
  tokenize: Yp
};
function Vp() {
  return {
    text: {
      91: Wp
    }
  };
}
function Yp(e, n, t) {
  const r = this;
  return i;
  function i(c) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? t(c) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(c), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(c) {
    return fe(c) ? (e.enter("taskListCheckValueUnchecked"), e.consume(c), e.exit("taskListCheckValueUnchecked"), a) : c === 88 || c === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(c), e.exit("taskListCheckValueChecked"), a) : t(c);
  }
  function a(c) {
    return c === 93 ? (e.enter("taskListCheckMarker"), e.consume(c), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : t(c);
  }
  function s(c) {
    return W(c) ? n(c) : ne(c) ? e.check({
      tokenize: Zp
    }, n, t)(c) : t(c);
  }
}
function Zp(e, n, t) {
  return ie(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function Xp(e) {
  return ea([
    kp(),
    Ip(),
    zp(e),
    Gp(),
    Vp()
  ]);
}
const Qp = {};
function Jp(e) {
  const n = (
    /** @type {Processor<Root>} */
    this
  ), t = e || Qp, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), a = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Xp(t)), o.push(bp()), a.push(Ep(t));
}
const Ai = (
  // Note: overloads like this are needed to support optional generics.
  /**
   * @type {(
   *   (<Kind extends UnistParent, Check extends Test>(parent: Kind, index: Child<Kind> | number, test: Check) => Matches<Child<Kind>, Check> | undefined) &
   *   (<Kind extends UnistParent>(parent: Kind, index: Child<Kind> | number, test?: null | undefined) => Child<Kind> | undefined)
   * )}
   */
  /**
   * @param {UnistParent} parent
   * @param {UnistNode | number} index
   * @param {Test} [test]
   * @returns {UnistNode | undefined}
   */
  function(e, n, t) {
    const r = Vn(t);
    if (!e || !e.type || !e.children)
      throw new Error("Expected parent node");
    if (typeof n == "number") {
      if (n < 0 || n === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (n = e.children.indexOf(n), n < 0)
      throw new Error("Expected child node or index");
    for (; ++n < e.children.length; )
      if (r(e.children[n], n, e))
        return e.children[n];
  }
), En = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return nf;
    if (typeof e == "string")
      return ef(e);
    if (typeof e == "object")
      return jp(e);
    if (typeof e == "function")
      return Tr(e);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function jp(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = En(e[t]);
  return Tr(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i)) return !0;
    return !1;
  }
}
function ef(e) {
  return Tr(n);
  function n(t) {
    return t.tagName === e;
  }
}
function Tr(e) {
  return n;
  function n(t, r, i) {
    return !!(tf(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function nf(e) {
  return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
}
function tf(e) {
  return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
}
const vi = /\n/g, Ci = /[\t ]+/g, sr = En("br"), Oi = En(df), rf = En("p"), Ii = En("tr"), af = En([
  // List from: <https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements>
  "datalist",
  "head",
  "noembed",
  "noframes",
  "noscript",
  // Act as if we support scripting.
  "rp",
  "script",
  "style",
  "template",
  "title",
  // Hidden attribute.
  uf,
  // From: <https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3>
  pf
]), Ga = En([
  "address",
  // Flow content
  "article",
  // Sections and headings
  "aside",
  // Sections and headings
  "blockquote",
  // Flow content
  "body",
  // Page
  "caption",
  // `table-caption`
  "center",
  // Flow content (legacy)
  "dd",
  // Lists
  "dialog",
  // Flow content
  "dir",
  // Lists (legacy)
  "dl",
  // Lists
  "dt",
  // Lists
  "div",
  // Flow content
  "figure",
  // Flow content
  "figcaption",
  // Flow content
  "footer",
  // Flow content
  "form,",
  // Flow content
  "h1",
  // Sections and headings
  "h2",
  // Sections and headings
  "h3",
  // Sections and headings
  "h4",
  // Sections and headings
  "h5",
  // Sections and headings
  "h6",
  // Sections and headings
  "header",
  // Flow content
  "hgroup",
  // Sections and headings
  "hr",
  // Flow content
  "html",
  // Page
  "legend",
  // Flow content
  "li",
  // Lists (as `display: list-item`)
  "listing",
  // Flow content (legacy)
  "main",
  // Flow content
  "menu",
  // Lists
  "nav",
  // Sections and headings
  "ol",
  // Lists
  "p",
  // Flow content
  "plaintext",
  // Flow content (legacy)
  "pre",
  // Flow content
  "section",
  // Sections and headings
  "ul",
  // Lists
  "xmp"
  // Flow content (legacy)
]);
function of(e, n) {
  const t = n || {}, r = "children" in e ? e.children : [], i = Ga(e), o = Wa(e, {
    whitespace: t.whitespace || "normal"
  }), a = [];
  (e.type === "text" || e.type === "comment") && a.push(
    ...qa(e, {
      breakBefore: !0,
      breakAfter: !0
    })
  );
  let s = -1;
  for (; ++s < r.length; )
    a.push(
      ...Ka(
        r[s],
        // @ts-expect-error: `tree` is a parent if we’re here.
        e,
        {
          whitespace: o,
          breakBefore: s ? void 0 : i,
          breakAfter: s < r.length - 1 ? sr(r[s + 1]) : i
        }
      )
    );
  const c = [];
  let l;
  for (s = -1; ++s < a.length; ) {
    const d = a[s];
    typeof d == "number" ? l !== void 0 && d > l && (l = d) : d && (l !== void 0 && l > -1 && c.push(`
`.repeat(l) || " "), l = -1, c.push(d));
  }
  return c.join("");
}
function Ka(e, n, t) {
  return e.type === "element" ? sf(e, n, t) : e.type === "text" ? t.whitespace === "normal" ? qa(e, t) : lf(e) : [];
}
function sf(e, n, t) {
  const r = Wa(e, t), i = e.children || [];
  let o = -1, a = [];
  if (af(e))
    return a;
  let s, c;
  for (sr(e) || Ii(e) && // @ts-expect-error: something up with types of parents.
  Ai(n, e, Ii) ? c = `
` : rf(e) ? (s = 2, c = 2) : Ga(e) && (s = 1, c = 1); ++o < i.length; )
    a = a.concat(
      Ka(i[o], e, {
        whitespace: r,
        breakBefore: o ? void 0 : s,
        breakAfter: o < i.length - 1 ? sr(i[o + 1]) : c
      })
    );
  return Oi(e) && // @ts-expect-error: something up with types of parents.
  Ai(n, e, Oi) && a.push("	"), s && a.unshift(s), c && a.push(c), a;
}
function qa(e, n) {
  const t = String(e.value), r = [], i = [];
  let o = 0;
  for (; o <= t.length; ) {
    vi.lastIndex = o;
    const c = vi.exec(t), l = c && "index" in c ? c.index : t.length;
    r.push(
      // Any sequence of collapsible spaces and tabs immediately preceding or
      // following a segment break is removed.
      cf(
        // […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        t.slice(o, l).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
        o === 0 ? n.breakBefore : !0,
        l === t.length ? n.breakAfter : !0
      )
    ), o = l + 1;
  }
  let a = -1, s;
  for (; ++a < r.length; )
    r[a].charCodeAt(r[a].length - 1) === 8203 || a < r.length - 1 && r[a + 1].charCodeAt(0) === 8203 ? (i.push(r[a]), s = void 0) : r[a] ? (typeof s == "number" && i.push(s), i.push(r[a]), s = 0) : (a === 0 || a === r.length - 1) && i.push(0);
  return i;
}
function lf(e) {
  return [String(e.value)];
}
function cf(e, n, t) {
  const r = [];
  let i = 0, o;
  for (; i < e.length; ) {
    Ci.lastIndex = i;
    const a = Ci.exec(e);
    o = a ? a.index : e.length, !i && !o && a && !n && r.push(""), i !== o && r.push(e.slice(i, o)), i = a ? o + a[0].length : o;
  }
  return i !== o && !t && r.push(""), r.join(" ");
}
function Wa(e, n) {
  if (e.type === "element") {
    const t = e.properties || {};
    switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return t.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return t.noWrap ? "nowrap" : n.whitespace;
      case "textarea":
        return "pre-wrap";
    }
  }
  return n.whitespace;
}
function uf(e) {
  return !!(e.properties || {}).hidden;
}
function df(e) {
  return e.tagName === "td" || e.tagName === "th";
}
function pf(e) {
  return e.tagName === "dialog" && !(e.properties || {}).open;
}
function ff(e) {
  const n = e.regex, t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", a = "(?!struct)(" + r + "|" + n.optional(i) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", s = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, l = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(l, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      t,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, f = {
    className: "title",
    begin: n.optional(i) + e.IDENT_RE,
    relevance: 0
  }, p = n.optional(i) + e.IDENT_RE + "\\s*\\(", g = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], _ = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], k = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], E = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], A = {
    type: _,
    keyword: g,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: k
  }, C = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: E
    },
    begin: n.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      n.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, y = [
    C,
    u,
    s,
    t,
    e.C_BLOCK_COMMENT_MODE,
    d,
    l
  ], U = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: A,
    contains: y.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: A,
        contains: y.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, K = {
    className: "function",
    begin: "(" + a + "[\\*&\\s]+)+" + p,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: A,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: A,
        relevance: 0
      },
      {
        begin: p,
        returnBegin: !0,
        contains: [f],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          l,
          d
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: A,
        relevance: 0,
        contains: [
          t,
          e.C_BLOCK_COMMENT_MODE,
          l,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: A,
            relevance: 0,
            contains: [
              "self",
              t,
              e.C_BLOCK_COMMENT_MODE,
              l,
              d,
              s
            ]
          }
        ]
      },
      s,
      t,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: A,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      U,
      K,
      C,
      y,
      [
        u,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: A,
          contains: [
            "self",
            s
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: A
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function gf(e) {
  const n = {
    type: [
      "boolean",
      "byte",
      "word",
      "String"
    ],
    built_in: [
      "KeyboardController",
      "MouseController",
      "SoftwareSerial",
      "EthernetServer",
      "EthernetClient",
      "LiquidCrystal",
      "RobotControl",
      "GSMVoiceCall",
      "EthernetUDP",
      "EsploraTFT",
      "HttpClient",
      "RobotMotor",
      "WiFiClient",
      "GSMScanner",
      "FileSystem",
      "Scheduler",
      "GSMServer",
      "YunClient",
      "YunServer",
      "IPAddress",
      "GSMClient",
      "GSMModem",
      "Keyboard",
      "Ethernet",
      "Console",
      "GSMBand",
      "Esplora",
      "Stepper",
      "Process",
      "WiFiUDP",
      "GSM_SMS",
      "Mailbox",
      "USBHost",
      "Firmata",
      "PImage",
      "Client",
      "Server",
      "GSMPIN",
      "FileIO",
      "Bridge",
      "Serial",
      "EEPROM",
      "Stream",
      "Mouse",
      "Audio",
      "Servo",
      "File",
      "Task",
      "GPRS",
      "WiFi",
      "Wire",
      "TFT",
      "GSM",
      "SPI",
      "SD"
    ],
    _hints: [
      "setup",
      "loop",
      "runShellCommandAsynchronously",
      "analogWriteResolution",
      "retrieveCallingNumber",
      "printFirmwareVersion",
      "analogReadResolution",
      "sendDigitalPortPair",
      "noListenOnLocalhost",
      "readJoystickButton",
      "setFirmwareVersion",
      "readJoystickSwitch",
      "scrollDisplayRight",
      "getVoiceCallStatus",
      "scrollDisplayLeft",
      "writeMicroseconds",
      "delayMicroseconds",
      "beginTransmission",
      "getSignalStrength",
      "runAsynchronously",
      "getAsynchronously",
      "listenOnLocalhost",
      "getCurrentCarrier",
      "readAccelerometer",
      "messageAvailable",
      "sendDigitalPorts",
      "lineFollowConfig",
      "countryNameWrite",
      "runShellCommand",
      "readStringUntil",
      "rewindDirectory",
      "readTemperature",
      "setClockDivider",
      "readLightSensor",
      "endTransmission",
      "analogReference",
      "detachInterrupt",
      "countryNameRead",
      "attachInterrupt",
      "encryptionType",
      "readBytesUntil",
      "robotNameWrite",
      "readMicrophone",
      "robotNameRead",
      "cityNameWrite",
      "userNameWrite",
      "readJoystickY",
      "readJoystickX",
      "mouseReleased",
      "openNextFile",
      "scanNetworks",
      "noInterrupts",
      "digitalWrite",
      "beginSpeaker",
      "mousePressed",
      "isActionDone",
      "mouseDragged",
      "displayLogos",
      "noAutoscroll",
      "addParameter",
      "remoteNumber",
      "getModifiers",
      "keyboardRead",
      "userNameRead",
      "waitContinue",
      "processInput",
      "parseCommand",
      "printVersion",
      "readNetworks",
      "writeMessage",
      "blinkVersion",
      "cityNameRead",
      "readMessage",
      "setDataMode",
      "parsePacket",
      "isListening",
      "setBitOrder",
      "beginPacket",
      "isDirectory",
      "motorsWrite",
      "drawCompass",
      "digitalRead",
      "clearScreen",
      "serialEvent",
      "rightToLeft",
      "setTextSize",
      "leftToRight",
      "requestFrom",
      "keyReleased",
      "compassRead",
      "analogWrite",
      "interrupts",
      "WiFiServer",
      "disconnect",
      "playMelody",
      "parseFloat",
      "autoscroll",
      "getPINUsed",
      "setPINUsed",
      "setTimeout",
      "sendAnalog",
      "readSlider",
      "analogRead",
      "beginWrite",
      "createChar",
      "motorsStop",
      "keyPressed",
      "tempoWrite",
      "readButton",
      "subnetMask",
      "debugPrint",
      "macAddress",
      "writeGreen",
      "randomSeed",
      "attachGPRS",
      "readString",
      "sendString",
      "remotePort",
      "releaseAll",
      "mouseMoved",
      "background",
      "getXChange",
      "getYChange",
      "answerCall",
      "getResult",
      "voiceCall",
      "endPacket",
      "constrain",
      "getSocket",
      "writeJSON",
      "getButton",
      "available",
      "connected",
      "findUntil",
      "readBytes",
      "exitValue",
      "readGreen",
      "writeBlue",
      "startLoop",
      "IPAddress",
      "isPressed",
      "sendSysex",
      "pauseMode",
      "gatewayIP",
      "setCursor",
      "getOemKey",
      "tuneWrite",
      "noDisplay",
      "loadImage",
      "switchPIN",
      "onRequest",
      "onReceive",
      "changePIN",
      "playFile",
      "noBuffer",
      "parseInt",
      "overflow",
      "checkPIN",
      "knobRead",
      "beginTFT",
      "bitClear",
      "updateIR",
      "bitWrite",
      "position",
      "writeRGB",
      "highByte",
      "writeRed",
      "setSpeed",
      "readBlue",
      "noStroke",
      "remoteIP",
      "transfer",
      "shutdown",
      "hangCall",
      "beginSMS",
      "endWrite",
      "attached",
      "maintain",
      "noCursor",
      "checkReg",
      "checkPUK",
      "shiftOut",
      "isValid",
      "shiftIn",
      "pulseIn",
      "connect",
      "println",
      "localIP",
      "pinMode",
      "getIMEI",
      "display",
      "noBlink",
      "process",
      "getBand",
      "running",
      "beginSD",
      "drawBMP",
      "lowByte",
      "setBand",
      "release",
      "bitRead",
      "prepare",
      "pointTo",
      "readRed",
      "setMode",
      "noFill",
      "remove",
      "listen",
      "stroke",
      "detach",
      "attach",
      "noTone",
      "exists",
      "buffer",
      "height",
      "bitSet",
      "circle",
      "config",
      "cursor",
      "random",
      "IRread",
      "setDNS",
      "endSMS",
      "getKey",
      "micros",
      "millis",
      "begin",
      "print",
      "write",
      "ready",
      "flush",
      "width",
      "isPIN",
      "blink",
      "clear",
      "press",
      "mkdir",
      "rmdir",
      "close",
      "point",
      "yield",
      "image",
      "BSSID",
      "click",
      "delay",
      "read",
      "text",
      "move",
      "peek",
      "beep",
      "rect",
      "line",
      "open",
      "seek",
      "fill",
      "size",
      "turn",
      "stop",
      "home",
      "find",
      "step",
      "tone",
      "sqrt",
      "RSSI",
      "SSID",
      "end",
      "bit",
      "tan",
      "cos",
      "sin",
      "pow",
      "map",
      "abs",
      "max",
      "min",
      "get",
      "run",
      "put"
    ],
    literal: [
      "DIGITAL_MESSAGE",
      "FIRMATA_STRING",
      "ANALOG_MESSAGE",
      "REPORT_DIGITAL",
      "REPORT_ANALOG",
      "INPUT_PULLUP",
      "SET_PIN_MODE",
      "INTERNAL2V56",
      "SYSTEM_RESET",
      "LED_BUILTIN",
      "INTERNAL1V1",
      "SYSEX_START",
      "INTERNAL",
      "EXTERNAL",
      "DEFAULT",
      "OUTPUT",
      "INPUT",
      "HIGH",
      "LOW"
    ]
  }, t = ff(e), r = (
    /** @type {Record<string,any>} */
    t.keywords
  );
  return r.type = [
    ...r.type,
    ...n.type
  ], r.literal = [
    ...r.literal,
    ...n.literal
  ], r.built_in = [
    ...r.built_in,
    ...n.built_in
  ], r._hints = n._hints, t.name = "Arduino", t.aliases = ["ino"], t.supersetOf = "cpp", t;
}
function hf(e) {
  const n = e.regex, t = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [t]
      }
      // default values
    ]
  };
  Object.assign(t, {
    className: "variable",
    variants: [
      { begin: n.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const i = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), a = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, s = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      t,
      i
    ]
  };
  i.contains.push(s);
  const c = {
    match: /\\"/
  }, l = {
    className: "string",
    begin: /'/,
    end: /'/
  }, d = {
    match: /\\'/
  }, u = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      t
    ]
  }, f = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], p = e.SHEBANG({
    binary: `(${f.join("|")})`,
    relevance: 10
  }), g = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, _ = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], k = [
    "true",
    "false"
  ], E = { match: /(\/[a-z._-]+)+/ }, x = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], S = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], A = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], C = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: _,
      literal: k,
      built_in: [
        ...x,
        ...S,
        // Shell modifiers
        "set",
        "shopt",
        ...A,
        ...C
      ]
    },
    contains: [
      p,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      g,
      u,
      o,
      a,
      E,
      s,
      c,
      l,
      d,
      t
    ]
  };
}
function mf(e) {
  const n = e.regex, t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", a = "(" + r + "|" + n.optional(i) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", s = {
    className: "type",
    variants: [
      { begin: "\\b[a-z\\d_]*_t\\b" },
      { match: /\batomic_[a-z]{3,6}\b/ }
    ]
  }, l = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      { match: /\b(0b[01']+)/ },
      { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
      { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
      { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(l, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      t,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, f = {
    className: "title",
    begin: n.optional(i) + e.IDENT_RE,
    relevance: 0
  }, p = n.optional(i) + e.IDENT_RE + "\\s*\\(", k = {
    keyword: [
      "asm",
      "auto",
      "break",
      "case",
      "continue",
      "default",
      "do",
      "else",
      "enum",
      "extern",
      "for",
      "fortran",
      "goto",
      "if",
      "inline",
      "register",
      "restrict",
      "return",
      "sizeof",
      "typeof",
      "typeof_unqual",
      "struct",
      "switch",
      "typedef",
      "union",
      "volatile",
      "while",
      "_Alignas",
      "_Alignof",
      "_Atomic",
      "_Generic",
      "_Noreturn",
      "_Static_assert",
      "_Thread_local",
      // aliases
      "alignas",
      "alignof",
      "noreturn",
      "static_assert",
      "thread_local",
      // not a C keyword but is, for all intents and purposes, treated exactly like one.
      "_Pragma"
    ],
    type: [
      "float",
      "double",
      "signed",
      "unsigned",
      "int",
      "short",
      "long",
      "char",
      "void",
      "_Bool",
      "_BitInt",
      "_Complex",
      "_Imaginary",
      "_Decimal32",
      "_Decimal64",
      "_Decimal96",
      "_Decimal128",
      "_Decimal64x",
      "_Decimal128x",
      "_Float16",
      "_Float32",
      "_Float64",
      "_Float128",
      "_Float32x",
      "_Float64x",
      "_Float128x",
      // modifiers
      "const",
      "static",
      "constexpr",
      // aliases
      "complex",
      "bool",
      "imaginary"
    ],
    literal: "true false NULL",
    // TODO: apply hinting work similar to what was done in cpp.js
    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
  }, E = [
    u,
    s,
    t,
    e.C_BLOCK_COMMENT_MODE,
    d,
    l
  ], x = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: k,
    contains: E.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: k,
        contains: E.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, S = {
    begin: "(" + a + "[\\*&\\s]+)+" + p,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: k,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: k,
        relevance: 0
      },
      {
        begin: p,
        returnBegin: !0,
        contains: [e.inherit(f, { className: "title.function" })],
        relevance: 0
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: k,
        relevance: 0,
        contains: [
          t,
          e.C_BLOCK_COMMENT_MODE,
          l,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: k,
            relevance: 0,
            contains: [
              "self",
              t,
              e.C_BLOCK_COMMENT_MODE,
              l,
              d,
              s
            ]
          }
        ]
      },
      s,
      t,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C",
    aliases: ["h"],
    keywords: k,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(
      x,
      S,
      E,
      [
        u,
        {
          begin: e.IDENT_RE + "::",
          keywords: k
        },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [
            { beginKeywords: "final class struct" },
            e.TITLE_MODE
          ]
        }
      ]
    ),
    exports: {
      preprocessor: u,
      strings: l,
      keywords: k
    }
  };
}
function bf(e) {
  const n = e.regex, t = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", a = "(?!struct)(" + r + "|" + n.optional(i) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", s = {
    className: "type",
    begin: "\\b[a-z\\d_]*_t\\b"
  }, l = {
    className: "string",
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
        end: "'",
        illegal: "."
      },
      e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  }, d = {
    className: "number",
    variants: [
      // Floating-point literal.
      {
        begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
      },
      // Integer literal.
      {
        begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
        // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
        // literal highlight actually makes it stand out more.
      }
    ],
    relevance: 0
  }, u = {
    className: "meta",
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      e.inherit(l, { className: "string" }),
      {
        className: "string",
        begin: /<.*?>/
      },
      t,
      e.C_BLOCK_COMMENT_MODE
    ]
  }, f = {
    className: "title",
    begin: n.optional(i) + e.IDENT_RE,
    relevance: 0
  }, p = n.optional(i) + e.IDENT_RE + "\\s*\\(", g = [
    "alignas",
    "alignof",
    "and",
    "and_eq",
    "asm",
    "atomic_cancel",
    "atomic_commit",
    "atomic_noexcept",
    "auto",
    "bitand",
    "bitor",
    "break",
    "case",
    "catch",
    "class",
    "co_await",
    "co_return",
    "co_yield",
    "compl",
    "concept",
    "const_cast|10",
    "consteval",
    "constexpr",
    "constinit",
    "continue",
    "decltype",
    "default",
    "delete",
    "do",
    "dynamic_cast|10",
    "else",
    "enum",
    "explicit",
    "export",
    "extern",
    "false",
    "final",
    "for",
    "friend",
    "goto",
    "if",
    "import",
    "inline",
    "module",
    "mutable",
    "namespace",
    "new",
    "noexcept",
    "not",
    "not_eq",
    "nullptr",
    "operator",
    "or",
    "or_eq",
    "override",
    "private",
    "protected",
    "public",
    "reflexpr",
    "register",
    "reinterpret_cast|10",
    "requires",
    "return",
    "sizeof",
    "static_assert",
    "static_cast|10",
    "struct",
    "switch",
    "synchronized",
    "template",
    "this",
    "thread_local",
    "throw",
    "transaction_safe",
    "transaction_safe_dynamic",
    "true",
    "try",
    "typedef",
    "typeid",
    "typename",
    "union",
    "using",
    "virtual",
    "volatile",
    "while",
    "xor",
    "xor_eq"
  ], _ = [
    "bool",
    "char",
    "char16_t",
    "char32_t",
    "char8_t",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
    "wchar_t",
    "unsigned",
    "signed",
    "const",
    "static"
  ], k = [
    "any",
    "auto_ptr",
    "barrier",
    "binary_semaphore",
    "bitset",
    "complex",
    "condition_variable",
    "condition_variable_any",
    "counting_semaphore",
    "deque",
    "false_type",
    "flat_map",
    "flat_set",
    "future",
    "imaginary",
    "initializer_list",
    "istringstream",
    "jthread",
    "latch",
    "lock_guard",
    "multimap",
    "multiset",
    "mutex",
    "optional",
    "ostringstream",
    "packaged_task",
    "pair",
    "promise",
    "priority_queue",
    "queue",
    "recursive_mutex",
    "recursive_timed_mutex",
    "scoped_lock",
    "set",
    "shared_future",
    "shared_lock",
    "shared_mutex",
    "shared_timed_mutex",
    "shared_ptr",
    "stack",
    "string_view",
    "stringstream",
    "timed_mutex",
    "thread",
    "true_type",
    "tuple",
    "unique_lock",
    "unique_ptr",
    "unordered_map",
    "unordered_multimap",
    "unordered_multiset",
    "unordered_set",
    "variant",
    "vector",
    "weak_ptr",
    "wstring",
    "wstring_view"
  ], E = [
    "abort",
    "abs",
    "acos",
    "apply",
    "as_const",
    "asin",
    "atan",
    "atan2",
    "calloc",
    "ceil",
    "cerr",
    "cin",
    "clog",
    "cos",
    "cosh",
    "cout",
    "declval",
    "endl",
    "exchange",
    "exit",
    "exp",
    "fabs",
    "floor",
    "fmod",
    "forward",
    "fprintf",
    "fputs",
    "free",
    "frexp",
    "fscanf",
    "future",
    "invoke",
    "isalnum",
    "isalpha",
    "iscntrl",
    "isdigit",
    "isgraph",
    "islower",
    "isprint",
    "ispunct",
    "isspace",
    "isupper",
    "isxdigit",
    "labs",
    "launder",
    "ldexp",
    "log",
    "log10",
    "make_pair",
    "make_shared",
    "make_shared_for_overwrite",
    "make_tuple",
    "make_unique",
    "malloc",
    "memchr",
    "memcmp",
    "memcpy",
    "memset",
    "modf",
    "move",
    "pow",
    "printf",
    "putchar",
    "puts",
    "realloc",
    "scanf",
    "sin",
    "sinh",
    "snprintf",
    "sprintf",
    "sqrt",
    "sscanf",
    "std",
    "stderr",
    "stdin",
    "stdout",
    "strcat",
    "strchr",
    "strcmp",
    "strcpy",
    "strcspn",
    "strlen",
    "strncat",
    "strncmp",
    "strncpy",
    "strpbrk",
    "strrchr",
    "strspn",
    "strstr",
    "swap",
    "tan",
    "tanh",
    "terminate",
    "to_underlying",
    "tolower",
    "toupper",
    "vfprintf",
    "visit",
    "vprintf",
    "vsprintf"
  ], A = {
    type: _,
    keyword: g,
    literal: [
      "NULL",
      "false",
      "nullopt",
      "nullptr",
      "true"
    ],
    built_in: ["_Pragma"],
    _type_hints: k
  }, C = {
    className: "function.dispatch",
    relevance: 0,
    keywords: {
      // Only for relevance, not highlighting.
      _hint: E
    },
    begin: n.concat(
      /\b/,
      /(?!decltype)/,
      /(?!if)/,
      /(?!for)/,
      /(?!switch)/,
      /(?!while)/,
      e.IDENT_RE,
      n.lookahead(/(<[^<>]+>|)\s*\(/)
    )
  }, y = [
    C,
    u,
    s,
    t,
    e.C_BLOCK_COMMENT_MODE,
    d,
    l
  ], U = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: "new throw return else",
        end: /;/
      }
    ],
    keywords: A,
    contains: y.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: A,
        contains: y.concat(["self"]),
        relevance: 0
      }
    ]),
    relevance: 0
  }, K = {
    className: "function",
    begin: "(" + a + "[\\*&\\s]+)+" + p,
    returnBegin: !0,
    end: /[{;=]/,
    excludeEnd: !0,
    keywords: A,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      {
        // to prevent it from being confused as the function title
        begin: r,
        keywords: A,
        relevance: 0
      },
      {
        begin: p,
        returnBegin: !0,
        contains: [f],
        relevance: 0
      },
      // needed because we do not have look-behind on the below rule
      // to prevent it from grabbing the final : in a :: pair
      {
        begin: /::/,
        relevance: 0
      },
      // initializers
      {
        begin: /:/,
        endsWithParent: !0,
        contains: [
          l,
          d
        ]
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: A,
        relevance: 0,
        contains: [
          t,
          e.C_BLOCK_COMMENT_MODE,
          l,
          d,
          s,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: A,
            relevance: 0,
            contains: [
              "self",
              t,
              e.C_BLOCK_COMMENT_MODE,
              l,
              d,
              s
            ]
          }
        ]
      },
      s,
      t,
      e.C_BLOCK_COMMENT_MODE,
      u
    ]
  };
  return {
    name: "C++",
    aliases: [
      "cc",
      "c++",
      "h++",
      "hpp",
      "hh",
      "hxx",
      "cxx"
    ],
    keywords: A,
    illegal: "</",
    classNameAliases: { "function.dispatch": "built_in" },
    contains: [].concat(
      U,
      K,
      C,
      y,
      [
        u,
        {
          // containers: ie, `vector <int> rooms (9);`
          begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
          end: ">",
          keywords: A,
          contains: [
            "self",
            s
          ]
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: A
        },
        {
          match: [
            // extra complexity to deal with `enum class` and `enum struct`
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    )
  };
}
function Ef(e) {
  const n = [
    "bool",
    "byte",
    "char",
    "decimal",
    "delegate",
    "double",
    "dynamic",
    "enum",
    "float",
    "int",
    "long",
    "nint",
    "nuint",
    "object",
    "sbyte",
    "short",
    "string",
    "ulong",
    "uint",
    "ushort"
  ], t = [
    "public",
    "private",
    "protected",
    "static",
    "internal",
    "protected",
    "abstract",
    "async",
    "extern",
    "override",
    "unsafe",
    "virtual",
    "new",
    "sealed",
    "partial"
  ], r = [
    "default",
    "false",
    "null",
    "true"
  ], i = [
    "abstract",
    "as",
    "base",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "do",
    "else",
    "event",
    "explicit",
    "extern",
    "finally",
    "fixed",
    "for",
    "foreach",
    "goto",
    "if",
    "implicit",
    "in",
    "interface",
    "internal",
    "is",
    "lock",
    "namespace",
    "new",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "record",
    "ref",
    "return",
    "scoped",
    "sealed",
    "sizeof",
    "stackalloc",
    "static",
    "struct",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "unchecked",
    "unsafe",
    "using",
    "virtual",
    "void",
    "volatile",
    "while"
  ], o = [
    "add",
    "alias",
    "and",
    "ascending",
    "args",
    "async",
    "await",
    "by",
    "descending",
    "dynamic",
    "equals",
    "file",
    "from",
    "get",
    "global",
    "group",
    "init",
    "into",
    "join",
    "let",
    "nameof",
    "not",
    "notnull",
    "on",
    "or",
    "orderby",
    "partial",
    "record",
    "remove",
    "required",
    "scoped",
    "select",
    "set",
    "unmanaged",
    "value|0",
    "var",
    "when",
    "where",
    "with",
    "yield"
  ], a = {
    keyword: i.concat(o),
    built_in: n,
    literal: r
  }, s = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), c = {
    className: "number",
    variants: [
      { begin: "\\b(0b[01']+)" },
      { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
      { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
    ],
    relevance: 0
  }, l = {
    className: "string",
    begin: /"""("*)(?!")(.|\n)*?"""\1/,
    relevance: 1
  }, d = {
    className: "string",
    begin: '@"',
    end: '"',
    contains: [{ begin: '""' }]
  }, u = e.inherit(d, { illegal: /\n/ }), f = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a
  }, p = e.inherit(f, { illegal: /\n/ }), g = {
    className: "string",
    begin: /\$"/,
    end: '"',
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, _ = {
    className: "string",
    begin: /\$@"/,
    end: '"',
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      f
    ]
  }, k = e.inherit(_, {
    illegal: /\n/,
    contains: [
      { begin: /\{\{/ },
      { begin: /\}\}/ },
      { begin: '""' },
      p
    ]
  });
  f.contains = [
    _,
    g,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    c,
    e.C_BLOCK_COMMENT_MODE
  ], p.contains = [
    k,
    g,
    u,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    c,
    e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
  ];
  const E = { variants: [
    l,
    _,
    g,
    d,
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ] }, x = {
    begin: "<",
    end: ">",
    contains: [
      { beginKeywords: "in out" },
      s
    ]
  }, S = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", A = {
    // prevents expressions like `@class` from incorrect flagging
    // `class` as a keyword
    begin: "@" + e.IDENT_RE,
    relevance: 0
  };
  return {
    name: "C#",
    aliases: [
      "cs",
      "c#"
    ],
    keywords: a,
    illegal: /::/,
    contains: [
      e.COMMENT(
        "///",
        "$",
        {
          returnBegin: !0,
          contains: [
            {
              className: "doctag",
              variants: [
                {
                  begin: "///",
                  relevance: 0
                },
                { begin: "<!--|-->" },
                {
                  begin: "</?",
                  end: ">"
                }
              ]
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
      },
      E,
      c,
      {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [
          { beginKeywords: "where class" },
          s,
          x,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          s,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [
          s,
          x,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // [Attributes("")]
        className: "meta",
        begin: "^\\s*\\[(?=[\\w])",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/
          }
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new return throw await else",
        relevance: 0
      },
      {
        className: "function",
        begin: "(" + S + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: a,
        contains: [
          // prevents these from being highlighted `title`
          {
            beginKeywords: t.join(" "),
            relevance: 0
          },
          {
            begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
            returnBegin: !0,
            contains: [
              e.TITLE_MODE,
              x
            ],
            relevance: 0
          },
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: a,
            relevance: 0,
            contains: [
              E,
              c,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      A
    ]
  };
}
const _f = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), yf = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], kf = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], wf = [
  ...yf,
  ...kf
], xf = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Sf = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Nf = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Tf = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function Af(e) {
  const n = e.regex, t = _f(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", o = /@-?\w[\w]*(-\w+)*/, a = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      t.BLOCK_COMMENT,
      r,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      t.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + a,
        relevance: 0
      },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + Sf.join("|") + ")" },
          { begin: ":(:)?(" + Nf.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Tf.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          t.BLOCK_COMMENT,
          t.HEXCOLOR,
          t.IMPORTANT,
          t.CSS_NUMBER_MODE,
          ...s,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          t.FUNCTION_DISPATCH
        ]
      },
      {
        begin: n.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: o
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: xf.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              t.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + wf.join("|") + ")\\b"
      }
    ]
  };
}
function vf(e) {
  const n = e.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [
      {
        className: "meta",
        relevance: 10,
        match: n.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/
        )
      },
      {
        className: "comment",
        variants: [
          {
            begin: n.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/
            ),
            end: /$/
          },
          { match: /^\*{15}$/ }
        ]
      },
      {
        className: "addition",
        begin: /^\+/,
        end: /$/
      },
      {
        className: "deletion",
        begin: /^-/,
        end: /$/
      },
      {
        className: "addition",
        begin: /^!/,
        end: /$/
      }
    ]
  };
}
function Cf(e) {
  const o = {
    keyword: [
      "break",
      "case",
      "chan",
      "const",
      "continue",
      "default",
      "defer",
      "else",
      "fallthrough",
      "for",
      "func",
      "go",
      "goto",
      "if",
      "import",
      "interface",
      "map",
      "package",
      "range",
      "return",
      "select",
      "struct",
      "switch",
      "type",
      "var"
    ],
    type: [
      "bool",
      "byte",
      "complex64",
      "complex128",
      "error",
      "float32",
      "float64",
      "int8",
      "int16",
      "int32",
      "int64",
      "string",
      "uint8",
      "uint16",
      "uint32",
      "uint64",
      "int",
      "uint",
      "uintptr",
      "rune"
    ],
    literal: [
      "true",
      "false",
      "iota",
      "nil"
    ],
    built_in: [
      "append",
      "cap",
      "close",
      "complex",
      "copy",
      "imag",
      "len",
      "make",
      "new",
      "panic",
      "print",
      "println",
      "real",
      "recover",
      "delete"
    ]
  };
  return {
    name: "Go",
    aliases: ["golang"],
    keywords: o,
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        className: "string",
        variants: [
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            begin: "`",
            end: "`"
          }
        ]
      },
      {
        className: "number",
        variants: [
          {
            match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
            // hex without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
            // hex with a present digit before . (making a digit afterwards optional)
            relevance: 0
          },
          {
            match: /-?\b0[oO](_?[0-7])*i?/,
            // leading 0o octal
            relevance: 0
          },
          {
            match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
            // decimal without a present digit before . (making a digit afterwards required)
            relevance: 0
          },
          {
            match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
            // decimal with a present digit before . (making a digit afterwards optional)
            relevance: 0
          }
        ]
      },
      {
        begin: /:=/
        // relevance booster
      },
      {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [
          e.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: o,
            illegal: /["']/
          }
        ]
      }
    ]
  };
}
function Of(e) {
  const n = e.regex, t = /[_A-Za-z][_0-9A-Za-z]*/;
  return {
    name: "GraphQL",
    aliases: ["gql"],
    case_insensitive: !0,
    disableAutodetect: !1,
    keywords: {
      keyword: [
        "query",
        "mutation",
        "subscription",
        "type",
        "input",
        "schema",
        "directive",
        "interface",
        "union",
        "scalar",
        "fragment",
        "enum",
        "on"
      ],
      literal: [
        "true",
        "false",
        "null"
      ]
    },
    contains: [
      e.HASH_COMMENT_MODE,
      e.QUOTE_STRING_MODE,
      e.NUMBER_MODE,
      {
        scope: "punctuation",
        match: /[.]{3}/,
        relevance: 0
      },
      {
        scope: "punctuation",
        begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
        relevance: 0
      },
      {
        scope: "variable",
        begin: /\$/,
        end: /\W/,
        excludeEnd: !0,
        relevance: 0
      },
      {
        scope: "meta",
        match: /@\w+/,
        excludeEnd: !0
      },
      {
        scope: "symbol",
        begin: n.concat(t, n.lookahead(/\s*:/)),
        relevance: 0
      }
    ],
    illegal: [
      /[;<']/,
      /BEGIN/
    ]
  };
}
function If(e) {
  const n = e.regex, t = {
    className: "number",
    relevance: 0,
    variants: [
      { begin: /([+-]+)?[\d]+_[\d_]+/ },
      { begin: e.NUMBER_RE }
    ]
  }, r = e.COMMENT();
  r.variants = [
    {
      begin: /;/,
      end: /$/
    },
    {
      begin: /#/,
      end: /$/
    }
  ];
  const i = {
    className: "variable",
    variants: [
      { begin: /\$[\w\d"][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  }, o = {
    className: "literal",
    begin: /\bon|off|true|false|yes|no\b/
  }, a = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''",
        end: "'''",
        relevance: 10
      },
      {
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      {
        begin: '"',
        end: '"'
      },
      {
        begin: "'",
        end: "'"
      }
    ]
  }, s = {
    begin: /\[/,
    end: /\]/,
    contains: [
      r,
      o,
      i,
      a,
      t,
      "self"
    ],
    relevance: 0
  }, c = /[A-Za-z0-9_-]+/, l = /"(\\"|[^"])*"/, d = /'[^']*'/, u = n.either(
    c,
    l,
    d
  ), f = n.concat(
    u,
    "(\\s*\\.\\s*",
    u,
    ")*",
    n.lookahead(/\s*=\s*[^#\s]/)
  );
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: !0,
    illegal: /\S/,
    contains: [
      r,
      {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      },
      {
        begin: f,
        className: "attr",
        starts: {
          end: /$/,
          contains: [
            r,
            s,
            o,
            i,
            a,
            t
          ]
        }
      }
    ]
  };
}
var Nn = "[0-9](_*[0-9])*", ot = `\\.(${Nn})`, st = "[0-9a-fA-F](_*[0-9a-fA-F])*", Ri = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Nn})((${ot})|\\.)?|(${ot}))[eE][+-]?(${Nn})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Nn})((${ot})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${ot})[fFdD]?\\b` },
    { begin: `\\b(${Nn})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${st})\\.?|(${st})?\\.(${st}))[pP][+-]?(${Nn})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${st})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Va(e, n, t) {
  return t === -1 ? "" : e.replace(n, (r) => Va(e, n, t - 1));
}
function Rf(e) {
  const n = e.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", r = t + Va("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), c = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits",
      "goto",
      "when"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, l = {
    className: "meta",
    begin: "@" + t,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, d = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: c,
    relevance: 0,
    contains: [e.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: c,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          t
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          n.concat(/(?!else)/, t),
          /\s+/,
          t,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          t
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          d,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + r + "\\s+)",
          e.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: c,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: c,
            relevance: 0,
            contains: [
              l,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              Ri,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      Ri,
      l
    ]
  };
}
const Mi = "[A-Za-z$_][0-9A-Za-z$_]*", Mf = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Df = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Ya = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Za = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Xa = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Lf = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Pf = [].concat(
  Xa,
  Ya,
  Za
);
function Bf(e) {
  const n = e.regex, t = (Z, { after: de }) => {
    const h = "</" + Z[0].slice(1);
    return Z.input.indexOf(h, de) !== -1;
  }, r = Mi, i = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, a = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (Z, de) => {
      const h = Z[0].length + Z.index, le = Z.input[h];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        le === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        le === ","
      ) {
        de.ignoreMatch();
        return;
      }
      le === ">" && (t(Z, { after: h }) || de.ignoreMatch());
      let pe;
      const b = Z.input.substring(h);
      if (pe = b.match(/^\s*=/)) {
        de.ignoreMatch();
        return;
      }
      if ((pe = b.match(/^\s+extends\s+/)) && pe.index === 0) {
        de.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Mi,
    keyword: Mf,
    literal: Df,
    built_in: Pf,
    "variable.language": Lf
  }, c = "[0-9](_?[0-9])*", l = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, p = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "css"
    }
  }, _ = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "graphql"
    }
  }, k = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, x = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, S = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    g,
    _,
    k,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    u
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = S.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(S)
  });
  const A = [].concat(x, f.contains), C = A.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(A)
    }
  ]), y = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: C
  }, U = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          n.concat(r, "(", n.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, K = {
    relevance: 0,
    match: n.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Ya,
        ...Za
      ]
    }
  }, H = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, w = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [y],
    illegal: /%/
  }, L = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function P(Z) {
    return n.concat("(?!", Z.join("|"), ")");
  }
  const B = {
    match: n.concat(
      /\b/,
      P([
        ...Xa,
        "super",
        "import"
      ].map((Z) => `${Z}\\s*\\(`)),
      r,
      n.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, R = {
    begin: n.concat(/\./, n.lookahead(
      n.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, F = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      y
    ]
  }, re = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ue = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      n.lookahead(re)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      y
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: C, CLASS_REFERENCE: K },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      H,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      g,
      _,
      k,
      x,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      u,
      K,
      {
        scope: "attr",
        match: r + n.lookahead(":"),
        relevance: 0
      },
      ue,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          x,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: re,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: C
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: o },
              {
                begin: a.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": a.isTrulyOpeningTag,
                end: a.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: a.begin,
                end: a.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      w,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          y,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      R,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [y]
      },
      B,
      L,
      U,
      F,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Ff(e) {
  const n = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, t = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, r = [
    "true",
    "false",
    "null"
  ], i = {
    scope: "literal",
    beginKeywords: r.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: r
    },
    contains: [
      n,
      t,
      e.QUOTE_STRING_MODE,
      i,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
var Tn = "[0-9](_*[0-9])*", lt = `\\.(${Tn})`, ct = "[0-9a-fA-F](_*[0-9a-fA-F])*", zf = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Tn})((${lt})|\\.)?|(${lt}))[eE][+-]?(${Tn})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Tn})((${lt})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${lt})[fFdD]?\\b` },
    { begin: `\\b(${Tn})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${ct})\\.?|(${ct})?\\.(${ct}))[pP][+-]?(${Tn})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${ct})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Uf(e) {
  const n = {
    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
    literal: "true false null"
  }, t = {
    className: "keyword",
    begin: /\b(break|continue|return|this)\b/,
    starts: { contains: [
      {
        className: "symbol",
        begin: /@\w+/
      }
    ] }
  }, r = {
    className: "symbol",
    begin: e.UNDERSCORE_IDENT_RE + "@"
  }, i = {
    className: "subst",
    begin: /\$\{/,
    end: /\}/,
    contains: [e.C_NUMBER_MODE]
  }, o = {
    className: "variable",
    begin: "\\$" + e.UNDERSCORE_IDENT_RE
  }, a = {
    className: "string",
    variants: [
      {
        begin: '"""',
        end: '"""(?=[^"])',
        contains: [
          o,
          i
        ]
      },
      // Can't use built-in modes easily, as we want to use STRING in the meta
      // context as 'meta-string' and there's no syntax to remove explicitly set
      // classNames in built-in modes.
      {
        begin: "'",
        end: "'",
        illegal: /\n/,
        contains: [e.BACKSLASH_ESCAPE]
      },
      {
        begin: '"',
        end: '"',
        illegal: /\n/,
        contains: [
          e.BACKSLASH_ESCAPE,
          o,
          i
        ]
      }
    ]
  };
  i.contains.push(a);
  const s = {
    className: "meta",
    begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
  }, c = {
    className: "meta",
    begin: "@" + e.UNDERSCORE_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          e.inherit(a, { className: "string" }),
          "self"
        ]
      }
    ]
  }, l = zf, d = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: [e.C_BLOCK_COMMENT_MODE] }
  ), u = { variants: [
    {
      className: "type",
      begin: e.UNDERSCORE_IDENT_RE
    },
    {
      begin: /\(/,
      end: /\)/,
      contains: []
      // defined later
    }
  ] }, f = u;
  return f.variants[1].contains = [u], u.variants[1].contains = [f], {
    name: "Kotlin",
    aliases: [
      "kt",
      "kts"
    ],
    keywords: n,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      e.C_LINE_COMMENT_MODE,
      d,
      t,
      r,
      s,
      c,
      {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: n,
        relevance: 5,
        contains: [
          {
            begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            relevance: 0,
            contains: [e.UNDERSCORE_TITLE_MODE]
          },
          {
            className: "type",
            begin: /</,
            end: />/,
            keywords: "reified",
            relevance: 0
          },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            endsParent: !0,
            keywords: n,
            relevance: 0,
            contains: [
              {
                begin: /:/,
                end: /[=,\/]/,
                endsWithParent: !0,
                contains: [
                  u,
                  e.C_LINE_COMMENT_MODE,
                  d
                ],
                relevance: 0
              },
              e.C_LINE_COMMENT_MODE,
              d,
              s,
              c,
              a,
              e.C_NUMBER_MODE
            ]
          },
          d
        ]
      },
      {
        begin: [
          /class|interface|trait/,
          /\s+/,
          e.UNDERSCORE_IDENT_RE
        ],
        beginScope: {
          3: "title.class"
        },
        keywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [
          { beginKeywords: "public protected internal private constructor" },
          e.UNDERSCORE_TITLE_MODE,
          {
            className: "type",
            begin: /</,
            end: />/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0
          },
          {
            className: "type",
            begin: /[,:]\s*/,
            end: /[<\(,){\s]|$/,
            excludeBegin: !0,
            returnEnd: !0
          },
          s,
          c
        ]
      },
      a,
      {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: `
`
      },
      l
    ]
  };
}
const $f = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Hf = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], Gf = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], Kf = [
  ...Hf,
  ...Gf
], qf = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Qa = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Ja = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Wf = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse(), Vf = Qa.concat(Ja).sort().reverse();
function Yf(e) {
  const n = $f(e), t = Vf, r = "and or not only", i = "[\\w-]+", o = "(" + i + "|@\\{" + i + "\\})", a = [], s = [], c = function(S) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: "string",
      begin: "~?" + S + ".*?" + S
    };
  }, l = function(S, A, C) {
    return {
      className: S,
      begin: A,
      relevance: C
    };
  }, d = {
    $pattern: /[a-z-]+/,
    keyword: r,
    attribute: qf.join(" ")
  }, u = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: "\\(",
    end: "\\)",
    contains: s,
    keywords: d,
    relevance: 0
  };
  s.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    c("'"),
    c('"'),
    n.CSS_NUMBER_MODE,
    // fixme: it does not include dot for numbers like .5em :(
    {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    },
    n.HEXCOLOR,
    u,
    l("variable", "@@?" + i, 10),
    l("variable", "@\\{" + i + "\\}"),
    l("built_in", "~?`[^`]*?`"),
    // inline javascript (or whatever host language) *multiline* string
    {
      // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: "attribute",
      begin: i + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    },
    n.IMPORTANT,
    { beginKeywords: "and not" },
    n.FUNCTION_DISPATCH
  );
  const f = s.concat({
    begin: /\{/,
    end: /\}/,
    contains: a
  }), p = {
    beginKeywords: "when",
    endsWithParent: !0,
    contains: [{ beginKeywords: "and not" }].concat(s)
    // using this form to override VALUE’s 'function' match
  }, g = {
    begin: o + "\\s*:",
    returnBegin: !0,
    end: /[;}]/,
    relevance: 0,
    contains: [
      { begin: /-(webkit|moz|ms|o)-/ },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Wf.join("|") + ")\\b",
        end: /(?=:)/,
        starts: {
          endsWithParent: !0,
          illegal: "[<=$]",
          relevance: 0,
          contains: s
        }
      }
    ]
  }, _ = {
    className: "keyword",
    begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
    starts: {
      end: "[;{}]",
      keywords: d,
      returnEnd: !0,
      contains: s,
      relevance: 0
    }
  }, k = {
    className: "variable",
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {
        begin: "@" + i + "\\s*:",
        relevance: 15
      },
      { begin: "@" + i }
    ],
    starts: {
      end: "[;}]",
      returnEnd: !0,
      contains: f
    }
  }, E = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [
      {
        begin: "[\\.#:&\\[>]",
        end: "[;{}]"
        // mixin calls end with ';'
      },
      {
        begin: o,
        end: /\{/
      }
    ],
    returnBegin: !0,
    returnEnd: !0,
    illegal: `[<='$"]`,
    relevance: 0,
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      p,
      l("keyword", "all\\b"),
      l("variable", "@\\{" + i + "\\}"),
      // otherwise it’s identified as tag
      {
        begin: "\\b(" + Kf.join("|") + ")\\b",
        className: "selector-tag"
      },
      n.CSS_NUMBER_MODE,
      l("selector-tag", o, 0),
      l("selector-id", "#" + o),
      l("selector-class", "\\." + o, 0),
      l("selector-tag", "&", 0),
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        begin: ":(" + Qa.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + Ja.join("|") + ")"
      },
      {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        contains: f
      },
      // argument list of parametric mixins
      { begin: "!important" },
      // eat !important after mixin call or it will be colored as tag
      n.FUNCTION_DISPATCH
    ]
  }, x = {
    begin: i + `:(:)?(${t.join("|")})`,
    returnBegin: !0,
    contains: [E]
  };
  return a.push(
    e.C_LINE_COMMENT_MODE,
    e.C_BLOCK_COMMENT_MODE,
    _,
    k,
    x,
    g,
    E,
    p,
    n.FUNCTION_DISPATCH
  ), {
    name: "Less",
    case_insensitive: !0,
    illegal: `[=>'/<($"]`,
    contains: a
  };
}
function Zf(e) {
  const n = "\\[=*\\[", t = "\\]=*\\]", r = {
    begin: n,
    end: t,
    contains: ["self"]
  }, i = [
    e.COMMENT("--(?!" + n + ")", "$"),
    e.COMMENT(
      "--" + n,
      t,
      {
        contains: [r],
        relevance: 10
      }
    )
  ];
  return {
    name: "Lua",
    aliases: ["pluto"],
    keywords: {
      $pattern: e.UNDERSCORE_IDENT_RE,
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in: (
        // Metatags and globals:
        "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
      )
    },
    contains: i.concat([
      {
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [
          e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
          {
            className: "params",
            begin: "\\(",
            endsWithParent: !0,
            contains: i
          }
        ].concat(i)
      },
      e.C_NUMBER_MODE,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        className: "string",
        begin: n,
        end: t,
        contains: [r],
        relevance: 5
      }
    ])
  };
}
function Xf(e) {
  const n = {
    className: "variable",
    variants: [
      {
        begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
        contains: [e.BACKSLASH_ESCAPE]
      },
      { begin: /\$[@%<?\^\+\*]/ }
    ]
  }, t = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n
    ]
  }, r = {
    className: "variable",
    begin: /\$\([\w-]+\s/,
    end: /\)/,
    keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
    contains: [
      n,
      t
      // Added QUOTE_STRING as they can be a part of functions
    ]
  }, i = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, o = {
    className: "meta",
    begin: /^\.PHONY:/,
    end: /$/,
    keywords: {
      $pattern: /[\.\w]+/,
      keyword: ".PHONY"
    }
  }, a = {
    className: "section",
    begin: /^[^\s]+:/,
    end: /$/,
    contains: [n]
  };
  return {
    name: "Makefile",
    aliases: [
      "mk",
      "mak",
      "make"
    ],
    keywords: {
      $pattern: /[\w-]+/,
      keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
    },
    contains: [
      e.HASH_COMMENT_MODE,
      n,
      t,
      r,
      i,
      o,
      a
    ]
  };
}
function Qf(e) {
  const n = e.regex, t = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, r = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, i = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, o = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, a = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, s = /[A-Za-z][A-Za-z0-9+.-]*/, c = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: n.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, l = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, d = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, u = e.inherit(l, { contains: [] }), f = e.inherit(d, { contains: [] });
  l.contains.push(f), d.contains.push(u);
  let p = [
    t,
    c
  ];
  return [
    l,
    d,
    u,
    f
  ].forEach((E) => {
    E.contains = E.contains.concat(p);
  }), p = p.concat(l, d), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: p
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: p
              }
            ]
          }
        ]
      },
      t,
      o,
      l,
      d,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: p,
        end: "$"
      },
      i,
      r,
      c,
      a,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
function Jf(e) {
  const n = {
    className: "built_in",
    begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
  }, t = /[a-zA-Z@][a-zA-Z0-9_]*/, s = {
    "variable.language": [
      "this",
      "super"
    ],
    $pattern: t,
    keyword: [
      "while",
      "export",
      "sizeof",
      "typedef",
      "const",
      "struct",
      "for",
      "union",
      "volatile",
      "static",
      "mutable",
      "if",
      "do",
      "return",
      "goto",
      "enum",
      "else",
      "break",
      "extern",
      "asm",
      "case",
      "default",
      "register",
      "explicit",
      "typename",
      "switch",
      "continue",
      "inline",
      "readonly",
      "assign",
      "readwrite",
      "self",
      "@synchronized",
      "id",
      "typeof",
      "nonatomic",
      "IBOutlet",
      "IBAction",
      "strong",
      "weak",
      "copy",
      "in",
      "out",
      "inout",
      "bycopy",
      "byref",
      "oneway",
      "__strong",
      "__weak",
      "__block",
      "__autoreleasing",
      "@private",
      "@protected",
      "@public",
      "@try",
      "@property",
      "@end",
      "@throw",
      "@catch",
      "@finally",
      "@autoreleasepool",
      "@synthesize",
      "@dynamic",
      "@selector",
      "@optional",
      "@required",
      "@encode",
      "@package",
      "@import",
      "@defs",
      "@compatibility_alias",
      "__bridge",
      "__bridge_transfer",
      "__bridge_retained",
      "__bridge_retain",
      "__covariant",
      "__contravariant",
      "__kindof",
      "_Nonnull",
      "_Nullable",
      "_Null_unspecified",
      "__FUNCTION__",
      "__PRETTY_FUNCTION__",
      "__attribute__",
      "getter",
      "setter",
      "retain",
      "unsafe_unretained",
      "nonnull",
      "nullable",
      "null_unspecified",
      "null_resettable",
      "class",
      "instancetype",
      "NS_DESIGNATED_INITIALIZER",
      "NS_UNAVAILABLE",
      "NS_REQUIRES_SUPER",
      "NS_RETURNS_INNER_POINTER",
      "NS_INLINE",
      "NS_AVAILABLE",
      "NS_DEPRECATED",
      "NS_ENUM",
      "NS_OPTIONS",
      "NS_SWIFT_UNAVAILABLE",
      "NS_ASSUME_NONNULL_BEGIN",
      "NS_ASSUME_NONNULL_END",
      "NS_REFINED_FOR_SWIFT",
      "NS_SWIFT_NAME",
      "NS_SWIFT_NOTHROW",
      "NS_DURING",
      "NS_HANDLER",
      "NS_ENDHANDLER",
      "NS_VALUERETURN",
      "NS_VOIDRETURN"
    ],
    literal: [
      "false",
      "true",
      "FALSE",
      "TRUE",
      "nil",
      "YES",
      "NO",
      "NULL"
    ],
    built_in: [
      "dispatch_once_t",
      "dispatch_queue_t",
      "dispatch_sync",
      "dispatch_async",
      "dispatch_once"
    ],
    type: [
      "int",
      "float",
      "char",
      "unsigned",
      "signed",
      "short",
      "long",
      "double",
      "wchar_t",
      "unichar",
      "void",
      "bool",
      "BOOL",
      "id|0",
      "_Bool"
    ]
  }, c = {
    $pattern: t,
    keyword: [
      "@interface",
      "@class",
      "@protocol",
      "@implementation"
    ]
  };
  return {
    name: "Objective-C",
    aliases: [
      "mm",
      "objc",
      "obj-c",
      "obj-c++",
      "objective-c++"
    ],
    keywords: s,
    illegal: "</",
    contains: [
      n,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      e.C_NUMBER_MODE,
      e.QUOTE_STRING_MODE,
      e.APOS_STRING_MODE,
      {
        className: "string",
        variants: [
          {
            begin: '@"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
          }
        ]
      },
      {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
          {
            className: "string",
            begin: /<.*?>/,
            end: /$/,
            illegal: "\\n"
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        className: "class",
        begin: "(" + c.keyword.join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: c,
        contains: [e.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: "\\." + e.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
}
function jf(e) {
  const n = e.regex, t = [
    "abs",
    "accept",
    "alarm",
    "and",
    "atan2",
    "bind",
    "binmode",
    "bless",
    "break",
    "caller",
    "chdir",
    "chmod",
    "chomp",
    "chop",
    "chown",
    "chr",
    "chroot",
    "class",
    "close",
    "closedir",
    "connect",
    "continue",
    "cos",
    "crypt",
    "dbmclose",
    "dbmopen",
    "defined",
    "delete",
    "die",
    "do",
    "dump",
    "each",
    "else",
    "elsif",
    "endgrent",
    "endhostent",
    "endnetent",
    "endprotoent",
    "endpwent",
    "endservent",
    "eof",
    "eval",
    "exec",
    "exists",
    "exit",
    "exp",
    "fcntl",
    "field",
    "fileno",
    "flock",
    "for",
    "foreach",
    "fork",
    "format",
    "formline",
    "getc",
    "getgrent",
    "getgrgid",
    "getgrnam",
    "gethostbyaddr",
    "gethostbyname",
    "gethostent",
    "getlogin",
    "getnetbyaddr",
    "getnetbyname",
    "getnetent",
    "getpeername",
    "getpgrp",
    "getpriority",
    "getprotobyname",
    "getprotobynumber",
    "getprotoent",
    "getpwent",
    "getpwnam",
    "getpwuid",
    "getservbyname",
    "getservbyport",
    "getservent",
    "getsockname",
    "getsockopt",
    "given",
    "glob",
    "gmtime",
    "goto",
    "grep",
    "gt",
    "hex",
    "if",
    "index",
    "int",
    "ioctl",
    "join",
    "keys",
    "kill",
    "last",
    "lc",
    "lcfirst",
    "length",
    "link",
    "listen",
    "local",
    "localtime",
    "log",
    "lstat",
    "lt",
    "ma",
    "map",
    "method",
    "mkdir",
    "msgctl",
    "msgget",
    "msgrcv",
    "msgsnd",
    "my",
    "ne",
    "next",
    "no",
    "not",
    "oct",
    "open",
    "opendir",
    "or",
    "ord",
    "our",
    "pack",
    "package",
    "pipe",
    "pop",
    "pos",
    "print",
    "printf",
    "prototype",
    "push",
    "q|0",
    "qq",
    "quotemeta",
    "qw",
    "qx",
    "rand",
    "read",
    "readdir",
    "readline",
    "readlink",
    "readpipe",
    "recv",
    "redo",
    "ref",
    "rename",
    "require",
    "reset",
    "return",
    "reverse",
    "rewinddir",
    "rindex",
    "rmdir",
    "say",
    "scalar",
    "seek",
    "seekdir",
    "select",
    "semctl",
    "semget",
    "semop",
    "send",
    "setgrent",
    "sethostent",
    "setnetent",
    "setpgrp",
    "setpriority",
    "setprotoent",
    "setpwent",
    "setservent",
    "setsockopt",
    "shift",
    "shmctl",
    "shmget",
    "shmread",
    "shmwrite",
    "shutdown",
    "sin",
    "sleep",
    "socket",
    "socketpair",
    "sort",
    "splice",
    "split",
    "sprintf",
    "sqrt",
    "srand",
    "stat",
    "state",
    "study",
    "sub",
    "substr",
    "symlink",
    "syscall",
    "sysopen",
    "sysread",
    "sysseek",
    "system",
    "syswrite",
    "tell",
    "telldir",
    "tie",
    "tied",
    "time",
    "times",
    "tr",
    "truncate",
    "uc",
    "ucfirst",
    "umask",
    "undef",
    "unless",
    "unlink",
    "unpack",
    "unshift",
    "untie",
    "until",
    "use",
    "utime",
    "values",
    "vec",
    "wait",
    "waitpid",
    "wantarray",
    "warn",
    "when",
    "while",
    "write",
    "x|0",
    "xor",
    "y|0"
  ], r = /[dualxmsipngr]{0,12}/, i = {
    $pattern: /[\w.]+/,
    keyword: t.join(" ")
  }, o = {
    className: "subst",
    begin: "[$@]\\{",
    end: "\\}",
    keywords: i
  }, a = {
    begin: /->\{/,
    end: /\}/
    // contains defined later
  }, s = {
    scope: "attr",
    match: /\s+:\s*\w+(\s*\(.*?\))?/
  }, c = {
    scope: "variable",
    variants: [
      { begin: /\$\d/ },
      {
        begin: n.concat(
          /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![A-Za-z])(?![@$%])"
        )
      },
      {
        // Only $= is a special Perl variable and one can't declare @= or %=.
        begin: /[$%@](?!")[^\s\w{=]|\$=/,
        relevance: 0
      }
    ],
    contains: [s]
  }, l = {
    className: "number",
    variants: [
      // decimal numbers:
      // include the case where a number starts with a dot (eg. .9), and
      // the leading 0? avoids mixing the first and second match on 0.x cases
      { match: /0?\.[0-9][0-9_]+\b/ },
      // include the special versioned number (eg. v5.38)
      { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
      // non-decimal numbers:
      { match: /\b0[0-7][0-7_]*\b/ },
      { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
      { match: /\b0b[0-1][0-1_]*\b/ }
    ],
    relevance: 0
  }, d = [
    e.BACKSLASH_ESCAPE,
    o,
    c
  ], u = [
    /!/,
    /\//,
    /\|/,
    /\?/,
    /'/,
    /"/,
    // valid but infrequent and weird
    /#/
    // valid but infrequent and weird
  ], f = (_, k, E = "\\1") => {
    const x = E === "\\1" ? E : n.concat(E, k);
    return n.concat(
      n.concat("(?:", _, ")"),
      k,
      /(?:\\.|[^\\\/])*?/,
      x,
      /(?:\\.|[^\\\/])*?/,
      E,
      r
    );
  }, p = (_, k, E) => n.concat(
    n.concat("(?:", _, ")"),
    k,
    /(?:\\.|[^\\\/])*?/,
    E,
    r
  ), g = [
    c,
    e.HASH_COMMENT_MODE,
    e.COMMENT(
      /^=\w/,
      /=cut/,
      { endsWithParent: !0 }
    ),
    a,
    {
      className: "string",
      contains: d,
      variants: [
        {
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        },
        {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        },
        {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        },
        {
          begin: "'",
          end: "'",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: /\{\w+\}/,
          relevance: 0
        },
        {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }
      ]
    },
    l,
    {
      // regexp container
      begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      keywords: "split return print reverse grep",
      relevance: 0,
      contains: [
        e.HASH_COMMENT_MODE,
        {
          className: "regexp",
          variants: [
            // allow matching common delimiters
            { begin: f("s|tr|y", n.either(...u, { capture: !0 })) },
            // and then paired delmis
            { begin: f("s|tr|y", "\\(", "\\)") },
            { begin: f("s|tr|y", "\\[", "\\]") },
            { begin: f("s|tr|y", "\\{", "\\}") }
          ],
          relevance: 2
        },
        {
          className: "regexp",
          variants: [
            {
              // could be a comment in many languages so do not count
              // as relevant
              begin: /(m|qr)\/\//,
              relevance: 0
            },
            // prefix is optional with /regex/
            { begin: p("(?:m|qr)?", /\//, /\//) },
            // allow matching common delimiters
            { begin: p("m|qr", n.either(...u, { capture: !0 }), /\1/) },
            // allow common paired delmins
            { begin: p("m|qr", /\(/, /\)/) },
            { begin: p("m|qr", /\[/, /\]/) },
            { begin: p("m|qr", /\{/, /\}/) }
          ]
        }
      ]
    },
    {
      className: "function",
      beginKeywords: "sub method",
      end: "(\\s*\\(.*?\\))?[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE, s]
    },
    {
      className: "class",
      beginKeywords: "class",
      end: "[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE, s, l]
    },
    {
      begin: "-\\w\\b",
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: "mojolicious",
      contains: [
        {
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }
      ]
    }
  ];
  return o.contains = g, a.contains = g, {
    name: "Perl",
    aliases: [
      "pl",
      "pm"
    ],
    keywords: i,
    contains: g
  };
}
function eg(e) {
  const n = e.regex, t = /(?![A-Za-z0-9])(?![$])/, r = n.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    t
  ), i = n.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    t
  ), o = n.concat(
    /[A-Z]+/,
    t
  ), a = {
    scope: "variable",
    match: "\\$+" + r
  }, s = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, c = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, l = e.inherit(e.APOS_STRING_MODE, { illegal: null }), d = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(c)
  }), u = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(c),
    "on:begin": (R, F) => {
      F.data._beginMatch = R[1] || R[2];
    },
    "on:end": (R, F) => {
      F.data._beginMatch !== R[1] && F.ignoreMatch();
    }
  }, f = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), p = `[ 	
]`, g = {
    scope: "string",
    variants: [
      d,
      l,
      u,
      f
    ]
  }, _ = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, k = [
    "false",
    "null",
    "true"
  ], E = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], x = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], A = {
    keyword: E,
    literal: ((R) => {
      const F = [];
      return R.forEach((re) => {
        F.push(re), re.toLowerCase() === re ? F.push(re.toUpperCase()) : F.push(re.toLowerCase());
      }), F;
    })(k),
    built_in: x
  }, C = (R) => R.map((F) => F.replace(/\|\d+$/, "")), y = { variants: [
    {
      match: [
        /new/,
        n.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        n.concat("(?!", C(x).join("\\b|"), "\\b)"),
        i
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, U = n.concat(r, "\\b(?!\\()"), K = { variants: [
    {
      match: [
        n.concat(
          /::/,
          n.lookahead(/(?!class\b)/)
        ),
        U
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        i,
        n.concat(
          /::/,
          n.lookahead(/(?!class\b)/)
        ),
        U
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        i,
        n.concat(
          "::",
          n.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        i,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, H = {
    scope: "attr",
    match: n.concat(r, n.lookahead(":"), n.lookahead(/(?!::)/))
  }, w = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: A,
    contains: [
      H,
      a,
      K,
      e.C_BLOCK_COMMENT_MODE,
      g,
      _,
      y
    ]
  }, L = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      n.concat("(?!fn\\b|function\\b|", C(E).join("\\b|"), "|", C(x).join("\\b|"), "\\b)"),
      r,
      n.concat(p, "*"),
      n.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [w]
  };
  w.contains.push(L);
  const P = [
    H,
    K,
    e.C_BLOCK_COMMENT_MODE,
    g,
    _,
    y
  ], B = {
    begin: n.concat(
      /#\[\s*\\?/,
      n.either(
        i,
        o
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: k,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: k,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...P
        ]
      },
      ...P,
      {
        scope: "meta",
        variants: [
          { match: i },
          { match: o }
        ]
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: A,
    contains: [
      B,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      s,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      a,
      L,
      K,
      {
        match: [
          /const/,
          /\s/,
          r
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      y,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: A,
            contains: [
              "self",
              B,
              a,
              K,
              e.C_BLOCK_COMMENT_MODE,
              g,
              _
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      g,
      _
    ]
  };
}
function ng(e) {
  return {
    name: "PHP template",
    subLanguage: "xml",
    contains: [
      {
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {
            begin: "/\\*",
            end: "\\*/",
            skip: !0
          },
          {
            begin: 'b"',
            end: '"',
            skip: !0
          },
          {
            begin: "b'",
            end: "'",
            skip: !0
          },
          e.inherit(e.APOS_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          }),
          e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            className: null,
            contains: null,
            skip: !0
          })
        ]
      }
    ]
  };
}
function tg(e) {
  return {
    name: "Plain text",
    aliases: [
      "text",
      "txt"
    ],
    disableAutodetect: !0
  };
}
function rg(e) {
  const n = e.regex, t = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], s = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, c = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, l = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s,
    illegal: /#/
  }, d = {
    begin: /\{\{/,
    relevance: 0
  }, u = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          d,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          d,
          l
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          l
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, f = "[0-9](_?[0-9])*", p = `(\\b(${f}))?\\.(${f})|\\b(${f})\\.`, g = `\\b|${r.join("|")}`, _ = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${f})|(${p}))[eE][+-]?(${f})[jJ]?(?=${g})`
      },
      {
        begin: `(${p})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${g})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${f})[jJ](?=${g})`
      }
    ]
  }, k = {
    className: "comment",
    begin: n.lookahead(/# type:/),
    end: /$/,
    keywords: s,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, E = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: s,
        contains: [
          "self",
          c,
          _,
          u,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return l.contains = [
    u,
    _,
    c
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: s,
    illegal: /(<\/|\?)|=>/,
    contains: [
      c,
      _,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      u,
      k,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          t
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [E]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              t,
              /\s*/,
              /\(\s*/,
              t,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              t
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          _,
          E,
          u
        ]
      }
    ]
  };
}
function ig(e) {
  return {
    aliases: ["pycon"],
    contains: [
      {
        className: "meta.prompt",
        starts: {
          // a space separates the REPL prefix from the actual code
          // this is purely for cleaner HTML output
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [
          { begin: /^>>>(?=[ ]|$)/ },
          { begin: /^\.\.\.(?=[ ]|$)/ }
        ]
      }
    ]
  };
}
function ag(e) {
  const n = e.regex, t = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, r = n.either(
    // Special case: only hexadecimal binary powers can contain fractions
    /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
    // Hexadecimal numbers without fraction and optional binary power
    /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
    // Decimal numbers
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
  ), i = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, o = n.either(
    /[()]/,
    /[{}]/,
    /\[\[/,
    /[[\]]/,
    /\\/,
    /,/
  );
  return {
    name: "R",
    keywords: {
      $pattern: t,
      keyword: "function if in break next repeat else for while",
      literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
      built_in: (
        // Builtin constants
        "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      )
    },
    contains: [
      // Roxygen comments
      e.COMMENT(
        /#'/,
        /$/,
        { contains: [
          {
            // Handle `@examples` separately to cause all subsequent code
            // until the next `@`-tag on its own line to be kept as-is,
            // preventing highlighting. This code is example R code, so nested
            // doctags shouldn’t be treated as such. See
            // `test/markup/r/roxygen.txt` for an example.
            scope: "doctag",
            match: /@examples/,
            starts: {
              end: n.lookahead(n.either(
                // end if another doc comment
                /\n^#'\s*(?=@[a-zA-Z]+)/,
                // or a line with no comment
                /\n^(?!#')/
              )),
              endsParent: !0
            }
          },
          {
            // Handle `@param` to highlight the parameter name following
            // after.
            scope: "doctag",
            begin: "@param",
            end: /$/,
            contains: [
              {
                scope: "variable",
                variants: [
                  { match: t },
                  { match: /`(?:\\.|[^`\\])+`/ }
                ],
                endsParent: !0
              }
            ]
          },
          {
            scope: "doctag",
            match: /@[a-zA-Z]+/
          },
          {
            scope: "keyword",
            match: /\\[a-zA-Z]+/
          }
        ] }
      ),
      e.HASH_COMMENT_MODE,
      {
        scope: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\(/,
            end: /\)(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\{/,
            end: /\}(-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\[/,
            end: /\](-*)"/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\(/,
            end: /\)(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\{/,
            end: /\}(-*)'/
          }),
          e.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\[/,
            end: /\](-*)'/
          }),
          {
            begin: '"',
            end: '"',
            relevance: 0
          },
          {
            begin: "'",
            end: "'",
            relevance: 0
          }
        ]
      },
      // Matching numbers immediately following punctuation and operators is
      // tricky since we need to look at the character ahead of a number to
      // ensure the number is not part of an identifier, and we cannot use
      // negative look-behind assertions. So instead we explicitly handle all
      // possible combinations of (operator|punctuation), number.
      // TODO: replace with negative look-behind when available
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
      // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
      {
        relevance: 0,
        variants: [
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              i,
              r
            ]
          },
          {
            scope: {
              1: "operator",
              2: "number"
            },
            match: [
              /%[^%]*%/,
              r
            ]
          },
          {
            scope: {
              1: "punctuation",
              2: "number"
            },
            match: [
              o,
              r
            ]
          },
          {
            scope: { 2: "number" },
            match: [
              /[^a-zA-Z0-9._]|^/,
              // not part of an identifier, or start of document
              r
            ]
          }
        ]
      },
      // Operators/punctuation when they're not directly followed by numbers
      {
        // Relevance boost for the most common assignment form.
        scope: { 3: "operator" },
        match: [
          t,
          /\s+/,
          /<-/,
          /\s+/
        ]
      },
      {
        scope: "operator",
        relevance: 0,
        variants: [
          { match: i },
          { match: /%[^%]*%/ }
        ]
      },
      {
        scope: "punctuation",
        relevance: 0,
        match: o
      },
      {
        // Escaped identifier
        begin: "`",
        end: "`",
        contains: [{ begin: /\\./ }]
      }
    ]
  };
}
function og(e) {
  const n = e.regex, t = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", r = n.either(
    /\b([A-Z]+[a-z0-9]+)+/,
    // ends in caps
    /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
  ), i = n.concat(r, /(::\w+)*/), a = {
    "variable.constant": [
      "__FILE__",
      "__LINE__",
      "__ENCODING__"
    ],
    "variable.language": [
      "self",
      "super"
    ],
    keyword: [
      "alias",
      "and",
      "begin",
      "BEGIN",
      "break",
      "case",
      "class",
      "defined",
      "do",
      "else",
      "elsif",
      "end",
      "END",
      "ensure",
      "for",
      "if",
      "in",
      "module",
      "next",
      "not",
      "or",
      "redo",
      "require",
      "rescue",
      "retry",
      "return",
      "then",
      "undef",
      "unless",
      "until",
      "when",
      "while",
      "yield",
      ...[
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
      ]
    ],
    built_in: [
      "proc",
      "lambda",
      "attr_accessor",
      "attr_reader",
      "attr_writer",
      "define_method",
      "private_constant",
      "module_function"
    ],
    literal: [
      "true",
      "false",
      "nil"
    ]
  }, s = {
    className: "doctag",
    begin: "@[A-Za-z]+"
  }, c = {
    begin: "#<",
    end: ">"
  }, l = [
    e.COMMENT(
      "#",
      "$",
      { contains: [s] }
    ),
    e.COMMENT(
      "^=begin",
      "^=end",
      {
        contains: [s],
        relevance: 10
      }
    ),
    e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
  ], d = {
    className: "subst",
    begin: /#\{/,
    end: /\}/,
    keywords: a
  }, u = {
    className: "string",
    contains: [
      e.BACKSLASH_ESCAPE,
      d
    ],
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /`/,
        end: /`/
      },
      {
        begin: /%[qQwWx]?\(/,
        end: /\)/
      },
      {
        begin: /%[qQwWx]?\[/,
        end: /\]/
      },
      {
        begin: /%[qQwWx]?\{/,
        end: /\}/
      },
      {
        begin: /%[qQwWx]?</,
        end: />/
      },
      {
        begin: /%[qQwWx]?\//,
        end: /\//
      },
      {
        begin: /%[qQwWx]?%/,
        end: /%/
      },
      {
        begin: /%[qQwWx]?-/,
        end: /-/
      },
      {
        begin: /%[qQwWx]?\|/,
        end: /\|/
      },
      // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
      // where ? is the last character of a preceding identifier, as in: `func?4`
      { begin: /\B\?(\\\d{1,3})/ },
      { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
      { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
      { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
      { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
      { begin: /\B\?\\?\S/ },
      // heredocs
      {
        // this guard makes sure that we have an entire heredoc and not a false
        // positive (auto-detect, etc.)
        begin: n.concat(
          /<<[-~]?'?/,
          n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
        ),
        contains: [
          e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [
              e.BACKSLASH_ESCAPE,
              d
            ]
          })
        ]
      }
    ]
  }, f = "[1-9](_?[0-9])*|0", p = "[0-9](_?[0-9])*", g = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal integer/float, optionally exponential or rational, optionally imaginary
      { begin: `\\b(${f})(\\.(${p}))?([eE][+-]?(${p})|r)?i?\\b` },
      // explicit decimal/binary/octal/hexadecimal integer,
      // optionally rational and/or imaginary
      { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
      // 0-prefixed implicit octal integer, optionally rational and/or imaginary
      { begin: "\\b0(_?[0-7])+r?i?\\b" }
    ]
  }, _ = {
    variants: [
      {
        match: /\(\)/
      },
      {
        className: "params",
        begin: /\(/,
        end: /(?=\))/,
        excludeBegin: !0,
        endsParent: !0,
        keywords: a
      }
    ]
  }, y = [
    u,
    {
      variants: [
        {
          match: [
            /class\s+/,
            i,
            /\s+<\s+/,
            i
          ]
        },
        {
          match: [
            /\b(class|module)\s+/,
            i
          ]
        }
      ],
      scope: {
        2: "title.class",
        4: "title.class.inherited"
      },
      keywords: a
    },
    {
      match: [
        /(include|extend)\s+/,
        i
      ],
      scope: {
        2: "title.class"
      },
      keywords: a
    },
    {
      relevance: 0,
      match: [
        i,
        /\.new[. (]/
      ],
      scope: {
        1: "title.class"
      }
    },
    {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    },
    {
      relevance: 0,
      match: r,
      scope: "title.class"
    },
    {
      match: [
        /def/,
        /\s+/,
        t
      ],
      scope: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        _
      ]
    },
    {
      // swallow namespace qualifiers before symbols
      begin: e.IDENT_RE + "::"
    },
    {
      className: "symbol",
      begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
      relevance: 0
    },
    {
      className: "symbol",
      begin: ":(?!\\s)",
      contains: [
        u,
        { begin: t }
      ],
      relevance: 0
    },
    g,
    {
      // negative-look forward attempts to prevent false matches like:
      // @ident@ or $ident$ that might indicate this is not ruby at all
      className: "variable",
      begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
    },
    {
      className: "params",
      begin: /\|(?!=)/,
      end: /\|/,
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0,
      // this could be a lot of things (in other languages) other than params
      keywords: a
    },
    {
      // regexp container
      begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
      keywords: "unless",
      contains: [
        {
          className: "regexp",
          contains: [
            e.BACKSLASH_ESCAPE,
            d
          ],
          illegal: /\n/,
          variants: [
            {
              begin: "/",
              end: "/[a-z]*"
            },
            {
              begin: /%r\{/,
              end: /\}[a-z]*/
            },
            {
              begin: "%r\\(",
              end: "\\)[a-z]*"
            },
            {
              begin: "%r!",
              end: "![a-z]*"
            },
            {
              begin: "%r\\[",
              end: "\\][a-z]*"
            }
          ]
        }
      ].concat(c, l),
      relevance: 0
    }
  ].concat(c, l);
  d.contains = y, _.contains = y;
  const w = [
    {
      begin: /^\s*=>/,
      starts: {
        end: "$",
        contains: y
      }
    },
    {
      className: "meta.prompt",
      begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
      starts: {
        end: "$",
        keywords: a,
        contains: y
      }
    }
  ];
  return l.unshift(c), {
    name: "Ruby",
    aliases: [
      "rb",
      "gemspec",
      "podspec",
      "thor",
      "irb"
    ],
    keywords: a,
    illegal: /\/\*/,
    contains: [e.SHEBANG({ binary: "ruby" })].concat(w).concat(l).concat(y)
  };
}
function sg(e) {
  const n = e.regex, t = /(r#)?/, r = n.concat(t, e.UNDERSCORE_IDENT_RE), i = n.concat(t, e.IDENT_RE), o = {
    className: "title.function.invoke",
    relevance: 0,
    begin: n.concat(
      /\b/,
      /(?!let|for|while|if|else|match\b)/,
      i,
      n.lookahead(/\s*\(/)
    )
  }, a = "([ui](8|16|32|64|128|size)|f(32|64))?", s = [
    "abstract",
    "as",
    "async",
    "await",
    "become",
    "box",
    "break",
    "const",
    "continue",
    "crate",
    "do",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "final",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "macro",
    "match",
    "mod",
    "move",
    "mut",
    "override",
    "priv",
    "pub",
    "ref",
    "return",
    "self",
    "Self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "try",
    "type",
    "typeof",
    "union",
    "unsafe",
    "unsized",
    "use",
    "virtual",
    "where",
    "while",
    "yield"
  ], c = [
    "true",
    "false",
    "Some",
    "None",
    "Ok",
    "Err"
  ], l = [
    // functions
    "drop ",
    // traits
    "Copy",
    "Send",
    "Sized",
    "Sync",
    "Drop",
    "Fn",
    "FnMut",
    "FnOnce",
    "ToOwned",
    "Clone",
    "Debug",
    "PartialEq",
    "PartialOrd",
    "Eq",
    "Ord",
    "AsRef",
    "AsMut",
    "Into",
    "From",
    "Default",
    "Iterator",
    "Extend",
    "IntoIterator",
    "DoubleEndedIterator",
    "ExactSizeIterator",
    "SliceConcatExt",
    "ToString",
    // macros
    "assert!",
    "assert_eq!",
    "bitflags!",
    "bytes!",
    "cfg!",
    "col!",
    "concat!",
    "concat_idents!",
    "debug_assert!",
    "debug_assert_eq!",
    "env!",
    "eprintln!",
    "panic!",
    "file!",
    "format!",
    "format_args!",
    "include_bytes!",
    "include_str!",
    "line!",
    "local_data_key!",
    "module_path!",
    "option_env!",
    "print!",
    "println!",
    "select!",
    "stringify!",
    "try!",
    "unimplemented!",
    "unreachable!",
    "vec!",
    "write!",
    "writeln!",
    "macro_rules!",
    "assert_ne!",
    "debug_assert_ne!"
  ], d = [
    "i8",
    "i16",
    "i32",
    "i64",
    "i128",
    "isize",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
    "usize",
    "f32",
    "f64",
    "str",
    "char",
    "bool",
    "Box",
    "Option",
    "Result",
    "String",
    "Vec"
  ];
  return {
    name: "Rust",
    aliases: ["rs"],
    keywords: {
      $pattern: e.IDENT_RE + "!?",
      type: d,
      keyword: s,
      literal: c,
      built_in: l
    },
    illegal: "</",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      e.inherit(e.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }),
      {
        className: "symbol",
        // negative lookahead to avoid matching `'`
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
      },
      {
        scope: "string",
        variants: [
          { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
          {
            begin: /b?'/,
            end: /'/,
            contains: [
              {
                scope: "char.escape",
                match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
              }
            ]
          }
        ]
      },
      {
        className: "number",
        variants: [
          { begin: "\\b0b([01_]+)" + a },
          { begin: "\\b0o([0-7_]+)" + a },
          { begin: "\\b0x([A-Fa-f0-9_]+)" + a },
          { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a }
        ],
        relevance: 0
      },
      {
        begin: [
          /fn/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.function"
        }
      },
      {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [
          {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [
              e.BACKSLASH_ESCAPE
            ]
          }
        ]
      },
      {
        begin: [
          /let/,
          /\s+/,
          /(?:mut\s+)?/,
          r
        ],
        className: {
          1: "keyword",
          3: "keyword",
          4: "variable"
        }
      },
      // must come before impl/for rule later
      {
        begin: [
          /for/,
          /\s+/,
          r,
          /\s+/,
          /in/
        ],
        className: {
          1: "keyword",
          3: "variable",
          5: "keyword"
        }
      },
      {
        begin: [
          /type/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: [
          /(?:trait|enum|struct|union|impl|for)/,
          /\s+/,
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        begin: e.IDENT_RE + "::",
        keywords: {
          keyword: "Self",
          built_in: l,
          type: d
        }
      },
      {
        className: "punctuation",
        begin: "->"
      },
      o
    ]
  };
}
const lg = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), cg = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], ug = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], dg = [
  ...cg,
  ...ug
], pg = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), fg = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), gg = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), hg = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function mg(e) {
  const n = lg(e), t = gg, r = fg, i = "@[a-z-]+", o = "and or not only", s = {
    className: "variable",
    begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
    relevance: 0
  };
  return {
    name: "SCSS",
    case_insensitive: !0,
    illegal: "[=/|']",
    contains: [
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-tag",
        begin: "\\b(" + dg.join("|") + ")\\b",
        // was there, before, but why?
        relevance: 0
      },
      {
        className: "selector-pseudo",
        begin: ":(" + r.join("|") + ")"
      },
      {
        className: "selector-pseudo",
        begin: ":(:)?(" + t.join("|") + ")"
      },
      s,
      {
        // pseudo-selector params
        begin: /\(/,
        end: /\)/,
        contains: [n.CSS_NUMBER_MODE]
      },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + hg.join("|") + ")\\b"
      },
      { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
      {
        begin: /:/,
        end: /[;}{]/,
        relevance: 0,
        contains: [
          n.BLOCK_COMMENT,
          s,
          n.HEXCOLOR,
          n.CSS_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          n.IMPORTANT,
          n.FUNCTION_DISPATCH
        ]
      },
      // matching these here allows us to treat them more like regular CSS
      // rules so everything between the {} gets regular rule highlighting,
      // which is what we want for page and font-face
      {
        begin: "@(page|font-face)",
        keywords: {
          $pattern: i,
          keyword: "@page @font-face"
        }
      },
      {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: o,
          attribute: pg.join(" ")
        },
        contains: [
          {
            begin: i,
            className: "keyword"
          },
          {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          },
          s,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          n.HEXCOLOR,
          n.CSS_NUMBER_MODE
        ]
      },
      n.FUNCTION_DISPATCH
    ]
  };
}
function bg(e) {
  return {
    name: "Shell Session",
    aliases: [
      "console",
      "shellsession"
    ],
    contains: [
      {
        className: "meta.prompt",
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }
    ]
  };
}
function Eg(e) {
  const n = e.regex, t = e.COMMENT("--", "$"), r = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  }, i = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  }, o = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], a = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], s = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], c = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], l = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], d = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], u = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], f = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], p = d, g = [
    ...l,
    ...c
  ].filter((C) => !d.includes(C)), _ = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, k = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, E = {
    match: n.concat(/\b/, n.either(...p), /\s*\(/),
    relevance: 0,
    keywords: { built_in: p }
  };
  function x(C) {
    return n.concat(
      /\b/,
      n.either(...C.map((y) => y.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const S = {
    scope: "keyword",
    match: x(f),
    relevance: 0
  };
  function A(C, {
    exceptions: y,
    when: U
  } = {}) {
    const K = U;
    return y = y || [], C.map((H) => H.match(/\|\d+$/) || y.includes(H) ? H : K(H) ? `${H}|0` : H);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: A(g, { when: (C) => C.length < 3 }),
      literal: o,
      type: s,
      built_in: u
    },
    contains: [
      {
        scope: "type",
        match: x(a)
      },
      S,
      E,
      _,
      r,
      i,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      t,
      k
    ]
  };
}
function ja(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Fn(e) {
  return ce("(?=", e, ")");
}
function ce(...e) {
  return e.map((t) => ja(t)).join("");
}
function _g(e) {
  const n = e[e.length - 1];
  return typeof n == "object" && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
}
function Oe(...e) {
  return "(" + (_g(e).capture ? "" : "?:") + e.map((r) => ja(r)).join("|") + ")";
}
const Ar = (e) => ce(
  /\b/,
  e,
  /\w$/.test(e) ? /\b/ : /\B/
), yg = [
  "Protocol",
  // contextual
  "Type"
  // contextual
].map(Ar), Di = [
  "init",
  "self"
].map(Ar), kg = [
  "Any",
  "Self"
], Yt = [
  // strings below will be fed into the regular `keywords` engine while regex
  // will result in additional modes being created to scan for those keywords to
  // avoid conflicts with other rules
  "actor",
  "any",
  // contextual
  "associatedtype",
  "async",
  "await",
  /as\?/,
  // operator
  /as!/,
  // operator
  "as",
  // operator
  "borrowing",
  // contextual
  "break",
  "case",
  "catch",
  "class",
  "consume",
  // contextual
  "consuming",
  // contextual
  "continue",
  "convenience",
  // contextual
  "copy",
  // contextual
  "default",
  "defer",
  "deinit",
  "didSet",
  // contextual
  "distributed",
  "do",
  "dynamic",
  // contextual
  "each",
  "else",
  "enum",
  "extension",
  "fallthrough",
  /fileprivate\(set\)/,
  "fileprivate",
  "final",
  // contextual
  "for",
  "func",
  "get",
  // contextual
  "guard",
  "if",
  "import",
  "indirect",
  // contextual
  "infix",
  // contextual
  /init\?/,
  /init!/,
  "inout",
  /internal\(set\)/,
  "internal",
  "in",
  "is",
  // operator
  "isolated",
  // contextual
  "nonisolated",
  // contextual
  "lazy",
  // contextual
  "let",
  "macro",
  "mutating",
  // contextual
  "nonmutating",
  // contextual
  /open\(set\)/,
  // contextual
  "open",
  // contextual
  "operator",
  "optional",
  // contextual
  "override",
  // contextual
  "package",
  "postfix",
  // contextual
  "precedencegroup",
  "prefix",
  // contextual
  /private\(set\)/,
  "private",
  "protocol",
  /public\(set\)/,
  "public",
  "repeat",
  "required",
  // contextual
  "rethrows",
  "return",
  "set",
  // contextual
  "some",
  // contextual
  "static",
  "struct",
  "subscript",
  "super",
  "switch",
  "throws",
  "throw",
  /try\?/,
  // operator
  /try!/,
  // operator
  "try",
  // operator
  "typealias",
  /unowned\(safe\)/,
  // contextual
  /unowned\(unsafe\)/,
  // contextual
  "unowned",
  // contextual
  "var",
  "weak",
  // contextual
  "where",
  "while",
  "willSet"
  // contextual
], Li = [
  "false",
  "nil",
  "true"
], wg = [
  "assignment",
  "associativity",
  "higherThan",
  "left",
  "lowerThan",
  "none",
  "right"
], xg = [
  "#colorLiteral",
  "#column",
  "#dsohandle",
  "#else",
  "#elseif",
  "#endif",
  "#error",
  "#file",
  "#fileID",
  "#fileLiteral",
  "#filePath",
  "#function",
  "#if",
  "#imageLiteral",
  "#keyPath",
  "#line",
  "#selector",
  "#sourceLocation",
  "#warning"
], Pi = [
  "abs",
  "all",
  "any",
  "assert",
  "assertionFailure",
  "debugPrint",
  "dump",
  "fatalError",
  "getVaList",
  "isKnownUniquelyReferenced",
  "max",
  "min",
  "numericCast",
  "pointwiseMax",
  "pointwiseMin",
  "precondition",
  "preconditionFailure",
  "print",
  "readLine",
  "repeatElement",
  "sequence",
  "stride",
  "swap",
  "swift_unboxFromSwiftValueWithType",
  "transcode",
  "type",
  "unsafeBitCast",
  "unsafeDowncast",
  "withExtendedLifetime",
  "withUnsafeMutablePointer",
  "withUnsafePointer",
  "withVaList",
  "withoutActuallyEscaping",
  "zip"
], eo = Oe(
  /[/=\-+!*%<>&|^~?]/,
  /[\u00A1-\u00A7]/,
  /[\u00A9\u00AB]/,
  /[\u00AC\u00AE]/,
  /[\u00B0\u00B1]/,
  /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
  /[\u2016-\u2017]/,
  /[\u2020-\u2027]/,
  /[\u2030-\u203E]/,
  /[\u2041-\u2053]/,
  /[\u2055-\u205E]/,
  /[\u2190-\u23FF]/,
  /[\u2500-\u2775]/,
  /[\u2794-\u2BFF]/,
  /[\u2E00-\u2E7F]/,
  /[\u3001-\u3003]/,
  /[\u3008-\u3020]/,
  /[\u3030]/
), no = Oe(
  eo,
  /[\u0300-\u036F]/,
  /[\u1DC0-\u1DFF]/,
  /[\u20D0-\u20FF]/,
  /[\uFE00-\uFE0F]/,
  /[\uFE20-\uFE2F]/
  // TODO: The following characters are also allowed, but the regex isn't supported yet.
  // /[\u{E0100}-\u{E01EF}]/u
), Zt = ce(eo, no, "*"), to = Oe(
  /[a-zA-Z_]/,
  /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
  /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
  /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
  /[\u1E00-\u1FFF]/,
  /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
  /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
  /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
  /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
  /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
  /[\uFE47-\uFEFE\uFF00-\uFFFD]/
  // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
  // The following characters are also allowed, but the regexes aren't supported yet.
  // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
  // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
  // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
  // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
), mt = Oe(
  to,
  /\d/,
  /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
), Ye = ce(to, mt, "*"), ut = ce(/[A-Z]/, mt, "*"), Sg = [
  "attached",
  "autoclosure",
  ce(/convention\(/, Oe("swift", "block", "c"), /\)/),
  "discardableResult",
  "dynamicCallable",
  "dynamicMemberLookup",
  "escaping",
  "freestanding",
  "frozen",
  "GKInspectable",
  "IBAction",
  "IBDesignable",
  "IBInspectable",
  "IBOutlet",
  "IBSegueAction",
  "inlinable",
  "main",
  "nonobjc",
  "NSApplicationMain",
  "NSCopying",
  "NSManaged",
  ce(/objc\(/, Ye, /\)/),
  "objc",
  "objcMembers",
  "propertyWrapper",
  "requires_stored_property_inits",
  "resultBuilder",
  "Sendable",
  "testable",
  "UIApplicationMain",
  "unchecked",
  "unknown",
  "usableFromInline",
  "warn_unqualified_access"
], Ng = [
  "iOS",
  "iOSApplicationExtension",
  "macOS",
  "macOSApplicationExtension",
  "macCatalyst",
  "macCatalystApplicationExtension",
  "watchOS",
  "watchOSApplicationExtension",
  "tvOS",
  "tvOSApplicationExtension",
  "swift"
];
function Tg(e) {
  const n = {
    match: /\s+/,
    relevance: 0
  }, t = e.COMMENT(
    "/\\*",
    "\\*/",
    { contains: ["self"] }
  ), r = [
    e.C_LINE_COMMENT_MODE,
    t
  ], i = {
    match: [
      /\./,
      Oe(...yg, ...Di)
    ],
    className: { 2: "keyword" }
  }, o = {
    // Consume .keyword to prevent highlighting properties and methods as keywords.
    match: ce(/\./, Oe(...Yt)),
    relevance: 0
  }, a = Yt.filter((ae) => typeof ae == "string").concat(["_|0"]), s = Yt.filter((ae) => typeof ae != "string").concat(kg).map(Ar), c = { variants: [
    {
      className: "keyword",
      match: Oe(...s, ...Di)
    }
  ] }, l = {
    $pattern: Oe(
      /\b\w+/,
      // regular keywords
      /#\w+/
      // number keywords
    ),
    keyword: a.concat(xg),
    literal: Li
  }, d = [
    i,
    o,
    c
  ], u = {
    // Consume .built_in to prevent highlighting properties and methods.
    match: ce(/\./, Oe(...Pi)),
    relevance: 0
  }, f = {
    className: "built_in",
    match: ce(/\b/, Oe(...Pi), /(?=\()/)
  }, p = [
    u,
    f
  ], g = {
    // Prevent -> from being highlighting as an operator.
    match: /->/,
    relevance: 0
  }, _ = {
    className: "operator",
    relevance: 0,
    variants: [
      { match: Zt },
      {
        // dot-operator: only operators that start with a dot are allowed to use dots as
        // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
        // characters that may also include dots.
        match: `\\.(\\.|${no})+`
      }
    ]
  }, k = [
    g,
    _
  ], E = "([0-9]_*)+", x = "([0-9a-fA-F]_*)+", S = {
    className: "number",
    relevance: 0,
    variants: [
      // decimal floating-point-literal (subsumes decimal-literal)
      { match: `\\b(${E})(\\.(${E}))?([eE][+-]?(${E}))?\\b` },
      // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
      { match: `\\b0x(${x})(\\.(${x}))?([pP][+-]?(${E}))?\\b` },
      // octal-literal
      { match: /\b0o([0-7]_*)+\b/ },
      // binary-literal
      { match: /\b0b([01]_*)+\b/ }
    ]
  }, A = (ae = "") => ({
    className: "subst",
    variants: [
      { match: ce(/\\/, ae, /[0\\tnr"']/) },
      { match: ce(/\\/, ae, /u\{[0-9a-fA-F]{1,8}\}/) }
    ]
  }), C = (ae = "") => ({
    className: "subst",
    match: ce(/\\/, ae, /[\t ]*(?:[\r\n]|\r\n)/)
  }), y = (ae = "") => ({
    className: "subst",
    label: "interpol",
    begin: ce(/\\/, ae, /\(/),
    end: /\)/
  }), U = (ae = "") => ({
    begin: ce(ae, /"""/),
    end: ce(/"""/, ae),
    contains: [
      A(ae),
      C(ae),
      y(ae)
    ]
  }), K = (ae = "") => ({
    begin: ce(ae, /"/),
    end: ce(/"/, ae),
    contains: [
      A(ae),
      y(ae)
    ]
  }), H = {
    className: "string",
    variants: [
      U(),
      U("#"),
      U("##"),
      U("###"),
      K(),
      K("#"),
      K("##"),
      K("###")
    ]
  }, w = [
    e.BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [e.BACKSLASH_ESCAPE]
    }
  ], L = {
    begin: /\/[^\s](?=[^/\n]*\/)/,
    end: /\//,
    contains: w
  }, P = (ae) => {
    const je = ce(ae, /\//), en = ce(/\//, ae);
    return {
      begin: je,
      end: en,
      contains: [
        ...w,
        {
          scope: "comment",
          begin: `#(?!.*${en})`,
          end: /$/
        }
      ]
    };
  }, B = {
    scope: "regexp",
    variants: [
      P("###"),
      P("##"),
      P("#"),
      L
    ]
  }, R = { match: ce(/`/, Ye, /`/) }, F = {
    className: "variable",
    match: /\$\d+/
  }, re = {
    className: "variable",
    match: `\\$${mt}+`
  }, ue = [
    R,
    F,
    re
  ], Z = {
    match: /(@|#(un)?)available/,
    scope: "keyword",
    starts: { contains: [
      {
        begin: /\(/,
        end: /\)/,
        keywords: Ng,
        contains: [
          ...k,
          S,
          H
        ]
      }
    ] }
  }, de = {
    scope: "keyword",
    match: ce(/@/, Oe(...Sg), Fn(Oe(/\(/, /\s+/)))
  }, h = {
    scope: "meta",
    match: ce(/@/, Ye)
  }, le = [
    Z,
    de,
    h
  ], pe = {
    match: Fn(/\b[A-Z]/),
    relevance: 0,
    contains: [
      {
        // Common Apple frameworks, for relevance boost
        className: "type",
        match: ce(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, mt, "+")
      },
      {
        // Type identifier
        className: "type",
        match: ut,
        relevance: 0
      },
      {
        // Optional type
        match: /[?!]+/,
        relevance: 0
      },
      {
        // Variadic parameter
        match: /\.\.\./,
        relevance: 0
      },
      {
        // Protocol composition
        match: ce(/\s+&\s+/, Fn(ut)),
        relevance: 0
      }
    ]
  }, b = {
    begin: /</,
    end: />/,
    keywords: l,
    contains: [
      ...r,
      ...d,
      ...le,
      g,
      pe
    ]
  };
  pe.contains.push(b);
  const ve = {
    match: ce(Ye, /\s*:/),
    keywords: "_|0",
    relevance: 0
  }, Ue = {
    begin: /\(/,
    end: /\)/,
    relevance: 0,
    keywords: l,
    contains: [
      "self",
      ve,
      ...r,
      B,
      ...d,
      ...p,
      ...k,
      S,
      H,
      ...ue,
      ...le,
      pe
    ]
  }, be = {
    begin: /</,
    end: />/,
    keywords: "repeat each",
    contains: [
      ...r,
      pe
    ]
  }, Qe = {
    begin: Oe(
      Fn(ce(Ye, /\s*:/)),
      Fn(ce(Ye, /\s+/, Ye, /\s*:/))
    ),
    end: /:/,
    relevance: 0,
    contains: [
      {
        className: "keyword",
        match: /\b_\b/
      },
      {
        className: "params",
        match: Ye
      }
    ]
  }, Me = {
    begin: /\(/,
    end: /\)/,
    keywords: l,
    contains: [
      Qe,
      ...r,
      ...d,
      ...k,
      S,
      H,
      ...le,
      pe,
      Ue
    ],
    endsParent: !0,
    illegal: /["']/
  }, Je = {
    match: [
      /(func|macro)/,
      /\s+/,
      Oe(R.match, Ye, Zt)
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      be,
      Me,
      n
    ],
    illegal: [
      /\[/,
      /%/
    ]
  }, De = {
    match: [
      /\b(?:subscript|init[?!]?)/,
      /\s*(?=[<(])/
    ],
    className: { 1: "keyword" },
    contains: [
      be,
      Me,
      n
    ],
    illegal: /\[|%/
  }, on = {
    match: [
      /operator/,
      /\s+/,
      Zt
    ],
    className: {
      1: "keyword",
      3: "title"
    }
  }, In = {
    begin: [
      /precedencegroup/,
      /\s+/,
      ut
    ],
    className: {
      1: "keyword",
      3: "title"
    },
    contains: [pe],
    keywords: [
      ...wg,
      ...Li
    ],
    end: /}/
  }, Rn = {
    match: [
      /class\b/,
      /\s+/,
      /func\b/,
      /\s+/,
      /\b[A-Za-z_][A-Za-z0-9_]*\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword",
      5: "title.function"
    }
  }, Mn = {
    match: [
      /class\b/,
      /\s+/,
      /var\b/
    ],
    scope: {
      1: "keyword",
      3: "keyword"
    }
  }, _n = {
    begin: [
      /(struct|protocol|class|extension|enum|actor)/,
      /\s+/,
      Ye,
      /\s*/
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    },
    keywords: l,
    contains: [
      be,
      ...d,
      {
        begin: /:/,
        end: /\{/,
        keywords: l,
        contains: [
          {
            scope: "title.class.inherited",
            match: ut
          },
          ...d
        ],
        relevance: 0
      }
    ]
  };
  for (const ae of H.variants) {
    const je = ae.contains.find((yn) => yn.label === "interpol");
    je.keywords = l;
    const en = [
      ...d,
      ...p,
      ...k,
      S,
      H,
      ...ue
    ];
    je.contains = [
      ...en,
      {
        begin: /\(/,
        end: /\)/,
        contains: [
          "self",
          ...en
        ]
      }
    ];
  }
  return {
    name: "Swift",
    keywords: l,
    contains: [
      ...r,
      Je,
      De,
      Rn,
      Mn,
      _n,
      on,
      In,
      {
        beginKeywords: "import",
        end: /$/,
        contains: [...r],
        relevance: 0
      },
      B,
      ...d,
      ...p,
      ...k,
      S,
      H,
      ...ue,
      ...le,
      pe,
      Ue
    ]
  };
}
const bt = "[A-Za-z$_][0-9A-Za-z$_]*", ro = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], io = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], ao = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], oo = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], so = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], lo = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], co = [].concat(
  so,
  ao,
  oo
);
function Ag(e) {
  const n = e.regex, t = (Z, { after: de }) => {
    const h = "</" + Z[0].slice(1);
    return Z.input.indexOf(h, de) !== -1;
  }, r = bt, i = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, a = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (Z, de) => {
      const h = Z[0].length + Z.index, le = Z.input[h];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        le === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        le === ","
      ) {
        de.ignoreMatch();
        return;
      }
      le === ">" && (t(Z, { after: h }) || de.ignoreMatch());
      let pe;
      const b = Z.input.substring(h);
      if (pe = b.match(/^\s*=/)) {
        de.ignoreMatch();
        return;
      }
      if ((pe = b.match(/^\s+extends\s+/)) && pe.index === 0) {
        de.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: bt,
    keyword: ro,
    literal: io,
    built_in: co,
    "variable.language": lo
  }, c = "[0-9](_?[0-9])*", l = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, p = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "css"
    }
  }, _ = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "graphql"
    }
  }, k = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, x = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, S = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    g,
    _,
    k,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    u
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = S.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(S)
  });
  const A = [].concat(x, f.contains), C = A.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(A)
    }
  ]), y = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: C
  }, U = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          n.concat(r, "(", n.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, K = {
    relevance: 0,
    match: n.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...ao,
        ...oo
      ]
    }
  }, H = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, w = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [y],
    illegal: /%/
  }, L = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function P(Z) {
    return n.concat("(?!", Z.join("|"), ")");
  }
  const B = {
    match: n.concat(
      /\b/,
      P([
        ...so,
        "super",
        "import"
      ].map((Z) => `${Z}\\s*\\(`)),
      r,
      n.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, R = {
    begin: n.concat(/\./, n.lookahead(
      n.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, F = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      y
    ]
  }, re = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ue = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      n.lookahead(re)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      y
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: C, CLASS_REFERENCE: K },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      H,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      g,
      _,
      k,
      x,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      u,
      K,
      {
        scope: "attr",
        match: r + n.lookahead(":"),
        relevance: 0
      },
      ue,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          x,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: re,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: C
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: o },
              {
                begin: a.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": a.isTrulyOpeningTag,
                end: a.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: a.begin,
                end: a.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      w,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          y,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      R,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [y]
      },
      B,
      L,
      U,
      F,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function vg(e) {
  const n = e.regex, t = Ag(e), r = bt, i = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, a = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: i
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, s = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, c = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], l = {
    $pattern: bt,
    keyword: ro.concat(c),
    literal: io,
    built_in: co.concat(i),
    "variable.language": lo
  }, d = {
    className: "meta",
    begin: "@" + r
  }, u = (_, k, E) => {
    const x = _.contains.findIndex((S) => S.label === k);
    if (x === -1)
      throw new Error("can not find mode to replace");
    _.contains.splice(x, 1, E);
  };
  Object.assign(t.keywords, l), t.exports.PARAMS_CONTAINS.push(d);
  const f = t.contains.find((_) => _.scope === "attr"), p = Object.assign(
    {},
    f,
    { match: n.concat(r, n.lookahead(/\s*\?:/)) }
  );
  t.exports.PARAMS_CONTAINS.push([
    t.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    f,
    // highlight the params key
    p
    // Added for optional property assignment highlighting
  ]), t.contains = t.contains.concat([
    d,
    o,
    a,
    p
    // Added for optional property assignment highlighting
  ]), u(t, "shebang", e.SHEBANG()), u(t, "use_strict", s);
  const g = t.contains.find((_) => _.label === "func.def");
  return g.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
function Cg(e) {
  const n = e.regex, t = {
    className: "string",
    begin: /"(""|[^/n])"C\b/
  }, r = {
    className: "string",
    begin: /"/,
    end: /"/,
    illegal: /\n/,
    contains: [
      {
        // double quote escape
        begin: /""/
      }
    ]
  }, i = /\d{1,2}\/\d{1,2}\/\d{4}/, o = /\d{4}-\d{1,2}-\d{1,2}/, a = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, s = /\d{1,2}(:\d{1,2}){1,2}/, c = {
    className: "literal",
    variants: [
      {
        // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
        begin: n.concat(/# */, n.either(o, i), / *#/)
      },
      {
        // #H:mm[:ss]# (24h Time)
        begin: n.concat(/# */, s, / *#/)
      },
      {
        // #h[:mm[:ss]] A# (12h Time)
        begin: n.concat(/# */, a, / *#/)
      },
      {
        // date plus time
        begin: n.concat(
          /# */,
          n.either(o, i),
          / +/,
          n.either(a, s),
          / *#/
        )
      }
    ]
  }, l = {
    className: "number",
    relevance: 0,
    variants: [
      {
        // Float
        begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
      },
      {
        // Integer (base 10)
        begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 16)
        begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 8)
        begin: /&O[0-7_]+((U?[SIL])|[%&])?/
      },
      {
        // Integer (base 2)
        begin: /&B[01_]+((U?[SIL])|[%&])?/
      }
    ]
  }, d = {
    className: "label",
    begin: /^\w+:/
  }, u = e.COMMENT(/'''/, /$/, { contains: [
    {
      className: "doctag",
      begin: /<\/?/,
      end: />/
    }
  ] }), f = e.COMMENT(null, /$/, { variants: [
    { begin: /'/ },
    {
      // TODO: Use multi-class for leading spaces
      begin: /([\t ]|^)REM(?=\s)/
    }
  ] });
  return {
    name: "Visual Basic .NET",
    aliases: ["vb"],
    case_insensitive: !0,
    classNameAliases: { label: "symbol" },
    keywords: {
      keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
      built_in: (
        // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
        "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
      ),
      type: (
        // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
        "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
      ),
      literal: "true false nothing"
    },
    illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
    contains: [
      t,
      r,
      c,
      l,
      d,
      u,
      f,
      {
        className: "meta",
        // TODO: Use multi-class for indentation once available
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
        contains: [f]
      }
    ]
  };
}
function Og(e) {
  e.regex;
  const n = e.COMMENT(/\(;/, /;\)/);
  n.contains.push("self");
  const t = e.COMMENT(/;;/, /$/), r = [
    "anyfunc",
    "block",
    "br",
    "br_if",
    "br_table",
    "call",
    "call_indirect",
    "data",
    "drop",
    "elem",
    "else",
    "end",
    "export",
    "func",
    "global.get",
    "global.set",
    "local.get",
    "local.set",
    "local.tee",
    "get_global",
    "get_local",
    "global",
    "if",
    "import",
    "local",
    "loop",
    "memory",
    "memory.grow",
    "memory.size",
    "module",
    "mut",
    "nop",
    "offset",
    "param",
    "result",
    "return",
    "select",
    "set_global",
    "set_local",
    "start",
    "table",
    "tee_local",
    "then",
    "type",
    "unreachable"
  ], i = {
    begin: [
      /(?:func|call|call_indirect)/,
      /\s+/,
      /\$[^\s)]+/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    }
  }, o = {
    className: "variable",
    begin: /\$[\w_]+/
  }, a = {
    match: /(\((?!;)|\))+/,
    className: "punctuation",
    relevance: 0
  }, s = {
    className: "number",
    relevance: 0,
    // borrowed from Prism, TODO: split out into variants
    match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
  }, c = {
    // look-ahead prevents us from gobbling up opcodes
    match: /(i32|i64|f32|f64)(?!\.)/,
    className: "type"
  }, l = {
    className: "keyword",
    // borrowed from Prism, TODO: split out into variants
    match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
  };
  return {
    name: "WebAssembly",
    keywords: {
      $pattern: /[\w.]+/,
      keyword: r
    },
    contains: [
      t,
      n,
      {
        match: [
          /(?:offset|align)/,
          /\s*/,
          /=/
        ],
        className: {
          1: "keyword",
          3: "operator"
        }
      },
      o,
      a,
      i,
      e.QUOTE_STRING_MODE,
      c,
      l,
      s
    ]
  };
}
function Ig(e) {
  const n = e.regex, t = n.concat(/[\p{L}_]/u, n.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, a = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          c,
          s,
          a,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  a,
                  c,
                  s
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              c
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [l],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [l],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: n.concat(
          /</,
          n.lookahead(n.concat(
            t,
            // <tag/>
            // <tag>
            // <tag ...
            n.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0,
            starts: l
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: n.concat(
          /<\//,
          n.lookahead(n.concat(
            t,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
function Rg(e) {
  const n = "true false yes no null", t = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = {
    className: "attr",
    variants: [
      // added brackets support and special char support
      { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
      {
        // double quoted keys - with brackets and special char support
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      },
      {
        // single quoted keys - with brackets and special char support
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }
    ]
  }, i = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  }, o = {
    className: "string",
    relevance: 0,
    begin: /'/,
    end: /'/,
    contains: [
      {
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }
    ]
  }, a = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      e.BACKSLASH_ESCAPE,
      i
    ]
  }, s = e.inherit(a, { variants: [
    {
      begin: /'/,
      end: /'/,
      contains: [
        {
          begin: /''/,
          relevance: 0
        }
      ]
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] }), f = {
    className: "number",
    begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
  }, p = {
    end: ",",
    endsWithParent: !0,
    excludeEnd: !0,
    keywords: n,
    relevance: 0
  }, g = {
    begin: /\{/,
    end: /\}/,
    contains: [p],
    illegal: "\\n",
    relevance: 0
  }, _ = {
    begin: "\\[",
    end: "\\]",
    contains: [p],
    illegal: "\\n",
    relevance: 0
  }, k = [
    r,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + t
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + t + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + t
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + t
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    e.HASH_COMMENT_MODE,
    {
      beginKeywords: n,
      keywords: { literal: n }
    },
    f,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: e.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    g,
    _,
    o,
    a
  ], E = [...k];
  return E.pop(), E.push(s), p.contains = E, {
    name: "YAML",
    case_insensitive: !0,
    aliases: ["yml"],
    contains: k
  };
}
const Mg = {
  arduino: gf,
  bash: hf,
  c: mf,
  cpp: bf,
  csharp: Ef,
  css: Af,
  diff: vf,
  go: Cf,
  graphql: Of,
  ini: If,
  java: Rf,
  javascript: Bf,
  json: Ff,
  kotlin: Uf,
  less: Yf,
  lua: Zf,
  makefile: Xf,
  markdown: Qf,
  objectivec: Jf,
  perl: jf,
  php: eg,
  "php-template": ng,
  plaintext: tg,
  python: rg,
  "python-repl": ig,
  r: ag,
  ruby: og,
  rust: sg,
  scss: mg,
  shell: bg,
  sql: Eg,
  swift: Tg,
  typescript: vg,
  vbnet: Cg,
  wasm: Og,
  xml: Ig,
  yaml: Rg
};
var Xt, Bi;
function Dg() {
  if (Bi) return Xt;
  Bi = 1;
  function e(m) {
    return m instanceof Map ? m.clear = m.delete = m.set = function() {
      throw new Error("map is read-only");
    } : m instanceof Set && (m.add = m.clear = m.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(m), Object.getOwnPropertyNames(m).forEach((T) => {
      const M = m[T], X = typeof M;
      (X === "object" || X === "function") && !Object.isFrozen(M) && e(M);
    }), m;
  }
  class n {
    /**
     * @param {CompiledMode} mode
     */
    constructor(T) {
      T.data === void 0 && (T.data = {}), this.data = T.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(m) {
    return m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(m, ...T) {
    const M = /* @__PURE__ */ Object.create(null);
    for (const X in m)
      M[X] = m[X];
    return T.forEach(function(X) {
      for (const Ee in X)
        M[Ee] = X[Ee];
    }), /** @type {T} */
    M;
  }
  const i = "</span>", o = (m) => !!m.scope, a = (m, { prefix: T }) => {
    if (m.startsWith("language:"))
      return m.replace("language:", "language-");
    if (m.includes(".")) {
      const M = m.split(".");
      return [
        `${T}${M.shift()}`,
        ...M.map((X, Ee) => `${X}${"_".repeat(Ee + 1)}`)
      ].join(" ");
    }
    return `${T}${m}`;
  };
  class s {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(T, M) {
      this.buffer = "", this.classPrefix = M.classPrefix, T.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(T) {
      this.buffer += t(T);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(T) {
      if (!o(T)) return;
      const M = a(
        T.scope,
        { prefix: this.classPrefix }
      );
      this.span(M);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(T) {
      o(T) && (this.buffer += i);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(T) {
      this.buffer += `<span class="${T}">`;
    }
  }
  const c = (m = {}) => {
    const T = { children: [] };
    return Object.assign(T, m), T;
  };
  class l {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(T) {
      this.top.children.push(T);
    }
    /** @param {string} scope */
    openNode(T) {
      const M = c({ scope: T });
      this.add(M), this.stack.push(M);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(T) {
      return this.constructor._walk(T, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(T, M) {
      return typeof M == "string" ? T.addText(M) : M.children && (T.openNode(M), M.children.forEach((X) => this._walk(T, X)), T.closeNode(M)), T;
    }
    /**
     * @param {Node} node
     */
    static _collapse(T) {
      typeof T != "string" && T.children && (T.children.every((M) => typeof M == "string") ? T.children = [T.children.join("")] : T.children.forEach((M) => {
        l._collapse(M);
      }));
    }
  }
  class d extends l {
    /**
     * @param {*} options
     */
    constructor(T) {
      super(), this.options = T;
    }
    /**
     * @param {string} text
     */
    addText(T) {
      T !== "" && this.add(T);
    }
    /** @param {string} scope */
    startScope(T) {
      this.openNode(T);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(T, M) {
      const X = T.root;
      M && (X.scope = `language:${M}`), this.add(X);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function u(m) {
    return m ? typeof m == "string" ? m : m.source : null;
  }
  function f(m) {
    return _("(?=", m, ")");
  }
  function p(m) {
    return _("(?:", m, ")*");
  }
  function g(m) {
    return _("(?:", m, ")?");
  }
  function _(...m) {
    return m.map((M) => u(M)).join("");
  }
  function k(m) {
    const T = m[m.length - 1];
    return typeof T == "object" && T.constructor === Object ? (m.splice(m.length - 1, 1), T) : {};
  }
  function E(...m) {
    return "(" + (k(m).capture ? "" : "?:") + m.map((X) => u(X)).join("|") + ")";
  }
  function x(m) {
    return new RegExp(m.toString() + "|").exec("").length - 1;
  }
  function S(m, T) {
    const M = m && m.exec(T);
    return M && M.index === 0;
  }
  const A = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function C(m, { joinWith: T }) {
    let M = 0;
    return m.map((X) => {
      M += 1;
      const Ee = M;
      let _e = u(X), $ = "";
      for (; _e.length > 0; ) {
        const z = A.exec(_e);
        if (!z) {
          $ += _e;
          break;
        }
        $ += _e.substring(0, z.index), _e = _e.substring(z.index + z[0].length), z[0][0] === "\\" && z[1] ? $ += "\\" + String(Number(z[1]) + Ee) : ($ += z[0], z[0] === "(" && M++);
      }
      return $;
    }).map((X) => `(${X})`).join(T);
  }
  const y = /\b\B/, U = "[a-zA-Z]\\w*", K = "[a-zA-Z_]\\w*", H = "\\b\\d+(\\.\\d+)?", w = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", L = "\\b(0b[01]+)", P = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", B = (m = {}) => {
    const T = /^#![ ]*\//;
    return m.binary && (m.begin = _(
      T,
      /.*\b/,
      m.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: T,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (M, X) => {
        M.index !== 0 && X.ignoreMatch();
      }
    }, m);
  }, R = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, F = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [R]
  }, re = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [R]
  }, ue = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, Z = function(m, T, M = {}) {
    const X = r(
      {
        scope: "comment",
        begin: m,
        end: T,
        contains: []
      },
      M
    );
    X.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Ee = E(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return X.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: _(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          Ee,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), X;
  }, de = Z("//", "$"), h = Z("/\\*", "\\*/"), le = Z("#", "$"), pe = {
    scope: "number",
    begin: H,
    relevance: 0
  }, b = {
    scope: "number",
    begin: w,
    relevance: 0
  }, ve = {
    scope: "number",
    begin: L,
    relevance: 0
  }, Ue = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      R,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [R]
      }
    ]
  }, be = {
    scope: "title",
    begin: U,
    relevance: 0
  }, Qe = {
    scope: "title",
    begin: K,
    relevance: 0
  }, Me = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + K,
    relevance: 0
  };
  var De = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: F,
    BACKSLASH_ESCAPE: R,
    BINARY_NUMBER_MODE: ve,
    BINARY_NUMBER_RE: L,
    COMMENT: Z,
    C_BLOCK_COMMENT_MODE: h,
    C_LINE_COMMENT_MODE: de,
    C_NUMBER_MODE: b,
    C_NUMBER_RE: w,
    END_SAME_AS_BEGIN: function(m) {
      return Object.assign(
        m,
        {
          /** @type {ModeCallback} */
          "on:begin": (T, M) => {
            M.data._beginMatch = T[1];
          },
          /** @type {ModeCallback} */
          "on:end": (T, M) => {
            M.data._beginMatch !== T[1] && M.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: le,
    IDENT_RE: U,
    MATCH_NOTHING_RE: y,
    METHOD_GUARD: Me,
    NUMBER_MODE: pe,
    NUMBER_RE: H,
    PHRASAL_WORDS_MODE: ue,
    QUOTE_STRING_MODE: re,
    REGEXP_MODE: Ue,
    RE_STARTERS_RE: P,
    SHEBANG: B,
    TITLE_MODE: be,
    UNDERSCORE_IDENT_RE: K,
    UNDERSCORE_TITLE_MODE: Qe
  });
  function on(m, T) {
    m.input[m.index - 1] === "." && T.ignoreMatch();
  }
  function In(m, T) {
    m.className !== void 0 && (m.scope = m.className, delete m.className);
  }
  function Rn(m, T) {
    T && m.beginKeywords && (m.begin = "\\b(" + m.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", m.__beforeBegin = on, m.keywords = m.keywords || m.beginKeywords, delete m.beginKeywords, m.relevance === void 0 && (m.relevance = 0));
  }
  function Mn(m, T) {
    Array.isArray(m.illegal) && (m.illegal = E(...m.illegal));
  }
  function _n(m, T) {
    if (m.match) {
      if (m.begin || m.end) throw new Error("begin & end are not supported with match");
      m.begin = m.match, delete m.match;
    }
  }
  function ae(m, T) {
    m.relevance === void 0 && (m.relevance = 1);
  }
  const je = (m, T) => {
    if (!m.beforeMatch) return;
    if (m.starts) throw new Error("beforeMatch cannot be used with starts");
    const M = Object.assign({}, m);
    Object.keys(m).forEach((X) => {
      delete m[X];
    }), m.keywords = M.keywords, m.begin = _(M.beforeMatch, f(M.begin)), m.starts = {
      relevance: 0,
      contains: [
        Object.assign(M, { endsParent: !0 })
      ]
    }, m.relevance = 0, delete M.beforeMatch;
  }, en = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], yn = "keyword";
  function Dn(m, T, M = yn) {
    const X = /* @__PURE__ */ Object.create(null);
    return typeof m == "string" ? Ee(M, m.split(" ")) : Array.isArray(m) ? Ee(M, m) : Object.keys(m).forEach(function(_e) {
      Object.assign(
        X,
        Dn(m[_e], T, _e)
      );
    }), X;
    function Ee(_e, $) {
      T && ($ = $.map((z) => z.toLowerCase())), $.forEach(function(z) {
        const Y = z.split("|");
        X[Y[0]] = [_e, xt(Y[0], Y[1])];
      });
    }
  }
  function xt(m, T) {
    return T ? Number(T) : St(m) ? 0 : 1;
  }
  function St(m) {
    return en.includes(m.toLowerCase());
  }
  const Zn = {}, nn = (m) => {
    console.error(m);
  }, Xn = (m, ...T) => {
    console.log(`WARN: ${m}`, ...T);
  }, N = (m, T) => {
    Zn[`${m}/${T}`] || (console.log(`Deprecated as of ${m}. ${T}`), Zn[`${m}/${T}`] = !0);
  }, I = new Error();
  function V(m, T, { key: M }) {
    let X = 0;
    const Ee = m[M], _e = {}, $ = {};
    for (let z = 1; z <= T.length; z++)
      $[z + X] = Ee[z], _e[z + X] = !0, X += x(T[z - 1]);
    m[M] = $, m[M]._emit = _e, m[M]._multi = !0;
  }
  function ee(m) {
    if (Array.isArray(m.begin)) {
      if (m.skip || m.excludeBegin || m.returnBegin)
        throw nn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), I;
      if (typeof m.beginScope != "object" || m.beginScope === null)
        throw nn("beginScope must be object"), I;
      V(m, m.begin, { key: "beginScope" }), m.begin = C(m.begin, { joinWith: "" });
    }
  }
  function oe(m) {
    if (Array.isArray(m.end)) {
      if (m.skip || m.excludeEnd || m.returnEnd)
        throw nn("skip, excludeEnd, returnEnd not compatible with endScope: {}"), I;
      if (typeof m.endScope != "object" || m.endScope === null)
        throw nn("endScope must be object"), I;
      V(m, m.end, { key: "endScope" }), m.end = C(m.end, { joinWith: "" });
    }
  }
  function Le(m) {
    m.scope && typeof m.scope == "object" && m.scope !== null && (m.beginScope = m.scope, delete m.scope);
  }
  function tn(m) {
    Le(m), typeof m.beginScope == "string" && (m.beginScope = { _wrap: m.beginScope }), typeof m.endScope == "string" && (m.endScope = { _wrap: m.endScope }), ee(m), oe(m);
  }
  function Ge(m) {
    function T($, z) {
      return new RegExp(
        u($),
        "m" + (m.case_insensitive ? "i" : "") + (m.unicodeRegex ? "u" : "") + (z ? "g" : "")
      );
    }
    class M {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(z, Y) {
        Y.position = this.position++, this.matchIndexes[this.matchAt] = Y, this.regexes.push([Y, z]), this.matchAt += x(z) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const z = this.regexes.map((Y) => Y[1]);
        this.matcherRe = T(C(z, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(z) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Y = this.matcherRe.exec(z);
        if (!Y)
          return null;
        const xe = Y.findIndex((Ln, Nt) => Nt > 0 && Ln !== void 0), ye = this.matchIndexes[xe];
        return Y.splice(0, xe), Object.assign(Y, ye);
      }
    }
    class X {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(z) {
        if (this.multiRegexes[z]) return this.multiRegexes[z];
        const Y = new M();
        return this.rules.slice(z).forEach(([xe, ye]) => Y.addRule(xe, ye)), Y.compile(), this.multiRegexes[z] = Y, Y;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(z, Y) {
        this.rules.push([z, Y]), Y.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(z) {
        const Y = this.getMatcher(this.regexIndex);
        Y.lastIndex = this.lastIndex;
        let xe = Y.exec(z);
        if (this.resumingScanAtSamePosition() && !(xe && xe.index === this.lastIndex)) {
          const ye = this.getMatcher(0);
          ye.lastIndex = this.lastIndex + 1, xe = ye.exec(z);
        }
        return xe && (this.regexIndex += xe.position + 1, this.regexIndex === this.count && this.considerAll()), xe;
      }
    }
    function Ee($) {
      const z = new X();
      return $.contains.forEach((Y) => z.addRule(Y.begin, { rule: Y, type: "begin" })), $.terminatorEnd && z.addRule($.terminatorEnd, { type: "end" }), $.illegal && z.addRule($.illegal, { type: "illegal" }), z;
    }
    function _e($, z) {
      const Y = (
        /** @type CompiledMode */
        $
      );
      if ($.isCompiled) return Y;
      [
        In,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        _n,
        tn,
        je
      ].forEach((ye) => ye($, z)), m.compilerExtensions.forEach((ye) => ye($, z)), $.__beforeBegin = null, [
        Rn,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Mn,
        // default to 1 relevance if not specified
        ae
      ].forEach((ye) => ye($, z)), $.isCompiled = !0;
      let xe = null;
      return typeof $.keywords == "object" && $.keywords.$pattern && ($.keywords = Object.assign({}, $.keywords), xe = $.keywords.$pattern, delete $.keywords.$pattern), xe = xe || /\w+/, $.keywords && ($.keywords = Dn($.keywords, m.case_insensitive)), Y.keywordPatternRe = T(xe, !0), z && ($.begin || ($.begin = /\B|\b/), Y.beginRe = T(Y.begin), !$.end && !$.endsWithParent && ($.end = /\B|\b/), $.end && (Y.endRe = T(Y.end)), Y.terminatorEnd = u(Y.end) || "", $.endsWithParent && z.terminatorEnd && (Y.terminatorEnd += ($.end ? "|" : "") + z.terminatorEnd)), $.illegal && (Y.illegalRe = T(
        /** @type {RegExp | string} */
        $.illegal
      )), $.contains || ($.contains = []), $.contains = [].concat(...$.contains.map(function(ye) {
        return fn(ye === "self" ? $ : ye);
      })), $.contains.forEach(function(ye) {
        _e(
          /** @type Mode */
          ye,
          Y
        );
      }), $.starts && _e($.starts, z), Y.matcher = Ee(Y), Y;
    }
    if (m.compilerExtensions || (m.compilerExtensions = []), m.contains && m.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return m.classNameAliases = r(m.classNameAliases || {}), _e(
      /** @type Mode */
      m
    );
  }
  function sn(m) {
    return m ? m.endsWithParent || sn(m.starts) : !1;
  }
  function fn(m) {
    return m.variants && !m.cachedVariants && (m.cachedVariants = m.variants.map(function(T) {
      return r(m, { variants: null }, T);
    })), m.cachedVariants ? m.cachedVariants : sn(m) ? r(m, { starts: m.starts ? r(m.starts) : null }) : Object.isFrozen(m) ? r(m) : m;
  }
  var Ce = "11.11.1";
  class ln extends Error {
    constructor(T, M) {
      super(T), this.name = "HTMLInjectionError", this.html = M;
    }
  }
  const Pe = t, vr = r, Cr = Symbol("nomatch"), uo = 7, Or = function(m) {
    const T = /* @__PURE__ */ Object.create(null), M = /* @__PURE__ */ Object.create(null), X = [];
    let Ee = !0;
    const _e = "Could not find the language '{}', did you forget to load/include a language module?", $ = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let z = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: d
    };
    function Y(O) {
      return z.noHighlightRe.test(O);
    }
    function xe(O) {
      let q = O.className + " ";
      q += O.parentNode ? O.parentNode.className : "";
      const te = z.languageDetectRe.exec(q);
      if (te) {
        const ge = cn(te[1]);
        return ge || (Xn(_e.replace("{}", te[1])), Xn("Falling back to no-highlight mode for this block.", O)), ge ? te[1] : "no-highlight";
      }
      return q.split(/\s+/).find((ge) => Y(ge) || cn(ge));
    }
    function ye(O, q, te) {
      let ge = "", we = "";
      typeof q == "object" ? (ge = O, te = q.ignoreIllegals, we = q.language) : (N("10.7.0", "highlight(lang, code, ...args) has been deprecated."), N("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), we = O, ge = q), te === void 0 && (te = !0);
      const Ke = {
        code: ge,
        language: we
      };
      Jn("before:highlight", Ke);
      const un = Ke.result ? Ke.result : Ln(Ke.language, Ke.code, te);
      return un.code = Ke.code, Jn("after:highlight", un), un;
    }
    function Ln(O, q, te, ge) {
      const we = /* @__PURE__ */ Object.create(null);
      function Ke(D, G) {
        return D.keywords[G];
      }
      function un() {
        if (!Q.keywords) {
          Se.addText(he);
          return;
        }
        let D = 0;
        Q.keywordPatternRe.lastIndex = 0;
        let G = Q.keywordPatternRe.exec(he), j = "";
        for (; G; ) {
          j += he.substring(D, G.index);
          const se = Ve.case_insensitive ? G[0].toLowerCase() : G[0], Ne = Ke(Q, se);
          if (Ne) {
            const [rn, vo] = Ne;
            if (Se.addText(j), j = "", we[se] = (we[se] || 0) + 1, we[se] <= uo && (nt += vo), rn.startsWith("_"))
              j += G[0];
            else {
              const Co = Ve.classNameAliases[rn] || rn;
              We(G[0], Co);
            }
          } else
            j += G[0];
          D = Q.keywordPatternRe.lastIndex, G = Q.keywordPatternRe.exec(he);
        }
        j += he.substring(D), Se.addText(j);
      }
      function jn() {
        if (he === "") return;
        let D = null;
        if (typeof Q.subLanguage == "string") {
          if (!T[Q.subLanguage]) {
            Se.addText(he);
            return;
          }
          D = Ln(Q.subLanguage, he, !0, Fr[Q.subLanguage]), Fr[Q.subLanguage] = /** @type {CompiledMode} */
          D._top;
        } else
          D = Tt(he, Q.subLanguage.length ? Q.subLanguage : null);
        Q.relevance > 0 && (nt += D.relevance), Se.__addSublanguage(D._emitter, D.language);
      }
      function Be() {
        Q.subLanguage != null ? jn() : un(), he = "";
      }
      function We(D, G) {
        D !== "" && (Se.startScope(G), Se.addText(D), Se.endScope());
      }
      function Dr(D, G) {
        let j = 1;
        const se = G.length - 1;
        for (; j <= se; ) {
          if (!D._emit[j]) {
            j++;
            continue;
          }
          const Ne = Ve.classNameAliases[D[j]] || D[j], rn = G[j];
          Ne ? We(rn, Ne) : (he = rn, un(), he = ""), j++;
        }
      }
      function Lr(D, G) {
        return D.scope && typeof D.scope == "string" && Se.openNode(Ve.classNameAliases[D.scope] || D.scope), D.beginScope && (D.beginScope._wrap ? (We(he, Ve.classNameAliases[D.beginScope._wrap] || D.beginScope._wrap), he = "") : D.beginScope._multi && (Dr(D.beginScope, G), he = "")), Q = Object.create(D, { parent: { value: Q } }), Q;
      }
      function Pr(D, G, j) {
        let se = S(D.endRe, j);
        if (se) {
          if (D["on:end"]) {
            const Ne = new n(D);
            D["on:end"](G, Ne), Ne.isMatchIgnored && (se = !1);
          }
          if (se) {
            for (; D.endsParent && D.parent; )
              D = D.parent;
            return D;
          }
        }
        if (D.endsWithParent)
          return Pr(D.parent, G, j);
      }
      function xo(D) {
        return Q.matcher.regexIndex === 0 ? (he += D[0], 1) : (Ot = !0, 0);
      }
      function So(D) {
        const G = D[0], j = D.rule, se = new n(j), Ne = [j.__beforeBegin, j["on:begin"]];
        for (const rn of Ne)
          if (rn && (rn(D, se), se.isMatchIgnored))
            return xo(G);
        return j.skip ? he += G : (j.excludeBegin && (he += G), Be(), !j.returnBegin && !j.excludeBegin && (he = G)), Lr(j, D), j.returnBegin ? 0 : G.length;
      }
      function No(D) {
        const G = D[0], j = q.substring(D.index), se = Pr(Q, D, j);
        if (!se)
          return Cr;
        const Ne = Q;
        Q.endScope && Q.endScope._wrap ? (Be(), We(G, Q.endScope._wrap)) : Q.endScope && Q.endScope._multi ? (Be(), Dr(Q.endScope, D)) : Ne.skip ? he += G : (Ne.returnEnd || Ne.excludeEnd || (he += G), Be(), Ne.excludeEnd && (he = G));
        do
          Q.scope && Se.closeNode(), !Q.skip && !Q.subLanguage && (nt += Q.relevance), Q = Q.parent;
        while (Q !== se.parent);
        return se.starts && Lr(se.starts, D), Ne.returnEnd ? 0 : G.length;
      }
      function To() {
        const D = [];
        for (let G = Q; G !== Ve; G = G.parent)
          G.scope && D.unshift(G.scope);
        D.forEach((G) => Se.openNode(G));
      }
      let et = {};
      function Br(D, G) {
        const j = G && G[0];
        if (he += D, j == null)
          return Be(), 0;
        if (et.type === "begin" && G.type === "end" && et.index === G.index && j === "") {
          if (he += q.slice(G.index, G.index + 1), !Ee) {
            const se = new Error(`0 width match regex (${O})`);
            throw se.languageName = O, se.badRule = et.rule, se;
          }
          return 1;
        }
        if (et = G, G.type === "begin")
          return So(G);
        if (G.type === "illegal" && !te) {
          const se = new Error('Illegal lexeme "' + j + '" for mode "' + (Q.scope || "<unnamed>") + '"');
          throw se.mode = Q, se;
        } else if (G.type === "end") {
          const se = No(G);
          if (se !== Cr)
            return se;
        }
        if (G.type === "illegal" && j === "")
          return he += `
`, 1;
        if (Ct > 1e5 && Ct > G.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return he += j, j.length;
      }
      const Ve = cn(O);
      if (!Ve)
        throw nn(_e.replace("{}", O)), new Error('Unknown language: "' + O + '"');
      const Ao = Ge(Ve);
      let vt = "", Q = ge || Ao;
      const Fr = {}, Se = new z.__emitter(z);
      To();
      let he = "", nt = 0, gn = 0, Ct = 0, Ot = !1;
      try {
        if (Ve.__emitTokens)
          Ve.__emitTokens(q, Se);
        else {
          for (Q.matcher.considerAll(); ; ) {
            Ct++, Ot ? Ot = !1 : Q.matcher.considerAll(), Q.matcher.lastIndex = gn;
            const D = Q.matcher.exec(q);
            if (!D) break;
            const G = q.substring(gn, D.index), j = Br(G, D);
            gn = D.index + j;
          }
          Br(q.substring(gn));
        }
        return Se.finalize(), vt = Se.toHTML(), {
          language: O,
          value: vt,
          relevance: nt,
          illegal: !1,
          _emitter: Se,
          _top: Q
        };
      } catch (D) {
        if (D.message && D.message.includes("Illegal"))
          return {
            language: O,
            value: Pe(q),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: D.message,
              index: gn,
              context: q.slice(gn - 100, gn + 100),
              mode: D.mode,
              resultSoFar: vt
            },
            _emitter: Se
          };
        if (Ee)
          return {
            language: O,
            value: Pe(q),
            illegal: !1,
            relevance: 0,
            errorRaised: D,
            _emitter: Se,
            _top: Q
          };
        throw D;
      }
    }
    function Nt(O) {
      const q = {
        value: Pe(O),
        illegal: !1,
        relevance: 0,
        _top: $,
        _emitter: new z.__emitter(z)
      };
      return q._emitter.addText(O), q;
    }
    function Tt(O, q) {
      q = q || z.languages || Object.keys(T);
      const te = Nt(O), ge = q.filter(cn).filter(Mr).map(
        (Be) => Ln(Be, O, !1)
      );
      ge.unshift(te);
      const we = ge.sort((Be, We) => {
        if (Be.relevance !== We.relevance) return We.relevance - Be.relevance;
        if (Be.language && We.language) {
          if (cn(Be.language).supersetOf === We.language)
            return 1;
          if (cn(We.language).supersetOf === Be.language)
            return -1;
        }
        return 0;
      }), [Ke, un] = we, jn = Ke;
      return jn.secondBest = un, jn;
    }
    function po(O, q, te) {
      const ge = q && M[q] || te;
      O.classList.add("hljs"), O.classList.add(`language-${ge}`);
    }
    function At(O) {
      let q = null;
      const te = xe(O);
      if (Y(te)) return;
      if (Jn(
        "before:highlightElement",
        { el: O, language: te }
      ), O.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", O);
        return;
      }
      if (O.children.length > 0 && (z.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(O)), z.throwUnescapedHTML))
        throw new ln(
          "One of your code blocks includes unescaped HTML.",
          O.innerHTML
        );
      q = O;
      const ge = q.textContent, we = te ? ye(ge, { language: te, ignoreIllegals: !0 }) : Tt(ge);
      O.innerHTML = we.value, O.dataset.highlighted = "yes", po(O, te, we.language), O.result = {
        language: we.language,
        // TODO: remove with version 11.0
        re: we.relevance,
        relevance: we.relevance
      }, we.secondBest && (O.secondBest = {
        language: we.secondBest.language,
        relevance: we.secondBest.relevance
      }), Jn("after:highlightElement", { el: O, result: we, text: ge });
    }
    function fo(O) {
      z = vr(z, O);
    }
    const go = () => {
      Qn(), N("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function ho() {
      Qn(), N("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Ir = !1;
    function Qn() {
      function O() {
        Qn();
      }
      if (document.readyState === "loading") {
        Ir || window.addEventListener("DOMContentLoaded", O, !1), Ir = !0;
        return;
      }
      document.querySelectorAll(z.cssSelector).forEach(At);
    }
    function mo(O, q) {
      let te = null;
      try {
        te = q(m);
      } catch (ge) {
        if (nn("Language definition for '{}' could not be registered.".replace("{}", O)), Ee)
          nn(ge);
        else
          throw ge;
        te = $;
      }
      te.name || (te.name = O), T[O] = te, te.rawDefinition = q.bind(null, m), te.aliases && Rr(te.aliases, { languageName: O });
    }
    function bo(O) {
      delete T[O];
      for (const q of Object.keys(M))
        M[q] === O && delete M[q];
    }
    function Eo() {
      return Object.keys(T);
    }
    function cn(O) {
      return O = (O || "").toLowerCase(), T[O] || T[M[O]];
    }
    function Rr(O, { languageName: q }) {
      typeof O == "string" && (O = [O]), O.forEach((te) => {
        M[te.toLowerCase()] = q;
      });
    }
    function Mr(O) {
      const q = cn(O);
      return q && !q.disableAutodetect;
    }
    function _o(O) {
      O["before:highlightBlock"] && !O["before:highlightElement"] && (O["before:highlightElement"] = (q) => {
        O["before:highlightBlock"](
          Object.assign({ block: q.el }, q)
        );
      }), O["after:highlightBlock"] && !O["after:highlightElement"] && (O["after:highlightElement"] = (q) => {
        O["after:highlightBlock"](
          Object.assign({ block: q.el }, q)
        );
      });
    }
    function yo(O) {
      _o(O), X.push(O);
    }
    function ko(O) {
      const q = X.indexOf(O);
      q !== -1 && X.splice(q, 1);
    }
    function Jn(O, q) {
      const te = O;
      X.forEach(function(ge) {
        ge[te] && ge[te](q);
      });
    }
    function wo(O) {
      return N("10.7.0", "highlightBlock will be removed entirely in v12.0"), N("10.7.0", "Please use highlightElement now."), At(O);
    }
    Object.assign(m, {
      highlight: ye,
      highlightAuto: Tt,
      highlightAll: Qn,
      highlightElement: At,
      // TODO: Remove with v12 API
      highlightBlock: wo,
      configure: fo,
      initHighlighting: go,
      initHighlightingOnLoad: ho,
      registerLanguage: mo,
      unregisterLanguage: bo,
      listLanguages: Eo,
      getLanguage: cn,
      registerAliases: Rr,
      autoDetection: Mr,
      inherit: vr,
      addPlugin: yo,
      removePlugin: ko
    }), m.debugMode = function() {
      Ee = !1;
    }, m.safeMode = function() {
      Ee = !0;
    }, m.versionString = Ce, m.regex = {
      concat: _,
      lookahead: f,
      either: E,
      optional: g,
      anyNumberOfTimes: p
    };
    for (const O in De)
      typeof De[O] == "object" && e(De[O]);
    return Object.assign(m, De), m;
  }, kn = Or({});
  return kn.newInstance = () => Or({}), Xt = kn, kn.HighlightJS = kn, kn.default = kn, Xt;
}
var Lg = /* @__PURE__ */ Dg();
const Pg = /* @__PURE__ */ lr(Lg), Fi = {}, Bg = "hljs-";
function Fg(e) {
  const n = Pg.newInstance();
  return e && o(e), {
    highlight: t,
    highlightAuto: r,
    listLanguages: i,
    register: o,
    registerAlias: a,
    registered: s
  };
  function t(c, l, d) {
    const u = d || Fi, f = typeof u.prefix == "string" ? u.prefix : Bg;
    if (!n.getLanguage(c))
      throw new Error("Unknown language: `" + c + "` is not registered");
    n.configure({ __emitter: zg, classPrefix: f });
    const p = (
      /** @type {HighlightResult & {_emitter: HastEmitter}} */
      n.highlight(l, { ignoreIllegals: !0, language: c })
    );
    if (p.errorRaised)
      throw new Error("Could not highlight with `Highlight.js`", {
        cause: p.errorRaised
      });
    const g = p._emitter.root, _ = (
      /** @type {RootData} */
      g.data
    );
    return _.language = p.language, _.relevance = p.relevance, g;
  }
  function r(c, l) {
    const u = (l || Fi).subset || i();
    let f = -1, p = 0, g;
    for (; ++f < u.length; ) {
      const _ = u[f];
      if (!n.getLanguage(_)) continue;
      const k = t(_, c, l);
      k.data && k.data.relevance !== void 0 && k.data.relevance > p && (p = k.data.relevance, g = k);
    }
    return g || {
      type: "root",
      children: [],
      data: { language: void 0, relevance: p }
    };
  }
  function i() {
    return n.listLanguages();
  }
  function o(c, l) {
    if (typeof c == "string")
      n.registerLanguage(c, l);
    else {
      let d;
      for (d in c)
        Object.hasOwn(c, d) && n.registerLanguage(d, c[d]);
    }
  }
  function a(c, l) {
    if (typeof c == "string")
      n.registerAliases(
        // Note: copy needed because hljs doesn’t accept readonly arrays yet.
        typeof l == "string" ? l : [...l],
        { languageName: c }
      );
    else {
      let d;
      for (d in c)
        if (Object.hasOwn(c, d)) {
          const u = c[d];
          n.registerAliases(
            // Note: copy needed because hljs doesn’t accept readonly arrays yet.
            typeof u == "string" ? u : [...u],
            { languageName: d }
          );
        }
    }
  }
  function s(c) {
    return !!n.getLanguage(c);
  }
}
class zg {
  /**
   * @param {Readonly<HljsOptions>} options
   *   Configuration.
   * @returns
   *   Instance.
   */
  constructor(n) {
    this.options = n, this.root = {
      type: "root",
      children: [],
      data: { language: void 0, relevance: 0 }
    }, this.stack = [this.root];
  }
  /**
   * @param {string} value
   *   Text to add.
   * @returns {undefined}
   *   Nothing.
   *
   */
  addText(n) {
    if (n === "") return;
    const t = this.stack[this.stack.length - 1], r = t.children[t.children.length - 1];
    r && r.type === "text" ? r.value += n : t.children.push({ type: "text", value: n });
  }
  /**
   *
   * @param {unknown} rawName
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  startScope(n) {
    this.openNode(String(n));
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  endScope() {
    this.closeNode();
  }
  /**
   * @param {HastEmitter} other
   *   Other emitter.
   * @param {string} name
   *   Name of the sublanguage.
   * @returns {undefined}
   *   Nothing.
   */
  __addSublanguage(n, t) {
    const r = this.stack[this.stack.length - 1], i = (
      /** @type {Array<ElementContent>} */
      n.root.children
    );
    t ? r.children.push({
      type: "element",
      tagName: "span",
      properties: { className: [t] },
      children: i
    }) : r.children.push(...i);
  }
  /**
   * @param {string} name
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  openNode(n) {
    const t = this, r = n.split(".").map(function(a, s) {
      return s ? a + "_".repeat(s) : t.options.classPrefix + a;
    }), i = this.stack[this.stack.length - 1], o = {
      type: "element",
      tagName: "span",
      properties: { className: r },
      children: []
    };
    i.children.push(o), this.stack.push(o);
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  closeNode() {
    this.stack.pop();
  }
  /**
   * @returns {undefined}
   *   Nothing.
   */
  finalize() {
  }
  /**
   * @returns {string}
   *   Nothing.
   */
  toHTML() {
    return "";
  }
}
const Ug = {};
function $g(e) {
  const n = e || Ug, t = n.aliases, r = n.detect || !1, i = n.languages || Mg, o = n.plainText, a = n.prefix, s = n.subset;
  let c = "hljs";
  const l = Fg(i);
  if (t && l.registerAlias(t), a) {
    const d = a.indexOf("-");
    c = d === -1 ? a : a.slice(0, d);
  }
  return function(d, u) {
    wt(d, "element", function(f, p, g) {
      if (f.tagName !== "code" || !g || g.type !== "element" || g.tagName !== "pre")
        return;
      const _ = Hg(f);
      if (_ === !1 || !_ && !r || _ && o && o.includes(_))
        return;
      Array.isArray(f.properties.className) || (f.properties.className = []), f.properties.className.includes(c) || f.properties.className.unshift(c);
      const k = of(f, { whitespace: "pre" });
      let E;
      try {
        E = _ ? l.highlight(_, k, { prefix: a }) : l.highlightAuto(k, { prefix: a, subset: s });
      } catch (x) {
        const S = (
          /** @type {Error} */
          x
        );
        if (_ && /Unknown language/.test(S.message)) {
          u.message(
            "Cannot highlight as `" + _ + "`, it’s not registered",
            {
              ancestors: [g, f],
              cause: S,
              place: f.position,
              ruleId: "missing-language",
              source: "rehype-highlight"
            }
          );
          return;
        }
        throw S;
      }
      !_ && E.data && E.data.language && f.properties.className.push("language-" + E.data.language), E.children.length > 0 && (f.children = /** @type {Array<ElementContent>} */
      E.children);
    });
  };
}
function Hg(e) {
  const n = e.properties.className;
  let t = -1;
  if (!Array.isArray(n))
    return;
  let r;
  for (; ++t < n.length; ) {
    const i = String(n[t]);
    if (i === "no-highlight" || i === "nohighlight")
      return !1;
    !r && i.slice(0, 5) === "lang-" && (r = i.slice(5)), !r && i.slice(0, 9) === "language-" && (r = i.slice(9));
  }
  return r;
}
const Kg = ({ content: e }) => /* @__PURE__ */ zn.jsxs("div", { className: "markdown-container", children: [
  " ",
  /* @__PURE__ */ zn.jsx(
    $u,
    {
      children: e,
      remarkPlugins: [Jp],
      rehypePlugins: [$g]
    }
  )
] });
export {
  Kg as default
};
//# sourceMappingURL=index.mjs.map
