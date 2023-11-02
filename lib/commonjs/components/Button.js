"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _PlusIcon = require("../icons/PlusIcon");
var _Text = require("./Text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Button = _ref => {
  let {
    icon,
    variant = 'accent',
    labelStyle,
    label = '',
    size = 'M',
    isPending,
    style,
    activeOpacity,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
    label: {
      marginLeft: icon || isPending ? 8 : 0,
      lineHeight: size === 'S' ? 20 : 24,
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      textAlign: 'center'
    },
    button: {
      paddingHorizontal: 24,
      paddingVertical: 4,
      width: '100%',
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      minHeight: 48
    },
    smallButton: {
      paddingVertical: 4,
      paddingHorizontal: 16,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start'
    },
    accent: {
      backgroundColor: theme.background.accent,
      minHeight: size === 'S' ? 36 : 48,
      fontFamily: 'Nunito Sans',
      borderRadius: size === 'S' ? 8 : 12
    },
    danger: {
      backgroundColor: theme.background.danger,
      fontFamily: 'Nunito Sans',
      lineHeight: size === 'S' ? 20 : 24,
      borderRadius: size === 'S' ? 8 : 12
    },
    ghost: {
      borderWidth: 0,
      backgroundColor: 'white',
      fontFamily: 'Nunito Sans',
      lineHeight: size === 'S' ? 20 : 24,
      paddingHorizontal: size === 'S' ? 0 : 24,
      minHeight: size === 'S' ? 36 : 40
    },
    dangerGhost: {
      borderWidth: 0,
      backgroundColor: 'white',
      fontFamily: 'Nunito Sans',
      lineHeight: size === 'S' ? 20 : 24,
      paddingHorizontal: size === 'S' ? 0 : 24,
      minHeight: size === 'S' ? 36 : 40
    },
    outlineAccent: {
      backgroundColor: 'white',
      borderWidth: 2,
      paddingHorizontal: size === 'S' ? 14 : 24,
      borderColor: theme.background.accent,
      minHeight: size === 'S' ? 36 : 44,
      borderRadius: size === 'S' ? 16 : 14
    },
    outlineDanger: {
      backgroundColor: 'white',
      borderWidth: 2,
      paddingHorizontal: size === 'S' ? 14 : 24,
      borderColor: theme.background.danger,
      minHeight: size === 'S' ? 36 : 44,
      borderRadius: size === 'S' ? 16 : 14
    },
    accentDisabled: {
      backgroundColor: theme.background.accentDisable,
      borderWidth: 0
    },
    dangerDisabled: {
      backgroundColor: theme.background.dangerDisable,
      borderWidth: 0
    },
    outlineAccentDisabled: {
      backgroundColor: 'white',
      borderColor: theme.background.neutralDisable
    },
    outlineDangerDisabled: {
      backgroundColor: 'white',
      borderColor: theme.background.dangerDisable
    },
    ghostDisabled: {
      backgroundColor: 'white'
    },
    dangerGhostDisabled: {
      backgroundColor: 'white'
    }
  });
  const stylesLabel = _reactNative.StyleSheet.create({
    accent: {
      color: theme.background.main
    },
    danger: {
      color: theme.background.main
    },
    ghost: {
      color: theme.icons.basic
    },
    dangerGhost: {
      color: theme.background.danger
    },
    ghostDisabled: {
      color: theme.background.neutralDisable
    },
    dangerGhostDisabled: {
      color: theme.background.dangerDisable
    },
    outlineAccent: {
      color: theme.background.accent
    },
    outlineDanger: {
      color: theme.background.danger
    },
    accentDisabled: {
      color: theme.background.main
    },
    dangerDisabled: {
      color: theme.background.main
    },
    outlineAccentDisabled: {
      color: theme.background.neutralDisable
    },
    outlineDangerDisabled: {
      color: theme.background.dangerDisable
    }
  });
  const getIcon = () => {
    if (isPending) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
        color: props.disabled ? stylesLabel[`${variant}Disabled`].color : stylesLabel[variant].color
      });
    }
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_PlusIcon.PlusIcon, {
          color: props.disabled ? stylesLabel[`${variant}Disabled`].color : stylesLabel[variant].color,
          size: size === 'S' ? 20 : 24
        });
      }
      return icon;
    }
    return null;
  };
  const currentButtonStyle = _reactNative.StyleSheet.compose(size === 'S' ? styles.smallButton : styles.button, [styles[variant], props.disabled && styles[`${variant}Disabled`], style]);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, [stylesLabel[variant], props.disabled && stylesLabel[`${variant}Disabled`], labelStyle]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    style: currentButtonStyle
  }, props, {
    activeOpacity: activeOpacity || 0.5
  }), getIcon(), label && !isPending && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    variant: size === 'S' ? 'bodySBold' : 'bodyMBold',
    color: theme.background.main,
    style: currentLabelStyle
  }, label));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map