import React, { FC, createContext, useContext, useState } from 'react';
import { Toast, ToastOptions } from './Toast';

export type ToastType = {
  show: (options: ToastOptions) => void;
};

const ToastContext = createContext<{ show: (options: ToastOptions) => void }>(
  {} as ToastType
);
ToastContext.displayName = 'ToastContext';

export const useToast = () => useContext(ToastContext);
type ToastProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [state, setState] = useState<ToastOptions>();
  const show = (options: ToastOptions) => {
    setState(options);
  };
  const onDestroy = () => {
    setState(undefined);
  };
  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {state && <Toast onDestroy={onDestroy} {...state} />}
    </ToastContext.Provider>
  );
};
