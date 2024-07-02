import { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  console.log(authUser, 'user');

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
  };

  sessionStorage.setItem("authUser", token);

  useEffect(() => {}, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth, AuthContext };
