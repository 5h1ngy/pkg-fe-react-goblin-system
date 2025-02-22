import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Portal, Menu, AbsoluteCenter } from "@chakra-ui/react";
import { forwardRef } from "react";
import { b as LuCheck, g as LuChevronRight } from "../../../index-B99rpP98.js";
const MenuContent = forwardRef(
  function MenuContent2(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.Positioner, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.Content, { ref, ...rest }) }) });
  }
);
const MenuArrow = forwardRef(
  function MenuArrow2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.Arrow, { ref, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.ArrowTip, {}) });
  }
);
const MenuCheckboxItem = forwardRef(function MenuCheckboxItem2(props, ref) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu.CheckboxItem, { ref, ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.ItemIndicator, { hidden: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuCheck, {}) }),
    props.children
  ] });
});
const MenuRadioItem = forwardRef(function MenuRadioItem2(props, ref) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu.RadioItem, { ps: "8", ref, ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AbsoluteCenter, { axis: "horizontal", left: "4", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuCheck, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.ItemText, { children })
  ] });
});
const MenuItemGroup = forwardRef(function MenuItemGroup2(props, ref) {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu.ItemGroup, { ref, ...rest, children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx(Menu.ItemGroupLabel, { userSelect: "none", children: title }),
    children
  ] });
});
const MenuTriggerItem = forwardRef(
  function MenuTriggerItem2(props, ref) {
    const { startIcon, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu.TriggerItem, { ref, ...rest, children: [
      startIcon,
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(LuChevronRight, {})
    ] });
  }
);
const MenuRadioItemGroup = Menu.RadioItemGroup;
const MenuContextTrigger = Menu.ContextTrigger;
const MenuRoot = Menu.Root;
const MenuSeparator = Menu.Separator;
const MenuItem = Menu.Item;
const MenuItemText = Menu.ItemText;
const MenuItemCommand = Menu.ItemCommand;
const MenuTrigger = Menu.Trigger;
export {
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemCommand,
  MenuItemGroup,
  MenuItemText,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem
};
//# sourceMappingURL=menu.mjs.map
