import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Accordion, HStack } from "@chakra-ui/react";
import { forwardRef } from "react";
import { L as LuChevronDown } from "../../../index-B99rpP98.js";
const AccordionItemTrigger = forwardRef(function AccordionItemTrigger2(props, ref) {
  const { children, indicatorPlacement = "end", ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion.ItemTrigger, { ...rest, ref, children: [
    indicatorPlacement === "start" && /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.ItemIndicator, { rotate: { base: "-90deg", _open: "0deg" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuChevronDown, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HStack, { gap: "4", flex: "1", textAlign: "start", width: "full", children }),
    indicatorPlacement === "end" && /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuChevronDown, {}) })
  ] });
});
const AccordionItemContent = forwardRef(function AccordionItemContent2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.ItemContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.ItemBody, { ...props, ref }) });
});
const AccordionRoot = Accordion.Root;
const AccordionItem = Accordion.Item;
export {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot
};
//# sourceMappingURL=accordion.mjs.map
