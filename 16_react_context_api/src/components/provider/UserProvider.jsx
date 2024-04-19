import { useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function UserProvider({ children }) {
  const [name, setName] = useState('ddayo');

  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>;
}
