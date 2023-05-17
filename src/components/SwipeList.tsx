import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useTheme } from '../theme/ThemeProvider';
import { EditActionIcon } from '../icons/EditActionIcon';
import { DeleteActionIcon } from '../icons/DeleteActionIcon';

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
  fistAction: (item: SwipeListData) => void;
  secondAction: (item: SwipeListData) => void;
};

export const SwipeList: FC<SwipeListProps> = ({
  data,
  fistAction,
  secondAction,
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.neutral,
    },
    label: {
      fontFamily: 'Nunito Sans Regular',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      color: theme.text.neutral,
      marginBottom: 4,
    },
    title: {
      fontFamily: 'Nunito Sans Bold',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 17,
      lineHeight: 24,
      color: theme.text.basic,
    },
    container: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      backgroundColor: theme.background.main,
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
      backgroundColor: theme.background.danger,
    },
  });

  const renderItem: FC<{ item: SwipeListData; index: number }> = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.items}>
        {item.items.map((i) => (
          <View key={i.id}>
            {i?.icon}
            <Text style={styles.text}>{i.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderHiddenItem: FC<{ item: SwipeListData }> = ({ item }) => {
    return (
      <View style={styles.hidden}>
        <TouchableOpacity
          style={[styles.action, styles.first]}
          onPress={() => fistAction(item)}
        >
          <EditActionIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.action, styles.second]}
          onPress={() => secondAction(item)}
        >
          <DeleteActionIcon />
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
