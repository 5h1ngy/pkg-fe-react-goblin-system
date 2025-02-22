import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Button as Button$1, AbsoluteCenter, Spinner, Span } from "@chakra-ui/react";
import { forwardRef } from "react";
const Button = forwardRef(
  function Button2(props, ref) {
    const { loading, disabled, loadingText, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { disabled: loading || disabled, ref, ...rest, children: loading && !loadingText ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteCenter, { display: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "inherit", color: "inherit" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Span, { opacity: 0, children })
    ] }) : loading && loadingText ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "inherit", color: "inherit" }),
      loadingText
    ] }) : children });
  }
);
export {
  Button
};
