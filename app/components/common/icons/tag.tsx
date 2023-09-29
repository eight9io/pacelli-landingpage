import clsx from 'clsx';
import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Icon: React.FC<IconProps> = ({className = '', ...props}) => {
  return (
    <BaseIcon
      width="16"
      height="16"
      className={clsx(className)}
      viewBox="0 0 16 16"
      {...props}
    >
      <g id="tags 1">
        <path
          id="Vector"
          d="M5.13557 6.17118C5.39623 6.43184 5.39623 6.85384 5.13557 7.11384C4.8749 7.37451 4.4529 7.37451 4.1929 7.11384C3.93223 6.85318 3.93223 6.43118 4.1929 6.17118C4.45357 5.91051 4.87557 5.91051 5.13557 6.17118ZM14.3702 10.2278L13.9936 10.6045C13.9756 11.4265 13.6569 12.2425 13.0369 12.8705L10.9256 15.0092C10.2969 15.6458 9.45823 15.9978 8.56357 16.0005H8.55223C7.66223 16.0005 6.82557 15.6538 6.19623 15.0245L1.25223 10.1225C0.8189 9.68984 0.609566 9.09451 0.676233 8.48718L1.18623 3.87651C1.22023 3.57251 1.45557 3.33051 1.75823 3.28918L6.3509 2.66118C6.97223 2.57851 7.59757 2.78984 8.03623 3.22851L13.0196 8.16984C13.2776 8.42785 13.4842 8.71851 13.6402 9.02851C14.1816 8.25118 14.1056 7.16518 13.4122 6.47184L8.35157 1.53518C8.1989 1.38251 7.98823 1.31184 7.78423 1.34051L3.19157 1.96851C2.82557 2.01784 2.49023 1.76251 2.44023 1.39851C2.3909 1.03384 2.64623 0.697844 3.01023 0.647844L7.60357 0.0191778C8.21757 -0.0681556 8.84957 0.146511 9.2889 0.587178L14.3482 5.52384C15.6456 6.82051 15.6529 8.92851 14.3696 10.2285L14.3702 10.2278ZM12.0782 9.11451L7.0949 4.17318C6.94623 4.02451 6.73757 3.95584 6.53023 3.98184L2.45357 4.53984L2.0009 8.63318C1.9789 8.83518 2.04823 9.03384 2.19223 9.17718L7.13623 14.0792C7.51557 14.4592 8.01757 14.6665 8.55157 14.6665H8.55823C9.09557 14.6652 9.5989 14.4538 9.97557 14.0712L12.0869 11.9325C12.8569 11.1525 12.8529 9.88784 12.0776 9.11318L12.0782 9.11451Z"
          fill="currentColor"
        />
      </g>
    </BaseIcon>
  );
};

export default Icon;