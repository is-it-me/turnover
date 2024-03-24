/* eslint-disable react/prop-types */
const CustomInput = ({ label, placeholder, name, id, type, value }) => {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        textAlign: "start",
        width: "-webkit-fill-available",
        paddingBottom: "20px",
      }}
    >
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        style={{
          width: "inherit",
          height: "40px",
          marginTop: "5px",
        }}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
