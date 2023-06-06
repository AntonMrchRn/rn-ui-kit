import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
export const Spacer = _ref => {
  let {
    size = 'm',
    children,
    horizontal,
    separator
  } = _ref;
  const theme = useTheme();
  const getSeparator = () => {
    const borderColor = theme.stroke.disableDivider;
    if (separator === 'top') {
      return {
        borderTopWidth: 1,
        borderColor
      };
    }
    if (separator === 'bottom') {
      return {
        borderBottomWidth: 1,
        borderColor
      };
    }
    return {};
  };
  const styles = StyleSheet.create({
    xs: {
      marginVertical: horizontal ? 0 : 2,
      marginHorizontal: horizontal ? 2 : 0
    },
    s: {
      marginVertical: horizontal ? 0 : 4,
      marginHorizontal: horizontal ? 4 : 0
    },
    m: {
      marginVertical: horizontal ? 0 : 6,
      marginHorizontal: horizontal ? 6 : 0
    },
    l: {
      marginVertical: horizontal ? 0 : 8,
      marginHorizontal: horizontal ? 8 : 0
    },
    xl: {
      marginVertical: horizontal ? 0 : 12,
      marginHorizontal: horizontal ? 12 : 0
    },
    xxl: {
      marginVertical: horizontal ? 0 : 18,
      marginHorizontal: horizontal ? 18 : 0
    },
    horizontal: {
      flexDirection: 'row'
    },
    separator: getSeparator()
  });
  return /*#__PURE__*/React.createElement(View, {
    style: horizontal && styles.horizontal
  }, children ? Children.map(children, (item, index) => {
    return /*#__PURE__*/React.createElement(View, {
      key: index,
      style: horizontal && styles.horizontal
    }, index !== 0 && /*#__PURE__*/React.createElement(View, {
      style: [styles[size], styles.separator]
    }), /*#__PURE__*/React.createElement(React.Fragment, null, item));
  }) : /*#__PURE__*/React.createElement(View, {
    style: [styles[size], styles.separator, horizontal && styles.horizontal]
  }));
};
//# sourceMappingURL=Spacer.js.map