import { FC } from 'react';
import { Colors } from './palette';
export declare const useTheme: () => Colors;
export type ThemeProviderProps = {
    children: JSX.Element | JSX.Element[];
    /**
     * Принимает в себя обьект, с помощью которого можно переназначить определенные заданные цвета в палетке своими
     *
     */
    theme?: Colors;
};
export declare const ThemeProvider: FC<ThemeProviderProps>;
//# sourceMappingURL=ThemeProvider.d.ts.map