import React, { FC } from 'react';
import SVG, { Path } from 'react-native-svg';

export const CalendarIcon: FC<{ color?: string }> = ({ color = '#1B1B1B' }) => {
  return (
    <SVG width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.25 2.25C17.25 1.83579 16.9142 1.5 16.5 1.5C16.0858 1.5 15.75 1.83579 15.75 2.25V3H8.25V2.25C8.25 1.83579 7.91421 1.5 7.5 1.5C7.08579 1.5 6.75 1.83579 6.75 2.25V3H4.5C3.67158 3 3 3.67158 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H17.25V2.25ZM19.5 7.5V4.5H17.25V5.25C17.25 5.66421 16.9142 6 16.5 6C16.0858 6 15.75 5.66421 15.75 5.25V4.5H8.25V5.25C8.25 5.66421 7.91421 6 7.5 6C7.08579 6 6.75 5.66421 6.75 5.25V4.5H4.5V7.5H19.5ZM4.5 9H19.5V19.5H4.5V9Z"
        fill={color}
      />
    </SVG>
  );
};
