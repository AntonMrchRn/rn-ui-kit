"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Card = _ref => {
  let {
    isShadow,
    children,
    ...props
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const styles = _reactNative.StyleSheet.create({
    card: {
      backgroundColor: theme.background.main,
      alignSelf: 'flex-start',
      paddingVertical: 14,
      paddingHorizontal: 20,
      width: '100%'
    },
    shadow: {
      shadowColor: '#0f0f0',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3
    }
  });
  const currentCardStyle = _reactNative.StyleSheet.compose(styles.card, [isShadow && styles.shadow, props.style]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: currentCardStyle
  }, props), children);
};
exports.Card = Card;
//# sourceMappingURL=Card.js.map