import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { VStack, HStack, Heading, Flex, Icon } from "@chakra-ui/react";
import { G as GenIcon } from "../../.chunks/DHmg6m28.js";
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
function CiFolderOff(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "g", "attr": { "id": "Folder_Off" }, "child": [{ "tag": "g", "attr": {}, "child": [{ "tag": "path", "attr": { "d": "M4.013,3.3a.5.5,0,0,0-.711.71l.25.25A2.438,2.438,0,0,0,2.062,6.5v11a2.453,2.453,0,0,0,2.451,2.44h14.72l.759.76c.461.46,1.171-.25.711-.7Zm.5,15.64A1.45,1.45,0,0,1,3.062,17.5V6.5a1.444,1.444,0,0,1,1.31-1.43C5.893,6.6,7.432,8.14,8.963,9.66q4.485,4.485,8.96,8.97l.31.31Z" }, "child": [] }, { "tag": "path", "attr": { "d": "M21.438,17.693a.5.5,0,0,1-.5-.5V9.175a1.445,1.445,0,0,0-1.445-1.444H12.827a1.5,1.5,0,0,1-1.474-1.225l-.05-.267a1.445,1.445,0,0,0-1.42-1.178H8.8a.5.5,0,0,1,0-1H9.883a2.446,2.446,0,0,1,2.4,1.994l.05.268a.5.5,0,0,0,.491.408h6.666a2.448,2.448,0,0,1,2.445,2.444v8.018A.5.5,0,0,1,21.438,17.693Z" }, "child": [] }] }] }] })(props);
}
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
