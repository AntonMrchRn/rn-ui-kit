import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInputFocusEventData,
  TextInput,
  View,
  ViewProps,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { CalendarIcon } from '../icons/CalendarIcon';

export type InputDateProps = MaskInputProps & {
  containerStyle?: StyleProp<ViewProps>;
  isError?: boolean;
};

export const InputDate: FC<InputDateProps> = ({
  containerStyle,
  isError,
  placeholderTextColor,
  style,
  onFocus,
  onBlur,
  placeholder,
  mask,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();

  const getColor = () => {
    if (isError) {
      return theme.text.danger;
    }
    if (props.value) {
      return theme.text.basic;
    }
    return theme.text.neutral;
  };

  const styles = StyleSheet.create({
    initial: {
      backgroundColor: isError
        ? theme.background.fieldDanger
        : theme.background.fieldMain,
      padding: 0,
      borderRadius: 8,
      height: 44,
      width: 150,
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: 24,
      color: isError ? theme.text.danger : theme.text.basic,
    },
    focused: {
      borderWidth: 1,
      borderColor: isError ? theme.stroke.danger : theme.stroke.accent,
    },
  });

  const currentContainerStyle = StyleSheet.compose(styles.initial, [
    isFocused ? styles.focused : {},
    containerStyle,
  ]);

  const currentInputStyle = StyleSheet.compose(styles.input, style);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];

  return (
    <View style={currentContainerStyle}>
      <CalendarIcon color={getColor()} />
      <MaskInput
        placeholder={placeholder || 'ДД/ММ/ГГ'}
        placeholderTextColor={placeholderTextColor || theme.text.neutral}
        onFocus={handleFocus}
        style={currentInputStyle}
        onBlur={handleBlur}
        ref={inputRef}
        mask={mask || dateMask}
        {...props}
      />
    </View>
  );
};
