import { ComponentProps } from "react";

export default function SlideLeft(props: ComponentProps<"svg">) {
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
        d="M11.4659 7.72185L8.09893 11.0888C7.97841 11.2091 7.8828 11.352 7.81757 11.5092C7.75233 11.6665 7.71875 11.8351 7.71875 12.0053C7.71875 12.1756 7.75233 12.3442 7.81757 12.5015C7.8828 12.6587 7.97841 12.8016 8.09893 12.9218L11.4659 16.2888C12.2849 17.1078 13.6889 16.5228 13.6889 15.3658V8.63185C13.6889 7.47485 12.2849 6.90285 11.4659 7.72185Z"
        fill="currentColor"
      />
    </svg>
  );
}
