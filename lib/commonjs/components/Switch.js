"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSwitch = require("react-native-switch");
var _ThemeProvider = require("../theme/ThemeProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CustomSwitch = _reactNativeSwitch.Switch;
const Switch = props => {
  const theme = (0, _ThemeProvider.useTheme)();
  return /*#__PURE__*/_react.default.createElement(CustomSwitch, _extends({
    value: props.value,
    activeText: '',
    inActiveText: '',
    circleSize: 24,
    barHeight: 32,
    circleBorderWidth: 0,
    backgroundActive: props.disabled ? theme.background.accentDisable : theme.background.accent,
    backgroundInactive: props.disabled ? theme.background.neutralDisableSecond : theme.background.neutralDisable,
    circleActiveColor: '#fff',
    circleInActiveColor: '#fff',
    changeValueImmediately: true,
    renderActiveText: false,
    renderInActiveText: false,
    switchLeftPx: 2.1,
    switchRightPx: 2.1,
    switchWidthMultiplier: 2.3,
    switchBorderRadius: 16
  }, props));
};
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map