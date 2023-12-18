import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  const Logout = () => {
    setToken_("");
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = "Bearer" + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      Logout,
    }),
    [token],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
