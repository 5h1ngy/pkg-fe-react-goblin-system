import { j as jsxRuntimeExports } from "../../../.chunks/CSg68eI9.js";
import { Avatar as Avatar$1, Group } from "@chakra-ui/react";
import { forwardRef } from "react";
const Avatar = forwardRef(
  function Avatar2(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar$1.Root, { ref, ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { name, icon, children: fallback }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1.Image, { src, srcSet, loading }),
      children
    ] });
  }
);
const AvatarFallback = forwardRef(
  function AvatarFallback2(props, ref) {
    const { name, icon, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar$1.Fallback, { ref, ...rest, children: [
      children,
      name != null && children == null && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: getInitials(name) }),
      name == null && children == null && /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1.Icon, { asChild: !!icon, children: icon })
    ] });
  }
);
function getInitials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] != null ? names[0] : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
const AvatarGroup = forwardRef(
  function AvatarGroup2(props, ref) {
    const { size, variant, borderless, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1.PropsProvider, { value: { size, variant, borderless }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { gap: "0", spaceX: "-3", ref, ...rest }) });
  }
);
export {
  Avatar,
  AvatarGroup
};
