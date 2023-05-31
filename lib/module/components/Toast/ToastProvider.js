function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { createContext, useContext, useState } from 'react';
import { Toast } from './Toast';
const ToastContext = /*#__PURE__*/createContext({});
ToastContext.displayName = 'ToastContext';
export const useToast = () => useContext(ToastContext);
export const ToastProvider = _ref => {
  let {
    children
  } = _ref;
  const [state, setState] = useState();
  const show = options => {
    setState(options);
  };
  const onDestroy = () => {
    setState(undefined);
  };
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: {
      show
    }
  }, children, state && /*#__PURE__*/React.createElement(Toast, _extends({
    onDestroy: onDestroy
  }, state)));
};
//# sourceMappingURL=ToastProvider.js.map