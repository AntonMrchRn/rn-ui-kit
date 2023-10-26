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
const RadioButton = _ref => {
  let {
    style,
    isError,
    activeOpacity = 0.7,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
    initial: {
      height: 20,
      width: 20,
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
      height: 10,
      width: 10,
      backgroundColor: isError && props.checked && !props.disabled ? theme.background.danger : theme.background.accent,
      borderRadius: 50
    },
    radioDisabled: {
      backgroundColor: theme.background.neutralDisable
    },
    uncheckedUndisabledError: {
      borderColor: theme.background.danger,
      backgroundColor: theme.background.fieldDanger
    },
    checkedUndisabledError: {
      borderColor: theme.background.danger,
      backgroundColor: 'transparent'
    }
  });
  const getStyle = () => {
    if (!props.checked && !props.disabled && !isError) {
      return styles.uncheckedUndisabled;
    }
    if (props.checked && !props.disabled && !isError) {
      return styles.checkedUndisabled;
    }
    if (!props.checked && props.disabled) {
      return styles.uncheckedDisabled;
    }
    if (props.checked && props.disabled) {
      return styles.checkedDisabled;
    }
    if (isError && !props.checked && !props.disabled) {
      return styles.uncheckedUndisabledError;
    }
    if (isError && props.checked && !props.disabled) {
      return styles.checkedUndisabledError;
    }
    return;
  };
  const currentStyle = _reactNative.StyleSheet.compose(styles.initial, [getStyle(), style]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    style: currentStyle,
    activeOpacity: activeOpacity
  }, props), props.checked && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.radioActive, props.disabled && styles.radioDisabled]
  }));
};
exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.js.map