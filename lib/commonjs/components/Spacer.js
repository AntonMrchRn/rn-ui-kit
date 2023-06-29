"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Spacer = _ref => {
  let {
    size = 'm',
    children,
    horizontal,
    separator,
    separatorColor
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const getSeparator = () => {
    const borderColor = separatorColor || theme.stroke.disableDivider;
    if (separator === 'top') {
      return {
        borderTopWidth: 1,
        borderColor
      };
    }
    if (separator === 'bottom') {
      return {
        borderBottomWidth: 1,
        borderColor
      };
    }
    return {};
  };
  const getSize = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'xs':
        return 4;
      case 's':
        return 8;
      case 'm':
        return 12;
      case 'l':
        return 16;
      case 'xl':
        return 24;
      case 'xxl':
        return 32;
      case 'xxxl':
        return 36;
      default:
        return 0;
    }
  };
  const styles = _reactNative.StyleSheet.create({
    spacer: {
      height: horizontal ? '100%' : getSize(),
      width: horizontal ? getSize() : '100%'
    },
    horizontal: {
      flexDirection: 'row'
    },
    separator: getSeparator()
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: horizontal && styles.horizontal
  }, children ? _react.Children.map(children, (item, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      style: horizontal && styles.horizontal
    }, index !== 0 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.spacer, styles.separator]
    }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item));
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.spacer, styles.separator, horizontal && styles.horizontal]
  }));
};
exports.Spacer = Spacer;
//# sourceMappingURL=Spacer.js.map