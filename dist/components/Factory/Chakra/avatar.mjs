import { j as a } from "../../../.chunks/CYK1ROHF.js";
import { Avatar as c, Group as p } from "@chakra-ui/react";
import { forwardRef as i } from "react";
const g = i(
  function(r, n) {
    const { name: t, src: e, srcSet: s, loading: l, icon: u, fallback: m, children: h, ...d } = r;
    return /* @__PURE__ */ a.jsxs(c.Root, { ref: n, ...d, children: [
      /* @__PURE__ */ a.jsx(f, { name: t, icon: u, children: m }),
      /* @__PURE__ */ a.jsx(c.Image, { src: e, srcSet: s, loading: l }),
      h
    ] });
  }
), f = i(
  function(r, n) {
    const { name: t, icon: e, children: s, ...l } = r;
    return /* @__PURE__ */ a.jsxs(c.Fallback, { ref: n, ...l, children: [
      s,
      t != null && s == null && /* @__PURE__ */ a.jsx(a.Fragment, { children: v(t) }),
      t == null && s == null && /* @__PURE__ */ a.jsx(c.Icon, { asChild: !!e, children: e })
    ] });
  }
);
function v(o) {
  const r = o.trim().split(" "), n = r[0] != null ? r[0] : "", t = r.length > 1 ? r[r.length - 1] : "";
  return n && t ? `${n.charAt(0)}${t.charAt(0)}` : n.charAt(0);
}
const b = i(
  function(r, n) {
    const { size: t, variant: e, borderless: s, ...l } = r;
    return /* @__PURE__ */ a.jsx(c.PropsProvider, { value: { size: t, variant: e, borderless: s }, children: /* @__PURE__ */ a.jsx(p, { gap: "0", spaceX: "-3", ref: n, ...l }) });
  }
);
export {
  g as Avatar,
  b as AvatarGroup
};
//# sourceMappingURL=avatar.mjs.map
