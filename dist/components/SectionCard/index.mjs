import { j as jsxRuntimeExports } from "../../jsx-runtime-CSg68eI9.js";
import { EmptyState as EmptyState$1, VStack, Stack, Skeleton as Skeleton$1, Circle, Avatar as Avatar$1, Group, HStack, Heading, Flex, Icon } from "@chakra-ui/react";
import React__default, { forwardRef } from "react";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React__default.createContext && /* @__PURE__ */ React__default.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React__default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React__default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React__default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React__default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React__default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function CiFolderOff(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "g", "attr": { "id": "Folder_Off" }, "child": [{ "tag": "g", "attr": {}, "child": [{ "tag": "path", "attr": { "d": "M4.013,3.3a.5.5,0,0,0-.711.71l.25.25A2.438,2.438,0,0,0,2.062,6.5v11a2.453,2.453,0,0,0,2.451,2.44h14.72l.759.76c.461.46,1.171-.25.711-.7Zm.5,15.64A1.45,1.45,0,0,1,3.062,17.5V6.5a1.444,1.444,0,0,1,1.31-1.43C5.893,6.6,7.432,8.14,8.963,9.66q4.485,4.485,8.96,8.97l.31.31Z" }, "child": [] }, { "tag": "path", "attr": { "d": "M21.438,17.693a.5.5,0,0,1-.5-.5V9.175a1.445,1.445,0,0,0-1.445-1.444H12.827a1.5,1.5,0,0,1-1.474-1.225l-.05-.267a1.445,1.445,0,0,0-1.42-1.178H8.8a.5.5,0,0,1,0-1H9.883a2.446,2.446,0,0,1,2.4,1.994l.05.268a.5.5,0,0,0,.491.408h6.666a2.448,2.448,0,0,1,2.445,2.444v8.018A.5.5,0,0,1,21.438,17.693Z" }, "child": [] }] }] }] })(props);
}
const EmptyState = forwardRef(
  function EmptyState2(props, ref) {
    const { title, description, icon, children, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Root, { ref, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(EmptyState$1.Content, { children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Indicator, { children: icon }),
      description ? /* @__PURE__ */ jsxRuntimeExports.jsxs(VStack, { textAlign: "center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Title, { children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Description, { children: description })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState$1.Title, { children: title }),
      children
    ] }) });
  }
);
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
forwardRef(
  function AvatarGroup2(props, ref) {
    const { size, variant, borderless, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1.PropsProvider, { value: { size, variant, borderless }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { gap: "0", spaceX: "-3", ref, ...rest }) });
  }
);
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
  SectionCard as default
};
