"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BannerAlertIcon = _ref => {
  let {
    color = '#EB142D'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M12 5.875C12.4832 5.875 12.875 6.26675 12.875 6.75V12.875C12.875 13.3582 12.4832 13.75 12 13.75C11.5168 13.75 11.125 13.3582 11.125 12.875V6.75C11.125 6.26675 11.5168 5.875 12 5.875Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M13.0938 16.8125C13.0938 17.4166 12.6041 17.9062 12 17.9062C11.3959 17.9062 10.9062 17.4166 10.9062 16.8125C10.9062 16.2084 11.3959 15.7187 12 15.7187C12.6041 15.7187 13.0938 16.2084 13.0938 16.8125Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.625 12C0.625 5.71776 5.71776 0.625 12 0.625C18.2823 0.625 23.375 5.71777 23.375 12C23.375 18.2823 18.2823 23.375 12 23.375C5.71777 23.375 0.625 18.2823 0.625 12ZM12 2.375C6.68426 2.375 2.375 6.68426 2.375 12C2.375 17.3158 6.68426 21.625 12 21.625C17.3158 21.625 21.625 17.3158 21.625 12C21.625 6.68426 17.3158 2.375 12 2.375Z",
    fill: color
  }));
};
exports.BannerAlertIcon = BannerAlertIcon;
//# sourceMappingURL=BannerAlertIcon.js.map