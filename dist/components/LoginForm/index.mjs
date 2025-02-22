import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { Card, HStack, Image, VStack, Heading, Stack } from "@chakra-ui/react";
import { z, w as withMeta, D as DynamicForm } from "../../.chunks/Dy9B8Y0I.js";
import { Button } from "../Factory/Chakra/button.mjs";
const schema = z.object({
  "id": withMeta(
    z.string().trim(),
    { label: "Email/Username", autocomplete: "username" }
  ),
  "password": withMeta(
    z.string().min(6, { message: "La password deve contenere almeno 6 caratteri" }),
    { label: "Password", autocomplete: "password" }
  ),
  "stay_logged": withMeta(
    z.boolean().default(false),
    { label: "Stay logged" }
  )
}).superRefine((_data, _ctx) => {
});
schema.innerType();
const LoginForm = ({ header, submit, children, root }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Root, { borderRadius: "10px", ...root, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "1rem", padding: "2rem", justifyContent: "center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image,
      {
        borderRadius: "10px",
        display: { base: "none", lg: "block" },
        objectFit: "cover",
        height: "15rem",
        src: `${void 0}/assets/background_card_login.png`,
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { textStyle: "4xl", children: "Login" }),
        header
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DynamicForm,
        {
          schema,
          render: (rows, onSubmit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Body, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { gap: "4", width: { md: "fit-content" }, children: rows }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Footer, { justifyContent: "center", paddingY: "1rem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit(submit), variant: "solid", width: "100%", children: "Accedi" }) }),
            children
          ] })
        }
      )
    ] })
  ] }) });
};
export {
  LoginForm as default
};
//# sourceMappingURL=index.mjs.map
