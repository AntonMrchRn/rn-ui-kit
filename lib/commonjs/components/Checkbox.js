"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _CheckBoxIcon = require("../icons/CheckBoxIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckBox = _ref => {
  let {
    icon,
    style,
    activeOpacity = 0.7,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const stylesCheckBox = _reactNative.StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'tranpsarent'
    },
    uncheckedUndisabled: {
      borderWidth: 1.5,
      borderColor: theme.background.accent,
      backgroundColor: 'transparent'
    },
    checkedUndisabled: {
      borderWidth: 0,
      backgroundColor: theme.background.accent
    },
    uncheckedDisabled: {
      borderWidth: 1.5,
      borderColor: theme.background.neutralDisable,
      backgroundColor: 'transparent'
    },
    checkedDisabled: {
      borderWidth: 0,
      borderColor: theme.background.neutralDisable,
      backgroundColor: theme.background.neutralDisable
    }
  });
  const getStyle = () => {
    if (!props.checked && !props.disabled) {
      return stylesCheckBox.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled) {
      return stylesCheckBox.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return stylesCheckBox.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return stylesCheckBox.checkedDisabled;
    }
    return;
  };
  const currentStyle = _reactNative.StyleSheet.compose(stylesCheckBox.initial, [getStyle(), style]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    style: currentStyle,
    activeOpacity: activeOpacity
  }, props), props.checked && (icon || /*#__PURE__*/_react.default.createElement(_CheckBoxIcon.CheckBoxIcon, null)));
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=Checkbox.js.map