function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Switch as RNSwitch } from 'react-native-switch';
import { useTheme } from '../theme/ThemeProvider';
const CustomSwitch = RNSwitch;
export const Switch = props => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(CustomSwitch, _extends({
    value: props.value,
    activeText: '',
    inActiveText: '',
    circleSize: 24,
    barHeight: 32,
    circleBorderWidth: 0,
    backgroundActive: props.disabled ? theme.background.accentDisable : theme.background.accent,
    backgroundInactive: props.disabled ? theme.background.neutralDisableSecond : theme.background.neutralDisable,
    circleActiveColor: '#fff',
    circleInActiveColor: '#fff',
    changeValueImmediately: true,
    renderActiveText: false,
    renderInActiveText: false,
    switchLeftPx: 2.1,
    switchRightPx: 2.1,
    switchWidthMultiplier: 2.3,
    switchBorderRadius: 16
  }, props));
};
//# sourceMappingURL=Switcher.js.map