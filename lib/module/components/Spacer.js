import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
export const Spacer = _ref => {
  let {
    size = 'm',
    children,
    horizontal,
    separator,
    separatorColor
  } = _ref;
  const theme = useTheme();
  const getSeparator = () => {
    const borderColor = separatorColor || theme.stroke.disableDivider;
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
  const getSize = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'xs':
        return 4;
      case 's':
        return 8;
      case 'm':
        return 12;
      case 'l':
        return 16;
      case 'xl':
        return 24;
      case 'xxl':
        return 32;
      case 'xxxl':
        return 36;
      default:
        return 0;
    }
  };
  const styles = StyleSheet.create({
    spacer: {
      height: horizontal ? '100%' : getSize(),
      width: horizontal ? getSize() : '100%'
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
      style: [styles.spacer, styles.separator]
    }), /*#__PURE__*/React.createElement(React.Fragment, null, item));
  }) : /*#__PURE__*/React.createElement(View, {
    style: [styles.spacer, styles.separator, horizontal && styles.horizontal]
  }));
};
//# sourceMappingURL=Spacer.js.map