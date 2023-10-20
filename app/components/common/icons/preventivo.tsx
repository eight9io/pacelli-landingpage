import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Preventivo(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 64 64">
      <title>Preventivo</title>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="calendar-day 1" clipPath="url(#clip0_833_3787)">
          <path
            id="Vector"
            d="M21.3333 32H16C13.0587 32 10.6667 34.392 10.6667 37.3333V42.6667C10.6667 45.608 13.0587 48 16 48H21.3333C24.2747 48 26.6667 45.608 26.6667 42.6667V37.3333C26.6667 34.392 24.2747 32 21.3333 32ZM16 42.6667V37.3333H21.3333V42.6667H16ZM50.6667 5.33333H48V2.66667C48 1.19467 46.808 0 45.3333 0C43.8587 0 42.6667 1.19467 42.6667 2.66667V5.33333H21.3333V2.66667C21.3333 1.19467 20.1413 0 18.6667 0C17.192 0 16 1.19467 16 2.66667V5.33333H13.3333C5.98133 5.33333 0 11.3147 0 18.6667V50.6667C0 58.0187 5.98133 64 13.3333 64H50.6667C58.0187 64 64 58.0187 64 50.6667V18.6667C64 11.3147 58.0187 5.33333 50.6667 5.33333ZM13.3333 10.6667H50.6667C55.0773 10.6667 58.6667 14.256 58.6667 18.6667V21.3333H5.33333V18.6667C5.33333 14.256 8.92267 10.6667 13.3333 10.6667ZM50.6667 58.6667H13.3333C8.92267 58.6667 5.33333 55.0773 5.33333 50.6667V26.6667H58.6667V50.6667C58.6667 55.0773 55.0773 58.6667 50.6667 58.6667Z"
            fill="#03554D"
          />
        </g>
        <defs>
          <clipPath id="clip0_833_3787">
            <rect width="64" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </BaseIcon>
  );
}
