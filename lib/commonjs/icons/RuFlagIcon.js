"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuFlagIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RuFlagIcon = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.G, {
    clipPath: "url(#clip0_48_6191)"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M9.96875 0.625C5.90625 0.625 2.4375 3.25 1.15625 6.875H18.8437C17.5312 3.25 14.0625 0.625 9.96875 0.625Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M9.96875 19.375C14.0625 19.375 17.5312 16.75 18.8125 13.125H1.15625C2.4375 16.7812 5.90625 19.375 9.96875 19.375Z",
    fill: "#ED4C5C"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M1.15625 6.875C0.8125 7.84375 0.625 8.90625 0.625 10C0.625 11.0938 0.8125 12.1562 1.15625 13.125H18.8438C19.1875 12.1562 19.375 11.0938 19.375 10C19.375 8.90625 19.1875 7.84375 18.8438 6.875H1.15625Z",
    fill: "#428BC1"
  })), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Defs, null, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.ClipPath, {
    id: "clip0_48_6191"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Rect, {
    width: "20",
    height: "20",
    fill: "white"
  }))));
};
exports.RuFlagIcon = RuFlagIcon;
//# sourceMappingURL=RuFlagIcon.js.map