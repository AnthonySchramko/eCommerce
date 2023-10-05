import React from "react";

const Selling = ({ img, text, selling }) => {
  return (
    <div>
      <h3>{selling}</h3>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Selling;
