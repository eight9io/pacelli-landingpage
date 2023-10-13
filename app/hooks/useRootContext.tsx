import {createContext, useContext} from 'react';

export const RootContext = createContext({
  ENV: {},
});

export const useRootContext = () => useContext(RootContext);
