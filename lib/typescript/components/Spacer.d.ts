import { FC } from 'react';
export type SpaceSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type SpacerProps = {
    size: SpaceSize;
    horizontal?: boolean;
    separator?: 'top' | 'bottom';
    children?: JSX.Element | JSX.Element[];
};
export declare const Spacer: FC<SpacerProps>;
//# sourceMappingURL=Spacer.d.ts.map