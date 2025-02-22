import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { VStack, HStack, Heading, Flex, Icon } from "@chakra-ui/react";
import { C as CiFolderOff } from "../../.chunks/CqM0Stt-.js";
import { EmptyState } from "../Factory/Chakra/empty-state.mjs";
import { SkeletonCircle, SkeletonText, Skeleton } from "../Factory/Chakra/skeleton.mjs";
import { Avatar } from "../Factory/Chakra/avatar.mjs";
var STATUS = /* @__PURE__ */ ((STATUS2) => {
  STATUS2[STATUS2["IDLE"] = 0] = "IDLE";
  STATUS2[STATUS2["LOADING"] = 1] = "LOADING";
  STATUS2[STATUS2["SUCCESS"] = 2] = "SUCCESS";
  STATUS2[STATUS2["FAILED"] = 3] = "FAILED";
  return STATUS2;
})(STATUS || {});
const SectionCard = ({
  status,
  isEmpty = true,
  header,
  subHeader,
  body,
  empty
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gapY: "1rem", children: [
  header && /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { gapY: "1rem", children: [
    status === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      ((header == null ? void 0 : header.avatar) || subHeader) && /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gapY: "2rem", children: [
        (header == null ? void 0 : header.avatar) && /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCircle, { size: "20" }),
        subHeader && /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonText, { noOfLines: 2, gap: "4", width: "18rem" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VStack, { gapY: "2rem", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { width: "25rem", height: "20rem" }) })
    ] }),
    isEmpty !== true && (status !== 1 && status === 2) && /* @__PURE__ */ jsxRuntimeExports.jsxs(HStack, { gapX: "1rem", children: [
      (header == null ? void 0 : header.avatar) && /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { size: "2xl", variant: "subtle", name: header.avatar }),
      (header == null ? void 0 : header.title) && /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "4xl", children: header.title })
    ] }),
    isEmpty !== true && (status !== 1 && status === 2) && (subHeader == null ? void 0 : subHeader.content)
  ] }),
  isEmpty !== true && (status !== 1 && status === 2) && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Flex,
    {
      direction: "column",
      ...!body.disableStyle && {
        borderRadius: "10px",
        borderWidth: "1px",
        backgroundColor: "gray.100",
        _dark: { backgroundColor: "gray.950" },
        height: "fit-content",
        padding: "2rem",
        gapY: "1rem",
        justifyContent: "start"
      },
      ...body.style,
      children: body.content
    }
  ),
  isEmpty && status !== 1 && (status === 2 || status === 3) && (empty && /* @__PURE__ */ jsxRuntimeExports.jsx(
    EmptyState,
    {
      icon: empty.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { as: CiFolderOff }) : void 0,
      title: empty.title ?? "No results found",
      description: empty.description ?? void 0
    }
  ))
] });
export {
  STATUS,
  SectionCard as default
};
