/* eslint-disable prettier/prettier */
import React, {useState, createContext} from 'react';
export const OnboardingContext = createContext(null);
const {Provider} = OnboardingContext;

const OnboardingProvider = ({children}) => {
  const [userData, setUserData] = useState({});
  return <Provider value={{userData, setUserData}}>{children}</Provider>;
};

export default OnboardingProvider;
