"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ThemeProvider = require("../theme/ThemeProvider");
var _TriangleIcon = require("../icons/TriangleIcon");
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Tooltip = _ref => {
  let {
    text,
    title,
    containerStyle,
    titleStyle,
    textStyle,
    triangleIcon,
    triangleStyle,
    triangleEdge = 'top',
    triagnleAlign = 'start',
    isVisible = false,
    onClose,
    children,
    coords = {
      x: 0,
      y: 0
    }
  } = _ref;
  const theme = (0, _ThemeProvider.useTheme)();
  const [measure, setMeasure] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const styles = _reactNative.StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
      position: 'relative',
      alignSelf: 'flex-start'
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.contrast
    },
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.contrast
    },
    modal: {
      top: measure.y - coords.y,
      right: measure.x + coords.x,
      position: 'absolute'
    }
  });
  const triangleStyles = {
    top: {
      start: {
        position: 'absolute',
        top: -8,
        left: 12
      },
      center: {
        position: 'absolute',
        top: -8,
        left: '48%'
      },
      end: {
        position: 'absolute',
        top: -8,
        right: 12
      }
    },
    left: {
      start: {
        position: 'absolute',
        top: 12,
        left: -14,
        transform: [{
          rotate: '270deg'
        }]
      },
      center: {
        position: 'absolute',
        top: '60%',
        left: -14,
        transform: [{
          rotate: '270deg'
        }]
      },
      end: {
        position: 'absolute',
        bottom: 12,
        left: -14,
        transform: [{
          rotate: '270deg'
        }]
      }
    },
    right: {
      start: {
        position: 'absolute',
        top: 12,
        right: -14,
        transform: [{
          rotate: '90deg'
        }]
      },
      center: {
        position: 'absolute',
        top: '60%',
        right: -14,
        transform: [{
          rotate: '90deg'
        }]
      },
      end: {
        position: 'absolute',
        bottom: 12,
        right: -14,
        transform: [{
          rotate: '90deg'
        }]
      }
    },
    bottom: {
      start: {
        position: 'absolute',
        bottom: -8,
        left: 12,
        transform: [{
          rotate: '180deg'
        }]
      },
      center: {
        position: 'absolute',
        bottom: -8,
        left: '48%',
        transform: [{
          rotate: '180deg'
        }]
      },
      end: {
        position: 'absolute',
        bottom: -8,
        right: 12,
        transform: [{
          rotate: '180deg'
        }]
      }
    }
  };
  const currentContainerStyle = _reactNative.StyleSheet.compose(styles.container, containerStyle);
  const currentTitleStyle = _reactNative.StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = _reactNative.StyleSheet.compose(styles.text, textStyle);
  const currentTriangleStyle = _reactNative.StyleSheet.compose(triangleStyles[triangleEdge][triagnleAlign], triangleStyle);
  const ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (isVisible) {
      var _ref$current;
      ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.measureInWindow((x, y) => {
        setMeasure({
          x,
          y
        });
      });
    }
  }, [isVisible]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    ref: ref,
    collapsable: false
  }, /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    isVisible: isVisible,
    onBackdropPress: onClose,
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    backdropColor: "transparent",
    backdropOpacity: 1,
    style: styles.modal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onClose
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentContainerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: currentTriangleStyle
  }, triangleIcon || /*#__PURE__*/_react.default.createElement(_TriangleIcon.TriangleIcon, null)), title && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTitleStyle
  }, title), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: currentTextStyle
  }, text)))), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, children));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map