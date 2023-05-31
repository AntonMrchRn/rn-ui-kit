"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteActionIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DeleteActionIcon = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeSvg.default, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8.15901 2.65901C8.58096 2.23706 9.15327 2 9.75 2H14.25C14.8467 2 15.4191 2.23704 15.841 2.65901C16.263 3.081 16.5 3.65332 16.5 4.25V5H18.7424C18.7469 4.99996 18.7515 4.99996 18.7561 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H19.4499C19.2399 9.56498 18.735 17.2111 18.5596 19.8709C18.4987 20.7933 17.7361 21.5 16.8168 21.5H7.18266C6.26292 21.5 5.50123 20.7928 5.44044 19.8709C5.26505 17.2112 4.76015 9.56524 4.5501 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H5.2439C5.24849 4.99996 5.25306 4.99996 5.25763 5H7.5V4.25C7.5 3.65327 7.73706 3.08096 8.15901 2.65901ZM6.05361 6.5C6.26799 9.63442 6.76389 17.1441 6.93719 19.7722C6.94572 19.9016 7.04884 20 7.18266 20H16.8168C16.9511 20 17.0543 19.9011 17.0628 19.7722C17.2361 17.1441 17.732 9.63417 17.9464 6.5H6.05361ZM15 5H9V4.25C9 4.05109 9.07902 3.86032 9.21967 3.71967C9.36032 3.57902 9.55109 3.5 9.75 3.5H14.25C14.4489 3.5 14.6397 3.57904 14.7804 3.71967C14.921 3.86028 15 4.05104 15 4.25V5ZM9.75 9.5C10.1642 9.5 10.5 9.83579 10.5 10.25V16.25C10.5 16.6642 10.1642 17 9.75 17C9.33579 17 9 16.6642 9 16.25V10.25C9 9.83579 9.33579 9.5 9.75 9.5ZM14.25 9.5C14.6642 9.5 15 9.83579 15 10.25V16.25C15 16.6642 14.6642 17 14.25 17C13.8358 17 13.5 16.6642 13.5 16.25V10.25C13.5 9.83579 13.8358 9.5 14.25 9.5Z",
    fill: "white"
  }));
};
exports.DeleteActionIcon = DeleteActionIcon;
//# sourceMappingURL=DeleteActionIcon.js.map