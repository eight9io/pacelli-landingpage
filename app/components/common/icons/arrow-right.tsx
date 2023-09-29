import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 24 24">
      <title>ArrowRight</title>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 5L19 12L12 19"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </BaseIcon>
  );
}
