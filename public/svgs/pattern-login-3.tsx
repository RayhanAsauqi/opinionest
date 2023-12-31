import { ComponentProps } from "react";

export default function PatternLogin3(props: ComponentProps<"svg">) {
  return (
    <svg
      width="650"
      height="537"
      viewBox="0 0 650 537"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5">
        <g filter="url(#filter0_f_20_688)">
          <circle cx="325" cy="212" r="75" fill="#00A9FF" />
        </g>
        <circle
          cx="325"
          cy="212"
          r="99.75"
          stroke="#144B66"
          stroke-width="0.5"
        />
        <circle
          cx="325"
          cy="212"
          r="124.75"
          stroke="#144B66"
          stroke-width="0.5"
        />
        <circle
          cx="325"
          cy="212"
          r="149.75"
          stroke="#144B66"
          stroke-width="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_20_688"
          x="0"
          y="-113"
          width="650"
          height="650"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="125"
            result="effect1_foregroundBlur_20_688"
          />
        </filter>
      </defs>
    </svg>
  );
}
