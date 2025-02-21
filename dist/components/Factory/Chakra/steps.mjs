import { j as t } from "../../../.chunks/CYK1ROHF.js";
import { Steps as e, Box as p } from "@chakra-ui/react";
import { b as x } from "../../../.chunks/CF0BrBy-.js";
const S = (s) => {
  const { title: r, description: n, completedIcon: o, icon: i, ...c } = s;
  return /* @__PURE__ */ t.jsxs(e.Item, { ...c, children: [
    /* @__PURE__ */ t.jsxs(e.Trigger, { children: [
      /* @__PURE__ */ t.jsx(e.Indicator, { children: /* @__PURE__ */ t.jsx(
        e.Status,
        {
          complete: o || /* @__PURE__ */ t.jsx(x, {}),
          incomplete: i || /* @__PURE__ */ t.jsx(e.Number, {})
        }
      ) }),
      /* @__PURE__ */ t.jsx(l, { title: r, description: n })
    ] }),
    /* @__PURE__ */ t.jsx(e.Separator, {})
  ] });
}, l = (s) => {
  const { title: r, description: n } = s;
  return r && n ? /* @__PURE__ */ t.jsxs(p, { children: [
    /* @__PURE__ */ t.jsx(e.Title, { children: r }),
    /* @__PURE__ */ t.jsx(e.Description, { children: n })
  ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    r && /* @__PURE__ */ t.jsx(e.Title, { children: r }),
    n && /* @__PURE__ */ t.jsx(e.Description, { children: n })
  ] });
}, u = (s) => {
  const { icon: r = /* @__PURE__ */ t.jsx(e.Number, {}), completedIcon: n } = s;
  return /* @__PURE__ */ t.jsx(e.Indicator, { children: /* @__PURE__ */ t.jsx(e.Status, { complete: n, incomplete: r }) });
}, g = e.List, h = e.Root, a = e.Content, I = e.CompletedContent, C = (s) => /* @__PURE__ */ t.jsx(e.NextTrigger, { ...s }), T = (s) => /* @__PURE__ */ t.jsx(e.PrevTrigger, { ...s });
export {
  I as StepsCompletedContent,
  a as StepsContent,
  u as StepsIndicator,
  S as StepsItem,
  g as StepsList,
  C as StepsNextTrigger,
  T as StepsPrevTrigger,
  h as StepsRoot
};
//# sourceMappingURL=steps.mjs.map
