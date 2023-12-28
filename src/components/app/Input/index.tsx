import React from "react";

function Input(props: {
  placeholder?: string;
  type?: string;
  className?: string;
  labelClassName?: string;
  label?: string;
}) {
  return (
    <>
      <form>
        <div className="py-4 ">
          <div className="relative  ">
            <label htmlFor={props.label} className={props.labelClassName}>{props.label}</label>
            <input
              type={props.type}
              className={props.className}
              placeholder={props.placeholder}
              required
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Input;
