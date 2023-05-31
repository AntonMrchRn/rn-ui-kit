import { FC } from 'react';
import { ToastOptions } from './Toast';
export type ToastType = {
    show: (options: ToastOptions) => void;
};
export declare const useToast: () => {
    show: (options: ToastOptions) => void;
};
type ToastProviderProps = {
    children: JSX.Element | JSX.Element[];
};
export declare const ToastProvider: FC<ToastProviderProps>;
export {};
//# sourceMappingURL=ToastProvider.d.ts.map