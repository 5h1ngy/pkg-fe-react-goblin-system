import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { DataList, IconButton } from "@chakra-ui/react";
import { T as ToggleTip } from "../../../.chunks/4Il6cKWL.js";
import { forwardRef } from "react";
import { H as HiOutlineInformationCircle } from "../../../.chunks/DQ34BLAW.js";
const DataListRoot = DataList.Root;
const DataListItem = forwardRef(
  function DataListItem2(props, ref) {
    const { label, info, value, children, grow, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(DataList.Item, { ref, ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DataList.ItemLabel, { flex: grow ? "1" : void 0, children: [
        label,
        info && /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleTip, { content: info, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { variant: "ghost", "aria-label": "info", size: "2xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineInformationCircle, {}) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DataList.ItemValue, { flex: grow ? "1" : void 0, children: value }),
      children
    ] });
  }
);
export {
  DataListItem,
  DataListRoot
};
//# sourceMappingURL=data-list.mjs.map
