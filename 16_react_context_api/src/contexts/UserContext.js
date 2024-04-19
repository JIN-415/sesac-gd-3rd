import { createContext } from 'react';

const defaultUser = {
  name: 'ddayo',
  setName: () => {},
};

export const UserContext = createContext(defaultUser);
