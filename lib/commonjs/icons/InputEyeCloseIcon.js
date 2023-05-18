"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputEyeCloseIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputEyeCloseIcon = _ref => {
  let {
    color = '#707070'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M4.14018 3.10507C3.93018 3.21507 3.75018 3.51007 3.75018 3.74507C3.75018 4.05507 3.76518 4.07507 5.28518 5.73007L5.75018 6.23507L5.38518 6.47507C4.41518 7.12007 3.29018 8.14507 2.49518 9.11507C1.97018 9.75507 1.30518 10.7451 0.975176 11.3751C0.665176 11.9651 0.675176 12.1001 1.07518 12.8101C3.11518 16.4501 6.37518 18.7901 10.2252 19.3801C11.1402 19.5201 13.0452 19.5101 13.9252 19.3601C14.9252 19.1851 15.8252 18.9301 16.8052 18.5251C16.8652 18.5051 17.1552 18.7901 17.9552 19.6701C18.6002 20.3801 19.0952 20.8801 19.1952 20.9301C19.4102 21.0351 19.7402 21.0001 19.9402 20.8601C20.2002 20.6701 20.3202 20.2851 20.2052 19.9851C20.1352 19.8051 5.07518 3.24507 4.86018 3.11507C4.63518 2.97507 4.38518 2.97507 4.14018 3.10507ZM7.53518 8.21507C7.94018 8.66007 8.31518 9.07507 8.36018 9.13007C8.44518 9.22507 8.44018 9.24007 8.27018 9.49507C8.01018 9.87507 7.77018 10.4151 7.64018 10.8751C7.48518 11.4451 7.48518 12.5501 7.64018 13.1251C7.98018 14.3751 8.83518 15.4301 9.97518 16.0001C10.7302 16.3801 11.1202 16.4701 12.0252 16.4701C12.6952 16.4651 12.8202 16.4501 13.2202 16.3301C13.4702 16.2551 13.8452 16.1051 14.0552 16.0001L14.4402 15.8051L15.8052 17.3001L15.6302 17.3751C15.5352 17.4151 15.2602 17.5051 15.0202 17.5751C12.3302 18.3551 9.25018 18.0251 6.93018 16.7151C5.12518 15.6901 3.51518 14.0801 2.50518 12.2851L2.34018 12.0001L2.50018 11.7101C3.10518 10.6351 4.20518 9.32007 5.20018 8.49007C5.66018 8.10507 6.66018 7.40007 6.75018 7.40007C6.77518 7.40007 7.12518 7.76507 7.53518 8.21507ZM11.4152 12.4751C12.4552 13.6201 13.3152 14.5851 13.3302 14.6201C13.3602 14.7001 12.9352 14.8751 12.5302 14.9551C10.9902 15.2451 9.40018 14.1751 9.07518 12.6251C8.98018 12.1801 8.98018 11.8201 9.07518 11.3801C9.15018 11.0251 9.41018 10.4001 9.48518 10.4001C9.51018 10.4001 10.3752 11.3351 11.4152 12.4751Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M11.0252 4.53007C10.9452 4.54007 10.6602 4.57507 10.4002 4.60507C9.83518 4.67007 9.66518 4.73507 9.48518 4.94507C9.30518 5.16007 9.27018 5.40007 9.37518 5.67507C9.54518 6.13007 9.79518 6.19007 10.9202 6.06007C12.3152 5.90507 13.9502 6.07507 15.3302 6.52507C15.9952 6.74007 17.0552 7.25007 17.6402 7.63007C19.1602 8.62007 20.6302 10.1751 21.5002 11.7101L21.6602 12.0001L21.4952 12.2851C21.0152 13.1451 20.3652 13.9901 19.5202 14.8501C19.1802 15.1951 18.8802 15.5451 18.8502 15.6251C18.6502 16.1501 19.1452 16.6851 19.7252 16.5801C20.2102 16.4851 21.7802 14.7201 22.6552 13.2751C23.3702 12.0951 23.3802 12.0001 22.9252 11.1851C22.0802 9.68007 20.7752 8.13007 19.4752 7.10007C17.8302 5.79507 15.8652 4.93507 13.8002 4.62507C13.3052 4.54507 11.3652 4.48007 11.0252 4.53007Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    d: "M12.4702 7.60508C12.3802 7.63008 12.2402 7.73008 12.1602 7.82508C11.7652 8.27008 11.9752 8.90007 12.5652 9.05008C13.2902 9.24008 13.7302 9.48507 14.1752 9.96007C14.5752 10.3851 14.8202 10.8701 14.9452 11.4951C15.0002 11.7501 15.0852 12.0201 15.1352 12.0951C15.4402 12.5101 16.0352 12.4801 16.3702 12.0301C16.5802 11.7501 16.4302 10.8451 16.0352 10.0251C15.4852 8.89007 14.4652 8.03508 13.2202 7.67508C12.7552 7.54007 12.7052 7.53508 12.4702 7.60508Z",
    fill: color
  }));
};
exports.InputEyeCloseIcon = InputEyeCloseIcon;
//# sourceMappingURL=InputEyeCloseIcon.js.map