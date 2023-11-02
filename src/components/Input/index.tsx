import React, { FC, ForwardedRef, forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  TextInputProps,
  TextInput,
  View,
  ViewStyle,
  Platform,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { InputClearIcon } from '../../icons/InputClearIcon';
import { TouchableOpacity } from 'react-native';
import { InputEyeCloseIcon } from '../../icons/InputEyeCloseIcon';
import { InputEyeIcon } from '../../icons/InputEyeIcon';
import { useAnimatedLabel } from './useAnimatedLabel';
import Animated from 'react-native-reanimated';

type Variant = 'text' | 'message' | 'password' | 'textarea' | 'number';
export type InputProps = TextInputProps & {
  /**
   * Тип компонента
   */
  variant: Variant;
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
   * Иконка слева от лейбла
   */
  labelIcon?: JSX.Element;
  /**
   * Логика нажатия на иконку лейбла
   */
  onLabelIconPress?: () => void;
  /**
   * Отображение анимированного лейбла
   */
  isAnimatedLabel?: boolean;
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
   * Логика нажатия на иконку крестика, если variant 'text' или 'number'
   */
  onClear?: () => void;
  /**
   * Иконка слева от инпута
   */
  iconLeft?: JSX.Element;
  /**
   * Стиль контейнера иконки слева от инпута
   */
  iconLeftStyle?: StyleProp<ViewStyle>;
  /**
   * Отображение символа обязательности заполнения поля
   */
  isRequired?: boolean;
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
      labelIcon,
      isAnimatedLabel,
      hint,
      hintStyle,
      isError,
      secureTextEntry,
      multiline,
      onClear,
      iconLeft,
      iconLeftStyle,
      isRequired,
      keyboardType,
      onChangeText,
      onLabelIconPress,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const theme = useTheme();

    const getHeight = () => {
      switch (variant) {
        case 'message':
          return 48;
        case 'textarea':
          return 100;
        default:
          return 44;
      }
    };
    const height = getHeight();
    const styles = StyleSheet.create({
      initial: {
        backgroundColor: isError
          ? theme.background.fieldDanger
          : theme.background.fieldMain,
        borderRadius: variant === 'message' ? 12 : 8,
        height: height,
        paddingVertical: variant === 'textarea' ? 8 : 10,
        paddingHorizontal: variant === 'textarea' ? 12 : 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: isError || isFocused ? 1 : 0,
        borderColor: isError
          ? theme.background.fieldDanger
          : theme.background.fieldMain,
      },
      input: {
        flex: 1,
        minHeight: height,
        padding: 0,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: Platform.OS === 'android' ? 24 : 0,
        color: theme.text.basic,
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
      },
      labelContainer: {
        flexDirection: 'row',
        marginBottom: 4,
      },
      labelIcon: {
        marginLeft: 5,
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
      animatedLabel: {
        position: 'absolute',
      },
      iconLeft: {
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      requiredSymbol: {
        color: theme.text.secondary,
      },
    });

    const currentContainerStyle = StyleSheet.compose(styles.initial, [
      isFocused ? styles.focused : {},
      containerStyle,
    ]);
    const currentInputStyle = StyleSheet.compose(styles.input, style);
    const currentIconLeftStyle = StyleSheet.compose(
      styles.iconLeft,
      iconLeftStyle
    );
    const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
    const currentAnimatedLabelStyle = StyleSheet.compose(
      [styles.label, styles.animatedLabel],
      labelStyle
    );
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

    const handleOnChangeText = (text: string) => {
      if (onChangeText) {
        if (variant === 'number' && text) {
          const regExp = new RegExp(/^\d+$/);
          const isNumber = regExp.test(text);
          isNumber && onChangeText(text);
        } else {
          onChangeText(text);
        }
      }
    };

    const { placeholder, ...inputProps } = props;
    const { animatedLabelStyle, animatedContainerStyle } = useAnimatedLabel(
      !!props?.value,
      !!isError,
      isFocused,
      getPlaceholderColor()
    );

    return (
      <Animated.View style={isAnimatedLabel && animatedContainerStyle}>
        {label && !isAnimatedLabel && (
          <View style={styles.labelContainer}>
            <Text style={currentLabelStyle}>
              {label}
              {isRequired && <Text style={styles.requiredSymbol}>{'*'}</Text>}
            </Text>
            {labelIcon && (
              <TouchableOpacity
                disabled={!onLabelIconPress}
                style={styles.labelIcon}
                onPress={onLabelIconPress}
              >
                {labelIcon}
              </TouchableOpacity>
            )}
          </View>
        )}
        <View style={currentContainerStyle}>
          {iconLeft && <View style={currentIconLeftStyle}>{iconLeft}</View>}
          {label && isAnimatedLabel && variant === 'text' && (
            <Animated.Text
              style={[currentAnimatedLabelStyle, animatedLabelStyle]}
            >
              {label}
              {isRequired && (
                <Animated.Text style={styles.requiredSymbol}>*</Animated.Text>
              )}
            </Animated.Text>
          )}
          <TextInput
            placeholderTextColor={getPlaceholderColor()}
            onFocus={handleFocus}
            style={currentInputStyle}
            onBlur={handleBlur}
            ref={ref}
            secureTextEntry={!!currentSecureTextEntry}
            multiline={variant === 'textarea' || multiline}
            placeholder={isAnimatedLabel ? undefined : placeholder}
            keyboardType={variant === 'number' ? 'numeric' : keyboardType}
            onChangeText={handleOnChangeText}
            {...inputProps}
          />
          {['text', 'number'].includes(variant) &&
            isFocused &&
            !!props.value?.length && (
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
      </Animated.View>
    );
  }
);
