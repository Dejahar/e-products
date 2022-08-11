import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { types } from "../types/types";
import { authReducer } from "./authReducer";

const CartProvider = ({ children }) => {

  const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
      logged: !!user,
      user
    }
  }

  const [authState, dispatch] = useReducer(authReducer, init);

  const login = (email = "", password = "") => {
    const user = {
      email: email,
      password: password,
    };

    localStorage.setItem('user', JSON.stringify(user));

    const action = {
      type: types.login,
      payload: user,
    }
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({
      type: types.logout
    });
  }

  const userLogged = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user
  }

  return (
    <AuthContext.Provider value={{ ...authState, login: login , logout: logout, userLogged: userLogged}}>
      {children}
    </AuthContext.Provider>
  );
};

export default CartProvider;