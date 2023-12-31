import { ComponentProps } from "react";

export default function Anonymous(props: ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 3.20001H8L6.4 12.8H25.6L24 3.20001ZM0 16C0 16 3.2 17.6 16 17.6C28.8 17.6 32 16 32 16L25.6 12.8H6.4L0 16ZM12.8 22.4H19.2V24H12.8V22.4Z"
        fill="white"
      />
      <path
        d="M9.6 28.8C12.251 28.8 14.4 26.651 14.4 24C14.4 21.349 12.251 19.2 9.6 19.2C6.94903 19.2 4.8 21.349 4.8 24C4.8 26.651 6.94903 28.8 9.6 28.8Z"
        fill="white"
      />
      <path
        d="M22.4 28.8C25.051 28.8 27.2 26.651 27.2 24C27.2 21.349 25.051 19.2 22.4 19.2C19.749 19.2 17.6 21.349 17.6 24C17.6 26.651 19.749 28.8 22.4 28.8Z"
        fill="white"
      />
    </svg>
  );
}
