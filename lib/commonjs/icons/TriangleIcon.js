"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriangleIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TriangleIcon = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "20",
    height: "8",
    viewBox: "0 0 20 8",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 -8.74228e-07C7 -1.1365e-06 4.0001 8 -6.99382e-07 8L20 8C16.0251 8 13 -6.11959e-07 10 -8.74228e-07Z",
    fill: "black",
    fillOpacity: "0.6"
  }));
};
exports.TriangleIcon = TriangleIcon;
//# sourceMappingURL=TriangleIcon.js.map