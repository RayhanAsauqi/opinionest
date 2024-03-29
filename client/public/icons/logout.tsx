import { ComponentProps } from "react";

export default function Logout(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M10 12H20M20 12L17 9M20 12L17 15"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4M12 20C10.8006 20.0011 9.61633 19.7319 8.53518 19.2126C7.45404 18.6932 6.50379 17.937 5.755 17"
        stroke="black"
        stroke-linecap="round"
      />
    </svg>
  );
}
