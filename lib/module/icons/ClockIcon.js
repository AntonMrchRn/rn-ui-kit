import React from 'react';
import SVG, { Path } from 'react-native-svg';
export const ClockIcon = _ref => {
  let {
    color = '#1B1B1B'
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.25 12C2.25 6.61523 6.61523 2.25 12 2.25C17.3848 2.25 21.75 6.61523 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61523 21.75 2.25 17.3848 2.25 12ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5564 7.44365 20.25 12 20.25C16.5564 20.25 20.25 16.5564 20.25 12C20.25 7.44365 16.5564 3.75 12 3.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12V6.75C11.25 6.33579 11.5858 6 12 6Z",
    fill: color
  }));
};
//# sourceMappingURL=ClockIcon.js.map