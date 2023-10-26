import React from 'react';
import { SvgXml } from 'react-native-svg';

export const SuccessIcon = () => {
  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61523 6.61523 2.25 12 2.25C17.3848 2.25 21.75 6.61523 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61523 21.75 2.25 17.3848 2.25 12ZM16.6677 9.2323C16.9536 9.532 16.9424 10.0067 16.6427 10.2927L11.1396 15.5427C10.8496 15.8193 10.3935 15.8191 10.1037 15.5422L7.35684 12.9172C7.05738 12.6311 7.0466 12.1563 7.33278 11.8568C7.61895 11.5574 8.0937 11.5466 8.39316 11.8328L10.6223 13.963L15.6073 9.20734C15.907 8.92142 16.3817 8.93259 16.6677 9.2323Z" fill="#03A803"/>
</svg>
`;
  return <SvgXml xml={xml} width="24px" height="24px" />;
};
