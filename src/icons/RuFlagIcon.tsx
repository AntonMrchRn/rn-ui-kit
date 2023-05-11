import React from 'react';
import SVG, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const RuFlagIcon = () => {
  return (
    <SVG width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_48_6191)">
        <Path
          d="M9.96875 0.625C5.90625 0.625 2.4375 3.25 1.15625 6.875H18.8437C17.5312 3.25 14.0625 0.625 9.96875 0.625Z"
          fill="white"
        />
        <Path
          d="M9.96875 19.375C14.0625 19.375 17.5312 16.75 18.8125 13.125H1.15625C2.4375 16.7812 5.90625 19.375 9.96875 19.375Z"
          fill="#ED4C5C"
        />
        <Path
          d="M1.15625 6.875C0.8125 7.84375 0.625 8.90625 0.625 10C0.625 11.0938 0.8125 12.1562 1.15625 13.125H18.8438C19.1875 12.1562 19.375 11.0938 19.375 10C19.375 8.90625 19.1875 7.84375 18.8438 6.875H1.15625Z"
          fill="#428BC1"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_48_6191">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </SVG>
  );
};
