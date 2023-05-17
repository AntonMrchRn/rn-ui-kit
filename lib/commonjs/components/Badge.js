"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _BadgeIcom = require("../icons/BadgeIcom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Badge = _ref => {
  let {
    icon,
    variant = 'accent',
    labelStyle,
    label = '',
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
    label: {
      color: '#fff',
      marginLeft: 5,
      fontFamily: 'Nunito Sans Regular'
    },
    badge: {
      height: 28,
      borderRadius: 8,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start'
    },
    accent: {
      backgroundColor: theme.background.accent
    },
    danger: {
      backgroundColor: theme.background.danger
    },
    secondary: {
      backgroundColor: theme.background.secondary
    },
    warning: {
      backgroundColor: theme.icons.warning
    },
    success: {
      backgroundColor: theme.background.success
    },
    basic: {
      backgroundColor: theme.icons.basic
    },
    special: {
      backgroundColor: theme.background.special
    }
  });
  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_BadgeIcom.BadgeIcon, null);
      }
      return icon;
    }
    return null;
  };
  const currentBadgeStyle = _reactNative.StyleSheet.compose(styles.badge, [styles[variant], props.style]);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: currentBadgeStyle
  }, props), getIcon(), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentLabelStyle
  }, label));
};
exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map