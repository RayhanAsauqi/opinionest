import { ComponentProps } from "react";

export default function Arrow(props: ComponentProps<"svg">) {
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
        d="M18.3638 5.63606H7.75725V7.1316L15.8024 7.1369L5.1056 17.8337L6.16626 18.8943L16.863 8.19756L16.8683 16.2427H18.3638V5.63606Z"
        fill="black"
      />
    </svg>
  );
}
