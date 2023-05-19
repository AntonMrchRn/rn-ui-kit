import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import RNModal from 'react-native-modal';
import { useTheme } from '../theme/ThemeProvider';
import { ModalCloseIcon } from '../icons/ModalCloseIcon';
import { TouchableOpacity } from 'react-native';
import { ModalLimitIcon } from '../icons/ModalLimitIcon';
import { ModalErrorIcon } from '../icons/ModalErrorIcon';

type Animation =
  | 'bounce'
  | 'flash'
  | 'jello'
  | 'pulse'
  | 'rotate'
  | 'rubberBand'
  | 'shake'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInUp'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutUp'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInUp'
  | 'fadeInUpBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeOut'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'
  | 'lightSpeedIn'
  | 'lightSpeedOut'
  | 'slideInDown'
  | 'slideInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideOutDown'
  | 'slideOutUp'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInUp'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutUp'
  | 'zoomOutLeft'
  | 'zoomOutRight';
export type ModalProps = {
  animationIn?: Animation;
  animationInTiming?: number;
  animationOutTiming?: number;
  animationOut?: Animation;
  isVisible?: boolean;
  avoidKeyboard?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  onBackdropPress?: (() => void) | undefined;
  modalStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  closeIconContainerStyle?: StyleProp<ViewStyle>;
  closeIconPress?: () => void;
  closeIcon?: JSX.Element | true;
  headerIcon?: 'limit' | 'error' | JSX.Element;
  headerIconContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  description?: string;
  descriptionStyle?: StyleProp<TextStyle>;
  children?: JSX.Element | JSX.Element[];
};

export const Modal: FC<ModalProps> = ({
  backdropOpacity = 1,
  backdropColor,
  modalStyle,
  containerStyle,
  closeIconContainerStyle,
  closeIconPress,
  closeIcon,
  headerIcon,
  headerIconContainerStyle,
  title,
  titleStyle,
  description,
  descriptionStyle,
  children,
  ...props
}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background.main,
      padding: 16,
      borderRadius: 20,
    },
    closeIconContainer: {
      alignItems: 'flex-end',
    },
    headerIconContainer: {
      alignItems: 'center',
      marginBottom: 12,
    },
    title: {
      fontFamily: 'Open Sans Semibold',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center',
      color: theme.text.basic,
      marginTop: 8,
    },
    description: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
      color: theme.text.neutral,
      marginTop: 8,
    },
  });

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentCloseIconContainerStyle = StyleSheet.compose(
    styles.closeIconContainer,
    closeIconContainerStyle
  );
  const currentHeaderIconContainerStyle = StyleSheet.compose(
    styles.headerIconContainer,
    headerIconContainerStyle
  );
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentDescriptionStyle = StyleSheet.compose(
    styles.description,
    descriptionStyle
  );

  const getCloseIcon = () => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean') {
        return <ModalCloseIcon />;
      }
      return closeIcon;
    }
    return null;
  };

  const getHeaderIcon = () => {
    if (headerIcon) {
      if (headerIcon === 'limit') {
        return <ModalLimitIcon />;
      }
      if (headerIcon === 'error') {
        return <ModalErrorIcon />;
      }
      return headerIcon;
    }
    return null;
  };

  return (
    <RNModal
      {...props}
      backdropOpacity={backdropOpacity}
      backdropColor={backdropColor || theme.background.modal}
      style={modalStyle}
    >
      <View style={currentContainerStyle}>
        <View style={currentCloseIconContainerStyle}>
          <TouchableOpacity onPress={closeIconPress}>
            {getCloseIcon()}
          </TouchableOpacity>
        </View>
        <View style={currentHeaderIconContainerStyle}>{getHeaderIcon()}</View>
        {title && <Text style={currentTitleStyle}>{title}</Text>}
        {description && (
          <Text style={currentDescriptionStyle}>{description}</Text>
        )}
        {children}
      </View>
    </RNModal>
  );
};
