/* eslint-disable react/prop-types */
const CustomButton = ({ type, text }) => {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <input
        style={{
          padding: "15px 0",
          borderRadius: "5px",
          width: "inherit",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
        }}
        type={type}
        value={text}
      />
    </div>
  );
};
export default CustomButton;
