import { useRoutes } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import { VerifyEmailForm } from "./VerifyEmailForm";
import { LoginForm } from "./LoginForm";
import { InterestForm } from "./InterestForm";
const Routes = () => {
  const allRoutes = useRoutes([
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
    {
      path: "/interests/:pageNo",
      element: <InterestForm />,
    },
  ]);
  return allRoutes;
};

export default Routes;
