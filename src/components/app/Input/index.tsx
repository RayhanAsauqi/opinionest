import React from "react";

function Input(props: {
  placeholder: string;
  type: string;
  className: string;
}) {
  return (
    <>
      <form>
         <label htmlFor="default-search" className="mb-2 text-sm font-medium">
          Search
        </label>
        <div className="py-4 ">
          <div className="relative ">
            <input
              type={props.type}
              id="default-search"
              className={props.className}
              placeholder={props.placeholder}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Input;
