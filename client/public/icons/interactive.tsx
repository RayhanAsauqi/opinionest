import { ComponentProps } from "react";

export default function Interactive(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M13.3334 12C13.3334 11.6464 13.4738 11.3072 13.7239 11.0572C13.9739 10.8071 14.3131 10.6667 14.6667 10.6667C15.0203 10.6667 15.3594 10.8071 15.6095 11.0572C15.8595 11.3072 16 11.6464 16 12V17.96L17.6134 18.1333L24.2 21.0533C24.9067 21.3733 25.3334 22.08 25.3334 22.8533V28.6667C25.2934 29.76 24.4267 30.6267 23.3334 30.6667H14.6667C14.16 30.6667 13.68 30.4667 13.3334 30.0933L6.80002 24.4933L7.78669 23.4667C8.04002 23.1867 8.40002 23.04 8.77335 23.04H9.06669L13.3334 25.3333V12ZM14.6667 6.66667C16.0812 6.66667 17.4377 7.22857 18.4379 8.22876C19.4381 9.22896 20 10.5855 20 12C20 14 18.9334 15.6933 17.3334 16.6133V14.9867C18.1467 14.2533 18.6667 13.1867 18.6667 12C18.6667 10.9391 18.2453 9.92172 17.4951 9.17157C16.745 8.42143 15.7276 8 14.6667 8C13.6058 8 12.5884 8.42143 11.8383 9.17157C11.0881 9.92172 10.6667 10.9391 10.6667 12C10.6667 13.1867 11.1867 14.2533 12 14.9867V16.6133C10.4 15.6933 9.33335 14 9.33335 12C9.33335 10.5855 9.89526 9.22896 10.8955 8.22876C11.8956 7.22857 13.2522 6.66667 14.6667 6.66667ZM14.6667 4C16.7884 4 18.8232 4.84285 20.3235 6.34315C21.8238 7.84344 22.6667 9.87827 22.6667 12C22.6667 14.2667 21.72 16.3067 20.2134 17.7733L18.88 17.1733C19.6462 16.5462 20.2637 15.7569 20.6879 14.8623C21.1121 13.9677 21.3326 12.9901 21.3334 12C21.3334 10.2319 20.631 8.5362 19.3807 7.28595C18.1305 6.03571 16.4348 5.33333 14.6667 5.33333C12.8986 5.33333 11.2029 6.03571 9.95264 7.28595C8.7024 8.5362 8.00002 10.2319 8.00002 12C8.00002 14.7333 9.64002 17.08 12 18.1067V19.5467C8.89335 18.44 6.66669 15.48 6.66669 12C6.66669 9.87827 7.50954 7.84344 9.00983 6.34315C10.5101 4.84285 12.545 4 14.6667 4Z"
        fill="white"
      />
    </svg>
  );
}