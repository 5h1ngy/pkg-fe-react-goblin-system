import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Stack, Skeleton as Skeleton$1, Circle } from "@chakra-ui/react";
import { forwardRef } from "react";
const SkeletonCircle = (props) => {
  const { size, ...rest } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { size, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { ...rest }) });
};
const SkeletonText = forwardRef(
  function SkeletonText2(props, ref) {
    const { noOfLines = 3, gap, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { gap, width: "full", ref, children: Array.from({ length: noOfLines }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Skeleton$1,
      {
        height: "4",
        ...props,
        _last: { maxW: "80%" },
        ...rest
      },
      index
    )) });
  }
);
const Skeleton = Skeleton$1;
export {
  Skeleton,
  SkeletonCircle,
  SkeletonText
};
//# sourceMappingURL=skeleton.mjs.map
