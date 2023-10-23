import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ThreeD(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 64 64">
      <title>3D</title>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.6699 4.81078C31.4806 4.33391 32.486 4.33391 33.2967 4.81078L55.0567 17.6108C55.8479 18.0762 56.3338 18.9256 56.3338 19.8436V44.8036C56.3338 45.7421 55.8262 46.6071 55.007 47.0649L33.247 59.2249C32.4617 59.6638 31.5049 59.6638 30.7196 59.2249L8.9596 47.0649C8.14037 46.6071 7.63281 45.7421 7.63281 44.8036V19.8436C7.63281 18.9256 8.11863 18.0762 8.90987 17.6108L30.6699 4.81078ZM12.8138 24.2587V43.2837L29.3928 52.5485V33.5235L12.8138 24.2587ZM34.5738 33.5235V52.5485L51.1528 43.2837V24.2587L34.5738 33.5235ZM48.5361 19.786L31.9833 29.0361L15.4305 19.786L31.9833 10.049L48.5361 19.786Z"
          fill="#03554D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.8359 3.84048C48.8359 2.4098 49.9957 1.25 51.4264 1.25H59.1064C60.5371 1.25 61.6969 2.4098 61.6969 3.84048V11.5205C61.6969 12.9512 60.5371 14.111 59.1064 14.111C57.6757 14.111 56.5159 12.9512 56.5159 11.5205V6.43095H51.4264C49.9957 6.43095 48.8359 5.27116 48.8359 3.84048Z"
          fill="#03554D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.8561 14.1094C3.42542 14.1094 2.26562 12.9496 2.26562 11.5189L2.26562 3.8389C2.26562 2.40822 3.42542 1.24842 4.8561 1.24842L12.5361 1.24842C13.9668 1.24842 15.1266 2.40822 15.1266 3.8389C15.1266 5.26958 13.9668 6.42937 12.5361 6.42937L7.44658 6.42937L7.44658 11.5189C7.44658 12.9496 6.28678 14.1094 4.8561 14.1094Z"
          fill="#03554D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.1048 49.8945C60.5355 49.8945 61.6953 51.0543 61.6953 52.485L61.6953 60.165C61.6953 61.5957 60.5355 62.7555 59.1048 62.7555L51.4248 62.7555C49.9942 62.7555 48.8344 61.5957 48.8344 60.165C48.8344 58.7343 49.9942 57.5745 51.4248 57.5745L56.5144 57.5745L56.5144 52.485C56.5144 51.0543 57.6742 49.8945 59.1048 49.8945Z"
          fill="#03554D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.125 60.1634C15.125 61.5941 13.9652 62.7539 12.5345 62.7539L4.85452 62.7539C3.42384 62.7539 2.26405 61.5941 2.26405 60.1634L2.26405 52.4834C2.26405 51.0527 3.42384 49.893 4.85452 49.893C6.28521 49.893 7.445 51.0527 7.445 52.4834L7.445 57.573L12.5345 57.573C13.9652 57.573 15.125 58.7327 15.125 60.1634Z"
          fill="#03554D"
        />
      </svg>
    </BaseIcon>
  );
}
