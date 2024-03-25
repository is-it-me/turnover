import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const handleAccountCreate = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Create Your Account</h1>
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
          onSubmit={handleAccountCreate}
        >
          <CustomInput
            label={"Name"}
            placeholder="Enter"
            name="name"
            id={"name"}
            type={"text"}
            value=""
          />
          <br />
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
          <CustomButton type={"submit"} text={"CREATE ACCOUNT"} />
        </form>
      </div>
      <div>
        <p>
          Have an Account?{" "}
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
            to="/"
          >
            <b>LOGIN</b>
          </Link>
        </p>
      </div>
    </div>
  );
};
