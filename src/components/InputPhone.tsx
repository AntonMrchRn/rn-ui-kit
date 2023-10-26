import React, { FC, ForwardedRef, forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { InputClearIcon } from '../icons/InputClearIcon';
import { RuFlagIcon } from '../icons/RuFlagIcon';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';

export type InputPhoneProps = MaskInputProps & {
  /**
   * Значение компонента
   */
  value: string;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Лейбл компонента
   */
  label?: string;
  /**
   * Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Подсказка компонента
   */
  hint?: string;
  /**
   * Стиль подсказки компонента
   */
  hintStyle?: StyleProp<TextStyle>;
  /**
   * Отображение компонента в стиле ошибки
   */
  isError?: boolean;
  /**
   * Редактируемость компонента
   */
  disabled?: boolean;
  /**
   * Логика нажатия на иконку крестика
   */
  onClear?: () => void;
  /**
   * Отображение иконки с флагом
   */
  withRuFlagIcon?: boolean;
  ref?: ForwardedRef<TextInput>;
};

export const InputPhone: FC<InputPhoneProps> = forwardRef(
  (
    {
      value,
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
      disabled,
      mask,
      withRuFlagIcon,
      onClear,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const theme = useTheme();

    const styles = StyleSheet.create({
      initial: {
        backgroundColor: disabled
          ? theme.background.neutralDisableSecond
          : isError
          ? theme.background.fieldDanger
          : theme.background.fieldMain,
        padding: 0,
        borderRadius: 8,
        height: 44,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: disabled
          ? theme.background.neutralDisableSecond
          : isError
          ? theme.background.fieldDanger
          : theme.background.fieldMain,
      },
      input: {
        flex: 1,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 24,
        color: disabled ? theme.text.neutral : theme.text.basic,
        padding: 0,
      },
      focused: {
        borderColor: isError ? theme.stroke.danger : theme.stroke.accent,
      },
      label: {
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
        color: isError ? theme.text.danger : theme.text.neutral,
        marginBottom: 4,
      },
      hint: {
        fontFamily: 'Nunito Sans',
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
      prefix: {
        color:
          (isFocused || value.length) && !disabled
            ? theme.text.basic
            : placeholderTextColor || theme.text.neutral,
        fontSize: 17,
        lineHeight: 24,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        paddingTop: Platform.OS === 'ios' ? 2 : 0,
        paddingRight: 4,
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

    const phoneMask = [
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

    const validatePhone = (phone: string) => {
      phone = phone.replace(/[^\d\s\(\)-]/g, '');
      phone = phone.replace(/(^[0-8])/, '(9$1');
      if (phone.length > 1) {
        phone = phone.replace(/(^[7 | 8])/, '');
      }

      return phone.replace(/[\D]+/g, '');
    };

    return (
      <View>
        {label && <Text style={currentLabelStyle}>{label}</Text>}
        <View style={currentContainerStyle}>
          {withRuFlagIcon && (
            <View style={styles.icon}>
              <RuFlagIcon />
            </View>
          )}
          <Text style={styles.prefix}>+7</Text>
          <MaskInput
            placeholder={placeholder || '900 000-00-00'}
            placeholderTextColor={placeholderTextColor || theme.text.neutral}
            onFocus={handleFocus}
            style={currentInputStyle}
            onBlur={handleBlur}
            editable={!disabled}
            maxLength={value.length < 2 ? 15 : 13}
            ref={ref}
            value={validatePhone(value)}
            mask={mask || phoneMask}
            keyboardType={'numeric' || props.keyboardType}
            {...props}
          />
          {isFocused && !!value.length && !disabled && (
            <TouchableOpacity onPress={onClear}>
              <InputClearIcon />
            </TouchableOpacity>
          )}
        </View>
        {hint && <Text style={currentHintStyle}>{hint}</Text>}
      </View>
    );
  }
);
