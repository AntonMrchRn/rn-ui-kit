import {
  BottomSheetModalProps as RNBottomSheetModalProps,
  BottomSheetModal as RNBottomSheetModal,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import { SharedValue } from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';

export type BottomSheetModalProps = Omit<
  RNBottomSheetModalProps,
  'snapPoints'
> & {
  ref?: ForwardedRef<BottomSheetModalMethods>;
  snapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
  backdropComponent?: React.FC<BottomSheetBackdropProps> | null | undefined;
};
export const BottomSheetModal: FC<BottomSheetModalProps> = forwardRef(
  (
    {
      snapPoints,
      backdropComponent,
      style,
      backgroundStyle,
      handleStyle,
      handleIndicatorStyle,
      children,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const initSnapPoints = useMemo(() => ['80%'], []);
    const renderBackdrop = useCallback(
      (prop: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...prop}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      []
    );
    const styles = StyleSheet.create({
      style: {
        paddingHorizontal: 20,
      },
      backgroundStyle: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      },
      handleStyle: {
        paddingBottom: 0,
      },
      handleIndicatorStyle: {
        backgroundColor: theme.background.neutralDisable,
        borderRadius: 5,
        width: 36,
        height: 4,
      },
      icon: {
        right: 0,
        top: 0,
        position: 'absolute',
      },
      indicatorBottom: {
        height: 12,
        zIndex: -1,
      },
    });
    return (
      <RNBottomSheetModal
        ref={ref}
        snapPoints={snapPoints || initSnapPoints}
        backdropComponent={backdropComponent || renderBackdrop}
        style={[styles.style, style]}
        backgroundStyle={[styles.backgroundStyle, backgroundStyle]}
        handleStyle={[styles.handleStyle, handleStyle]}
        handleIndicatorStyle={[
          styles.handleIndicatorStyle,
          handleIndicatorStyle,
        ]}
        {...props}
      >
        <View style={styles.icon}>
          <ModalCloseIcon />
        </View>
        <View style={styles.indicatorBottom} />
        {children as any}
      </RNBottomSheetModal>
    );
  }
);
