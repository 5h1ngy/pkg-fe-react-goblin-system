import { j as jsxRuntimeExports } from "./jsx-runtime-CSg68eI9.js";
import { Popover, Portal, IconButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { G as GenIcon } from "./iconBase-DHmg6m28.js";
function HiOutlineInformationCircle(props) {
  return GenIcon({ "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, "child": [] }] })(props);
}
const ToggleTip = forwardRef(
  function ToggleTip2(props, ref) {
    const {
      showArrow,
      children,
      portalled = true,
      content,
      portalRef,
      ...rest
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Popover.Root,
      {
        ...rest,
        positioning: { ...rest.positioning, gutter: 4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Trigger, { asChild: true, children }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Popover.Content,
            {
              width: "auto",
              px: "2",
              py: "1",
              textStyle: "xs",
              rounded: "sm",
              ref,
              children: [
                showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Arrow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.ArrowTip, {}) }),
                content
              ]
            }
          ) }) })
        ]
      }
    );
  }
);
const InfoTip = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleTip, { content: children, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "ghost", "aria-label": "info", size: "2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineInformationCircle, {}) }) });
};
export {
  HiOutlineInformationCircle as H,
  InfoTip as I,
  ToggleTip as T
};
//# sourceMappingURL=toggle-tip-CkGJm8zQ.js.map
