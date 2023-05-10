import React, { FC } from 'react';
import { Switch, SwitchProps } from 'react-native-switch';
import { useTheme } from 'rn-ui-kit';

const WrongSwitch = Switch as any;

export const Switcher: FC<SwitchProps> = (props) => {
  const theme = useTheme();

  return (
    <WrongSwitch
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
