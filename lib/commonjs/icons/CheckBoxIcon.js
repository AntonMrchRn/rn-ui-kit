"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckBoxIcon = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7803 6.21967C21.0732 6.51256 21.0732 6.98744 20.7803 7.28033L10.2803 17.7803C9.98744 18.0732 9.51256 18.0732 9.21967 17.7803L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697C4.26256 11.1768 4.73744 11.1768 5.03033 11.4697L9.75 16.1893L19.7197 6.21967C20.0126 5.92678 20.4874 5.92678 20.7803 6.21967Z",
    fill: "#fff"
  }));
};
exports.CheckBoxIcon = CheckBoxIcon;
//# sourceMappingURL=CheckBoxIcon.js.map