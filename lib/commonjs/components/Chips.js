"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chips = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _ChipsIcon = require("../icons/ChipsIcon");
var _ChipsCloseIcon = require("../icons/ChipsCloseIcon");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Chips = _ref => {
  let {
    icon,
    close,
    labelStyle,
    label,
    containerStyle,
    selected,
    closeIconPress,
    onPress,
    disabled
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const getLabelColor = () => {
    if (disabled) {
      return theme.text.neutralDisable;
    }
    if (selected) {
      return theme.text.accent;
    }
    return theme.text.neutral;
  };
  const getBorderColor = () => {
    if (disabled) {
      return theme.stroke.neutralLight;
    }
    if (selected) {
      return theme.background.accent;
    }
    return theme.stroke.neutralOptional;
  };
  const styles = _reactNative.StyleSheet.create({
    label: {
      color: getLabelColor(),
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 13,
      lineHeight: 17,
      fontFamily: 'Nunito Sans'
    },
    container: {
      alignSelf: 'flex-start',
      borderRadius: 16,
      minWidth: 40,
      height: 32,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: getBorderColor(),
      backgroundColor: selected && !disabled ? theme.background.fieldMain : 'transparent'
    },
    icon: {
      marginRight: 4
    },
    close: {
      paddingRight: 12
    },
    wrapper: {
      paddingRight: close ? 8 : 12,
      paddingLeft: 12,
      alignItems: 'center',
      flexDirection: 'row'
    }
  });
  const getIcon = () => {
    if (icon) {
      if (typeof icon === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_ChipsIcon.ChipsIcon, {
          color: disabled ? theme.icons.neutralDisable : selected ? theme.text.accent : theme.stroke.neutral
        });
      }
      return icon;
    }
    return null;
  };
  const getCloseIcon = () => {
    if (close) {
      if (typeof close === 'boolean') {
        return /*#__PURE__*/_react.default.createElement(_ChipsCloseIcon.ChipsCloseIcon, {
          color: disabled ? theme.icons.neutralDisable : theme.stroke.neutralOptional
        });
      }
      return icon;
    }
    return null;
  };
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, labelStyle);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress,
    style: styles.wrapper,
    disabled: disabled
  }, icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.icon
  }, getIcon()), label && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: currentLabelStyle
  }, label)), close && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: closeIconPress,
    style: styles.close,
    disabled: disabled
  }, getCloseIcon()));
};
exports.Chips = Chips;
//# sourceMappingURL=Chips.js.map