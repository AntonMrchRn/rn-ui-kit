"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _LinkIcon = require("../icons/LinkIcon");
var _Text = require("./Text");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Link = _ref => {
  let {
    label,
    style,
    labelStyle,
    url,
    icon,
    size
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const handlePress = (0, _react.useCallback)(async () => {
    if (url) {
      const supported = await _reactNative.Linking.canOpenURL(url);
      if (supported) {
        await _reactNative.Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    } else {
      console.log('URL must not be empty');
    }
  }, [url]);
  const styles = _reactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    label: {
      color: theme.text.accent
    },
    icon: {
      marginRight: 4
    }
  });
  const containerStyle = _reactNative.StyleSheet.compose(styles.container, style);
  const variant = size === 'L' ? 'bodyMRegular' : 'bodySRegular';
  const currentLabelStyle = _reactNative.StyleSheet.compose(styles.label, [_Text.typography[variant], labelStyle]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: containerStyle,
    onPress: handlePress
  }, icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.icon
  }, /*#__PURE__*/_react.default.createElement(_LinkIcon.LinkIcon, {
    size: size,
    color: theme.icons.accent
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentLabelStyle
  }, label));
};
exports.Link = Link;
//# sourceMappingURL=Link.js.map