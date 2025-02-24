import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { useState } from "react";
import { Card, HStack, Image, VStack, Heading, Stack } from "@chakra-ui/react";
import { w as withMeta, D as DynamicForm } from "../../.chunks/Clcub7Py.js";
import { Button } from "../Factory/Chakra/button.mjs";
import { z } from "zod";
const schema = z.object({
  /**
   * STEP: 0
   */
  "first_name": withMeta(
    z.string().trim().min(2, {
      message: "Il nome deve contenere almeno 2 caratteri"
    }).max(50, {
      message: "Il nome non può superare i 50 caratteri"
    }),
    { label: "Nome", autocomplete: "first-name", row: "row-1", step: 0 }
  ),
  "last_name": withMeta(
    z.string().trim().min(2, {
      message: "Il cognome deve contenere almeno 2 caratteri"
    }).max(50, {
      message: "Il cognome non può superare i 50 caratteri"
    }),
    { label: "Cognome", autocomplete: "last-name", row: "row-1", step: 0 }
  ),
  "bday": withMeta(
    z.coerce.date({
      required_error: "La data di nascita è obbligatoria",
      invalid_type_error: "Formato data non valido"
    }).max(/* @__PURE__ */ new Date(), {
      message: "La data non può essere nel futuro"
    }).transform((date) => date.getTime()),
    // Converti in timestamp epoch
    { label: "Data di Nascita", autocomplete: "bday", row: "row-2", step: 0 }
  ),
  /**
   * STEP: 1
   */
  "username": withMeta(
    z.string().trim(),
    { label: "Nickname", autocomplete: "username", step: 1, style: { width: { "sm": "20rem" } } }
  ),
  "gender": withMeta(
    z.enum(["male", "female"]).nullable().default(null),
    { label: "Gender", labels: ["Male", "Female"], autocomplete: "gender", step: 1, style: { width: { "sm": "20rem" } } }
  ),
  /**
   * STEP: 2
   */
  "email": withMeta(
    z.string().trim().toLowerCase().email({ message: "Inserisci un’email valida" }),
    { label: "Email", autocomplete: "email", row: "row-3", step: 2 }
  ),
  "confirm_email": withMeta(
    z.string().trim().toLowerCase().email({ message: "Inserisci un’email valida" }),
    { label: "Ripeti Email", autocomplete: "confirm-email", row: "row-3", step: 2 }
  ),
  "password": withMeta(
    z.string().trim().min(6, { message: "La password deve contenere almeno 6 caratteri" }).max(100, { message: "La password non può superare i 100 caratteri" }).regex(/[A-Z]/, { message: "La password deve contenere almeno una lettera maiuscola" }).regex(/\d/, { message: "La password deve contenere almeno un numero" }),
    { label: "Password", autocomplete: "password", row: "row-4", step: 2 }
  ),
  "confirm_password": withMeta(
    z.string().trim().min(6, { message: "La password deve contenere almeno 6 caratteri" }).max(100, { message: "La password non può superare i 100 caratteri" }),
    { label: "Ripeti Password", autocomplete: "confirm-password", row: "row-4", step: 2 }
  )
}).superRefine((data, ctx) => {
  if (data.email !== data.confirm_email) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Le email non coincidono.",
      path: ["confirm_email"]
    });
  }
  if (data.password !== data.confirm_password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Le password non coincidono.",
      path: ["confirm_password"]
    });
  }
});
schema.innerType();
const RegisterForm = ({ rootStyle, children, submit }) => {
  const [step, setStep] = useState(0);
  const [stepComplete, setStepComplete] = useState(false);
  async function next(step2, stepComplete2) {
    setStep(step2);
    setStepComplete(stepComplete2);
  }
  async function back(step2, stepComplete2) {
    setStep(step2);
    setStepComplete(stepComplete2);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Root, { flexDirection: "row", borderRadius: "10px", ...rootStyle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gap: "1rem", padding: "2rem", justifyContent: "center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image,
      {
        borderRadius: "10px",
        display: { base: "none", lg: "block" },
        objectFit: "cover",
        height: "15rem",
        src: `${""}/assets/background_card_register.png`,
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { textStyle: "4xl", children: "Registrazione" }),
        children
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DynamicForm,
        {
          schema,
          step,
          onNext: next,
          onBack: back,
          render: (rows, onSubmit, onNext, onBack) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Body, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { gap: "4", width: { md: "fit-content" }, children: rows }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card.Footer, { justifyContent: "flex-end", paddingY: "1rem", flexWrap: "wrap", children: [
              step !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onBack(), variant: "outline", colorPalette: "cyan", width: "40%", children: "Indietro" }),
              !stepComplete ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => onNext(), variant: "subtle", colorPalette: "cyan", width: "40%", children: "Avanti" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSubmit(submit), variant: "solid", colorPalette: "cyan", width: "40%", children: "Crea Account" })
            ] })
          ] })
        }
      )
    ] })
  ] }) });
};
export {
  RegisterForm as default
};
