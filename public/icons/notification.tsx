import { ComponentProps } from "react";

export default function Notification(props: ComponentProps<"svg">) {
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        stroke="#DB0000"
        stroke-width="1.5"
      />
      <path
        d="M7 14H16M7 17.5H13M2 12C2 16.714 2 19.071 3.464 20.535C4.93 22 7.286 22 12 22C16.714 22 19.071 22 20.535 20.535C22 19.072 22 16.714 22 12V10.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464C2.491 4.438 2.164 5.807 2.055 8"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
