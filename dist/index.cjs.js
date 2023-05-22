"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  MediaError: () => import_mux_video.MediaError,
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_react3 = __toESM(require("react"));

// ../groundbreak-player/node_modules/media-chrome/dist/constants.js
var MediaUIEvents = {
  MEDIA_PLAY_REQUEST: "mediaplayrequest",
  MEDIA_PAUSE_REQUEST: "mediapauserequest",
  MEDIA_MUTE_REQUEST: "mediamuterequest",
  MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
  MEDIA_VOLUME_REQUEST: "mediavolumerequest",
  MEDIA_SEEK_REQUEST: "mediaseekrequest",
  MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
  MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
  MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
  MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
  MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
  MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
  MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
  MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
  MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
  MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
  MEDIA_SHOW_CAPTIONS_REQUEST: "mediashowcaptionsrequest",
  MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
  MEDIA_DISABLE_CAPTIONS_REQUEST: "mediadisablecaptionsrequest",
  MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
  MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
  MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
  REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
  UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver"
};
var MediaStateChangeEvents = {
  MEDIA_AIRPLAY_UNAVAILABLE: "mediaairplayunavailablechange",
  MEDIA_PIP_UNAVAILABLE: "mediapipunavailablechange",
  MEDIA_PAUSED: "mediapausedchange",
  MEDIA_HAS_PLAYED: "mediahasplayedchange",
  MEDIA_MUTED: "mediamutedchange",
  MEDIA_VOLUME_LEVEL: "mediavolumelevelchange",
  MEDIA_VOLUME: "mediavolumechange",
  MEDIA_VOLUME_UNAVAILABLE: "mediavolumeunavailablechange",
  MEDIA_IS_PIP: "mediaispipchange",
  MEDIA_IS_CASTING: "mediaiscastingchange",
  MEDIA_CAPTIONS_LIST: "mediacaptionslistchange",
  MEDIA_SUBTITLES_LIST: "mediasubtitleslistchange",
  MEDIA_CAPTIONS_SHOWING: "mediacaptionsshowingchange",
  MEDIA_SUBTITLES_SHOWING: "mediasubtitlesshowingchange",
  MEDIA_IS_FULLSCREEN: "mediaisfullscreenchange",
  MEDIA_PLAYBACK_RATE: "mediaplaybackratechange",
  MEDIA_CURRENT_TIME: "mediacurrenttimechange",
  MEDIA_DURATION: "mediadurationchange",
  MEDIA_SEEKABLE: "mediaseekablechange",
  MEDIA_PREVIEW_IMAGE: "mediapreviewimagechange",
  MEDIA_PREVIEW_COORDS: "mediapreviewcoordschange",
  MEDIA_LOADING: "medialoadingchange",
  USER_INACTIVE: "userinactivechange"
};
var MediaStateReceiverAttributes = {
  MEDIA_CHROME_ATTRIBUTES: "media-chrome-attributes",
  MEDIA_CONTROLLER: "media-controller"
};
var MediaUIAttributes = {
  MEDIA_AIRPLAY_UNAVAILABLE: "media-airplay-unavailable",
  MEDIA_FULLSCREEN_UNAVAILABLE: "media-fullscreen-unavailable",
  MEDIA_PIP_UNAVAILABLE: "media-pip-unavailable",
  MEDIA_CAST_UNAVAILABLE: "media-cast-unavailable",
  MEDIA_PAUSED: "media-paused",
  MEDIA_HAS_PLAYED: "media-has-played",
  MEDIA_MUTED: "media-muted",
  MEDIA_VOLUME_LEVEL: "media-volume-level",
  MEDIA_VOLUME: "media-volume",
  MEDIA_VOLUME_UNAVAILABLE: "media-volume-unavailable",
  MEDIA_IS_PIP: "media-is-pip",
  MEDIA_IS_CASTING: "media-is-casting",
  MEDIA_CAPTIONS_LIST: "media-captions-list",
  MEDIA_SUBTITLES_LIST: "media-subtitles-list",
  MEDIA_CAPTIONS_SHOWING: "media-captions-showing",
  MEDIA_SUBTITLES_SHOWING: "media-subtitles-showing",
  MEDIA_IS_FULLSCREEN: "media-is-fullscreen",
  MEDIA_PLAYBACK_RATE: "media-playback-rate",
  MEDIA_CURRENT_TIME: "media-current-time",
  MEDIA_DURATION: "media-duration",
  MEDIA_SEEKABLE: "media-seekable",
  MEDIA_PREVIEW_TIME: "media-preview-time",
  MEDIA_PREVIEW_IMAGE: "media-preview-image",
  MEDIA_PREVIEW_COORDS: "media-preview-coords",
  MEDIA_LOADING: "media-loading",
  MEDIA_BUFFERED: "media-buffered",
  MEDIA_STREAM_TYPE: "media-stream-type",
  MEDIA_TARGET_LIVE_WINDOW: "media-target-live-window",
  MEDIA_TIME_IS_LIVE: "media-time-is-live"
};
var StateChangeEventToAttributeMap = Object.entries(
  MediaStateChangeEvents
).reduce(
  (mapObj, [key, eventType]) => {
    const attrName = MediaUIAttributes[key];
    if (attrName) {
      mapObj[eventType] = attrName;
    }
    return mapObj;
  },
  { userinactivechange: "user-inactive" }
);
var AttributeToStateChangeEventMap = Object.entries(
  MediaUIAttributes
).reduce(
  (mapObj, [key, attrName]) => {
    const evtType = MediaStateChangeEvents[key];
    if (evtType) {
      mapObj[attrName] = evtType;
    }
    return mapObj;
  },
  { "user-inactive": "userinactivechange" }
);
var TextTrackKinds = {
  SUBTITLES: "subtitles",
  CAPTIONS: "captions",
  DESCRIPTIONS: "descriptions",
  CHAPTERS: "chapters",
  METADATA: "metadata"
};
var TextTrackModes = {
  DISABLED: "disabled",
  HIDDEN: "hidden",
  SHOWING: "showing"
};
var PointerTypes = {
  MOUSE: "mouse",
  PEN: "pen",
  TOUCH: "touch"
};
var AvailabilityStates = {
  UNAVAILABLE: "unavailable",
  UNSUPPORTED: "unsupported"
};
var StreamTypes = {
  LIVE: "live",
  ON_DEMAND: "on-demand",
  UNKNOWN: "unknown"
};

// ../groundbreak-player/node_modules/media-chrome/dist/labels/labels.js
var nouns = {
  AUDIO_PLAYER: () => "audio player",
  VIDEO_PLAYER: () => "video player",
  VOLUME: () => "volume",
  SEEK: () => "seek",
  CLOSED_CAPTIONS: () => "closed captions",
  PLAYBACK_RATE: ({ playbackRate = 1 } = {}) => `current playback rate ${playbackRate}`,
  PLAYBACK_TIME: () => `playback time`,
  MEDIA_LOADING: () => `media loading`
};
var verbs = {
  PLAY: () => "play",
  PAUSE: () => "pause",
  MUTE: () => "mute",
  UNMUTE: () => "unmute",
  AIRPLAY: () => "air play",
  ENTER_CAST: () => "start casting",
  EXIT_CAST: () => "stop casting",
  ENTER_FULLSCREEN: () => "enter fullscreen mode",
  EXIT_FULLSCREEN: () => "exit fullscreen mode",
  ENTER_PIP: () => "enter picture in picture mode",
  EXIT_PIP: () => "exit picture in picture mode",
  SEEK_FORWARD_N_SECS: ({ seekOffset = 30 } = {}) => `seek forward ${seekOffset} seconds`,
  SEEK_BACK_N_SECS: ({ seekOffset = 30 } = {}) => `seek back ${seekOffset} seconds`,
  SEEK_LIVE: () => "seek to live",
  PLAYING_LIVE: () => "playing live"
};
var labels_default = {
  ...nouns,
  ...verbs
};

// ../groundbreak-player/node_modules/media-chrome/dist/utils/utils.js
function constToCamel(word, upperFirst = false) {
  return word.split("_").map(function(x, i) {
    return (i || upperFirst ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
  }).join("");
}
function camelCase(name) {
  return name.replace(/[-_]([a-z])/g, ($0, $1) => $1.toUpperCase());
}
function isValidNumber(x) {
  return typeof x === "number" && !Number.isNaN(x) && Number.isFinite(x);
}
function isNumericString(str) {
  if (typeof str != "string")
    return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ../groundbreak-player/node_modules/media-chrome/dist/utils/time.js
var UnitLabels = [
  {
    singular: "hour",
    plural: "hours"
  },
  {
    singular: "minute",
    plural: "minutes"
  },
  {
    singular: "second",
    plural: "seconds"
  }
];
var toTimeUnitPhrase = (timeUnitValue, unitIndex) => {
  const unitLabel = timeUnitValue === 1 ? UnitLabels[unitIndex].singular : UnitLabels[unitIndex].plural;
  return `${timeUnitValue} ${unitLabel}`;
};
var formatAsTimePhrase = (seconds) => {
  if (!isValidNumber(seconds))
    return "";
  const positiveSeconds = Math.abs(seconds);
  const negative = positiveSeconds !== seconds;
  const secondsDateTime = new Date(0, 0, 0, 0, 0, positiveSeconds, 0);
  const timeParts = [
    secondsDateTime.getHours(),
    secondsDateTime.getMinutes(),
    secondsDateTime.getSeconds()
  ];
  const timeString = timeParts.map(
    (timeUnitValue, index) => timeUnitValue && toTimeUnitPhrase(timeUnitValue, index)
  ).filter((x) => x).join(", ");
  const negativeSuffix = negative ? " remaining" : "";
  return `${timeString}${negativeSuffix}`;
};
function formatTime(seconds, guide) {
  let negative = false;
  if (seconds < 0) {
    negative = true;
    seconds = 0 - seconds;
  }
  seconds = seconds < 0 ? 0 : seconds;
  let s = Math.floor(seconds % 60);
  let m = Math.floor(seconds / 60 % 60);
  let h = Math.floor(seconds / 3600);
  const gm = Math.floor(guide / 60 % 60);
  const gh = Math.floor(guide / 3600);
  if (isNaN(seconds) || seconds === Infinity) {
    h = m = s = "-";
  }
  h = h > 0 || gh > 0 ? h + ":" : "";
  m = ((h || gm >= 10) && m < 10 ? "0" + m : m) + ":";
  s = s < 10 ? "0" + s : s;
  return (negative ? "-" : "") + h + m + s;
}
var emptyTimeRanges = Object.freeze({
  length: 0,
  start(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'start' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  },
  end(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'end' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  }
});
function serializeTimeRanges(timeRanges = emptyTimeRanges) {
  return Array.from(timeRanges).map((_, i) => [
    Number(timeRanges.start(i).toFixed(3)),
    Number(timeRanges.end(i).toFixed(3))
  ].join(":")).join(" ");
}

// ../groundbreak-player/node_modules/media-chrome/dist/utils/element-utils.js
var updateIconText = (svg, value, selector = ".value") => {
  const node = svg.querySelector(selector);
  if (!node)
    return;
  node.textContent = value;
};
var getAllSlotted = (el, name) => {
  const slotSelector = `slot[name="${name}"]`;
  const slot = el.shadowRoot.querySelector(slotSelector);
  if (!slot)
    return [];
  return slot.children;
};
var getSlotted = (el, name) => getAllSlotted(el, name)[0];
var containsComposedNode = (rootNode, childNode) => {
  if (!rootNode || !childNode)
    return false;
  if (rootNode.contains(childNode))
    return true;
  return containsComposedNode(rootNode, childNode.getRootNode().host);
};
var closestComposedNode = (childNode, selector) => {
  if (!childNode)
    return null;
  const closest = childNode.closest(selector);
  if (closest)
    return closest;
  return closestComposedNode(childNode.getRootNode().host, selector);
};
function getOrInsertCSSRule(styleParent, selectorText) {
  var _a;
  let style;
  for (style of styleParent.querySelectorAll("style")) {
    let cssRules;
    try {
      cssRules = (_a = style.sheet) == null ? void 0 : _a.cssRules;
    } catch {
      continue;
    }
    for (let rule of cssRules != null ? cssRules : [])
      if (rule.selectorText === selectorText)
        return rule;
  }
  if (!(style == null ? void 0 : style.sheet)) {
    return {
      style: {
        setProperty: () => {
        },
        removeProperty: () => {
        }
      }
    };
  }
  style.sheet.insertRule(`${selectorText}{}`, style.sheet.cssRules.length);
  return style.sheet.cssRules[style.sheet.cssRules.length - 1];
}

// ../groundbreak-player/node_modules/media-chrome/dist/utils/server-safe-globals.js
var EventTarget = class {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent() {
    return true;
  }
};
var ResizeObserver2 = class {
  observe() {
  }
};
var windowShim = {
  ResizeObserver: ResizeObserver2,
  HTMLElement: class HTMLElement2 extends EventTarget {
  },
  DocumentFragment: class DocumentFragment2 extends EventTarget {
  },
  customElements: {
    get: function() {
    },
    define: function() {
    },
    whenDefined: function() {
    }
  },
  CustomEvent: function CustomEvent2() {
  },
  getComputedStyle: function() {
  }
};
var documentShim = {
  createElement: function() {
    return new windowShim.HTMLElement();
  },
  addEventListener() {
  },
  removeEventListener() {
  }
};
var isServer = typeof window === "undefined" || typeof window.customElements === "undefined";
var Window = isServer ? windowShim : window;
var Document = isServer ? documentShim : window.document;

// ../groundbreak-player/node_modules/media-chrome/dist/media-chrome-button.js
var __defProp2 = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController;
var _clickListener;
var _keyupListener;
var _keydownListener;
var template = Document.createElement("template");
template.innerHTML = `
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
  }

  ${""}
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  ${""}
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;
var MediaChromeButton = class extends Window.HTMLElement {
  constructor(options = {}) {
    super();
    __privateAdd(this, _mediaController, void 0);
    __publicField(this, "preventClick", false);
    __privateAdd(this, _clickListener, (e) => {
      if (!this.preventClick) {
        this.handleClick(e);
      }
    });
    __privateAdd(this, _keyupListener, (e) => {
      const { key } = e;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      if (!this.preventClick) {
        this.handleClick(e);
      }
    });
    __privateAdd(this, _keydownListener, (e) => {
      const { metaKey, altKey, key } = e;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet(this, _keyupListener));
        return;
      }
      this.addEventListener("keyup", __privateGet(this, _keyupListener), { once: true });
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      const buttonHTML = template.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      let slotTemplate13 = options.slotTemplate;
      if (!slotTemplate13) {
        slotTemplate13 = Document.createElement("template");
        slotTemplate13.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      this.nativeEl.appendChild(slotTemplate13.content.cloneNode(true));
      this.shadowRoot.appendChild(buttonHTML);
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
  }
  static get observedAttributes() {
    return ["disabled", MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  enable() {
    this.addEventListener("click", __privateGet(this, _clickListener));
    this.addEventListener("keydown", __privateGet(this, _keydownListener));
    this.setAttribute("tabindex", "0");
  }
  disable() {
    this.removeEventListener("click", __privateGet(this, _clickListener));
    this.removeEventListener("keydown", __privateGet(this, _keydownListener));
    this.removeEventListener("keyup", __privateGet(this, _keyupListener));
    this.removeAttribute("tabindex");
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet(this, _mediaController, null);
      }
      if (newValue) {
        __privateSet(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "button");
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet(this, _mediaController, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet(this, _mediaController)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    this.disable();
    (_b = (_a = __privateGet(this, _mediaController)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet(this, _mediaController, null);
  }
  get keysUsed() {
    return ["Enter", " "];
  }
  handleClick(e) {
  }
};
_mediaController = /* @__PURE__ */ new WeakMap();
_clickListener = /* @__PURE__ */ new WeakMap();
_keyupListener = /* @__PURE__ */ new WeakMap();
_keydownListener = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-chrome-button")) {
  Window.customElements.define("media-chrome-button", MediaChromeButton);
}
var media_chrome_button_default = MediaChromeButton;

// ../groundbreak-player/node_modules/media-chrome/dist/media-airplay-button.js
var airplayIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;
var slotTemplate = Document.createElement("template");
slotTemplate.innerHTML = `
  <slot name="airplay">${airplayIcon}</slot>
`;
var MediaAirplayButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate, ...options });
  }
  connectedCallback() {
    this.setAttribute("aria-label", verbs.AIRPLAY());
    super.connectedCallback();
  }
  handleClick() {
    const evt = new Window.CustomEvent(MediaUIEvents.MEDIA_AIRPLAY_REQUEST, {
      composed: true,
      bubbles: true
    });
    this.dispatchEvent(evt);
  }
};
if (!Window.customElements.get("media-airplay-button")) {
  Window.customElements.define("media-airplay-button", MediaAirplayButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-cast-button.js
var enterIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>`;
var exitIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>`;
var slotTemplate2 = Document.createElement("template");
slotTemplate2.innerHTML = `
  <style>
  :host([${MediaUIAttributes.MEDIA_IS_CASTING}]) slot:not([name=exit]) > *,
  :host([${MediaUIAttributes.MEDIA_IS_CASTING}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  ${""}
  :host(:not([${MediaUIAttributes.MEDIA_IS_CASTING}])) slot:not([name=enter]) > *,
  :host(:not([${MediaUIAttributes.MEDIA_IS_CASTING}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${enterIcon}</slot>
  <slot name="exit">${exitIcon}</slot>
`;
var updateAriaLabel = (el) => {
  const isCast = el.getAttribute(MediaUIAttributes.MEDIA_IS_CASTING) != null;
  const label = isCast ? verbs.EXIT_CAST() : verbs.ENTER_CAST();
  el.setAttribute("aria-label", label);
};
var MediaCastButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_CASTING,
      MediaUIAttributes.MEDIA_CAST_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate2, ...options });
  }
  connectedCallback() {
    updateAriaLabel(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_IS_CASTING) {
      updateAriaLabel(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    const eventName = this.getAttribute(MediaUIAttributes.MEDIA_IS_CASTING) != null ? MediaUIEvents.MEDIA_EXIT_CAST_REQUEST : MediaUIEvents.MEDIA_ENTER_CAST_REQUEST;
    this.dispatchEvent(
      new Window.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!Window.customElements.get("media-cast-button")) {
  Window.customElements.define("media-cast-button", MediaCastButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-gesture-receiver.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController2;
var template2 = Document.createElement("template");
template2.innerHTML = `
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;
var MediaGestureReceiver = class extends Window.HTMLElement {
  constructor(options = {}) {
    super();
    __privateAdd2(this, _mediaController2, void 0);
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const buttonHTML = template2.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      let slotTemplate13 = options.slotTemplate;
      if (!slotTemplate13) {
        slotTemplate13 = Document.createElement("template");
        slotTemplate13.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      this.nativeEl.appendChild(slotTemplate13.content.cloneNode(true));
      shadow.appendChild(buttonHTML);
    }
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER, MediaUIAttributes.MEDIA_PAUSED];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet2(this, _mediaController2)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet2(this, _mediaController2, null);
      }
      if (newValue) {
        __privateSet2(this, _mediaController2, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet2(this, _mediaController2)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c, _d;
    this.setAttribute("tabindex", -1);
    this.setAttribute("aria-hidden", true);
    __privateSet2(this, _mediaController2, getMediaControllerEl(this));
    if (this.getAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER)) {
      (_b = (_a = __privateGet2(this, _mediaController2)) == null ? void 0 : _a.associateElement) == null ? void 0 : _b.call(_a, this);
    }
    (_c = __privateGet2(this, _mediaController2)) == null ? void 0 : _c.addEventListener("pointerdown", this);
    (_d = __privateGet2(this, _mediaController2)) == null ? void 0 : _d.addEventListener("click", this);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    if (this.getAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER)) {
      (_b = (_a = __privateGet2(this, _mediaController2)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    }
    (_c = __privateGet2(this, _mediaController2)) == null ? void 0 : _c.removeEventListener("pointerdown", this);
    (_d = __privateGet2(this, _mediaController2)) == null ? void 0 : _d.removeEventListener("click", this);
    __privateSet2(this, _mediaController2, null);
  }
  handleEvent(event) {
    var _a;
    const composedTarget = (_a = event.composedPath()) == null ? void 0 : _a[0];
    const allowList = ["video", "media-controller"];
    if (!allowList.includes(composedTarget == null ? void 0 : composedTarget.localName))
      return;
    if (event.type === "pointerdown") {
      this._pointerType = event.pointerType;
    } else if (event.type === "click") {
      const { clientX, clientY } = event;
      const { left, top, width, height } = this.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      if (x < 0 || y < 0 || x > width || y > height || width === 0 && height === 0) {
        return;
      }
      const { pointerType = this._pointerType } = event;
      this._pointerType = void 0;
      if (pointerType === PointerTypes.TOUCH) {
        this.handleTap(event);
        return;
      } else if (pointerType === PointerTypes.MOUSE) {
        this.handleMouseClick(event);
        return;
      }
    }
  }
  handleTap(e) {
  }
  handleMouseClick(e) {
    const eventName = this.getAttribute(MediaUIAttributes.MEDIA_PAUSED) != null ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(
      new Window.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
_mediaController2 = /* @__PURE__ */ new WeakMap();
function getMediaControllerEl(controlEl) {
  var _a;
  const mediaControllerId = controlEl.getAttribute(
    MediaStateReceiverAttributes.MEDIA_CONTROLLER
  );
  if (mediaControllerId) {
    return (_a = controlEl.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId);
  }
  return closestComposedNode(controlEl, "media-controller");
}
if (!Window.customElements.get("media-gesture-receiver")) {
  Window.customElements.define("media-gesture-receiver", MediaGestureReceiver);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-container.js
var template3 = Document.createElement("template");
template3.innerHTML = `
  <style>
    ${""}
    :host([media-is-fullscreen])  ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    ${""}
    :host([audio]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    ${""}
    :host(:not([audio])[gestures-disabled]) ::slotted([slot=gestures-chrome]),
    :host(:not([audio])[gestures-disabled]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    ${""}
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    ${""}
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    ${""}
    :host(:not([audio])) .spacer {
      flex-grow: 1;
    }

    ${""}
    :host(:-webkit-full-screen) {
      ${""}
      width: 100% !important;
      height: 100% !important;
    }

    ${""}
    ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    ${""}
    :host([user-inactive]:not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([audio])) ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([${MediaUIAttributes.MEDIA_HAS_PLAYED}]) ::slotted([slot=poster]) {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    ${""}
    <slot part="bottom chrome"></slot>
  </span>
`;
var MEDIA_UI_ATTRIBUTE_NAMES = Object.values(MediaUIAttributes);
var defaultBreakpoints = "sm:384 md:576 lg:768 xl:960";
var resizeCallback = (entries) => {
  var _a;
  for (const entry of entries) {
    const container = entry.target;
    if (!container.isConnected)
      continue;
    const breakpoints = (_a = container.getAttribute("breakpoints")) != null ? _a : defaultBreakpoints;
    const ranges = createBreakpointMap(breakpoints);
    const activeBreakpoints = getBreakpoints(ranges, entry.contentRect);
    Object.keys(ranges).forEach((name) => {
      if (activeBreakpoints.includes(name)) {
        if (!container.hasAttribute(`breakpoint-${name}`)) {
          container.setAttribute(`breakpoint-${name}`, "");
        }
        return;
      }
      container.removeAttribute(`breakpoint-${name}`);
    });
  }
};
function createBreakpointMap(breakpoints) {
  const pairs = breakpoints.split(/\s+/);
  return Object.fromEntries(pairs.map((pair) => pair.split(":")));
}
function getBreakpoints(breakpoints, rect) {
  return Object.keys(breakpoints).filter((name) => {
    return rect.width >= breakpoints[name];
  });
}
var MediaContainer = class extends Window.HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template3.content.cloneNode(true));
    }
    const mutationCallback = (mutationsList) => {
      const media = this.media;
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.removedNodes.forEach((node) => {
            if (node.slot == "media" && mutation.target == this) {
              let previousSibling = mutation.previousSibling && mutation.previousSibling.previousElementSibling;
              if (!previousSibling || !media) {
                this.mediaUnsetCallback(node);
              } else {
                let wasFirst = previousSibling.slot !== "media";
                while ((previousSibling = previousSibling.previousSibling) !== null) {
                  if (previousSibling.slot == "media")
                    wasFirst = false;
                }
                if (wasFirst)
                  this.mediaUnsetCallback(node);
              }
            }
          });
          if (media) {
            mutation.addedNodes.forEach((node) => {
              if (node == media) {
                this.handleMediaUpdated(media).then(
                  (media2) => this.mediaSetCallback(media2)
                );
              }
            });
          }
        }
      }
    };
    const mutationObserver = new MutationObserver(mutationCallback);
    mutationObserver.observe(this, { childList: true, subtree: true });
    const resizeObserver = new ResizeObserver(resizeCallback);
    this.resizeObserver = resizeObserver;
    resizeObserver.observe(this);
    let currentMedia = this.media;
    let chainedSlot = this.querySelector(":scope > slot[slot=media]");
    if (chainedSlot) {
      chainedSlot.addEventListener("slotchange", () => {
        const slotEls = chainedSlot.assignedElements({ flatten: true });
        if (!slotEls.length) {
          this.mediaUnsetCallback(currentMedia);
          return;
        }
        if (this.media) {
          currentMedia = this.media;
          this.handleMediaUpdated(this.media).then(
            (media) => this.mediaSetCallback(media)
          );
        }
      });
    }
  }
  static get observedAttributes() {
    return ["autohide", "gestures-disabled"].concat(MEDIA_UI_ATTRIBUTE_NAMES);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName.toLowerCase() == "autohide") {
      this.autohide = newValue;
    }
  }
  get media() {
    let media = this.querySelector(":scope > [slot=media]");
    if ((media == null ? void 0 : media.nodeName) == "SLOT")
      media = media.assignedElements({ flatten: true })[0];
    return media;
  }
  mediaSetCallback(media) {
    this._mediaClickPlayToggle = () => {
      const eventName = media.paused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
      this.dispatchEvent(
        new Window.CustomEvent(eventName, { composed: true, bubbles: true })
      );
    };
  }
  handleMediaUpdated(media) {
    const resolveMediaPromise = (media2) => {
      return Promise.resolve(media2);
    };
    const rejectMediaPromise = (media2) => {
      console.error(
        '<media-chrome>: Media element set with slot="media" does not appear to be compatible.',
        media2
      );
      return Promise.reject(media2);
    };
    if (!media) {
      return rejectMediaPromise(media);
    }
    const mediaName = media.nodeName.toLowerCase();
    if (mediaName.includes("-")) {
      return Window.customElements.whenDefined(mediaName).then(() => {
        return resolveMediaPromise(media);
      });
    }
    return resolveMediaPromise(media);
  }
  mediaUnsetCallback(node) {
  }
  connectedCallback() {
    const isAudioChrome = this.getAttribute("audio") != null;
    const label = isAudioChrome ? nouns.AUDIO_PLAYER() : nouns.VIDEO_PLAYER();
    this.setAttribute("role", "region");
    this.setAttribute("aria-label", label);
    if (this.media) {
      this.handleMediaUpdated(this.media).then(
        (media) => this.mediaSetCallback(media)
      );
    }
    this.setAttribute("user-inactive", "user-inactive");
    const setInactive = () => {
      if (this.autohide < 0)
        return;
      if (this.hasAttribute("user-inactive"))
        return;
      this.setAttribute("user-inactive", "");
      const evt = new Window.CustomEvent(
        MediaStateChangeEvents.USER_INACTIVE,
        { composed: true, bubbles: true, detail: true }
      );
      this.dispatchEvent(evt);
    };
    const setActive = () => {
      if (!this.hasAttribute("user-inactive"))
        return;
      this.removeAttribute("user-inactive");
      const evt = new Window.CustomEvent(
        MediaStateChangeEvents.USER_INACTIVE,
        { composed: true, bubbles: true, detail: false }
      );
      this.dispatchEvent(evt);
    };
    const scheduleInactive = () => {
      setActive();
      Window.clearTimeout(this._inactiveTimeout);
      if (this.autohide < 0)
        return;
      this._inactiveTimeout = Window.setTimeout(() => {
        setInactive();
      }, this.autohide * 1e3);
    };
    this.addEventListener("keyup", () => {
      scheduleInactive();
    });
    this.addEventListener("pointerup", (e) => {
      if (e.pointerType === "touch") {
        if ([this, this.media].includes(e.target) && !this.hasAttribute("user-inactive")) {
          setInactive();
        } else {
          scheduleInactive();
        }
      } else if (e.composedPath().some((el) => {
        var _a;
        return ["media-play-button", "media-fullscreen-button"].includes((_a = el == null ? void 0 : el.nodeName) == null ? void 0 : _a.toLowerCase());
      })) {
        scheduleInactive();
      }
    });
    this.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse")
        return;
      if (e.target === this)
        return;
      setActive();
      Window.clearTimeout(this._inactiveTimeout);
      if ([this, this.media].includes(e.target)) {
        scheduleInactive();
      }
    });
    this.addEventListener("mouseleave", () => {
      setInactive();
    });
    this.addEventListener("keyup", () => {
      this.setAttribute("media-keyboard-control", "");
    });
    Window.addEventListener("mouseup", () => {
      this.removeAttribute("media-keyboard-control");
    });
  }
  set autohide(seconds) {
    seconds = Number(seconds);
    this._autohide = isNaN(seconds) ? 0 : seconds;
  }
  get autohide() {
    return this._autohide === void 0 ? 2 : this._autohide;
  }
};
if (!Window.customElements.get("media-container-temp")) {
  Window.customElements.define("media-container-temp", MediaContainer);
}
var media_container_default = MediaContainer;

// ../groundbreak-player/node_modules/media-chrome/dist/utils/attribute-token-list.js
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _el;
var _attr;
var _tokens;
var AttributeTokenList = class {
  constructor(el, attr) {
    __privateAdd3(this, _el, void 0);
    __privateAdd3(this, _attr, void 0);
    __privateAdd3(this, _tokens, /* @__PURE__ */ new Set());
    __privateSet3(this, _el, el);
    __privateSet3(this, _attr, attr);
  }
  [Symbol.iterator]() {
    return __privateGet3(this, _tokens).values();
  }
  get length() {
    return __privateGet3(this, _tokens).size;
  }
  get value() {
    var _a;
    return (_a = [...__privateGet3(this, _tokens)].join(" ")) != null ? _a : "";
  }
  set value(val) {
    var _a;
    if (val === this.value)
      return;
    __privateSet3(this, _tokens, /* @__PURE__ */ new Set());
    this.add(...(_a = val == null ? void 0 : val.split(" ")) != null ? _a : []);
  }
  toString() {
    return this.value;
  }
  item(index) {
    return [...__privateGet3(this, _tokens)][index];
  }
  values() {
    return __privateGet3(this, _tokens).values();
  }
  keys() {
    return __privateGet3(this, _tokens).keys();
  }
  forEach(callback) {
    __privateGet3(this, _tokens).forEach(callback);
  }
  add(...tokens) {
    var _a, _b;
    tokens.forEach((t) => __privateGet3(this, _tokens).add(t));
    if (this.value === "" && !((_a = __privateGet3(this, _el)) == null ? void 0 : _a.hasAttribute(`${__privateGet3(this, _attr)}`))) {
      return;
    }
    (_b = __privateGet3(this, _el)) == null ? void 0 : _b.setAttribute(`${__privateGet3(this, _attr)}`, `${this.value}`);
  }
  remove(...tokens) {
    var _a;
    tokens.forEach((t) => __privateGet3(this, _tokens).delete(t));
    (_a = __privateGet3(this, _el)) == null ? void 0 : _a.setAttribute(`${__privateGet3(this, _attr)}`, `${this.value}`);
  }
  contains(token) {
    return __privateGet3(this, _tokens).has(token);
  }
  toggle(token, force) {
    if (typeof force !== "undefined") {
      if (force) {
        this.add(token);
        return true;
      } else {
        this.remove(token);
        return false;
      }
    }
    if (this.contains(token)) {
      this.remove(token);
      return false;
    }
    this.add(token);
    return true;
  }
  replace(oldToken, newToken) {
    this.remove(oldToken);
    this.add(newToken);
  }
};
_el = /* @__PURE__ */ new WeakMap();
_attr = /* @__PURE__ */ new WeakMap();
_tokens = /* @__PURE__ */ new WeakMap();

// ../groundbreak-player/node_modules/media-chrome/dist/utils/captions.js
var splitTextTracksStr = (textTracksStr = "") => textTracksStr.split(/\s+/);
var parseTextTrackStr = (textTrackStr = "") => {
  const [language, encodedLabel] = textTrackStr.split(":");
  const label = encodedLabel ? decodeURIComponent(encodedLabel) : void 0;
  return {
    language,
    label
  };
};
var parseTextTracksStr = (textTracksStr = "", textTrackLikeObj = {}) => {
  return splitTextTracksStr(textTracksStr).map((textTrackStr) => {
    const textTrackObj = parseTextTrackStr(textTrackStr);
    return {
      ...textTrackLikeObj,
      ...textTrackObj
    };
  });
};
var parseTracks = (trackOrTracks) => {
  if (Array.isArray(trackOrTracks)) {
    return trackOrTracks.map((trackObjOrStr) => {
      if (typeof trackObjOrStr === "string") {
        return parseTextTrackStr(trackObjOrStr);
      }
      return trackObjOrStr;
    });
  }
  if (typeof trackOrTracks === "string") {
    return parseTextTracksStr(trackOrTracks);
  }
  return [trackOrTracks];
};
var formatTextTrackObj = ({ label, language } = {}) => {
  if (!label)
    return language;
  return `${language}:${encodeURIComponent(label)}`;
};
var stringifyTextTrackList = (textTracks = []) => {
  return Array.prototype.map.call(textTracks, formatTextTrackObj).join(" ");
};
var isMatchingPropOf = (key, value) => (obj) => obj[key] === value;
var textTrackObjAsPred = (filterObj) => {
  const preds = Object.entries(filterObj).map(([key, value]) => {
    return isMatchingPropOf(key, value);
  });
  return (textTrack) => preds.every((pred) => pred(textTrack));
};
var updateTracksModeTo = (mode, tracks = [], tracksToUpdate = []) => {
  const preds = parseTracks(tracksToUpdate).map(textTrackObjAsPred);
  const isTrackToUpdate = (textTrack) => {
    return preds.some((pred) => pred(textTrack));
  };
  Array.from(tracks).filter(isTrackToUpdate).forEach((textTrack) => {
    textTrack.mode = mode;
  });
};
var getTextTracksList = (media, filterPredOrObj = () => true) => {
  if (!(media == null ? void 0 : media.textTracks))
    return [];
  const filterPred = typeof filterPredOrObj === "function" ? filterPredOrObj : textTrackObjAsPred(filterPredOrObj);
  return Array.from(media.textTracks).filter(filterPred);
};
var isCCOn = (el) => {
  const showingCaptions = !!el.getAttribute(
    MediaUIAttributes.MEDIA_CAPTIONS_SHOWING
  );
  const showingSubtitlesAsCaptions = !el.hasAttribute("no-subtitles-fallback") && !!el.getAttribute(MediaUIAttributes.MEDIA_SUBTITLES_SHOWING);
  return showingCaptions || showingSubtitlesAsCaptions;
};
var toggleSubsCaps = (el, forceOff = false) => {
  var _a, _b, _c, _d;
  const ccIsOn = isCCOn(el);
  if (ccIsOn) {
    const captionsShowingStr = el.getAttribute(
      MediaUIAttributes.MEDIA_CAPTIONS_SHOWING
    );
    if (captionsShowingStr) {
      const evt = new window.CustomEvent(
        MediaUIEvents.MEDIA_DISABLE_CAPTIONS_REQUEST,
        { composed: true, bubbles: true, detail: captionsShowingStr }
      );
      el.dispatchEvent(evt);
    }
    const subtitlesShowingStr = el.getAttribute(
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
    if (subtitlesShowingStr && !el.hasAttribute("no-subtitles-fallback")) {
      const evt = new window.CustomEvent(
        MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST,
        { composed: true, bubbles: true, detail: subtitlesShowingStr }
      );
      el.dispatchEvent(evt);
    }
  } else if (!forceOff) {
    const [ccTrackStr] = (_b = splitTextTracksStr(
      (_a = el.getAttribute(MediaUIAttributes.MEDIA_CAPTIONS_LIST)) != null ? _a : ""
    )) != null ? _b : [];
    if (ccTrackStr) {
      const evt = new window.CustomEvent(
        MediaUIEvents.MEDIA_SHOW_CAPTIONS_REQUEST,
        { composed: true, bubbles: true, detail: ccTrackStr }
      );
      el.dispatchEvent(evt);
    } else if (!el.hasAttribute("no-subtitles-fallback")) {
      const [subTrackStr] = (_d = splitTextTracksStr(
        (_c = el.getAttribute(MediaUIAttributes.MEDIA_SUBTITLES_LIST)) != null ? _c : ""
      )) != null ? _d : [];
      if (subTrackStr) {
        const evt = new window.CustomEvent(
          MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
          { composed: true, bubbles: true, detail: subTrackStr }
        );
        el.dispatchEvent(evt);
      }
    } else {
      console.error(
        "Attempting to enable closed captions but none are available! Please verify your media content if this is unexpected."
      );
    }
  }
};

// ../groundbreak-player/node_modules/media-chrome/dist/utils/fullscreenApi.js
var fullscreenApi = {
  enter: "requestFullscreen",
  exit: "exitFullscreen",
  event: "fullscreenchange",
  element: "fullscreenElement",
  error: "fullscreenerror",
  enabled: "fullscreenEnabled"
};
if (Document.fullscreenElement === void 0) {
  fullscreenApi.enter = "webkitRequestFullScreen";
  fullscreenApi.exit = Document.webkitExitFullscreen != null ? "webkitExitFullscreen" : "webkitCancelFullScreen";
  fullscreenApi.event = "webkitfullscreenchange";
  fullscreenApi.element = "webkitFullscreenElement";
  fullscreenApi.error = "webkitfullscreenerror";
  fullscreenApi.enabled = "webkitFullscreenEnabled";
}

// ../groundbreak-player/node_modules/media-chrome/dist/utils/platform-tests.js
var testMediaEl;
var getTestMediaEl = () => {
  var _a, _b;
  if (testMediaEl)
    return testMediaEl;
  testMediaEl = (_b = (_a = Document) == null ? void 0 : _a.createElement) == null ? void 0 : _b.call(_a, "video");
  return testMediaEl;
};
var hasVolumeSupportAsync = async (mediaEl = getTestMediaEl()) => {
  if (!mediaEl)
    return false;
  const prevVolume = mediaEl.volume;
  mediaEl.volume = prevVolume / 2 + 0.1;
  await delay(0);
  return mediaEl.volume !== prevVolume;
};
var hasPipSupport = (mediaEl = getTestMediaEl()) => typeof (mediaEl == null ? void 0 : mediaEl.requestPictureInPicture) === "function";
var hasFullscreenSupport = (mediaEl = getTestMediaEl()) => {
  let fullscreenEnabled = Document[fullscreenApi.enabled];
  if (!fullscreenEnabled && mediaEl) {
    fullscreenEnabled = "webkitSupportsFullscreen" in mediaEl;
  }
  return fullscreenEnabled;
};
var fullscreenSupported = hasFullscreenSupport();
var pipSupported = hasPipSupport();
var airplaySupported = !!Window.WebKitPlaybackTargetAvailabilityEvent;
var castSupported = !!Window.chrome;

// ../groundbreak-player/node_modules/media-chrome/dist/controller.js
var volumeSupported;
var volumeSupportPromise = hasVolumeSupportAsync().then((supported) => {
  volumeSupported = supported;
  return volumeSupported;
});
var StreamTypeValues = Object.values(StreamTypes);
var getSubtitleTracks = (controller) => {
  return getTextTracksList(controller.media, { kind: TextTrackKinds.SUBTITLES });
};
var getCaptionTracks = (controller) => {
  return getTextTracksList(controller.media, { kind: TextTrackKinds.CAPTIONS });
};
var getShowingSubtitleTracks = (controller) => {
  return getTextTracksList(controller.media, {
    kind: TextTrackKinds.SUBTITLES,
    mode: TextTrackModes.SHOWING
  });
};
var getShowingCaptionTracks = (controller) => {
  return getTextTracksList(controller.media, {
    kind: TextTrackKinds.CAPTIONS,
    mode: TextTrackModes.SHOWING
  });
};
var MediaUIStates = {
  MEDIA_PAUSED: {
    get: function(controller) {
      const { media } = controller;
      return media ? media.paused : true;
    },
    mediaEvents: ["play", "pause", "emptied"]
  },
  MEDIA_HAS_PLAYED: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return false;
      return !media.paused;
    },
    mediaEvents: ["playing", "emptied"]
  },
  MEDIA_PLAYBACK_RATE: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.playbackRate == "undefined") {
        return 1;
      }
      return media.playbackRate;
    },
    mediaEvents: ["ratechange", "loadstart"]
  },
  MEDIA_MUTED: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.muted == "undefined") {
        return false;
      }
      return media.muted;
    },
    mediaEvents: ["volumechange"]
  },
  MEDIA_VOLUME: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.volume == "undefined") {
        return 1;
      }
      return Number(media.volume);
    },
    mediaEvents: ["volumechange"]
  },
  MEDIA_VOLUME_LEVEL: {
    get: function(controller) {
      const { media } = controller;
      let level = "high";
      if (!media || typeof media.volume == "undefined") {
        return level;
      }
      const { muted, volume } = media;
      if (volume === 0 || muted) {
        level = "off";
      } else if (volume < 0.5) {
        level = "low";
      } else if (volume < 0.75) {
        level = "medium";
      }
      return level;
    },
    mediaEvents: ["volumechange"]
  },
  MEDIA_CURRENT_TIME: {
    get: function(controller) {
      const { media } = controller;
      if (!media || typeof media.currentTime == "undefined") {
        return 0;
      }
      return media.currentTime;
    },
    mediaEvents: ["timeupdate", "loadedmetadata"]
  },
  MEDIA_DURATION: {
    get: function(controller) {
      const { media } = controller;
      if (!media || !Number.isFinite(media.duration)) {
        return NaN;
      }
      return media.duration;
    },
    mediaEvents: ["durationchange", "loadedmetadata", "emptied"]
  },
  MEDIA_SEEKABLE: {
    get: function(controller) {
      var _a;
      const { media } = controller;
      if (!((_a = media == null ? void 0 : media.seekable) == null ? void 0 : _a.length))
        return void 0;
      const start = media.seekable.start(0);
      const end = media.seekable.end(media.seekable.length - 1);
      if (!start && !end)
        return void 0;
      return [Number(start.toFixed(3)), Number(end.toFixed(3))].join(":");
    },
    mediaEvents: ["loadedmetadata", "emptied", "progress"]
  },
  MEDIA_LOADING: {
    get: function(controller) {
      var _a;
      return !!(((_a = controller.media) == null ? void 0 : _a.readyState) < 3);
    },
    mediaEvents: ["waiting", "playing", "emptied"]
  },
  MEDIA_BUFFERED: {
    get: function(controller) {
      var _a;
      serializeTimeRanges((_a = controller.media) == null ? void 0 : _a.buffered);
    },
    mediaEvents: ["progress", "emptied"]
  },
  MEDIA_STREAM_TYPE: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return void 0;
      const { streamType } = media;
      if (StreamTypeValues.includes(streamType)) {
        if (streamType === StreamTypes.UNKNOWN) {
          const defaultType = controller.getAttribute("default-stream-type");
          if ([StreamTypes.LIVE, StreamTypes.ON_DEMAND].includes(defaultType)) {
            return defaultType;
          }
          return void 0;
        }
        return streamType;
      }
      const duration = media.duration;
      if (duration === Infinity) {
        return StreamTypes.LIVE;
      } else if (Number.isFinite(duration)) {
        return StreamTypes.ON_DEMAND;
      } else {
        const defaultType = controller.getAttribute("default-stream-type");
        if ([StreamTypes.LIVE, StreamTypes.ON_DEMAND].includes(defaultType)) {
          return defaultType;
        }
      }
      return void 0;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange"
    ]
  },
  MEDIA_TARGET_LIVE_WINDOW: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return Number.NaN;
      const { targetLiveWindow } = media;
      const streamType = MediaUIStates.MEDIA_STREAM_TYPE.get(controller);
      if ((targetLiveWindow == null || Number.isNaN(targetLiveWindow)) && streamType === StreamTypes.LIVE) {
        return 0;
      }
      return targetLiveWindow;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange",
      "targetlivewindowchange"
    ]
  },
  MEDIA_TIME_IS_LIVE: {
    get: function(controller) {
      const { media } = controller;
      if (!media)
        return false;
      if (typeof media.liveEdgeStart === "number") {
        if (Number.isNaN(media.liveEdgeStart))
          return false;
        return media.currentTime >= media.liveEdgeStart;
      }
      const live = MediaUIStates.MEDIA_STREAM_TYPE.get(controller) === "live";
      if (!live)
        return false;
      const seekable = media.seekable;
      if (!seekable)
        return true;
      if (!seekable.length)
        return false;
      const liveEdgeStartOffset = controller.hasAttribute("liveedgeoffset") ? Number(controller.getAttribute("liveedgeoffset")) : 10;
      const liveEdgeStart = seekable.end(seekable.length - 1) - liveEdgeStartOffset;
      return media.currentTime >= liveEdgeStart;
    },
    mediaEvents: ["playing", "timeupdate", "progress", "waiting", "emptied"]
  },
  MEDIA_IS_FULLSCREEN: {
    get: function(controller, e) {
      const isSomeElementFullscreen = !!Document[fullscreenApi.element];
      const fullscreenEl = isSomeElementFullscreen && (e == null ? void 0 : e.target);
      return containsComposedNode(controller.fullscreenElement, fullscreenEl);
    },
    rootEvents: [fullscreenApi.event]
  },
  MEDIA_IS_PIP: {
    get: function(controller, e) {
      var _a;
      const media = controller.media;
      if (!media)
        return false;
      if (e) {
        return e.type == "enterpictureinpicture";
      } else {
        const pipElement = (_a = controller.getRootNode().pictureInPictureElement) != null ? _a : Document.pictureInPictureElement;
        return containsComposedNode(media, pipElement);
      }
    },
    mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"]
  },
  MEDIA_IS_CASTING: {
    get: function(controller, e) {
      var _a;
      const { media } = controller;
      if (!media)
        return false;
      const castElement = (_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castElement;
      let castState = containsComposedNode(media, castElement);
      if ((e == null ? void 0 : e.type) === "castchange" && (e == null ? void 0 : e.detail) === "CONNECTING") {
        castState = "connecting";
      }
      return castState;
    },
    mediaEvents: ["entercast", "leavecast", "castchange"]
  },
  MEDIA_AIRPLAY_UNAVAILABLE: {
    get: function(controller, e) {
      if (!airplaySupported)
        return AvailabilityStates.UNSUPPORTED;
      if (!e)
        return void 0;
      if (e.availability === "available") {
        return void 0;
      } else if (e.availability === "not-available") {
        return AvailabilityStates.UNAVAILABLE;
      }
    },
    mediaEvents: ["webkitplaybacktargetavailabilitychanged"]
  },
  MEDIA_CAST_UNAVAILABLE: {
    get: function() {
      var _a;
      const castState = (_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castState;
      if (!castSupported || !castState) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (castState.includes("CONNECT")) {
        return void 0;
      } else {
        return AvailabilityStates.UNAVAILABLE;
      }
    },
    mediaEvents: ["castchange"]
  },
  MEDIA_FULLSCREEN_UNAVAILABLE: {
    get: function() {
      return fullscreenSupported ? void 0 : AvailabilityStates.UNAVAILABLE;
    }
  },
  MEDIA_PIP_UNAVAILABLE: {
    get: function() {
      return pipSupported ? void 0 : AvailabilityStates.UNSUPPORTED;
    }
  },
  MEDIA_VOLUME_UNAVAILABLE: {
    get: function(controller) {
      if (volumeSupported !== void 0 && !volumeSupported) {
        return AvailabilityStates.UNSUPPORTED;
      }
      const { media } = controller;
      if (media && typeof media.volume == "undefined") {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    mediaEvents: ["loadstart"]
  },
  MEDIA_CAPTIONS_LIST: {
    get: function(controller) {
      return stringifyTextTrackList(getCaptionTracks(controller)) || void 0;
    },
    mediaEvents: ["loadstart"],
    trackListEvents: ["addtrack", "removetrack"]
  },
  MEDIA_SUBTITLES_LIST: {
    get: function(controller) {
      return stringifyTextTrackList(getSubtitleTracks(controller)) || void 0;
    },
    mediaEvents: ["loadstart"],
    trackListEvents: ["addtrack", "removetrack"]
  },
  MEDIA_CAPTIONS_SHOWING: {
    get: function(controller) {
      return stringifyTextTrackList(getShowingCaptionTracks(controller)) || void 0;
    },
    mediaEvents: ["loadstart"],
    trackListEvents: ["addtrack", "removetrack", "change"]
  },
  MEDIA_SUBTITLES_SHOWING: {
    get: function(controller) {
      return stringifyTextTrackList(getShowingSubtitleTracks(controller)) || void 0;
    },
    mediaEvents: ["loadstart"],
    trackListEvents: ["addtrack", "removetrack", "change"]
  }
};
var MediaUIRequestHandlers = {
  MEDIA_PLAY_REQUEST: (media, e, controller) => {
    const streamType = MediaUIStates.MEDIA_STREAM_TYPE.get(controller);
    const autoSeekToLive = controller.getAttribute("noautoseektolive") === null;
    if (streamType == StreamTypes.LIVE && autoSeekToLive) {
      MediaUIRequestHandlers["MEDIA_SEEK_TO_LIVE_REQUEST"](media);
    }
    media.play().catch(() => {
    });
  },
  MEDIA_PAUSE_REQUEST: (media) => media.pause(),
  MEDIA_MUTE_REQUEST: (media) => media.muted = true,
  MEDIA_UNMUTE_REQUEST: (media) => {
    media.muted = false;
    if (media.volume === 0) {
      media.volume = 0.25;
    }
  },
  MEDIA_VOLUME_REQUEST: (media, e, mediaController) => {
    const volume = e.detail;
    media.volume = volume;
    if (volume > 0 && media.muted) {
      media.muted = false;
    }
    if (!mediaController.hasAttribute("novolumepref")) {
      try {
        Window.localStorage.setItem(
          "media-chrome-pref-volume",
          volume.toString()
        );
      } catch (err) {
      }
    }
  },
  MEDIA_ENTER_FULLSCREEN_REQUEST: (media, e, controller) => {
    if (!fullscreenSupported) {
      console.warn(
        "Fullscreen support is unavailable; not entering fullscreen"
      );
      return;
    }
    if (Document.pictureInPictureElement) {
      Document.exitPictureInPicture();
    }
    if (controller[fullscreenApi.enter]) {
      controller.fullscreenElement[fullscreenApi.enter]();
    } else if (media.webkitEnterFullscreen) {
      media.webkitEnterFullscreen();
    } else if (media.requestFullscreen) {
      media.requestFullscreen();
    } else {
      console.warn("MediaChrome: Fullscreen not supported");
    }
  },
  MEDIA_EXIT_FULLSCREEN_REQUEST: () => {
    Document[fullscreenApi.exit]();
  },
  MEDIA_ENTER_PIP_REQUEST: (media) => {
    if (!Document.pictureInPictureEnabled) {
      console.warn("MediaChrome: Picture-in-picture is not enabled");
      return;
    }
    if (!media.requestPictureInPicture) {
      console.warn(
        "MediaChrome: The current media does not support picture-in-picture"
      );
      return;
    }
    if (Document[fullscreenApi.element]) {
      Document[fullscreenApi.exit]();
    }
    const warnNotReady = () => {
      console.warn(
        "MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0."
      );
    };
    media.requestPictureInPicture().catch((err) => {
      if (err.code === 11) {
        if (media.readyState === 0 && media.preload === "none") {
          const cleanup = () => {
            media.removeEventListener("loadedmetadata", tryPip);
            media.preload = "none";
          };
          const tryPip = () => {
            media.requestPictureInPicture().catch(warnNotReady);
            cleanup();
          };
          media.addEventListener("loadedmetadata", tryPip);
          media.preload = "metadata";
          setTimeout(() => {
            if (media.readyState === 0)
              warnNotReady();
            cleanup();
          }, 1e3);
        } else {
          throw err;
        }
      } else {
        throw err;
      }
    });
  },
  MEDIA_EXIT_PIP_REQUEST: () => {
    if (Document.pictureInPictureElement) {
      Document.exitPictureInPicture();
    }
  },
  MEDIA_ENTER_CAST_REQUEST: (media) => {
    var _a;
    if (!((_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castEnabled))
      return;
    if (Document[fullscreenApi.element]) {
      Document[fullscreenApi.exit]();
    }
    media.requestCast();
  },
  MEDIA_EXIT_CAST_REQUEST: async () => {
    var _a;
    if ((_a = globalThis.CastableVideoElement) == null ? void 0 : _a.castElement) {
      globalThis.CastableVideoElement.exitCast();
    }
  },
  MEDIA_SEEK_REQUEST: (media, e) => {
    const time = e.detail;
    if (media.readyState > 0 || media.readyState === void 0) {
      media.currentTime = time;
    }
  },
  MEDIA_PLAYBACK_RATE_REQUEST: (media, e) => {
    media.playbackRate = e.detail;
  },
  MEDIA_PREVIEW_REQUEST: (media, e, controller) => {
    var _a;
    if (!media)
      return;
    const time = e.detail;
    if (time === null) {
      controller.propagateMediaState(
        MediaUIAttributes.MEDIA_PREVIEW_TIME,
        void 0
      );
    }
    controller.propagateMediaState(MediaUIAttributes.MEDIA_PREVIEW_TIME, time);
    const [track] = getTextTracksList(media, {
      kind: TextTrackKinds.METADATA,
      label: "thumbnails"
    });
    if (!(track && track.cues))
      return;
    if (time === null) {
      controller.propagateMediaState(
        MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
        void 0
      );
      controller.propagateMediaState(
        MediaUIAttributes.MEDIA_PREVIEW_COORDS,
        void 0
      );
      return;
    }
    const cue = Array.prototype.find.call(
      track.cues,
      (c) => c.startTime >= time
    );
    if (!cue)
      return;
    const base = !/'^(?:[a-z]+:)?\/\//i.test(cue.text) ? (_a = media.querySelector('track[label="thumbnails"]')) == null ? void 0 : _a.src : void 0;
    const url = new URL(cue.text, base);
    const previewCoordsStr = new URLSearchParams(url.hash).get("#xywh");
    controller.propagateMediaState(
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      url.href
    );
    controller.propagateMediaState(
      MediaUIAttributes.MEDIA_PREVIEW_COORDS,
      previewCoordsStr.split(",").join(" ")
    );
  },
  MEDIA_SHOW_CAPTIONS_REQUEST: (media, e, controller) => {
    const tracks = getCaptionTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, tracksToUpdate);
  },
  MEDIA_DISABLE_CAPTIONS_REQUEST: (media, e, controller) => {
    const tracks = getCaptionTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, tracksToUpdate);
  },
  MEDIA_SHOW_SUBTITLES_REQUEST: (media, e, controller) => {
    const tracks = getSubtitleTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, tracksToUpdate);
  },
  MEDIA_DISABLE_SUBTITLES_REQUEST: (media, e, controller) => {
    const tracks = getSubtitleTracks(controller);
    const { detail: tracksToUpdate = [] } = e;
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, tracksToUpdate);
  },
  MEDIA_AIRPLAY_REQUEST: (media) => {
    if (!media)
      return;
    if (!(media.webkitShowPlaybackTargetPicker && Window.WebKitPlaybackTargetAvailabilityEvent)) {
      console.warn(
        "received a request to select AirPlay but AirPlay is not supported in this environment"
      );
      return;
    }
    media.webkitShowPlaybackTargetPicker();
  },
  MEDIA_SEEK_TO_LIVE_REQUEST: (media) => {
    const seekable = media.seekable;
    if (!seekable) {
      console.warn(
        "MediaController: Media element does not support seeking to live."
      );
      return;
    }
    if (!seekable.length) {
      console.warn("MediaController: Media is unable to seek to live.");
      return;
    }
    media.currentTime = seekable.end(seekable.length - 1);
  }
};

// ../groundbreak-player/node_modules/media-chrome/dist/media-controller.js
var __accessCheck4 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet4 = (obj, member, getter) => {
  __accessCheck4(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd4 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet4 = (obj, member, value, setter) => {
  __accessCheck4(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck4(obj, member, "access private method");
  return method;
};
var _hotKeys;
var _fullscreenElement;
var _keyUpHandler;
var keyUpHandler_fn;
var _keyDownHandler;
var keyDownHandler_fn;
var ButtonPressedKeys = ["ArrowLeft", "ArrowRight", "Enter", " ", "f", "m", "k", "c"];
var DEFAULT_SEEK_OFFSET = 10;
var DEFAULT_TIME = 0;
var MediaController = class extends media_container_default {
  constructor() {
    super();
    __privateAdd4(this, _keyUpHandler);
    __privateAdd4(this, _keyDownHandler);
    __privateAdd4(this, _hotKeys, new AttributeTokenList(this, "hotkeys"));
    __privateAdd4(this, _fullscreenElement, void 0);
    if (MediaUIStates.MEDIA_VOLUME_UNAVAILABLE.get(this) === void 0) {
      volumeSupportPromise.then(() => {
        this.propagateMediaState(
          MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE,
          MediaUIStates.MEDIA_VOLUME_UNAVAILABLE.get(this)
        );
      });
    }
    this.mediaStateReceivers = [];
    this.associatedElementSubscriptions = /* @__PURE__ */ new Map();
    this.associateElement(this);
    Object.keys(MediaUIRequestHandlers).forEach((key) => {
      const handlerName = `_handle${constToCamel(key, true)}`;
      this[handlerName] = (e) => {
        e.stopPropagation();
        if (!this.media) {
          console.warn("MediaController: No media available.");
          return;
        }
        MediaUIRequestHandlers[key](this.media, e, this);
      };
      this.addEventListener(MediaUIEvents[key], this[handlerName]);
    });
    this._mediaStatePropagators = {};
    Object.keys(MediaUIStates).forEach((key) => {
      this._mediaStatePropagators[key] = (e) => {
        this.propagateMediaState(MediaUIAttributes[key], MediaUIStates[key].get(this, e));
      };
    });
    this.enableHotkeys();
  }
  static get observedAttributes() {
    return super.observedAttributes.concat("nohotkeys", "hotkeys", "default-stream-type");
  }
  get fullscreenElement() {
    var _a;
    return (_a = __privateGet4(this, _fullscreenElement)) != null ? _a : this;
  }
  set fullscreenElement(element) {
    if (this.hasAttribute("fullscreen-element")) {
      this.removeAttribute("fullscreen-element");
    }
    __privateSet4(this, _fullscreenElement, element);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a;
    if (attrName === "nohotkeys") {
      if (newValue !== oldValue && newValue === "") {
        if (this.hasAttribute("hotkeys")) {
          console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled.");
        }
        this.disableHotkeys();
      } else if (newValue !== oldValue && newValue === null) {
        this.enableHotkeys();
      }
    } else if (attrName === "hotkeys") {
      __privateGet4(this, _hotKeys).value = newValue;
    } else if (attrName === "default-stream-type") {
      this.propagateMediaState(MediaUIAttributes.MEDIA_STREAM_TYPE);
    } else if (attrName === "fullscreen-element") {
      const el = newValue ? (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(newValue) : void 0;
      __privateSet4(this, _fullscreenElement, el);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  mediaSetCallback(media) {
    super.mediaSetCallback(media);
    if (!media.hasAttribute("tabindex")) {
      media.setAttribute("tabindex", -1);
    }
    Object.keys(MediaUIStates).forEach((key) => {
      const {
        mediaEvents,
        rootEvents,
        trackListEvents
      } = MediaUIStates[key];
      const handler = this._mediaStatePropagators[key];
      mediaEvents == null ? void 0 : mediaEvents.forEach((eventName) => {
        media.addEventListener(eventName, handler);
      });
      rootEvents == null ? void 0 : rootEvents.forEach((eventName) => {
        this.getRootNode().addEventListener(eventName, handler);
      });
      trackListEvents == null ? void 0 : trackListEvents.forEach((eventName) => {
        var _a;
        (_a = media.textTracks) == null ? void 0 : _a.addEventListener(eventName, handler);
      });
    });
    if (!this.hasAttribute("novolumepref")) {
      try {
        const volPref = Window.localStorage.getItem("media-chrome-pref-volume");
        if (volPref !== null)
          media.volume = volPref;
      } catch (e) {
        console.debug("Error getting volume pref", e);
      }
    }
  }
  mediaUnsetCallback(media) {
    super.mediaUnsetCallback(media);
    Object.keys(MediaUIStates).forEach((key) => {
      const {
        mediaEvents,
        rootEvents,
        trackListEvents
      } = MediaUIStates[key];
      const handler = this._mediaStatePropagators[key];
      mediaEvents == null ? void 0 : mediaEvents.forEach((eventName) => {
        media.removeEventListener(eventName, handler);
      });
      rootEvents == null ? void 0 : rootEvents.forEach((eventName) => {
        this.getRootNode().removeEventListener(eventName, handler);
      });
      trackListEvents == null ? void 0 : trackListEvents.forEach((eventName) => {
        var _a;
        (_a = media.textTracks) == null ? void 0 : _a.removeEventListener(eventName, handler);
      });
    });
    this.propagateMediaState(MediaUIAttributes.MEDIA_PAUSED, true);
  }
  propagateMediaState(stateName, state) {
    const previousState = this.getAttribute(stateName);
    propagateMediaState(this.mediaStateReceivers, stateName, state);
    if (previousState === this.getAttribute(stateName))
      return;
    const evt = new Window.CustomEvent(
      AttributeToStateChangeEventMap[stateName],
      { composed: true, bubbles: true, detail: state }
    );
    this.dispatchEvent(evt);
  }
  associateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (associatedElementSubscriptions.has(element))
      return;
    const registerMediaStateReceiver = this.registerMediaStateReceiver.bind(this);
    const unregisterMediaStateReceiver = this.unregisterMediaStateReceiver.bind(this);
    const unsubscribe = monitorForMediaStateReceivers(
      element,
      registerMediaStateReceiver,
      unregisterMediaStateReceiver
    );
    Object.keys(MediaUIEvents).forEach((key) => {
      element.addEventListener(
        MediaUIEvents[key],
        this[`_handle${constToCamel(key, true)}`]
      );
    });
    associatedElementSubscriptions.set(element, unsubscribe);
  }
  unassociateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (!associatedElementSubscriptions.has(element))
      return;
    const unsubscribe = associatedElementSubscriptions.get(element);
    unsubscribe();
    associatedElementSubscriptions.delete(element);
    Object.keys(MediaUIEvents).forEach((key) => {
      element.removeEventListener(
        MediaUIEvents[key],
        this[`_handle${constToCamel(key, true)}`]
      );
    });
  }
  registerMediaStateReceiver(el) {
    if (!el)
      return;
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index > -1)
      return;
    els.push(el);
    Object.keys(MediaUIStates).forEach((stateConstName) => {
      const stateDetails = MediaUIStates[stateConstName];
      propagateMediaState(
        [el],
        MediaUIAttributes[stateConstName],
        stateDetails.get(this)
      );
    });
  }
  unregisterMediaStateReceiver(el) {
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index < 0)
      return;
    els.splice(index, 1);
  }
  enableHotkeys() {
    this.addEventListener("keydown", __privateMethod(this, _keyDownHandler, keyDownHandler_fn));
  }
  disableHotkeys() {
    this.removeEventListener("keydown", __privateMethod(this, _keyDownHandler, keyDownHandler_fn));
    this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
  }
  get hotkeys() {
    return __privateGet4(this, _hotKeys);
  }
  keyboardShortcutHandler(e) {
    var _a, _b, _c, _d;
    const keysUsed = ((_d = (_c = (_a = e.target.getAttribute("keysused")) == null ? void 0 : _a.split(" ")) != null ? _c : (_b = e.target) == null ? void 0 : _b.keysUsed) != null ? _d : []).map((key) => key === "Space" ? " " : key).filter(Boolean);
    if (keysUsed.includes(e.key)) {
      return;
    }
    let eventName, currentTimeStr, currentTime, detail, evt;
    const seekOffset = DEFAULT_SEEK_OFFSET;
    if (__privateGet4(this, _hotKeys).contains(`no${e.key.toLowerCase()}`))
      return;
    if (e.key === " " && __privateGet4(this, _hotKeys).contains(`nospace`))
      return;
    switch (e.key) {
      case " ":
      case "k":
        eventName = this.getAttribute(MediaUIAttributes.MEDIA_PAUSED) != null ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(
          new Window.CustomEvent(eventName, { composed: true, bubbles: true })
        );
        break;
      case "m":
        eventName = this.getAttribute(MediaUIAttributes.MEDIA_VOLUME_LEVEL) === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
        this.dispatchEvent(
          new Window.CustomEvent(eventName, { composed: true, bubbles: true })
        );
        break;
      case "f":
        eventName = this.getAttribute(MediaUIAttributes.MEDIA_IS_FULLSCREEN) != null ? MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST : MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST;
        this.dispatchEvent(
          new Window.CustomEvent(eventName, { composed: true, bubbles: true })
        );
        break;
      case "c":
        toggleSubsCaps(this);
        break;
      case "ArrowLeft":
        currentTimeStr = this.getAttribute(
          MediaUIAttributes.MEDIA_CURRENT_TIME
        );
        currentTime = currentTimeStr && !Number.isNaN(+currentTimeStr) ? +currentTimeStr : DEFAULT_TIME;
        detail = Math.max(currentTime - seekOffset, 0);
        evt = new Window.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      case "ArrowRight":
        currentTimeStr = this.getAttribute(
          MediaUIAttributes.MEDIA_CURRENT_TIME
        );
        currentTime = currentTimeStr && !Number.isNaN(+currentTimeStr) ? +currentTimeStr : DEFAULT_TIME;
        detail = Math.max(currentTime + seekOffset, 0);
        evt = new Window.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      default:
        break;
    }
  }
};
_hotKeys = /* @__PURE__ */ new WeakMap();
_fullscreenElement = /* @__PURE__ */ new WeakMap();
_keyUpHandler = /* @__PURE__ */ new WeakSet();
keyUpHandler_fn = function(e) {
  const { key } = e;
  if (!ButtonPressedKeys.includes(key)) {
    this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
    return;
  }
  this.keyboardShortcutHandler(e);
};
_keyDownHandler = /* @__PURE__ */ new WeakSet();
keyDownHandler_fn = function(e) {
  const { metaKey, altKey, key } = e;
  if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
    this.removeEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn));
    return;
  }
  if ([" ", "ArrowLeft", "ArrowRight"].includes(key) && !(__privateGet4(this, _hotKeys).contains(`no${key.toLowerCase()}`) || key === " " && __privateGet4(this, _hotKeys).contains("nospace"))) {
    e.preventDefault();
  }
  this.addEventListener("keyup", __privateMethod(this, _keyUpHandler, keyUpHandler_fn), { once: true });
};
var MEDIA_UI_ATTRIBUTE_NAMES2 = Object.values(MediaUIAttributes);
var getMediaUIAttributesFrom = (child) => {
  var _a, _b, _c, _d;
  let { observedAttributes } = child.constructor;
  if (!observedAttributes && ((_a = child.nodeName) == null ? void 0 : _a.includes("-"))) {
    Window.customElements.upgrade(child);
    ({ observedAttributes } = child.constructor);
  }
  const mediaChromeAttributesList = (_d = (_c = (_b = child == null ? void 0 : child.getAttribute) == null ? void 0 : _b.call(child, MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES)) == null ? void 0 : _c.split) == null ? void 0 : _d.call(_c, /\s+/);
  if (!Array.isArray(observedAttributes || mediaChromeAttributesList))
    return [];
  return (observedAttributes || mediaChromeAttributesList).filter(
    (attrName) => MEDIA_UI_ATTRIBUTE_NAMES2.includes(attrName)
  );
};
var isMediaStateReceiver = (child) => {
  return !!getMediaUIAttributesFrom(child).length;
};
var setAttr = async (child, attrName, attrValue) => {
  if (!child.isConnected) {
    await delay(0);
  }
  if (attrValue == void 0) {
    return child.removeAttribute(attrName);
  }
  if (typeof attrValue === "boolean") {
    if (attrValue)
      return child.setAttribute(attrName, "");
    return child.removeAttribute(attrName);
  }
  if (Number.isNaN(attrValue)) {
    return child.removeAttribute(attrName);
  }
  return child.setAttribute(attrName, attrValue);
};
var isMediaSlotElementDescendant = (el) => {
  var _a;
  return !!((_a = el.closest) == null ? void 0 : _a.call(el, '*[slot="media"]'));
};
var traverseForMediaStateReceivers = (rootNode, mediaStateReceiverCallback) => {
  if (isMediaSlotElementDescendant(rootNode)) {
    return;
  }
  const traverseForMediaStateReceiversSync = (rootNode2, mediaStateReceiverCallback2) => {
    var _a, _b;
    if (isMediaStateReceiver(rootNode2)) {
      mediaStateReceiverCallback2(rootNode2);
    }
    const { children = [] } = rootNode2 != null ? rootNode2 : {};
    const shadowChildren = (_b = (_a = rootNode2 == null ? void 0 : rootNode2.shadowRoot) == null ? void 0 : _a.children) != null ? _b : [];
    const allChildren = [...children, ...shadowChildren];
    allChildren.forEach(
      (child) => traverseForMediaStateReceivers(child, mediaStateReceiverCallback2)
    );
  };
  const name = rootNode == null ? void 0 : rootNode.nodeName.toLowerCase();
  if (name.includes("-") && !isMediaStateReceiver(rootNode)) {
    Window.customElements.whenDefined(name).then(() => {
      traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
    });
    return;
  }
  traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
};
var propagateMediaState = (els, stateName, val) => {
  els.forEach((el) => {
    const relevantAttrs = getMediaUIAttributesFrom(el);
    if (!relevantAttrs.includes(stateName))
      return;
    setAttr(el, stateName, val);
  });
};
var monitorForMediaStateReceivers = (rootNode, registerMediaStateReceiver, unregisterMediaStateReceiver) => {
  traverseForMediaStateReceivers(rootNode, registerMediaStateReceiver);
  const registerMediaStateReceiverHandler = (evt) => {
    var _a;
    const el = (_a = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a : evt.target;
    registerMediaStateReceiver(el);
  };
  const unregisterMediaStateReceiverHandler = (evt) => {
    var _a;
    const el = (_a = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a : evt.target;
    unregisterMediaStateReceiver(el);
  };
  rootNode.addEventListener(
    MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
    registerMediaStateReceiverHandler
  );
  rootNode.addEventListener(
    MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
    unregisterMediaStateReceiverHandler
  );
  const mutationCallback = (mutationsList) => {
    mutationsList.forEach((mutationRecord) => {
      const {
        addedNodes = [],
        removedNodes = [],
        type,
        target,
        attributeName
      } = mutationRecord;
      if (type === "childList") {
        Array.prototype.forEach.call(
          addedNodes,
          (node) => traverseForMediaStateReceivers(node, registerMediaStateReceiver)
        );
        Array.prototype.forEach.call(
          removedNodes,
          (node) => traverseForMediaStateReceivers(node, unregisterMediaStateReceiver)
        );
      } else if (type === "attributes" && attributeName === MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES) {
        if (isMediaStateReceiver(target)) {
          registerMediaStateReceiver(target);
        } else {
          unregisterMediaStateReceiver(target);
        }
      }
    });
  };
  const observer = new MutationObserver(mutationCallback);
  observer.observe(rootNode, {
    childList: true,
    attributes: true,
    subtree: true
  });
  const unsubscribe = () => {
    traverseForMediaStateReceivers(rootNode, unregisterMediaStateReceiver);
    observer.disconnect();
    rootNode.removeEventListener(
      MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
      registerMediaStateReceiverHandler
    );
    rootNode.removeEventListener(
      MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
      unregisterMediaStateReceiverHandler
    );
  };
  return unsubscribe;
};
if (!Window.customElements.get("media-controller")) {
  Window.customElements.define("media-controller", MediaController);
}
var media_controller_default = MediaController;

// ../groundbreak-player/node_modules/media-chrome/dist/media-chrome-range.js
var __accessCheck5 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet5 = (obj, member, getter) => {
  __accessCheck5(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd5 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet5 = (obj, member, value, setter) => {
  __accessCheck5(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _thumbWidth;
var _mediaController3;
var _onFocusIn;
var _onFocusOut;
var template4 = Document.createElement("template");
var thumbStyles = `
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`;
var trackStyles = `
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 1px);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, rgb(255 255 255 / .2)));
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;
template4.innerHTML = `
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      transition: background .15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      ${""}
      font-size: 0;
      box-shadow: var(--_focus-visible-box-shadow, none);
    }

    ${""}
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      ${""}
      -webkit-appearance: none; ${""}
      background: transparent; ${""}

      ${""}
      min-height: 100%;
      width: var(--media-range-track-width, 100%); ${""}

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    ${""}
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${thumbStyles}
      ${""}
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    ${""}
    input[type=range]::-moz-range-thumb {
      ${thumbStyles}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${trackStyles} }
    input[type=range]::-moz-range-track { ${trackStyles} }
    input[type=range]::-ms-track {
      ${""}
      width: 100%;
      cursor: pointer;
      ${""}
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${trackStyles}
    }

    #background,
    #pointer {
      min-width: 40px;
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
    }

    #pointer {
      min-width: auto;
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      ${""}
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;
var MediaChromeRange = class extends Window.HTMLElement {
  constructor() {
    super();
    __privateAdd5(this, _thumbWidth, void 0);
    __privateAdd5(this, _mediaController3, void 0);
    __privateAdd5(this, _onFocusIn, () => {
      if (this.range.matches(":focus-visible")) {
        const { style: style2 } = getOrInsertCSSRule(this.shadowRoot, ":host");
        style2.setProperty("--_focus-visible-box-shadow", "var(--_focus-box-shadow)");
      }
    });
    __privateAdd5(this, _onFocusOut, () => {
      const { style: style2 } = getOrInsertCSSRule(this.shadowRoot, ":host");
      style2.removeProperty("--_focus-visible-box-shadow");
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template4.content.cloneNode(true));
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-block))`);
    this.container = this.shadowRoot.querySelector("#container");
    this.range = this.shadowRoot.querySelector("#range");
    this.range.addEventListener("input", this.updateBar.bind(this));
    __privateSet5(this, _thumbWidth, parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width") || "10", 10));
  }
  static get observedAttributes() {
    return [
      "disabled",
      "aria-disabled",
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet5(this, _mediaController3)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet5(this, _mediaController3, null);
      }
      if (newValue) {
        __privateSet5(this, _mediaController3, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet5(this, _mediaController3)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    } else if (attrName === "disabled" || attrName === "aria-disabled" && oldValue !== newValue) {
      if (newValue == null) {
        this.range.removeAttribute(attrName);
      } else {
        this.range.setAttribute(attrName, newValue);
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet5(this, _mediaController3, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet5(this, _mediaController3)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
    this.updateBar();
    this.shadowRoot.addEventListener("focusin", __privateGet5(this, _onFocusIn));
    this.shadowRoot.addEventListener("focusout", __privateGet5(this, _onFocusOut));
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = __privateGet5(this, _mediaController3)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet5(this, _mediaController3, null);
    this.shadowRoot.removeEventListener("focusin", __privateGet5(this, _onFocusIn));
    this.shadowRoot.removeEventListener("focusout", __privateGet5(this, _onFocusOut));
  }
  updatePointerBar(evt) {
    const rangeRect = this.range.getBoundingClientRect();
    let mousePercent = (evt.clientX - rangeRect.left) / rangeRect.width;
    mousePercent = Math.max(0, Math.min(1, mousePercent));
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#pointer");
    style.setProperty("width", `${mousePercent * rangeRect.width}px`);
  }
  updateBar() {
    const colorArray = this.getBarColors();
    let gradientStr = "linear-gradient(to right, ";
    let prevPercent = 0;
    colorArray.forEach((color) => {
      if (color[1] < prevPercent)
        return;
      gradientStr = gradientStr + `${color[0]} ${prevPercent}%, ${color[0]} ${color[1]}%,`;
      prevPercent = color[1];
    });
    gradientStr = gradientStr.slice(0, gradientStr.length - 1) + ")";
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#range");
    style.setProperty("--media-range-track-progress-internal", gradientStr);
  }
  getBarColors() {
    const range = this.range;
    const relativeValue = range.value - range.min;
    const relativeMax = range.max - range.min;
    const rangePercent = relativeValue / relativeMax * 100;
    let thumbPercent = 0;
    if (range.value > range.min && range.value < range.max) {
      const thumbOffset = __privateGet5(this, _thumbWidth) * (0.5 - rangePercent / 100);
      thumbPercent = thumbOffset / range.offsetWidth * 100;
    }
    let colorArray = [
      ["var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)))", rangePercent + thumbPercent],
      ["var(--media-range-track-color, transparent)", 100]
    ];
    return colorArray;
  }
  get keysUsed() {
    return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  }
};
_thumbWidth = /* @__PURE__ */ new WeakMap();
_mediaController3 = /* @__PURE__ */ new WeakMap();
_onFocusIn = /* @__PURE__ */ new WeakMap();
_onFocusOut = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-chrome-range")) {
  Window.customElements.define("media-chrome-range", MediaChromeRange);
}
var media_chrome_range_default = MediaChromeRange;

// ../groundbreak-player/node_modules/media-chrome/dist/media-control-bar.js
var __accessCheck6 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet6 = (obj, member, getter) => {
  __accessCheck6(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd6 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet6 = (obj, member, value, setter) => {
  __accessCheck6(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController4;
var template5 = Document.createElement("template");
template5.innerHTML = `
  <style>
    :host {
      ${""}
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-icon-width: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-progress-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;
var MediaControlBar = class extends Window.HTMLElement {
  constructor() {
    super();
    __privateAdd6(this, _mediaController4, void 0);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template5.content.cloneNode(true));
    }
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet6(this, _mediaController4)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet6(this, _mediaController4, null);
      }
      if (newValue) {
        __privateSet6(this, _mediaController4, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet6(this, _mediaController4)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet6(this, _mediaController4, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet6(this, _mediaController4)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = __privateGet6(this, _mediaController4)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet6(this, _mediaController4, null);
  }
};
_mediaController4 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-control-bar")) {
  Window.customElements.define("media-control-bar", MediaControlBar);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-text-display.js
var __accessCheck7 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet7 = (obj, member, getter) => {
  __accessCheck7(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd7 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet7 = (obj, member, value, setter) => {
  __accessCheck7(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController5;
var template6 = Document.createElement("template");
template6.innerHTML = `
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    ${""}
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    ${""}
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;
var MediaTextDisplay = class extends Window.HTMLElement {
  constructor() {
    super();
    __privateAdd7(this, _mediaController5, void 0);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template6.content.cloneNode(true));
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet7(this, _mediaController5)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet7(this, _mediaController5, null);
      }
      if (newValue) {
        __privateSet7(this, _mediaController5, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet7(this, _mediaController5)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet7(this, _mediaController5, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet7(this, _mediaController5)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = __privateGet7(this, _mediaController5)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet7(this, _mediaController5, null);
  }
};
_mediaController5 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-text-display")) {
  Window.customElements.define("media-text-display", MediaTextDisplay);
}
var media_text_display_default = MediaTextDisplay;

// ../groundbreak-player/node_modules/media-chrome/dist/media-current-time-display.js
var __accessCheck8 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet8 = (obj, member, getter) => {
  __accessCheck8(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd8 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet8 = (obj, member, value, setter) => {
  __accessCheck8(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot;
var MediaCurrentTimeDisplay = class extends media_text_display_default {
  constructor() {
    super();
    __privateAdd8(this, _slot, void 0);
    __privateSet8(this, _slot, this.shadowRoot.querySelector("slot"));
    __privateGet8(this, _slot).textContent = formatTime(0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_CURRENT_TIME];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_CURRENT_TIME) {
      __privateGet8(this, _slot).textContent = formatTime(newValue);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
};
_slot = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-current-time-display")) {
  Window.customElements.define("media-current-time-display", MediaCurrentTimeDisplay);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-duration-display.js
var __accessCheck9 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet9 = (obj, member, getter) => {
  __accessCheck9(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd9 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet9 = (obj, member, value, setter) => {
  __accessCheck9(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot2;
var MediaDurationDisplay = class extends media_text_display_default {
  constructor() {
    super();
    __privateAdd9(this, _slot2, void 0);
    __privateSet9(this, _slot2, this.shadowRoot.querySelector("slot"));
    __privateGet9(this, _slot2).textContent = formatTime(0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_DURATION];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_DURATION) {
      __privateGet9(this, _slot2).textContent = formatTime(newValue);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
};
_slot2 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-duration-display")) {
  Window.customElements.define("media-duration-display", MediaDurationDisplay);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-time-display.js
var __accessCheck10 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet10 = (obj, member, getter) => {
  __accessCheck10(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd10 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet10 = (obj, member, value, setter) => {
  __accessCheck10(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot3;
var ButtonPressedKeys2 = ["Enter", " "];
var DEFAULT_TIMES_SEP = "&nbsp;/&nbsp;";
var formatTimesLabel = (el, { timesSep = DEFAULT_TIMES_SEP } = {}) => {
  var _a, _b, _c;
  const showRemaining = el.getAttribute("remaining") != null;
  const showDuration = el.getAttribute("show-duration") != null;
  const currentTime = (_a = el.mediaCurrentTime) != null ? _a : 0;
  const endTime = (_c = (_b = el.mediaDuration) != null ? _b : el.mediaSeekableEnd) != null ? _c : 0;
  const timeLabel = showRemaining ? formatTime(0 - (endTime - currentTime)) : formatTime(currentTime);
  if (!showDuration)
    return timeLabel;
  return `${timeLabel}${timesSep}${formatTime(endTime)}`;
};
var DEFAULT_MISSING_TIME_PHRASE = "video not loaded, unknown time.";
var updateAriaValueText = (el) => {
  const currentTime = el.mediaCurrentTime;
  const endTime = el.mediaDuration || el.mediaSeekableEnd;
  if (currentTime == null || endTime == null) {
    el.setAttribute("aria-valuetext", DEFAULT_MISSING_TIME_PHRASE);
    return;
  }
  const showRemaining = el.hasAttribute("remaining");
  const showDuration = el.hasAttribute("show-duration");
  const currentTimePhrase = showRemaining ? formatAsTimePhrase(0 - (endTime - currentTime)) : formatAsTimePhrase(currentTime);
  if (!showDuration) {
    el.setAttribute("aria-valuetext", currentTimePhrase);
    return;
  }
  const totalTimePhrase = formatAsTimePhrase(endTime);
  const fullPhrase = `${currentTimePhrase} of ${totalTimePhrase}`;
  el.setAttribute("aria-valuetext", fullPhrase);
};
var MediaTimeDisplay = class extends media_text_display_default {
  constructor() {
    super();
    __privateAdd10(this, _slot3, void 0);
    __privateSet10(this, _slot3, this.shadowRoot.querySelector("slot"));
    __privateGet10(this, _slot3).innerHTML = `${formatTimesLabel(this)}`;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("cursor", "pointer");
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      MediaUIAttributes.MEDIA_DURATION,
      MediaUIAttributes.MEDIA_SEEKABLE,
      "remaining",
      "show-duration",
      "disabled"
    ];
  }
  connectedCallback() {
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "progressbar");
    this.setAttribute("aria-label", nouns.PLAYBACK_TIME());
    const keyUpHandler = (evt) => {
      const { key } = evt;
      if (!ButtonPressedKeys2.includes(key)) {
        this.removeEventListener("keyup", keyUpHandler);
        return;
      }
      this.toggleTimeDisplay();
    };
    this.addEventListener("keydown", (evt) => {
      const { metaKey, altKey, key } = evt;
      if (metaKey || altKey || !ButtonPressedKeys2.includes(key)) {
        this.removeEventListener("keyup", keyUpHandler);
        return;
      }
      this.addEventListener("keyup", keyUpHandler);
    });
    this.addEventListener("click", this.toggleTimeDisplay);
    super.connectedCallback();
  }
  toggleTimeDisplay() {
    if (this.hasAttribute("remaining")) {
      this.removeAttribute("remaining");
    } else {
      this.setAttribute("remaining", "");
    }
  }
  disconnectedCallback() {
    this.disable();
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if ([
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      MediaUIAttributes.MEDIA_DURATION,
      MediaUIAttributes.MEDIA_SEEKABLE,
      "remaining",
      "show-duration"
    ].includes(attrName)) {
      const timesLabel = formatTimesLabel(this);
      updateAriaValueText(this);
      if (timesLabel !== __privateGet10(this, _slot3).innerHTML) {
        __privateGet10(this, _slot3).innerHTML = timesLabel;
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  enable() {
    this.setAttribute("tabindex", 0);
  }
  disable() {
    this.removeAttribute("tabindex");
  }
  get mediaDuration() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_DURATION);
    return attrVal != null ? +attrVal : void 0;
  }
  get mediaCurrentTime() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_CURRENT_TIME);
    return attrVal != null ? +attrVal : void 0;
  }
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  get mediaSeekableEnd() {
    var _a;
    const [, end] = (_a = this.mediaSeekable) != null ? _a : [];
    return end;
  }
  get mediaSeekableStart() {
    var _a;
    const [start] = (_a = this.mediaSeekable) != null ? _a : [];
    return start;
  }
};
_slot3 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-time-display")) {
  Window.customElements.define("media-time-display", MediaTimeDisplay);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-captions-button.js
var ccIconOn = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
var ccIconOff = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;
var slotTemplate3 = Document.createElement("template");
slotTemplate3.innerHTML = `
  <style>
  :host([aria-checked="true"]) slot:not([name=on]) > *,
  :host([aria-checked="true"]) ::slotted(:not([slot=on])) {
    display: none !important;
  }

  ${""}
  :host(:not([aria-checked="true"])) slot:not([name=off]) > *, 
  :host(:not([aria-checked="true"])) ::slotted(:not([slot=off])) {
    display: none !important;
  }
  </style>

  <slot name="on">${ccIconOn}</slot>
  <slot name="off">${ccIconOff}</slot>
`;
var updateAriaChecked = (el) => {
  el.setAttribute("aria-checked", isCCOn(el));
};
var MediaCaptionsButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "no-subtitles-fallback",
      "default-showing",
      MediaUIAttributes.MEDIA_CAPTIONS_LIST,
      MediaUIAttributes.MEDIA_CAPTIONS_SHOWING,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate3, ...options });
    this._captionsReady = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "switch");
    this.setAttribute("aria-label", nouns.CLOSED_CAPTIONS());
    updateAriaChecked(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if ([
      MediaUIAttributes.MEDIA_CAPTIONS_SHOWING,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ].includes(attrName)) {
      updateAriaChecked(this);
    }
    if (this.hasAttribute("default-showing") && this.getAttribute("aria-checked") !== "true") {
      const subtitlesIncluded = !this.hasAttribute("no-subtitles-fallback");
      const relevantAttributes = subtitlesIncluded ? [
        MediaUIAttributes.MEDIA_CAPTIONS_LIST,
        MediaUIAttributes.MEDIA_SUBTITLES_LIST
      ] : [MediaUIAttributes.MEDIA_CAPTIONS_LIST];
      if (relevantAttributes.includes(attrName)) {
        const nextCaptionsReady = !!this.getAttribute(MediaUIAttributes.MEDIA_CAPTIONS_LIST) || !!(subtitlesIncluded && this.getAttribute(MediaUIAttributes.MEDIA_SUBTITLES_LIST));
        if (this._captionsReady !== nextCaptionsReady) {
          this._captionsReady = nextCaptionsReady;
          if (this._captionsReady) {
            toggleSubsCaps(this);
          }
        }
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    toggleSubsCaps(this);
  }
};
if (!Window.customElements.get("media-captions-button")) {
  Window.customElements.define("media-captions-button", MediaCaptionsButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-seek-forward-button.js
var DEFAULT_SEEK_OFFSET2 = "30";
var forwardIcon = `<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${DEFAULT_SEEK_OFFSET2}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`;
var slotTemplate4 = Document.createElement("template");
slotTemplate4.innerHTML = `  
  <slot name="forward">${forwardIcon}</slot>
`;
var DEFAULT_TIME2 = 0;
var updateAriaLabel2 = (el) => {
  const seekOffset = Math.abs(+el.getAttribute("seek-offset"));
  const label = verbs.SEEK_FORWARD_N_SECS({ seekOffset });
  el.setAttribute("aria-label", label);
};
var updateSeekIconValue = (el) => {
  const svg = getSlotted(el, "forward");
  const value = el.getAttribute("seek-offset");
  updateIconText(svg, value);
};
var MediaSeekForwardButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      "seek-offset"
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate4, ...options });
  }
  connectedCallback() {
    if (!this.hasAttribute("seek-offset")) {
      this.setAttribute("seek-offset", DEFAULT_SEEK_OFFSET2);
    }
    updateAriaLabel2(this);
    updateSeekIconValue(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName === "seek-offset") {
      if (newValue == void 0) {
        this.setAttribute("seek-offset", DEFAULT_SEEK_OFFSET2);
      }
      updateSeekIconValue(this);
      updateAriaLabel2(this);
    }
    super.attributeChangedCallback(attrName, _oldValue, newValue);
  }
  handleClick() {
    const currentTimeStr = this.getAttribute(
      MediaUIAttributes.MEDIA_CURRENT_TIME
    );
    const seekOffset = +this.getAttribute("seek-offset");
    const currentTime = currentTimeStr && !Number.isNaN(+currentTimeStr) ? +currentTimeStr : DEFAULT_TIME2;
    const detail = currentTime + seekOffset;
    const evt = new Window.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
};
if (!Window.customElements.get("media-seek-forward-button")) {
  Window.customElements.define("media-seek-forward-button", MediaSeekForwardButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-fullscreen-button.js
var enterFullscreenIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`;
var exitFullscreenIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;
var slotTemplate5 = Document.createElement("template");
slotTemplate5.innerHTML = `
  <style>
  :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *,
  :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  ${""}
  :host(:not([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *,
  :host(:not([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${enterFullscreenIcon}</slot>
  <slot name="exit">${exitFullscreenIcon}</slot>
`;
var updateAriaLabel3 = (el) => {
  const isFullScreen = el.getAttribute(MediaUIAttributes.MEDIA_IS_FULLSCREEN) != null;
  const label = isFullScreen ? verbs.EXIT_FULLSCREEN() : verbs.ENTER_FULLSCREEN();
  el.setAttribute("aria-label", label);
};
var MediaFullscreenButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_FULLSCREEN,
      MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate5, ...options });
  }
  connectedCallback() {
    updateAriaLabel3(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_IS_FULLSCREEN) {
      updateAriaLabel3(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    const eventName = this.getAttribute(MediaUIAttributes.MEDIA_IS_FULLSCREEN) != null ? MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST : MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST;
    this.dispatchEvent(
      new Window.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!Window.customElements.get("media-fullscreen-button")) {
  Window.customElements.define("media-fullscreen-button", MediaFullscreenButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-live-button.js
var { MEDIA_TIME_IS_LIVE, MEDIA_PAUSED } = MediaUIAttributes;
var { MEDIA_SEEK_TO_LIVE_REQUEST, MEDIA_PLAY_REQUEST } = MediaUIEvents;
var indicatorSVG = '<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';
var slotTemplate6 = Document.createElement("template");
slotTemplate6.innerHTML = `
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    ${""}
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) slot[name=indicator] > *,
  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-indicator-color, rgb(255, 0, 0));
  }

  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${indicatorSVG}</slot>
  ${""}
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;
var MediaLiveButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MEDIA_PAUSED,
      MEDIA_TIME_IS_LIVE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate6, ...options });
    this.setAttribute("aria-label", verbs.SEEK_LIVE());
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (this.hasAttribute(MEDIA_PAUSED) || !this.hasAttribute(MEDIA_TIME_IS_LIVE)) {
      this.setAttribute("aria-label", verbs.SEEK_LIVE());
      this.removeAttribute("aria-disabled");
    } else {
      this.setAttribute("aria-label", verbs.PLAYING_LIVE());
      this.setAttribute("aria-disabled", "true");
    }
  }
  handleClick() {
    if (!this.hasAttribute(MEDIA_PAUSED) && this.hasAttribute(MEDIA_TIME_IS_LIVE))
      return;
    this.dispatchEvent(
      new Window.CustomEvent(MEDIA_SEEK_TO_LIVE_REQUEST, { composed: true, bubbles: true })
    );
    if (this.hasAttribute(MEDIA_PAUSED)) {
      this.dispatchEvent(
        new Window.CustomEvent(MEDIA_PLAY_REQUEST, { composed: true, bubbles: true })
      );
    }
  }
};
if (!Window.customElements.get("media-live-button")) {
  Window.customElements.define("media-live-button", MediaLiveButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-mute-button.js
var offIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`;
var lowIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`;
var highIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;
var slotTemplate7 = Document.createElement("template");
slotTemplate7.innerHTML = `
  <style>
  ${""}
  :host(:not([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}])) slot:not([name=high]) > *, 
  :host(:not([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}])) ::slotted(:not([slot=high])),
  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=high]) slot:not([name=high]) > *, 
  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=high]) ::slotted(:not([slot=high])) {
    display: none !important;
  }

  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=off]) slot:not([name=off]) > *, 
  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=off]) ::slotted(:not([slot=off])) {
    display: none !important;
  }

  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=low]) slot:not([name=low]) > *, 
  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=low]) ::slotted(:not([slot=low])) {
    display: none !important;
  }

  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=medium]) slot:not([name=medium]) > *, 
  :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=medium]) ::slotted(:not([slot=medium])) {
    display: none !important;
  }
  </style>

  <slot name="off">${offIcon}</slot>
  <slot name="low">${lowIcon}</slot>
  <slot name="medium">${lowIcon}</slot>
  <slot name="high">${highIcon}</slot>
`;
var updateAriaLabel4 = (el) => {
  const muted = el.getAttribute(MediaUIAttributes.MEDIA_VOLUME_LEVEL) === "off";
  const label = muted ? verbs.UNMUTE() : verbs.MUTE();
  el.setAttribute("aria-label", label);
};
var MediaMuteButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_VOLUME_LEVEL];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate7, ...options });
  }
  connectedCallback() {
    updateAriaLabel4(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_VOLUME_LEVEL) {
      updateAriaLabel4(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    const eventName = this.getAttribute(MediaUIAttributes.MEDIA_VOLUME_LEVEL) === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
    this.dispatchEvent(
      new Window.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!Window.customElements.get("media-mute-button")) {
  Window.customElements.define("media-mute-button", MediaMuteButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-pip-button.js
var pipIcon = `<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;
var slotTemplate8 = Document.createElement("template");
slotTemplate8.innerHTML = `
  <style>
  :host([${MediaUIAttributes.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${MediaUIAttributes.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none !important;
  }

  ${""}
  :host(:not([${MediaUIAttributes.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${MediaUIAttributes.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none !important;
  }
  </style>

  <slot name="enter">${pipIcon}</slot>
  <slot name="exit">${pipIcon}</slot>
`;
var updateAriaLabel5 = (el) => {
  const isPip = el.getAttribute(MediaUIAttributes.MEDIA_IS_PIP) != null;
  const label = isPip ? verbs.EXIT_PIP() : verbs.ENTER_PIP();
  el.setAttribute("aria-label", label);
};
var MediaPipButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_IS_PIP, MediaUIAttributes.MEDIA_PIP_UNAVAILABLE];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate8, ...options });
  }
  connectedCallback() {
    updateAriaLabel5(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_IS_PIP) {
      updateAriaLabel5(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    const eventName = this.getAttribute(MediaUIAttributes.MEDIA_IS_PIP) != null ? MediaUIEvents.MEDIA_EXIT_PIP_REQUEST : MediaUIEvents.MEDIA_ENTER_PIP_REQUEST;
    this.dispatchEvent(
      new Window.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!Window.customElements.get("media-pip-button")) {
  Window.customElements.define("media-pip-button", MediaPipButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-play-button.js
var playIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`;
var pauseIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;
var slotTemplate9 = Document.createElement("template");
slotTemplate9.innerHTML = `
  <style>
  :host([${MediaUIAttributes.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${MediaUIAttributes.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none !important;
  }

  :host(:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${MediaUIAttributes.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none !important;
  }
  </style>

  <slot name="play">${playIcon}</slot>
  <slot name="pause">${pauseIcon}</slot>
`;
var updateAriaLabel6 = (el) => {
  const paused = el.getAttribute(MediaUIAttributes.MEDIA_PAUSED) != null;
  const label = paused ? verbs.PLAY() : verbs.PAUSE();
  el.setAttribute("aria-label", label);
};
var MediaPlayButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_PAUSED];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate9, ...options });
  }
  connectedCallback() {
    updateAriaLabel6(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_PAUSED) {
      updateAriaLabel6(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    const eventName = this.getAttribute(MediaUIAttributes.MEDIA_PAUSED) != null ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(
      new Window.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!Window.customElements.get("media-play-button")) {
  Window.customElements.define("media-play-button", MediaPlayButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-playback-rate-button.js
var DEFAULT_RATES = [1, 1.25, 1.5, 1.75, 2];
var DEFAULT_RATE = 1;
var slotTemplate10 = Document.createElement("template");
slotTemplate10.innerHTML = `
  <span id="container"></span>
`;
var MediaPlaybackRateButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      "rates"
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate10, ...options });
    this._rates = DEFAULT_RATES;
    this.container = this.shadowRoot.querySelector("#container");
    this.container.innerHTML = `${DEFAULT_RATE}x`;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "rates") {
      const newRates = (newValue != null ? newValue : "").trim().split(/\s*,?\s+/).map((str) => Number(str)).filter((num) => !Number.isNaN(num)).sort((a, b) => a - b);
      this._rates = newRates.length ? newRates : DEFAULT_RATES;
      return;
    }
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE) {
      const newPlaybackRate = newValue ? +newValue : Number.NaN;
      const playbackRate = !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE;
      this.container.innerHTML = `${playbackRate}x`;
      this.setAttribute("aria-label", nouns.PLAYBACK_RATE({ playbackRate }));
      return;
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  handleClick() {
    var _a, _b;
    const currentRate = +this.getAttribute(MediaUIAttributes.MEDIA_PLAYBACK_RATE) || DEFAULT_RATE;
    const detail = (_b = (_a = this._rates.find((r) => r > currentRate)) != null ? _a : this._rates[0]) != null ? _b : DEFAULT_RATE;
    const evt = new Window.CustomEvent(
      MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
      { composed: true, bubbles: true, detail }
    );
    this.dispatchEvent(evt);
  }
};
if (!Window.customElements.get("media-playback-rate-button")) {
  Window.customElements.define("media-playback-rate-button", MediaPlaybackRateButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-poster-image.js
var template7 = Document.createElement("template");
template7.innerHTML = `
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-background-position, var(--media-object-position, center));
      background-size: var(--media-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img aria-hidden="true" id="image"/>
`;
var unsetBackgroundImage = (el) => {
  el.style.removeProperty("background-image");
};
var setBackgroundImage = (el, image) => {
  el.style["background-image"] = `url('${image}')`;
};
var MediaPosterImage = class extends Window.HTMLElement {
  static get observedAttributes() {
    return ["placeholder-src", "src"];
  }
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template7.content.cloneNode(true));
    }
    this.image = this.shadowRoot.querySelector("#image");
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName === "src") {
      if (newValue == null) {
        this.image.removeAttribute("src");
      } else {
        this.image.setAttribute("src", newValue);
      }
    }
    if (attrName === "placeholder-src") {
      if (newValue == null) {
        unsetBackgroundImage(this.image);
      } else {
        setBackgroundImage(this.image, newValue);
      }
    }
  }
};
if (!Window.customElements.get("media-poster-image")) {
  Window.customElements.define("media-poster-image", MediaPosterImage);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-seek-backward-button.js
var DEFAULT_SEEK_OFFSET3 = "30";
var backwardIcon = `<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${DEFAULT_SEEK_OFFSET3}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`;
var slotTemplate11 = Document.createElement("template");
slotTemplate11.innerHTML = `  
  <slot name="backward">${backwardIcon}</slot>
`;
var DEFAULT_TIME3 = 0;
var updateAriaLabel7 = (el) => {
  const seekOffset = Math.abs(+el.getAttribute("seek-offset"));
  const label = verbs.SEEK_BACK_N_SECS({ seekOffset });
  el.setAttribute("aria-label", label);
};
var updateSeekIconValue2 = (el) => {
  const svg = getSlotted(el, "backward");
  const value = el.getAttribute("seek-offset");
  updateIconText(svg, value);
};
var MediaSeekBackwardButton = class extends media_chrome_button_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "seek-offset",
      MediaUIAttributes.MEDIA_CURRENT_TIME
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate11, ...options });
  }
  connectedCallback() {
    if (!this.hasAttribute("seek-offset")) {
      this.setAttribute("seek-offset", DEFAULT_SEEK_OFFSET3);
    }
    updateAriaLabel7(this);
    updateSeekIconValue2(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName === "seek-offset") {
      if (newValue == void 0) {
        this.setAttribute("seek-offset", DEFAULT_SEEK_OFFSET3);
      }
      updateSeekIconValue2(this);
      updateAriaLabel7(this);
    }
    super.attributeChangedCallback(attrName, _oldValue, newValue);
  }
  handleClick() {
    const currentTimeStr = this.getAttribute(
      MediaUIAttributes.MEDIA_CURRENT_TIME
    );
    const seekOffset = +this.getAttribute("seek-offset");
    const currentTime = currentTimeStr && !Number.isNaN(+currentTimeStr) ? +currentTimeStr : DEFAULT_TIME3;
    const detail = Math.max(currentTime - seekOffset, 0);
    const evt = new Window.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
};
if (!Window.customElements.get("media-seek-backward-button")) {
  Window.customElements.define("media-seek-backward-button", MediaSeekBackwardButton);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-preview-time-display.js
var __accessCheck11 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet11 = (obj, member, getter) => {
  __accessCheck11(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd11 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet11 = (obj, member, value, setter) => {
  __accessCheck11(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot4;
var MediaPreviewTimeDisplay = class extends media_text_display_default {
  constructor() {
    super();
    __privateAdd11(this, _slot4, void 0);
    __privateSet11(this, _slot4, this.shadowRoot.querySelector("slot"));
    __privateGet11(this, _slot4).textContent = formatTime(0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_PREVIEW_TIME];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_PREVIEW_TIME && newValue != null) {
      __privateGet11(this, _slot4).textContent = formatTime(newValue);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
};
_slot4 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-preview-time-display")) {
  Window.customElements.define("media-preview-time-display", MediaPreviewTimeDisplay);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-preview-thumbnail.js
var __accessCheck12 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet12 = (obj, member, getter) => {
  __accessCheck12(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd12 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet12 = (obj, member, value, setter) => {
  __accessCheck12(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController6;
var template8 = Document.createElement("template");
template8.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async" />
`;
var MediaPreviewThumbnail = class extends Window.HTMLElement {
  constructor() {
    super();
    __privateAdd12(this, _mediaController6, void 0);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template8.content.cloneNode(true));
    }
  }
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      "time",
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    ];
  }
  connectedCallback() {
    var _a, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet12(this, _mediaController6, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet12(this, _mediaController6)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = __privateGet12(this, _mediaController6)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet12(this, _mediaController6, null);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if ([
      "time",
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    ].includes(attrName)) {
      this.update();
    }
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a = __privateGet12(this, _mediaController6)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
        __privateSet12(this, _mediaController6, null);
      }
      if (newValue) {
        __privateSet12(this, _mediaController6, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet12(this, _mediaController6)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  update() {
    const mediaPreviewCoordsStr = this.getAttribute(
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    );
    const mediaPreviewImage = this.getAttribute(
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE
    );
    if (!(mediaPreviewCoordsStr && mediaPreviewImage))
      return;
    const [x, y, w, h] = mediaPreviewCoordsStr.split(/\s+/).map((coord) => +coord);
    const src = mediaPreviewImage.split("#")[0];
    const computedStyle = getComputedStyle(this);
    const { maxWidth, maxHeight, minWidth, minHeight } = computedStyle;
    const maxRatio = Math.min(parseInt(maxWidth) / w, parseInt(maxHeight) / h);
    const minRatio = Math.max(parseInt(minWidth) / w, parseInt(minHeight) / h);
    const isScalingDown = maxRatio < 1;
    const scale = isScalingDown ? maxRatio : minRatio > 1 ? minRatio : 1;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    const imgStyle = getOrInsertCSSRule(this.shadowRoot, "img").style;
    const img = this.shadowRoot.querySelector("img");
    const extremum = isScalingDown ? "min" : "max";
    style.setProperty(`${extremum}-width`, "initial", "important");
    style.setProperty(`${extremum}-height`, "initial", "important");
    style.width = `${w * scale}px`;
    style.height = `${h * scale}px`;
    const resize = () => {
      imgStyle.width = `${this.imgWidth * scale}px`;
      imgStyle.height = `${this.imgHeight * scale}px`;
      imgStyle.display = "block";
    };
    if (img.src !== src) {
      img.onload = () => {
        this.imgWidth = img.naturalWidth;
        this.imgHeight = img.naturalHeight;
        resize();
      };
      img.src = src;
      resize();
    }
    resize();
    imgStyle.transform = `translate(-${x * scale}px, -${y * scale}px)`;
  }
};
_mediaController6 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-preview-thumbnail")) {
  Window.customElements.define("media-preview-thumbnail", MediaPreviewThumbnail);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-time-range.js
var __accessCheck13 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet13 = (obj, member, getter) => {
  __accessCheck13(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd13 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet13 = (obj, member, value, setter) => {
  __accessCheck13(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod2 = (obj, member, method) => {
  __accessCheck13(obj, member, "access private method");
  return method;
};
var _boxes;
var _previewBox;
var _currentBox;
var _boxPaddingLeft;
var _boxPaddingRight;
var _getBoxPosition;
var getBoxPosition_fn;
var _pointermoveHandler;
var _rangeEntered;
var _offRangeHandler;
var _trackMouse;
var _stopTrackingMouse;
var _rangepointermoveHandler;
var _enableBoxes;
var enableBoxes_fn;
var _disableBoxes;
var disableBoxes_fn;
var DEFAULT_MISSING_TIME_PHRASE2 = "video not loaded, unknown time.";
var updateAriaValueText2 = (el) => {
  const range = el.range;
  const currentTimePhrase = formatAsTimePhrase(+range.value);
  const totalTimePhrase = formatAsTimePhrase(+range.max);
  const fullPhrase = !(currentTimePhrase && totalTimePhrase) ? DEFAULT_MISSING_TIME_PHRASE2 : `${currentTimePhrase} of ${totalTimePhrase}`;
  range.setAttribute("aria-valuetext", fullPhrase);
};
var template9 = Document.createElement("template");
template9.innerHTML = `
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #preview-rail,
    #current-rail {
      ${""}
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      ${""}
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      ${""}
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      ${""}
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      ${""}
    </slot>
  </div>
`;
var MediaTimeRange = class extends media_chrome_range_default {
  constructor() {
    super();
    __privateAdd13(this, _getBoxPosition);
    __privateAdd13(this, _enableBoxes);
    __privateAdd13(this, _disableBoxes);
    __privateAdd13(this, _boxes, void 0);
    __privateAdd13(this, _previewBox, void 0);
    __privateAdd13(this, _currentBox, void 0);
    __privateAdd13(this, _boxPaddingLeft, void 0);
    __privateAdd13(this, _boxPaddingRight, void 0);
    __privateAdd13(this, _pointermoveHandler, (evt) => {
      if ([...__privateGet13(this, _boxes)].some((b) => evt.composedPath().includes(b)))
        return;
      this.updatePointerBar(evt);
      const duration = +this.getAttribute(MediaUIAttributes.MEDIA_DURATION);
      if (!duration)
        return;
      const rangeRect = this.range.getBoundingClientRect();
      let mouseRatio = (evt.clientX - rangeRect.left) / rangeRect.width;
      mouseRatio = Math.max(0, Math.min(1, mouseRatio));
      const boxPos = __privateMethod2(this, _getBoxPosition, getBoxPosition_fn).call(this, __privateGet13(this, _previewBox), mouseRatio);
      const { style } = getOrInsertCSSRule(
        this.shadowRoot,
        "#preview-rail"
      );
      style.transform = `translateX(${boxPos})`;
      const detail = mouseRatio * duration;
      const mediaPreviewEvt = new Window.CustomEvent(
        MediaUIEvents.MEDIA_PREVIEW_REQUEST,
        { composed: true, bubbles: true, detail }
      );
      this.dispatchEvent(mediaPreviewEvt);
    });
    __privateAdd13(this, _rangeEntered, false);
    __privateAdd13(this, _offRangeHandler, (evt) => {
      if (!evt.composedPath().includes(this) || [...__privateGet13(this, _boxes)].some((b) => evt.composedPath().includes(b))) {
        Window.removeEventListener("pointermove", __privateGet13(this, _offRangeHandler));
        __privateSet13(this, _rangeEntered, false);
        __privateGet13(this, _stopTrackingMouse).call(this);
      }
    });
    __privateAdd13(this, _trackMouse, () => {
      Window.addEventListener("pointermove", __privateGet13(this, _pointermoveHandler), false);
    });
    __privateAdd13(this, _stopTrackingMouse, () => {
      Window.removeEventListener("pointermove", __privateGet13(this, _pointermoveHandler));
      const endEvt = new Window.CustomEvent(
        MediaUIEvents.MEDIA_PREVIEW_REQUEST,
        { composed: true, bubbles: true, detail: null }
      );
      this.dispatchEvent(endEvt);
    });
    __privateAdd13(this, _rangepointermoveHandler, () => {
      const mediaDurationStr = this.getAttribute(
        MediaUIAttributes.MEDIA_DURATION
      );
      if (!__privateGet13(this, _rangeEntered) && mediaDurationStr) {
        __privateSet13(this, _rangeEntered, true);
        __privateGet13(this, _trackMouse).call(this);
        Window.addEventListener("pointermove", __privateGet13(this, _offRangeHandler), false);
      }
    });
    this.container.appendChild(template9.content.cloneNode(true));
    this.range.addEventListener("input", () => {
      cancelAnimationFrame(this._refreshId);
      const newTime = this.range.value;
      const detail = newTime;
      const evt = new Window.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
        composed: true,
        bubbles: true,
        detail
      });
      this.dispatchEvent(evt);
    });
    this._refreshBar = () => {
      const delta = (performance.now() - this._updateTimestamp) / 1e3;
      this.range.value = this.mediaCurrentTime + delta * this.mediaPlaybackRate;
      this.updateBar();
      this.updateCurrentBox();
      this._refreshId = requestAnimationFrame(this._refreshBar);
    };
    __privateSet13(this, _boxes, this.shadowRoot.querySelectorAll('[part~="box"]'));
    __privateSet13(this, _previewBox, this.shadowRoot.querySelector('[part~="preview-box"]'));
    __privateSet13(this, _currentBox, this.shadowRoot.querySelector('[part~="current-box"]'));
    const computedStyle = getComputedStyle(this);
    __privateSet13(this, _boxPaddingLeft, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-left")
    ));
    __privateSet13(this, _boxPaddingRight, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-right")
    ));
    __privateMethod2(this, _enableBoxes, enableBoxes_fn).call(this);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "thumbnails",
      "disabled",
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_DURATION,
      MediaUIAttributes.MEDIA_SEEKABLE,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_TIME,
      MediaUIAttributes.MEDIA_BUFFERED,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      MediaUIAttributes.MEDIA_LOADING
    ];
  }
  connectedCallback() {
    this.range.setAttribute("aria-label", nouns.SEEK());
    super.connectedCallback();
  }
  disconnectedCallback() {
    cancelAnimationFrame(this._refreshId);
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e;
    if (attrName === MediaUIAttributes.MEDIA_CURRENT_TIME || attrName === MediaUIAttributes.MEDIA_PAUSED || attrName === MediaUIAttributes.MEDIA_LOADING) {
      this._updateTimestamp = performance.now();
      this.range.value = this.mediaCurrentTime;
      updateAriaValueText2(this);
      this.updateBar();
      this.updateCurrentBox();
      cancelAnimationFrame(this._refreshId);
      if (!this.mediaPaused && !this.mediaLoading) {
        this._refreshId = requestAnimationFrame(this._refreshBar);
      }
    }
    if (attrName === MediaUIAttributes.MEDIA_DURATION) {
      this.range.max = (_b = (_a = this.mediaSeekableEnd) != null ? _a : this.mediaDuration) != null ? _b : 1e3;
      updateAriaValueText2(this);
      this.updateBar();
      this.updateCurrentBox();
    }
    if (attrName === MediaUIAttributes.MEDIA_SEEKABLE) {
      this.range.min = (_c = this.mediaSeekableStart) != null ? _c : 0;
      this.range.max = (_e = (_d = this.mediaSeekableEnd) != null ? _d : this.mediaDuration) != null ? _e : 1e3;
      updateAriaValueText2(this);
      this.updateBar();
    }
    if (attrName === MediaUIAttributes.MEDIA_BUFFERED) {
      this.updateBar();
    }
    if (attrName === "disabled") {
      if (newValue == null) {
        __privateMethod2(this, _enableBoxes, enableBoxes_fn).call(this);
      } else {
        __privateMethod2(this, _disableBoxes, disableBoxes_fn).call(this);
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  get mediaPaused() {
    return this.hasAttribute(MediaUIAttributes.MEDIA_PAUSED);
  }
  get mediaLoading() {
    return this.hasAttribute(MediaUIAttributes.MEDIA_LOADING);
  }
  get mediaDuration() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_DURATION);
    return attrVal != null ? +attrVal : void 0;
  }
  get mediaCurrentTime() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_CURRENT_TIME);
    return attrVal != null ? +attrVal : void 0;
  }
  get mediaPlaybackRate() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_PLAYBACK_RATE);
    return attrVal != null ? +attrVal : 1;
  }
  get mediaBuffered() {
    const buffered = this.getAttribute(MediaUIAttributes.MEDIA_BUFFERED);
    if (!buffered)
      return [];
    return buffered.split(" ").map((timePair) => timePair.split(":").map((timeStr) => +timeStr));
  }
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  get mediaSeekableEnd() {
    var _a;
    const [, end] = (_a = this.mediaSeekable) != null ? _a : [];
    return end;
  }
  get mediaSeekableStart() {
    var _a;
    const [start] = (_a = this.mediaSeekable) != null ? _a : [];
    return start;
  }
  getBarColors() {
    var _a;
    let colorsArray = super.getBarColors();
    const { range } = this;
    const relativeMax = range.max - range.min;
    const buffered = this.mediaBuffered;
    if (!buffered.length || !Number.isFinite(relativeMax) || relativeMax <= 0) {
      return colorsArray;
    }
    const currentTime = this.mediaCurrentTime;
    const [, bufferedEnd = range.min] = (_a = buffered.find(
      ([start, end]) => start <= currentTime && currentTime <= end
    )) != null ? _a : [];
    const relativeBufferedEnd = bufferedEnd - range.min;
    const buffPercent = relativeBufferedEnd / relativeMax * 100;
    colorsArray.splice(1, 0, [
      "var(--media-time-buffered-color, rgb(255 255 255 / .4))",
      buffPercent
    ]);
    return colorsArray;
  }
  updateCurrentBox() {
    if (!__privateGet13(this, _currentBox).assignedElements().length)
      return;
    const boxRatio = this.range.value / (this.range.max - this.range.min);
    const boxPos = __privateMethod2(this, _getBoxPosition, getBoxPosition_fn).call(this, __privateGet13(this, _currentBox), boxRatio);
    const { style } = getOrInsertCSSRule(
      this.shadowRoot,
      "#current-rail"
    );
    style.transform = `translateX(${boxPos})`;
  }
};
_boxes = /* @__PURE__ */ new WeakMap();
_previewBox = /* @__PURE__ */ new WeakMap();
_currentBox = /* @__PURE__ */ new WeakMap();
_boxPaddingLeft = /* @__PURE__ */ new WeakMap();
_boxPaddingRight = /* @__PURE__ */ new WeakMap();
_getBoxPosition = /* @__PURE__ */ new WeakSet();
getBoxPosition_fn = function(box, ratio) {
  var _a;
  let position = `${ratio * 100 * 100}%`;
  const boxWidth = box.offsetWidth;
  if (!boxWidth)
    return position;
  const bounds = (_a = this.getAttribute("bounds") ? closestComposedNode(this, `#${this.getAttribute("bounds")}`) : this.parentElement) != null ? _a : this;
  const rangeRect = this.range.getBoundingClientRect();
  const mediaBoundsRect = bounds.getBoundingClientRect();
  const boxMin = (__privateGet13(this, _boxPaddingLeft) - (rangeRect.left - mediaBoundsRect.left - boxWidth / 2)) / rangeRect.width * 100;
  const boxMax = (mediaBoundsRect.right - rangeRect.left - boxWidth / 2 - __privateGet13(this, _boxPaddingRight)) / rangeRect.width * 100;
  if (!Number.isNaN(boxMin))
    position = `max(${boxMin * 100}%, ${position})`;
  if (!Number.isNaN(boxMax))
    position = `min(${position}, ${boxMax * 100}%)`;
  return position;
};
_pointermoveHandler = /* @__PURE__ */ new WeakMap();
_rangeEntered = /* @__PURE__ */ new WeakMap();
_offRangeHandler = /* @__PURE__ */ new WeakMap();
_trackMouse = /* @__PURE__ */ new WeakMap();
_stopTrackingMouse = /* @__PURE__ */ new WeakMap();
_rangepointermoveHandler = /* @__PURE__ */ new WeakMap();
_enableBoxes = /* @__PURE__ */ new WeakSet();
enableBoxes_fn = function() {
  this.addEventListener("pointermove", __privateGet13(this, _rangepointermoveHandler), false);
};
_disableBoxes = /* @__PURE__ */ new WeakSet();
disableBoxes_fn = function() {
  Window.removeEventListener("pointermove", __privateGet13(this, _offRangeHandler));
  this.removeEventListener("pointermove", __privateGet13(this, _rangepointermoveHandler));
  __privateSet13(this, _rangeEntered, false);
  __privateGet13(this, _stopTrackingMouse).call(this);
};
if (!Window.customElements.get("media-time-range")) {
  Window.customElements.define("media-time-range", MediaTimeRange);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-loading-indicator.js
var __accessCheck14 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet14 = (obj, member, getter) => {
  __accessCheck14(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd14 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet14 = (obj, member, value, setter) => {
  __accessCheck14(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController7;
var template10 = Document.createElement("template");
var loadingIndicatorIcon = `
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;
template10.innerHTML = `
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: 1;
  transition: opacity 0.15s;
}

:host(:not([is-loading])) slot[name=loading] > *, 
:host(:not([is-loading])) ::slotted([slot=loading]) {
  opacity: 0;
}

:host(:not([is-loading])) #status {
  display: none;
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 100px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="loading">${loadingIndicatorIcon}</slot>
<div id="status" role="status" aria-live="polite">${nouns.MEDIA_LOADING()}</div>
`;
var DEFAULT_LOADING_DELAY = 500;
var MediaLoadingIndicator = class extends Window.HTMLElement {
  constructor() {
    super();
    __privateAdd14(this, _mediaController7, void 0);
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const indicatorHTML = template10.content.cloneNode(true);
      shadow.appendChild(indicatorHTML);
    }
  }
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_LOADING,
      "loading-delay"
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b, _c, _d, _e, _f;
    if (attrName === MediaUIAttributes.MEDIA_LOADING || attrName === MediaUIAttributes.MEDIA_PAUSED) {
      const isPaused = this.getAttribute(MediaUIAttributes.MEDIA_PAUSED) != void 0;
      const isMediaLoading = this.getAttribute(MediaUIAttributes.MEDIA_LOADING) != void 0;
      const isLoading = !isPaused && isMediaLoading;
      if (!isLoading) {
        if (this.loadingDelayHandle) {
          clearTimeout(this.loadingDelayHandle);
          this.loadingDelayHandle = void 0;
        }
        this.removeAttribute("is-loading");
      } else if (!this.loadingDelayHandle && isLoading) {
        const loadingDelay = +((_a = this.getAttribute("loading-delay")) != null ? _a : DEFAULT_LOADING_DELAY);
        this.loadingDelayHandle = setTimeout(() => {
          this.setAttribute("is-loading", "");
          this.loadingDelayHandle = void 0;
        }, loadingDelay);
      }
    } else if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_c = (_b = __privateGet14(this, _mediaController7)) == null ? void 0 : _b.unassociateElement) == null ? void 0 : _c.call(_b, this);
        __privateSet14(this, _mediaController7, null);
      }
      if (newValue) {
        __privateSet14(this, _mediaController7, (_d = this.getRootNode()) == null ? void 0 : _d.getElementById(newValue));
        (_f = (_e = __privateGet14(this, _mediaController7)) == null ? void 0 : _e.associateElement) == null ? void 0 : _f.call(_e, this);
      }
    }
  }
  connectedCallback() {
    var _a, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet14(this, _mediaController7, (_a = this.getRootNode()) == null ? void 0 : _a.getElementById(mediaControllerId));
      (_c = (_b = __privateGet14(this, _mediaController7)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a, _b;
    if (this.loadingDelayHandle) {
      clearTimeout(this.loadingDelayHandle);
      this.loadingDelayHandle = void 0;
    }
    (_b = (_a = __privateGet14(this, _mediaController7)) == null ? void 0 : _a.unassociateElement) == null ? void 0 : _b.call(_a, this);
    __privateSet14(this, _mediaController7, null);
  }
};
_mediaController7 = /* @__PURE__ */ new WeakMap();
if (!Window.customElements.get("media-loading-indicator")) {
  Window.customElements.define("media-loading-indicator", MediaLoadingIndicator);
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-volume-range.js
var DEFAULT_MAX_VOLUME = 100;
var toVolume = (el) => {
  var _a;
  const muted = el.getAttribute(MediaUIAttributes.MEDIA_MUTED) != null;
  if (muted)
    return 0;
  const volume = +((_a = el.getAttribute(MediaUIAttributes.MEDIA_VOLUME)) != null ? _a : 1);
  return Math.round(volume * el.range.max);
};
var formatAsPercentString = ({ value, max }) => `${Math.round(value / max * 100)}%`;
var MediaVolumeRange = class extends media_chrome_range_default {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_VOLUME,
      MediaUIAttributes.MEDIA_MUTED,
      MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE
    ];
  }
  constructor() {
    super();
    this.range.max = DEFAULT_MAX_VOLUME;
    this.range.addEventListener("input", () => {
      const newVolume = this.range.value / this.range.max;
      const detail = newVolume;
      const evt = new Window.CustomEvent(MediaUIEvents.MEDIA_VOLUME_REQUEST, {
        composed: true,
        bubbles: true,
        detail
      });
      this.dispatchEvent(evt);
    });
  }
  connectedCallback() {
    this.range.setAttribute("aria-label", nouns.VOLUME());
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_VOLUME || attrName === MediaUIAttributes.MEDIA_MUTED) {
      const newVolume = toVolume(this);
      this.range.value = newVolume;
      this.range.setAttribute(
        "aria-valuetext",
        formatAsPercentString(this.range)
      );
      this.updateBar();
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
};
if (!Window.customElements.get("media-volume-range")) {
  Window.customElements.define("media-volume-range", MediaVolumeRange);
}

// ../groundbreak-player/node_modules/media-chrome/dist/index.js
var MediaChrome = class extends media_controller_default {
};
if (!Window.customElements.get("media-chrome")) {
  Window.customElements.define("media-chrome", MediaChrome);
}
var MediaContainer2 = class extends media_controller_default {
  constructor() {
    super();
    console.warn(
      "MediaChrome: <media-container> is deprecated. Use <media-controller>."
    );
  }
};
if (!Window.customElements.get("media-container")) {
  Window.customElements.define("media-container", MediaContainer2);
}

// ../groundbreak-player/node_modules/media-chrome/dist/experimental/media-chrome-listbox.js
var __accessCheck15 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet15 = (obj, member, getter) => {
  __accessCheck15(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd15 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet15 = (obj, member, value, setter) => {
  __accessCheck15(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod3 = (obj, member, method) => {
  __accessCheck15(obj, member, "access private method");
  return method;
};
var _keysSoFar;
var _clearKeysTimeout;
var _slot5;
var __assignedElements;
var _metaPressed;
var _assignedElements;
var assignedElements_get;
var assignedElements_set;
var _items;
var items_get;
var _clickListener2;
var _handleKeyListener;
var handleKeyListener_fn;
var _keyupListener2;
var _keydownListener2;
var _getItem;
var getItem_fn;
var _selectItem;
var selectItem_fn;
var _searchItem;
var searchItem_fn;
var _clearKeysOnDelay;
var clearKeysOnDelay_fn;
var template11 = Document.createElement("template");
template11.innerHTML = `
<style>
  :host ul {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 1em) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    list-style: none;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0;
    padding: 0.5em;
  }

  ::slotted(media-chrome-listitem[tabindex="0"]:focus-visible),
  media-chrome-listitem[tabindex="0"]:focus-visible {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }

  ::slotted(media-chrome-listitem[aria-selected="true"]),
  media-chrome-listitem[aria-selected="true"] {
    background-color: var(--media-listbox-selected-background, rgb(122 122 184 / .8));
  }

  ::slotted(media-chrome-listitem:hover),
  media-chrome-listitem:hover {
    background-color: var(--media-listbox-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-listbox-hover-outline, none);
  }
</style>
<ul tabindex="0">
  <slot></slot>
</ul>
`;
var MediaChromeListbox = class extends Window.HTMLElement {
  constructor(options = {}) {
    super();
    __privateAdd15(this, _assignedElements);
    __privateAdd15(this, _items);
    __privateAdd15(this, _handleKeyListener);
    __privateAdd15(this, _getItem);
    __privateAdd15(this, _selectItem);
    __privateAdd15(this, _searchItem);
    __privateAdd15(this, _clearKeysOnDelay);
    __privateAdd15(this, _keysSoFar, "");
    __privateAdd15(this, _clearKeysTimeout, null);
    __privateAdd15(this, _slot5, void 0);
    __privateAdd15(this, __assignedElements, void 0);
    __privateAdd15(this, _metaPressed, false);
    __privateAdd15(this, _clickListener2, (e) => {
      this.handleClick(e);
    });
    __privateAdd15(this, _keyupListener2, (e) => {
      const { key } = e;
      if (key === "Escape") {
        this.removeEventListener("keyup", __privateGet15(this, _keyupListener2));
        return;
      }
      if (key === "Meta") {
        __privateSet15(this, _metaPressed, false);
        return;
      }
      __privateMethod3(this, _handleKeyListener, handleKeyListener_fn).call(this, e);
    });
    __privateAdd15(this, _keydownListener2, (e) => {
      const { key, altKey } = e;
      if (altKey) {
        this.removeEventListener("keyup", __privateGet15(this, _keyupListener2));
        return;
      }
      if (key === "Meta") {
        __privateSet15(this, _metaPressed, true);
        return;
      }
      if (this.keysUsed.includes(key)) {
        e.preventDefault();
      }
      if (__privateGet15(this, _metaPressed) && this.keysUsed.includes(key)) {
        __privateMethod3(this, _handleKeyListener, handleKeyListener_fn).call(this, e);
        return;
      }
      this.addEventListener("keyup", __privateGet15(this, _keyupListener2), { once: true });
    });
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const listboxHTML = template11.content.cloneNode(true);
      this.nativeEl = listboxHTML;
      let slotTemplate13 = options.slotTemplate;
      if (!slotTemplate13) {
        slotTemplate13 = Document.createElement("template");
        slotTemplate13.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      this.nativeEl.appendChild(slotTemplate13.content.cloneNode(true));
      shadow.appendChild(listboxHTML);
    }
    __privateSet15(this, _slot5, this.shadowRoot.querySelector("slot"));
    __privateGet15(this, _slot5).addEventListener("slotchange", () => {
      __privateSet15(this, _assignedElements, __privateGet15(this, _slot5).assignedElements({ flatten: true }), assignedElements_set);
      if (__privateGet15(this, _assignedElements, assignedElements_get).length === 1 && __privateGet15(this, _assignedElements, assignedElements_get)[0].nodeName.toLowerCase() === "slot") {
        __privateSet15(this, _assignedElements, __privateGet15(this, _assignedElements, assignedElements_get)[0].assignedElements({ flatten: true }), assignedElements_set);
      }
      const els = __privateGet15(this, _items, items_get);
      const activeEls = els.some((el) => el.getAttribute("tabindex") === "0");
      if (activeEls) {
        return;
      }
      let elToSelect = els.filter((el) => el.getAttribute("aria-selected") === "true")[0];
      if (!elToSelect) {
        elToSelect = els[0];
      }
      if (elToSelect) {
        elToSelect.setAttribute("tabindex", 0);
        elToSelect.setAttribute("aria-selected", "true");
      }
    });
  }
  static get observedAttributes() {
    return ["disabled", MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  get selectedOptions() {
    return __privateGet15(this, _items, items_get).filter((el) => el.getAttribute("aria-selected") === "true");
  }
  get value() {
    return this.selectedOptions[0].value || this.selectedOptions[0].textContent;
  }
  set value(newValue) {
    const item = __privateGet15(this, _items, items_get).find((el) => el.value === newValue || el.textContent === newValue);
    if (!item)
      return;
    __privateMethod3(this, _selectItem, selectItem_fn).call(this, item);
  }
  focus() {
    var _a;
    (_a = this.selectedOptions[0]) == null ? void 0 : _a.focus();
  }
  enable() {
    this.addEventListener("click", __privateGet15(this, _clickListener2));
    this.addEventListener("keydown", __privateGet15(this, _keydownListener2));
  }
  disable() {
    this.removeEventListener("click", __privateGet15(this, _clickListener2));
    this.removeEventListener("keyup", __privateGet15(this, _keyupListener2));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        const mediaControllerEl = Document.getElementById(oldValue);
        (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      }
      if (newValue) {
        const mediaControllerEl = Document.getElementById(newValue);
        (_b = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _b.call(mediaControllerEl, this);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }
  connectedCallback() {
    var _a;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listbox");
    }
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = Document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  disconnectedCallback() {
    var _a;
    this.disable();
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = Document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  get keysUsed() {
    return ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"];
  }
  handleSelection(e, toggle) {
    const item = __privateMethod3(this, _getItem, getItem_fn).call(this, e);
    if (!item)
      return;
    __privateMethod3(this, _selectItem, selectItem_fn).call(this, item, toggle);
  }
  handleMovement(e) {
    const { key } = e;
    const els = __privateGet15(this, _items, items_get);
    let currentOption = __privateMethod3(this, _getItem, getItem_fn).call(this, e);
    if (!currentOption) {
      currentOption = els.filter((el) => el.getAttribute("tabindex") === "0")[0];
    }
    let nextOption;
    switch (key) {
      case "ArrowDown":
        nextOption = currentOption.nextElementSibling;
        if (nextOption == null ? void 0 : nextOption.hasAttribute("disabled")) {
          nextOption = nextOption.nextElementSibling;
        }
        break;
      case "ArrowUp":
        nextOption = currentOption.previousElementSibling;
        if (nextOption == null ? void 0 : nextOption.hasAttribute("disabled")) {
          nextOption = nextOption.previousElementSibling;
        }
        break;
      case "Home":
        nextOption = els[0];
        break;
      case "End":
        nextOption = els[els.length - 1];
        break;
      default:
        nextOption = __privateMethod3(this, _searchItem, searchItem_fn).call(this, key);
        break;
    }
    if (nextOption) {
      els.forEach((el) => el.setAttribute("tabindex", "-1"));
      nextOption.setAttribute("tabindex", "0");
      nextOption.focus();
    }
  }
  handleClick(e) {
    const item = __privateMethod3(this, _getItem, getItem_fn).call(this, e);
    if (!item || item.hasAttribute("disabled"))
      return;
    __privateGet15(this, _items, items_get).forEach((el) => el.setAttribute("tabindex", "-1"));
    item.setAttribute("tabindex", "0");
    this.handleSelection(e, this.hasAttribute("aria-multiselectable") && this.getAttribute("aria-multiselectable") === "true");
  }
};
_keysSoFar = /* @__PURE__ */ new WeakMap();
_clearKeysTimeout = /* @__PURE__ */ new WeakMap();
_slot5 = /* @__PURE__ */ new WeakMap();
__assignedElements = /* @__PURE__ */ new WeakMap();
_metaPressed = /* @__PURE__ */ new WeakMap();
_assignedElements = /* @__PURE__ */ new WeakSet();
assignedElements_get = function() {
  if (!__privateGet15(this, __assignedElements)) {
    __privateSet15(this, __assignedElements, Array.from(this.shadowRoot.querySelectorAll("media-chrome-listitem")));
  }
  return __privateGet15(this, __assignedElements);
};
assignedElements_set = function(value) {
  __privateSet15(this, __assignedElements, value);
};
_items = /* @__PURE__ */ new WeakSet();
items_get = function() {
  return __privateGet15(this, _assignedElements, assignedElements_get).filter((el) => !el.hasAttribute("disabled"));
};
_clickListener2 = /* @__PURE__ */ new WeakMap();
_handleKeyListener = /* @__PURE__ */ new WeakSet();
handleKeyListener_fn = function(e) {
  const { key } = e;
  if (key === "Enter" || key === " ") {
    this.handleSelection(e, this.hasAttribute("aria-multiselectable") && this.getAttribute("aria-multiselectable") === "true");
  } else {
    this.handleMovement(e);
  }
};
_keyupListener2 = /* @__PURE__ */ new WeakMap();
_keydownListener2 = /* @__PURE__ */ new WeakMap();
_getItem = /* @__PURE__ */ new WeakSet();
getItem_fn = function(e) {
  const composedPath = e.composedPath();
  const index = composedPath.findIndex((el) => el.nodeName === "MEDIA-CHROME-LISTITEM");
  return composedPath[index];
};
_selectItem = /* @__PURE__ */ new WeakSet();
selectItem_fn = function(item, toggle) {
  if (!this.hasAttribute("aria-multiselectable") || this.getAttribute("aria-multiselectable") !== "true") {
    __privateGet15(this, _assignedElements, assignedElements_get).forEach((el) => el.setAttribute("aria-selected", "false"));
  }
  if (toggle) {
    const selected = item.getAttribute("aria-selected") === "true";
    if (selected) {
      item.setAttribute("aria-selected", "false");
    } else {
      item.setAttribute("aria-selected", "true");
    }
  } else {
    item.setAttribute("aria-selected", "true");
  }
  this.dispatchEvent(new Event("change"));
};
_searchItem = /* @__PURE__ */ new WeakSet();
searchItem_fn = function(key) {
  __privateMethod3(this, _clearKeysOnDelay, clearKeysOnDelay_fn).call(this);
  const els = __privateGet15(this, _items, items_get);
  const activeIndex = els.findIndex((el) => el.getAttribute("tabindex") === "0");
  __privateSet15(this, _keysSoFar, __privateGet15(this, _keysSoFar) + key);
  const repeatedKey = __privateGet15(this, _keysSoFar).split("").every((k) => k === key);
  const after = els.slice(activeIndex + (repeatedKey ? 1 : 0)).filter((el) => el.textContent.toLowerCase().startsWith(__privateGet15(this, _keysSoFar)));
  const before = els.slice(0, activeIndex - (repeatedKey ? 1 : 0)).filter((el) => el.textContent.toLowerCase().startsWith(__privateGet15(this, _keysSoFar)));
  let afterRepeated = [];
  let beforeRepeated = [];
  if (repeatedKey) {
    afterRepeated = els.slice(activeIndex + (repeatedKey ? 1 : 0)).filter((el) => el.textContent.startsWith(key));
    beforeRepeated = els.slice(0, activeIndex - (repeatedKey ? 1 : 0)).filter((el) => el.textContent.startsWith(key));
  }
  const returns = [...after, ...before, ...afterRepeated, ...beforeRepeated];
  return returns[0];
};
_clearKeysOnDelay = /* @__PURE__ */ new WeakSet();
clearKeysOnDelay_fn = function() {
  Window.clearTimeout(__privateGet15(this, _clearKeysTimeout));
  __privateSet15(this, _clearKeysTimeout, null);
  __privateSet15(this, _clearKeysTimeout, Window.setTimeout(() => {
    __privateSet15(this, _keysSoFar, "");
    __privateSet15(this, _clearKeysTimeout, null);
  }, 500));
};
if (!Window.customElements.get("media-chrome-listbox")) {
  Window.customElements.define("media-chrome-listbox", MediaChromeListbox);
}
var media_chrome_listbox_default = MediaChromeListbox;

// ../groundbreak-player/node_modules/media-chrome/dist/experimental/media-chrome-selectmenu.js
var __accessCheck16 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet16 = (obj, member, getter) => {
  __accessCheck16(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd16 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet16 = (obj, member, value, setter) => {
  __accessCheck16(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod4 = (obj, member, method) => {
  __accessCheck16(obj, member, "access private method");
  return method;
};
var _handleClick;
var _handleChange;
var _enabledState;
var _button;
var _buttonSlot;
var _listbox;
var _listboxSlot;
var _expanded;
var _keyupListener3;
var _keydownListener3;
var _documentClickHandler;
var _handleClick_;
var handleClick__fn;
var _handleChange_;
var handleChange__fn;
var _toggle;
var toggle_fn;
var _updateMenuPosition;
var updateMenuPosition_fn;
var _toggleExpanded;
var toggleExpanded_fn;
var template12 = Document.createElement("template");
template12.innerHTML = `
  <style>
  :host {
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name="listbox"]::slotted(*),
  [part=listbox] {
    position: absolute;
    left: 0;
    bottom: 100%;
    max-height: 300px;
    overflow: hidden auto;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;
var MediaChromeSelectMenu = class extends Window.HTMLElement {
  constructor() {
    var _a;
    super();
    __privateAdd16(this, _handleClick_);
    __privateAdd16(this, _handleChange_);
    __privateAdd16(this, _toggle);
    __privateAdd16(this, _updateMenuPosition);
    __privateAdd16(this, _toggleExpanded);
    __privateAdd16(this, _handleClick, void 0);
    __privateAdd16(this, _handleChange, void 0);
    __privateAdd16(this, _enabledState, true);
    __privateAdd16(this, _button, void 0);
    __privateAdd16(this, _buttonSlot, void 0);
    __privateAdd16(this, _listbox, void 0);
    __privateAdd16(this, _listboxSlot, void 0);
    __privateAdd16(this, _expanded, false);
    __privateAdd16(this, _keyupListener3, (e) => {
      const { key } = e;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet16(this, _keyupListener3));
        return;
      }
      const isButton = e.composedPath().includes(__privateGet16(this, _button));
      if (isButton && (key === "Enter" || key === " ")) {
        __privateGet16(this, _handleClick).call(this);
      } else if (key === "Escape" && !__privateGet16(this, _listboxSlot).hidden) {
        __privateMethod4(this, _toggle, toggle_fn).call(this);
      }
    });
    __privateAdd16(this, _keydownListener3, (e) => {
      const { metaKey, altKey, key } = e;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet16(this, _keyupListener3));
        return;
      }
      e.preventDefault();
      this.addEventListener("keyup", __privateGet16(this, _keyupListener3), { once: true });
    });
    __privateAdd16(this, _documentClickHandler, (e) => {
      if (e.composedPath().includes(this))
        return;
      if (!__privateGet16(this, _listboxSlot).hidden) {
        __privateMethod4(this, _toggle, toggle_fn).call(this);
      }
    });
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const buttonHTML = template12.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      shadow.appendChild(buttonHTML);
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
    __privateSet16(this, _handleClick, __privateMethod4(this, _handleClick_, handleClick__fn).bind(this));
    __privateSet16(this, _handleChange, __privateMethod4(this, _handleChange_, handleChange__fn).bind(this));
    (_a = this.init) == null ? void 0 : _a.call(this);
    __privateSet16(this, _button, this.shadowRoot.querySelector("[part=button]"));
    __privateSet16(this, _listbox, this.shadowRoot.querySelector("[part=listbox]"));
    __privateSet16(this, _buttonSlot, this.shadowRoot.querySelector("slot[name=button]"));
    __privateGet16(this, _buttonSlot).addEventListener("slotchange", () => {
      const newButton = __privateGet16(this, _buttonSlot).assignedElements()[0];
      if (!newButton)
        return;
      this.disable();
      __privateSet16(this, _button, newButton);
      __privateGet16(this, _button).preventClick = true;
      if (__privateGet16(this, _button).hasAttribute("disabled")) {
        __privateSet16(this, _enabledState, false);
      }
      if (__privateGet16(this, _enabledState)) {
        this.enable();
        __privateGet16(this, _button).setAttribute("aria-haspopup", "listbox");
      } else {
        this.disable();
      }
    });
    __privateSet16(this, _listboxSlot, this.shadowRoot.querySelector("slot[name=listbox]"));
    __privateGet16(this, _listboxSlot).addEventListener("slotchange", () => {
      this.disable();
      __privateSet16(this, _listbox, __privateGet16(this, _listboxSlot).assignedElements()[0] || __privateGet16(this, _listbox));
      this.enable();
    });
  }
  static get observedAttributes() {
    return [
      "disabled",
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  enable() {
    __privateGet16(this, _button).removeAttribute("disabled");
    __privateGet16(this, _button).addEventListener("click", __privateGet16(this, _handleClick));
    __privateGet16(this, _button).addEventListener("keydown", __privateGet16(this, _keydownListener3));
    __privateGet16(this, _listbox).addEventListener("keydown", __privateGet16(this, _keydownListener3));
    __privateMethod4(this, _toggleExpanded, toggleExpanded_fn).call(this);
    __privateGet16(this, _listbox).addEventListener("change", __privateGet16(this, _handleChange));
    Document.addEventListener("click", __privateGet16(this, _documentClickHandler));
  }
  disable() {
    __privateGet16(this, _button).setAttribute("disabled", "");
    __privateGet16(this, _button).removeEventListener("click", __privateGet16(this, _handleClick));
    __privateGet16(this, _button).removeEventListener("keydown", __privateGet16(this, _keydownListener3));
    __privateGet16(this, _button).removeEventListener("keyup", __privateGet16(this, _keyupListener3));
    __privateGet16(this, _listbox).removeEventListener("keydown", __privateGet16(this, _keydownListener3));
    __privateGet16(this, _listbox).removeEventListener("keyup", __privateGet16(this, _keyupListener3));
    __privateGet16(this, _listbox).addEventListener("change", __privateGet16(this, _handleChange));
    Document.removeEventListener("click", __privateGet16(this, _documentClickHandler));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        const mediaControllerEl = Document.getElementById(oldValue);
        (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
        __privateGet16(this, _listbox).removeAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER);
      }
      if (newValue) {
        const mediaControllerEl = Document.getElementById(newValue);
        (_b = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _b.call(mediaControllerEl, this);
        __privateGet16(this, _listbox).setAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER, newValue);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        __privateSet16(this, _enabledState, true);
        this.enable();
      } else {
        __privateSet16(this, _enabledState, false);
        this.disable();
      }
    }
  }
  connectedCallback() {
    var _a;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = Document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      __privateGet16(this, _listbox).setAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER, mediaControllerId);
    }
  }
  disconnectedCallback() {
    var _a;
    this.disable();
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = Document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      __privateGet16(this, _listbox).removeAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER);
    }
  }
  get keysUsed() {
    return ["Enter", "Escape", " ", "ArrowUp", "ArrowDown", "f", "c", "k", "m"];
  }
};
_handleClick = /* @__PURE__ */ new WeakMap();
_handleChange = /* @__PURE__ */ new WeakMap();
_enabledState = /* @__PURE__ */ new WeakMap();
_button = /* @__PURE__ */ new WeakMap();
_buttonSlot = /* @__PURE__ */ new WeakMap();
_listbox = /* @__PURE__ */ new WeakMap();
_listboxSlot = /* @__PURE__ */ new WeakMap();
_expanded = /* @__PURE__ */ new WeakMap();
_keyupListener3 = /* @__PURE__ */ new WeakMap();
_keydownListener3 = /* @__PURE__ */ new WeakMap();
_documentClickHandler = /* @__PURE__ */ new WeakMap();
_handleClick_ = /* @__PURE__ */ new WeakSet();
handleClick__fn = function() {
  __privateMethod4(this, _toggle, toggle_fn).call(this);
};
_handleChange_ = /* @__PURE__ */ new WeakSet();
handleChange__fn = function() {
  __privateMethod4(this, _toggle, toggle_fn).call(this, true);
};
_toggle = /* @__PURE__ */ new WeakSet();
toggle_fn = function(closeOnly) {
  __privateGet16(this, _listboxSlot).hidden = !__privateGet16(this, _listboxSlot).hidden || closeOnly;
  __privateMethod4(this, _toggleExpanded, toggleExpanded_fn).call(this, closeOnly);
  if (!__privateGet16(this, _listboxSlot).hidden) {
    __privateGet16(this, _listbox).focus();
    __privateMethod4(this, _updateMenuPosition, updateMenuPosition_fn).call(this);
  } else if (this.shadowRoot.activeElement === __privateGet16(this, _listbox) || __privateGet16(this, _listbox).contains(this.shadowRoot.activeElement)) {
    __privateGet16(this, _button).focus();
  }
};
_updateMenuPosition = /* @__PURE__ */ new WeakSet();
updateMenuPosition_fn = function() {
  var _a;
  if (__privateGet16(this, _listbox).offsetWidth === 0)
    return;
  const buttonRect = __privateGet16(this, _button).getBoundingClientRect();
  if (this.hasAttribute("media-controller") || __privateGet16(this, _button).hasAttribute("media-controller") || __privateGet16(this, _listbox).hasAttribute("media-controller")) {
    __privateGet16(this, _listbox).style.zIndex = "1";
    __privateGet16(this, _listbox).style.bottom = "unset";
    __privateGet16(this, _listbox).style.top = buttonRect.height + "px";
    return;
  }
  const bounds = (_a = this.getAttribute("bounds") ? closestComposedNode(this, `#${this.getAttribute("bounds")}`) : this.parentElement) != null ? _a : this;
  const boundsRect = bounds.getBoundingClientRect();
  const listboxRect = __privateGet16(this, _listbox).getBoundingClientRect();
  let position = -Math.max(buttonRect.x + listboxRect.width - boundsRect.right, 0);
  __privateGet16(this, _listbox).style.transform = `translateX(${position}px)`;
};
_toggleExpanded = /* @__PURE__ */ new WeakSet();
toggleExpanded_fn = function(closeOnly = false) {
  __privateSet16(this, _expanded, !__privateGet16(this, _expanded) || closeOnly);
  __privateGet16(this, _button).setAttribute("aria-expanded", __privateGet16(this, _expanded));
};
if (!Window.customElements.get("media-chrome-selectmenu")) {
  Window.customElements.define("media-chrome-selectmenu", MediaChromeSelectMenu);
}
var media_chrome_selectmenu_default = MediaChromeSelectMenu;

// ../groundbreak-player/node_modules/media-chrome/dist/experimental/media-chrome-listitem.js
var template13 = Document.createElement("template");
template13.innerHTML = `
<style>
  :host {
    display: list-item;
    line-height: 1em;
    padding: 0.5em;
    margin: 0em;
    cursor: pointer;
  }

  ::slotted:not(:focus-visible) {
    outline: none;
  }
</style>
<li>
  <slot></slot>
</li>
`;
var MediaChromeListitem = class extends Window.HTMLElement {
  static get observedAttributes() {
    return [
      "disabled",
      "aria-selected",
      "value",
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  constructor() {
    super();
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const listitemHTML = template13.content.cloneNode(true);
      this.nativeEl = listitemHTML;
      shadow.appendChild(listitemHTML);
    }
  }
  set value(value) {
    this.setAttribute("value", value);
  }
  get value() {
    return this.getAttribute("value");
  }
  enable() {
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", -1);
    }
    if (!this.hasAttribute("aria-selected")) {
      this.setAttribute("aria-selected", "false");
    }
  }
  disable() {
    this.removeAttribute("tabindex");
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        const mediaControllerEl = Document.getElementById(oldValue);
        (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
      }
      if (newValue) {
        const mediaControllerEl = Document.getElementById(newValue);
        (_b = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _b.call(mediaControllerEl, this);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }
  connectedCallback() {
    var _a;
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "option");
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = Document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.associateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  disconnectedCallback() {
    var _a;
    this.disable();
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      const mediaControllerEl = Document.getElementById(mediaControllerId);
      (_a = mediaControllerEl == null ? void 0 : mediaControllerEl.unassociateElement) == null ? void 0 : _a.call(mediaControllerEl, this);
    }
  }
  handleClick() {
  }
};
if (!Window.customElements.get("media-chrome-listitem")) {
  Window.customElements.define("media-chrome-listitem", MediaChromeListitem);
}

// ../groundbreak-player/node_modules/media-chrome/dist/experimental/media-captions-listbox.js
var __accessCheck17 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet17 = (obj, member, getter) => {
  __accessCheck17(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd17 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet17 = (obj, member, value, setter) => {
  __accessCheck17(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod5 = (obj, member, method) => {
  __accessCheck17(obj, member, "access private method");
  return method;
};
var _subs;
var _caps;
var _offOption;
var _captionsIndicator;
var _perTypeUpdate;
var perTypeUpdate_fn;
var _perTypeRender;
var perTypeRender_fn;
var _render;
var render_fn;
var _onChange;
var onChange_fn;
var captionsIndicatorInlineStyle = `
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  height: var(--media-captions-indicator-height, 1em);
  vertical-align: var(--media-captions-indicator-vertical-align, bottom);
  margin-inline-start: 1ch;
`;
var ccIcon = `
<svg style="${captionsIndicatorInlineStyle}" aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
var slotTemplate12 = Document.createElement("template");
slotTemplate12.innerHTML = `
  <style>
    media-chrome-listitem {
      white-space: var(--media-captions-listbox-white-space, nowrap);
    }

  </style>
  <slot hidden name="captions-indicator">${ccIcon}</slot>
`;
var compareTracks = (a, b) => {
  return a.label === b.label && a.language === b.language;
};
var MediaCaptionsListbox = class extends media_chrome_listbox_default {
  constructor() {
    super({ slotTemplate: slotTemplate12 });
    __privateAdd17(this, _perTypeUpdate);
    __privateAdd17(this, _perTypeRender);
    __privateAdd17(this, _render);
    __privateAdd17(this, _onChange);
    __privateAdd17(this, _subs, []);
    __privateAdd17(this, _caps, []);
    __privateAdd17(this, _offOption, void 0);
    __privateAdd17(this, _captionsIndicator, void 0);
    const offOption = Document.createElement("media-chrome-listitem");
    offOption.part.add("listitem");
    offOption.value = "off";
    offOption.textContent = "Off";
    __privateSet17(this, _offOption, offOption);
    const captionsIndicatorSlot = this.shadowRoot.querySelector('[name="captions-indicator"]');
    __privateSet17(this, _captionsIndicator, captionsIndicatorSlot.firstElementChild);
    captionsIndicatorSlot.addEventListener("slotchange", () => {
      let els = captionsIndicatorSlot.assignedElements();
      if (els.length === 1 && els[0].nodeName.toLowerCase() === "slot") {
        const assignedElements = els[0].assignedElements();
        if (assignedElements.length === 0) {
          __privateSet17(this, _captionsIndicator, els[0].firstElementChild);
        } else if (assignedElements.length === 1) {
          __privateSet17(this, _captionsIndicator, assignedElements[0]);
        }
      }
      if (!__privateGet17(this, _captionsIndicator)) {
        __privateSet17(this, _captionsIndicator, captionsIndicatorSlot.firstElementChild);
      }
      __privateSet17(this, _captionsIndicator, __privateGet17(this, _captionsIndicator).cloneNode(true));
      __privateGet17(this, _captionsIndicator).removeAttribute("slot");
      __privateGet17(this, _captionsIndicator).setAttribute("style", captionsIndicatorInlineStyle);
    });
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      "aria-multiselectable",
      MediaUIAttributes.MEDIA_CAPTIONS_LIST,
      MediaUIAttributes.MEDIA_CAPTIONS_SHOWING,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_LIST && oldValue !== newValue) {
      __privateSet17(this, _subs, __privateMethod5(this, _perTypeUpdate, perTypeUpdate_fn).call(this, newValue, __privateGet17(this, _subs)));
      __privateMethod5(this, _render, render_fn).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_CAPTIONS_LIST && oldValue !== newValue) {
      __privateSet17(this, _caps, __privateMethod5(this, _perTypeUpdate, perTypeUpdate_fn).call(this, newValue, __privateGet17(this, _caps)));
      __privateMethod5(this, _render, render_fn).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING && oldValue !== newValue) {
      const selectedTrack = parseTextTracksStr(newValue != null ? newValue : "")[0];
      __privateGet17(this, _subs).forEach((track) => {
        track.selected = track.language === selectedTrack.language && track.label === selectedTrack.label;
      });
      __privateMethod5(this, _render, render_fn).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_CAPTIONS_SHOWING && oldValue !== newValue) {
      const selectedTrack = parseTextTracksStr(newValue != null ? newValue : "")[0];
      __privateGet17(this, _caps).forEach((track) => {
        track.selected = track.language === selectedTrack.language && track.label === selectedTrack.label;
      });
      __privateMethod5(this, _render, render_fn).call(this);
    } else if (attrName === "aria-multiselectable") {
      this.removeAttribute("aria-multiselectable");
      console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTrack API.");
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  connectedCallback() {
    __privateMethod5(this, _render, render_fn).call(this);
    this.addEventListener("change", __privateMethod5(this, _onChange, onChange_fn));
    super.connectedCallback();
  }
  disconnectedCallback() {
    this.removeEventListener("change", __privateMethod5(this, _onChange, onChange_fn));
    super.disconnectedCallback();
  }
};
_subs = /* @__PURE__ */ new WeakMap();
_caps = /* @__PURE__ */ new WeakMap();
_offOption = /* @__PURE__ */ new WeakMap();
_captionsIndicator = /* @__PURE__ */ new WeakMap();
_perTypeUpdate = /* @__PURE__ */ new WeakSet();
perTypeUpdate_fn = function(newValue, oldItems) {
  const newItems = newValue ? parseTextTracksStr(newValue != null ? newValue : "") : [];
  const removedTracks = [];
  const newTracks = [];
  oldItems.forEach((track) => {
    if (!newItems.some((newTrack) => compareTracks(newTrack, track))) {
      removedTracks.push(track);
    }
  });
  newItems.forEach((track) => {
    if (!oldItems.some((newTrack) => compareTracks(newTrack, track))) {
      newTracks.push(track);
    }
  });
  removedTracks.forEach((track) => track.el.remove());
  return oldItems.filter((track) => !removedTracks.includes(track)).concat(newTracks);
};
_perTypeRender = /* @__PURE__ */ new WeakSet();
perTypeRender_fn = function(tracks, type) {
  const container = this.shadowRoot.querySelector("ul slot");
  tracks.forEach((track) => {
    let option = track.el;
    let alreadyInDom = true;
    if (!option) {
      option = Document.createElement("media-chrome-listitem");
      alreadyInDom = false;
      option.part.add("listitem");
      option.value = type + "!" + formatTextTrackObj(track);
      const label = Document.createElement("span");
      label.textContent = track.label;
      option.append(label);
      if (type === "cc") {
        option.append(__privateGet17(this, _captionsIndicator).cloneNode(true));
      }
    }
    if (track.selected) {
      option.setAttribute("aria-selected", "true");
    } else {
      option.setAttribute("aria-selected", "false");
    }
    if (!alreadyInDom) {
      container.append(option);
      track.el = option;
    }
  });
};
_render = /* @__PURE__ */ new WeakSet();
render_fn = function() {
  const container = this.shadowRoot.querySelector("ul slot");
  if (!container.contains(__privateGet17(this, _offOption))) {
    container.append(__privateGet17(this, _offOption));
  }
  if (!this.hasAttribute(MediaUIAttributes.MEDIA_CAPTIONS_SHOWING) && !this.hasAttribute(MediaUIAttributes.MEDIA_SUBTITLES_SHOWING)) {
    __privateGet17(this, _offOption).setAttribute("aria-selected", "true");
    __privateGet17(this, _offOption).setAttribute("tabindex", "0");
  } else {
    __privateGet17(this, _offOption).setAttribute("aria-selected", "false");
    __privateGet17(this, _offOption).setAttribute("tabindex", "-1");
  }
  __privateMethod5(this, _perTypeRender, perTypeRender_fn).call(this, __privateGet17(this, _caps), "cc");
  __privateMethod5(this, _perTypeRender, perTypeRender_fn).call(this, __privateGet17(this, _subs), "subs");
};
_onChange = /* @__PURE__ */ new WeakSet();
onChange_fn = function() {
  var _a, _b, _c;
  const [newType, selectedOption] = (_c = (_b = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value) == null ? void 0 : _b.split("!")) != null ? _c : [];
  toggleSubsCaps(this, true);
  if (!selectedOption)
    return;
  const event = new Window.CustomEvent(
    newType === "cc" ? MediaUIEvents.MEDIA_SHOW_CAPTIONS_REQUEST : MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: selectedOption
    }
  );
  this.dispatchEvent(event);
};
if (!Window.customElements.get("media-captions-listbox")) {
  Window.customElements.define("media-captions-listbox", MediaCaptionsListbox);
}

// ../groundbreak-player/node_modules/media-chrome/dist/experimental/media-captions-selectmenu.js
var MediaCaptionsSelectMenu = class extends media_chrome_selectmenu_default {
  constructor() {
    super();
  }
  init() {
    const captionsButton = Document.createElement("media-captions-button");
    captionsButton.part.add("button");
    captionsButton.preventClick = true;
    if (this.hasAttribute("default-showing")) {
      captionsButton.setAttribute("default-showing", "");
    }
    const captionsListbox = Document.createElement("media-captions-listbox");
    captionsListbox.part.add("listbox");
    captionsListbox.setAttribute("exportparts", "listitem");
    const buttonSlot = this.shadowRoot.querySelector("slot[name=button]");
    const listboxSlot = this.shadowRoot.querySelector("slot[name=listbox]");
    buttonSlot.textContent = "";
    listboxSlot.textContent = "";
    buttonSlot.append(captionsButton);
    listboxSlot.append(captionsListbox);
  }
};
if (!Window.customElements.get("media-captions-selectmenu")) {
  Window.customElements.define("media-captions-selectmenu", MediaCaptionsSelectMenu);
}

// ../groundbreak-player/dist/index.mjs
var import_mux_video = __toESM(require("@mux/mux-video"), 1);
var import_playback_core = require("@mux/playback-core");
var import_mux_video2 = require("@mux/mux-video");
var import_playback_core2 = require("@mux/playback-core");

// ../groundbreak-player/node_modules/media-chrome/dist/utils/template-parts.js
var __defProp3 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck18 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet18 = (obj, member, getter) => {
  __accessCheck18(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd18 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet18 = (obj, member, value, setter) => {
  __accessCheck18(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _parts;
var _processor;
var _items2;
var _value;
var _element;
var _attributeName;
var _namespaceURI;
var _list;
var list_get;
var _parentNode;
var _nodes;
var ELEMENT = 1;
var STRING = 0;
var PART = 1;
var defaultProcessor = {
  processCallback(instance, parts, state) {
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (expression in state) {
        const value = state[expression];
        if (typeof value === "boolean" && part instanceof AttrPart && typeof part.element[part.attributeName] === "boolean") {
          part.booleanValue = value;
        } else if (typeof value === "function" && part instanceof AttrPart) {
          part.element[part.attributeName] = value;
        } else {
          part.value = value;
        }
      }
    }
  }
};
var TemplateInstance = class extends Window.DocumentFragment {
  constructor(template15, state, processor2 = defaultProcessor) {
    var _a;
    super();
    __privateAdd18(this, _parts, void 0);
    __privateAdd18(this, _processor, void 0);
    this.append(template15.content.cloneNode(true));
    __privateSet18(this, _parts, parse(this));
    __privateSet18(this, _processor, processor2);
    (_a = processor2.createCallback) == null ? void 0 : _a.call(processor2, this, __privateGet18(this, _parts), state);
    processor2.processCallback(this, __privateGet18(this, _parts), state);
  }
  update(state) {
    __privateGet18(this, _processor).processCallback(this, __privateGet18(this, _parts), state);
  }
};
_parts = /* @__PURE__ */ new WeakMap();
_processor = /* @__PURE__ */ new WeakMap();
var parse = (element, parts = []) => {
  let type, value;
  for (let attr of element.attributes || []) {
    if (attr.value.includes("{{")) {
      const list = new AttrPartList();
      for ([type, value] of tokenize(attr.value)) {
        if (!type)
          list.append(value);
        else {
          const part = new AttrPart(element, attr.name, attr.namespaceURI);
          list.append(part);
          parts.push([value, part]);
        }
      }
      attr.value = list.toString();
    }
  }
  for (let node of element.childNodes) {
    if (node.nodeType === ELEMENT && !(node instanceof HTMLTemplateElement)) {
      parse(node, parts);
    } else {
      if (node.nodeType === ELEMENT || node.data.includes("{{")) {
        const items = [];
        if (node.data) {
          for ([type, value] of tokenize(node.data))
            if (!type)
              items.push(new Text(value));
            else {
              const part = new ChildNodePart(element);
              items.push(part);
              parts.push([value, part]);
            }
        } else if (node instanceof HTMLTemplateElement) {
          const part = new InnerTemplatePart(element, node);
          items.push(part);
          parts.push([part.expression, part]);
        }
        node.replaceWith(
          ...items.flatMap((part) => part.replacementNodes || [part])
        );
      }
    }
  }
  return parts;
};
var mem = {};
var tokenize = (text) => {
  let value = "", open = 0, tokens = mem[text], i = 0, c;
  if (tokens)
    return tokens;
  else
    tokens = [];
  for (; c = text[i]; i++) {
    if (c === "{" && text[i + 1] === "{" && text[i - 1] !== "\\" && text[i + 2] && ++open == 1) {
      if (value)
        tokens.push([STRING, value]);
      value = "";
      i++;
    } else if (c === "}" && text[i + 1] === "}" && text[i - 1] !== "\\" && !--open) {
      tokens.push([PART, value.trim()]);
      value = "";
      i++;
    } else
      value += c || "";
  }
  if (value)
    tokens.push([STRING, (open > 0 ? "{{" : "") + value]);
  return mem[text] = tokens;
};
var FRAGMENT = 11;
var Part = class {
  get value() {
    return "";
  }
  set value(val) {
  }
  toString() {
    return this.value;
  }
};
var attrPartToList = /* @__PURE__ */ new WeakMap();
var AttrPartList = class {
  constructor() {
    __privateAdd18(this, _items2, []);
  }
  [Symbol.iterator]() {
    return __privateGet18(this, _items2).values();
  }
  get length() {
    return __privateGet18(this, _items2).length;
  }
  item(index) {
    return __privateGet18(this, _items2)[index];
  }
  append(...items) {
    for (const item of items) {
      if (item instanceof AttrPart) {
        attrPartToList.set(item, this);
      }
      __privateGet18(this, _items2).push(item);
    }
  }
  toString() {
    return __privateGet18(this, _items2).join("");
  }
};
_items2 = /* @__PURE__ */ new WeakMap();
var AttrPart = class extends Part {
  constructor(element, attributeName, namespaceURI) {
    super();
    __privateAdd18(this, _list);
    __privateAdd18(this, _value, "");
    __privateAdd18(this, _element, void 0);
    __privateAdd18(this, _attributeName, void 0);
    __privateAdd18(this, _namespaceURI, void 0);
    __privateSet18(this, _element, element);
    __privateSet18(this, _attributeName, attributeName);
    __privateSet18(this, _namespaceURI, namespaceURI);
  }
  get attributeName() {
    return __privateGet18(this, _attributeName);
  }
  get attributeNamespace() {
    return __privateGet18(this, _namespaceURI);
  }
  get element() {
    return __privateGet18(this, _element);
  }
  get value() {
    return __privateGet18(this, _value);
  }
  set value(newValue) {
    if (__privateGet18(this, _value) === newValue)
      return;
    __privateSet18(this, _value, newValue);
    if (!__privateGet18(this, _list, list_get) || __privateGet18(this, _list, list_get).length === 1) {
      if (newValue == null) {
        __privateGet18(this, _element).removeAttributeNS(
          __privateGet18(this, _namespaceURI),
          __privateGet18(this, _attributeName)
        );
      } else {
        __privateGet18(this, _element).setAttributeNS(
          __privateGet18(this, _namespaceURI),
          __privateGet18(this, _attributeName),
          newValue
        );
      }
    } else {
      __privateGet18(this, _element).setAttributeNS(
        __privateGet18(this, _namespaceURI),
        __privateGet18(this, _attributeName),
        __privateGet18(this, _list, list_get)
      );
    }
  }
  get booleanValue() {
    return __privateGet18(this, _element).hasAttributeNS(
      __privateGet18(this, _namespaceURI),
      __privateGet18(this, _attributeName)
    );
  }
  set booleanValue(value) {
    if (!__privateGet18(this, _list, list_get) || __privateGet18(this, _list, list_get).length === 1)
      this.value = value ? "" : null;
    else
      throw new DOMException("Value is not fully templatized");
  }
};
_value = /* @__PURE__ */ new WeakMap();
_element = /* @__PURE__ */ new WeakMap();
_attributeName = /* @__PURE__ */ new WeakMap();
_namespaceURI = /* @__PURE__ */ new WeakMap();
_list = /* @__PURE__ */ new WeakSet();
list_get = function() {
  return attrPartToList.get(this);
};
var ChildNodePart = class extends Part {
  constructor(parentNode, nodes) {
    super();
    __privateAdd18(this, _parentNode, void 0);
    __privateAdd18(this, _nodes, void 0);
    __privateSet18(this, _parentNode, parentNode);
    __privateSet18(this, _nodes, nodes ? [...nodes] : [new Text()]);
  }
  get replacementNodes() {
    return __privateGet18(this, _nodes);
  }
  get parentNode() {
    return __privateGet18(this, _parentNode);
  }
  get nextSibling() {
    return __privateGet18(this, _nodes)[__privateGet18(this, _nodes).length - 1].nextSibling;
  }
  get previousSibling() {
    return __privateGet18(this, _nodes)[0].previousSibling;
  }
  get value() {
    return __privateGet18(this, _nodes).map((node) => node.textContent).join("");
  }
  set value(newValue) {
    this.replace(newValue);
  }
  replace(...nodes) {
    const normalisedNodes = nodes.flat().flatMap(
      (node) => node == null ? [new Text()] : node.forEach ? [...node] : node.nodeType === FRAGMENT ? [...node.childNodes] : node.nodeType ? [node] : [new Text(node)]
    );
    if (!normalisedNodes.length)
      normalisedNodes.push(new Text());
    __privateSet18(this, _nodes, swapdom(
      __privateGet18(this, _nodes)[0].parentNode,
      __privateGet18(this, _nodes),
      normalisedNodes,
      this.nextSibling
    ));
  }
};
_parentNode = /* @__PURE__ */ new WeakMap();
_nodes = /* @__PURE__ */ new WeakMap();
var InnerTemplatePart = class extends ChildNodePart {
  constructor(parentNode, template15) {
    let directive = template15.getAttribute("directive") || template15.getAttribute("type");
    let expression = template15.getAttribute("expression") || template15.getAttribute(directive) || "";
    if (expression.startsWith("{{"))
      expression = expression.trim().slice(2, -2).trim();
    super(parentNode);
    __publicField2(this, "directive");
    this.expression = expression;
    this.template = template15;
    this.directive = directive;
  }
};
function swapdom(parent, a, b, end = null) {
  let i = 0, cur, next, bi, n = b.length, m = a.length;
  while (i < n && i < m && a[i] == b[i])
    i++;
  while (i < n && i < m && b[n - 1] == a[m - 1])
    end = b[--m, --n];
  if (i == m)
    while (i < n)
      parent.insertBefore(b[i++], end);
  if (i == n)
    while (i < m)
      parent.removeChild(a[i++]);
  else {
    cur = a[i];
    while (i < n) {
      bi = b[i++], next = cur ? cur.nextSibling : end;
      if (cur == bi)
        cur = next;
      else if (i < n && b[i] == next)
        parent.replaceChild(bi, cur), cur = next;
      else
        parent.insertBefore(bi, cur);
    }
    while (cur != end)
      next = cur.nextSibling, parent.removeChild(cur), cur = next;
  }
  return b;
}

// ../groundbreak-player/node_modules/media-chrome/dist/utils/template-processor.js
var pipeModifiers = {
  string: (value) => String(value)
};
var PartialTemplate = class {
  constructor(template15) {
    this.template = template15;
    this.state = void 0;
  }
};
var templates = /* @__PURE__ */ new WeakMap();
var templateInstances = /* @__PURE__ */ new WeakMap();
var Directives = {
  partial: (part, state) => {
    state[part.expression] = new PartialTemplate(part.template);
  },
  if: (part, state) => {
    var _a;
    if (evaluateExpression(part.expression, state)) {
      if (templates.get(part) !== part.template) {
        templates.set(part, part.template);
        const tpl = new TemplateInstance(part.template, state, processor);
        part.replace(tpl);
        templateInstances.set(part, tpl);
      } else {
        (_a = templateInstances.get(part)) == null ? void 0 : _a.update(state);
      }
    } else {
      part.replace("");
      templates.delete(part);
      templateInstances.delete(part);
    }
  }
};
var DirectiveNames = Object.keys(Directives);
var processor = {
  processCallback(instance, parts, state) {
    var _a, _b;
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (part instanceof InnerTemplatePart) {
        if (!part.directive) {
          const directive = DirectiveNames.find((n) => part.template.hasAttribute(n));
          if (directive) {
            part.directive = directive;
            part.expression = part.template.getAttribute(directive);
          }
        }
        (_a = Directives[part.directive]) == null ? void 0 : _a.call(Directives, part, state);
        continue;
      }
      let value = evaluateExpression(expression, state);
      if (value instanceof PartialTemplate) {
        if (templates.get(part) !== value.template) {
          templates.set(part, value.template);
          value = new TemplateInstance(
            value.template,
            value.state,
            processor
          );
          part.value = value;
          templateInstances.set(part, value);
        } else {
          (_b = templateInstances.get(part)) == null ? void 0 : _b.update(value.state);
        }
        continue;
      }
      if (value) {
        if (part instanceof AttrPart) {
          if (part.attributeName.startsWith("aria-")) {
            value = String(value);
          }
        }
        if (part instanceof AttrPart) {
          if (typeof value === "boolean") {
            part.booleanValue = value;
          } else if (typeof value === "function") {
            part.element[part.attributeName] = value;
          } else {
            part.value = value;
          }
        } else {
          part.value = value;
          templates.delete(part);
          templateInstances.delete(part);
        }
      } else {
        if (part instanceof AttrPart) {
          part.value = void 0;
        } else {
          part.value = void 0;
          templates.delete(part);
          templateInstances.delete(part);
        }
      }
    }
  }
};
var operators = {
  "!": (a) => !a,
  "!!": (a) => !!a,
  "==": (a, b) => a == b,
  "!=": (a, b) => a != b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  "??": (a, b) => a != null ? a : b,
  "|": (a, b) => {
    var _a;
    return (_a = pipeModifiers[b]) == null ? void 0 : _a.call(pipeModifiers, a);
  }
};
function tokenizeExpression(expr) {
  return tokenize2(expr, {
    boolean: /true|false/,
    number: /-?\d+\.?\d*/,
    string: /(["'])((?:\\.|[^\\])*?)\1/,
    operator: /[!=><][=!]?|\?\?|\|/,
    ws: /\s+/,
    param: /[$a-z_][$\w]*/i
  }).filter(({ type }) => type !== "ws");
}
function evaluateExpression(expr, state = {}) {
  var _a, _b, _c, _d, _e, _f, _g;
  const tokens = tokenizeExpression(expr);
  if (tokens.length === 0 || tokens.some(({ type }) => !type)) {
    return invalidExpression(expr);
  }
  if (((_a = tokens[0]) == null ? void 0 : _a.token) === ">") {
    const partial = state[(_b = tokens[1]) == null ? void 0 : _b.token];
    if (!partial) {
      return invalidExpression(expr);
    }
    const partialState = { ...state };
    partial.state = partialState;
    const args = tokens.slice(2);
    for (let i = 0; i < args.length; i += 3) {
      const name = (_c = args[i]) == null ? void 0 : _c.token;
      const operator = (_d = args[i + 1]) == null ? void 0 : _d.token;
      const value = (_e = args[i + 2]) == null ? void 0 : _e.token;
      if (name && operator === "=") {
        partialState[name] = getParamValue(value, state);
      }
    }
    return partial;
  }
  if (tokens.length === 1) {
    if (!isValidParam(tokens[0])) {
      return invalidExpression(expr);
    }
    return getParamValue(tokens[0].token, state);
  }
  if (tokens.length === 2) {
    const operator = (_f = tokens[0]) == null ? void 0 : _f.token;
    const run = operators[operator];
    if (!run || !isValidParam(tokens[1])) {
      return invalidExpression(expr);
    }
    const a = getParamValue(tokens[1].token, state);
    return run(a);
  }
  if (tokens.length === 3) {
    const operator = (_g = tokens[1]) == null ? void 0 : _g.token;
    const run = operators[operator];
    if (!run || !isValidParam(tokens[0]) || !isValidParam(tokens[2])) {
      return invalidExpression(expr);
    }
    const a = getParamValue(tokens[0].token, state);
    if (operator === "|") {
      return run(a, tokens[2].token);
    }
    const b = getParamValue(tokens[2].token, state);
    return run(a, b);
  }
}
function invalidExpression(expr) {
  console.warn(`Warning: invalid expression \`${expr}\``);
  return false;
}
function isValidParam({ type }) {
  return ["number", "boolean", "string", "param"].includes(type);
}
function getParamValue(raw, state) {
  const firstChar = raw[0];
  const lastChar = raw.slice(-1);
  if (raw === "true" || raw === "false") {
    return raw === "true";
  }
  if (firstChar === lastChar && [`'`, `"`].includes(firstChar)) {
    return raw.slice(1, -1);
  }
  if (isNumericString(raw)) {
    return parseFloat(raw);
  }
  return state[raw];
}
function tokenize2(str, parsers) {
  let len, match, token, tokens = [];
  while (str) {
    token = null;
    len = str.length;
    for (let key in parsers) {
      match = parsers[key].exec(str);
      if (match && match.index < len) {
        token = {
          token: match[0],
          type: key,
          matches: match.slice(1)
        };
        len = match.index;
      }
    }
    if (len) {
      tokens.push({
        token: str.substr(0, len),
        type: void 0
      });
    }
    if (token) {
      tokens.push(token);
    }
    str = str.substr(len + (token ? token.token.length : 0));
  }
  return tokens;
}

// ../groundbreak-player/node_modules/media-chrome/dist/media-theme-element.js
var __defProp4 = Object.defineProperty;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField3 = (obj, key, value) => {
  __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck19 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet19 = (obj, member, getter) => {
  __accessCheck19(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd19 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet19 = (obj, member, value, setter) => {
  __accessCheck19(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod6 = (obj, member, method) => {
  __accessCheck19(obj, member, "access private method");
  return method;
};
var _template;
var _prevTemplate;
var _prevTemplateId;
var _upgradeProperty;
var upgradeProperty_fn;
var _updateTemplate;
var updateTemplate_fn;
var observedMediaAttributes = {
  "media-target-live-window": "targetLiveWindow",
  "media-stream-type": "streamType"
};
var prependTemplate = Document.createElement("template");
prependTemplate.innerHTML = `
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }
  </style>
`;
var MediaThemeElement = class extends Window.HTMLElement {
  constructor() {
    super();
    __privateAdd19(this, _upgradeProperty);
    __privateAdd19(this, _updateTemplate);
    __publicField3(this, "renderRoot");
    __publicField3(this, "renderer");
    __privateAdd19(this, _template, void 0);
    __privateAdd19(this, _prevTemplate, void 0);
    __privateAdd19(this, _prevTemplateId, void 0);
    if (this.shadowRoot) {
      this.renderRoot = this.shadowRoot;
    } else {
      this.renderRoot = this.attachShadow({ mode: "open" });
      this.createRenderer();
    }
    const observer = new MutationObserver((mutationList) => {
      if (mutationList.some((mutation) => {
        const target = mutation.target;
        if (target === this)
          return true;
        if (target.localName !== "media-controller")
          return false;
        if (observedMediaAttributes[mutation.attributeName])
          return true;
        if (mutation.attributeName.startsWith("breakpoint-"))
          return true;
        return false;
      })) {
        this.render();
      }
    });
    observer.observe(this, { attributes: true });
    observer.observe(this.renderRoot, {
      attributes: true,
      subtree: true
    });
    __privateMethod6(this, _upgradeProperty, upgradeProperty_fn).call(this, "template");
  }
  get mediaController() {
    return this.renderRoot.querySelector("media-controller");
  }
  get template() {
    var _a;
    return (_a = __privateGet19(this, _template)) != null ? _a : this.constructor.template;
  }
  set template(element) {
    __privateSet19(this, _prevTemplateId, null);
    __privateSet19(this, _template, element);
    this.createRenderer();
  }
  get props() {
    var _a, _b, _c;
    const observedAttributes = [
      ...Array.from((_b = (_a = this.mediaController) == null ? void 0 : _a.attributes) != null ? _b : []).filter(({ name }) => {
        return observedMediaAttributes[name] || name.startsWith("breakpoint-");
      }),
      ...Array.from(this.attributes)
    ];
    const props = {};
    for (let attr of observedAttributes) {
      const name = (_c = observedMediaAttributes[attr.name]) != null ? _c : camelCase(attr.name);
      let { value } = attr;
      if (value != null) {
        if (isNumericString(value)) {
          value = parseFloat(value);
        }
        props[name] = value === "" ? true : value;
      } else {
        props[name] = false;
      }
    }
    return props;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "template" && oldValue != newValue) {
      __privateMethod6(this, _updateTemplate, updateTemplate_fn).call(this);
    }
  }
  connectedCallback() {
    __privateMethod6(this, _updateTemplate, updateTemplate_fn).call(this);
  }
  createRenderer() {
    if (this.template && this.template !== __privateGet19(this, _prevTemplate)) {
      __privateSet19(this, _prevTemplate, this.template);
      this.renderer = new TemplateInstance(
        this.template,
        this.props,
        this.constructor.processor
      );
      this.renderRoot.textContent = "";
      this.renderRoot.append(
        prependTemplate.content.cloneNode(true),
        this.renderer
      );
    }
  }
  render() {
    var _a;
    (_a = this.renderer) == null ? void 0 : _a.update(this.props);
  }
};
_template = /* @__PURE__ */ new WeakMap();
_prevTemplate = /* @__PURE__ */ new WeakMap();
_prevTemplateId = /* @__PURE__ */ new WeakMap();
_upgradeProperty = /* @__PURE__ */ new WeakSet();
upgradeProperty_fn = function(prop) {
  if (Object.prototype.hasOwnProperty.call(this, prop)) {
    const value = this[prop];
    delete this[prop];
    this[prop] = value;
  }
};
_updateTemplate = /* @__PURE__ */ new WeakSet();
updateTemplate_fn = function() {
  var _a;
  const templateId = this.getAttribute("template");
  if (!templateId || templateId === __privateGet19(this, _prevTemplateId))
    return;
  const rootNode = this.getRootNode();
  const template15 = (_a = rootNode == null ? void 0 : rootNode.getElementById) == null ? void 0 : _a.call(rootNode, templateId);
  if (template15) {
    __privateSet19(this, _prevTemplateId, templateId);
    __privateSet19(this, _template, template15);
    this.createRenderer();
    return;
  }
  if (isValidUrl(templateId)) {
    __privateSet19(this, _prevTemplateId, templateId);
    request(templateId).then((data) => {
      const template23 = Document.createElement("template");
      template23.innerHTML = data;
      __privateSet19(this, _template, template23);
      this.createRenderer();
    }).catch(console.error);
  }
};
__publicField3(MediaThemeElement, "template");
__publicField3(MediaThemeElement, "observedAttributes", ["template"]);
__publicField3(MediaThemeElement, "processor", processor);
function isValidUrl(url) {
  if (!/^(\/|\.\/|https?:\/\/)/.test(url))
    return false;
  const base = /^https?:\/\//.test(url) ? void 0 : location.origin;
  try {
    new URL(url, base);
  } catch (e) {
    return false;
  }
  return true;
}
async function request(resource) {
  const response = await fetch(resource);
  if (response.status !== 200) {
    throw new Error(`Failed to load resource: the server responded with a status of ${response.status}`);
  }
  return response.text();
}
if (!Window.customElements.get("media-theme")) {
  Window.customElements.define("media-theme", MediaThemeElement);
}

// ../groundbreak-player/dist/index.mjs
var import_playback_core3 = require("@mux/playback-core");
var import_mux_video3 = require("@mux/mux-video");
var __accessCheck20 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet20 = (obj, member, getter) => {
  __accessCheck20(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd20 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet20 = (obj, member, value, setter) => {
  __accessCheck20(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod7 = (obj, member, method) => {
  __accessCheck20(obj, member, "access private method");
  return method;
};
var EventTarget2 = class {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent(_event) {
    return true;
  }
};
if (typeof DocumentFragment === "undefined") {
  class DocumentFragment22 extends EventTarget2 {
  }
  globalThis.DocumentFragment = DocumentFragment22;
}
var HTMLElement22 = class extends EventTarget2 {
};
var HTMLVideoElement = class extends EventTarget2 {
};
var customElements2 = {
  get(_name) {
    return void 0;
  },
  define(_name, _constructor, _options) {
  },
  upgrade(_root) {
  },
  whenDefined(_name) {
    return Promise.resolve(HTMLElement22);
  }
};
var _detail;
var CustomEvent22 = class {
  constructor(typeArg, eventInitDict = {}) {
    __privateAdd20(this, _detail, void 0);
    __privateSet20(this, _detail, eventInitDict == null ? void 0 : eventInitDict.detail);
  }
  get detail() {
    return __privateGet20(this, _detail);
  }
  initCustomEvent() {
  }
};
_detail = /* @__PURE__ */ new WeakMap();
function createElement(_tagName, _options) {
  return new HTMLElement22();
}
var globalThisShim = {
  document: {
    createElement
  },
  DocumentFragment,
  customElements: customElements2,
  CustomEvent: CustomEvent22,
  EventTarget: EventTarget2,
  HTMLElement: HTMLElement22,
  HTMLVideoElement
};
var isServer2 = typeof window === "undefined" || typeof globalThis.customElements === "undefined";
var internalGlobalThis = isServer2 ? globalThisShim : globalThis;
var internalDocument = isServer2 ? globalThisShim.document : globalThis.document;
var code = "en";
var en_default = { code };
var DEFAULT_LOCALE = "en";
function i18n(str, translate = true) {
  var _a, _b;
  const message = translate ? (_b = (_a = en_default) == null ? void 0 : _a[str]) != null ? _b : str : str;
  const locale = translate ? en_default.code : DEFAULT_LOCALE;
  return new IntlMessageFormat(message, locale);
}
var IntlMessageFormat = class {
  constructor(message, locale = ((_a) => (_a = en_default.code) != null ? _a : DEFAULT_LOCALE)()) {
    this.message = message;
    this.locale = locale;
  }
  format(values) {
    return this.message.replace(/\{(\w+)\}/g, (match, key) => {
      var _a;
      return (_a = values[key]) != null ? _a : "";
    });
  }
  toString() {
    return this.message;
  }
};
function stylePropsToString(props) {
  let style = "";
  Object.entries(props).forEach(([key, value]) => {
    if (value == null)
      return;
    style += `${kebabCase(key)}: ${value}; `;
  });
  return style ? style.trim() : void 0;
}
function kebabCase(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function camelCase2(name) {
  return name.replace(/[-_]([a-z])/g, ($0, $1) => $1.toUpperCase());
}
function toNumberOrUndefined(val) {
  if (val == null)
    return void 0;
  const num = +val;
  return !Number.isNaN(num) ? num : void 0;
}
function toQuery(obj) {
  const params = toParams(obj).toString();
  return params ? "?" + params : "";
}
function toParams(obj) {
  const params = {};
  for (const key in obj) {
    if (obj[key] != null)
      params[key] = obj[key];
  }
  return new URLSearchParams(params);
}
function parseJwt(token) {
  const base64Url = (token != null ? token : "").split(".")[1];
  if (!base64Url)
    return {};
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64).split("").map(function(c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join("")
  );
  return JSON.parse(jsonPayload);
}
var containsComposedNode2 = (rootNode, childNode) => {
  if (!rootNode || !childNode)
    return false;
  if (rootNode.contains(childNode))
    return true;
  return containsComposedNode2(rootNode, childNode.getRootNode().host);
};
var MUX_VIDEO_DOMAIN = "mux.com";
var getEnvPlayerVersion = () => {
  try {
    return "1.10.1";
  } catch {
  }
  return "UNKNOWN";
};
var player_version = getEnvPlayerVersion();
var getPlayerVersion = () => player_version;
var getSrcFromPlaybackId = (playbackId, { maxResolution, token, domain = MUX_VIDEO_DOMAIN } = {}) => {
  const isSignedUrl = !!token;
  const maxRes = maxResolution ? { max_resolution: maxResolution } : {};
  const query = isSignedUrl ? { token } : { redundant_streams: true, ...maxRes };
  return `https://stream.${domain}/${playbackId}.m3u8${toQuery(query)}`;
};
var getPosterURLFromPlaybackId = (playbackId, { token, thumbnailTime, domain = MUX_VIDEO_DOMAIN } = {}) => {
  const time = token == null ? thumbnailTime : void 0;
  const { aud } = parseJwt(token);
  if (token && aud !== "t") {
    return;
  }
  return `https://image.${domain}/${playbackId}/thumbnail.webp${toQuery({
    token,
    time
  })}`;
};
var getStoryboardURLFromPlaybackId = (playbackId, { token, domain = MUX_VIDEO_DOMAIN } = {}) => {
  const { aud } = parseJwt(token);
  if (token && aud !== "s") {
    return;
  }
  return `https://image.${domain}/${playbackId}/storyboard.vtt${toQuery({
    token,
    format: "webp"
  })}`;
};
var getStreamTypeFromAttr = (streamTypeAttr) => {
  if (!streamTypeAttr)
    return void 0;
  if ([import_playback_core2.StreamTypes.LIVE, import_playback_core2.StreamTypes.ON_DEMAND].includes(streamTypeAttr))
    return streamTypeAttr;
  if (streamTypeAttr == null ? void 0 : streamTypeAttr.includes("live"))
    return import_playback_core2.StreamTypes.LIVE;
  return void 0;
};
var attrToPropNameMap = {
  crossorigin: "crossOrigin",
  playsinline: "playsInline"
};
function toPropName(attrName) {
  var _a;
  return (_a = attrToPropNameMap[attrName]) != null ? _a : camelCase2(attrName);
}
var _el2;
var _attr2;
var _tokens2;
var AttributeTokenList2 = class {
  constructor(el, attr) {
    __privateAdd20(this, _el2, void 0);
    __privateAdd20(this, _attr2, void 0);
    __privateAdd20(this, _tokens2, []);
    __privateSet20(this, _el2, el);
    __privateSet20(this, _attr2, attr);
  }
  [Symbol.iterator]() {
    return __privateGet20(this, _tokens2).values();
  }
  get length() {
    return __privateGet20(this, _tokens2).length;
  }
  get value() {
    var _a;
    return (_a = __privateGet20(this, _tokens2).join(" ")) != null ? _a : "";
  }
  set value(val) {
    var _a;
    if (val === this.value)
      return;
    __privateSet20(this, _tokens2, []);
    this.add(...(_a = val == null ? void 0 : val.split(" ")) != null ? _a : []);
  }
  toString() {
    return this.value;
  }
  item(index) {
    return __privateGet20(this, _tokens2)[index];
  }
  values() {
    return __privateGet20(this, _tokens2).values();
  }
  keys() {
    return __privateGet20(this, _tokens2).keys();
  }
  forEach(callback) {
    __privateGet20(this, _tokens2).forEach(callback);
  }
  add(...tokens) {
    var _a, _b;
    tokens.forEach((t) => {
      if (!this.contains(t))
        __privateGet20(this, _tokens2).push(t);
    });
    if (this.value === "" && !((_a = __privateGet20(this, _el2)) == null ? void 0 : _a.hasAttribute(`${__privateGet20(this, _attr2)}`))) {
      return;
    }
    (_b = __privateGet20(this, _el2)) == null ? void 0 : _b.setAttribute(`${__privateGet20(this, _attr2)}`, `${this.value}`);
  }
  remove(...tokens) {
    var _a;
    tokens.forEach((t) => {
      __privateGet20(this, _tokens2).splice(__privateGet20(this, _tokens2).indexOf(t), 1);
    });
    (_a = __privateGet20(this, _el2)) == null ? void 0 : _a.setAttribute(`${__privateGet20(this, _attr2)}`, `${this.value}`);
  }
  contains(token) {
    return __privateGet20(this, _tokens2).includes(token);
  }
  toggle(token, force) {
    if (typeof force !== "undefined") {
      if (force) {
        this.add(token);
        return true;
      } else {
        this.remove(token);
        return false;
      }
    }
    if (this.contains(token)) {
      this.remove(token);
      return false;
    }
    this.add(token);
    return true;
  }
  replace(oldToken, newToken) {
    this.remove(oldToken);
    this.add(newToken);
  }
};
_el2 = /* @__PURE__ */ new WeakMap();
_attr2 = /* @__PURE__ */ new WeakMap();
_tokens2 = /* @__PURE__ */ new WeakMap();
var prefix = `[mux-player ${getPlayerVersion()}]`;
function warn(...args) {
  console.warn(prefix, ...args);
}
function error(...args) {
  console.error(prefix, ...args);
}
function devlog(opts) {
  var _a;
  let message = (_a = opts.message) != null ? _a : "";
  if (opts.context) {
    message += ` ${opts.context}`;
  }
  if (opts.file) {
    const githubErrorsBase = "https://github.com/muxinc/elements/blob/main/errors/";
    message += ` ${i18n(`Read more: `)}
${githubErrorsBase}${opts.file}`;
  }
  warn(message);
}
var AllowedVideoAttributes = {
  AUTOPLAY: "autoplay",
  CROSSORIGIN: "crossorigin",
  LOOP: "loop",
  MUTED: "muted",
  PLAYSINLINE: "playsinline",
  PRELOAD: "preload"
};
var CustomVideoAttributes = {
  VOLUME: "volume",
  PLAYBACKRATE: "playbackrate",
  MUTED: "muted"
};
var emptyTimeRanges2 = Object.freeze({
  length: 0,
  start(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'start' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  },
  end(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'end' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  }
});
var AllowedVideoEvents = import_mux_video2.VideoEvents.filter((type) => type !== "error");
var AllowedVideoAttributeNames = Object.values(AllowedVideoAttributes).filter(
  (name) => ![AllowedVideoAttributes.PLAYSINLINE].includes(name)
);
var CustomVideoAttributesNames = Object.values(CustomVideoAttributes);
function initVideoApi(el) {
  el.querySelectorAll(":scope > track").forEach((track) => {
    var _a;
    (_a = el.media) == null ? void 0 : _a.append(track.cloneNode());
  });
  AllowedVideoEvents.forEach((type) => {
    var _a;
    (_a = el.media) == null ? void 0 : _a.addEventListener(type, (evt) => {
      el.dispatchEvent(new Event(evt.type));
    });
  });
}
var VideoApiElement = class extends internalGlobalThis.HTMLElement {
  static get observedAttributes() {
    return [...AllowedVideoAttributeNames, ...CustomVideoAttributesNames];
  }
  constructor() {
    super();
    this.querySelectorAll(":scope > track").forEach((track) => {
      var _a;
      (_a = this.media) == null ? void 0 : _a.append(track.cloneNode());
    });
    const mutationCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.removedNodes.forEach((node) => {
            var _a, _b;
            const track = (_a = this.media) == null ? void 0 : _a.querySelector(`track[src="${node.src}"]`);
            if (track)
              (_b = this.media) == null ? void 0 : _b.removeChild(track);
          });
          mutation.addedNodes.forEach((node) => {
            var _a;
            (_a = this.media) == null ? void 0 : _a.append(node.cloneNode());
          });
        }
      }
    };
    const observer = new MutationObserver(mutationCallback);
    observer.observe(this, { childList: true, subtree: true });
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a, _b;
    switch (attrName) {
      case CustomVideoAttributes.MUTED: {
        if (this.media) {
          this.media.muted = newValue != null;
          this.media.defaultMuted = newValue != null;
        }
        return;
      }
      case CustomVideoAttributes.VOLUME: {
        const val = (_a = toNumberOrUndefined(newValue)) != null ? _a : 1;
        if (this.media) {
          this.media.volume = val;
        }
        return;
      }
      case CustomVideoAttributes.PLAYBACKRATE: {
        const val = (_b = toNumberOrUndefined(newValue)) != null ? _b : 1;
        if (this.media) {
          this.media.playbackRate = val;
          this.media.defaultPlaybackRate = val;
        }
        return;
      }
    }
  }
  play() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.play()) != null ? _b : Promise.reject();
  }
  pause() {
    var _a;
    (_a = this.media) == null ? void 0 : _a.pause();
  }
  requestCast(options) {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.requestCast(options);
  }
  get media() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("mux-video");
  }
  get paused() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.paused) != null ? _b : true;
  }
  get duration() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.duration) != null ? _b : NaN;
  }
  get ended() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.ended) != null ? _b : false;
  }
  get buffered() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.buffered) != null ? _b : emptyTimeRanges2;
  }
  get seekable() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.seekable) != null ? _b : emptyTimeRanges2;
  }
  get readyState() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.readyState) != null ? _b : 0;
  }
  get videoWidth() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.videoWidth) != null ? _b : 0;
  }
  get videoHeight() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.videoHeight) != null ? _b : 0;
  }
  get currentTime() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.currentTime) != null ? _b : 0;
  }
  set currentTime(val) {
    if (this.media) {
      this.media.currentTime = Number(val);
    }
  }
  get volume() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.volume) != null ? _b : 1;
  }
  set volume(val) {
    if (this.media) {
      this.media.volume = Number(val);
    }
  }
  get playbackRate() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.playbackRate) != null ? _b : 1;
  }
  set playbackRate(val) {
    if (this.media) {
      this.media.playbackRate = Number(val);
    }
  }
  get defaultPlaybackRate() {
    var _a;
    return (_a = toNumberOrUndefined(this.getAttribute(CustomVideoAttributes.PLAYBACKRATE))) != null ? _a : 1;
  }
  set defaultPlaybackRate(val) {
    if (val != null) {
      this.setAttribute(CustomVideoAttributes.PLAYBACKRATE, `${val}`);
    } else {
      this.removeAttribute(CustomVideoAttributes.PLAYBACKRATE);
    }
  }
  get crossOrigin() {
    return getVideoAttribute(this, AllowedVideoAttributes.CROSSORIGIN);
  }
  set crossOrigin(val) {
    this.setAttribute(AllowedVideoAttributes.CROSSORIGIN, `${val}`);
  }
  get autoplay() {
    return getVideoAttribute(this, AllowedVideoAttributes.AUTOPLAY) != null;
  }
  set autoplay(val) {
    if (val) {
      this.setAttribute(AllowedVideoAttributes.AUTOPLAY, typeof val === "string" ? val : "");
    } else {
      this.removeAttribute(AllowedVideoAttributes.AUTOPLAY);
    }
  }
  get loop() {
    return getVideoAttribute(this, AllowedVideoAttributes.LOOP) != null;
  }
  set loop(val) {
    if (val) {
      this.setAttribute(AllowedVideoAttributes.LOOP, "");
    } else {
      this.removeAttribute(AllowedVideoAttributes.LOOP);
    }
  }
  get muted() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.muted) != null ? _b : false;
  }
  set muted(val) {
    if (this.media) {
      this.media.muted = Boolean(val);
    }
  }
  get defaultMuted() {
    return getVideoAttribute(this, AllowedVideoAttributes.MUTED) != null;
  }
  set defaultMuted(val) {
    if (val) {
      this.setAttribute(AllowedVideoAttributes.MUTED, "");
    } else {
      this.removeAttribute(AllowedVideoAttributes.MUTED);
    }
  }
  get playsInline() {
    return getVideoAttribute(this, AllowedVideoAttributes.PLAYSINLINE) != null;
  }
  set playsInline(val) {
    error("playsInline is set to true by default and is not currently supported as a setter.");
  }
  get preload() {
    return this.media ? this.media.preload : this.getAttribute("preload");
  }
  set preload(val) {
    if (["", "none", "metadata", "auto"].includes(val)) {
      this.setAttribute(AllowedVideoAttributes.PRELOAD, val);
    } else {
      this.removeAttribute(AllowedVideoAttributes.PRELOAD);
    }
  }
};
function getVideoAttribute(el, name) {
  return el.media ? el.media.getAttribute(name) : el.getAttribute(name);
}
var video_api_default = VideoApiElement;
var styles_default = ':host {\n  --media-control-display: var(--controls);\n  --media-loading-indicator-display: var(--loading-indicator);\n  --media-dialog-display: var(--dialog);\n  --media-play-button-display: var(--play-button);\n  --media-live-button-display: var(--live-button);\n  --media-seek-backward-button-display: var(--seek-backward-button);\n  --media-seek-forward-button-display: var(--seek-forward-button);\n  --media-mute-button-display: var(--mute-button);\n  --media-captions-button-display: var(--captions-button);\n  --media-captions-selectmenu-display: var(\n    --captions-selectmenu,\n    var(--media-captions-button-display)\n  );\n  --media-airplay-button-display: var(--airplay-button);\n  --media-pip-button-display: var(--pip-button);\n  --media-fullscreen-button-display: var(--fullscreen-button);\n  --media-cast-button-display: var(--cast-button);\n  --media-playback-rate-button-display: var(--playback-rate-button);\n  --media-volume-range-display: var(--volume-range);\n  --media-time-range-display: var(--time-range);\n  --media-time-display-display: var(--time-display);\n  --media-duration-display-display: var(--duration-display);\n  --media-title-display-display: var(--title-display);\n\n  display: inline-block;\n  width: 100%;\n}\n\n/* Hide custom elements that are not defined yet */\n:not(:defined) {\n  display: none;\n}\n\na {\n  color: #fff;\n  font-size: 0.9em;\n  text-decoration: underline;\n}\n\nmedia-theme {\n  width: 100%;\n  height: 100%;\n  direction: ltr;\n}\n\n::part(top),\n[part~="top"] {\n  --media-control-display: var(--controls, var(--top-controls));\n  --media-play-button-display: var(--play-button, var(--top-play-button));\n  --media-live-button-display: var(--live-button, var(--top-live-button));\n  --media-seek-backward-button-display: var(\n    --seek-backward-button,\n    var(--top-seek-backward-button)\n  );\n  --media-seek-forward-button-display: var(\n    --seek-forward-button,\n    var(--top-seek-forward-button)\n  );\n  --media-mute-button-display: var(--mute-button, var(--top-mute-button));\n  --media-captions-button-display: var(\n    --captions-button,\n    var(--top-captions-button)\n  );\n  --media-captions-selectmenu-display: var(\n    --captions-selectmenu,\n    var(--media-captions-button-display, var(--top-captions-selectmenu))\n  );\n  --media-airplay-button-display: var(\n    --airplay-button,\n    var(--top-airplay-button)\n  );\n  --media-pip-button-display: var(--pip-button, var(--top-pip-button));\n  --media-fullscreen-button-display: var(\n    --fullscreen-button,\n    var(--top-fullscreen-button)\n  );\n  --media-cast-button-display: var(--cast-button, var(--top-cast-button));\n  --media-playback-rate-button-display: var(\n    --playback-rate-button,\n    var(--top-playback-rate-button)\n  );\n  --media-volume-range-display: var(--volume-range, var(--top-volume-range));\n  --media-time-range-display: var(--time-range, var(--top-time-range));\n  --media-time-display-display: var(--time-display, var(--top-time-display));\n  --media-duration-display-display: var(\n    --duration-display,\n    var(--top-duration-display)\n  );\n  --media-title-display-display: var(--title-display, var(--top-title-display));\n}\n\n::part(center),\n[part~="center"] {\n  --media-control-display: var(--controls, var(--center-controls));\n  --media-play-button-display: var(--play-button, var(--center-play-button));\n  --media-live-button-display: var(--live-button, var(--center-live-button));\n  --media-seek-backward-button-display: var(\n    --seek-backward-button,\n    var(--center-seek-backward-button)\n  );\n  --media-seek-forward-button-display: var(\n    --seek-forward-button,\n    var(--center-seek-forward-button)\n  );\n  --media-mute-button-display: var(--mute-button, var(--center-mute-button));\n  --media-captions-button-display: var(\n    --captions-button,\n    var(--center-captions-button)\n  );\n  --media-captions-selectmenu-display: var(\n    --captions-selectmenu,\n    var(--media-captions-button-display, var(--center-captions-selectmenu))\n  );\n  --media-airplay-button-display: var(\n    --airplay-button,\n    var(--center-airplay-button)\n  );\n  --media-pip-button-display: var(--pip-button, var(--center-pip-button));\n  --media-fullscreen-button-display: var(\n    --fullscreen-button,\n    var(--center-fullscreen-button)\n  );\n  --media-cast-button-display: var(--cast-button, var(--center-cast-button));\n  --media-playback-rate-button-display: var(\n    --playback-rate-button,\n    var(--center-playback-rate-button)\n  );\n  --media-volume-range-display: var(--volume-range, var(--center-volume-range));\n  --media-time-range-display: var(--time-range, var(--center-time-range));\n  --media-time-display-display: var(--time-display, var(--center-time-display));\n  --media-duration-display-display: var(\n    --duration-display,\n    var(--center-duration-display)\n  );\n}\n\n::part(bottom),\n[part~="bottom"] {\n  --media-control-display: var(--controls, var(--bottom-controls));\n  --media-play-button-display: var(--play-button, var(--bottom-play-button));\n  --media-live-button-display: var(--live-button, var(--bottom-live-button));\n  --media-seek-backward-button-display: var(\n    --seek-backward-button,\n    var(--bottom-seek-backward-button)\n  );\n  --media-seek-forward-button-display: var(\n    --seek-forward-button,\n    var(--bottom-seek-forward-button)\n  );\n  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));\n  --media-captions-button-display: var(\n    --captions-button,\n    var(--bottom-captions-button)\n  );\n  --media-captions-selectmenu-display: var(\n    --captions-selectmenu,\n    var(--media-captions-button-display, var(--bottom-captions-selectmenu))\n  );\n  --media-airplay-button-display: var(\n    --airplay-button,\n    var(--bottom-airplay-button)\n  );\n  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));\n  --media-fullscreen-button-display: var(\n    --fullscreen-button,\n    var(--bottom-fullscreen-button)\n  );\n  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button));\n  --media-playback-rate-button-display: var(\n    --playback-rate-button,\n    var(--bottom-playback-rate-button)\n  );\n  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));\n  --media-time-range-display: var(--time-range, var(--bottom-time-range));\n  --media-time-display-display: var(--time-display, var(--bottom-time-display));\n  --media-duration-display-display: var(\n    --duration-display,\n    var(--bottom-duration-display)\n  );\n  --media-title-display-display: var(\n    --title-display,\n    var(--bottom-title-display)\n  );\n}\n\ndiv.center-controls {\n  position: relative;\n  z-index: 9999;\n}\n';
var media_theme_mux_default = `<!-- prettier-ignore -->
<template id="media-theme-mux">
  <style>
    :host {
      --_primary-color: var(--media-primary-color, white);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));

      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_secondary-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background:
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7));
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-margin: 0 0 8px;
      --media-preview-time-text-shadow: none;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-margin: 0 0 5px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator,
    :host([audio]) ::slotted([slot=poster]) {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled],
    [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    :host(:not([audio])) media-captions-selectmenu::part(listbox) {
      z-index: 10;
    }

    media-controller:not(:is([media-captions-list], [media-subtitles-list])) media-captions-selectmenu {
      --captions-selectmenu: none;
    }


    /* 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast. */
    media-controller ::slotted([slot='media']) {
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([media-paused],:not([user-inactive])) ::slotted([slot='media']) {
      /* 42px is the height of the control bar and progress bar
       * with an additional 5px as a buffer, to get 47px */
      --media-webkit-text-track-transform: translateY(-47px);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    media-captions-selectmenu {
      --media-listbox-background: var(--_secondary-color);
      --media-listbox-selected-background: rgba(255, 255, 255, 0.28);
      --media-listbox-hover-background: none;
      --media-listbox-hover-outline: white solid 1px;
      --media-text-color: white;
    }

    media-volume-range[media-volume-unavailable] {
      --volume-range: none;
    }

    media-airplay-button[media-airplay-unavailable] {
      --airplay-button: none;
    }

    media-fullscreen-button[media-fullscreen-unavailable] {
      --fullscreen-button: none;
    }

    media-cast-button[media-cast-unavailable] {
      --cast-button: none;
    }

    media-pip-button[media-pip-unavailable] {
      --pip-button: none;
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      --media-range-padding: 0;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 4px 3px;
    }

    [breakpoint-sm] media-control-bar {
      --media-control-padding: 9px 5px;
    }

    [breakpoint-md] media-control-bar {
      --media-control-padding: 9px 7px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, media-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([media-paused], :not([user-inactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[media-loading]:not([media-paused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    :is(.title-display, media-live-button) {
      color: inherit;
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">
        {{title}}
      </media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
        <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
        <path
          d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seek-offset="{{backwardSeekOffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
        <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
        <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{backwardSeekOffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seek-offset="{{forwardSeekOffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
        <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
        <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{forwardSeekOffset}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
        <path
          d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
        />
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenuButton">
    <media-captions-selectmenu
      default-showing="{{defaultShowingCaptions}}"
      part="bottom captions selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
        <path
          d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
        <path
          d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"
        />
      </svg>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
        <path
          d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
        <path
          d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
        <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button
      part="{{section ?? 'top'}} live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-live-button>
  </template>

  <template partial="PlaybackRateButton">
    <media-playback-rate-button
      rates="{{playbackRates}}"
      part="bottom playback-rate button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-button>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultShowRemainingTime}}"
      show-duration="{{!hideDuration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="bottom time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-range>
  </template>

  <media-controller
    default-stream-type="{{defaultStreamType ?? 'on-demand'}}"
    breakpoints="sm:300 md:700"
    gestures-disabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" no-auto-hide></media-loading-indicator>

    <template if="audio">

      <template if="streamType == 'on-demand'">
        <template if="title">
          <media-control-bar>{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar>
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeDisplay}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>PlaybackRateButton}}
          {{>AirplayButton}}
          {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamType == 'live'">

        <template if="targetLiveWindow > 0">
          <template if="title">
            <media-control-bar>{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar>
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>TimeRange}}
            {{>MuteButton}}
            {{>VolumeRange}}
            {{>PlaybackRateButton}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

        <template if="!targetLiveWindow">
          <template if="title">
            <media-control-bar>{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar>
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

      </template>
    </template>

    <template if="!audio">

      <template if="streamType == 'on-demand'">

        <template if="!breakpointSm">
          {{>TimeRange}}
          <media-control-bar>
            {{>PlayButton}}
            {{>MuteButton}}
            <div class="spacer"></div>
            {{>CaptionsMenuButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointSm">
          <template if="!breakpointMd">
            <media-control-bar slot="top-chrome">
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>SeekBackwardButton section="center"}}
              {{>PlayButton section="center"}}
              {{>SeekForwardButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar>
              {{>PlayButton}}
              {{>TimeDisplay}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>PlaybackRateButton}}
              {{>CaptionsMenuButton}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="breakpointMd">
          <media-control-bar slot="top-chrome">
            {{>TitleDisplay}}
          </media-control-bar>
          <div slot="centered-chrome" class="center-controls">
            {{>PlayButton section="center"}}
          </div>
          {{>TimeRange}}
          <media-control-bar>
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>PlaybackRateButton}}
            {{>CaptionsMenuButton}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

      </template>

      <template if="streamType == 'live'">

        <template if="!targetLiveWindow">

          <template if="!breakpointSm">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            <media-control-bar>
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsMenuButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointSm">
            <template if="!breakpointMd">
              <media-control-bar slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>PlayButton section="center"}}
              </div>
              <media-control-bar>
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>CaptionsMenuButton}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointMd">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            <media-control-bar>
              {{>PlayButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>CaptionsMenuButton}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="targetLiveWindow > 0">

          <template if="!breakpointSm">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            {{>TimeRange}}
            <media-control-bar>
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsMenuButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointSm">
            <template if="!breakpointMd">
              <media-control-bar slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>SeekBackwardButton section="center"}}
                {{>PlayButton section="center"}}
                {{>SeekForwardButton section="center"}}
              </div>
              {{>TimeRange}}
              <media-control-bar>
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>CaptionsMenuButton}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointMd">
            <media-control-bar slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar>
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>CaptionsMenuButton}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

        </template>

      </template>

    </template>

    <slot></slot>

  </media-controller>
</template>
`;
var styles = `
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`;
var template14 = internalDocument.createElement("template");
template14.innerHTML = `
  <style>
    ${styles}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;
var MediaDialog = class extends internalGlobalThis.HTMLElement {
  constructor() {
    var _a;
    super();
    this.attachShadow({ mode: "open" });
    (_a = this.shadowRoot) == null ? void 0 : _a.appendChild(this.constructor.template.content.cloneNode(true));
  }
  show() {
    this.setAttribute("open", "");
    this.dispatchEvent(new CustomEvent("open", { composed: true, bubbles: true }));
    focus(this);
  }
  close() {
    if (!this.hasAttribute("open"))
      return;
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("close", { composed: true, bubbles: true }));
    restoreFocus(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "open" && oldValue !== newValue) {
      newValue != null ? this.show() : this.close();
    }
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "dialog");
    }
    if (this.hasAttribute("open")) {
      focus(this);
    }
  }
};
MediaDialog.styles = styles;
MediaDialog.template = template14;
MediaDialog.observedAttributes = ["open"];
function focus(el) {
  const initFocus = new CustomEvent("initfocus", { composed: true, bubbles: true, cancelable: true });
  el.dispatchEvent(initFocus);
  if (initFocus.defaultPrevented)
    return;
  let target = el.querySelector("[autofocus]:not([disabled])");
  if (!target && el.tabIndex >= 0) {
    target = el;
  }
  if (!target) {
    target = findFocusableElementWithin(el.shadowRoot);
  }
  el._previouslyFocusedElement = internalDocument.activeElement;
  if (internalDocument.activeElement instanceof HTMLElement) {
    internalDocument.activeElement.blur();
  }
  el.addEventListener(
    "transitionend",
    () => {
      if (target instanceof HTMLElement) {
        target.focus({ preventScroll: true });
      }
    },
    { once: true }
  );
}
function findFocusableElementWithin(hostElement) {
  const opts = ["button", "input", "keygen", "select", "textarea"];
  const query = opts.map(function(el) {
    return el + ":not([disabled])";
  });
  query.push('[tabindex]:not([disabled]):not([tabindex=""])');
  let target = hostElement == null ? void 0 : hostElement.querySelector(query.join(", "));
  if (!target && "attachShadow" in Element.prototype) {
    const elems = (hostElement == null ? void 0 : hostElement.querySelectorAll("*")) || [];
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].tagName && elems[i].shadowRoot) {
        target = findFocusableElementWithin(elems[i].shadowRoot);
        if (target) {
          break;
        }
      }
    }
  }
  return target;
}
function restoreFocus(el) {
  if (el._previouslyFocusedElement instanceof HTMLElement) {
    el._previouslyFocusedElement.focus();
  }
}
if (!internalGlobalThis.customElements.get("media-dialog")) {
  internalGlobalThis.customElements.define("media-dialog", MediaDialog);
  internalGlobalThis.MediaDialog = MediaDialog;
}
var dialog_default = MediaDialog;
var template22 = internalDocument.createElement("template");
template22.innerHTML = `
  <style>
    ${dialog_default.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;
var MxpDialog = class extends dialog_default {
  constructor() {
    var _a, _b;
    super();
    (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".close")) == null ? void 0 : _b.addEventListener("click", () => {
      this.close();
    });
  }
};
MxpDialog.template = template22;
if (!internalGlobalThis.customElements.get("mxp-dialog")) {
  internalGlobalThis.customElements.define("mxp-dialog", MxpDialog);
  internalGlobalThis.MxpDialog = MxpDialog;
}
var template32 = internalDocument.createElement("template");
template32.innerHTML = `
  <style>
    :host {
      position: absolute; 
      left:0; 
      right:0; 
      width: 100%; 
      height: 100%; 
      z-index: 99999; 
      pointer-events: none !important;
      opacity: 1!important;
    }


    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div id="groundbreak-widget-container" style="position: absolute; margin: auto; left:0; right:0; width: 100%; height: 100%; z-index: 99999; pointer-events: none">
  </div>;
`;
var _resize;
var resize_fn;
var _render2;
var render_fn2;
var _updateVisibility;
var updateVisibility_fn;
var GroundWidget = class extends internalGlobalThis.HTMLElement {
  constructor() {
    var _a, _b;
    super();
    __privateAdd20(this, _resize);
    __privateAdd20(this, _render2);
    __privateAdd20(this, _updateVisibility);
    this.widgetsVisibleInfo = [];
    this.attachShadow({ mode: "open" });
    (_a = this.shadowRoot) == null ? void 0 : _a.appendChild(
      this.constructor.template.content.cloneNode(true)
    );
    (_b = this.media) == null ? void 0 : _b.addEventListener("timeupdate", (event) => {
      __privateMethod7(this, _updateVisibility, updateVisibility_fn).call(this);
    });
    window.addEventListener("resize", (event) => {
      __privateMethod7(this, _resize, resize_fn).call(this);
    });
    __privateMethod7(this, _render2, render_fn2).call(this);
  }
  get media() {
    var _a;
    return (_a = this.parentElement) == null ? void 0 : _a.querySelector("mux-video");
  }
  get widgets() {
    var _a;
    try {
      return JSON.parse((_a = this.getAttribute("widgets")) != null ? _a : "[]");
    } catch (e) {
      return [];
    }
  }
  get aspectRatio() {
    var _a;
    return (_a = this.getAttribute("aspect-ratio")) != null ? _a : 0.5625;
  }
  isVisible(info, currentTime) {
    if (info.spawnTime <= currentTime * 1e3 && info.spawnTime + info.duration >= currentTime * 1e3) {
      return true;
    }
    return false;
  }
  createWidget(widget, id) {
    var _a, _b, _c, _d, _e;
    let dom;
    switch (widget.type) {
      case "TEXT":
        dom = internalDocument.createElement("p");
        dom.setAttribute("style", (_a = stylePropsToString(widget == null ? void 0 : widget.style)) != null ? _a : "");
        dom.setAttribute("id", `ground-widget-components-${id}`);
        dom.innerText = (_b = widget.label) != null ? _b : "";
        break;
      case "LINK":
        dom = internalDocument.createElement("a");
        dom.setAttribute("style", (_c = stylePropsToString(widget == null ? void 0 : widget.style)) != null ? _c : "");
        dom.setAttribute("id", `ground-widget-components-${id}`);
        dom.innerText = (_d = widget.label) != null ? _d : "";
        dom.href = (_e = widget.href) != null ? _e : "";
        dom.target = "_blank";
        break;
      default:
        dom = internalDocument.createElement("div");
        break;
    }
    return dom;
  }
};
_resize = /* @__PURE__ */ new WeakSet();
resize_fn = function() {
  if (!this.media)
    return;
  if (!this.shadowRoot)
    return;
  const containerDOM = this.shadowRoot.getElementById(
    "groundbreak-widget-container"
  );
  if (!containerDOM)
    return;
  const width = `${this.media.getBoundingClientRect().height * this.aspectRatio}px`;
  containerDOM.style.width = width;
};
_render2 = /* @__PURE__ */ new WeakSet();
render_fn2 = function() {
  const widgets = this.widgets;
  const initialWidgetVisibleInfo = widgets.map((widget, index) => {
    var _a, _b, _c, _d;
    const dom = this.createWidget(widget, index);
    (_b = (_a = this.shadowRoot) == null ? void 0 : _a.getElementById("groundbreak-widget-container")) == null ? void 0 : _b.appendChild(dom);
    return {
      id: index,
      isVisible: true,
      spawnTime: (_c = widget.spawnTime) != null ? _c : 0,
      duration: (_d = widget.duration) != null ? _d : 0
    };
  });
  this.widgetsVisibleInfo = initialWidgetVisibleInfo;
  __privateMethod7(this, _updateVisibility, updateVisibility_fn).call(this);
  setTimeout(() => __privateMethod7(this, _resize, resize_fn).call(this), 100);
};
_updateVisibility = /* @__PURE__ */ new WeakSet();
updateVisibility_fn = function() {
  var _a, _b, _c;
  for (let info of this.widgetsVisibleInfo) {
    const isVisibleNew = this.isVisible(info, (_b = (_a = this.media) == null ? void 0 : _a.currentTime) != null ? _b : 0);
    if (info.isVisible === isVisibleNew)
      continue;
    info.isVisible = isVisibleNew;
    let dom = (_c = this.shadowRoot) == null ? void 0 : _c.getElementById(
      `ground-widget-components-${info.id}`
    );
    if (!dom)
      continue;
    dom.style.display = isVisibleNew === true ? "block" : "none";
  }
};
GroundWidget.template = template32;
if (!internalGlobalThis.customElements.get("groundbreak-widget")) {
  internalGlobalThis.customElements.define("groundbreak-widget", GroundWidget);
  internalGlobalThis.GroundWidget = GroundWidget;
}
var eventListeners = /* @__PURE__ */ new WeakMap();
var EventHandler = class {
  constructor(element, type) {
    this.element = element;
    this.type = type;
    this.element.addEventListener(this.type, this);
    const elementMap = eventListeners.get(this.element);
    if (elementMap) {
      elementMap.set(this.type, this);
    }
  }
  set(listener) {
    if (typeof listener == "function") {
      this.handleEvent = listener.bind(this.element);
    } else if (typeof listener === "object" && typeof listener.handleEvent === "function") {
      this.handleEvent = listener.handleEvent.bind(listener);
    } else {
      this.element.removeEventListener(this.type, this);
      const elementMap = eventListeners.get(this.element);
      if (elementMap) {
        elementMap.delete(this.type);
      }
    }
  }
  static for(part) {
    if (!eventListeners.has(part.element))
      eventListeners.set(part.element, /* @__PURE__ */ new Map());
    const type = part.attributeName.slice(2);
    const elementListeners = eventListeners.get(part.element);
    if (elementListeners && elementListeners.has(type))
      return elementListeners.get(type);
    return new EventHandler(part.element, type);
  }
};
function processEvent(part, value) {
  if (part instanceof AttrPart && part.attributeName.startsWith("on")) {
    EventHandler.for(part).set(value);
    part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
    return true;
  }
  return false;
}
function processSubTemplate(part, value) {
  if (value instanceof TemplateResult && part instanceof ChildNodePart) {
    value.renderInto(part);
    return true;
  }
  return false;
}
function processDocumentFragment(part, value) {
  if (value instanceof DocumentFragment && part instanceof ChildNodePart) {
    if (value.childNodes.length)
      part.replace(...value.childNodes);
    return true;
  }
  return false;
}
function processPropertyIdentity(part, value) {
  if (part instanceof AttrPart) {
    const ns = part.attributeNamespace;
    const oldValue = part.element.getAttributeNS(ns, part.attributeName);
    if (String(value) !== oldValue) {
      part.value = String(value);
    }
    return true;
  }
  part.value = String(value);
  return true;
}
function processElementAttribute(part, value) {
  if (part instanceof AttrPart && value instanceof Element) {
    const element = part.element;
    if (element[part.attributeName] !== value) {
      part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
      element[part.attributeName] = value;
    }
    return true;
  }
  return false;
}
function processBooleanAttribute(part, value) {
  if (typeof value === "boolean" && part instanceof AttrPart) {
    const ns = part.attributeNamespace;
    const oldValue = part.element.hasAttributeNS(ns, part.attributeName);
    if (value !== oldValue) {
      part.booleanValue = value;
    }
    return true;
  }
  return false;
}
function processBooleanNode(part, value) {
  if (value === false && part instanceof ChildNodePart) {
    part.replace("");
    return true;
  }
  return false;
}
function processPart(part, value) {
  processElementAttribute(part, value) || processBooleanAttribute(part, value) || processEvent(part, value) || processBooleanNode(part, value) || processSubTemplate(part, value) || processDocumentFragment(part, value) || processPropertyIdentity(part, value);
}
var templates2 = /* @__PURE__ */ new Map();
var renderedTemplates = /* @__PURE__ */ new WeakMap();
var renderedTemplateInstances = /* @__PURE__ */ new WeakMap();
var TemplateResult = class {
  constructor(strings, values, processor2) {
    this.strings = strings;
    this.values = values;
    this.processor = processor2;
    this.stringsKey = this.strings.join("");
  }
  get template() {
    if (templates2.has(this.stringsKey)) {
      return templates2.get(this.stringsKey);
    } else {
      const template52 = internalDocument.createElement("template");
      const end = this.strings.length - 1;
      template52.innerHTML = this.strings.reduce((str, cur, i) => str + cur + (i < end ? `{{ ${i} }}` : ""), "");
      templates2.set(this.stringsKey, template52);
      return template52;
    }
  }
  renderInto(element) {
    var _a;
    const template52 = this.template;
    if (renderedTemplates.get(element) !== template52) {
      renderedTemplates.set(element, template52);
      const instance = new TemplateInstance(template52, this.values, this.processor);
      renderedTemplateInstances.set(element, instance);
      if (element instanceof ChildNodePart) {
        element.replace(...instance.children);
      } else {
        element.appendChild(instance);
      }
      return;
    }
    const templateInstance = renderedTemplateInstances.get(element);
    (_a = templateInstance == null ? void 0 : templateInstance.update) == null ? void 0 : _a.call(templateInstance, this.values);
  }
};
var defaultProcessor2 = {
  processCallback(instance, parts, state) {
    var _a;
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (expression in state) {
        const value = (_a = state[expression]) != null ? _a : "";
        processPart(part, value);
      }
    }
  }
};
function html(strings, ...values) {
  return new TemplateResult(strings, values, defaultProcessor2);
}
function render(result, element) {
  result.renderInto(element);
}
var muxTemplate = internalDocument.createElement("template");
if ("innerHTML" in muxTemplate)
  muxTemplate.innerHTML = media_theme_mux_default;
var template42 = (props) => html`
  <style>
    ${styles_default}
  </style>
  ${content(props)}
`;
var getHotKeys = (props) => {
  let hotKeys = props.hotKeys ? `${props.hotKeys}` : "";
  if (getStreamTypeFromAttr(props.streamType) === "live") {
    hotKeys += " noarrowleft noarrowright";
  }
  return hotKeys;
};
var content = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
  return html`
  <media-theme
    template="${(_a = props.themeTemplate) != null ? _a : muxTemplate.content.children[0]}"
    default-stream-type="${(_b = props.defaultStreamType) != null ? _b : false}"
    hotkeys="${getHotKeys(props) || false}"
    nohotkeys="${props.noHotKeys || !props.hasSrc || props.isDialogOpen || false}"
    noautoseektolive="${!!((_c = props.streamType) == null ? void 0 : _c.includes(import_playback_core3.StreamTypes.LIVE)) && props.targetLiveWindow !== 0}"
    novolumepref="${props.novolumepref || false}"
    disabled="${!props.hasSrc || props.isDialogOpen}"
    audio="${(_d = props.audio) != null ? _d : false}"
    style="${(_e = stylePropsToString({
    "--media-primary-color": props.primaryColor,
    "--media-secondary-color": props.secondaryColor
  })) != null ? _e : false}"
    default-showing-captions="${!props.defaultHiddenCaptions}"
    forward-seek-offset="${(_f = props.forwardSeekOffset) != null ? _f : false}"
    backward-seek-offset="${(_g = props.backwardSeekOffset) != null ? _g : false}"
    playback-rates="${(_h = props.playbackRates) != null ? _h : false}"
    default-show-remaining-time="${(_i = props.defaultShowRemainingTime) != null ? _i : false}"
    hide-duration="${(_j = props.hideDuration) != null ? _j : false}"
    title="${(_k = props.title) != null ? _k : false}"
    exportparts="top, center, bottom, layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer, poster, live, play, button, seek-backward, seek-forward, mute, captions, airplay, pip, fullscreen, cast, playback-rate, volume, range, time, display"
  >
    <mux-video
      slot="media"
      target-live-window="${(_l = props.targetLiveWindow) != null ? _l : false}"
      stream-type="${(_m = getStreamTypeFromAttr(props.streamType)) != null ? _m : false}"
      crossorigin="${(_n = props.crossOrigin) != null ? _n : ""}"
      playsinline
      autoplay="${(_o = props.autoplay) != null ? _o : false}"
      muted="${(_p = props.muted) != null ? _p : false}"
      loop="${(_q = props.loop) != null ? _q : false}"
      preload="${(_r = props.preload) != null ? _r : false}"
      debug="${(_s = props.debug) != null ? _s : false}"
      prefer-cmcd="${(_t = props.preferCmcd) != null ? _t : false}"
      disable-cookies="${(_u = props.disableCookies) != null ? _u : false}"
      prefer-playback="${(_v = props.preferPlayback) != null ? _v : false}"
      start-time="${props.startTime != null ? props.startTime : false}"
      beacon-collection-domain="${(_w = props.beaconCollectionDomain) != null ? _w : false}"
      player-software-name="${(_x = props.playerSoftwareName) != null ? _x : false}"
      player-software-version="${(_y = props.playerSoftwareVersion) != null ? _y : false}"
      env-key="${(_z = props.envKey) != null ? _z : false}"
      custom-domain="${(_A = props.customDomain) != null ? _A : false}"
      src="${!!props.src ? props.src : props.playbackId ? getSrcFromPlaybackId(props.playbackId, {
    maxResolution: props.maxResolution,
    domain: props.customDomain,
    token: props.tokens.playback
  }) : false}"
      cast-src="${!!props.src ? props.src : props.playbackId ? getSrcFromPlaybackId(props.playbackId, {
    maxResolution: props.maxResolution,
    domain: props.customDomain,
    token: props.tokens.playback
  }) : false}"
      exportparts="video"
    >
      ${props.storyboard ? html`<track
            label="thumbnails"
            default
            kind="metadata"
            src="${props.storyboard}"
          />` : html``}
    </mux-video>
    <media-poster-image
      no-auto-hide
      slot="poster"
      part="poster"
      src="${props.poster === "" ? false : (_B = props.poster) != null ? _B : false}"
      placeholder-src="${(_C = props.placeholder) != null ? _C : false}"
    ></media-poster-image>
    <groundbreak-widget
      widgets="${props.widgets}"
      aspect-ratio="${props.aspectRatio}"
    >
    </groundbreak-widget>
    <mxp-dialog
      no-auto-hide
      open="${(_D = props.isDialogOpen) != null ? _D : false}"
      onclose="${props.onCloseErrorDialog}"
      oninitfocus="${props.onInitFocusDialog}"
    >
      ${((_E = props.dialog) == null ? void 0 : _E.title) ? html`<h3>${props.dialog.title}</h3>` : html``}
      <p>
        ${(_F = props.dialog) == null ? void 0 : _F.message}
        ${((_G = props.dialog) == null ? void 0 : _G.linkUrl) ? html`<a
              href="${props.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(_H = props.dialog.linkText) != null ? _H : ""} ${i18n(
    `(opens in a new window)`
  )}"
              >${(_I = props.dialog.linkText) != null ? _I : props.dialog.linkUrl}</a
            >` : html``}
      </p>
    </mxp-dialog>
  </media-theme>
`;
};
function getErrorLogs(error2, offline, playbackId, playbackToken, translate) {
  var _a, _b, _c;
  let dialog = {};
  let devlog2 = {};
  switch (error2.code) {
    case import_mux_video3.MediaError.MEDIA_ERR_NETWORK: {
      dialog.title = i18n(`Network Error`, translate);
      dialog.message = error2.message;
      switch ((_a = error2.data) == null ? void 0 : _a.response.code) {
        case 412: {
          dialog.title = i18n(`Video is not currently available`, translate);
          dialog.message = i18n(`The live stream or video file are not yet ready.`, translate);
          devlog2.message = i18n(
            `This playback-id may belong to a live stream that is not currently active or an asset that is not ready.`,
            translate
          );
          devlog2.file = "412-not-playable.md";
          break;
        }
        case 404: {
          dialog.title = i18n(`Video does not exist`, translate);
          dialog.message = "";
          devlog2.message = i18n(
            `This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.`,
            translate
          );
          devlog2.file = "404-not-found.md";
          break;
        }
        case 403: {
          dialog.title = i18n(`Invalid playback URL`, translate);
          dialog.message = i18n(
            `The video URL or playback-token are formatted with incorrect or incomplete information.`,
            translate
          );
          devlog2.message = i18n(
            `403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.`,
            translate
          );
          devlog2.file = "missing-signed-tokens.md";
          if (!playbackToken)
            break;
          const { exp: tokenExpiry, aud: tokenType, sub: tokenPlaybackId } = parseJwt(playbackToken);
          const tokenExpired = Date.now() > tokenExpiry * 1e3;
          const playbackIdMismatch = tokenPlaybackId !== playbackId;
          const badTokenType = tokenType !== "v";
          const dateOptions = {
            timeStyle: "medium",
            dateStyle: "medium"
          };
          if (tokenExpired) {
            dialog.title = i18n(`Video URL has expired`, translate);
            dialog.message = i18n(`The video\u2019s secured playback-token has expired.`, translate);
            devlog2.message = i18n(`The video\u2019s secured playback-token has expired.`, translate);
            devlog2.context = i18n(`Expired at: {expiredDate}. Current time: {currentDate}.`, translate).format({
              expiredDate: new Intl.DateTimeFormat(en_default.code, dateOptions).format(tokenExpiry * 1e3),
              currentDate: new Intl.DateTimeFormat(en_default.code, dateOptions).format(Date.now())
            });
            devlog2.file = "403-expired-token.md";
            break;
          }
          if (playbackIdMismatch) {
            dialog.title = i18n(`Video URL is formatted incorrectly`, translate);
            dialog.message = i18n(
              `The video\u2019s playback ID does not match the one encoded in the playback-token.`,
              translate
            );
            devlog2.message = i18n(
              `The video\u2019s playback ID does not match the one encoded in the playback-token.`,
              translate
            );
            devlog2.context = i18n(
              `Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}`,
              translate
            ).format({
              playbackId,
              tokenPlaybackId
            });
            devlog2.file = "403-playback-id-mismatch.md";
            break;
          }
          if (badTokenType) {
            dialog.title = i18n(`Video URL is formatted incorrectly`, translate);
            dialog.message = i18n(`The playback-token is formatted with incorrect information.`, translate);
            devlog2.message = i18n(`The playback-token is formatted with incorrect information.`, translate);
            devlog2.context = i18n(
              `The playback-token has an incorrect aud value: {tokenType}. aud value should be v.`,
              translate
            ).format({
              tokenType
            });
            devlog2.file = "403-incorrect-aud-value.md";
            break;
          }
          devlog2.message = i18n(
            `403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.`,
            translate
          );
          devlog2.file = "403-malformatted-token.md";
          break;
        }
      }
      break;
    }
    case import_mux_video3.MediaError.MEDIA_ERR_DECODE: {
      const { message } = error2;
      dialog = {
        title: i18n(`Media Error`, translate),
        message
      };
      devlog2.file = "media-decode-error.md";
      break;
    }
    case import_mux_video3.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED: {
      const status = (_c = (_b = error2.data) == null ? void 0 : _b.response) == null ? void 0 : _c.code;
      if (status >= 400 && status < 500) {
        error2.code = import_mux_video3.MediaError.MEDIA_ERR_NETWORK;
        error2.data = { response: { code: status } };
        ({ dialog, devlog: devlog2 } = getErrorLogs(error2, offline, playbackId, playbackToken));
        break;
      }
      dialog = {
        title: i18n(`Source Not Supported`, translate),
        message: error2.message
      };
      devlog2.file = "media-src-not-supported.md";
      break;
    }
    default:
      dialog = {
        title: i18n(`Error`, translate),
        message: error2.message
      };
      break;
  }
  if (offline) {
    dialog = {
      title: i18n(`Your device appears to be offline`, translate),
      message: i18n(`Check your internet connection and try reloading this video.`, translate)
    };
  }
  return { dialog, devlog: devlog2 };
}
var VideoAttributes = {
  SRC: "src",
  POSTER: "poster"
};
var PlayerAttributes = {
  STYLE: "style",
  DEFAULT_HIDDEN_CAPTIONS: "default-hidden-captions",
  PRIMARY_COLOR: "primary-color",
  SECONDARY_COLOR: "secondary-color",
  FORWARD_SEEK_OFFSET: "forward-seek-offset",
  BACKWARD_SEEK_OFFSET: "backward-seek-offset",
  PLAYBACK_TOKEN: "playback-token",
  THUMBNAIL_TOKEN: "thumbnail-token",
  STORYBOARD_TOKEN: "storyboard-token",
  STORYBOARD_SRC: "storyboard-src",
  THUMBNAIL_TIME: "thumbnail-time",
  AUDIO: "audio",
  NOHOTKEYS: "nohotkeys",
  HOTKEYS: "hotkeys",
  PLAYBACK_RATES: "playbackrates",
  DEFAULT_SHOW_REMAINING_TIME: "default-show-remaining-time",
  TITLE: "title",
  PLACEHOLDER: "placeholder",
  THEME: "theme",
  DEFAULT_STREAM_TYPE: "default-stream-type",
  TARGET_LIVE_WINDOW: "target-live-window",
  NO_VOLUME_PREF: "no-volume-pref"
};
var GroundBreakElementAttributes = {
  WIDGETS: "widgets",
  ASPECT_RATIO: "aspect-ratio"
};
var ThemeAttributeNames = [
  "audio",
  "backward-seek-offset",
  "default-show-remaining-time",
  "default-showing-captions",
  "noautoseektolive",
  "disabled",
  "exportparts",
  "forward-seek-offset",
  "hide-duration",
  "hotkeys",
  "nohotkeys",
  "playbackrates",
  "default-stream-type",
  "stream-type",
  "style",
  "target-live-window",
  "template",
  "title",
  "no-volume-pref"
];
function getProps(el, state) {
  var _a;
  const props = {
    src: !el.playbackId && el.src,
    playbackId: el.playbackId,
    hasSrc: !!el.playbackId || !!el.src,
    poster: el.poster,
    storyboard: el.storyboard,
    storyboardSrc: el.getAttribute(PlayerAttributes.STORYBOARD_SRC),
    placeholder: el.getAttribute("placeholder"),
    themeTemplate: getThemeTemplate(el),
    thumbnailTime: !el.tokens.thumbnail && el.thumbnailTime,
    autoplay: el.autoplay,
    crossOrigin: el.crossOrigin,
    loop: el.loop,
    widgets: el.widgets,
    aspectRatio: el.aspectRatio,
    noHotKeys: el.hasAttribute(PlayerAttributes.NOHOTKEYS),
    hotKeys: el.getAttribute(PlayerAttributes.HOTKEYS),
    muted: el.muted,
    paused: el.paused,
    preload: el.preload,
    envKey: el.envKey,
    preferCmcd: el.preferCmcd,
    debug: el.debug,
    disableCookies: el.disableCookies,
    tokens: el.tokens,
    beaconCollectionDomain: el.beaconCollectionDomain,
    maxResolution: el.maxResolution,
    metadata: el.metadata,
    playerSoftwareName: el.playerSoftwareName,
    playerSoftwareVersion: el.playerSoftwareVersion,
    startTime: el.startTime,
    preferPlayback: el.preferPlayback,
    audio: el.audio,
    defaultStreamType: el.defaultStreamType,
    targetLiveWindow: el.getAttribute(import_mux_video.Attributes.TARGET_LIVE_WINDOW),
    streamType: getStreamTypeFromAttr(
      el.getAttribute(import_mux_video.Attributes.STREAM_TYPE)
    ),
    primaryColor: el.primaryColor,
    secondaryColor: el.secondaryColor,
    forwardSeekOffset: el.forwardSeekOffset,
    backwardSeekOffset: el.backwardSeekOffset,
    defaultHiddenCaptions: el.defaultHiddenCaptions,
    defaultShowRemainingTime: el.defaultShowRemainingTime,
    hideDuration: getHideDuration(el),
    playbackRates: el.getAttribute(PlayerAttributes.PLAYBACK_RATES),
    customDomain: (_a = el.getAttribute(import_mux_video.Attributes.CUSTOM_DOMAIN)) != null ? _a : void 0,
    title: el.getAttribute(PlayerAttributes.TITLE),
    novolumepref: el.hasAttribute(PlayerAttributes.NO_VOLUME_PREF),
    ...state
  };
  return props;
}
function getThemeTemplate(el) {
  var _a, _b;
  let themeName = el.getAttribute(PlayerAttributes.THEME);
  if (themeName) {
    const templateElement = (_b = (_a = el.getRootNode()) == null ? void 0 : _a.getElementById) == null ? void 0 : _b.call(_a, themeName);
    if (templateElement)
      return templateElement;
    if (!themeName.startsWith("media-theme-")) {
      themeName = `media-theme-${themeName}`;
    }
    const ThemeElement = internalGlobalThis.customElements.get(themeName);
    if (ThemeElement == null ? void 0 : ThemeElement.template)
      return ThemeElement.template;
  }
}
function getHideDuration(el) {
  var _a;
  const timeDisplay = (_a = el.mediaController) == null ? void 0 : _a.querySelector("media-time-display");
  return timeDisplay && getComputedStyle(timeDisplay).getPropertyValue("--media-duration-display-display").trim() === "none";
}
function getMetadataFromAttrs(el) {
  return el.getAttributeNames().filter((attrName) => attrName.startsWith("metadata-")).reduce((currAttrs, attrName) => {
    const value = el.getAttribute(attrName);
    if (value !== null) {
      currAttrs[attrName.replace(/^metadata-/, "").replace(/-/g, "_")] = value;
    }
    return currAttrs;
  }, {});
}
var MuxVideoAttributeNames = Object.values(import_mux_video.Attributes);
var VideoAttributeNames = Object.values(VideoAttributes);
var PlayerAttributeNames = Object.values(PlayerAttributes);
var GroundBreakElementAttributeNames = Object.values(
  GroundBreakElementAttributes
);
var playerSoftwareVersion = getPlayerVersion();
var playerSoftwareName = "mux-player";
var initialState = {
  dialog: void 0,
  isDialogOpen: false
};
var _isInit;
var _tokens22;
var _userInactive;
var _hotkeys;
var _state;
var _init;
var init_fn;
var _setupCSSProperties;
var setupCSSProperties_fn;
var _setState;
var setState_fn;
var _render22;
var render_fn22;
var _setUpThemeAttributes;
var setUpThemeAttributes_fn;
var _setUpErrors;
var setUpErrors_fn;
var _setUpCaptionsButton;
var setUpCaptionsButton_fn;
var _setUpCaptionsMovement;
var setUpCaptionsMovement_fn;
var MuxPlayerElement = class extends video_api_default {
  constructor() {
    super();
    __privateAdd20(this, _init);
    __privateAdd20(this, _setupCSSProperties);
    __privateAdd20(this, _setState);
    __privateAdd20(this, _render22);
    __privateAdd20(this, _setUpThemeAttributes);
    __privateAdd20(this, _setUpErrors);
    __privateAdd20(this, _setUpCaptionsButton);
    __privateAdd20(this, _setUpCaptionsMovement);
    __privateAdd20(this, _isInit, false);
    __privateAdd20(this, _tokens22, {});
    __privateAdd20(this, _userInactive, true);
    __privateAdd20(this, _hotkeys, new AttributeTokenList2(this, "hotkeys"));
    __privateAdd20(this, _state, {
      ...initialState,
      onCloseErrorDialog: () => __privateMethod7(this, _setState, setState_fn).call(this, { dialog: void 0, isDialogOpen: false }),
      onInitFocusDialog: (e) => {
        const isFocusedElementInPlayer = containsComposedNode2(
          this,
          internalDocument.activeElement
        );
        if (!isFocusedElementInPlayer)
          e.preventDefault();
      }
    });
    this.attachShadow({ mode: "open" });
    __privateMethod7(this, _setupCSSProperties, setupCSSProperties_fn).call(this);
    if (this.isConnected) {
      __privateMethod7(this, _init, init_fn).call(this);
    }
  }
  static get observedAttributes() {
    var _a;
    return [
      ...(_a = video_api_default.observedAttributes) != null ? _a : [],
      ...VideoAttributeNames,
      ...MuxVideoAttributeNames,
      ...PlayerAttributeNames,
      ...GroundBreakElementAttributeNames
    ];
  }
  get mediaTheme() {
    var _a;
    return (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("media-theme");
  }
  get mediaController() {
    var _a, _b;
    return (_b = (_a = this.mediaTheme) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector("media-controller");
  }
  connectedCallback() {
    var _a;
    const muxVideo = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(
      "mux-video"
    );
    if (muxVideo) {
      muxVideo.metadata = getMetadataFromAttrs(this);
    }
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    __privateMethod7(this, _init, init_fn).call(this);
    super.attributeChangedCallback(attrName, oldValue, newValue);
    switch (attrName) {
      case PlayerAttributes.HOTKEYS:
        __privateGet20(this, _hotkeys).value = newValue;
        break;
      case PlayerAttributes.THUMBNAIL_TIME: {
        if (newValue != null && this.tokens.thumbnail) {
          warn(
            i18n(
              `Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.`
            ).format({})
          );
        }
        break;
      }
      case PlayerAttributes.THUMBNAIL_TOKEN: {
        const { aud } = parseJwt(newValue);
        if (newValue && aud !== "t") {
          warn(
            i18n(
              `The provided thumbnail-token should have audience value 't' instead of '{aud}'.`
            ).format({ aud })
          );
        }
        break;
      }
      case PlayerAttributes.STORYBOARD_TOKEN: {
        const { aud } = parseJwt(newValue);
        if (newValue && aud !== "s") {
          warn(
            i18n(
              `The provided storyboard-token should have audience value 's' instead of '{aud}'.`
            ).format({ aud })
          );
        }
        break;
      }
      case import_mux_video.Attributes.PLAYBACK_ID: {
        if (newValue == null ? void 0 : newValue.includes("?token")) {
          error(
            i18n(
              "The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute."
            ).format({
              playbackId: newValue
            })
          );
        }
        break;
      }
      case import_mux_video.Attributes.STREAM_TYPE: {
        if (newValue && ![
          import_playback_core.StreamTypes.LIVE,
          import_playback_core.StreamTypes.ON_DEMAND,
          import_playback_core.StreamTypes.UNKNOWN
        ].includes(newValue)) {
          if (["ll-live", "live:dvr", "ll-live:dvr"].includes(
            this.streamType
          )) {
            this.targetLiveWindow = newValue.includes("dvr") ? Number.POSITIVE_INFINITY : 0;
          } else {
            devlog({
              file: "invalid-stream-type.md",
              message: i18n(
                `Invalid stream-type value supplied: \`{streamType}\`. Please provide stream-type as either: \`on-demand\` or \`live\``
              ).format({ streamType: this.streamType })
            });
          }
        } else {
          this.targetLiveWindow = newValue === import_playback_core.StreamTypes.LIVE ? 0 : Number.NaN;
        }
      }
    }
    const shouldClearState = [
      import_mux_video.Attributes.PLAYBACK_ID,
      VideoAttributes.SRC,
      PlayerAttributes.PLAYBACK_TOKEN
    ].includes(attrName);
    if (shouldClearState && oldValue !== newValue) {
      __privateSet20(this, _state, { ...__privateGet20(this, _state), ...initialState });
    }
    __privateMethod7(this, _render22, render_fn22).call(this, { [toPropName(attrName)]: newValue });
  }
  get preferCmcd() {
    var _a;
    return (_a = this.getAttribute(
      import_mux_video.Attributes.PREFER_CMCD
    )) != null ? _a : void 0;
  }
  set preferCmcd(value) {
    if (value === this.preferCmcd)
      return;
    if (!value) {
      this.removeAttribute(import_mux_video.Attributes.PREFER_CMCD);
    } else if (import_playback_core.CmcdTypeValues.includes(value)) {
      this.setAttribute(import_mux_video.Attributes.PREFER_CMCD, value);
    } else {
      warn(
        `Invalid value for preferCmcd. Must be one of ${import_playback_core.CmcdTypeValues.join()}`
      );
    }
  }
  get hasPlayed() {
    var _a, _b;
    return (_b = (_a = this.mediaController) == null ? void 0 : _a.hasAttribute("media-has-played")) != null ? _b : false;
  }
  get inLiveWindow() {
    var _a;
    return (_a = this.mediaController) == null ? void 0 : _a.hasAttribute("media-time-is-live");
  }
  get _hls() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a._hls;
  }
  get mux() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.mux;
  }
  get theme() {
    var _a;
    return (_a = this.getAttribute(PlayerAttributes.THEME)) != null ? _a : "";
  }
  set theme(val) {
    this.setAttribute(PlayerAttributes.THEME, `${val}`);
  }
  get themeProps() {
    const theme = this.mediaTheme;
    if (!theme)
      return;
    const props = {};
    for (const name of theme.getAttributeNames()) {
      if (ThemeAttributeNames.includes(name))
        continue;
      const value = theme.getAttribute(name);
      props[camelCase2(name)] = value === "" ? true : value;
    }
    return props;
  }
  set themeProps(props) {
    var _a, _b;
    __privateMethod7(this, _init, init_fn).call(this);
    const themeProps = { ...this.themeProps, ...props };
    for (const name in themeProps) {
      if (ThemeAttributeNames.includes(name))
        continue;
      const value = props == null ? void 0 : props[name];
      if (typeof value === "boolean" || value == null) {
        (_a = this.mediaTheme) == null ? void 0 : _a.toggleAttribute(kebabCase(name), Boolean(value));
      } else {
        (_b = this.mediaTheme) == null ? void 0 : _b.setAttribute(kebabCase(name), value);
      }
    }
  }
  get playbackId() {
    var _a;
    return (_a = this.getAttribute(import_mux_video.Attributes.PLAYBACK_ID)) != null ? _a : void 0;
  }
  set playbackId(val) {
    if (val) {
      this.setAttribute(import_mux_video.Attributes.PLAYBACK_ID, val);
    } else {
      this.removeAttribute(import_mux_video.Attributes.PLAYBACK_ID);
    }
  }
  get widgets() {
    var _a;
    return (_a = this.getAttribute("widgets")) != null ? _a : void 0;
  }
  set widgets(val) {
    if (val) {
      this.setAttribute("widgets", val);
    } else {
      this.removeAttribute("widgets");
    }
  }
  get aspectRatio() {
    var _a;
    return (_a = this.getAttribute("aspect-ratio")) != null ? _a : void 0;
  }
  set aspectRatio(val) {
    if (val) {
      this.setAttribute("aspect-ratio", val);
    } else {
      this.removeAttribute("aspect-ratio");
    }
  }
  get src() {
    var _a, _b;
    if (this.playbackId) {
      return (_a = getVideoAttribute2(this, VideoAttributes.SRC)) != null ? _a : void 0;
    }
    return (_b = this.getAttribute(VideoAttributes.SRC)) != null ? _b : void 0;
  }
  set src(val) {
    if (val) {
      this.setAttribute(VideoAttributes.SRC, val);
    } else {
      this.removeAttribute(VideoAttributes.SRC);
    }
  }
  get poster() {
    var _a;
    const val = this.getAttribute(VideoAttributes.POSTER);
    if (val != null)
      return val;
    if (this.playbackId && !this.audio) {
      return getPosterURLFromPlaybackId(this.playbackId, {
        domain: this.customDomain,
        thumbnailTime: (_a = this.thumbnailTime) != null ? _a : this.startTime,
        token: this.tokens.thumbnail
      });
    }
    return void 0;
  }
  set poster(val) {
    if (val || val === "") {
      this.setAttribute(VideoAttributes.POSTER, val);
    } else {
      this.removeAttribute(VideoAttributes.POSTER);
    }
  }
  get storyboardSrc() {
    var _a;
    return (_a = this.getAttribute(PlayerAttributes.STORYBOARD_SRC)) != null ? _a : void 0;
  }
  set storyboardSrc(src) {
    if (!src) {
      this.removeAttribute(PlayerAttributes.STORYBOARD_SRC);
    } else {
      this.setAttribute(PlayerAttributes.STORYBOARD_SRC, src);
    }
  }
  get storyboard() {
    if (this.storyboardSrc && !this.tokens.storyboard)
      return this.storyboardSrc;
    if (this.audio || !this.playbackId || !this.streamType || [import_playback_core.StreamTypes.LIVE, import_playback_core.StreamTypes.UNKNOWN].includes(this.streamType)) {
      return void 0;
    }
    return getStoryboardURLFromPlaybackId(this.playbackId, {
      domain: this.customDomain,
      token: this.tokens.storyboard
    });
  }
  get audio() {
    return this.hasAttribute(PlayerAttributes.AUDIO);
  }
  set audio(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.AUDIO);
      return;
    }
    this.setAttribute(PlayerAttributes.AUDIO, "");
  }
  get hotkeys() {
    return __privateGet20(this, _hotkeys);
  }
  get nohotkeys() {
    return this.hasAttribute(PlayerAttributes.NOHOTKEYS);
  }
  set nohotkeys(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.NOHOTKEYS);
      return;
    }
    this.setAttribute(PlayerAttributes.NOHOTKEYS, "");
  }
  get thumbnailTime() {
    return toNumberOrUndefined(
      this.getAttribute(PlayerAttributes.THUMBNAIL_TIME)
    );
  }
  set thumbnailTime(val) {
    this.setAttribute(PlayerAttributes.THUMBNAIL_TIME, `${val}`);
  }
  get title() {
    var _a;
    return (_a = this.getAttribute(PlayerAttributes.TITLE)) != null ? _a : "";
  }
  set title(val) {
    if (val === this.title)
      return;
    if (!!val) {
      this.setAttribute(PlayerAttributes.TITLE, val);
    } else {
      this.removeAttribute("title");
    }
    super.title = val;
  }
  get placeholder() {
    var _a;
    return (_a = getVideoAttribute2(this, PlayerAttributes.PLACEHOLDER)) != null ? _a : "";
  }
  set placeholder(val) {
    this.setAttribute(PlayerAttributes.PLACEHOLDER, `${val}`);
  }
  get primaryColor() {
    var _a, _b;
    let color = this.getAttribute(PlayerAttributes.PRIMARY_COLOR);
    if (color != null)
      return color;
    if (this.mediaTheme) {
      color = (_b = (_a = internalGlobalThis.getComputedStyle(this.mediaTheme)) == null ? void 0 : _a.getPropertyValue("--_primary-color")) == null ? void 0 : _b.trim();
      if (color)
        return color;
    }
  }
  set primaryColor(val) {
    this.setAttribute(PlayerAttributes.PRIMARY_COLOR, `${val}`);
  }
  get secondaryColor() {
    var _a, _b;
    let color = this.getAttribute(PlayerAttributes.SECONDARY_COLOR);
    if (color != null)
      return color;
    if (this.mediaTheme) {
      color = (_b = (_a = internalGlobalThis.getComputedStyle(this.mediaTheme)) == null ? void 0 : _a.getPropertyValue("--_secondary-color")) == null ? void 0 : _b.trim();
      if (color)
        return color;
    }
  }
  set secondaryColor(val) {
    this.setAttribute(PlayerAttributes.SECONDARY_COLOR, `${val}`);
  }
  get defaultShowRemainingTime() {
    return this.hasAttribute(PlayerAttributes.DEFAULT_SHOW_REMAINING_TIME);
  }
  set defaultShowRemainingTime(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.DEFAULT_SHOW_REMAINING_TIME);
    } else {
      this.setAttribute(PlayerAttributes.DEFAULT_SHOW_REMAINING_TIME, "");
    }
  }
  get playbackRates() {
    if (!this.hasAttribute(PlayerAttributes.PLAYBACK_RATES))
      return void 0;
    return this.getAttribute(PlayerAttributes.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map((str) => Number(str)).filter((num) => !Number.isNaN(num)).sort((a, b) => a - b);
  }
  set playbackRates(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.PLAYBACK_RATES);
      return;
    }
    this.setAttribute(PlayerAttributes.PLAYBACK_RATES, val.join(" "));
  }
  get forwardSeekOffset() {
    var _a;
    return (_a = toNumberOrUndefined(
      this.getAttribute(PlayerAttributes.FORWARD_SEEK_OFFSET)
    )) != null ? _a : 10;
  }
  set forwardSeekOffset(val) {
    this.setAttribute(PlayerAttributes.FORWARD_SEEK_OFFSET, `${val}`);
  }
  get backwardSeekOffset() {
    var _a;
    return (_a = toNumberOrUndefined(
      this.getAttribute(PlayerAttributes.BACKWARD_SEEK_OFFSET)
    )) != null ? _a : 10;
  }
  set backwardSeekOffset(val) {
    this.setAttribute(PlayerAttributes.BACKWARD_SEEK_OFFSET, `${val}`);
  }
  get defaultHiddenCaptions() {
    return this.hasAttribute(PlayerAttributes.DEFAULT_HIDDEN_CAPTIONS);
  }
  set defaultHiddenCaptions(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.DEFAULT_HIDDEN_CAPTIONS);
    } else {
      this.setAttribute(PlayerAttributes.DEFAULT_HIDDEN_CAPTIONS, "");
    }
  }
  get playerSoftwareName() {
    var _a;
    return (_a = this.getAttribute(import_mux_video.Attributes.PLAYER_SOFTWARE_NAME)) != null ? _a : playerSoftwareName;
  }
  get playerSoftwareVersion() {
    var _a;
    return (_a = this.getAttribute(import_mux_video.Attributes.PLAYER_SOFTWARE_VERSION)) != null ? _a : playerSoftwareVersion;
  }
  get beaconCollectionDomain() {
    var _a;
    return (_a = this.getAttribute(import_mux_video.Attributes.BEACON_COLLECTION_DOMAIN)) != null ? _a : void 0;
  }
  set beaconCollectionDomain(val) {
    if (val === this.beaconCollectionDomain)
      return;
    if (val) {
      this.setAttribute(import_mux_video.Attributes.BEACON_COLLECTION_DOMAIN, val);
    } else {
      this.removeAttribute(import_mux_video.Attributes.BEACON_COLLECTION_DOMAIN);
    }
  }
  get maxResolution() {
    var _a;
    return (_a = this.getAttribute(import_mux_video.Attributes.MAX_RESOLUTION)) != null ? _a : void 0;
  }
  set maxResolution(val) {
    if (val === this.maxResolution)
      return;
    if (val) {
      this.setAttribute(import_mux_video.Attributes.MAX_RESOLUTION, val);
    } else {
      this.removeAttribute(import_mux_video.Attributes.MAX_RESOLUTION);
    }
  }
  get customDomain() {
    var _a;
    return (_a = this.getAttribute(import_mux_video.Attributes.CUSTOM_DOMAIN)) != null ? _a : void 0;
  }
  set customDomain(val) {
    if (val === this.customDomain)
      return;
    if (val) {
      this.setAttribute(import_mux_video.Attributes.CUSTOM_DOMAIN, val);
    } else {
      this.removeAttribute(import_mux_video.Attributes.CUSTOM_DOMAIN);
    }
  }
  get envKey() {
    var _a;
    return (_a = getVideoAttribute2(this, import_mux_video.Attributes.ENV_KEY)) != null ? _a : void 0;
  }
  set envKey(val) {
    this.setAttribute(import_mux_video.Attributes.ENV_KEY, `${val}`);
  }
  get noVolumePref() {
    return this.hasAttribute(PlayerAttributes.NO_VOLUME_PREF);
  }
  set noVolumePref(val) {
    if (val) {
      this.setAttribute(PlayerAttributes.NO_VOLUME_PREF, "");
    } else {
      this.removeAttribute(PlayerAttributes.NO_VOLUME_PREF);
    }
  }
  get debug() {
    return getVideoAttribute2(this, import_mux_video.Attributes.DEBUG) != null;
  }
  set debug(val) {
    if (val) {
      this.setAttribute(import_mux_video.Attributes.DEBUG, "");
    } else {
      this.removeAttribute(import_mux_video.Attributes.DEBUG);
    }
  }
  get disableCookies() {
    return getVideoAttribute2(this, import_mux_video.Attributes.DISABLE_COOKIES) != null;
  }
  set disableCookies(val) {
    if (val) {
      this.setAttribute(import_mux_video.Attributes.DISABLE_COOKIES, "");
    } else {
      this.removeAttribute(import_mux_video.Attributes.DISABLE_COOKIES);
    }
  }
  get streamType() {
    var _a, _b, _c;
    return (_c = (_b = this.getAttribute(import_mux_video.Attributes.STREAM_TYPE)) != null ? _b : (_a = this.media) == null ? void 0 : _a.streamType) != null ? _c : import_playback_core.StreamTypes.UNKNOWN;
  }
  set streamType(val) {
    this.setAttribute(import_mux_video.Attributes.STREAM_TYPE, `${val}`);
  }
  get defaultStreamType() {
    var _a, _b, _c;
    return (_c = (_b = this.getAttribute(
      PlayerAttributes.DEFAULT_STREAM_TYPE
    )) != null ? _b : (_a = this.mediaController) == null ? void 0 : _a.getAttribute(
      PlayerAttributes.DEFAULT_STREAM_TYPE
    )) != null ? _c : import_playback_core.StreamTypes.ON_DEMAND;
  }
  set defaultStreamType(val) {
    if (val) {
      this.setAttribute(PlayerAttributes.DEFAULT_STREAM_TYPE, val);
    } else {
      this.removeAttribute(PlayerAttributes.DEFAULT_STREAM_TYPE);
    }
  }
  get targetLiveWindow() {
    var _a, _b;
    if (this.hasAttribute(PlayerAttributes.TARGET_LIVE_WINDOW)) {
      return +this.getAttribute(
        PlayerAttributes.TARGET_LIVE_WINDOW
      );
    }
    return (_b = (_a = this.media) == null ? void 0 : _a.targetLiveWindow) != null ? _b : Number.NaN;
  }
  set targetLiveWindow(val) {
    if (val == this.targetLiveWindow)
      return;
    if (val == null) {
      this.removeAttribute(PlayerAttributes.TARGET_LIVE_WINDOW);
    } else {
      this.setAttribute(PlayerAttributes.TARGET_LIVE_WINDOW, `${+val}`);
    }
  }
  get liveEdgeStart() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.liveEdgeStart;
  }
  get startTime() {
    return toNumberOrUndefined(
      getVideoAttribute2(this, import_mux_video.Attributes.START_TIME)
    );
  }
  set startTime(val) {
    this.setAttribute(import_mux_video.Attributes.START_TIME, `${val}`);
  }
  get preferPlayback() {
    const val = this.getAttribute(import_mux_video.Attributes.PREFER_PLAYBACK);
    if (val === import_playback_core.PlaybackTypes.MSE || val === import_playback_core.PlaybackTypes.NATIVE)
      return val;
    return void 0;
  }
  set preferPlayback(val) {
    if (val === this.preferPlayback)
      return;
    if (val === import_playback_core.PlaybackTypes.MSE || val === import_playback_core.PlaybackTypes.NATIVE) {
      this.setAttribute(import_mux_video.Attributes.PREFER_PLAYBACK, val);
    } else {
      this.removeAttribute(import_mux_video.Attributes.PREFER_PLAYBACK);
    }
  }
  get metadata() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.metadata;
  }
  set metadata(val) {
    __privateMethod7(this, _init, init_fn).call(this);
    if (!this.media) {
      error(
        "underlying media element missing when trying to set metadata. metadata will not be set."
      );
      return;
    }
    this.media.metadata = { ...getMetadataFromAttrs(this), ...val };
  }
  async addCuePoints(cuePoints) {
    var _a;
    __privateMethod7(this, _init, init_fn).call(this);
    if (!this.media) {
      error(
        "underlying media element missing when trying to addCuePoints. cuePoints will not be added."
      );
      return;
    }
    return (_a = this.media) == null ? void 0 : _a.addCuePoints(cuePoints);
  }
  get activeCuePoint() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.activeCuePoint;
  }
  get cuePoints() {
    var _a, _b;
    return (_b = (_a = this.media) == null ? void 0 : _a.cuePoints) != null ? _b : [];
  }
  getStartDate() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.getStartDate();
  }
  get currentPdt() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.currentPdt;
  }
  get tokens() {
    const playback = this.getAttribute(PlayerAttributes.PLAYBACK_TOKEN);
    const thumbnail = this.getAttribute(PlayerAttributes.THUMBNAIL_TOKEN);
    const storyboard = this.getAttribute(PlayerAttributes.STORYBOARD_TOKEN);
    return {
      ...__privateGet20(this, _tokens22),
      ...playback != null ? { playback } : {},
      ...thumbnail != null ? { thumbnail } : {},
      ...storyboard != null ? { storyboard } : {}
    };
  }
  set tokens(val) {
    __privateSet20(this, _tokens22, val != null ? val : {});
  }
  get playbackToken() {
    var _a;
    return (_a = this.getAttribute(PlayerAttributes.PLAYBACK_TOKEN)) != null ? _a : void 0;
  }
  set playbackToken(val) {
    this.setAttribute(PlayerAttributes.PLAYBACK_TOKEN, `${val}`);
  }
  get thumbnailToken() {
    var _a;
    return (_a = this.getAttribute(PlayerAttributes.THUMBNAIL_TOKEN)) != null ? _a : void 0;
  }
  set thumbnailToken(val) {
    this.setAttribute(PlayerAttributes.THUMBNAIL_TOKEN, `${val}`);
  }
  get storyboardToken() {
    var _a;
    return (_a = this.getAttribute(PlayerAttributes.STORYBOARD_TOKEN)) != null ? _a : void 0;
  }
  set storyboardToken(val) {
    this.setAttribute(PlayerAttributes.STORYBOARD_TOKEN, `${val}`);
  }
  addTextTrack(kind, label, lang, id) {
    var _a;
    const mediaEl = (_a = this.media) == null ? void 0 : _a.nativeEl;
    if (!mediaEl)
      return;
    return (0, import_playback_core.addTextTrack)(mediaEl, kind, label, lang, id);
  }
  removeTextTrack(track) {
    var _a;
    const mediaEl = (_a = this.media) == null ? void 0 : _a.nativeEl;
    if (!mediaEl)
      return;
    return (0, import_playback_core.removeTextTrack)(mediaEl, track);
  }
  get textTracks() {
    var _a;
    return (_a = this.media) == null ? void 0 : _a.textTracks;
  }
};
_isInit = /* @__PURE__ */ new WeakMap();
_tokens22 = /* @__PURE__ */ new WeakMap();
_userInactive = /* @__PURE__ */ new WeakMap();
_hotkeys = /* @__PURE__ */ new WeakMap();
_state = /* @__PURE__ */ new WeakMap();
_init = /* @__PURE__ */ new WeakSet();
init_fn = function() {
  var _a, _b, _c;
  if (__privateGet20(this, _isInit))
    return;
  __privateSet20(this, _isInit, true);
  __privateMethod7(this, _render22, render_fn22).call(this);
  try {
    customElements.upgrade(this.mediaTheme);
    if (!(this.mediaTheme instanceof internalGlobalThis.HTMLElement))
      throw "";
  } catch (error2) {
    error(`<media-theme> failed to upgrade!`);
  }
  try {
    customElements.upgrade(this.media);
    if (!(this.media instanceof import_mux_video.default))
      throw "";
  } catch (error2) {
    error("<mux-video> failed to upgrade!");
  }
  try {
    customElements.upgrade(this.mediaController);
    if (!(this.mediaController instanceof media_controller_default))
      throw "";
  } catch (error2) {
    error(`<media-controller> failed to upgrade!`);
  }
  initVideoApi(this);
  __privateMethod7(this, _setUpThemeAttributes, setUpThemeAttributes_fn).call(this);
  __privateMethod7(this, _setUpErrors, setUpErrors_fn).call(this);
  __privateMethod7(this, _setUpCaptionsButton, setUpCaptionsButton_fn).call(this);
  __privateSet20(this, _userInactive, (_b = (_a = this.mediaController) == null ? void 0 : _a.hasAttribute("user-inactive")) != null ? _b : true);
  __privateMethod7(this, _setUpCaptionsMovement, setUpCaptionsMovement_fn).call(this);
  (_c = this.media) == null ? void 0 : _c.addEventListener("streamtypechange", () => {
    __privateMethod7(this, _render22, render_fn22).call(this);
  });
};
_setupCSSProperties = /* @__PURE__ */ new WeakSet();
setupCSSProperties_fn = function() {
  var _a, _b;
  try {
    (_a = window == null ? void 0 : window.CSS) == null ? void 0 : _a.registerProperty({
      name: "--media-primary-color",
      syntax: "<color>",
      inherits: true
    });
    (_b = window == null ? void 0 : window.CSS) == null ? void 0 : _b.registerProperty({
      name: "--media-secondary-color",
      syntax: "<color>",
      inherits: true
    });
  } catch (e) {
  }
};
_setState = /* @__PURE__ */ new WeakSet();
setState_fn = function(newState) {
  Object.assign(__privateGet20(this, _state), newState);
  __privateMethod7(this, _render22, render_fn22).call(this);
};
_render22 = /* @__PURE__ */ new WeakSet();
render_fn22 = function(props = {}) {
  render(
    template42(getProps(this, { ...__privateGet20(this, _state), ...props })),
    this.shadowRoot
  );
};
_setUpThemeAttributes = /* @__PURE__ */ new WeakSet();
setUpThemeAttributes_fn = function() {
  const setThemeAttribute = (attributeName) => {
    var _a, _b;
    if (!(attributeName == null ? void 0 : attributeName.startsWith("theme-")))
      return;
    const themeAttrName = attributeName.replace(/^theme-/, "");
    if (ThemeAttributeNames.includes(themeAttrName))
      return;
    const value = this.getAttribute(attributeName);
    if (value != null) {
      (_a = this.mediaTheme) == null ? void 0 : _a.setAttribute(themeAttrName, value);
    } else {
      (_b = this.mediaTheme) == null ? void 0 : _b.removeAttribute(themeAttrName);
    }
  };
  const observer = new MutationObserver((mutationList) => {
    for (const { attributeName } of mutationList) {
      setThemeAttribute(attributeName);
    }
  });
  observer.observe(this, { attributes: true });
  this.getAttributeNames().forEach(setThemeAttribute);
};
_setUpErrors = /* @__PURE__ */ new WeakSet();
setUpErrors_fn = function() {
  var _a;
  const onError = (event) => {
    let { detail: error2 } = event;
    if (!(error2 instanceof import_mux_video.MediaError)) {
      error2 = new import_mux_video.MediaError(error2.message, error2.code, error2.fatal);
    }
    if (!(error2 == null ? void 0 : error2.fatal)) {
      warn(error2);
      if (error2.data) {
        warn(`${error2.name} data:`, error2.data);
      }
      return;
    }
    const { dialog, devlog: devlog2 } = getErrorLogs(
      error2,
      !window.navigator.onLine,
      this.playbackId,
      this.playbackToken
    );
    if (devlog2.message) {
      devlog(devlog2);
    }
    error(error2);
    if (error2.data) {
      error(`${error2.name} data:`, error2.data);
    }
    __privateMethod7(this, _setState, setState_fn).call(this, { isDialogOpen: true, dialog });
  };
  this.addEventListener("error", onError);
  if (this.media) {
    this.media.errorTranslator = (errorEvent = {}) => {
      var _a2, _b, _c;
      if (!(((_a2 = this.media) == null ? void 0 : _a2.error) instanceof import_mux_video.MediaError))
        return errorEvent;
      const { devlog: devlog2 } = getErrorLogs(
        (_b = this.media) == null ? void 0 : _b.error,
        !window.navigator.onLine,
        this.playbackId,
        this.playbackToken,
        false
      );
      return {
        player_error_code: (_c = this.media) == null ? void 0 : _c.error.code,
        player_error_message: devlog2.message ? String(devlog2.message) : errorEvent.player_error_message,
        player_error_context: devlog2.context ? String(devlog2.context) : errorEvent.player_error_context
      };
    };
  }
  (_a = this.media) == null ? void 0 : _a.addEventListener("error", (event) => {
    var _a2, _b;
    let { detail: error2 } = event;
    if (!error2) {
      const { message, code: code2 } = (_b = (_a2 = this.media) == null ? void 0 : _a2.error) != null ? _b : {};
      error2 = new import_mux_video.MediaError(message, code2);
    }
    if (!(error2 == null ? void 0 : error2.fatal))
      return;
    this.dispatchEvent(
      new CustomEvent("error", {
        detail: error2
      })
    );
  });
};
_setUpCaptionsButton = /* @__PURE__ */ new WeakSet();
setUpCaptionsButton_fn = function() {
  var _a, _b, _c, _d;
  const onTrackCountChange = () => __privateMethod7(this, _render22, render_fn22).call(this);
  (_b = (_a = this.media) == null ? void 0 : _a.textTracks) == null ? void 0 : _b.addEventListener("addtrack", onTrackCountChange);
  (_d = (_c = this.media) == null ? void 0 : _c.textTracks) == null ? void 0 : _d.addEventListener("removetrack", onTrackCountChange);
};
_setUpCaptionsMovement = /* @__PURE__ */ new WeakSet();
setUpCaptionsMovement_fn = function() {
  var _a, _b;
  const isSafari = /.*Version\/.*Safari\/.*/.test(navigator.userAgent);
  const isFirefox = /Firefox/i.test(navigator.userAgent);
  if (!isFirefox)
    return;
  let selectedTrack;
  const cuesmap = /* @__PURE__ */ new WeakMap();
  const shouldSkipLineToggle = () => {
    return this.streamType === import_playback_core.StreamTypes.LIVE && !this.secondaryColor && this.offsetWidth >= 800;
  };
  const toggleLines = (track, userInactive, force = false) => {
    if (shouldSkipLineToggle()) {
      return;
    }
    const cues = Array.from(track && track.activeCues || []);
    cues.forEach((cue) => {
      if (!cue.snapToLines || cue.line < -5 || cue.line >= 0 && cue.line < 10) {
        return;
      }
      if (!userInactive || this.paused) {
        const lines = cue.text.split("\n").length;
        let offset = isSafari ? -2 : -3;
        if (this.streamType === import_playback_core.StreamTypes.LIVE) {
          offset = isSafari ? -1 : -2;
        }
        const setTo = offset - lines;
        if (cue.line === setTo && !force) {
          return;
        }
        if (!cuesmap.has(cue)) {
          cuesmap.set(cue, cue.line);
        }
        cue.line = setTo - 1;
        cue.line = setTo;
      } else {
        setTimeout(() => {
          cue.line = cuesmap.get(cue) || "auto";
        }, 500);
      }
    });
  };
  const cuechangeHandler = () => {
    var _a2, _b2;
    toggleLines(
      selectedTrack,
      (_b2 = (_a2 = this.mediaController) == null ? void 0 : _a2.hasAttribute("user-inactive")) != null ? _b2 : false
    );
  };
  const selectTrack = () => {
    var _a2, _b2;
    const tracks = Array.from(
      ((_b2 = (_a2 = this.mediaController) == null ? void 0 : _a2.media) == null ? void 0 : _b2.textTracks) || []
    );
    const newSelectedTrack = tracks.filter(
      (t) => ["subtitles", "captions"].includes(t.kind) && t.mode === "showing"
    )[0];
    if (newSelectedTrack !== selectedTrack) {
      selectedTrack == null ? void 0 : selectedTrack.removeEventListener("cuechange", cuechangeHandler);
    }
    selectedTrack = newSelectedTrack;
    selectedTrack == null ? void 0 : selectedTrack.addEventListener("cuechange", cuechangeHandler);
    toggleLines(selectedTrack, __privateGet20(this, _userInactive));
  };
  selectTrack();
  (_a = this.textTracks) == null ? void 0 : _a.addEventListener("change", selectTrack);
  (_b = this.textTracks) == null ? void 0 : _b.addEventListener("addtrack", selectTrack);
  if (navigator.userAgent.includes("Chrome/")) {
    const chromeWorkaround = () => {
      toggleLines(selectedTrack, __privateGet20(this, _userInactive), true);
      if (!this.paused) {
        window.requestAnimationFrame(chromeWorkaround);
      }
    };
    this.addEventListener("playing", () => {
      chromeWorkaround();
    });
  }
  this.addEventListener("userinactivechange", () => {
    var _a2, _b2;
    const newUserInactive = (_b2 = (_a2 = this.mediaController) == null ? void 0 : _a2.hasAttribute("user-inactive")) != null ? _b2 : true;
    if (__privateGet20(this, _userInactive) === newUserInactive) {
      return;
    }
    __privateSet20(this, _userInactive, newUserInactive);
    toggleLines(selectedTrack, __privateGet20(this, _userInactive));
  });
};
function getVideoAttribute2(el, name) {
  return el.media ? el.media.getAttribute(name) : el.getAttribute(name);
}
if (!internalGlobalThis.customElements.get("mux-player")) {
  internalGlobalThis.customElements.define("mux-player", MuxPlayerElement);
  internalGlobalThis.MuxPlayerElement = MuxPlayerElement;
}

// src/common/utils.ts
var ReactPropToAttrNameMap = {
  className: "class",
  classname: "class",
  htmlFor: "for",
  crossOrigin: "crossorigin",
  viewBox: "viewBox",
  playsInline: "playsinline",
  autoPlay: "autoplay",
  playbackRate: "playbackrate"
};
var isNil = (x) => x == void 0;
var isKeyOf = (k, o) => {
  if (isNil(o))
    return false;
  return k in o;
};
var toKebabCase = (string) => string.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toNativeAttrName = (propName, propValue) => {
  if (typeof propValue === "boolean" && !propValue)
    return void 0;
  if (isKeyOf(propName, ReactPropToAttrNameMap))
    return ReactPropToAttrNameMap[propName];
  if (typeof propValue == void 0)
    return void 0;
  if (/[A-Z]/.test(propName))
    return toKebabCase(propName);
  return propName;
};
var toNativeAttrValue = (propValue, propName) => {
  if (typeof propValue === "boolean")
    return "";
  return propValue;
};
var toNativeProps = (props = {}) => {
  return Object.entries(props).reduce((transformedProps, [propName, propValue]) => {
    const attrName = toNativeAttrName(propName, propValue);
    if (!attrName) {
      return transformedProps;
    }
    const attrValue = toNativeAttrValue(propValue, propName);
    transformedProps[attrName] = attrValue;
    return transformedProps;
  }, {});
};

// src/index.tsx
var import_react4 = require("react");

// src/useCombinedRefs.ts
var import_react = require("react");
var useCombinedRefs = (...refs) => {
  const targetRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    refs.forEach((ref) => {
      if (!ref)
        return;
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
};

// src/useObjectPropEffect.ts
var import_react2 = require("react");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var shallowEqual = (objA, objB) => {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (Array.isArray(objA)) {
    if (!Array.isArray(objB) || objA.length !== objB.length)
      return false;
    return objA.some((vVal, i) => objB[i] === vVal);
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
};
var defaultHasChanged = (obj, v, k) => {
  return !shallowEqual(v, obj[k]);
};
var defaultUpdateValue = (obj, v, k) => {
  obj[k] = v;
};
var useObjectPropEffect = (propName, propValue, ref, updateValue = defaultUpdateValue, hasChanged = defaultHasChanged) => {
  return (0, import_react2.useEffect)(() => {
    const obj = ref == null ? void 0 : ref.current;
    if (!obj)
      return;
    if (!hasChanged(obj, propValue, propName))
      return;
    updateValue(obj, propValue, propName);
  }, [ref == null ? void 0 : ref.current, propValue]);
};
var useObjectPropEffect_default = useObjectPropEffect;

// src/env.ts
var getEnvPlayerVersion2 = () => {
  try {
    return "$npm_package_version";
  } catch {
  }
  return "UNKNOWN";
};
var player_version2 = getEnvPlayerVersion2();
var getPlayerVersion2 = () => player_version2;

// src/index.tsx
var MuxPlayerInternal = import_react3.default.forwardRef(({ children, ...props }, ref) => {
  return import_react3.default.createElement("mux-player", toNativeProps({ ...props, ref }), children);
});
var useEventCallbackEffect = (type, ref, callback) => {
  return (0, import_react3.useEffect)(() => {
    const eventTarget = ref == null ? void 0 : ref.current;
    if (!eventTarget || !callback)
      return;
    eventTarget.addEventListener(type, callback);
    return () => {
      eventTarget.removeEventListener(type, callback);
    };
  }, [ref == null ? void 0 : ref.current, callback]);
};
var usePlayer = (ref, props) => {
  const {
    onAbort,
    onCanPlay,
    onCanPlayThrough,
    onEmptied,
    onLoadStart,
    onLoadedData,
    onLoadedMetadata,
    onProgress,
    onDurationChange,
    onVolumeChange,
    onRateChange,
    onResize,
    onWaiting,
    onPlay,
    onPlaying,
    onTimeUpdate,
    onPause,
    onSeeking,
    onSeeked,
    onStalled,
    onSuspend,
    onEnded,
    onError,
    onCuePointChange,
    onCuePointsChange,
    metadata,
    tokens,
    paused,
    playbackId,
    playbackRates,
    currentTime,
    themeProps,
    ...remainingProps
  } = props;
  useObjectPropEffect_default("playbackRates", playbackRates, ref);
  useObjectPropEffect_default("metadata", metadata, ref);
  useObjectPropEffect_default("themeProps", themeProps, ref);
  useObjectPropEffect_default("tokens", tokens, ref);
  useObjectPropEffect_default("playbackId", playbackId, ref);
  useObjectPropEffect_default(
    "paused",
    paused,
    ref,
    (playerEl, pausedVal) => {
      if (pausedVal == null)
        return;
      if (pausedVal) {
        playerEl.pause();
      } else {
        playerEl.play();
      }
    },
    (playerEl, value, propName) => {
      if (playerEl.hasAttribute("autoplay") && !playerEl.hasPlayed) {
        return false;
      }
      return defaultHasChanged(playerEl, value, propName);
    }
  );
  useObjectPropEffect_default("currentTime", currentTime, ref, (playerEl, currentTimeVal) => {
    if (currentTimeVal == null)
      return;
    playerEl.currentTime = currentTimeVal;
  });
  useEventCallbackEffect("abort", ref, onAbort);
  useEventCallbackEffect("canplay", ref, onCanPlay);
  useEventCallbackEffect("canplaythrough", ref, onCanPlayThrough);
  useEventCallbackEffect("emptied", ref, onEmptied);
  useEventCallbackEffect("loadstart", ref, onLoadStart);
  useEventCallbackEffect("loadeddata", ref, onLoadedData);
  useEventCallbackEffect("loadedmetadata", ref, onLoadedMetadata);
  useEventCallbackEffect("progress", ref, onProgress);
  useEventCallbackEffect("durationchange", ref, onDurationChange);
  useEventCallbackEffect("volumechange", ref, onVolumeChange);
  useEventCallbackEffect("ratechange", ref, onRateChange);
  useEventCallbackEffect("resize", ref, onResize);
  useEventCallbackEffect("waiting", ref, onWaiting);
  useEventCallbackEffect("play", ref, onPlay);
  useEventCallbackEffect("playing", ref, onPlaying);
  useEventCallbackEffect("timeupdate", ref, onTimeUpdate);
  useEventCallbackEffect("pause", ref, onPause);
  useEventCallbackEffect("seeking", ref, onSeeking);
  useEventCallbackEffect("seeked", ref, onSeeked);
  useEventCallbackEffect("stalled", ref, onStalled);
  useEventCallbackEffect("suspend", ref, onSuspend);
  useEventCallbackEffect("ended", ref, onEnded);
  useEventCallbackEffect("error", ref, onError);
  useEventCallbackEffect("cuepointchange", ref, onCuePointChange);
  useEventCallbackEffect("cuepointschange", ref, onCuePointsChange);
  return [remainingProps];
};
var playerSoftwareVersion2 = getPlayerVersion2();
var playerSoftwareName2 = "mux-player-react";
var MuxPlayer = import_react3.default.forwardRef((props, ref) => {
  const innerPlayerRef = (0, import_react4.useRef)(null);
  const playerRef = useCombinedRefs(innerPlayerRef, ref);
  const [remainingProps] = usePlayer(innerPlayerRef, props);
  return /* @__PURE__ */ import_react3.default.createElement(
    MuxPlayerInternal,
    {
      ref: playerRef,
      playerSoftwareName: playerSoftwareName2,
      playerSoftwareVersion: playerSoftwareVersion2,
      ...remainingProps
    }
  );
});
var src_default = MuxPlayer;
//# sourceMappingURL=index.cjs.js.map
