import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Breadcrumb } from "@chakra-ui/react";
import { forwardRef, Children, isValidElement, Fragment } from "react";
const BreadcrumbRoot = forwardRef(
  function BreadcrumbRoot2(props, ref) {
    const { separator, separatorGap, children, ...rest } = props;
    const validChildren = Children.toArray(children).filter(isValidElement);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb.Root, { ref, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb.List, { gap: separatorGap, children: validChildren.map((child, index) => {
      const last = index === validChildren.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb.Item, { children: child }),
        !last && /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb.Separator, { children: separator })
      ] }, index);
    }) }) });
  }
);
const BreadcrumbLink = Breadcrumb.Link;
const BreadcrumbCurrentLink = Breadcrumb.CurrentLink;
const BreadcrumbEllipsis = Breadcrumb.Ellipsis;
export {
  BreadcrumbCurrentLink,
  BreadcrumbEllipsis,
  BreadcrumbLink,
  BreadcrumbRoot
};
//# sourceMappingURL=breadcrumb.mjs.map
