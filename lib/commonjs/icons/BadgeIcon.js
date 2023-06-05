"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgeIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BadgeIcon = _ref => {
  let {
    color = 'white'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "20",
    height: "20",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M5.68562 1.31411C5.71406 1.2234 5.77308 1.14377 5.85383 1.08714C5.93459 1.03052 6.03274 0.999945 6.13359 1H9.86669C9.94059 1.00005 10.0134 1.01656 10.0792 1.04816C10.1449 1.07976 10.2018 1.12556 10.245 1.18177C10.2882 1.23799 10.3165 1.30301 10.3276 1.3715C10.3388 1.43999 10.3324 1.50998 10.3091 1.57572L8.64783 6.24969H12.1999C12.2873 6.24963 12.3729 6.27258 12.4471 6.31592C12.5212 6.35926 12.5809 6.42125 12.6193 6.49484C12.6577 6.56842 12.6733 6.65064 12.6644 6.73213C12.6554 6.81362 12.6222 6.89111 12.5685 6.95577L6.0356 14.8303C5.96867 14.9114 5.87351 14.9678 5.76672 14.9898C5.65993 15.0118 5.54829 14.9979 5.45129 14.9507C5.35429 14.9034 5.27808 14.8256 5.23596 14.731C5.19384 14.6364 5.1885 14.531 5.22085 14.4331L6.90167 9.31201H3.80041C3.72786 9.31205 3.6563 9.29623 3.59141 9.2658C3.52653 9.23538 3.4701 9.1912 3.42661 9.13675C3.38313 9.08231 3.35378 9.01911 3.34091 8.95218C3.32803 8.88525 3.33198 8.81642 3.35243 8.75116L5.68562 1.31411ZM6.48263 1.87495L4.42383 8.43706H7.5335C7.60653 8.43704 7.67854 8.4531 7.74374 8.48393C7.80894 8.51476 7.86552 8.55951 7.90891 8.61458C7.9523 8.66964 7.98131 8.73349 7.99359 8.80098C8.00586 8.86846 8.00108 8.93771 7.97961 9.00315L6.86154 12.4093L11.2461 7.12464H8.00014C7.92624 7.12458 7.85341 7.10808 7.78764 7.07647C7.72188 7.04487 7.66506 6.99908 7.62187 6.94287C7.57867 6.88665 7.55034 6.82162 7.53919 6.75313C7.52805 6.68464 7.53441 6.61465 7.55777 6.54892L9.21899 1.87495H6.48263Z",
    fill: color
  }));
};
exports.BadgeIcon = BadgeIcon;
//# sourceMappingURL=BadgeIcon.js.map