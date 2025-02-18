import { j as jsxRuntimeExports } from "../.chunks/CSg68eI9.js";
import { lazy, Suspense, useRef, useEffect } from "react";
import { g as gsapWithCSS } from "../.chunks/CXxskxL3.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function withGsapAnimation(WrappedComponent) {
  const GsapAnimated = (props) => {
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current) {
        gsapWithCSS.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: { width: "100%", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedComponent, { ...props }) });
  };
  return GsapAnimated;
}
function withDynamicLayouts(opts, props) {
  const Page = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const pageName = opts.layoutName;
    const directoryName = pageName.charAt(0).toLowerCase() + pageName.slice(1);
    const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../layouts/${directoryName}/${opts.layoutName}Layout.ts`, 4);
    const GsapWrapped = withGsapAnimation(module.default);
    return { default: GsapWrapped };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: opts.loader, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Page, { ...props }) });
}
function withDynamicPages(opts, props) {
  const Content = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const pageName = opts.pageName;
    const directoryName = pageName.charAt(0).toLowerCase() + pageName.slice(1);
    const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({}), `../pages/${directoryName}/${opts.pageName}Page.ts`, 4);
    const GsapWrapped = withGsapAnimation(module.default);
    return { default: GsapWrapped };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: opts.loader, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { ...props }) });
}
export {
  withDynamicLayouts,
  withDynamicPages
};
