import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { Flex, Icon } from "@chakra-ui/react";
import { EmptyState } from "../../components/Factory/Chakra/empty-state.mjs";
import { ProgressRoot, ProgressBar } from "../../components/Factory/Chakra/progress.mjs";
import { G as GenIcon } from "../../.chunks/DHmg6m28.js";
function TbLoader3(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" }, "child": [] }, { "tag": "path", "attr": { "d": "M17 12a5 5 0 1 0 -5 5" }, "child": [] }] })(props);
}
const Loading = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Flex,
  {
    position: "fixed",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { as: TbLoader3, boxSize: 6 }),
        title: "Fetching...",
        description: "Wait please!",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressRoot, { width: "25vw", value: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, {}) })
      }
    )
  }
);
export {
  Loading as default
};
//# sourceMappingURL=index.mjs.map
