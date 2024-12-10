import React from "react";

function InputField({ label, placeholder }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <>
      <label
        htmlFor={id}
        className="mt-1 text-xl"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="self-center px-2 py-1 mt-9 bg-white rounded-3xl border border-black border-solid "
        placeholder={placeholder}
      />
    </>
  );
}

export default InputField;
