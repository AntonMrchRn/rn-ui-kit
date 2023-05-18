"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioButton = props => {
  const theme = (0, _ThemeProvider.useTheme)();
  const stylesRadioButton = _reactNative.StyleSheet.create({
    initial: {
      height: 26,
      width: 26,
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    uncheckedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: 'transparent'
    },
    checkedUndisabled: {
      borderColor: theme.background.accent,
      backgroundColor: '#fff'
    },
    uncheckedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    checkedDisabled: {
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    radioActive: {
      height: 13,
      width: 13,
      backgroundColor: theme.background.accent,
      borderRadius: 50
    },
    radioDisabled: {
      backgroundColor: theme.background.neutralDisable
    }
  });
  const currentStyle = () => {
    if (!props.checked && !props.disabled) {
      return stylesRadioButton.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled) {
      return stylesRadioButton.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return stylesRadioButton.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return stylesRadioButton.checkedDisabled;
    }
    return;
  };
  const style = _reactNative.StyleSheet.compose(stylesRadioButton.initial, [props.style, currentStyle()]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    style: style
  }, props, {
    activeOpacity: 0.7
  }), props.checked && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [stylesRadioButton.radioActive, props.disabled && stylesRadioButton.radioDisabled]
  }));
};
exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.js.map