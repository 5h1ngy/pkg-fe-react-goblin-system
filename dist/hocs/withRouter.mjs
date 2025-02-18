import { j as jsxRuntimeExports } from "../.chunks/CSg68eI9.js";
import { u as useLocation, a as useNavigate } from "../.chunks/DW6FJsjl.js";
function withRouter(WrappedComponent) {
  const RouterComponent = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedComponent, { ...props, router: { location, navigate } });
  };
  return RouterComponent;
}
export {
  withRouter as default
};
