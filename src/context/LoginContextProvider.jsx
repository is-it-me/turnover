/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const defaultState = false;

const LoginContextProvider = ({ children }) => {
  const [isLoginState, setIsLoginState] = useState(defaultState);

  return (
    <LoginContext.Provider
      value={{
        isLoginState: isLoginState,
        setIsLoginState: setIsLoginState,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
