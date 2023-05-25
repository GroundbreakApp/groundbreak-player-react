// src/lazy.tsx
import React2, { useEffect as useEffect3, useState as useState3 } from "react";

// src/ConditionalSuspense.tsx
import React, { Suspense } from "react";
var ConditionalSuspense = ({ condition, fallback, children, ...rest }) => {
  return condition ? /* @__PURE__ */ React.createElement(Suspense, { fallback, ...rest }, children) : /* @__PURE__ */ React.createElement(React.Fragment, null, fallback);
};
var ConditionalSuspense_default = ConditionalSuspense;

// src/useIsBrowser.ts
import { useState, useEffect } from "react";
var useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);
  return isBrowser;
};
var useIsBrowser_default = useIsBrowser;

// src/useIsIntersecting.ts
import { useState as useState2, useEffect as useEffect2 } from "react";
var useIsIntersecting = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState2(false);
  useEffect2(() => {
    if (typeof IntersectionObserver === "function") {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.disconnect();
      };
    }
  }, [ref, options]);
  return isIntersecting;
};
var useIsIntersecting_default = useIsIntersecting;

// src/lazy.tsx
var MuxPlayerIndex = React2.lazy(() => import("./-O3VXJYVC.mjs"));
var Fallback = (props) => {
  const { style, className, onIntersection, placeholder } = props;
  const intersectionRef = React2.useRef(null);
  const isIntersecting = useIsIntersecting_default(intersectionRef);
  useEffect3(() => {
    if (isIntersecting && onIntersection) {
      onIntersection();
    }
  }, [isIntersecting, onIntersection]);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
    "mux-player",
    {
      ref: intersectionRef,
      "data-mux-player-react-lazy-placeholder": true,
      placeholder,
      style: {
        "--mux-player-react-lazy-placeholder": placeholder ? `url(${placeholder});` : "",
        ...style
      },
      className: className || "",
      nohotkeys: true,
      "aria-hidden": true,
      tabIndex: -1
    },
    /* @__PURE__ */ React2.createElement("div", { "data-mux-player-react-lazy-placeholder-overlay": true })
  ), /* @__PURE__ */ React2.createElement("style", null, `
        mux-player[data-mux-player-react-lazy-placeholder] {
          aspect-ratio: 16/9;
          display: block;
          background-color: var(--media-background-color, #000);
          width: 100%;
          position: relative;
          background-image: var(--mux-player-react-lazy-placeholder);
          background-repeat: no-repeat;
          background-size: var(--media-object-fit, contain);
          background-position: var(--media-object-position, 50% 50%);
          --controls: none;
          --controls-backdrop-color: rgba(0, 0, 0, 0.6);
        }
        mux-player [data-mux-player-react-lazy-placeholder-overlay] {
          position: absolute;
          inset: 0;
          background-color: var(--controls-backdrop-color);
        }
      `));
};
var LoadingType = {
  PAGE: "page",
  VIEWPORT: "viewport"
};
var MuxPlayer = React2.forwardRef((props, ref) => {
  const { loading = LoadingType.VIEWPORT, ...playerProps } = props;
  const isBrowser = useIsBrowser_default();
  const [isIntersecting, setIsIntersecting] = useState3(() => loading === LoadingType.VIEWPORT ? false : true);
  return /* @__PURE__ */ React2.createElement(
    ConditionalSuspense_default,
    {
      condition: isBrowser && isIntersecting,
      fallback: /* @__PURE__ */ React2.createElement(
        Fallback,
        {
          style: playerProps.style,
          className: playerProps.className,
          placeholder: playerProps.placeholder,
          onIntersection: () => setIsIntersecting(true)
        }
      )
    },
    /* @__PURE__ */ React2.createElement(MuxPlayerIndex, { ...playerProps, ref })
  );
});
var lazy_default = MuxPlayer;
export {
  lazy_default as default
};
//# sourceMappingURL=lazy.mjs.map
