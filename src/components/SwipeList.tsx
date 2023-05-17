import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useTheme } from '../theme/ThemeProvider';
import { EditActionIcon } from '../icons/EditActionIcon';
import { DeleteActionIcon } from '../icons/DeleteActionIcon';
import { ReturnActionIcon } from '../icons/ReturnActionIcon';

export type SwipeListData = {
  id: string;
  label?: string;
  title: string;
  items: {
    id: string;
    icon?: JSX.Element;
    text: string;
  }[];
};

export type SwipeListProps = {
  data: SwipeListData[];
  variant: 'default' | 'user' | 'coordinator' | 'delete';
  fistAction: (item: SwipeListData) => void;
  secondAction: (item: SwipeListData) => void;
  containerStyle?: StyleProp<ViewStyle>;
  hiddenContainerStyle?: StyleProp<ViewStyle>;
  itemsContainerStyle?: StyleProp<ViewStyle>;
  actionStyle?: StyleProp<ViewStyle>;
  firstActionStyle?: StyleProp<ViewStyle>;
  secondActionStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
};

export const SwipeList: FC<SwipeListProps> = ({
  data,
  variant,
  fistAction,
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
}) => {
  const theme = useTheme();

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

  const isDelete = variant === 'delete';

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral,
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: isDelete ? theme.text.neutralDisable : theme.text.neutral,
      marginBottom: 4,
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
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
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    hidden: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
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

  const renderItem: FC<{ item: SwipeListData }> = ({ item }) => (
    <View style={currentContainerStyle}>
      <Text style={currentLabelStyle}>{item.label}</Text>
      <Text style={currentTitleStyle}>{item.title}</Text>
      <View style={currentItemsContainerStyle}>
        {item.items.map((i) => (
          <View key={i.id}>
            {i?.icon}
            <Text style={currentItemTextStyle}>{i.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderHiddenItem: FC<{ item: SwipeListData }> = ({ item }) => {
    return (
      <View style={currentHiddenContainerStyle}>
        <TouchableOpacity
          style={firstActionStyleCompose}
          onPress={() => fistAction(item)}
        >
          <EditActionIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={secondActionStyleCompose}
          onPress={() => secondAction(item)}
        >
          {isDelete ? <ReturnActionIcon /> : <DeleteActionIcon />}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SwipeListView
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-142}
    />
  );
};
