import BaseIcon from './base';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Search(props: IconProps) {
  return (
    <BaseIcon {...props} viewBox="0 0 24 24">
      <title>Search</title>
      <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
    </BaseIcon>
  );
}
