import { ComponentProps } from "react";

export default function Like(props: ComponentProps<"svg">) {
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
        d="M6.13974 10.8501L6.62616 10.8084C6.61495 10.6833 6.55598 10.5673 6.46152 10.4846C6.36705 10.4019 6.24434 10.3587 6.11888 10.364C5.99341 10.3694 5.87483 10.4229 5.78777 10.5134C5.70071 10.6039 5.65186 10.7245 5.65137 10.8501H6.13974ZM17.3632 12.0371L16.9035 14.6939L17.8665 14.8606L18.3256 12.2038L17.3632 12.0371ZM12.8109 18.0233H9.78364V19H12.8109V18.0233ZM9.19043 17.4782L8.66169 11.3619L7.6882 11.4459L8.2176 17.5622L9.19043 17.4782ZM16.9035 14.6939C16.5733 16.6018 14.8529 18.0233 12.8109 18.0233V19C15.3022 19 17.4511 17.262 17.8665 14.8606L16.9035 14.6939ZM12.8174 7.50699L12.3857 10.1409L13.3494 10.2985L13.7811 7.66522L12.8174 7.50699ZM8.86681 10.8579L9.80383 10.0504L9.16569 9.3107L8.22997 10.1181L8.86681 10.8579ZM11.5079 7.42364L11.8179 6.2294L10.8724 5.98457L10.5624 7.17815L11.5079 7.42364ZM12.2854 5.99499L12.3798 6.02559L12.6787 5.09573L12.5843 5.06513L12.2854 5.99499ZM11.0384 8.62438C11.2418 8.2441 11.3994 7.84103 11.5079 7.42364L10.5624 7.17815C10.4734 7.52108 10.344 7.85223 10.1769 8.16466L11.0384 8.62438ZM12.3798 6.02559C12.4727 6.05375 12.557 6.10492 12.6249 6.17436C12.6927 6.24381 12.7419 6.32926 12.7679 6.4228L13.7134 6.17796C13.6461 5.92499 13.516 5.69313 13.3351 5.50392C13.1542 5.31471 12.9284 5.1743 12.6787 5.09573L12.3798 6.02559ZM11.8179 6.2294C11.8309 6.1825 11.8539 6.13899 11.8854 6.10188C11.9169 6.06477 11.956 6.03496 12.0002 6.01452L11.5763 5.1348C11.2299 5.3015 10.9694 5.61015 10.8724 5.98457L11.8179 6.2294ZM12.0002 6.01452C12.0893 5.97196 12.1913 5.96497 12.2854 5.99499L12.5843 5.06513C12.2518 4.95854 11.891 4.98348 11.5763 5.1348L12.0002 6.01452ZM13.4028 11.3384H16.7758V10.3617H13.4028V11.3384ZM7.25909 18.1248L6.62616 10.8084L5.65332 10.8924L6.28495 18.2088L7.25909 18.1248ZM6.62811 18.1945V10.8501H5.65137V18.1945H6.62811ZM6.28495 18.2088C6.28296 18.1852 6.28657 18.1614 6.29428 18.1389C6.30199 18.1164 6.31429 18.0958 6.3304 18.0784C6.3465 18.0609 6.36606 18.047 6.38783 18.0375C6.4096 18.028 6.43311 18.0232 6.45685 18.0233V19C6.9296 19 7.29946 18.595 7.25909 18.1248L6.28495 18.2088ZM13.7811 7.66522C13.8623 7.17016 13.8393 6.66359 13.7134 6.17796L12.7679 6.42345C12.8597 6.77724 12.8765 7.1463 12.8174 7.50699L13.7811 7.66522ZM9.78364 18.0233C9.63453 18.023 9.49093 17.9669 9.38113 17.866C9.27133 17.7651 9.20329 17.6268 9.19043 17.4782L8.2176 17.5622C8.25148 17.9543 8.4311 18.3195 8.72101 18.5857C9.01093 18.8518 9.39008 18.9997 9.78364 19V18.0233ZM9.80383 10.0504C10.2466 9.66884 10.7233 9.21498 11.0391 8.62438L10.1769 8.16466C9.95164 8.58726 9.59285 8.94345 9.16569 9.3107L9.80383 10.0504ZM18.3256 12.2038C18.3648 11.9779 18.3541 11.7461 18.2943 11.5247C18.2345 11.3033 18.127 11.0976 17.9794 10.9221C17.8317 10.7466 17.6475 10.6055 17.4396 10.5087C17.2317 10.4119 17.0052 10.3617 16.7758 10.3617V11.3384C17.145 11.3384 17.427 11.6718 17.3632 12.0371L18.3256 12.2038ZM6.45685 18.0233C6.55192 18.0233 6.62811 18.1001 6.62811 18.1945H5.65137C5.65137 18.6386 6.01146 19 6.45685 19V18.0233ZM12.3857 10.1409C12.3614 10.2885 12.3695 10.4395 12.4095 10.5836C12.4494 10.7277 12.5202 10.8614 12.617 10.9754C12.7137 11.0894 12.8342 11.1809 12.9699 11.2437C13.1055 11.3065 13.2533 11.3384 13.4028 11.3384V10.3617C13.3949 10.3617 13.387 10.3607 13.3798 10.3573C13.3726 10.354 13.3662 10.3491 13.3611 10.343C13.356 10.3369 13.3523 10.3297 13.3503 10.3221C13.3483 10.3144 13.348 10.3063 13.3494 10.2985L12.3857 10.1409ZM8.66169 11.3619C8.65364 11.2676 8.66745 11.1727 8.70322 11.0851C8.73899 10.9975 8.79506 10.9196 8.86681 10.8579L8.22867 10.1175C8.03984 10.2803 7.89238 10.4856 7.79842 10.7166C7.70445 10.9475 7.66668 11.1975 7.6882 11.4459L8.66169 11.3619Z"
        fill="currentColor"
      />
    </svg>
  );
}