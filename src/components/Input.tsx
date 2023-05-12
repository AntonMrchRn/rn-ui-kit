import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  TextInputProps,
  TextProps,
  TextInput,
  View,
  ViewProps,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { InputClearIcon } from '../icons/InputClearIcon';
import { TouchableOpacity } from 'react-native';
import { InputEyeCloseIcon } from '../icons/InputEyeCloseIcon';
import { InputEyeIcon } from '../icons/InputEyeIcon';

export type InputProps = TextInputProps & {
  variant: 'text' | 'message' | 'password' | 'textarea';
  containerStyle?: StyleProp<ViewProps>;
  label?: string;
  labelStyle?: StyleProp<TextProps>;
  hint?: string;
  hintStyle?: StyleProp<TextProps>;
  isError?: boolean;
};

export const Input: FC<InputProps> = ({
  variant,
  containerStyle,
  style,
  onFocus,
  onBlur,
  placeholderTextColor,
  label,
  labelStyle,
  hint,
  hintStyle,
  isError,
  secureTextEntry,
  multiline,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();

  const setHeight = () => {
    switch (variant) {
      case 'message':
        return 48;
      case 'textarea':
        return 100;
      default:
        return 44;
    }
  };

  const styles = StyleSheet.create({
    initial: {
      backgroundColor: isError
        ? theme.background.fieldDanger
        : theme.background.fieldMain,
      padding: 0,
      borderRadius: 8,
      height: setHeight(),
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isError
        ? theme.background.fieldDanger
        : theme.background.fieldMain,
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
      borderColor: isError ? theme.stroke.danger : theme.stroke.accent,
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isError ? theme.text.danger : theme.text.neutral,
      marginBottom: 4,
    },
    hint: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isError ? theme.text.danger : theme.text.neutral,
      marginTop: 4,
    },
  });

  const currentContainerStyle = StyleSheet.compose(styles.initial, [
    isFocused ? styles.focused : {},
    containerStyle,
  ]);

  const currentInputStyle = StyleSheet.compose(styles.input, style);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentHintStyle = StyleSheet.compose(styles.hint, hintStyle);
  const currentSecureTextEntry =
    (variant === 'password' && !isVisible) || secureTextEntry;

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const handleEye = () => {
    setIsVisible(!isVisible);
  };

  const getPlaceholderColor = () => {
    if (placeholderTextColor) {
      return placeholderTextColor;
    }
    if (typeof props.editable === 'boolean' && !props.editable) {
      return theme.text.neutralDisable;
    }
    return theme.text.neutral;
  };

  return (
    <View>
      {label && <Text style={currentLabelStyle}>{label}</Text>}
      <View style={currentContainerStyle}>
        <TextInput
          placeholderTextColor={getPlaceholderColor()}
          onFocus={handleFocus}
          style={currentInputStyle}
          onBlur={handleBlur}
          ref={inputRef}
          secureTextEntry={!!currentSecureTextEntry}
          multiline={variant === 'textarea' || multiline}
          {...props}
        />
        {variant === 'text' && (
          <TouchableOpacity onPress={handleClear}>
            <InputClearIcon />
          </TouchableOpacity>
        )}
        {variant === 'password' && (
          <TouchableOpacity onPress={handleEye}>
            {!isVisible ? <InputEyeIcon /> : <InputEyeCloseIcon />}
          </TouchableOpacity>
        )}
      </View>
      {hint && <Text style={currentHintStyle}>{hint}</Text>}
    </View>
  );
};
