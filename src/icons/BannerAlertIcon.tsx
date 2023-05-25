import React, { FC } from 'react';
import SVG, { Path } from 'react-native-svg';

export const BannerAlertIcon: FC<{ color?: string }> = ({
  color = '#EB142D',
}) => {
  return (
    <SVG width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5.875C12.4832 5.875 12.875 6.26675 12.875 6.75V12.875C12.875 13.3582 12.4832 13.75 12 13.75C11.5168 13.75 11.125 13.3582 11.125 12.875V6.75C11.125 6.26675 11.5168 5.875 12 5.875Z"
        fill={color}
      />
      <Path
        d="M13.0938 16.8125C13.0938 17.4166 12.6041 17.9062 12 17.9062C11.3959 17.9062 10.9062 17.4166 10.9062 16.8125C10.9062 16.2084 11.3959 15.7187 12 15.7187C12.6041 15.7187 13.0938 16.2084 13.0938 16.8125Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.625 12C0.625 5.71776 5.71776 0.625 12 0.625C18.2823 0.625 23.375 5.71777 23.375 12C23.375 18.2823 18.2823 23.375 12 23.375C5.71777 23.375 0.625 18.2823 0.625 12ZM12 2.375C6.68426 2.375 2.375 6.68426 2.375 12C2.375 17.3158 6.68426 21.625 12 21.625C17.3158 21.625 21.625 17.3158 21.625 12C21.625 6.68426 17.3158 2.375 12 2.375Z"
        fill={color}
      />
    </SVG>
  );
};