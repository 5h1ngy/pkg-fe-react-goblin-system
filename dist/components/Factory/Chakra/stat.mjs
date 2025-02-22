import { j as jsxRuntimeExports } from "../../../jsx-runtime-CSg68eI9.js";
import { Stat, IconButton, FormatNumber, Badge } from "@chakra-ui/react";
import { T as ToggleTip, H as HiOutlineInformationCircle } from "../../../toggle-tip-CkGJm8zQ.js";
import { forwardRef } from "react";
const StatLabel = forwardRef(
  function StatLabel2(props, ref) {
    const { info, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stat.Label, { ...rest, ref, children: [
      children,
      info && /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleTip, { content: info, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "ghost", "aria-label": "info", size: "2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineInformationCircle, {}) }) })
    ] });
  }
);
const StatValueText = forwardRef(
  function StatValueText2(props, ref) {
    const { value, formatOptions, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Stat.ValueText, { ...rest, ref, children: children || value != null && /* @__PURE__ */ jsxRuntimeExports.jsx(FormatNumber, { value, ...formatOptions }) });
  }
);
const StatUpTrend = forwardRef(
  function StatUpTrend2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { colorPalette: "green", gap: "0", ...props, ref, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat.UpIndicator, {}),
      props.children
    ] });
  }
);
const StatDownTrend = forwardRef(
  function StatDownTrend2(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { colorPalette: "red", gap: "0", ...props, ref, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat.DownIndicator, {}),
      props.children
    ] });
  }
);
const StatRoot = Stat.Root;
const StatHelpText = Stat.HelpText;
const StatValueUnit = Stat.ValueUnit;
export {
  StatDownTrend,
  StatHelpText,
  StatLabel,
  StatRoot,
  StatUpTrend,
  StatValueText,
  StatValueUnit
};
//# sourceMappingURL=stat.mjs.map
