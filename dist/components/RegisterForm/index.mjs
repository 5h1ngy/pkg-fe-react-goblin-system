import { j as e } from "../../.chunks/CYK1ROHF.js";
import { useState as p } from "react";
import { Card as i, HStack as y, Image as v, VStack as u, Heading as C, Stack as _ } from "@chakra-ui/react";
import { z as a, w as r, D as I } from "../../.chunks/DzTRbplN.js";
import { Button as m } from "../Factory/Chakra/button.mjs";
const g = a.object({
  /**
   * STEP: 0
   */
  first_name: r(
    a.string().trim().min(2, {
      message: "Il nome deve contenere almeno 2 caratteri"
    }).max(50, {
      message: "Il nome non può superare i 50 caratteri"
    }),
    { label: "Nome", autocomplete: "first-name", row: "row-1", step: 0 }
  ),
  last_name: r(
    a.string().trim().min(2, {
      message: "Il cognome deve contenere almeno 2 caratteri"
    }).max(50, {
      message: "Il cognome non può superare i 50 caratteri"
    }),
    { label: "Cognome", autocomplete: "last-name", row: "row-1", step: 0 }
  ),
  bday: r(
    a.coerce.date({
      required_error: "La data di nascita è obbligatoria",
      invalid_type_error: "Formato data non valido"
    }).max(/* @__PURE__ */ new Date(), {
      message: "La data non può essere nel futuro"
    }).transform((o) => o.getTime()),
    // Converti in timestamp epoch
    { label: "Data di Nascita", autocomplete: "bday", row: "row-2", step: 0 }
  ),
  /**
   * STEP: 1
   */
  username: r(
    a.string().trim(),
    { label: "Nickname", autocomplete: "username", step: 1, style: { width: { sm: "20rem" } } }
  ),
  gender: r(
    a.enum(["male", "female"]).nullable().default(null),
    { label: "Gender", labels: ["Male", "Female"], autocomplete: "gender", step: 1, style: { width: { sm: "20rem" } } }
  ),
  /**
   * STEP: 2
   */
  email: r(
    a.string().trim().toLowerCase().email({ message: "Inserisci un’email valida" }),
    { label: "Email", autocomplete: "email", row: "row-3", step: 2 }
  ),
  confirm_email: r(
    a.string().trim().toLowerCase().email({ message: "Inserisci un’email valida" }),
    { label: "Ripeti Email", autocomplete: "confirm-email", row: "row-3", step: 2 }
  ),
  password: r(
    a.string().trim().min(6, { message: "La password deve contenere almeno 6 caratteri" }).max(100, { message: "La password non può superare i 100 caratteri" }).regex(/[A-Z]/, { message: "La password deve contenere almeno una lettera maiuscola" }).regex(/\d/, { message: "La password deve contenere almeno un numero" }),
    { label: "Password", autocomplete: "password", row: "row-4", step: 2 }
  ),
  confirm_password: r(
    a.string().trim().min(6, { message: "La password deve contenere almeno 6 caratteri" }).max(100, { message: "La password non può superare i 100 caratteri" }),
    { label: "Ripeti Password", autocomplete: "confirm-password", row: "row-4", step: 2 }
  )
}).superRefine((o, n) => {
  o.email !== o.confirm_email && n.addIssue({
    code: a.ZodIssueCode.custom,
    message: "Le email non coincidono.",
    path: ["confirm_email"]
  }), o.password !== o.confirm_password && n.addIssue({
    code: a.ZodIssueCode.custom,
    message: "Le password non coincidono.",
    path: ["confirm_password"]
  });
});
g.innerType();
const D = ({ rootStyle: o, children: n, submit: w }) => {
  const [l, c] = p(0), [f, d] = p(!1);
  async function x(t, s) {
    c(t), d(s);
  }
  async function b(t, s) {
    c(t), d(s);
  }
  return /* @__PURE__ */ e.jsx(i.Root, { flexDirection: "row", borderRadius: "10px", ...o, children: /* @__PURE__ */ e.jsxs(y, { gap: "1rem", padding: "2rem", justifyContent: "center", children: [
    /* @__PURE__ */ e.jsx(
      v,
      {
        borderRadius: "10px",
        display: { base: "none", lg: "block" },
        objectFit: "cover",
        height: "15rem",
        src: "undefined/assets/background_card_register.png",
        alt: ""
      }
    ),
    /* @__PURE__ */ e.jsxs(u, { children: [
      /* @__PURE__ */ e.jsxs(u, { children: [
        /* @__PURE__ */ e.jsx(C, { textStyle: "4xl", children: "Registrazione" }),
        n
      ] }),
      /* @__PURE__ */ e.jsx(
        I,
        {
          schema: g,
          step: l,
          onNext: x,
          onBack: b,
          render: (t, s, h, j) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(i.Body, { children: /* @__PURE__ */ e.jsx(_, { gap: "4", width: { md: "fit-content" }, children: t }) }),
            /* @__PURE__ */ e.jsxs(i.Footer, { justifyContent: "flex-end", paddingY: "1rem", flexWrap: "wrap", children: [
              l !== 0 && /* @__PURE__ */ e.jsx(m, { onClick: () => j(), variant: "outline", colorPalette: "cyan", width: "40%", children: "Indietro" }),
              f ? /* @__PURE__ */ e.jsx(m, { onClick: s(w), variant: "solid", colorPalette: "cyan", width: "40%", children: "Crea Account" }) : /* @__PURE__ */ e.jsx(m, { onClick: () => h(), variant: "subtle", colorPalette: "cyan", width: "40%", children: "Avanti" })
            ] })
          ] })
        }
      )
    ] })
  ] }) });
};
export {
  D as default
};
//# sourceMappingURL=index.mjs.map
