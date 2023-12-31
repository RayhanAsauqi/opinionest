import { ComponentProps } from "react";

export default function Secure(props: ComponentProps<"svg">) {
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
        d="M15.9998 15.2702C14.8855 15.2702 14.1427 16.0131 14.1427 17.1273C14.1427 17.8702 14.6998 18.4273 15.257 18.6131L14.6998 21.2131H17.1141L16.557 18.6131C17.2998 18.4273 17.6712 17.8702 17.6712 17.1273C17.857 16.0131 17.1141 15.2702 15.9998 15.2702ZM16.1855 7.28448C14.8855 7.28448 13.5855 8.21305 13.5855 9.51305V12.2988H18.5998V9.51305C18.4141 8.21305 17.4855 7.28448 16.1855 7.28448ZM15.9998 1.15591L2.99982 6.72734V12.2988C3.18553 20.4702 8.38553 27.7131 15.9998 30.6845C23.6141 27.7131 28.8141 20.4702 28.9998 12.2988V6.72734L15.9998 1.15591ZM23.4284 21.5845C23.4284 22.6988 22.6855 23.4416 21.5712 23.4416H10.4284C9.3141 23.4416 8.57125 22.6988 8.57125 21.5845V14.1559C8.57125 13.0416 9.3141 12.2988 10.4284 12.2988H10.9855V9.51305C11.1712 6.91305 13.3998 4.8702 15.9998 4.8702C18.5998 4.8702 20.8284 6.91305 21.0141 9.51305V12.2988H21.5712C22.6855 12.2988 23.4284 13.0416 23.4284 14.1559V21.5845Z"
        fill="white"
      />
    </svg>
  );
}
