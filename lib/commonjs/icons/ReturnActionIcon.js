"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnActionIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ReturnActionIcon = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M15.4474 3.68439C13.8024 3.00341 11.9925 2.82561 10.2464 3.17347C8.50063 3.52129 6.89718 4.37902 5.63887 5.63817L3.73145 7.53998V4.84668C3.73145 4.43247 3.39566 4.09668 2.98145 4.09668C2.56723 4.09668 2.23145 4.43247 2.23145 4.84668V9.34668C2.23145 9.41869 2.24159 9.48833 2.26054 9.55425C2.29434 9.67216 2.3576 9.78342 2.45033 9.87643C2.60125 10.0278 2.80074 10.1012 2.9988 10.0967H7.48145C7.89566 10.0967 8.23145 9.76089 8.23145 9.34668C8.23145 8.93247 7.89566 8.59668 7.48145 8.59668H4.79608L6.69949 6.69887C7.74814 5.64936 9.0845 4.93445 10.5395 4.64456C11.9946 4.35468 13.5029 4.50284 14.8737 5.07032C16.2445 5.6378 17.4162 6.59909 18.2406 7.83259C19.0649 9.06609 19.505 10.5164 19.505 12C19.505 13.4836 19.0649 14.9339 18.2406 16.1674C17.4162 17.4009 16.2445 18.3622 14.8737 18.9297C13.5029 19.4972 11.9946 19.6453 10.5395 19.3554C9.0845 19.0656 7.74814 18.3506 6.69949 17.3011C6.40672 17.0081 5.93184 17.0079 5.63883 17.3007C5.34582 17.5935 5.34563 18.0684 5.6384 18.3614C6.89678 19.6208 8.50041 20.4787 10.2464 20.8265C11.9925 21.1744 13.8024 20.9966 15.4474 20.3156C17.0924 19.6347 18.4984 18.4811 19.4877 17.0009C20.4769 15.5207 21.005 13.7803 21.005 12C21.005 10.2197 20.4769 8.47931 19.4877 6.99911C18.4984 5.51891 17.0924 4.36536 15.4474 3.68439Z",
    fill: "white"
  }));
};
exports.ReturnActionIcon = ReturnActionIcon;
//# sourceMappingURL=ReturnActionIcon.js.map