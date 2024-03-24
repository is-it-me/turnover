/* eslint-disable react/prop-types */

const CustomLink = ({type, text}) => {
  return (
    <div style={{paddingLeft: "10px", paddingRight: "10px", fontWeight: {type}}}><p>{text}</p></div>
  )
}

export default CustomLink