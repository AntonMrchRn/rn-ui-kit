"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputEyeIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputEyeIcon = _ref => {
  let {
    color = '#707070'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.40726 8.09467C5.19513 6.3068 8.00065 4.5 12.0001 4.5C15.9995 4.5 18.805 6.3068 20.5929 8.09467C21.4847 8.98644 22.1277 9.87691 22.5488 10.5457C22.7597 10.8807 22.916 11.1618 23.0209 11.362C23.0734 11.4621 23.113 11.5422 23.1403 11.5988C23.154 11.6272 23.1645 11.6497 23.172 11.6659L23.181 11.6855L23.1838 11.6917L23.1848 11.6938C23.1849 11.6942 23.1854 11.6954 22.5001 12C23.1854 12.3046 23.1853 12.3049 23.1851 12.3053L23.1838 12.3083L23.181 12.3145L23.172 12.3341C23.1645 12.3503 23.154 12.3728 23.1403 12.4012C23.113 12.4578 23.0734 12.5379 23.0209 12.638C22.916 12.8382 22.7597 13.1193 22.5488 13.4543C22.1277 14.1231 21.4847 15.0136 20.5929 15.9053C18.805 17.6932 15.9995 19.5 12.0001 19.5C8.00065 19.5 5.19513 17.6932 3.40726 15.9053C2.51549 15.0136 1.87244 14.1231 1.45135 13.4543C1.24044 13.1193 1.08414 12.8382 0.97927 12.638C0.926809 12.5379 0.887135 12.4578 0.85986 12.4012C0.84622 12.3728 0.835672 12.3503 0.828169 12.3341L0.819187 12.3145L0.816396 12.3083L0.815422 12.3062C0.815261 12.3058 0.81473 12.3046 1.50009 12C0.81473 11.6954 0.81488 11.6951 0.815041 11.6947L0.816396 11.6917L0.819187 11.6855L0.828169 11.6659C0.835672 11.6497 0.84622 11.6272 0.85986 11.5988C0.887135 11.5422 0.926809 11.4621 0.97927 11.362C1.08414 11.1618 1.24044 10.8807 1.45135 10.5457C1.87244 9.87691 2.51549 8.98644 3.40726 8.09467ZM1.50009 12L0.815041 11.6947C0.728853 11.8886 0.728542 12.1107 0.81473 12.3046L1.50009 12ZM2.33867 12C2.42691 12.1653 2.55362 12.3897 2.7207 12.6551C3.09648 13.2519 3.67219 14.0489 4.46792 14.8447C6.05505 16.4318 8.49952 18 12.0001 18C15.5007 18 17.9451 16.4318 19.5323 14.8447C20.328 14.0489 20.9037 13.2519 21.2795 12.6551C21.4466 12.3897 21.5733 12.1653 21.6615 12C21.5733 11.8347 21.4466 11.6103 21.2795 11.3449C20.9037 10.7481 20.328 9.95106 19.5323 9.15533C17.9451 7.5682 15.5007 6 12.0001 6C8.49952 6 6.05505 7.5682 4.46792 9.15533C3.67219 9.95106 3.09648 10.7481 2.7207 11.3449C2.55362 11.6103 2.42691 11.8347 2.33867 12ZM22.5001 12L23.1851 12.3053C23.2713 12.1114 23.2716 11.8893 23.1854 11.6954L22.5001 12Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7.50009 12C7.50009 9.51472 9.5148 7.5 12.0001 7.5C14.4854 7.5 16.5001 9.51472 16.5001 12C16.5001 14.4853 14.4854 16.5 12.0001 16.5C9.51481 16.5 7.50009 14.4853 7.50009 12ZM12.0001 9C10.3432 9 9.00009 10.3431 9.00009 12C9.00009 13.6569 10.3432 15 12.0001 15C13.657 15 15.0001 13.6569 15.0001 12C15.0001 10.3431 13.657 9 12.0001 9Z",
    fill: color
  }));
};
exports.InputEyeIcon = InputEyeIcon;
//# sourceMappingURL=InputEyeIcon.js.map