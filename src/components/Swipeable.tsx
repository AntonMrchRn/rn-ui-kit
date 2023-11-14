import React, { FC, useEffect, useRef } from 'react';
import RNSwipeable from 'react-native-gesture-handler/Swipeable';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { DeleteActionIcon } from '../icons/DeleteActionIcon';
import { EditActionIcon } from '../icons/EditActionIcon';
import { ReturnActionIcon } from '../icons/ReturnActionIcon';

export type Variant = 'default' | 'user' | 'coordinator' | 'delete';
export type SwipeableItem = {
  text: string;
  icon?: JSX.Element;
};
export type SwipeableProps = {
  /**
   * Массив элементов для отображения в нижней части компонента
   */
  items?: SwipeableItem[];
  /**
   * Элемент для отображения в верхней части компонента
   */
  topItem?: JSX.Element;
  /**
   * Один из вариантов отображения компонента
   */
  variant: Variant;
  /**
   * Логика нажатия первой скрытой кнопки в компоненте
   */
  firstAction?: () => void;
  /**
   * Логика нажатия второй скрытой кнопки в компоненте
   */
  secondAction?: () => void;
  /**
   * Стиль контейнера компонента
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль скрытого контейнера компонента
   */
  hiddenContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера нижних элементов компонента
   */
  itemsContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль каждого из нижних элементов компонента
   */
  itemContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера каждой из нижних иконок элементов компонента
   */
  itemIconStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера скрытых кнопкок компонента
   */
  actionStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера первой скрытой кнопки компонента
   */
  firstActionStyle?: StyleProp<ViewStyle>;
  /**
   * Стиль контейнера второй скрытой кнопки компонента
   */
  secondActionStyle?: StyleProp<ViewStyle>;
  /**
   * Лейбл компонента
   */
  label?: string;
  /**
   * Стиль лейбла компонента
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Заголовок компонента
   */
  title: string;
  /**
   * Стиль заголовка компонента
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Стиль текста нижних элементов компонента
   */
  itemTextStyle?: StyleProp<TextStyle>;
  /**
   * Показать наличине скрытых кнопок компонента
   */
  previewActions?: boolean;
  /**
   * Возможность свайпать для показа скрытых кнопок. По умолчанию true
   * @default true
   */
  canSwipe?: boolean;
  /**
   * Расположение лейбла. По умолчанию top
   * @default top
   */
  labelPosition?: 'top' | 'bottom';
};

export const Swipeable: FC<SwipeableProps> = ({
  items = [],
  topItem,
  label,
  title,
  variant,
  firstAction,
  secondAction,
  containerStyle,
  labelStyle,
  titleStyle,
  itemTextStyle,
  itemsContainerStyle,
  hiddenContainerStyle,
  actionStyle,
  firstActionStyle,
  secondActionStyle,
  previewActions,
  itemContainerStyle,
  itemIconStyle,
  canSwipe = true,
  labelPosition = 'top',
}) => {
  const theme = useTheme();
  const ref = useRef<RNSwipeable>(null);
  let actionName = useRef<'first' | 'second'>().current;

  useEffect(() => {
    if (previewActions) {
      setTimeout(() => {
        ref.current?.openRight();
      }, 3000);
      setTimeout(() => {
        ref.current?.close();
      }, 4000);
    }
  }, [previewActions]);

  const isDelete = variant === 'delete';

  const getContainerBackgroundColor = () => {
    switch (variant) {
      case 'user':
        return theme.background.fieldSuccess;
      case 'coordinator':
        return theme.background.fieldWarning;
      default:
        return theme.background.main;
    }
  };

  const onFirstAction = () => {
    ref.current?.close();
    actionName = 'first';
  };
  const onSecondAction = () => {
    ref.current?.close();
    actionName = 'second';
  };

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral,
    },
    label: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral,
      marginBottom: labelPosition === 'top' ? 4 : 0,
    },
    title: {
      fontFamily: 'Nunito Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 17,
      lineHeight: 24,
      color: isDelete ? theme.text.neutralDisable : theme.text.basic,
    },
    container: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: getContainerBackgroundColor(),
    },
    items: {
      marginTop: 8,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
      justifyContent: labelPosition === 'bottom' ? 'space-between' : undefined,
    },
    hidden: {
      flexDirection: 'row',
    },
    action: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 72,
    },
    first: {
      backgroundColor: theme.background.accent,
    },
    second: {
      backgroundColor: isDelete
        ? theme.background.success
        : theme.background.danger,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginRight: 4,
    },
  });

  const currentContainerStyle = StyleSheet.compose(
    styles.container,
    containerStyle
  );
  const currentLabelStyle = StyleSheet.compose(styles.label, labelStyle);
  const currentTitleStyle = StyleSheet.compose(styles.title, titleStyle);
  const currentItemTextStyle = StyleSheet.compose(styles.text, itemTextStyle);
  const currentItemsContainerStyle = StyleSheet.compose(
    styles.items,
    itemsContainerStyle
  );
  const currentItemContainerStyle = StyleSheet.compose(
    styles.item,
    itemContainerStyle
  );
  const currentItemIconStyle = StyleSheet.compose(styles.icon, itemIconStyle);
  const currentHiddenContainerStyle = StyleSheet.compose(
    styles.hidden,
    hiddenContainerStyle
  );
  const currentActionStyle = StyleSheet.compose(styles.action, actionStyle);
  const currentFirstActionStyle = StyleSheet.compose(
    styles.first,
    firstActionStyle
  );
  const currentSecondActionStyle = StyleSheet.compose(
    styles.second,
    secondActionStyle
  );
  const firstActionStyleCompose = StyleSheet.compose(
    currentActionStyle,
    currentFirstActionStyle
  );
  const secondActionStyleCompose = StyleSheet.compose(
    currentActionStyle,
    currentSecondActionStyle
  );

  const renderRightActions: FC = () => {
    return (
      <View style={currentHiddenContainerStyle}>
        {firstAction && (
          <TouchableOpacity
            style={firstActionStyleCompose}
            onPress={onFirstAction}
          >
            <EditActionIcon />
          </TouchableOpacity>
        )}
        {secondAction && (
          <TouchableOpacity
            style={secondActionStyleCompose}
            onPress={onSecondAction}
          >
            {isDelete ? <ReturnActionIcon /> : <DeleteActionIcon />}
          </TouchableOpacity>
        )}
      </View>
    );
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const Item: FC = () => {
    return (
      <View style={currentContainerStyle}>
        {topItem && topItem}
        {label && labelPosition === 'top' && (
          <Text style={currentLabelStyle}>{label}</Text>
        )}
        {title && <Text style={currentTitleStyle}>{title}</Text>}
        <View style={currentItemsContainerStyle}>
          {items.map((i, index) => (
            <View key={index} style={currentItemContainerStyle}>
              {i?.icon && <View style={currentItemIconStyle}>{i?.icon}</View>}
              <Text style={currentItemTextStyle}>{i?.text}</Text>
            </View>
          ))}
          {label && labelPosition === 'bottom' && (
            <Text style={currentLabelStyle}>{label}</Text>
          )}
        </View>
      </View>
    );
  };

  const onSwipeableClose = () => {
    switch (actionName) {
      case 'first':
        if (firstAction) {
          return firstAction();
        }
        return () => null;
      case 'second':
        if (secondAction) {
          return secondAction();
        }
        return () => null;
    }
  };

  return (
    <>
      {canSwipe ? (
        <RNSwipeable
          ref={ref}
          renderRightActions={renderRightActions}
          friction={1}
          overshootLeft={false}
          overshootRight={false}
          rightThreshold={100}
          onSwipeableClose={onSwipeableClose}
        >
          <Item />
        </RNSwipeable>
      ) : (
        <Item />
      )}
    </>
  );
};
