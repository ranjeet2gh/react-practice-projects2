import React from "react";
import "./labeledInput.css"

const InputFieldWithLabel = ({label}) => {
  return (
    <div className="position-relative mb-3 w-100 pe-5">
      <label htmlFor="inputField" className="custom-label">
        {label}
      </label>
      <input type="text" className="form-control" id="inputField" />
    </div>
  );
};

export default InputFieldWithLabel;
