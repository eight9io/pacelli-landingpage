import {createContext, useContext} from 'react';

interface RootContextProps {
  ENV: any;
}
const initContextValue: RootContextProps = {
  ENV: {},
};
export const RootContext = createContext(initContextValue);

export const useRootContext = () => useContext(RootContext);
