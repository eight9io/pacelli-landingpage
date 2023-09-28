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
      <g id="Icon">
        <path
          id="f"
          d="M11.4758 8.85567L11.8904 6.22137H9.29681V4.51263C9.29681 3.79177 9.65844 3.08868 10.8201 3.08868H12V0.845962C12 0.845962 10.9297 0.667969 9.90684 0.667969C7.76989 0.667969 6.37444 1.92993 6.37444 4.2136V6.22137H4V8.85567H6.37444V15.2243C6.85114 15.2973 7.33882 15.3346 7.83563 15.3346C8.33243 15.3346 8.82011 15.2973 9.29681 15.2243V8.85567H11.4758Z"
          stroke="currentColor"
        />
      </g>
    </BaseIcon>
  );
};

export default Icon;
