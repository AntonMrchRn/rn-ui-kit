import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import {
  CodeField,
  CodeFieldProps,
  RenderCellOptions,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { useTheme } from '../theme/ThemeProvider';

export type InputCodeProps = Omit<CodeFieldProps, 'renderCell'> & {
  /**
   * Подсказка компонента
   */
  hint?: string;
  /**
   * Стиль подсказки компонента
   */
  hintStyle?: StyleProp<TextStyle>;
  renderCell?: (options: RenderCellOptions) => React.ReactNode;
};

export const InputCode: FC<InputCodeProps> = ({
  hint,
  hintStyle,
  cellCount = 6,
  value,
  onChangeText,
  ...props
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    cell: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: theme.background.neutralDisable,
    },
    text: {
      fontFamily: 'Open Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 36,
      color: theme.text.basic,
    },
    hint: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: hint ? theme.text.danger : theme.text.neutral,
      marginTop: 4,
    },
  });

  const currentHintStyle = StyleSheet.compose(styles.hint, hintStyle);

  const setValue = onChangeText || (() => {});
  const ref = useBlurOnFulfill({ value, cellCount });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <>
      <CodeField
        {...prop}
        {...props}
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        cellCount={cellCount}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol }) => (
          <View style={styles.cell} key={index}>
            {symbol ? (
              <Text
                key={index}
                style={styles.text}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol}
              </Text>
            ) : (
              <View style={styles.dot} />
            )}
          </View>
        )}
      />
      {hint && <Text style={currentHintStyle}>{hint}</Text>}
    </>
  );
};
