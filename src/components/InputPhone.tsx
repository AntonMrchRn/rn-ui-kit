import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  TextProps,
  TextInput,
  View,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { InputClearIcon } from '../icons/InputClearIcon';
import { RuFlagIcon } from '../icons/RuFlagIcon';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';

export type InputPhoneProps = MaskInputProps & {
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewProps>;
  /**
   * Лейбл компонента
   */
  label?: string;
  /**
   * Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextProps>;
  /**
   * Подсказка компонента
   */
  hint?: string;
  /**
   * Стиль подсказки компонента
   */
  hintStyle?: StyleProp<TextProps>;
  /**
   * Отображение компонента в стиле ошибки
   */
  isError?: boolean;
};

export const InputPhone: FC<InputPhoneProps> = ({
  containerStyle,
  label,
  labelStyle,
  hint,
  hintStyle,
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

  const styles = StyleSheet.create({
    initial: {
      backgroundColor: isError
        ? theme.background.fieldDanger
        : theme.background.fieldMain,
      padding: 0,
      borderRadius: 8,
      height: 44,
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
    icon: {
      marginRight: 8,
    },
  });

  const currentContainerStyle = StyleSheet.compose(styles.initial, [
    isFocused ? styles.focused : {},
    containerStyle,
  ]);

  const currentInputStyle = StyleSheet.compose(styles.input, style);
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentHintStyle = StyleSheet.compose(styles.hint, hintStyle);

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

  const phoneMask = [
    '+',
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  return (
    <View>
      {label && <Text style={currentLabelStyle}>{label}</Text>}
      <View style={currentContainerStyle}>
        <View style={styles.icon}>
          <RuFlagIcon />
        </View>
        <MaskInput
          placeholder={placeholder || '+7 900 000-00-00'}
          placeholderTextColor={placeholderTextColor || theme.text.neutral}
          onFocus={handleFocus}
          style={currentInputStyle}
          onBlur={handleBlur}
          ref={inputRef}
          mask={mask || phoneMask}
          {...props}
        />
        <TouchableOpacity onPress={handleClear}>
          <InputClearIcon />
        </TouchableOpacity>
      </View>
      {hint && <Text style={currentHintStyle}>{hint}</Text>}
    </View>
  );
};
