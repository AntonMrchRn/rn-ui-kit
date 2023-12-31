import React, { FC, ForwardedRef, forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { ClockIcon } from '../icons/ClockIcon';

export type InputTimeProps = MaskInputProps & {
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Отображение компонента в стиле ошибки
   */
  isError?: boolean;
  /**
   * Неактивное состояние компонента
   */
  disabled?: boolean;
  ref?: ForwardedRef<TextInput>;
};

export const InputTime: FC<InputTimeProps> = forwardRef(
  (
    {
      containerStyle,
      isError,
      disabled,
      placeholderTextColor,
      style,
      onFocus,
      onBlur,
      placeholder,
      mask,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const theme = useTheme();

    const getColor = () => {
      if (isError) {
        return theme.text.danger;
      }
      if (disabled) {
        return theme.text.neutralDisable;
      }
      if (props.value) {
        return theme.text.basic;
      }
      return theme.text.neutral;
    };

    const getBackgroundColor = () => {
      if (disabled) {
        return theme.background.neutralOptional;
      }
      if (isError) {
        return theme.background.fieldDanger;
      }
      return theme.background.fieldMain;
    };

    const styles = StyleSheet.create({
      initial: {
        backgroundColor: getBackgroundColor(),
        padding: 0,
        borderRadius: 8,
        height: 44,
        width: 150,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: disabled ? 0 : 1,
        borderColor: isError
          ? theme.background.fieldDanger
          : theme.background.fieldMain,
      },
      input: {
        flex: 1,
        padding: 0,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        color: disabled ? theme.text.neutralDisable : theme.text.basic,
      },
      focused: {
        borderColor: isError ? theme.stroke.danger : theme.stroke.accent,
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

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      onBlur && onBlur(e);
    };

    const timeMask = [/\d/, /\d/, ':', /\d/, /\d/];

    return (
      <View style={currentContainerStyle}>
        <View style={styles.icon}>
          <ClockIcon color={getColor()} />
        </View>
        <MaskInput
          placeholder={placeholder || '00:00'}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          placeholderTextColor={
            disabled
              ? theme.text.neutralDisable
              : placeholderTextColor || theme.text.neutral
          }
          onFocus={handleFocus}
          style={currentInputStyle}
          onBlur={handleBlur}
          mask={mask || timeMask}
          keyboardType={'numeric' || props.keyboardType}
          {...props}
          ref={ref}
        />
      </View>
    );
  }
);
