import { j as e } from "../../../.chunks/CYK1ROHF.js";
import { useControllableState as h, Input as m, mergeRefs as x, IconButton as y, Stack as P, HStack as p, Box as j } from "@chakra-ui/react";
import { forwardRef as f, useRef as w } from "react";
import { h as v, i as S } from "../../../.chunks/CF0BrBy-.js";
import { InputGroup as I } from "./input-group.mjs";
const k = f(
  function(l, t) {
    const {
      rootProps: i,
      defaultVisible: n,
      visible: a,
      onVisibleChange: d,
      visibilityIcon: o = { on: /* @__PURE__ */ e.jsx(S, {}), off: /* @__PURE__ */ e.jsx(v, {}) },
      ...s
    } = l, [u, c] = h({
      value: a,
      defaultValue: n || !1,
      onChange: d
    }), b = w(null);
    return /* @__PURE__ */ e.jsx(
      I,
      {
        width: "full",
        endElement: /* @__PURE__ */ e.jsx(
          R,
          {
            disabled: s.disabled,
            onPointerDown: (g) => {
              s.disabled || g.button === 0 && (g.preventDefault(), c(!u));
            },
            children: u ? o.off : o.on
          }
        ),
        ...i,
        children: /* @__PURE__ */ e.jsx(
          m,
          {
            ...s,
            ref: x(t, b),
            type: u ? "text" : "password"
          }
        )
      }
    );
  }
), R = f(
  function(l, t) {
    return /* @__PURE__ */ e.jsx(
      y,
      {
        tabIndex: -1,
        ref: t,
        me: "-2",
        aspectRatio: "square",
        size: "sm",
        variant: "ghost",
        height: "calc(100% - {spacing.2})",
        "aria-label": "Toggle password visibility",
        ...l
      }
    );
  }
), B = f(function(l, t) {
  const { max: i = 4, value: n, ...a } = l, d = n / i * 100, { label: o, colorPalette: s } = V(d);
  return /* @__PURE__ */ e.jsxs(P, { align: "flex-end", gap: "1", ref: t, ...a, children: [
    /* @__PURE__ */ e.jsx(p, { width: "full", ref: t, ...a, children: Array.from({ length: i }).map((u, c) => /* @__PURE__ */ e.jsx(
      j,
      {
        height: "1",
        flex: "1",
        rounded: "sm",
        "data-selected": c < n ? "" : void 0,
        layerStyle: "fill.subtle",
        colorPalette: "gray",
        _selected: {
          colorPalette: s,
          layerStyle: "fill.solid"
        }
      },
      c
    )) }),
    o && /* @__PURE__ */ e.jsx(p, { textStyle: "xs", children: o })
  ] });
});
function V(r) {
  switch (!0) {
    case r < 33:
      return { label: "Low", colorPalette: "red" };
    case r < 66:
      return { label: "Medium", colorPalette: "orange" };
    default:
      return { label: "High", colorPalette: "green" };
  }
}
export {
  k as PasswordInput,
  B as PasswordStrengthMeter
};
//# sourceMappingURL=password-input.mjs.map
