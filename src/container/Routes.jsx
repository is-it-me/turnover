import { useRoutes } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import { VerifyEmailForm } from "./VerifyEmailForm";
import { LoginForm } from "./LoginForm";
import { InterestForm } from "./InterestForm";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

const publicRoutes = [
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/verify",
    element: <VerifyEmailForm />,
  },
  {
    path: "/",
    element: <LoginForm />,
  },
];

const protectedRoutes = [
  {
    path: "/interests/:pageNo",
    element: <InterestForm />,
  },
];

const Routes = () => {
  const { isLoginState } = useContext(LoginContext);
  const allRoutes = useRoutes(isLoginState ? protectedRoutes : publicRoutes);
  return allRoutes;
};

export default Routes;
