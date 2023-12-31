import { ComponentProps } from "react";

export default function IconInbox(props: ComponentProps<"svg">) {
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
        d="M2 13H5.16C6.065 13 6.518 13 6.916 13.183C7.314 13.366 7.608 13.71 8.197 14.397L8.803 15.103C9.392 15.79 9.686 16.134 10.084 16.317C10.482 16.5 10.934 16.5 11.84 16.5H12.16C13.065 16.5 13.518 16.5 13.916 16.317C14.314 16.134 14.608 15.79 15.197 15.103L15.803 14.397C16.392 13.71 16.686 13.366 17.084 13.183C17.482 13 17.934 13 18.84 13H22"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C21.509 4.438 21.835 5.807 21.945 8"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
