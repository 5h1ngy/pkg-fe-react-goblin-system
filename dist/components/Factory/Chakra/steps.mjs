import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Steps, Box } from "@chakra-ui/react";
import { b as LuCheck } from "../../../.chunks/Bol7GxK0.js";
const StepsItem = (props) => {
  const { title, description, completedIcon, icon, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Steps.Item, { ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Steps.Trigger, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Indicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Steps.Status,
        {
          complete: completedIcon || /* @__PURE__ */ jsxRuntimeExports.jsx(LuCheck, {}),
          incomplete: icon || /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Number, {})
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepInfo, { title, description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Separator, {})
  ] });
};
const StepInfo = (props) => {
  const { title, description } = props;
  if (title && description) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Title, { children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Description, { children: description })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Title, { children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Description, { children: description })
  ] });
};
const StepsIndicator = (props) => {
  const { icon = /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Number, {}), completedIcon } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Indicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.Status, { complete: completedIcon, incomplete: icon }) });
};
const StepsList = Steps.List;
const StepsRoot = Steps.Root;
const StepsContent = Steps.Content;
const StepsCompletedContent = Steps.CompletedContent;
const StepsNextTrigger = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.NextTrigger, { ...props });
};
const StepsPrevTrigger = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Steps.PrevTrigger, { ...props });
};
export {
  StepsCompletedContent,
  StepsContent,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot
};
