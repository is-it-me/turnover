import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export const LoginForm = () => {
  return (
    <div>
      <h1>Login</h1>
      <br />
      <h3>Welcome back to ECOMMERCE</h3>
      <p>The next gen business marketplace</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <CustomInput
            label={"Email"}
            placeholder="Enter"
            name="email"
            id={"email"}
            type={"email"}
            value=""
          />
          <br />
          <CustomInput
            label={"Password"}
            placeholder="Enter"
            name="password"
            id={"password"}
            type={"password"}
            value=""
          />
          <br />
          <CustomButton type={"submit"} text={"LOGIN"} />
        </form>
      </div>
      <div>
        <p>
          Don{`&#39`}t have an Account?
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
            to="/signup"
          >
            <b>&nbsp;SIGN UP</b>
          </Link>
        </p>
      </div>
    </div>
  );
};
