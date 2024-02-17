import { NavItem } from './NavItem';

const navItems = [
  {label: 'Главная', link: '/'},
  {label: 'Дрифт-такси', link: '/drift'},
  {label: 'Time Attack', link: '/timeattack'},
  {label: 'Forza Karting', link: '/forza'}
];

export const Menu = () => {
  return (
    <nav className="menu">
      {navItems.map(({label, link}) => (
        <NavItem key={label} link={link} label={label} />
      ))}
    </nav>
  )
}
