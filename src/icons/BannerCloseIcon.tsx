import React, { FC } from 'react';
import SVG, { Path } from 'react-native-svg';

export const BannerCloseIcon: FC<{ color?: string }> = ({
  color = '#707070',
}) => {
  return (
    <SVG width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.745 9.41566 20.7162 6.93859 18.8888 5.11118C17.0614 3.28378 14.5843 2.25496 12 2.25ZM15.5344 14.4656C15.6752 14.6078 15.7542 14.7999 15.7542 15C15.7542 15.2001 15.6752 15.3922 15.5344 15.5344C15.391 15.673 15.1994 15.7505 15 15.7505C14.8006 15.7505 14.609 15.673 14.4656 15.5344L12 13.0594L9.53438 15.5344C9.39102 15.673 9.19942 15.7505 9 15.7505C8.80059 15.7505 8.60898 15.673 8.46563 15.5344C8.32479 15.3922 8.24578 15.2001 8.24578 15C8.24578 14.7999 8.32479 14.6078 8.46563 14.4656L10.9406 12L8.46563 9.53437C8.34603 9.38865 8.28491 9.20366 8.29416 9.01537C8.30341 8.82708 8.38236 8.64896 8.51566 8.51566C8.64896 8.38236 8.82708 8.3034 9.01537 8.29416C9.20366 8.28491 9.38866 8.34603 9.53438 8.46563L12 10.9406L14.4656 8.46563C14.6114 8.34603 14.7963 8.28491 14.9846 8.29416C15.1729 8.3034 15.351 8.38236 15.4843 8.51566C15.6176 8.64896 15.6966 8.82708 15.7058 9.01537C15.7151 9.20366 15.654 9.38865 15.5344 9.53437L13.0594 12L15.5344 14.4656Z"
        fill={color}
      />
    </SVG>
  );
};
