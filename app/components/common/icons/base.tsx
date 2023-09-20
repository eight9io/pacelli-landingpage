const IconShellOutline = (props: any) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  );
};

const Icon = ({ children, ...props }: any) => {
  return <IconShellOutline {...props}>{children}</IconShellOutline>;
};

export default Icon;
