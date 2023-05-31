import React, { FC, ForwardedRef, forwardRef, useState } from 'react';
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

type Variant = 'text' | 'message' | 'password' | 'textarea';
export type InputProps = TextInputProps & {
  /**
   * Тип компонента
   */
  variant: Variant;
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
  /**
   * Логика нажатия на иконку крестика, если variant === 'text'
   */
  onClear?: () => void;
  ref?: ForwardedRef<TextInput>;
};

export const Input: FC<InputProps> = forwardRef(
  (
    {
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
      onClear,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
            ref={ref}
            secureTextEntry={!!currentSecureTextEntry}
            multiline={variant === 'textarea' || multiline}
            {...props}
          />
          {variant === 'text' && (
            <TouchableOpacity onPress={onClear}>
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
  }
);
