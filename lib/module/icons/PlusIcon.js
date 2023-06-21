import React from 'react';
import SVG, { Path } from 'react-native-svg';
export const PlusIcon = _ref => {
  let {
    color = 'white',
    size = 18
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, {
    width: size,
    height: size,
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement(Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0 9C0 8.58579 0.335786 8.25 0.75 8.25H17.25C17.6642 8.25 18 8.58579 18 9C18 9.41421 17.6642 9.75 17.25 9.75H0.75C0.335786 9.75 0 9.41421 0 9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9 0C9.41421 0 9.75 0.335786 9.75 0.75V17.25C9.75 17.6642 9.41421 18 9 18C8.58579 18 8.25 17.6642 8.25 17.25V0.75C8.25 0.335786 8.58579 0 9 0Z",
    fill: color
  }));
};
//# sourceMappingURL=PlusIcon.js.map