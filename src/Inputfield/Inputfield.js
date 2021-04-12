import React from "react";

function Inputfield({ type, label, placeholder, name, onchange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onchange}
      />
    </div>
  );
}

export default Inputfield;
