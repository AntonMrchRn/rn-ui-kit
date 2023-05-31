"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerSuccessIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BannerSuccessIcon = _ref => {
  let {
    color = '#03A803'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M17.4165 10.0081C17.7661 9.67453 17.7792 9.12067 17.4456 8.77101C17.112 8.42136 16.5582 8.40832 16.2085 8.74189L10.3927 14.2902L7.79202 11.8049C7.44265 11.471 6.88877 11.4836 6.5549 11.833C6.22104 12.1823 6.2336 12.7362 6.58298 13.0701L9.78769 16.1326C10.1257 16.4556 10.6579 16.4558 10.9962 16.1331L17.4165 10.0081Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 0.625C5.71776 0.625 0.625 5.71776 0.625 12C0.625 18.2823 5.71777 23.375 12 23.375C18.2823 23.375 23.375 18.2823 23.375 12C23.375 5.71777 18.2823 0.625 12 0.625ZM2.375 12C2.375 6.68426 6.68426 2.375 12 2.375C17.3158 2.375 21.625 6.68426 21.625 12C21.625 17.3158 17.3158 21.625 12 21.625C6.68426 21.625 2.375 17.3158 2.375 12Z",
    fill: color
  }));
};
exports.BannerSuccessIcon = BannerSuccessIcon;
//# sourceMappingURL=BannerSuccessIcon.js.map