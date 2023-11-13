import React from 'react';
import SVG, { Path } from 'react-native-svg';
export const BannerSuccessIcon = _ref => {
  let {
    color = '#03A803',
    size = 28
  } = _ref;
  return /*#__PURE__*/React.createElement(SVG, {
    width: size,
    height: size,
    viewBox: "0 0 28 28",
    fill: "none"
  }, /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.625 12C0.625 5.71776 5.71776 0.625 12 0.625C18.2823 0.625 23.375 5.71777 23.375 12C23.375 18.2823 18.2823 23.375 12 23.375C5.71777 23.375 0.625 18.2823 0.625 12ZM17.4456 8.77101C17.7792 9.12067 17.7661 9.67453 17.4165 10.0081L10.9962 16.1331C10.6579 16.4558 10.1257 16.4556 9.78769 16.1326L6.58298 13.0701C6.2336 12.7362 6.22104 12.1824 6.55491 11.833C6.88877 11.4836 7.44265 11.471 7.79202 11.8049L10.3927 14.2902L16.2085 8.74189C16.5582 8.40832 17.112 8.42136 17.4456 8.77101Z",
    fill: color
  }));
};
//# sourceMappingURL=BannerSuccessIcon.js.map