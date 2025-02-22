import { j as jsxRuntimeExports } from "../../jsx-runtime-CSg68eI9.js";
import { Flex, Icon } from "@chakra-ui/react";
import { EmptyState } from "../../components/Factory/Chakra/empty-state.mjs";
import { G as GenIcon } from "../../iconBase-DHmg6m28.js";
function BiError(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M11.001 10h2v5h-2zM11 16h2v2h-2z" }, "child": [] }, { "tag": "path", "attr": { "d": "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z" }, "child": [] }] })(props);
}
const Error = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { as: BiError, boxSize: 6 }),
        title: "ERROR",
        description: "An error occurred while running the application"
      }
    )
  }
);
export {
  Error as default
};
//# sourceMappingURL=index.mjs.map
