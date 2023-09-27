import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Car(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 64 64">
      <title>Car</title>
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_833_3795)">
          <path d="M50.6667 13.3346H45.3333V10.668C45.3333 8.54624 44.4905 6.51141 42.9902 5.01111C41.4899 3.51082 39.4551 2.66797 37.3333 2.66797H8C5.87827 2.66797 3.84344 3.51082 2.34315 5.01111C0.842855 6.51141 0 8.54624 0 10.668L0 50.668H5.44267C5.37405 51.1092 5.33751 51.5548 5.33333 52.0013C5.33333 54.4767 6.31666 56.8506 8.067 58.601C9.81734 60.3513 12.1913 61.3346 14.6667 61.3346C17.142 61.3346 19.516 60.3513 21.2663 58.601C23.0167 56.8506 24 54.4767 24 52.0013C23.9958 51.5548 23.9593 51.1092 23.8907 50.668H40.1093C40.0407 51.1092 40.0042 51.5548 40 52.0013C40 54.4767 40.9833 56.8506 42.7337 58.601C44.484 60.3513 46.858 61.3346 49.3333 61.3346C51.8087 61.3346 54.1827 60.3513 55.933 58.601C57.6833 56.8506 58.6667 54.4767 58.6667 52.0013C58.6625 51.5548 58.6259 51.1092 58.5573 50.668H64V26.668C63.9958 23.133 62.5897 19.7441 60.0901 17.2446C57.5905 14.745 54.2016 13.3389 50.6667 13.3346ZM50.6667 18.668C52.7884 18.668 54.8232 19.5108 56.3235 21.0111C57.8238 22.5114 58.6667 24.5462 58.6667 26.668V29.3346H45.3333V18.668H50.6667ZM18.6667 52.0013C18.6667 53.0622 18.2452 54.0796 17.4951 54.8297C16.7449 55.5799 15.7275 56.0013 14.6667 56.0013C13.6058 56.0013 12.5884 55.5799 11.8382 54.8297C11.0881 54.0796 10.6667 53.0622 10.6667 52.0013C10.6683 51.5455 10.7523 51.0938 10.9147 50.668H18.4187C18.581 51.0938 18.665 51.5455 18.6667 52.0013ZM40 45.3346H5.33333V10.668C5.33333 9.96072 5.61428 9.28245 6.11438 8.78235C6.61448 8.28225 7.29276 8.0013 8 8.0013H37.3333C38.0406 8.0013 38.7189 8.28225 39.219 8.78235C39.719 9.28245 40 9.96072 40 10.668V45.3346ZM53.3333 52.0013C53.3333 53.0622 52.9119 54.0796 52.1618 54.8297C51.4116 55.5799 50.3942 56.0013 49.3333 56.0013C48.2725 56.0013 47.2551 55.5799 46.5049 54.8297C45.7548 54.0796 45.3333 53.0622 45.3333 52.0013C45.3345 51.5455 45.4185 51.0937 45.5813 50.668H53.0853C53.2481 51.0937 53.3322 51.5455 53.3333 52.0013ZM45.3333 45.3346V34.668H58.6667V45.3346H45.3333Z" fill="#03554D" />
        </g>
        <defs>
          <clipPath id="clip0_833_3795">
            <rect width="64" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>



    </BaseIcon>
  );
}
