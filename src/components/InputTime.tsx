import React, { FC, ForwardedRef, forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View,
  ViewProps,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { ClockIcon } from '../icons/ClockIcon';

export type InputTimeProps = MaskInputProps & {
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewProps>;
  /**
   * Отображение компонента в стиле ошибки
   */
  isError?: boolean;
  ref?: ForwardedRef<TextInput>;
};

export const InputTime: FC<InputTimeProps> = forwardRef(
  (
    {
      containerStyle,
      isError,
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
          placeholderTextColor={placeholderTextColor || theme.text.neutral}
          onFocus={handleFocus}
          style={currentInputStyle}
          onBlur={handleBlur}
          mask={mask || timeMask}
          {...props}
          ref={ref}
        />
      </View>
    );
  }
);
