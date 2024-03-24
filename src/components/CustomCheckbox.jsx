/* eslint-disable react/prop-types */
const CustomCheckbox = ({ text }) => {
  return (
    <div
      style={{
        verticalAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <input style={{ width: "20px", height: "20px" }} type="checkbox" />
      <label style={{ paddingLeft: "20px", verticalAlign: "super" }}>
        {text}
      </label>
      <br />
    </div>
  );
};

export default CustomCheckbox;
