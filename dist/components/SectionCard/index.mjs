import { j as o } from "../../.chunks/CYK1ROHF.js";
import { VStack as a, HStack as x, Heading as g, Flex as m, Icon as j } from "@chakra-ui/react";
import { G as p } from "../../.chunks/DSKTHwal.js";
import { EmptyState as f } from "../Factory/Chakra/empty-state.mjs";
import { SkeletonCircle as s, SkeletonText as v, Skeleton as C } from "../Factory/Chakra/skeleton.mjs";
import { Avatar as e } from "../Factory/Chakra/avatar.mjs";
var d = /* @__PURE__ */ ((t) => (t[t.IDLE = 0] = "IDLE", t[t.LOADING = 1] = "LOADING", t[t.SUCCESS = 2] = "SUCCESS", t[t.FAILED = 3] = "FAILED", t))(d || {});
function k(t) {
  return p({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: { id: "Folder_Off" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: "M4.013,3.3a.5.5,0,0,0-.711.71l.25.25A2.438,2.438,0,0,0,2.062,6.5v11a2.453,2.453,0,0,0,2.451,2.44h14.72l.759.76c.461.46,1.171-.25.711-.7Zm.5,15.64A1.45,1.45,0,0,1,3.062,17.5V6.5a1.444,1.444,0,0,1,1.31-1.43C5.893,6.6,7.432,8.14,8.963,9.66q4.485,4.485,8.96,8.97l.31.31Z" }, child: [] }, { tag: "path", attr: { d: "M21.438,17.693a.5.5,0,0,1-.5-.5V9.175a1.445,1.445,0,0,0-1.445-1.444H12.827a1.5,1.5,0,0,1-1.474-1.225l-.05-.267a1.445,1.445,0,0,0-1.42-1.178H8.8a.5.5,0,0,1,0-1H9.883a2.446,2.446,0,0,1,2.4,1.994l.05.268a.5.5,0,0,0,.491.408h6.666a2.448,2.448,0,0,1,2.445,2.444v8.018A.5.5,0,0,1,21.438,17.693Z" }, child: [] }] }] }] })(t);
}
const Y = ({
  status: t,
  isEmpty: r = !0,
  header: i,
  subHeader: n,
  body: c,
  empty: l
}) => /* @__PURE__ */ o.jsxs(a, { gapY: "1rem", children: [
  i && /* @__PURE__ */ o.jsxs(a, { gapY: "1rem", children: [
    t === 1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      ((i == null ? void 0 : i.avatar) || n) && /* @__PURE__ */ o.jsxs(x, { gapY: "2rem", children: [
        (i == null ? void 0 : i.avatar) && /* @__PURE__ */ o.jsx(s, { size: "20" }),
        n && /* @__PURE__ */ o.jsx(v, { noOfLines: 2, gap: "4", width: "18rem" })
      ] }),
      /* @__PURE__ */ o.jsx(a, { gapY: "2rem", children: /* @__PURE__ */ o.jsx(C, { width: "25rem", height: "20rem" }) })
    ] }),
    r !== !0 && t !== 1 && t === 2 && /* @__PURE__ */ o.jsxs(x, { gapX: "1rem", children: [
      (i == null ? void 0 : i.avatar) && /* @__PURE__ */ o.jsx(e, { size: "2xl", variant: "subtle", name: i.avatar }),
      (i == null ? void 0 : i.title) && /* @__PURE__ */ o.jsx(g, { size: "4xl", children: i.title })
    ] }),
    r !== !0 && t !== 1 && t === 2 && (n == null ? void 0 : n.content)
  ] }),
  r !== !0 && t !== 1 && t === 2 && /* @__PURE__ */ o.jsx(
    m,
    {
      direction: "column",
      ...!c.disableStyle && {
        borderRadius: "10px",
        borderWidth: "1px",
        backgroundColor: "gray.100",
        _dark: { backgroundColor: "gray.950" },
        height: "fit-content",
        padding: "2rem",
        gapY: "1rem",
        justifyContent: "start"
      },
      ...c.style,
      children: c.content
    }
  ),
  r && t !== 1 && (t === 2 || t === 3) && l && /* @__PURE__ */ o.jsx(
    f,
    {
      icon: l.icon ? /* @__PURE__ */ o.jsx(j, { as: k }) : void 0,
      title: l.title ?? "No results found",
      description: l.description ?? void 0
    }
  )
] });
export {
  d as STATUS,
  Y as default
};
//# sourceMappingURL=index.mjs.map
