import { j as jsxRuntimeExports } from "../../.chunks/CSg68eI9.js";
import { createContext, useState, useEffect, useRef, useContext } from "react";
import { Toaster } from "../../components/Factory/Chakra/toaster.mjs";
import { u as useLocation, a as useNavigate, N as NavLink } from "../../.chunks/DW6FJsjl.js";
import { Flex, Text, Spacer, Tabs, IconButton, Image, chakra } from "@chakra-ui/react";
import { g as gsapWithCSS } from "../../.chunks/CXxskxL3.js";
import { a as CiGlobe } from "../../.chunks/CqM0Stt-.js";
import { ColorModeButtonExtended } from "../../components/Factory/Chakra/color-mode.mjs";
import { DrawerRoot, DrawerBackdrop, DrawerTrigger, DrawerContent, DrawerBody, DrawerCloseTrigger } from "../../components/Factory/Chakra/drawer.mjs";
const Context = createContext(void 0);
function withContext(WrappedComponent) {
  const HOC = (props) => {
    const location = useLocation();
    const [background, setBackground] = useState(props.background);
    useEffect(() => {
      setBackground(props.background);
    }, [location.pathname]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Context.Provider, { value: { props: { ...props, background }, setBackground }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedComponent, { ...props }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
    ] });
  };
  HOC.displayName = `withTransformerLayout(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return HOC;
}
/*!
 * ScrollToPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap, _coreInitted, _window, _docEl, _body, _toArray, _config, ScrollTrigger, _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
}, _getGSAP = function _getGSAP2() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isString = function _isString2(value) {
  return typeof value === "string";
}, _isFunction = function _isFunction2(value) {
  return typeof value === "function";
}, _max = function _max2(element, axis) {
  var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
}, _buildGetter = function _buildGetter2(e, axis) {
  var p = "scroll" + (axis === "x" ? "Left" : "Top");
  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else {
      e = _docEl[p] != null ? _docEl : _body;
    }
  }
  return function() {
    return e[p];
  };
}, _clean = function _clean2(value, index2, target, targets) {
  _isFunction(value) && (value = value(index2, target, targets));
  if (typeof value !== "object") {
    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
      x: value,
      y: value
    } : {
      y: value
    };
  } else if (value.nodeType) {
    return {
      y: value,
      x: value
    };
  } else {
    var result = {}, p;
    for (p in value) {
      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index2, target, targets) : value[p];
    }
    return result;
  }
}, _getOffset = function _getOffset2(element, container) {
  element = _toArray(element)[0];
  if (!element || !element.getBoundingClientRect) {
    return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
  }
  var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body, cRect = isRoot ? {
    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
  } : container.getBoundingClientRect(), offsets = {
    x: rect.left - cRect.left,
    y: rect.top - cRect.top
  };
  if (!isRoot && container) {
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }
  return offsets;
}, _parseVal = function _parseVal2(value, target, axis, currentVal, offset) {
  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
}, _initCore = function _initCore2() {
  gsap = _getGSAP();
  if (_windowExists() && gsap && typeof document !== "undefined" && document.body) {
    _window = window;
    _body = document.body;
    _docEl = document.documentElement;
    _toArray = gsap.utils.toArray;
    gsap.config({
      autoKillThreshold: 7
    });
    _config = gsap.config();
    _coreInitted = 1;
  }
};
var ScrollToPlugin = {
  version: "3.12.7",
  name: "scrollTo",
  rawVars: 1,
  register: function register(core) {
    gsap = core;
    _initCore();
  },
  init: function init(target, value, tween, index2, targets) {
    _coreInitted || _initCore();
    var data = this, snapType = gsap.getProperty(target, "scrollSnapType");
    data.isWin = target === _window;
    data.target = target;
    data.tween = tween;
    value = _clean(value, index2, target, targets);
    data.vars = value;
    data.autoKill = !!("autoKill" in value ? value : _config).autoKill;
    data.getX = _buildGetter(target, "x");
    data.getY = _buildGetter(target, "y");
    data.x = data.xPrev = data.getX();
    data.y = data.yPrev = data.getY();
    ScrollTrigger || (ScrollTrigger = gsap.core.globals().ScrollTrigger);
    gsap.getProperty(target, "scrollBehavior") === "smooth" && gsap.set(target, {
      scrollBehavior: "auto"
    });
    if (snapType && snapType !== "none") {
      data.snap = 1;
      data.snapInline = target.style.scrollSnapType;
      target.style.scrollSnapType = "none";
    }
    if (value.x != null) {
      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index2, targets);
      data._props.push("scrollTo_x");
    } else {
      data.skipX = 1;
    }
    if (value.y != null) {
      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index2, targets);
      data._props.push("scrollTo_y");
    } else {
      data.skipY = 1;
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    x = isWin || !data.skipX ? data.getX() : xPrev;
    y = isWin || !data.skipY ? data.getY() : yPrev;
    yDif = y - yPrev;
    xDif = x - xPrev;
    threshold = _config.autoKillThreshold;
    if (data.x < 0) {
      data.x = 0;
    }
    if (data.y < 0) {
      data.y = 0;
    }
    if (autoKill) {
      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
        data.skipX = 1;
      }
      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
        data.skipY = 1;
      }
      if (data.skipX && data.skipY) {
        tween.kill();
        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
      }
    }
    if (isWin) {
      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
    } else {
      data.skipY || (target.scrollTop = data.y);
      data.skipX || (target.scrollLeft = data.x);
    }
    if (snap && (ratio === 1 || ratio === 0)) {
      y = target.scrollTop;
      x = target.scrollLeft;
      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
      target.scrollTop = y + 1;
      target.scrollLeft = x + 1;
      target.scrollTop = y;
      target.scrollLeft = x;
    }
    data.xPrev = data.x;
    data.yPrev = data.y;
    ScrollTrigger && ScrollTrigger.update();
  },
  kill: function kill(property) {
    var both = property === "scrollTo", i = this._props.indexOf(property);
    if (both || property === "scrollTo_x") {
      this.skipX = 1;
    }
    if (both || property === "scrollTo_y") {
      this.skipY = 1;
    }
    i > -1 && this._props.splice(i, 1);
    return !this._props.length;
  }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
ScrollToPlugin.config = function(vars) {
  _config || _initCore() || (_config = gsap.config());
  for (var p in vars) {
    _config[p] = vars[p];
  }
};
_getGSAP() && gsap.registerPlugin(ScrollToPlugin);
gsapWithCSS.registerPlugin(ScrollToPlugin);
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    gsapWithCSS.to(window, {
      scrollTo: {
        y: section.offsetTop - 50,
        autoKill: false
      },
      duration: 1,
      ease: "power1.inOut"
    });
  } else {
    console.warn(`Elemento con ID '${id}' non trovato.`);
  }
}
function findMatchingNavbarValue(location, items, subItems) {
  if (!items || !subItems) {
    return null;
  }
  const matchedNavbarItem = items.find(
    (navItem) => location.startsWith(navItem.value)
  );
  if (!matchedNavbarItem || !matchedNavbarItem.group) {
    return null;
  }
  const matchedSubItem = subItems.find(
    (subItem) => subItem.group.includes(matchedNavbarItem.group) && location.startsWith(subItem.value)
  );
  return matchedSubItem ? matchedSubItem.value : null;
}
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    const listener = (event) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);
  return matches;
}
function useMouse() {
  const location = useLocation();
  const navigate = useNavigate();
  const circleRef = useRef(null);
  const isMobileRef = useMediaQuery("(max-width: 519px)");
  function handleMouseMove(event) {
    if (circleRef.current) {
      gsapWithCSS.to(circleRef.current, {
        x: event.clientX - 50,
        y: event.clientY - 50,
        duration: 0.1,
        ease: "power1.out"
      });
    }
  }
  function handleNavigationAndScroll(path, navigationScroll) {
    if (navigationScroll) {
      navigate(path.replace("/", "").split("/").pop() || "");
      scrollToSection(path.replace("/", "").split("/").pop() || "");
    } else {
      navigate(path, { replace: true });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      scrollToSection(location.pathname.split("/").pop() || "");
    }, 500);
  }, []);
  useEffect(() => {
    if (isMobileRef) return;
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMobileRef]);
  return { handleNavigationAndScroll, isMobileRef, circleRef };
}
const usePageContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useDashboard must be used within Dashboard page");
  }
  return context;
};
const Component = () => {
  const { isMobileRef, handleNavigationAndScroll } = useMouse();
  const { props } = usePageContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { navigationScroll, logo, navbarItems, navbarSubItems } = props;
  const Logo = () => logo && /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { src: logo, width: "42px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Flex,
    {
      wrap: "wrap",
      position: "fixed",
      zIndex: 4,
      width: "100%",
      top: 0,
      backgroundColor: "white",
      _dark: { backgroundColor: "black" },
      children: !isMobileRef ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Flex,
          {
            wrap: "wrap",
            direction: "row",
            width: "100%",
            gapX: "1rem",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
            paddingX: "5%",
            paddingY: !navbarSubItems ? "1rem" : "",
            paddingTop: navbarSubItems ? "1rem" : "",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
              navbarItems == null ? void 0 : navbarItems.map(
                (item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Text,
                  {
                    onClick: () => handleNavigationAndScroll(item.value, navigationScroll),
                    style: { cursor: "pointer" },
                    textStyle: "xl",
                    fontWeight: "medium",
                    children: item.label
                  },
                  item.value
                )
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Spacer, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ColorModeButtonExtended, { variant: "enclosed", size: "sm" })
            ]
          }
        ),
        navbarSubItems && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Flex,
          {
            wrap: "wrap",
            direction: "row",
            width: "100%",
            gapX: "1rem",
            justifyContent: "start",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
            paddingX: "10%",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tabs.Root,
              {
                defaultValue: findMatchingNavbarValue(location.pathname, navbarItems, navbarSubItems),
                variant: "line",
                size: "sm",
                onValueChange: (details) => navigate(details.value),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs.List, { children: navbarSubItems.filter(
                  (subItem) => {
                    var _a, _b;
                    return subItem.group ? (_b = subItem.group) == null ? void 0 : _b.includes(
                      ((_a = navbarItems == null ? void 0 : navbarItems.find(
                        (item) => location.pathname.search(new RegExp(item.value, "g")) !== -1
                      )) == null ? void 0 : _a.group) || ""
                    ) : true;
                  }
                ).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs.Trigger, { value: item.value, children: [
                  item.icon,
                  " ",
                  item.label
                ] }, crypto.randomUUID())) })
              },
              crypto.randomUUID()
            )
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Flex,
        {
          wrap: "wrap",
          direction: "row",
          width: "100%",
          gapX: "1rem",
          justifyContent: "start",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          paddingX: "5%",
          paddingY: "1rem",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerRoot, { size: "full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerBackdrop, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { "aria-label": "", variant: "subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CiGlobe, {}) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Spacer, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ColorModeButtonExtended, { variant: "enclosed", size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { direction: "column", gap: "3rem", height: "100%", alignItems: "center", justifyContent: "center", children: navbarItems == null ? void 0 : navbarItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: item.value, end: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { textStyle: "3xl", fontWeight: "medium", children: item.label }) }, crypto.randomUUID())) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerCloseTrigger, {})
            ] })
          ] })
        }
      )
    }
  );
};
const Body = () => {
  const { props } = usePageContext();
  const { children } = props;
  const flexRef = useRef(null);
  useEffect(() => {
    if (flexRef.current) {
      gsapWithCSS.fromTo(
        flexRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
      );
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Flex,
    {
      ref: flexRef,
      zIndex: "3",
      minHeight: "100vh",
      wrap: "wrap",
      borderYWidth: "1px",
      paddingTop: "8rem",
      paddingBottom: "8rem",
      paddingX: { base: "5%", sm: "5%", md: "5%", lg: "5%", xl: "10%", "2xl": "10%" },
      gap: "8rem",
      justifyContent: "center",
      children
    }
  );
};
const Transformer = () => {
  const { isMobileRef, circleRef } = useMouse();
  const { props } = usePageContext();
  const { background } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Flex,
    {
      position: "relative",
      overflow: "hidden",
      direction: "column",
      width: "100%",
      minHeight: "100vh",
      children: [
        background && /* @__PURE__ */ jsxRuntimeExports.jsx(
          chakra.div,
          {
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            backgroundSize: "cover",
            filter: background.opacity ? `blur(${background.opacity}px)` : void 0,
            backgroundColor: "gray.100",
            backgroundImage: background.image ? `url(${void 0}/assets/background_white.png)` : void 0,
            _dark: {
              backgroundColor: "gray.950",
              backgroundImage: background.imageDark ? `url(${void 0}/assets/background_dark.png)` : void 0
            }
          }
        ),
        !isMobileRef && /* @__PURE__ */ jsxRuntimeExports.jsx(
          chakra.div,
          {
            ref: circleRef,
            pointerEvents: "none",
            position: "fixed",
            zIndex: 2,
            top: 0,
            left: 0,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "radial-gradient(circle, {colors.gray.100} 0%, transparent 70%)",
            _dark: {
              background: "radial-gradient(circle, {colors.gray.950} 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Flex,
          {
            position: "relative",
            zIndex: 3,
            direction: "column",
            width: "100%",
            minHeight: "100vh",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Body, {})
            ]
          }
        )
      ]
    }
  );
};
const index = withContext(Transformer);
export {
  index as default
};
