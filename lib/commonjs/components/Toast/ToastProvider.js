"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = exports.ToastProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Toast = require("./Toast");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ToastContext = /*#__PURE__*/(0, _react.createContext)({});
ToastContext.displayName = 'ToastContext';
const useToast = () => (0, _react.useContext)(ToastContext);
exports.useToast = useToast;
const ToastProvider = _ref => {
  let {
    children
  } = _ref;
  const [state, setState] = (0, _react.useState)();
  const show = options => {
    setState(options);
  };
  const onDestroy = () => {
    setState(undefined);
  };
  return /*#__PURE__*/_react.default.createElement(ToastContext.Provider, {
    value: {
      show
    }
  }, children, state && /*#__PURE__*/_react.default.createElement(_Toast.Toast, _extends({
    onDestroy: onDestroy
  }, state)));
};
exports.ToastProvider = ToastProvider;
//# sourceMappingURL=ToastProvider.js.map