"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalErrorIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModalErrorIcon = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M28 15.75C28.9665 15.75 29.75 16.5335 29.75 17.5V29.75C29.75 30.7165 28.9665 31.5 28 31.5C27.0335 31.5 26.25 30.7165 26.25 29.75V17.5C26.25 16.5335 27.0335 15.75 28 15.75Z",
    fill: "#EB142D"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M30.1875 37.625C30.1875 38.8332 29.2082 39.8125 28 39.8125C26.7918 39.8125 25.8125 38.8332 25.8125 37.625C25.8125 36.4168 26.7918 35.4375 28 35.4375C29.2082 35.4375 30.1875 36.4168 30.1875 37.625Z",
    fill: "#EB142D"
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5.25 28C5.25 15.4355 15.4355 5.25 28 5.25C40.5646 5.25 50.75 15.4355 50.75 28C50.75 40.5646 40.5646 50.75 28 50.75C15.4355 50.75 5.25 40.5646 5.25 28ZM28 8.75C17.3685 8.75 8.75 17.3685 8.75 28C8.75 38.6316 17.3685 47.25 28 47.25C38.6316 47.25 47.25 38.6316 47.25 28C47.25 17.3685 38.6316 8.75 28 8.75Z",
    fill: "#EB142D"
  }));
};
exports.ModalErrorIcon = ModalErrorIcon;
//# sourceMappingURL=ModalErrorIcon.js.map