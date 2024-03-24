import { nanoid } from "nanoid";
import CustomButton from "../components/CustomButton";
import CustomOneDigitInput from "../components/CustomOneDigitInput";

export const VerifyEmailForm = () => {
  return (
    <div>
      <h1>Verify your email</h1>
      <p>
        Enter the 8 digit code you have received on <br />
        anu***@gmail.com
      </p>
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
          <div
            style={{
              display: "flex",
            }}
          >
            {new Array(8).fill(0).map((a, _i) => (
              <div key={nanoid()}>
                <CustomOneDigitInput name={"pin[" + _i + "]"} />
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <CustomButton type={"submit"} text={"VERIFY"} />
        </form>
      </div>
      <br />
    </div>
  );
};
