import React from "react";

function DropDown(props: { item: { name: string }[] }) {
  return (
    <div>
      <select className="select select-bordered w-full  focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        {props.item.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
