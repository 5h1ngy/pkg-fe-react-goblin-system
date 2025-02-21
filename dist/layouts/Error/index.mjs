import { j as t } from "../../.chunks/CYK1ROHF.js";
import { Flex as i, Icon as o } from "@chakra-ui/react";
import { EmptyState as e } from "../../components/Factory/Chakra/empty-state.mjs";
import { G as n } from "../../.chunks/DSKTHwal.js";
function a(r) {
  return n({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M11.001 10h2v5h-2zM11 16h2v2h-2z" }, child: [] }, { tag: "path", attr: { d: "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z" }, child: [] }] })(r);
}
const d = () => /* @__PURE__ */ t.jsx(
  i,
  {
    position: "fixed",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    children: /* @__PURE__ */ t.jsx(
      e,
      {
        icon: /* @__PURE__ */ t.jsx(o, { as: a, boxSize: 6 }),
        title: "ERROR",
        description: "An error occurred while running the application"
      }
    )
  }
);
export {
  d as default
};
//# sourceMappingURL=index.mjs.map
