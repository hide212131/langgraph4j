function t(t,e,o,r){Object.defineProperty(t,e,{get:o,set:r,enumerable:!0,configurable:!0})}var e=globalThis,o={},r={},a=e.parcelRequire3bab;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire3bab=a);var i=a.register;i("hNeh9",function(e,o){t(e.exports,"default",()=>i),a("800sp");var r=a("4jdI8"),i=(0,r.css)` 
*, :before, :after {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}

:before, :after {
  --tw-content: "";
}

html, :host {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  font-family: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}

body {
  line-height: inherit;
  margin: 0;
}

hr {
  color: inherit;
  border-top-width: 1px;
  height: 0;
}

abbr:where([title]) {
  text-decoration: underline dotted;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, input:where([type="button"]), input:where([type="reset"]), input:where([type="submit"]) {
  -webkit-appearance: button;
  background-color: #0000;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button {
  height: auto;
}

::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  margin: 0;
  padding: 0;
  list-style: none;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button, [role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  vertical-align: middle;
  display: block;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

:root, [data-theme] {
  background-color: var(--fallback-b1, oklch(var(--b1) / 1));
  color: var(--fallback-bc, oklch(var(--bc) / 1));
}

@supports not (color: oklch(0% 0 0)) {
  :root {
    color-scheme: light;
    --fallback-p: #491eff;
    --fallback-pc: #d4dbff;
    --fallback-s: #ff41c7;
    --fallback-sc: #fff9fc;
    --fallback-a: #00cfbd;
    --fallback-ac: #00100d;
    --fallback-n: #2b3440;
    --fallback-nc: #d7dde4;
    --fallback-b1: #fff;
    --fallback-b2: #e5e6e6;
    --fallback-b3: #e5e6e6;
    --fallback-bc: #1f2937;
    --fallback-in: #00b3f0;
    --fallback-inc: #000;
    --fallback-su: #00ca92;
    --fallback-suc: #000;
    --fallback-wa: #ffc22d;
    --fallback-wac: #000;
    --fallback-er: #ff6f70;
    --fallback-erc: #000;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      --fallback-p: #7582ff;
      --fallback-pc: #050617;
      --fallback-s: #ff71cf;
      --fallback-sc: #190211;
      --fallback-a: #00c7b5;
      --fallback-ac: #000e0c;
      --fallback-n: #2a323c;
      --fallback-nc: #a6adbb;
      --fallback-b1: #1d232a;
      --fallback-b2: #191e24;
      --fallback-b3: #15191e;
      --fallback-bc: #a6adbb;
      --fallback-in: #00b3f0;
      --fallback-inc: #000;
      --fallback-su: #00ca92;
      --fallback-suc: #000;
      --fallback-wa: #ffc22d;
      --fallback-wac: #000;
      --fallback-er: #ff6f70;
      --fallback-erc: #000;
    }
  }
}

html {
  -webkit-tap-highlight-color: transparent;
}

* {
  scrollbar-color: color-mix(in oklch, currentColor 35%, transparent) transparent;
}

:hover {
  scrollbar-color: color-mix(in oklch, currentColor 60%, transparent) transparent;
}

:root {
  color-scheme: light;
  --in: 72.06% .191 231.6;
  --su: 64.8% .15 160;
  --wa: 84.71% .199 83.87;
  --er: 71.76% .221 22.18;
  --pc: 89.824% .06192 275.75;
  --ac: 15.352% .0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 49.12% .3096 275.75;
  --s: 69.71% .329 342.55;
  --sc: 98.71% .0106 342.55;
  --a: 76.76% .184 183.61;
  --n: 32.1785% .02476 255.702;
  --nc: 89.4994% .011585 252.096;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% .00108 197.138;
  --bc: 27.8078% .029596 256.848;
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --in: 72.06% .191 231.6;
    --su: 64.8% .15 160;
    --wa: 84.71% .199 83.87;
    --er: 71.76% .221 22.18;
    --pc: 13.138% .0392 275.75;
    --sc: 14.96% .052 342.55;
    --ac: 14.902% .0334 183.61;
    --inc: 0% 0 0;
    --suc: 0% 0 0;
    --wac: 0% 0 0;
    --erc: 0% 0 0;
    --rounded-box: 1rem;
    --rounded-btn: .5rem;
    --rounded-badge: 1.9rem;
    --animation-btn: .25s;
    --animation-input: .2s;
    --btn-focus-scale: .95;
    --border-btn: 1px;
    --tab-border: 1px;
    --tab-radius: .5rem;
    --p: 65.69% .196 275.75;
    --s: 74.8% .26 342.55;
    --a: 74.51% .167 183.61;
    --n: 31.3815% .021108 254.139;
    --nc: 74.6477% .0216 264.436;
    --b1: 25.3267% .015896 252.418;
    --b2: 23.2607% .013807 253.101;
    --b3: 21.1484% .01165 254.088;
    --bc: 74.6477% .0216 264.436;
  }
}

[data-theme="light"] {
  color-scheme: light;
  --in: 72.06% .191 231.6;
  --su: 64.8% .15 160;
  --wa: 84.71% .199 83.87;
  --er: 71.76% .221 22.18;
  --pc: 89.824% .06192 275.75;
  --ac: 15.352% .0368 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 49.12% .3096 275.75;
  --s: 69.71% .329 342.55;
  --sc: 98.71% .0106 342.55;
  --a: 76.76% .184 183.61;
  --n: 32.1785% .02476 255.702;
  --nc: 89.4994% .011585 252.096;
  --b1: 100% 0 0;
  --b2: 96.1151% 0 0;
  --b3: 92.4169% .00108 197.138;
  --bc: 27.8078% .029596 256.848;
}

[data-theme="dark"] {
  color-scheme: dark;
  --in: 72.06% .191 231.6;
  --su: 64.8% .15 160;
  --wa: 84.71% .199 83.87;
  --er: 71.76% .221 22.18;
  --pc: 13.138% .0392 275.75;
  --sc: 14.96% .052 342.55;
  --ac: 14.902% .0334 183.61;
  --inc: 0% 0 0;
  --suc: 0% 0 0;
  --wac: 0% 0 0;
  --erc: 0% 0 0;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 65.69% .196 275.75;
  --s: 74.8% .26 342.55;
  --a: 74.51% .167 183.61;
  --n: 31.3815% .021108 254.139;
  --nc: 74.6477% .0216 264.436;
  --b1: 25.3267% .015896 252.418;
  --b2: 23.2607% .013807 253.101;
  --b3: 21.1484% .01165 254.088;
  --bc: 74.6477% .0216 264.436;
}

*, :before, :after, ::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #3b82f680;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}

.container {
  width: 100%;
}

@media (width >= 640px) {
  .container {
    max-width: 640px;
  }
}

@media (width >= 768px) {
  .container {
    max-width: 768px;
  }
}

@media (width >= 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (width >= 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (width >= 1536px) {
  .container {
    max-width: 1536px;
  }
}

.avatar {
  display: inline-flex;
  position: relative;
}

.avatar > div {
  aspect-ratio: 1;
  display: block;
  overflow: hidden;
}

.avatar img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.avatar.placeholder > div {
  justify-content: center;
  align-items: center;
  display: flex;
}

.badge {
  border-radius: var(--rounded-badge, 1.9rem);
  --tw-border-opacity: 1;
  border-width: 1px;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 1.25rem;
  padding-left: .563rem;
  padding-right: .563rem;
  font-size: .875rem;
  line-height: 1.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: inline-flex;
}

.btm-nav {
  padding-bottom: env(safe-area-inset-bottom);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  color: currentColor;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.btm-nav > * {
  cursor: pointer;
  border-color: currentColor;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  gap: .25rem;
  height: 100%;
  display: flex;
  position: relative;
}

@media (hover: hover) {
  .label a:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  }

  .menu li > :not(ul, .menu-title, details, .btn):active, .menu li > :not(ul, .menu-title, details, .btn).active, .menu li > details > summary:active {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
  }

  .table tr.hover:hover, .table tr.hover:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table-zebra tr.hover:hover, .table-zebra tr.hover:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }
}

.btn {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border-radius: var(--rounded-btn, .5rem);
  border-color: #0000;
  border-color: oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity));
  text-align: center;
  border-width: var(--border-btn, 1px);
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-shadow: 0 1px 2px 0 #0000000d;
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
  background-color: oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity));
  --tw-bg-opacity: 1;
  --tw-border-opacity: 1;
  flex-wrap: wrap;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  height: 3rem;
  min-height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1em;
  text-decoration-line: none;
  transition-property: color, background-color, border-color, opacity, box-shadow, transform;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: inline-flex;
}

.btn-disabled, .btn[disabled], .btn:disabled {
  pointer-events: none;
}

:where(.btninput[type="checkbox"]), :where(.btninput[type="radio"]) {
  appearance: none;
  width: auto;
}

.btninput[type="checkbox"]:after, .btninput[type="radio"]:after {
  --tw-content: attr(aria-label);
  content: var(--tw-content);
}

.checkbox {
  --chkbg: var(--fallback-bc, oklch(var(--bc) / 1));
  --chkfg: var(--fallback-b1, oklch(var(--b1) / 1));
  cursor: pointer;
  appearance: none;
  border-radius: var(--rounded-btn, .5rem);
  border-width: 1px;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}

.collapse:not(td):not(tr):not(colgroup) {
  visibility: visible;
}

.collapse {
  border-radius: var(--rounded-box, 1rem);
  grid-template-rows: auto 0fr;
  width: 100%;
  transition: grid-template-rows .2s;
  display: grid;
  position: relative;
  overflow: hidden;
}

.collapse-title, .collapse > input[type="checkbox"], .collapse > input[type="radio"], .collapse-content {
  grid-row-start: 1;
  grid-column-start: 1;
}

.collapse > input[type="checkbox"], .collapse > input[type="radio"] {
  appearance: none;
  opacity: 0;
}

.collapse-content {
  visibility: hidden;
  cursor: unset;
  grid-row-start: 2;
  grid-column-start: 1;
  min-height: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: padding .2s ease-out, background-color .2s ease-out;
}

.collapse[open], .collapse-open, .collapse:focus:not(.collapse-close), .collapse:not(.collapse-close):has( > input[type="checkbox"]:checked), .collapse:not(.collapse-close):has( > input[type="radio"]:checked) {
  grid-template-rows: auto 1fr;
}

.collapse[open] > .collapse-content, .collapse-open > .collapse-content, .collapse:focus:not(.collapse-close) > .collapse-content, .collapse:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-content, .collapse:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-content {
  visibility: visible;
  min-height: fit-content;
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown > :not(summary):focus {
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.dropdown .dropdown-content {
  position: absolute;
}

.dropdown:not(details) .dropdown-content {
  visibility: hidden;
  opacity: 0;
  transform-origin: top;
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

.dropdown-end .dropdown-content {
  inset-inline-end: 0;
}

.dropdown-left .dropdown-content {
  bottom: auto;
  transform-origin: 100%;
  inset-inline-end: 100%;
  top: 0;
}

.dropdown-right .dropdown-content {
  bottom: auto;
  transform-origin: 0;
  inset-inline-start: 100%;
  top: 0;
}

.dropdown-bottom .dropdown-content {
  transform-origin: top;
  top: 100%;
  bottom: auto;
}

.dropdown-top .dropdown-content {
  transform-origin: bottom;
  top: auto;
  bottom: 100%;
}

.dropdown-end.dropdown-right .dropdown-content, .dropdown-end.dropdown-left .dropdown-content {
  top: auto;
  bottom: 0;
}

.dropdown.dropdown-open .dropdown-content, .dropdown:not(.dropdown-hover):focus .dropdown-content, .dropdown:focus-within .dropdown-content {
  visibility: visible;
  opacity: 1;
}

@media (hover: hover) {
  .dropdown.dropdown-hover:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }

  .btm-nav > .disabled:hover, .btm-nav > [disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
    background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
    --tw-bg-opacity: .1;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
    --tw-text-opacity: .2;
  }

  .btn:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn:hover {
      background-color: color-mix(in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black);
      border-color: color-mix(in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity, 1)) 90%, black);
    }
  }

  @supports not (color: oklch(0% 0 0)) {
    .btn:hover {
      background-color: var(--btn-color, var(--fallback-b2));
      border-color: var(--btn-color, var(--fallback-b2));
    }
  }

  .btn.glass:hover {
    --glass-opacity: 25%;
    --glass-border-opacity: 15%;
  }

  .btn-ghost:hover {
    border-color: #0000;
  }

  @supports (color: oklch(0% 0 0)) {
    .btn-ghost:hover {
      background-color: var(--fallback-bc, oklch(var(--bc) / .2));
    }
  }

  .btn-link:hover {
    background-color: #0000;
    border-color: #0000;
    text-decoration-line: underline;
  }

  .btn-outline:hover {
    --tw-border-opacity: 1;
    border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
    --tw-bg-opacity: 1;
    background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-b1, oklch(var(--b1) / var(--tw-text-opacity)));
  }

  .btn-outline.btn-primary:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-primary:hover {
      background-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-secondary:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-sc, oklch(var(--sc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-secondary:hover {
      background-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-accent:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-ac, oklch(var(--ac) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-accent:hover {
      background-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-success:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-suc, oklch(var(--suc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-success:hover {
      background-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-info:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-inc, oklch(var(--inc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-info:hover {
      background-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-warning:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-wac, oklch(var(--wac) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-warning:hover {
      background-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
    }
  }

  .btn-outline.btn-error:hover {
    --tw-text-opacity: 1;
    color: var(--fallback-erc, oklch(var(--erc) / var(--tw-text-opacity)));
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btn-outline.btn-error:hover {
      background-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
    }
  }

  .btn-disabled:hover, .btn[disabled]:hover, .btn:disabled:hover {
    --tw-border-opacity: 0;
    background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
    --tw-bg-opacity: .2;
    color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
    --tw-text-opacity: .2;
  }

  @supports (color: color-mix(in oklab, black, black)) {
    .btninput[type="checkbox"]:checked:hover, .btninput[type="radio"]:checked:hover {
      background-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
      border-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
    }
  }

  .dropdown.dropdown-hover:hover .dropdown-content {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
    cursor: pointer;
    outline-offset: 2px;
    outline: 2px solid #0000;
  }

  @supports (color: oklch(0% 0 0)) {
    :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover {
      background-color: var(--fallback-bc, oklch(var(--bc) / .1));
    }
  }
}

.dropdown:is(details) summary::-webkit-details-marker {
  display: none;
}

.label {
  -webkit-user-select: none;
  user-select: none;
  justify-content: space-between;
  align-items: center;
  padding: .5rem .25rem;
  display: flex;
}

.input {
  appearance: none;
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  border-width: 1px;
  border-color: #0000;
  flex-shrink: 1;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

.input[type="number"]::-webkit-inner-spin-button {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-inline-end: -1rem;
}

.input-md[type="number"]::-webkit-inner-spin-button {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-inline-end: -1rem;
}

.join {
  border-radius: var(--rounded-btn, .5rem);
  align-items: stretch;
  display: inline-flex;
}

.join :where(.join-item), .join .join-item:not(:first-child):not(:last-child), .join :not(:first-child):not(:last-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}

.join .join-item:first-child:not(:last-child), .join :first-child:not(:last-child) .join-item {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.join .dropdown .join-item:first-child:not(:last-child), .join :first-child:not(:last-child) .dropdown .join-item {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}

.join :where(.join-item:first-child:not(:last-child)), .join :where(:first-child:not(:last-child) .join-item) {
  border-start-start-radius: inherit;
  border-end-start-radius: inherit;
}

.join .join-item:last-child:not(:first-child), .join :last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

.join :where(.join-item:last-child:not(:first-child)), .join :where(:last-child:not(:first-child) .join-item) {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}

@supports not selector(:has(*)) {
  :where(.join *) {
    border-radius: inherit;
  }
}

@supports selector(:has(*)) {
  :where(.join :has(.join-item)) {
    border-radius: inherit;
  }
}

.kbd {
  border-radius: var(--rounded-btn, .5rem);
  border-width: 1px;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  border-bottom-width: 2px;
  justify-content: center;
  align-items: center;
  min-width: 2.2em;
  min-height: 2.2em;
  padding-left: .5rem;
  padding-right: .5rem;
  display: inline-flex;
}

.menu {
  flex-flow: column wrap;
  padding: .5rem;
  font-size: .875rem;
  line-height: 1.25rem;
  display: flex;
}

.menu :where(li ul) {
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: .5rem;
  position: relative;
}

.menu :where(li:not(.menu-title) > :not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  -webkit-user-select: none;
  user-select: none;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  gap: .5rem;
  display: grid;
}

.menu li.disabled {
  cursor: not-allowed;
  -webkit-user-select: none;
  user-select: none;
  color: var(--fallback-bc, oklch(var(--bc) / .3));
}

.menu :where(li > .menu-dropdown:not(.menu-dropdown-show)) {
  display: none;
}

:where(.menu li) {
  flex-flow: column wrap;
  flex-shrink: 0;
  align-items: stretch;
  display: flex;
  position: relative;
}

:where(.menu li) .badge {
  justify-self: end;
}

.mockup-browser {
  border-radius: var(--rounded-box, 1rem);
  position: relative;
  overflow: auto hidden;
}

.mockup-browser pre[data-prefix]:before {
  content: attr(data-prefix);
  text-align: right;
  display: inline-block;
}

.progress {
  appearance: none;
  border-radius: var(--rounded-box, 1rem);
  background-color: var(--fallback-bc, oklch(var(--bc) / .2));
  width: 100%;
  height: .5rem;
  position: relative;
  overflow: hidden;
}

.radio {
  --chkbg: var(--bc);
  cursor: pointer;
  appearance: none;
  border-width: 1px;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-border-opacity: .2;
  border-radius: 9999px;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}

.select {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  appearance: none;
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  background-image: linear-gradient(45deg, #0000 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, #0000 50%);
  background-position: calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%);
  background-repeat: no-repeat;
  background-size: 4px 4px, 4px 4px;
  border-width: 1px;
  border-color: #0000;
  height: 3rem;
  min-height: 3rem;
  padding-inline: 1rem 2.5rem;
  font-size: .875rem;
  line-height: 2;
  display: inline-flex;
}

.select[multiple] {
  height: auto;
}

.table {
  border-radius: var(--rounded-box, 1rem);
  text-align: left;
  width: 100%;
  font-size: .875rem;
  line-height: 1.25rem;
  position: relative;
}

.table :where(.table-pin-rows thead tr) {
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  position: sticky;
  top: 0;
}

.table :where(.table-pin-rows tfoot tr) {
  z-index: 1;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  position: sticky;
  bottom: 0;
}

.table :where(.table-pin-cols tr th) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  position: sticky;
  left: 0;
  right: 0;
}

.table-zebra tbody tr:nth-child(2n) :where(.table-pin-cols tr th) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
}

.textarea {
  border-radius: var(--rounded-btn, .5rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  border-width: 1px;
  border-color: #0000;
  flex-shrink: 1;
  min-height: 3rem;
  padding: .5rem 1rem;
  font-size: .875rem;
  line-height: 2;
}

.avatar-group {
  display: flex;
  overflow: hidden;
}

.avatar-group :where(.avatar) {
  --tw-border-opacity: 1;
  border-width: 4px;
  border-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-border-opacity)));
  border-radius: 9999px;
  overflow: hidden;
}

.btm-nav > :not(.active) {
  padding-top: .125rem;
}

.btm-nav > :where(.active) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  border-top-width: 2px;
}

.btm-nav > .disabled, .btm-nav > [disabled] {
  pointer-events: none;
  --tw-border-opacity: 0;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  --tw-bg-opacity: .1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-text-opacity: .2;
}

.btm-nav > * .label {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (prefers-reduced-motion: no-preference) {
  .btn {
    animation: button-pop var(--animation-btn, .25s) ease-out;
  }
}

.btn:active:hover, .btn:active:focus {
  transform: scale(var(--btn-focus-scale, .97));
  animation: ease-out button-pop;
}

@supports not (color: oklch(0% 0 0)) {
  .btn {
    background-color: var(--btn-color, var(--fallback-b2));
    border-color: var(--btn-color, var(--fallback-b2));
  }

  .btn-primary {
    --btn-color: var(--fallback-p);
  }

  .btn-secondary {
    --btn-color: var(--fallback-s);
  }

  .btn-accent {
    --btn-color: var(--fallback-a);
  }

  .btn-info {
    --btn-color: var(--fallback-in);
  }

  .btn-success {
    --btn-color: var(--fallback-su);
  }

  .btn-warning {
    --btn-color: var(--fallback-wa);
  }

  .btn-error {
    --btn-color: var(--fallback-er);
  }
}

@supports (color: color-mix(in oklab, black, black)) {
  .btn-active {
    background-color: color-mix(in oklab, oklch(var(--btn-color, var(--b3)) / var(--tw-bg-opacity, 1)) 90%, black);
    border-color: color-mix(in oklab, oklch(var(--btn-color, var(--b3)) / var(--tw-border-opacity, 1)) 90%, black);
  }

  .btn-outline.btn-primary.btn-active {
    background-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-p, oklch(var(--p) / 1)) 90%, black);
  }

  .btn-outline.btn-secondary.btn-active {
    background-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-s, oklch(var(--s) / 1)) 90%, black);
  }

  .btn-outline.btn-accent.btn-active {
    background-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-a, oklch(var(--a) / 1)) 90%, black);
  }

  .btn-outline.btn-success.btn-active {
    background-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-su, oklch(var(--su) / 1)) 90%, black);
  }

  .btn-outline.btn-info.btn-active {
    background-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-in, oklch(var(--in) / 1)) 90%, black);
  }

  .btn-outline.btn-warning.btn-active {
    background-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-wa, oklch(var(--wa) / 1)) 90%, black);
  }

  .btn-outline.btn-error.btn-active {
    background-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
    border-color: color-mix(in oklab, var(--fallback-er, oklch(var(--er) / 1)) 90%, black);
  }
}

.btn:focus-visible {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
}

.btn-primary {
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-p, oklch(var(--p) / 1));
}

@supports (color: oklch(0% 0 0)) {
  .btn-primary {
    --btn-color: var(--p);
  }

  .btn-secondary {
    --btn-color: var(--s);
  }

  .btn-accent {
    --btn-color: var(--a);
  }

  .btn-info {
    --btn-color: var(--in);
  }

  .btn-success {
    --btn-color: var(--su);
  }

  .btn-warning {
    --btn-color: var(--wa);
  }

  .btn-error {
    --btn-color: var(--er);
  }
}

.btn-secondary {
  --tw-text-opacity: 1;
  color: var(--fallback-sc, oklch(var(--sc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-s, oklch(var(--s) / 1));
}

.btn-accent {
  --tw-text-opacity: 1;
  color: var(--fallback-ac, oklch(var(--ac) / var(--tw-text-opacity)));
  outline-color: var(--fallback-a, oklch(var(--a) / 1));
}

.btn-info {
  --tw-text-opacity: 1;
  color: var(--fallback-inc, oklch(var(--inc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-in, oklch(var(--in) / 1));
}

.btn-success {
  --tw-text-opacity: 1;
  color: var(--fallback-suc, oklch(var(--suc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-su, oklch(var(--su) / 1));
}

.btn-warning {
  --tw-text-opacity: 1;
  color: var(--fallback-wac, oklch(var(--wac) / var(--tw-text-opacity)));
  outline-color: var(--fallback-wa, oklch(var(--wa) / 1));
}

.btn-error {
  --tw-text-opacity: 1;
  color: var(--fallback-erc, oklch(var(--erc) / var(--tw-text-opacity)));
  outline-color: var(--fallback-er, oklch(var(--er) / 1));
}

.btn.glass {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  outline-color: currentColor;
}

.btn.glass.btn-active {
  --glass-opacity: 25%;
  --glass-border-opacity: 15%;
}

.btn-ghost {
  color: currentColor;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #0000;
  border-width: 1px;
  border-color: #0000;
  outline-color: currentColor;
}

.btn-ghost.btn-active {
  background-color: var(--fallback-bc, oklch(var(--bc) / .2));
  border-color: #0000;
}

.btn-link {
  --tw-text-opacity: 1;
  color: var(--fallback-p, oklch(var(--p) / var(--tw-text-opacity)));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #0000;
  border-color: #0000;
  outline-color: currentColor;
  text-decoration-line: underline;
}

.btn-link.btn-active {
  background-color: #0000;
  border-color: #0000;
  text-decoration-line: underline;
}

.btn-outline {
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #0000;
  border-color: currentColor;
}

.btn-outline.btn-active {
  --tw-border-opacity: 1;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-b1, oklch(var(--b1) / var(--tw-text-opacity)));
}

.btn-outline.btn-primary {
  --tw-text-opacity: 1;
  color: var(--fallback-p, oklch(var(--p) / var(--tw-text-opacity)));
}

.btn-outline.btn-primary.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
}

.btn-outline.btn-secondary {
  --tw-text-opacity: 1;
  color: var(--fallback-s, oklch(var(--s) / var(--tw-text-opacity)));
}

.btn-outline.btn-secondary.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-sc, oklch(var(--sc) / var(--tw-text-opacity)));
}

.btn-outline.btn-accent {
  --tw-text-opacity: 1;
  color: var(--fallback-a, oklch(var(--a) / var(--tw-text-opacity)));
}

.btn-outline.btn-accent.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-ac, oklch(var(--ac) / var(--tw-text-opacity)));
}

.btn-outline.btn-success {
  --tw-text-opacity: 1;
  color: var(--fallback-su, oklch(var(--su) / var(--tw-text-opacity)));
}

.btn-outline.btn-success.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-suc, oklch(var(--suc) / var(--tw-text-opacity)));
}

.btn-outline.btn-info {
  --tw-text-opacity: 1;
  color: var(--fallback-in, oklch(var(--in) / var(--tw-text-opacity)));
}

.btn-outline.btn-info.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-inc, oklch(var(--inc) / var(--tw-text-opacity)));
}

.btn-outline.btn-warning {
  --tw-text-opacity: 1;
  color: var(--fallback-wa, oklch(var(--wa) / var(--tw-text-opacity)));
}

.btn-outline.btn-warning.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-wac, oklch(var(--wac) / var(--tw-text-opacity)));
}

.btn-outline.btn-error {
  --tw-text-opacity: 1;
  color: var(--fallback-er, oklch(var(--er) / var(--tw-text-opacity)));
}

.btn-outline.btn-error.btn-active {
  --tw-text-opacity: 1;
  color: var(--fallback-erc, oklch(var(--erc) / var(--tw-text-opacity)));
}

.btn.btn-disabled, .btn[disabled], .btn:disabled {
  --tw-border-opacity: 0;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  --tw-bg-opacity: .2;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  --tw-text-opacity: .2;
}

.btninput[type="checkbox"]:checked, .btninput[type="radio"]:checked {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p, oklch(var(--p) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p, oklch(var(--p) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-pc, oklch(var(--pc) / var(--tw-text-opacity)));
}

.btninput[type="checkbox"]:checked:focus-visible, .btninput[type="radio"]:checked:focus-visible {
  outline-color: var(--fallback-p, oklch(var(--p) / 1));
}

@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, .98));
  }

  40% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

.checkbox:focus {
  box-shadow: none;
}

.checkbox:focus-visible {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.checkbox:disabled {
  cursor: not-allowed;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  opacity: .2;
  border-width: 0;
  border-color: #0000;
}

.checkbox:checked, .checkbox[aria-checked="true"] {
  animation: checkmark var(--animation-input, .2s) ease-out;
  background-repeat: no-repeat;
  background-color: var(--chkbg);
  background-image: linear-gradient(-45deg, transparent 65%, var(--chkbg) 65.99%), linear-gradient(45deg, transparent 75%, var(--chkbg) 75.99%), linear-gradient(-45deg, var(--chkbg) 40%, transparent 40.99%), linear-gradient(45deg, var(--chkbg) 30%, var(--chkfg) 30.99%, var(--chkfg) 40%, transparent 40.99%), linear-gradient(-45deg, var(--chkfg) 50%, var(--chkbg) 50.99%);
}

.checkbox:indeterminate {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  animation: checkmark var(--animation-input, .2s) ease-out;
  background-repeat: no-repeat;
  background-image: linear-gradient(90deg, transparent 80%, var(--chkbg) 80%), linear-gradient(-90deg, transparent 80%, var(--chkbg) 80%), linear-gradient(0deg, var(--chkbg) 43%, var(--chkfg) 43%, var(--chkfg) 57%, var(--chkbg) 57%);
}

@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }

  50% {
    background-position-y: -2px;
  }

  100% {
    background-position-y: 0;
  }
}

details.collapse {
  width: 100%;
}

details.collapse summary {
  outline-offset: 2px;
  outline: 2px solid #0000;
  display: block;
  position: relative;
}

details.collapse summary::-webkit-details-marker {
  display: none;
}

.collapse:focus-visible, .collapse:has(.collapse-title:focus-visible), .collapse:has( > input[type="checkbox"]:focus-visible), .collapse:has( > input[type="radio"]:focus-visible) {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.collapse-arrow > .collapse-title:after {
  --tw-translate-y: -100%;
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  content: "";
  transform-origin: 75% 75%;
  pointer-events: none;
  top: 1.9rem;
  width: .5rem;
  height: .5rem;
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: block;
  position: absolute;
  inset-inline-end: 1.4rem;
  box-shadow: 2px 2px;
}

.collapse-plus > .collapse-title:after {
  content: "+";
  pointer-events: none;
  top: .9rem;
  width: .5rem;
  height: .5rem;
  transition-property: all;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: block;
  position: absolute;
  inset-inline-end: 1.4rem;
}

.collapse:not(.collapse-open):not(.collapse-close) > input[type="checkbox"], .collapse:not(.collapse-open):not(.collapse-close) > input[type="radio"]:not(:checked), .collapse:not(.collapse-open):not(.collapse-close) > .collapse-title {
  cursor: pointer;
}

.collapse:focus:not(.collapse-open):not(.collapse-close):not(.collapse[open]) > .collapse-title {
  cursor: unset;
}

.collapse-title {
  position: relative;
}

:where(.collapse > input[type="checkbox"]), :where(.collapse > input[type="radio"]) {
  z-index: 1;
}

.collapse-title, :where(.collapse > input[type="checkbox"]), :where(.collapse > input[type="radio"]) {
  padding: 1rem;
  width: 100%;
  min-height: 3.75rem;
  padding-inline-end: 3rem;
  transition: background-color .2s ease-out;
}

.collapse[open] > :where(.collapse-content), .collapse-open > :where(.collapse-content), .collapse:focus:not(.collapse-close) > :where(.collapse-content), .collapse:not(.collapse-close) > :where(input[type="checkbox"]:checked ~ .collapse-content), .collapse:not(.collapse-close) > :where(input[type="radio"]:checked ~ .collapse-content) {
  padding-bottom: 1rem;
  transition: padding .2s ease-out, background-color .2s ease-out;
}

.collapse[open].collapse-arrow > .collapse-title:after, .collapse-open.collapse-arrow > .collapse-title:after, .collapse-arrow:focus:not(.collapse-close) > .collapse-title:after, .collapse-arrow:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title:after, .collapse-arrow:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-title:after {
  --tw-translate-y: -50%;
  --tw-rotate: 225deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.collapse[open].collapse-plus > .collapse-title:after, .collapse-open.collapse-plus > .collapse-title:after, .collapse-plus:focus:not(.collapse-close) > .collapse-title:after, .collapse-plus:not(.collapse-close) > input[type="checkbox"]:checked ~ .collapse-title:after, .collapse-plus:not(.collapse-close) > input[type="radio"]:checked ~ .collapse-title:after {
  content: "−";
}

.dropdown.dropdown-open .dropdown-content, .dropdown:focus .dropdown-content, .dropdown:focus-within .dropdown-content {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.input input {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-p, oklch(var(--p) / var(--tw-bg-opacity)));
  background-color: #0000;
}

.input input:focus {
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.input[list]::-webkit-calendar-picker-indicator {
  line-height: 1em;
}

.input:focus, .input:focus-within {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / .2));
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / .2));
}

.input:has( > input[disabled]), .input-disabled, .input:disabled, .input[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  color: var(--fallback-bc, oklch(var(--bc) / .4));
}

.input:has( > input[disabled])::placeholder, .input-disabled::placeholder, .input:disabled::placeholder, .input[disabled]::placeholder {
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: .2;
}

.input:has( > input[disabled]) > input[disabled] {
  cursor: not-allowed;
}

.input::-webkit-date-and-time-value {
  text-align: inherit;
}

.join > :where(:not(:first-child)) {
  margin-top: 0;
  margin-bottom: 0;
  margin-inline-start: -1px;
}

.join > :where(:not(:first-child)).btn {
  margin-inline-start: calc(var(--border-btn) * -1);
}

.join-item:focus {
  isolation: isolate;
}

:where(.menu li:empty) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  opacity: .1;
  height: 1px;
  margin: .5rem 1rem;
}

.menu :where(li ul):before {
  bottom: .75rem;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  opacity: .1;
  content: "";
  inset-inline-start: 0;
  width: 1px;
  position: absolute;
  top: .75rem;
}

.menu :where(li:not(.menu-title) > :not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  text-align: start;
  text-wrap: balance;
  padding: .5rem 1rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

:where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):is(summary):not(.active, .btn):focus-visible, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn).focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(summary, .active, .btn):focus, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):is(summary):not(.active, .btn):focus-visible {
  cursor: pointer;
  background-color: var(--fallback-bc, oklch(var(--bc) / .1));
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
  outline-offset: 2px;
  outline: 2px solid #0000;
}

.menu li > :not(ul, .menu-title, details, .btn):active, .menu li > :not(ul, .menu-title, details, .btn).active, .menu li > details > summary:active {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-n, oklch(var(--n) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-nc, oklch(var(--nc) / var(--tw-text-opacity)));
}

.menu :where(li > details > summary)::-webkit-details-marker {
  display: none;
}

.menu :where(li > details > summary):after, .menu :where(li > .menu-dropdown-toggle):after {
  content: "";
  transform-origin: 75% 75%;
  pointer-events: none;
  justify-self: end;
  width: .5rem;
  height: .5rem;
  margin-top: -.5rem;
  transition-property: transform, margin-top;
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  display: block;
  transform: rotate(45deg);
  box-shadow: 2px 2px;
}

.menu :where(li > details[open] > summary):after, .menu :where(li > .menu-dropdown-toggle.menu-dropdown-show):after {
  margin-top: 0;
  transform: rotate(225deg);
}

.menu-title {
  color: var(--fallback-bc, oklch(var(--bc) / .4));
  padding: .5rem 1rem;
  font-size: .875rem;
  font-weight: 700;
  line-height: 1.25rem;
}

.mockup-phone {
  background-color: #000;
  border: 4px solid #444;
  border-radius: 50px;
  margin: 0 auto;
  padding: 10px;
  display: inline-block;
  overflow: hidden;
}

.mockup-phone .camera {
  z-index: 11;
  background: #000;
  border-bottom-right-radius: 17px;
  border-bottom-left-radius: 17px;
  width: 150px;
  height: 25px;
  margin: 0 auto;
  position: relative;
  top: 0;
  left: 0;
}

.mockup-phone .camera:before {
  content: "";
  background-color: #0c0b0e;
  border-radius: 5px;
  width: 50px;
  height: 4px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mockup-phone .camera:after {
  content: "";
  background-color: #0f0b25;
  border-radius: 5px;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 20%;
  left: 70%;
}

.mockup-phone .display {
  border-radius: 40px;
  margin-top: -25px;
  overflow: hidden;
}

.mockup-browser .mockup-browser-toolbar {
  align-items: center;
  width: 100%;
  margin-top: .75rem;
  margin-bottom: .75rem;
  padding-right: 1.4em;
  display: inline-flex;
}

.mockup-browser .mockup-browser-toolbar:where([dir="rtl"], [dir="rtl"] *) {
  flex-direction: row-reverse;
}

.mockup-browser .mockup-browser-toolbar:before {
  content: "";
  aspect-ratio: 1;
  opacity: .3;
  border-radius: 9999px;
  height: .75rem;
  margin-right: 4.8rem;
  display: inline-block;
  box-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
}

.mockup-browser .mockup-browser-toolbar .input {
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  direction: ltr;
  width: 24rem;
  height: 1.75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  display: block;
  position: relative;
  overflow: hidden;
}

.mockup-browser .mockup-browser-toolbar .input:before {
  content: "";
  aspect-ratio: 1;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: .6;
  border-width: 2px;
  border-color: currentColor;
  border-radius: 9999px;
  height: .75rem;
  position: absolute;
  top: 50%;
  left: .5rem;
}

.mockup-browser .mockup-browser-toolbar .input:after {
  content: "";
  --tw-translate-y: 25%;
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: .6;
  border-width: 1px;
  border-color: currentColor;
  border-radius: 9999px;
  height: .5rem;
  position: absolute;
  top: 50%;
  left: 1.25rem;
}

@keyframes modal-pop {
  0% {
    opacity: 0;
  }
}

.progress::-moz-progress-bar {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
}

.progress:indeterminate {
  --progress-color: var(--fallback-bc, oklch(var(--bc) / 1));
  background-image: repeating-linear-gradient(90deg, var(--progress-color) -1%, var(--progress-color) 10%, transparent 10%, transparent 90%);
  background-position-x: 15%;
  background-size: 200%;
  animation: 5s ease-in-out infinite progress-loading;
}

.progress::-webkit-progress-bar {
  border-radius: var(--rounded-box, 1rem);
  background-color: #0000;
}

.progress::-webkit-progress-value {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
}

.progress:indeterminate::-moz-progress-bar {
  background-color: #0000;
  background-image: repeating-linear-gradient(90deg, var(--progress-color) -1%, var(--progress-color) 10%, transparent 10%, transparent 90%);
  background-position-x: 15%;
  background-size: 200%;
  animation: 5s ease-in-out infinite progress-loading;
}

@keyframes progress-loading {
  50% {
    background-position-x: -115%;
  }
}

.radio:focus {
  box-shadow: none;
}

.radio:focus-visible {
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.radio:checked, .radio[aria-checked="true"] {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  animation: radiomark var(--animation-input, .2s) ease-out;
  box-shadow: 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  background-image: none;
}

.radio:disabled {
  cursor: not-allowed;
  opacity: .2;
}

@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 12px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  }

  50% {
    box-shadow: 0 0 0 3px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 3px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  }

  100% {
    box-shadow: 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset, 0 0 0 4px var(--fallback-b1, oklch(var(--b1) / 1)) inset;
  }
}

@keyframes rating-pop {
  0% {
    transform: translateY(-.125em);
  }

  40% {
    transform: translateY(-.125em);
  }

  100% {
    transform: translateY(0);
  }
}

.select:focus {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / .2));
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / .2));
}

.select-disabled, .select:disabled, .select[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  color: var(--fallback-bc, oklch(var(--bc) / .4));
}

.select-disabled::placeholder, .select:disabled::placeholder, .select[disabled]::placeholder {
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: .2;
}

.select-multiple, .select[multiple], .select[size].select:not([size="1"]) {
  background-image: none;
  padding-right: 1rem;
}

[dir="rtl"] .select {
  background-position: 12px calc(1px + 50%), 16px calc(1px + 50%);
}

.skeleton {
  border-radius: var(--rounded-box, 1rem);
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  will-change: background-position;
  background-image: linear-gradient(105deg, transparent 0%, transparent 40%, var(--fallback-b1, oklch(var(--b1) / 1)) 50%, transparent 60%, transparent 100%);
  background-position-x: -50%;
  background-repeat: no-repeat;
  background-size: 200%;
  animation: 1.8s ease-in-out infinite skeleton;
}

@media (prefers-reduced-motion) {
  .skeleton {
    animation-duration: 15s;
  }
}

@keyframes skeleton {
  from {
    background-position: 150%;
  }

  to {
    background-position: -50%;
  }
}

.table:where([dir="rtl"], [dir="rtl"] *) {
  text-align: right;
}

.table :where(th, td) {
  vertical-align: middle;
  padding: .75rem 1rem;
}

.table tr.active, .table tr.active:nth-child(2n), .table-zebra tbody tr:nth-child(2n) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
}

.table-zebra tr.active, .table-zebra tr.active:nth-child(2n), .table-zebra-zebra tbody tr:nth-child(2n) {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
}

.table :where(thead tr, tbody tr:not(:last-child), tbody tr:first-child:last-child) {
  --tw-border-opacity: 1;
  border-bottom-width: 1px;
  border-bottom-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
}

.table :where(thead, tfoot) {
  white-space: nowrap;
  color: var(--fallback-bc, oklch(var(--bc) / .6));
  font-size: .75rem;
  font-weight: 700;
  line-height: 1rem;
}

.table :where(tfoot) {
  --tw-border-opacity: 1;
  border-top-width: 1px;
  border-top-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
}

.textarea:focus {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / .2));
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-bc, oklch(var(--bc) / .2));
}

.textarea-primary {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p, oklch(var(--p) / var(--tw-border-opacity)));
}

.textarea-primary:focus {
  --tw-border-opacity: 1;
  border-color: var(--fallback-p, oklch(var(--p) / var(--tw-border-opacity)));
  outline-color: var(--fallback-p, oklch(var(--p) / 1));
}

.textarea-disabled, .textarea:disabled, .textarea[disabled] {
  cursor: not-allowed;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  color: var(--fallback-bc, oklch(var(--bc) / .4));
}

.textarea-disabled::placeholder, .textarea:disabled::placeholder, .textarea[disabled]::placeholder {
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-placeholder-opacity)));
  --tw-placeholder-opacity: .2;
}

@keyframes toast-pop {
  0% {
    opacity: 0;
    transform: scale(.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.glass, .glass.btn-active {
  backdrop-filter: blur(var(--glass-blur, 40px));
  background-color: #0000;
  background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%))0%, #0000 100%), linear-gradient(var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%))25%, #0000 25%);
  box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%))inset, 0 0 0 2px #0000000d;
  text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  border: none;
}

@media (hover: hover) {
  .glass.btn-active {
    backdrop-filter: blur(var(--glass-blur, 40px));
    background-color: #0000;
    background-image: linear-gradient(135deg, rgb(255 255 255 / var(--glass-opacity, 30%))0%, #0000 100%), linear-gradient(var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%))25%, #0000 25%);
    box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%))inset, 0 0 0 2px #0000000d;
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
    border: none;
  }
}

.btm-nav-xs {
  height: 2.5rem;
}

.btm-nav-xs > :where(.active) {
  border-top-width: 1px;
}

.btm-nav-xs .btm-nav-label {
  font-size: .75rem;
  line-height: 1rem;
}

.btm-nav-sm {
  height: 3rem;
}

.btm-nav-sm > :where(.active) {
  border-top-width: 2px;
}

.btm-nav-sm .btm-nav-label {
  font-size: .75rem;
  line-height: 1rem;
}

.btm-nav-md {
  height: 4rem;
}

.btm-nav-md > :where(.active) {
  border-top-width: 2px;
}

.btm-nav-md .btm-nav-label {
  font-size: .875rem;
  line-height: 1.25rem;
}

.btm-nav-lg {
  height: 5rem;
}

.btm-nav-lg > :where(.active) {
  border-top-width: 4px;
}

.btm-nav-lg .btm-nav-label {
  font-size: 1rem;
  line-height: 1.5rem;
}

.join.join-vertical {
  flex-direction: column;
}

.join.join-vertical .join-item:first-child:not(:last-child), .join.join-vertical :first-child:not(:last-child) .join-item {
  border-start-start-radius: inherit;
  border-start-end-radius: inherit;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}

.join.join-vertical .join-item:last-child:not(:first-child), .join.join-vertical :last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-end-radius: inherit;
  border-end-start-radius: inherit;
}

.join.join-horizontal {
  flex-direction: row;
}

.join.join-horizontal .join-item:first-child:not(:last-child), .join.join-horizontal :first-child:not(:last-child) .join-item {
  border-start-start-radius: inherit;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-end-start-radius: inherit;
}

.join.join-horizontal .join-item:last-child:not(:first-child), .join.join-horizontal :last-child:not(:first-child) .join-item {
  border-start-start-radius: 0;
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
  border-end-start-radius: 0;
}

.avatar.online:before {
  content: "";
  z-index: 10;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-su, oklch(var(--su) / var(--tw-bg-opacity)));
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-b1, oklch(var(--b1) / 1));
  border-radius: 9999px;
  width: 15%;
  height: 15%;
  display: block;
  position: absolute;
  top: 7%;
  right: 7%;
}

.avatar.offline:before {
  content: "";
  z-index: 10;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  outline-width: 2px;
  outline-style: solid;
  outline-color: var(--fallback-b1, oklch(var(--b1) / 1));
  border-radius: 9999px;
  width: 15%;
  height: 15%;
  display: block;
  position: absolute;
  top: 7%;
  right: 7%;
}

.join.join-vertical > :where(:not(:first-child)) {
  margin-top: -1px;
  margin-left: 0;
  margin-right: 0;
}

.join.join-vertical > :where(:not(:first-child)).btn {
  margin-top: calc(var(--border-btn) * -1);
}

.join.join-horizontal > :where(:not(:first-child)) {
  margin-top: 0;
  margin-bottom: 0;
  margin-inline-start: -1px;
}

.join.join-horizontal > :where(:not(:first-child)).btn {
  margin-inline-start: calc(var(--border-btn) * -1);
}

.menu-xs :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-xs :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: .25rem;
  padding: .25rem .5rem;
  font-size: .75rem;
  line-height: 1rem;
}

.menu-xs .menu-title {
  padding: .25rem .5rem;
}

.menu-sm :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-sm :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  padding: .25rem .75rem;
  font-size: .875rem;
  line-height: 1.25rem;
}

.menu-sm .menu-title {
  padding: .5rem .75rem;
}

.menu-md :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-md :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  padding: .5rem 1rem;
  font-size: .875rem;
  line-height: 1.25rem;
}

.menu-md .menu-title {
  padding: .5rem 1rem;
}

.menu-lg :where(li:not(.menu-title) > :not(ul, details, .menu-title)), .menu-lg :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: var(--rounded-btn, .5rem);
  padding: .75rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.menu-lg .menu-title {
  padding: .75rem 1.5rem;
}

.visible {
  visibility: visible;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.isolate {
  isolation: isolate;
}

.mx-1 {
  margin-left: .25rem;
  margin-right: .25rem;
}

.mx-2 {
  margin-left: .5rem;
  margin-right: .5rem;
}

.mt-2 {
  margin-top: .5rem;
}

.block {
  display: block;
}

.flex {
  display: flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.w-full {
  width: 100%;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.resize {
  resize: both;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.gap-y-1\\.5 {
  row-gap: .375rem;
}

.gap-y-1 {
  row-gap: .25rem;
}

.border {
  border-width: 1px;
}

.border-base-300 {
  --tw-border-opacity: 1;
  border-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-border-opacity)));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.bg-base-200 {
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
}

.p-5 {
  padding: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-medium {
  font-weight: 500;
}

.underline {
  text-decoration-line: underline;
}

.outline {
  outline-style: solid;
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter;
  transition-duration: .15s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
}

@media (hover: hover) {
  .table .hover\\:hover:hovertr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table .hover\\:hover:hovertr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table-zebra .hover\\:hover:hovertr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  .table-zebra .hover\\:hover:hovertr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  .table .disabled\\:hover:disabledtr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table .disabled\\:hover:disabledtr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b2, oklch(var(--b2) / var(--tw-bg-opacity)));
  }

  .table-zebra .disabled\\:hover:disabledtr:hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }

  .table-zebra .disabled\\:hover:disabledtr:nth-child(2n):hover {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3, oklch(var(--b3) / var(--tw-bg-opacity)));
  }
}
/*# sourceMappingURL=index.75a90472.css.map */
 
`}),i("800sp",function(e,o){t(e.exports,"css",()=>a("4jdI8").css),t(e.exports,"html",()=>a("jJTNo").html),t(e.exports,"LitElement",()=>a("lPSdM").LitElement),a("3qR54"),a("jJTNo"),a("lPSdM"),a("8FVzH")}),i("3qR54",function(e,o){t(e.exports,"notEqual",()=>m),t(e.exports,"ReactiveElement",()=>f),t(e.exports,"css",()=>a("4jdI8").css);var r=a("4jdI8");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{is:i,defineProperty:l,getOwnPropertyDescriptor:n,getOwnPropertyNames:c,getOwnPropertySymbols:s,getPrototypeOf:b}=Object,d=globalThis,p=d.trustedTypes,h=p?p.emptyScript:"",u=d.reactiveElementPolyfillSupport,v=(t,e)=>t,k={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>!i(t,e),w={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),d.litPropertyMetadata??=new WeakMap;class f extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){let{get:r,set:a}=n(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){let i=r?.call(this);a.call(this,e),this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;let t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){let t=this.properties;for(let e of[...c(t),...s(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,o]of e)this.elementProperties.set(t,o)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let o of new Set(t.flat(1/0).reverse()))e.unshift((0,r.getCompatibleStyle)(o));else void 0!==t&&e.push((0,r.getCompatibleStyle)(t));return e}static _$Eu(t,e){let o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,r.adoptStyles)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){let o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){let a=(void 0!==o.converter?.toAttribute?o.converter:k).toAttribute(e,o.type);this._$Em=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){let o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=o.getPropertyOptions(r),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:k;this._$Em=r,this[r]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(!((o??=this.constructor.getPropertyOptions(t)).hasChanged??m)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[v("elementProperties")]=new Map,f[v("finalized")]=new Map,u?.({ReactiveElement:f}),(d.reactiveElementVersions??=[]).push("2.0.4")}),i("4jdI8",function(e,o){t(e.exports,"css",()=>s),t(e.exports,"adoptStyles",()=>b),t(e.exports,"getCompatibleStyle",()=>d);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=globalThis,a=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),l=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(a&&void 0===t){let o=void 0!==e&&1===e.length;o&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&l.set(e,t))}return t}toString(){return this.cssText}}let c=t=>new n("string"==typeof t?t:t+"",void 0,i),s=(t,...e)=>new n(1===t.length?t[0]:e.reduce((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]),t,i),b=(t,e)=>{if(a)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let o of e){let e=document.createElement("style"),a=r.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=o.cssText,t.appendChild(e)}},d=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return c(e)})(t):t}),i("jJTNo",function(e,o){t(e.exports,"html",()=>_),t(e.exports,"noChange",()=>A),t(e.exports,"nothing",()=>j),t(e.exports,"render",()=>Y);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r=globalThis,a=r.trustedTypes,i=a?a.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+n,s=`<${c}>`,b=document,d=()=>b.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,h=Array.isArray,u=t=>h(t)||"function"==typeof t?.[Symbol.iterator],v="[ 	\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,w=/>/g,f=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,y=/"/g,x=/^(?:script|style|textarea|title)$/i,$=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),_=$(1),A=($(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),E=new WeakMap,S=b.createTreeWalker(b,129);function z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}let C=(t,e)=>{let o=t.length-1,r=[],a,i=2===e?"<svg>":"",c=k;for(let e=0;e<o;e++){let o=t[e],b,d,p=-1,h=0;for(;h<o.length&&(c.lastIndex=h,null!==(d=c.exec(o)));)h=c.lastIndex,c===k?"!--"===d[1]?c=m:void 0!==d[1]?c=w:void 0!==d[2]?(x.test(d[2])&&(a=RegExp("</"+d[2],"g")),c=f):void 0!==d[3]&&(c=f):c===f?">"===d[0]?(c=a??k,p=-1):void 0===d[1]?p=-2:(p=c.lastIndex-d[2].length,b=d[1],c=void 0===d[3]?f:'"'===d[3]?y:g):c===y||c===g?c=f:c===m||c===w?c=k:(c=f,a=void 0);let u=c===f&&t[e+1].startsWith("/>")?" ":"";i+=c===k?o+s:p>=0?(r.push(b),o.slice(0,p)+l+o.slice(p)+n+u):o+n+(-2===p?e:u)}return[z(t,i+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class P{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,s=0,b=t.length-1,p=this.parts,[h,u]=C(t,e);if(this.el=P.createElement(h,o),S.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=S.nextNode())&&p.length<b;){if(1===r.nodeType){if(r.hasAttributes())for(let t of r.getAttributeNames())if(t.endsWith(l)){let e=u[s++],o=r.getAttribute(t).split(n),a=/([.?@])?(.*)/.exec(e);p.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?M:"?"===a[1]?H:"@"===a[1]?O:R}),r.removeAttribute(t)}else t.startsWith(n)&&(p.push({type:6,index:i}),r.removeAttribute(t));if(x.test(r.tagName)){let t=r.textContent.split(n),e=t.length-1;if(e>0){r.textContent=a?a.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],d()),S.nextNode(),p.push({type:2,index:++i});r.append(t[e],d())}}}else if(8===r.nodeType){if(r.data===c)p.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(n,t+1));)p.push({type:7,index:i}),t+=n.length-1}}i++}}static createElement(t,e){let o=b.createElement("template");return o.innerHTML=t,o}}function U(t,e,o=t,r){if(e===A)return e;let a=void 0!==r?o._$Co?.[r]:o._$Cl,i=p(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(t))._$AT(t,o,r),void 0!==r?(o._$Co??=[])[r]=a:o._$Cl=a),void 0!==a&&(e=U(t,a._$AS(t,e.values),a,r)),e}class T{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??b).importNode(e,!0);S.currentNode=r;let a=S.nextNode(),i=0,l=0,n=o[0];for(;void 0!==n;){if(i===n.index){let e;2===n.type?e=new N(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new L(a,this,t)),this._$AV.push(e),n=o[++l]}i!==n?.index&&(a=S.nextNode(),i++)}return S.currentNode=b,r}p(t){let e=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){p(t=U(this,t,e))?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==A&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==j&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=P.createElement(z(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{let t=new T(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new P(t)),e}k(t){h(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,r=0;for(let a of t)r===e.length?e.push(o=new N(this.S(d()),this.S(d()),this,this.options)):o=e[r],o._$AI(a),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}_$AI(t,e=this,o,r){let a=this.strings,i=!1;if(void 0===a)(i=!p(t=U(this,t,e,0))||t!==this._$AH&&t!==A)&&(this._$AH=t);else{let r,l;let n=t;for(t=a[0],r=0;r<a.length-1;r++)(l=U(this,n[o+r],e,r))===A&&(l=this._$AH[r]),i||=!p(l)||l!==this._$AH[r],l===j?t=j:t!==j&&(t+=(l??"")+a[r+1]),this._$AH[r]=l}i&&!r&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class M extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class O extends R{constructor(t,e,o,r,a){super(t,e,o,r,a),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??j)===A)return;let o=this._$AH,r=t===j&&o!==j||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==j&&(o===j||r);r&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}let I=r.litHtmlPolyfillSupport;I?.(P,N),(r.litHtmlVersions??=[]).push("3.1.4");let Y=(t,e,o)=>{let r=o?.renderBefore??e,a=r._$litPart$;if(void 0===a){let t=o?.renderBefore??null;r._$litPart$=a=new N(e.insertBefore(d(),t),t,void 0,o??{})}return a._$AI(t),a}}),i("lPSdM",function(e,o){t(e.exports,"css",()=>a("4jdI8").css),t(e.exports,"ReactiveElement",()=>a("3qR54").ReactiveElement),t(e.exports,"html",()=>a("jJTNo").html),t(e.exports,"noChange",()=>a("jJTNo").noChange),t(e.exports,"render",()=>a("jJTNo").render),t(e.exports,"LitElement",()=>l);var r=a("3qR54"),i=a("jJTNo");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends r.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,i.render)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return i.noChange}}l._$litElement$=!0,l.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:l});let n=globalThis.litElementPolyfillSupport;n?.({LitElement:l}),(globalThis.litElementVersions??=[]).push("4.0.6")}),i("8FVzH",function(t,e){});var l=a("hNeh9");a("800sp");var n=a("4jdI8"),c=a("jJTNo"),s=a("lPSdM");class b extends s.LitElement{static styles=[(0,n.css)`
    .item-graph {
      grid-area: left;
      
      // background-color: red;
    }
    .item-result {
      grid-area: right;
      // background-color: blue;
    }
    .item-executor {
      grid-area: bottom;
      //background-color: yellow;
    }
    .item-container {
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 25% 25%  25%  25% ;
      row-gap: 15px;

      grid-template-areas: 
        "left left right right"
        "left left right right"
        "left left right right"
        "bottom bottom right right";
    }
  `,l.default];#t(t){let{type:e,detail:o}=t,r=e.split("-")[0];console.debug("routeEvent",e,r);let a=this.querySelector(`[slot="${r}"]`);if(!a){console.error(`slot "${r}" not found!`);return}a.dispatchEvent(new CustomEvent(e,{detail:o}))}connectedCallback(){super.connectedCallback(),this.addEventListener("result",this.#t),this.addEventListener("graph",this.#t),this.addEventListener("graph-active",this.#t)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("result",this.#t),this.removeEventListener("graph",this.#t),this.removeEventListener("graph-active",this.#t)}render(){return(0,c.html)`
<div class="item-container">
  <div class="item-graph border border-gray-300 p-5 flex items-center justify-center" id="panel1"><slot name="graph">LEFT</slot></div>
  <div class="item-result" id="panel3"><slot name="result">RIGHT</slot></div>
  <div class="item-executor" id="panel2"><slot name="executor">BOTTOM</slot></div>
</div>
    `}}window.customElements.define("lg4j-workbench",b);
//# sourceMappingURL=index.97ffc3e8.js.map
