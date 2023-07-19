"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerInfoIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BannerInfoIcon = _ref => {
  let {
    color = '#3F51B5',
    size = 24
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M10.25 11.125C10.25 10.6418 10.6418 10.25 11.125 10.25H12C12.4832 10.25 12.875 10.6418 12.875 11.125V16.375C13.3582 16.375 13.75 16.7668 13.75 17.25C13.75 17.7332 13.3582 18.125 12.875 18.125H12C11.5168 18.125 11.125 17.7332 11.125 17.25V12C10.6418 12 10.25 11.6082 10.25 11.125Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M12.875 7.1875C12.875 7.79156 12.3854 8.28125 11.7812 8.28125C11.1771 8.28125 10.6875 7.79156 10.6875 7.1875C10.6875 6.58344 11.1771 6.09375 11.7812 6.09375C12.3854 6.09375 12.875 6.58344 12.875 7.1875Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.625 12C0.625 5.71776 5.71776 0.625 12 0.625C18.2823 0.625 23.375 5.71777 23.375 12C23.375 18.2823 18.2823 23.375 12 23.375C5.71777 23.375 0.625 18.2823 0.625 12ZM12 2.375C6.68426 2.375 2.375 6.68426 2.375 12C2.375 17.3158 6.68426 21.625 12 21.625C17.3158 21.625 21.625 17.3158 21.625 12C21.625 6.68426 17.3158 2.375 12 2.375Z",
    fill: color
  }));
};
exports.BannerInfoIcon = BannerInfoIcon;
//# sourceMappingURL=BannerInfoIcon.js.map