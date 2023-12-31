import { ComponentProps } from "react";

export default function ArrowLeft(props: ComponentProps<"svg">) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.1997 6.49981C10.1997 6.61916 10.1523 6.73362 10.0679 6.81801C9.98351 6.9024 9.86905 6.94981 9.74971 6.94981H3.36691L5.86171 9.32581C5.90631 9.36627 5.94234 9.41528 5.96767 9.46992C5.99299 9.52456 6.00708 9.58373 6.00911 9.64392C6.01115 9.70411 6.00108 9.7641 5.9795 9.82032C5.95793 9.87655 5.92529 9.92787 5.88351 9.97125C5.84174 10.0146 5.79168 10.0492 5.73631 10.0729C5.68094 10.0965 5.62138 10.1089 5.56115 10.1091C5.50093 10.1094 5.44127 10.0975 5.38571 10.0743C5.33015 10.051 5.27982 10.0169 5.23771 9.97381L1.93771 6.82381C1.89415 6.78183 1.85951 6.7315 1.83585 6.67584C1.81219 6.62017 1.8 6.5603 1.8 6.49981C1.8 6.43932 1.81219 6.37945 1.83585 6.32378C1.85951 6.26811 1.89415 6.21779 1.93771 6.17581L5.23771 3.02581C5.27982 2.98276 5.33015 2.9486 5.38571 2.92536C5.44127 2.90212 5.50093 2.89027 5.56115 2.89051C5.62138 2.89074 5.68094 2.90307 5.73631 2.92675C5.79168 2.95043 5.84174 2.98498 5.88351 3.02836C5.92529 3.07174 5.95793 3.12307 5.9795 3.1793C6.00108 3.23552 6.01115 3.29551 6.00911 3.3557C6.00708 3.41589 5.99299 3.47506 5.96767 3.5297C5.94234 3.58434 5.90631 3.63335 5.86171 3.67381L3.36691 6.04981H9.74971C9.86905 6.04981 9.98351 6.09722 10.0679 6.18161C10.1523 6.266 10.1997 6.38046 10.1997 6.49981Z"
        fill="currentColor"
      />
    </svg>
  );
}