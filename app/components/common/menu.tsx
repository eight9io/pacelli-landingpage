import clsx from 'clsx';

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = ({className = ''}) => {
  return <ul className={clsx(className)}>Menu</ul>;
};

export default Menu;
