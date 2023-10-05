import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function AngleDown(props: IconProps) {
  return (
    <BaseIcon {...props} width="9" height="6" viewBox="0 0 9 6" fill="none">
      <path
        id="Vector"
        d="M0.434142 0.5H8.56588C8.95069 0.5 9.14672 0.971108 8.87082 1.25083L4.80495 5.37302C4.63796 5.54233 4.36206 5.54233 4.195 5.37302L0.129129 1.25083C-0.146696 0.971108 0.0493364 0.5 0.434142 0.5Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}
