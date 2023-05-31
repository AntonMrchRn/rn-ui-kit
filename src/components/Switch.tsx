import React, { FC } from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native-switch';
import { useTheme } from '../theme/ThemeProvider';

const CustomSwitch = RNSwitch as any;

export const Switch: FC<SwitchProps> = (props) => {
  const theme = useTheme();

  return (
    <CustomSwitch
      value={props.value}
      activeText={''}
      inActiveText={''}
      circleSize={24}
      barHeight={32}
      circleBorderWidth={0}
      backgroundActive={
        props.disabled
          ? theme.background.accentDisable
          : theme.background.accent
      }
      backgroundInactive={
        props.disabled
          ? theme.background.neutralDisableSecond
          : theme.background.neutralDisable
      }
      circleActiveColor={'#fff'}
      circleInActiveColor={'#fff'}
      changeValueImmediately={true}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2.1}
      switchRightPx={2.1}
      switchWidthMultiplier={2.3}
      switchBorderRadius={16}
      {...props}
    />
  );
};
