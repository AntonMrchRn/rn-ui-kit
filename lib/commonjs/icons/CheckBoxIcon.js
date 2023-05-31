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
    width: "15",
    height: "10",
    viewBox: "0 0 15 10",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14.3169 0.183058C14.561 0.427136 14.561 0.822864 14.3169 1.06694L5.56694 9.81694C5.32286 10.061 4.92714 10.061 4.68306 9.81694L0.308058 5.44194C0.0639806 5.19786 0.0639806 4.80214 0.308058 4.55806C0.552136 4.31398 0.947864 4.31398 1.19194 4.55806L5.125 8.49112L13.4331 0.183058C13.6771 -0.0610194 14.0729 -0.0610194 14.3169 0.183058Z",
    fill: "white"
  }));
};
exports.CheckBoxIcon = CheckBoxIcon;
//# sourceMappingURL=CheckBoxIcon.js.map