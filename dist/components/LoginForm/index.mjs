import { j as e } from "../../.chunks/CYK1ROHF.js";
import { Card as r, HStack as g, Image as p, VStack as o, Heading as x, Stack as j } from "@chakra-ui/react";
import { z as t, w as a, D as h } from "../../.chunks/DzTRbplN.js";
import { Button as u } from "../Factory/Chakra/button.mjs";
const i = t.object({
  id: a(
    t.string().trim(),
    { label: "Email/Username", autocomplete: "username" }
  ),
  password: a(
    t.string().min(6, { message: "La password deve contenere almeno 6 caratteri" }),
    { label: "Password", autocomplete: "password" }
  ),
  stay_logged: a(
    t.boolean().default(!1),
    { label: "Stay logged" }
  )
}).superRefine((s, n) => {
});
i.innerType();
const k = ({ header: s, submit: n, children: d, root: c }) => /* @__PURE__ */ e.jsx(r.Root, { borderRadius: "10px", ...c, children: /* @__PURE__ */ e.jsxs(g, { gap: "1rem", padding: "2rem", justifyContent: "center", children: [
  /* @__PURE__ */ e.jsx(
    p,
    {
      borderRadius: "10px",
      display: { base: "none", lg: "block" },
      objectFit: "cover",
      height: "15rem",
      src: "undefined/assets/background_card_login.png",
      alt: ""
    }
  ),
  /* @__PURE__ */ e.jsxs(o, { children: [
    /* @__PURE__ */ e.jsxs(o, { children: [
      /* @__PURE__ */ e.jsx(x, { textStyle: "4xl", children: "Login" }),
      s
    ] }),
    /* @__PURE__ */ e.jsx(
      h,
      {
        schema: i,
        render: (l, m) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(r.Body, { children: /* @__PURE__ */ e.jsx(j, { gap: "4", width: { md: "fit-content" }, children: l }) }),
          /* @__PURE__ */ e.jsx(r.Footer, { justifyContent: "center", paddingY: "1rem", children: /* @__PURE__ */ e.jsx(u, { onClick: m(n), variant: "solid", width: "100%", children: "Accedi" }) }),
          d
        ] })
      }
    )
  ] })
] }) });
export {
  k as default
};
//# sourceMappingURL=index.mjs.map
