import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CustomPaginationPage = ({ text, isActive, disabled, to }) => {
  return (
    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
      <Link
        to={`/interests/${to}`}
        style={{
          textDecoration: "none",
          color: !isActive || disabled ? "#999" : "black",
          pointerEvents: disabled ? "none" : "",
        }}
      >
        {text}
      </Link>
    </div>
  );
};

export default CustomPaginationPage;

CustomPaginationPage.defaultProps = {
  to: "",
  isActive: false,
  disabled: false,
  onClick: () => {},
};
