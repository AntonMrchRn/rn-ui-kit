import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type ToastProps = {
  type: 'error' | 'success' | 'warning' | 'info';
  containerStyle?: StyleProp<ViewStyle>;
  actionsContainerStyle?: StyleProp<ViewStyle>;
  firstAction?: {
    text: string;
    onPress: () => void;
    style?: StyleProp<TextStyle>;
  };
  secondAction?: {
    text: string;
    onPress: () => void;
    style?: StyleProp<TextStyle>;
  };
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  text?: string;
};
export const Toast: FC<ToastProps> = ({
  type,
  containerStyle,
  titleStyle,
  title,
  text,
  textStyle,
  actionsContainerStyle,
  firstAction,
  secondAction,
}) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return theme.background.fieldDanger;
      case 'success':
        return theme.background.fieldSuccess;
      case 'warning':
        return theme.background.fieldWarning;
      default:
        return theme.background.fieldMain;
    }
  };

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: getBackgroundColor(),
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 20,
      color: theme.text.contrast,
    },
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.contrast,
      marginTop: 4,
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
    },
    actionTextStyle: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.contrast,
    },
  });

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentTextStyle = StyleSheet.compose(styles.text, textStyle);
  const currentActionsContainerStyle = StyleSheet.compose(
    styles.actionsContainer,
    actionsContainerStyle
  );
  const currentFirstActionStyle = StyleSheet.compose(
    styles.actionTextStyle,
    firstAction?.style
  );
  const currentSecondActionStyle = StyleSheet.compose(
    styles.actionTextStyle,
    secondAction?.style
  );

  return (
    <View style={currentContainerStyle}>
      {title && <Text style={currentTitleStyle}>{title}</Text>}
      {text && <Text style={currentTextStyle}>{text}</Text>}
      <View style={currentActionsContainerStyle}>
        {firstAction ? (
          <TouchableOpacity onPress={firstAction.onPress}>
            <Text style={currentFirstActionStyle}>{firstAction.text}</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {secondAction ? (
          <TouchableOpacity onPress={secondAction.onPress}>
            <Text style={currentSecondActionStyle}>{secondAction.text}</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};
