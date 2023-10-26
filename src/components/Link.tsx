import React, { FC, useCallback } from 'react';
import {
  Linking,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { LinkIcon } from '../icons/LinkIcon';
import { typography } from './Text';

type Sizes = 'M' | 'L';
export type LinkProps = {
  /**
   *  Лейбл компонента
   */
  label: string;
  /**
   *  Ссылка, по которой будет вести по нажатию на компонент
   */
  url: string;
  /**
   *  Размер компонента
   */
  size: Sizes;
  /**
   *  Стиль компонента
   */
  style?: StyleProp<ViewStyle>;
  /**
   *  Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   *  Показывает стандартную иконку в компоненте
   */
  icon?: boolean;
};

export const Link: FC<LinkProps> = ({
  label,
  style,
  labelStyle,
  url,
  icon,
  size,
}) => {
  const theme = useTheme();

  const handlePress = useCallback(async () => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    } else {
      console.log('URL must not be empty');
    }
  }, [url]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: theme.text.accent,
      fontFamily: 'Nunito Sans',
      fontSize: size === 'L' ? 17 : 14,
      fontWeight: '400',
      lineHeight: 24,
    },
    icon: { marginRight: 4 },
  });
  const containerStyle = StyleSheet.compose(styles.container, style);
  const variant = size === 'L' ? 'bodyMRegular' : 'bodySRegular';
  const currentLabelStyle = StyleSheet.compose(styles.label, [
    typography[variant],
    labelStyle,
  ]);

  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress}>
      {icon && (
        <View style={styles.icon}>
          <LinkIcon size={size} color={theme.icons.accent} />
        </View>
      )}
      <Text style={currentLabelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
