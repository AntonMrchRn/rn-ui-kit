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
    separator
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const getSeparator = () => {
    const borderColor = theme.stroke.disableDivider;
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
  const styles = _reactNative.StyleSheet.create({
    xs: {
      marginVertical: horizontal ? 0 : 2,
      marginHorizontal: horizontal ? 2 : 0
    },
    s: {
      marginVertical: horizontal ? 0 : 4,
      marginHorizontal: horizontal ? 4 : 0
    },
    m: {
      marginVertical: horizontal ? 0 : 6,
      marginHorizontal: horizontal ? 6 : 0
    },
    l: {
      marginVertical: horizontal ? 0 : 8,
      marginHorizontal: horizontal ? 8 : 0
    },
    xl: {
      marginVertical: horizontal ? 0 : 12,
      marginHorizontal: horizontal ? 12 : 0
    },
    xxl: {
      marginVertical: horizontal ? 0 : 18,
      marginHorizontal: horizontal ? 18 : 0
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
      style: [styles[size], styles.separator]
    }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item));
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles[size], styles.separator, horizontal && styles.horizontal]
  }));
};
exports.Spacer = Spacer;
//# sourceMappingURL=Spacer.js.map