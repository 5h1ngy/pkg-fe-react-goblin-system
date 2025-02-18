import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { createContext, Pagination, Button, usePaginationContext, IconButton, Text } from "@chakra-ui/react";
import { forwardRef, useMemo } from "react";
import { c as HiMiniEllipsisHorizontal, d as HiChevronLeft, e as HiChevronRight } from "../../../.chunks/DQ34BLAW.js";
import { LinkButton } from "./link-button.mjs";
const [RootPropsProvider, useRootProps] = createContext({
  name: "RootPropsProvider"
});
const variantMap = {
  outline: { default: "ghost", ellipsis: "plain", current: "outline" },
  solid: { default: "outline", ellipsis: "outline", current: "solid" },
  subtle: { default: "ghost", ellipsis: "plain", current: "subtle" }
};
const PaginationRoot = forwardRef(
  function PaginationRoot2(props, ref) {
    const { size = "sm", variant = "outline", getHref, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RootPropsProvider,
      {
        value: { size, variantMap: variantMap[variant], getHref },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pagination.Root,
          {
            ref,
            type: getHref ? "link" : "button",
            ...rest
          }
        )
      }
    );
  }
);
const PaginationEllipsis = forwardRef(function PaginationEllipsis2(props, ref) {
  const { size, variantMap: variantMap2 } = useRootProps();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination.Ellipsis, { ref, ...props, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { as: "span", variant: variantMap2.ellipsis, size, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiMiniEllipsisHorizontal, {}) }) });
});
const PaginationItem = forwardRef(function PaginationItem2(props, ref) {
  const { page } = usePaginationContext();
  const { size, variantMap: variantMap2, getHref } = useRootProps();
  const current = page === props.value;
  const variant = current ? variantMap2.current : variantMap2.default;
  if (getHref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LinkButton, { href: getHref(props.value), variant, size, children: props.value });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination.Item, { ref, ...props, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant, size, children: props.value }) });
});
const PaginationPrevTrigger = forwardRef(function PaginationPrevTrigger2(props, ref) {
  const { size, variantMap: variantMap2, getHref } = useRootProps();
  const { previousPage } = usePaginationContext();
  if (getHref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      LinkButton,
      {
        href: previousPage != null ? getHref(previousPage) : void 0,
        variant: variantMap2.default,
        size,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronLeft, {})
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination.PrevTrigger, { ref, asChild: true, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: variantMap2.default, size, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronLeft, {}) }) });
});
const PaginationNextTrigger = forwardRef(function PaginationNextTrigger2(props, ref) {
  const { size, variantMap: variantMap2, getHref } = useRootProps();
  const { nextPage } = usePaginationContext();
  if (getHref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      LinkButton,
      {
        href: nextPage != null ? getHref(nextPage) : void 0,
        variant: variantMap2.default,
        size,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronRight, {})
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination.NextTrigger, { ref, asChild: true, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: variantMap2.default, size, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronRight, {}) }) });
});
const PaginationItems = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination.Context, { children: ({ pages }) => pages.map((page, index) => {
    return page.type === "ellipsis" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PaginationEllipsis, { index, ...props }, index) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaginationItem,
      {
        type: "page",
        value: page.value,
        ...props
      },
      index
    );
  }) });
};
const PaginationPageText = forwardRef(function PaginationPageText2(props, ref) {
  const { format = "compact", ...rest } = props;
  const { page, pages, pageRange, count } = usePaginationContext();
  const content = useMemo(() => {
    if (format === "short") return `${page} / ${pages.length}`;
    if (format === "compact") return `${page} of ${pages.length}`;
    return `${pageRange.start + 1} - ${pageRange.end} of ${count}`;
  }, [format, page, pages.length, pageRange, count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { fontWeight: "medium", ref, ...rest, children: content });
});
export {
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot
};
