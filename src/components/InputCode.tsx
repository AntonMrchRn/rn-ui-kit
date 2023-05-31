import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  CodeFieldProps,
  RenderCellOptions,
} from 'react-native-confirmation-code-field';
import { useTheme } from '../theme/ThemeProvider';

export type InputCodeProps = Omit<CodeFieldProps, 'renderCell'> & {
  renderCell?: (options: RenderCellOptions) => React.ReactNode;
};

export const InputCode: FC<InputCodeProps> = ({
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
  });
  const setValue = onChangeText || (() => {});
  const ref = useBlurOnFulfill({ value, cellCount });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View>
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
    </View>
  );
};
